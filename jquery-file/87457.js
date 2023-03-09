/*! License information is available at https://static.cdn.printful.com/dist-pf/87457.licenses.txt if third party dependencies are included */
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [87457], {
        83271: (t, e, i) => {
            "use strict";
            i.d(e, {
                T: () => a
            });
            var n = i(85012);

            function r(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }
            const o = "collections_category_history";
            let a = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, i, a;
                return e = t, a = [{
                    key: "track",
                    value: function(t) {
                        if (116 !== t.id && 116 !== t.parentId) return;
                        let e = n.o.get(o);
                        e = e ? JSON.parse(e) : [], e.push(t.id), e = [...new Set(e)], n.o.set(o, JSON.stringify(e), 1)
                    }
                }, {
                    key: "getCategories",
                    value: function() {
                        const t = n.o.get(o);
                        return t ? JSON.parse(t) : []
                    }
                }, {
                    key: "orderDataLayer",
                    value: function(t) {
                        var e, i;
                        if (null === (e = t.products) || void 0 === e || !e.length || null === (i = t.categories) || void 0 === i || !i.length) return;
                        const {
                            categories: n,
                            currency: r,
                            order_id: o,
                            order_quantity: a,
                            products: s,
                            value: l,
                            line_items: c
                        } = t;
                        window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                            eventCategory: "ProductCategoryPerformance",
                            eventAction: "Order: " + s.join(", "),
                            eventLabel: n.join(", "),
                            currency: r,
                            order_id: o,
                            order_quantity: a,
                            products: s,
                            value: l,
                            line_items: c
                        })
                    }
                }, {
                    key: "pushDataLayer",
                    value: function(t) {
                        if (this.getCategories()) {
                            const e = _.intersection(t.catalogCategoryIds, this.getCategories());
                            if (e.length) {
                                const i = [];
                                for (const n of e) i.push(t.catalogCategoryNames[n]);
                                window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                    eventCategory: "ProductCategoryPerformance",
                                    eventAction: "Push: " + (t.customTitle || t.displayName),
                                    eventLabel: i.join(", ")
                                })
                            }
                        }
                    }
                }], (i = null) && r(e.prototype, i), a && r(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        14040: (t, e, i) => {
            "use strict";
            i.d(e, {
                G: () => l
            });
            var n = i(96486),
                r = i.n(n);
            const o = {};
            let a = null;

            function s() {
                for (const t in o) o[t]()
            }
            const l = {
                init() {
                    if (a) return;
                    const t = document.body;
                    a = new MutationObserver(r().debounce(s, 250)), a.observe(t, {
                        childList: !0,
                        subtree: !0
                    })
                },
                register(t, e) {
                    o[t] = e
                },
                unregister(t) {
                    delete o[t]
                }
            }
        },
        66683: (t, e, i) => {
            "use strict";
            i.d(e, {
                J: () => k,
                f: () => C
            });
            var n = i(25046),
                r = i(61169),
                o = i(70538),
                a = i(12954);

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function c(t, e, i) {
                return e && l(t.prototype, e), i && l(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
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
                    var i, n = f(t);
                    if (e) {
                        var r = f(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return p(this, i)
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

            function g(t, e, i) {
                v(t, e), e.set(t, i)
            }

            function v(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function m(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, y(t, e, "get"))
            }

            function _(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, y(t, e, "set"), i), i
            }

            function y(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var b = new WeakMap,
                w = new WeakMap,
                P = new WeakSet;
            let C = function(t) {
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
                    }), e && d(t, e)
                }(i, t);
                var e = u(i);

                function i(t) {
                    var n, r, o;
                    return s(this, i), n = e.call(this), v(r = h(n), o = P), o.add(r), g(h(n), b, {
                            writable: !0,
                            value: void 0
                        }), g(h(n), w, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div"), _(h(n), b, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(h(n), P, T).call(h(n)), n
                }
                return c(i, [{
                    key: "destroy",
                    value: function() {
                        m(this, w).destroy(), _(this, w, null)
                    }
                }, {
                    key: "setNewSearchedProps",
                    value: function(t, e) {
                        m(this, w).setDataProp("items", t), m(this, w).setDataProp("showCtaButton", e)
                    }
                }, {
                    key: "setActiveItems",
                    value: function(t) {
                        m(this, w).setDataProp("activeItems", t)
                    }
                }]), i
            }(r.p);
            async function T() {
                o.default.use(a.ZP);
                const t = new n.L;
                t.components = {
                    "dropdown-input": () => Promise.all([i.e(33348), i.e(17609)]).then(i.bind(i, 33348))
                }, t.template = '\n            <dropdown-input\n                :items="items"\n                :placeholder="placeholder"\n                :hasInlineSearch="hasInlineSearch"\n                :inlineSearchPlaceholder="inlineSearchPlaceholder"\n                :isMultiselectable="isMultiselectable"\n                :showTags="showTags"\n                :activeItems="activeItems"\n                :imageWidth="imageWidth"\n                :imageHeight="imageHeight"\n                :inputSearch="inputSearch"\n                :searchPlaceholder="searchPlaceholder"\n                :showCtaButton="showCtaButton"\n                :ctaButtonText="ctaButtonText"\n                :label="label"\n                :labelHelpText="labelHelpText"\n                :infoIcon="infoIcon"\n                :infoIconDelay="infoIconDelay"\n                :infoIconName="infoIconName"\n                :inputSize="inputSize"\n                :isRequired="isRequired"\n                :requiredErrorMessage="requiredErrorMessage"\n                :showValuesInline="showValuesInline"\n                :inlineValuesSeparator="inlineValuesSeparator"\n                :minimumSelectedValues="minimumSelectedValues"\n                :disabled="disabled"\n                :value="value"\n                :openDropdownUp="openDropdownUp"\n                :data-test="dataTest"\n                @onChange="emitEvent(\'onChange\', $event)"\n                @onSearchChange="emitEvent(\'onSearchChange\', $event)"\n                @onCtaButtonClick="emitEvent(\'onCtaButtonClick\', $event)"\n            />\n        ', t.initialData = {
                    items: m(this, b).items,
                    placeholder: m(this, b).placeholder,
                    hasInlineSearch: m(this, b).hasInlineSearch,
                    inlineSearchPlaceholder: m(this, b).inlineSearchPlaceholder,
                    isMultiselectable: m(this, b).isMultiselectable,
                    showTags: m(this, b).showTags,
                    activeItems: m(this, b).activeItems,
                    imageWidth: m(this, b).imageWidth,
                    imageHeight: m(this, b).imageHeight,
                    inputSearch: m(this, b).inputSearch,
                    searchPlaceholder: m(this, b).searchPlaceholder,
                    showCtaButton: m(this, b).showCtaButton,
                    ctaButtonText: m(this, b).ctaButtonText,
                    label: m(this, b).label,
                    labelHelpText: m(this, b).labelHelpText,
                    infoIcon: m(this, b).infoIcon,
                    infoIconDelay: m(this, b).infoIconDelay,
                    infoIconName: m(this, b).infoIconName,
                    inputSize: m(this, b).inputSize,
                    isRequired: m(this, b).isRequired,
                    requiredErrorMessage: m(this, b).requiredErrorMessage,
                    showValuesInline: m(this, b).showValuesInline,
                    inlineValuesSeparator: m(this, b).inlineValuesSeparator,
                    minimumSelectedValues: m(this, b).minimumSelectedValues,
                    disabled: m(this, b).disabled,
                    value: m(this, b).value,
                    openDropdownUp: m(this, b).openDropdownUp,
                    dataTest: m(this, b).dataTest
                }, t.emitEvent = (t, e) => {
                    m(this, b)[t] && m(this, b)[t](e)
                }, _(this, w, new n.Z(t)), m(this, w).append(this.node)
            }
            let k = c((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s(this, t), this.items = e.items || void 0, this.placeholder = e.placeholder || void 0, this.hasInlineSearch = e.hasInlineSearch || void 0, this.inlineSearchPlaceholder = e.inlineSearchPlaceholder || void 0, this.isMultiselectable = e.isMultiselectable || void 0, this.showTags = e.showTags || void 0, this.activeItems = e.activeItems || void 0, this.imageWidth = e.imageWidth || void 0, this.imageHeight = e.imageHeight || void 0, this.inputSearch = e.inputSearch || void 0, this.searchPlaceholder = e.searchPlaceholder || void 0, this.showCtaButton = e.showCtaButton || void 0, this.ctaButtonText = e.ctaButtonText || void 0, this.label = e.label || void 0, this.labelHelpText = e.labelHelpText || void 0, this.infoIcon = e.infoIcon || void 0, this.infoIconDelay = e.infoIconDelay || void 0, this.infoIconName = e.infoIconName || void 0, this.inputSize = e.inputSize || void 0, this.isRequired = e.isRequired || void 0, this.requiredErrorMessage = e.requiredErrorMessage || void 0, this.onChange = e.onChange || void 0, this.onSearchChange = e.onSearchChange || void 0, this.onCtaButtonClick = e.onCtaButtonClick || void 0, this.showValuesInline = e.showValuesInline || void 0, this.inlineValuesSeparator = e.inlineValuesSeparator || void 0, this.minimumSelectedValues = e.minimumSelectedValues || void 0, this.disabled = e.disabled || void 0, this.value = e.value || void 0, this.openDropdownUp = e.openDropdownUp || void 0, this.dataTest = e.dataTest || void 0
            }))
        },
        94673: (t, e, i) => {
            "use strict";
            i.d(e, {
                S: () => k,
                g: () => C
            });
            var n = i(25046),
                r = i(61169),
                o = i(70538),
                a = i(12954);

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function c(t, e, i) {
                return e && l(t.prototype, e), i && l(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
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
                    var i, n = f(t);
                    if (e) {
                        var r = f(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return p(this, i)
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

            function g(t, e, i) {
                v(t, e), e.set(t, i)
            }

            function v(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function m(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, y(t, e, "get"))
            }

            function _(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, y(t, e, "set"), i), i
            }

            function y(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var b = new WeakMap,
                w = new WeakMap,
                P = new WeakSet;
            let C = function(t) {
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
                    }), e && d(t, e)
                }(i, t);
                var e = u(i);

                function i(t) {
                    var n, r, o;
                    return s(this, i), n = e.call(this), v(r = h(n), o = P), o.add(r), g(h(n), b, {
                            writable: !0,
                            value: void 0
                        }), g(h(n), w, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div", "form-input-checkbox-mke"), _(h(n), b, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(h(n), P, T).call(h(n)), n
                }
                return c(i, [{
                    key: "destroy",
                    value: function() {
                        m(this, w).destroy(), _(this, w, null)
                    }
                }]), i
            }(r.p);
            async function T() {
                o.default.use(a.ZP);
                const t = new n.L;
                t.components = {
                    "input-checkbox": () => i.e(98730).then(i.bind(i, 48526))
                }, t.template = '\n            <input-checkbox\n                :name="name"\n                :id="id"\n                :value="value"\n                :label="label"\n                :infoIcon="infoIcon"\n                :infoIconDelay="infoIconDelay"\n                :infoIconName="infoIconName"\n                :isReadOnly="isReadOnly"\n                :tooltip="tooltip"\n                :inputSize="inputSize"\n                :validation="validation"\n                :wrapperClass="wrapperClass"\n                :labelClass="labelClass"\n                :data-test="dataTest"\n                :is-indeterminate="isIndeterminate"\n                @onChange="emitEvent(\'onChange\', $event)"\n                @onValidated="emitEvent(\'onValidated\', $event)"\n            />\n        ', t.initialData = {
                    name: m(this, b).name,
                    id: m(this, b).id,
                    value: m(this, b).value,
                    label: m(this, b).label,
                    infoIcon: m(this, b).infoIcon,
                    infoIconDelay: m(this, b).infoIconDelay,
                    infoIconName: m(this, b).infoIconName,
                    isReadOnly: m(this, b).isReadOnly,
                    tooltip: m(this, b).tooltip,
                    inputSize: m(this, b).inputSize,
                    validation: m(this, b).validation,
                    wrapperClass: m(this, b).wrapperClass,
                    labelClass: m(this, b).labelClass,
                    dataTest: m(this, b).dataTest,
                    isIndeterminate: m(this, b).isIndeterminate
                }, t.emitEvent = (t, e) => {
                    switch (t) {
                        case "onChange":
                            m(this, b).onChange && m(this, b).onChange(e);
                            break;
                        case "onValidated":
                            m(this, b).onValidated && m(this, b).onValidated(e)
                    }
                }, _(this, w, new n.Z(t)), m(this, w).append(this.node)
            }
            let k = c((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s(this, t), this.name = e.name || "default Name", this.id = e.id || void 0, this.value = e.value || !1, this.label = e.label || void 0, this.infoIcon = e.infoIcon || void 0, this.infoIconDelay = e.infoIconDelay || void 0, this.infoIconName = e.infoIconName || void 0, this.isReadOnly = e.isReadOnly || void 0, this.tooltip = e.tooltip || void 0, this.inputSize = e.inputSize || void 0, this.validation = e.validation || void 0, this.wrapperClass = e.wrapperClass || void 0, this.labelClass = e.labelClass || void 0, this.dataTest = e.dataTest || void 0, this.isIndeterminate = e.isIndeterminate || void 0, this.onChange = e.onChange || void 0, this.onValidated = e.onValidated || void 0
            }))
        },
        99988: (t, e, i) => {
            "use strict";
            i.d(e, {
                C: () => C,
                R: () => k
            });
            var n = i(25046),
                r = i(61169),
                o = i(70538),
                a = i(12954);

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function c(t, e, i) {
                return e && l(t.prototype, e), i && l(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
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
                    var i, n = f(t);
                    if (e) {
                        var r = f(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return p(this, i)
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

            function g(t, e, i) {
                v(t, e), e.set(t, i)
            }

            function v(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function m(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, y(t, e, "get"))
            }

            function _(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, y(t, e, "set"), i), i
            }

            function y(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var b = new WeakMap,
                w = new WeakMap,
                P = new WeakSet;
            let C = function(t) {
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
                    }), e && d(t, e)
                }(i, t);
                var e = u(i);

                function i(t) {
                    var n, r, o;
                    return s(this, i), n = e.call(this), v(r = h(n), o = P), o.add(r), g(h(n), b, {
                            writable: !0,
                            value: void 0
                        }), g(h(n), w, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div", "form-input-field-mke " + (null == t ? void 0 : t.containerClassName) || 0), _(h(n), b, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(h(n), P, T).call(h(n)), n
                }
                return c(i, [{
                    key: "destroy",
                    value: function() {
                        m(this, w).destroy(), _(this, w, null)
                    }
                }, {
                    key: "setValue",
                    value: function(t) {
                        m(this, w).setDataProp("value", t)
                    }
                }]), i
            }(r.p);
            async function T() {
                o.default.use(a.ZP);
                const t = new n.L;
                t.components = {
                    "input-field": () => i.e(41833).then(i.bind(i, 15273))
                }, t.template = '\n            <input-field\n                :name="name"\n                :placeholder="placeholder"\n                :id="id"\n                :value="value"\n                :label="label"\n                :type="type"\n                :labelHelpText="labelHelpText"\n                :infoIcon="infoIcon"\n                :infoIconDelay="infoIconDelay"\n                :infoIconName="infoIconName"\n                :isReadOnly="isReadOnly"\n                :tooltip="tooltip"\n                :prefix="prefix"\n                :prefixClass="prefixClass"\n                :suffix="suffix"\n                :suffixClass="suffixClass"\n                :prefixSwitcher="prefixSwitcher"\n                :suffixSwitcher="suffixSwitcher"\n                :className="className"\n                :inputSize="inputSize"\n                :validation="validation"\n                :switcherOptions="switcherOptions"\n                :activeSwitcherOption="activeSwitcherOption"\n                :showClearButton="showClearButton"\n                :autocomplete="autoComplete"\n                :data-test="dataTest"\n                @onChange="emitEvent(\'onChange\', $event)"\n                @onKeyUp="emitEvent(\'onKeyUp\', $event)"\n                @onKeyUpEvent="emitEvent(\'onKeyUpEvent\', $event)"\n                @onFocus="emitEvent(\'onFocus\', $event)"\n                @onBlur="emitEvent(\'onBlur\', $event)"\n                @onSwitcherValueChange="emitEvent(\'onSwitcherValueChange\', $event)"\n                @onValidated="emitEvent(\'onValidated\', $event)"\n            />\n        ', t.initialData = {
                    name: m(this, b).name,
                    placeholder: m(this, b).placeholder,
                    id: m(this, b).id,
                    value: m(this, b).value,
                    label: m(this, b).label,
                    type: m(this, b).type,
                    labelHelpText: m(this, b).labelHelpText,
                    infoIcon: m(this, b).infoIcon,
                    infoIconDelay: m(this, b).infoIconDelay,
                    infoIconName: m(this, b).infoIconName,
                    isReadOnly: m(this, b).isReadOnly,
                    tooltip: m(this, b).tooltip,
                    prefix: m(this, b).prefix,
                    prefixClass: m(this, b).prefixClass,
                    suffix: m(this, b).suffix,
                    suffixClass: m(this, b).suffixClass,
                    prefixSwitcher: m(this, b).prefixSwitcher,
                    suffixSwitcher: m(this, b).suffixSwitcher,
                    className: m(this, b).className,
                    inputSize: m(this, b).inputSize,
                    validation: m(this, b).validation,
                    switcherOptions: m(this, b).switcherOptions,
                    activeSwitcherOption: m(this, b).activeSwitcherOption,
                    showClearButton: m(this, b).showClearButton,
                    autoComplete: m(this, b).autoComplete,
                    dataTest: m(this, b).dataTest
                }, t.emitEvent = (t, e) => {
                    switch (t) {
                        case "onChange":
                            m(this, b).onChange && m(this, b).onChange(e);
                            break;
                        case "onKeyUp":
                            m(this, b).onKeyUp && m(this, b).onKeyUp(e);
                            break;
                        case "onKeyUpEvent":
                            m(this, b).onKeyUpEvent && m(this, b).onKeyUpEvent(e);
                            break;
                        case "onFocus":
                            m(this, b).onFocus && m(this, b).onFocus(e);
                            break;
                        case "onBlur":
                            m(this, b).onBlur && m(this, b).onBlur(e);
                            break;
                        case "onSwitcherValueChange":
                            m(this, b).onSwitcherValueChange && m(this, b).onSwitcherValueChange(e);
                            break;
                        case "onValidated":
                            m(this, b).onValidated && m(this, b).onValidated(e)
                    }
                }, _(this, w, new n.Z(t)), m(this, w).append(this.node)
            }
            let k = c((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s(this, t), this.name = e.name || "default Name", this.placeholder = e.placeholder || void 0, this.id = e.id || void 0, this.value = e.value || void 0, this.label = e.label || void 0, this.type = e.type || void 0, this.labelHelpText = e.labelHelpText || void 0, this.infoIcon = e.infoIcon || void 0, this.infoIconDelay = e.infoIconDelay || void 0, this.infoIconName = e.infoIconName || void 0, this.isReadOnly = e.isReadOnly || void 0, this.tooltip = e.tooltip || void 0, this.prefix = e.prefix || void 0, this.prefixClass = e.prefixClass || void 0, this.suffix = e.suffix || void 0, this.suffixClass = e.suffixClass || void 0, this.prefixSwitcher = e.prefixSwitcher || void 0, this.suffixSwitcher = e.suffixSwitcher || void 0, this.className = e.className || void 0, this.containerClassName = e.containerClassName || void 0, this.inputSize = e.inputSize || void 0, this.validation = e.validation || void 0, this.switcherOptions = e.switcherOptions || void 0, this.activeswitcherOption = e.activeswitcherOption || void 0, this.onChange = e.onChange || void 0, this.onKeyUp = e.onKeyUp || void 0, this.onKeyUpEvent = e.onKeyUpEvent || void 0, this.onFocus = e.onFocus || void 0, this.onBlur = e.onBlur || void 0, this.onSwitcherValueChange = e.onSwitcherValueChange || void 0, this.activeSwitcherOption = e.activeSwitcherOption || void 0, this.showClearButton = e.showClearButton || void 0, this.onValidated = e.onValidated || void 0, this.autoComplete = e.autoComplete || void 0, this.dataTest = e.dataTest || void 0
            }))
        },
        66429: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => b
            });
            var n = i(25046),
                r = i(61169),
                o = i(79442),
                a = i(65131);

            function s(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, h(n.key), n)
                }
            }

            function l(t, e) {
                return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, l(t, e)
            }

            function c(t) {
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
                    var i, n = p(t);
                    if (e) {
                        var r = p(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return d(this, i)
                }
            }

            function d(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return u(t)
            }

            function u(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, p(t)
            }

            function h(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }

            function f(t, e, i) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, i)
            }

            function g(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, m(t, e, "get"))
            }

            function v(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, m(t, e, "set"), i), i
            }

            function m(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var _ = new WeakMap,
                y = new WeakMap;
            let b = function(t) {
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
                }(m, t);
                var e, r, d, p = c(m);

                function m(t) {
                    var e;
                    let {
                        productData: i,
                        viewOnly: n = !1
                    } = t;
                    var r, o, s;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, m), f(u(e = p.call(this)), _, {
                        writable: !0,
                        value: void 0
                    }), f(u(e), y, {
                        writable: !0,
                        value: void 0
                    }), r = u(e), s = void 0, (o = h(o = "viewOnly")) in r ? Object.defineProperty(r, o, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = s, v(u(e), y, new a.v(i)), e.viewOnly = n, e
                }
                return e = m, (r = [{
                    key: "render",
                    value: function() {
                        const t = new n.L,
                            e = this.viewOnly ? "review-list" : "reviews-view",
                            r = this.viewOnly ? () => Promise.all([i.e(15248), i.e(65951), i.e(69689), i.e(88624), i.e(58267)]).then(i.bind(i, 23128)) : () => Promise.all([i.e(15248), i.e(65951), i.e(69689), i.e(88624), i.e(58267)]).then(i.bind(i, 65604));
                        return t.components = {
                            [e]: r
                        }, t.template = this.viewOnly ? '<review-list :reviewable-product-item="reviewableProductItem" :view-only="viewOnly" />' : '<reviews-view :reviewable-product-item="reviewableProductItem" :view-only="viewOnly" />', t.initialData = {
                            reviewableProductItem: g(this, y),
                            viewOnly: this.viewOnly
                        }, t.plugins = {
                            store: (0, o.getVuex)()
                        }, t.emitEvent = this.callEvent.bind(this), v(this, _, new n.Z(t)), g(this, _)
                    }
                }, {
                    key: "callEvent",
                    value: function(t) {
                        "onDestroy" === t && this.destroy()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t;
                        null === (t = g(this, _)) || void 0 === t || t.destroy(), v(this, _, null)
                    }
                }]) && s(e.prototype, r), d && s(e, d), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), m
            }(r.p)
        },
        51747: (t, e, i) => {
            "use strict";
            i.d(e, {
                $E: () => V,
                GD: () => z,
                aP: () => W,
                bE: () => G,
                d8: () => q,
                s$: () => $
            });
            var n = i(136),
                r = i(61169),
                o = i(58334),
                a = i(90446),
                s = i(25046),
                l = i(15425),
                c = i(75232),
                d = i(78009);

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function h(t, e, i) {
                return e && p(t.prototype, e), i && p(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
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
                    var i, n = _(t);
                    if (e) {
                        var r = _(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return v(this, i)
                }
            }

            function v(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return m(t)
            }

            function m(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function _(t) {
                return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, _(t)
            }

            function y(t, e) {
                w(t, e), e.add(t)
            }

            function b(t, e, i) {
                w(t, e), e.set(t, i)
            }

            function w(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function P(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }

            function C(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, k(t, e, "get"))
            }

            function T(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, k(t, e, "set"), i), i
            }

            function k(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var S = new WeakMap,
                E = new WeakMap,
                O = new WeakMap,
                I = new WeakMap,
                N = new WeakMap,
                R = new WeakMap,
                D = new WeakMap,
                x = new WeakMap,
                A = new WeakMap,
                L = new WeakSet,
                B = new WeakSet,
                F = new WeakSet;
            let V = function(t) {
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
                    }), e && f(t, e)
                }(i, t);
                var e = g(i);

                function i(t) {
                    var n;
                    return u(this, i), y(m(n = e.call(this)), F), y(m(n), B), y(m(n), L), b(m(n), S, {
                        writable: !0,
                        value: void 0
                    }), b(m(n), E, {
                        writable: !0,
                        value: null
                    }), b(m(n), O, {
                        writable: !0,
                        value: []
                    }), b(m(n), I, {
                        writable: !0,
                        value: null
                    }), b(m(n), N, {
                        writable: !0,
                        value: []
                    }), b(m(n), R, {
                        writable: !0,
                        value: null
                    }), b(m(n), D, {
                        writable: !0,
                        value: null
                    }), b(m(n), x, {
                        writable: !0,
                        value: null
                    }), b(m(n), A, {
                        writable: !0,
                        value: !1
                    }), n.node = tag("div"), T(m(n), E, t), T(m(n), I, C(m(n), E).onChanged), T(m(n), N, C(m(n), E).activeValue), T(m(n), R, C(m(n), E).products), T(m(n), D, C(m(n), E).productCategory), T(m(n), A, C(m(n), E).isMobile), P(m(n), L, j).call(m(n)), n
                }
                return h(i, [{
                    key: "setActiveCategory",
                    value: function(t) {
                        "string" == typeof t && (t = [t]), T(this, N, t)
                    }
                }, {
                    key: "getActiveValue",
                    value: function() {
                        return C(this, N)
                    }
                }]), i
            }(r.p);

            function j() {
                const t = new s.L;
                t.components = {
                    "catalog-products-sorting": () => Promise.all([i.e(33348), i.e(13068)]).then(i.bind(i, 19169))
                }, T(this, O, (0, n.ey)()), T(this, x, P(this, F, M).call(this)), t.template = '\n            <catalog-products-sorting\n                :is-mobile="isMobile"\n                :sorting-options="sortingOptions"\n                :flow-type="flowType"\n                @on-change="onChange"\n            />\n        ', t.initialData = {
                    isMobile: C(this, A),
                    sortingOptions: C(this, x),
                    flowType: d.dB.getCatalogTypeName(),
                    onChange: P(this, B, U).bind(this)
                }, T(this, S, new s.Z(t)), C(this, S).append(this.node);
                const e = G(C(this, x));
                if (e) this.setActiveCategory(e.id);
                else {
                    var r, o;
                    const t = null === (r = C(this, x)[0]) || void 0 === r || null === (o = r.items[0]) || void 0 === o ? void 0 : o.id;
                    t && this.setActiveCategory([t])
                }
            }

            function U(t) {
                let e = t.id;
                "string" == typeof e && (e = [e]), W(e), this.setActiveCategory(e), C(this, I).call(this, e)
            }

            function M() {
                let t = C(this, O),
                    e = C(this, R);
                const i = C(this, D);
                (null == i ? void 0 : i.id) !== l.az && (null == i ? void 0 : i.id) !== l.wo || (t = q(t, n.ei));
                const r = a.V.sellingRegion || PF.Customer.sellingRegionSetting;
                if (r && null != r && r.isSingleCountry() || (t = t.filter((t => t.id !== n.ei))), e) {
                    const i = [];
                    for (const t in e) {
                        let n = e[t];
                        n instanceof o.O && (n = n.getCachedProduct()), i.push(n)
                    }
                    e = i || e;
                    e.some((t => null == t ? void 0 : t.isNew)) || (t = t.filter((t => t.id !== n.ty)));
                    e.every((t => {
                        var e;
                        return null !== (e = null == t ? void 0 : t.isFavorite) && void 0 !== e ? e : null
                    })) || (t = t.filter((t => t.id !== n.I_)));
                    e.some((t => null == t ? void 0 : t.reviewRating)) || (t = t.filter((t => t.id !== n.Jd)));
                    e.some((t => null == t ? void 0 : t.isPopular)) || (t = t.filter((t => t.id !== n.Z1)))
                }
                return t
            }
            let z = h((function t(e) {
                let {
                    onChanged: i = null,
                    activeValue: n = null,
                    products: r = null,
                    productCategory: o = null,
                    isMobile: a = !1
                } = e;
                u(this, t), this.onChanged = i, this.activeValue = n, this.products = r, this.productCategory = o, this.isMobile = a
            }));

            function q(t, e) {
                const i = (0, c.IS)(t),
                    n = i.findIndex((t => {
                        let {
                            id: i
                        } = t;
                        return i === e
                    }));
                if (n > -1) {
                    const t = i.splice(n, 1);
                    i.unshift(...t)
                }
                return i
            }
            const H = "catalog_sorting_option_key";

            function W(t) {
                sessionStorage && t && sessionStorage.setItem(H, JSON.stringify(t))
            }

            function $() {
                if (!sessionStorage) return "";
                const t = sessionStorage.getItem(H);
                return null != t && t.length ? JSON.parse(t) : ""
            }

            function G(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $(),
                    i = null;
                return t.forEach((t => {
                    const n = t.items.find((t => {
                        let {
                            id: i
                        } = t;
                        return null == e ? void 0 : e.includes(i)
                    }));
                    n && (i = n)
                })), i
            }
        },
        136: (t, e, i) => {
            "use strict";
            i.d(e, {
                An: () => s,
                I_: () => c,
                Id: () => a,
                Jd: () => o,
                MD: () => l,
                Z1: () => n,
                ei: () => p,
                ey: () => h,
                iv: () => d,
                ty: () => r,
                uZ: () => u
            });
            const n = "popular",
                r = "isNew",
                o = "review",
                a = "price",
                s = "priceLow",
                l = "priceHigh",
                c = "favorites",
                d = "favoritesAsc",
                u = "favoritesDesc",
                p = "fastestDelivery",
                h = () => [{
                    id: n,
                    items: [{
                        id: n,
                        value: n,
                        name: dlang("products", "Most popular")
                    }]
                }, {
                    id: p,
                    items: [{
                        id: p,
                        value: p,
                        name: dlang("products", "Fastest delivery")
                    }]
                }, {
                    id: r,
                    items: [{
                        id: r,
                        value: r,
                        name: dlang("products", "New")
                    }]
                }, {
                    id: o,
                    items: [{
                        id: o,
                        value: o,
                        name: dlang("products", "Highest rated")
                    }]
                }, {
                    id: a,
                    name: dlang("products", "Price"),
                    items: [{
                        id: s,
                        value: s,
                        name: dlang("products", "Low - High")
                    }, {
                        id: l,
                        value: l,
                        name: dlang("products", "High - Low")
                    }]
                }, {
                    id: c,
                    name: dlang("products", "Date saved as favorite"),
                    items: [{
                        id: d,
                        value: d,
                        name: dlang("products", "Newest - Oldest")
                    }, {
                        id: u,
                        value: u,
                        name: dlang("products", "Oldest - Newest")
                    }]
                }]
        },
        70869: (t, e, i) => {
            "use strict";
            i.d(e, {
                F: () => n
            });
            const n = {
                getConfig() {
                    var t;
                    return (null === (t = PF) || void 0 === t ? void 0 : t.ProductsPricingConfig) || {
                        expandTypes: []
                    }
                }
            }
        },
        27170: (t, e, i) => {
            "use strict";
            i.d(e, {
                C: () => z,
                l: () => G
            });
            i(98737);
            var n = i(17570),
                r = i(61169),
                o = i(66683),
                a = i(96486),
                s = i.n(a),
                l = i(20833),
                c = i(61756),
                d = i(12010);

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function h(t, e, i) {
                return e && p(t.prototype, e), i && p(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
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
                    var i, n = _(t);
                    if (e) {
                        var r = _(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return v(this, i)
                }
            }

            function v(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return m(t)
            }

            function m(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function _(t) {
                return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, _(t)
            }

            function y(t, e) {
                w(t, e), e.add(t)
            }

            function b(t, e, i) {
                w(t, e), e.set(t, i)
            }

            function w(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function P(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }

            function C(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, k(t, e, "get"))
            }

            function T(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, k(t, e, "set"), i), i
            }

            function k(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var S = new WeakMap,
                E = new WeakMap,
                O = new WeakMap,
                I = new WeakMap,
                N = new WeakMap,
                R = new WeakMap,
                D = new WeakMap,
                x = new WeakMap,
                A = new WeakMap,
                L = new WeakMap,
                B = new WeakMap,
                F = new WeakMap,
                V = new WeakSet,
                j = new WeakSet,
                U = new WeakSet,
                M = new WeakSet;
            let z = function(t) {
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
                    }), e && f(t, e)
                }(i, t);
                var e = g(i);

                function i(t) {
                    var n;
                    return u(this, i), y(m(n = e.call(this)), M), y(m(n), U), y(m(n), j), y(m(n), V), b(m(n), S, {
                        writable: !0,
                        value: null
                    }), b(m(n), E, {
                        writable: !0,
                        value: null
                    }), b(m(n), O, {
                        writable: !0,
                        value: null
                    }), b(m(n), I, {
                        writable: !0,
                        value: []
                    }), b(m(n), N, {
                        writable: !0,
                        value: []
                    }), b(m(n), R, {
                        writable: !0,
                        value: []
                    }), b(m(n), D, {
                        writable: !0,
                        value: []
                    }), b(m(n), x, {
                        writable: !0,
                        value: null
                    }), b(m(n), A, {
                        writable: !0,
                        value: null
                    }), b(m(n), L, {
                        writable: !0,
                        value: !1
                    }), b(m(n), B, {
                        writable: !0,
                        value: null
                    }), b(m(n), F, {
                        writable: !0,
                        value: !0
                    }), n.node = tag("div", null, [tag("div", "pf-mb-8", [tag("h6", null, lang("Stocked in"))]), n.dropdownNode = tag("div", "pf-mb-8"), n.availabilityNode = tag("div", "regions-dropdown__sub--description text-muted")]), T(m(n), S, t), T(m(n), O, C(m(n), S).onChanged), T(m(n), x, C(m(n), S).regionData), T(m(n), I, C(m(n), x).availableRegions), T(m(n), R, ("string" == typeof C(m(n), S).activeValue ? [C(m(n), S).activeValue] : C(m(n), S).activeValue) || []), T(m(n), B, new l.R), T(m(n), F, C(m(n), S).shouldShowAvailabilityInfo), P(m(n), V, q).call(m(n)), n
                }
                return h(i, [{
                    key: "getLastSelectedRegion",
                    value: function() {
                        return C(this, E)
                    }
                }, {
                    key: "setRegion",
                    value: function(t) {
                        if (C(this, L)) return;
                        "string" == typeof t && (t = [t]);
                        const e = t.filter((t => C(this, I).indexOf(t) > -1));
                        if (e.length) {
                            const t = e.map((t => ({
                                name: (0, d.G)(t),
                                value: t,
                                id: btoa(t)
                            })));
                            T(this, R, e), C(this, A).setActiveItems(t), P(this, U, W).call(this, t)
                        }
                    }
                }, {
                    key: "getFirstActiveRegion",
                    value: function() {
                        return C(this, R).length ? C(this, R)[0] : C(this, x).availableRegions[0]
                    }
                }, {
                    key: "getSelectedRegionsCount",
                    value: function() {
                        return C(this, R).length
                    }
                }, {
                    key: "isRegionInactive",
                    value: function(t) {
                        return this.getInactiveItems().indexOf(t) > -1
                    }
                }, {
                    key: "setActiveValue",
                    value: function(t) {
                        this.setRegion(t)
                    }
                }, {
                    key: "getActiveValue",
                    value: function() {
                        return C(this, R)
                    }
                }, {
                    key: "isRegionSelected",
                    value: function(t) {
                        return C(this, R).indexOf(t) > -1
                    }
                }, {
                    key: "getActiveItems",
                    value: function() {
                        return C(this, I)
                    }
                }, {
                    key: "getFirstActiveItem",
                    value: function() {
                        return this.getSelectedRegionsCount() ? C(this, R)[0] : C(this, x).availableRegions[0]
                    }
                }, {
                    key: "isVariantAvailableInRegion",
                    value: function(t, e) {
                        return !(!t || !C(this, x).variantsByRegion[e]) && -1 !== C(this, x).variantsByRegion[e].indexOf(t)
                    }
                }, {
                    key: "isVariantAvailableInSelectedRegions",
                    value: function(t) {
                        const e = C(this, R);
                        let i = !0;
                        if (!t) return !1;
                        if (C(this, x).allowedSellingRegions) {
                            for (const i in e) {
                                const n = e[i];
                                if (C(this, x).variantsByRegion[n] && C(this, x).variantsByRegion[n].includes(t)) return !0
                            }
                            return !1
                        }
                        for (const n in e) {
                            const r = e[n];
                            C(this, x).variantsByRegion[r] && -1 === C(this, x).variantsByRegion[r].indexOf(t) && (i = !1)
                        }
                        return i
                    }
                }, {
                    key: "getInactiveItems",
                    value: function() {
                        return C(this, N)
                    }
                }, {
                    key: "hasSelectedValuesHaveInactiveRegions",
                    value: function() {
                        const t = this.getInactiveItems();
                        return !!this.getActiveValue().filter((e => t.indexOf(e) > -1)).length
                    }
                }, {
                    key: "setInactiveItems",
                    value: function(t) {
                        T(this, N, t)
                    }
                }]), i
            }(r.p);

            function q() {
                for (const t in C(this, x).variantsByRegion) 0 === C(this, x).variantsByRegion[t].length && C(this, N).push(t);
                const t = C(this, x).allowedSellingRegions;
                t && (t.length > 0 ? T(this, N, C(this, N).concat(C(this, x).availableRegions.filter((e => !t.includes(e))))) : T(this, N, C(this, x).availableRegions.slice())), C(this, N) && T(this, I, C(this, x).availableRegions.filter((t => -1 === C(this, N).indexOf(t)))), T(this, D, C(this, I).map((t => ({
                    name: (0, d.G)(t),
                    value: t,
                    id: btoa(t)
                }))));
                let e = 1;
                T(this, L, [...C(this, I)].every((t => s().isEqual(C(this, x).variantsByRegion[t].sort(), C(this, x).variantsByRegion[C(this, I)[0]].sort())))), C(this, L) && (T(this, R, C(this, I)), C(this, S).shouldLimitPickableRegionCount && (e = C(this, R).length));
                const i = C(this, R).map((t => ({
                    name: (0, d.G)(t),
                    value: t,
                    id: btoa(t)
                })));
                if (T(this, A, new o.f(new o.J({
                        activeItems: i,
                        items: [{
                            items: C(this, D)
                        }],
                        isMultiselectable: !0,
                        minimumSelectedValues: e,
                        showValuesInline: !0,
                        onChange: P(this, U, W).bind(this)
                    }))), C(this, A).append(this.dropdownNode), 1 === C(this, D).length) {
                    tag("div", "regions-dropdown__region-picker pf-px-12 pf-py-8 pf-mb-8 single", [C(this, D)[0].name]).append(this.dropdownNode), C(this, A).node.classList.add("hidden")
                }
                C(this, F) && P(this, j, H).call(this)
            }

            function H() {
                const t = (new l.R).path.indexOf("custom/") > -1,
                    e = PF.Customer.isLogged(),
                    i = lang("Fulfillment location is set based on shipping destination, routing preferences and {linkStart}stock availability{linkEnd}.");
                let r;
                (t || e) && (r = i.replace("{linkStart}", '<a class="pf-link" href="#">').replace("{linkEnd}", "</a>")), t || e || (r = i.replace("{linkStart}", "").replace("{linkEnd}", ""));
                const o = tag("div", "", [lang("All products ship worldwide."), " ", tag("span", {
                    innerHTML: r,
                    onclick: function(i) {
                        const r = (new l.R).toString() + "#availability",
                            o = [lang("Please sign in to check product availability.")],
                            a = [
                                [tag("span", {
                                    innerHTML: lang("<strong>Automatic</strong> order fulfillment")
                                })],
                                [tag("span", {
                                    innerHTML: lang("Download free print file <strong>templates</strong> and <strong>mockups</strong>")
                                })], lang("No upfront or monthly fees")
                            ];
                        if ("A" === i.target.nodeName) {
                            if (e) c.j8("showProductAvailability");
                            else if (t) {
                                const t = n.z.Par;
                                t.returnUrl = r, t.signUpContent = a, t.signInContent = o, new n.z(t)
                            }
                            i.preventDefault()
                        }
                    }
                })]);
                this.availabilityNode.appendChild(o)
            }

            function W(t) {
                const e = t.map((t => t.value));
                P(this, M, $).call(this, e), T(this, E, e.pop()), C(this, O).call(this, e)
            }

            function $(t) {
                T(this, R, [...new Set(t.filter(Boolean))])
            }
            let G = h((function t(e) {
                let {
                    regionData: i = null,
                    onChanged: n = null,
                    activeValue: r = null,
                    shouldShowAvailabilityInfo: o = !0,
                    shouldLimitPickableRegionCount: a = !1
                } = e;
                u(this, t), this.regionData = i, this.onChanged = n, this.activeValue = r, this.shouldShowAvailabilityInfo = o, this.shouldLimitPickableRegionCount = a
            }))
        },
        37774: (t, e, i) => {
            "use strict";
            i.d(e, {
                e: () => L,
                v: () => V
            });
            var n = i(98737),
                r = i(56805),
                o = i(82320),
                a = i(44353),
                s = i(61169),
                l = i(27170),
                c = i(20833);

            function d(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function p(t, e, i) {
                return e && u(t.prototype, e), i && u(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function h(t, e) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, h(t, e)
            }

            function f(t) {
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
                    var i, n = m(t);
                    if (e) {
                        var r = m(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return g(this, i)
                }
            }

            function g(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return v(t)
            }

            function v(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function m(t) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, m(t)
            }

            function _(t, e) {
                b(t, e), e.add(t)
            }

            function y(t, e, i) {
                b(t, e), e.set(t, i)
            }

            function b(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function w(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }

            function P(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, T(t, e, "get"))
            }

            function C(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, T(t, e, "set"), i), i
            }

            function T(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var k = new WeakMap,
                S = new WeakMap,
                E = new WeakMap,
                O = new WeakMap,
                I = new WeakMap,
                N = new WeakMap,
                R = new WeakMap,
                D = new WeakMap,
                x = new WeakSet,
                A = new WeakSet;
            let L = function(t) {
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
                    }), e && h(t, e)
                }(i, t);
                var e = f(i);

                function i(t) {
                    var n;
                    return d(this, i), _(v(n = e.call(this)), A), _(v(n), x), y(v(n), k, {
                        writable: !0,
                        value: null
                    }), y(v(n), S, {
                        writable: !0,
                        value: null
                    }), y(v(n), E, {
                        writable: !0,
                        value: null
                    }), y(v(n), O, {
                        writable: !0,
                        value: null
                    }), y(v(n), I, {
                        writable: !0,
                        value: null
                    }), y(v(n), N, {
                        writable: !0,
                        value: null
                    }), y(v(n), R, {
                        writable: !0,
                        value: null
                    }), y(v(n), D, {
                        writable: !0,
                        value: !0
                    }), n.node = tag("div"), C(v(n), k, t), C(v(n), E, r.x.getFilteredAvailableRegions(P(v(n), k).regionData)), C(v(n), S, P(v(n), k).variants), C(v(n), O, P(v(n), k).onChanged), C(v(n), N, new c.R), C(v(n), D, P(v(n), k).shouldShowAvailabilityInfo), w(v(n), x, B).call(v(n)), n
                }
                return p(i, [{
                    key: "setActiveRegion",
                    value: function(t, e) {
                        P(this, I).isVariantAvailableInRegion(e, t) || (t = n.T.DEFAULT_REGION), -1 === P(this, I).getActiveItems().indexOf(t) && (t = P(this, I).getFirstActiveItem()), P(this, I).setRegion(t), C(this, R, t)
                    }
                }, {
                    key: "getValueCount",
                    value: function() {
                        return P(this, I).getSelectedRegionsCount()
                    }
                }, {
                    key: "isValuePicked",
                    value: function() {
                        return !!this.getRegion()
                    }
                }, {
                    key: "getRegion",
                    value: function() {
                        return P(this, I).getActiveValue()
                    }
                }, {
                    key: "getMatchingVariants",
                    value: function() {
                        if (!this.getRegion()) return P(this, S);
                        const t = [];
                        for (let e = 0; e < P(this, S).length; e++) {
                            const i = P(this, S)[e];
                            P(this, I).isVariantAvailableInSelectedRegions(i.variantId) && t.push(i)
                        }
                        return t && t.sort(a.y.variantSortingBySizeCallback), t || []
                    }
                }, {
                    key: "getAllVariants",
                    value: function() {
                        return P(this, S).slice()
                    }
                }]), i
            }(s.p);

            function B() {
                let t = null;
                P(this, E).allowedSellingRegions && (t = P(this, E).allowedSellingRegions.slice()), C(this, I, new l.C(new l.l({
                    regionData: P(this, E),
                    activeValue: t,
                    onChanged: w(this, A, F).bind(this),
                    shouldShowAvailabilityInfo: P(this, D),
                    shouldLimitPickableRegionCount: P(this, k).shouldLimitPickableRegionCount
                }))), P(this, I).node.append(this.node)
            }

            function F(t) {
                P(this, I).getInactiveItems().indexOf(t) > -1 && (t = P(this, I).getFirstActiveRegion()), C(this, R, t), (new o.m).setLastActiveRegion(t), P(this, I).hasSelectedValuesHaveInactiveRegions() || P(this, O).call(this, t)
            }
            let V = p((function t(e) {
                let {
                    variants: i = null,
                    regionData: n = null,
                    onChanged: r = null,
                    shouldShowAvailabilityInfo: o = !0,
                    shouldLimitPickableRegionCount: a = !0
                } = e;
                d(this, t), this.variants = i, this.regionData = n, this.onChanged = r, this.shouldShowAvailabilityInfo = o, this.shouldLimitPickableRegionCount = a
            }))
        },
        17977: (t, e, i) => {
            "use strict";
            i.d(e, {
                i: () => n
            });
            const n = {
                isFavoriteProductsEnabled: async () => PF.Customer.isLogged()
            }
        },
        21911: (t, e, i) => {
            "use strict";
            i.d(e, {
                F: () => r
            });
            var n = i(9651);
            const r = function(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                this.selfRemove = i || !1, this.onCloseCallback = a, !1 !== this.selfRemove && (this.selfRemove = parseInt(this.selfRemove, 10), isNaN(this.selfRemove) && (this.selfRemove = 2e3)), "string" == typeof t && (t = [t]), this.node = tag("div", "alert alert-" + e, t), r && n.U.addClassName(this.node, "alert-absolute"), o && tag("a", {
                    className: "alert__close",
                    innerHTML: "&times;",
                    onclick: this.prettyRemove.bind(this)
                }).append(this.node)
            };
            r.prototype = new n.U.Base, r.prototype.append = function(t) {
                return this.selfRemove && setTimeout($.proxy(this.prettyRemove, this), this.selfRemove), this.node.append(t), this
            }, r.prototype.prepend = function(t) {
                return this.selfRemove && setTimeout($.proxy(this.prettyRemove, this), this.selfRemove), this.node.prepend(t), this
            }, r.prototype.prettyRemove = function() {
                $(this.node).fadeOut($.proxy(this.remove, this)), this.onCloseCallback && this.onCloseCallback()
            }, window && ((globalThis || {}).PFComponentsAlert = r)
        },
        99386: (t, e, i) => {
            "use strict";
            i.d(e, {
                z: () => a
            });
            var n = i(9651),
                r = i(94673),
                o = i(99988);
            const a = function(t) {
                var e;
                if (this.selected = {}, this.par = t, t.selectedValues)
                    for (e in t.selectedValues) this.selected[t.selectedValues[e]] = t.selectedValues[e];
                this.enableSearchAt = t.enableSearchAt || 12, this.searchItemBuffer = void 0 !== t.searchItemBuffer ? t.searchItemBuffer : 4, this.onChangeCallback = t.onChange, this.node = (0, n.U)({
                    tag: "div",
                    className: "checkbox-list",
                    els: [{
                        tag: "div",
                        className: "checkbox-list__header",
                        onclick: $.proxy(this.toggleItems, this),
                        els: [{
                            tag: "b",
                            text: t.header || " "
                        }, this.nodeClear = (0, n.U)({
                            tag: "a",
                            className: "pf-link pull-right",
                            text: clang("clear checkbox filters", "Clear"),
                            onclick: $.proxy(this.clear, this)
                        })]
                    }, this.nodeSearch = tag("div", "pf-my-8 pf-pb-2 hidden"), this.nodeItems = (0, n.U)({
                        tag: "div",
                        className: "checkbox-list__items"
                    })]
                }), this.nodeSearchValue = "", this.nodeSearchInput = new o.C({
                    onKeyUp: this.onSearchKeyUp.bind(this),
                    onKeyUpEvent: this.onSearchKeyUpEvent.bind(this),
                    value: "",
                    type: "text",
                    placeholder: lang("Searchâ€¦"),
                    className: "tt-input",
                    name: "CheckboxListSearch"
                }), this.nodeSearchInput.append(this.nodeSearch);
                var i = [];
                for (e in t.items) {
                    var r = t.items[e];
                    r && ("string" == typeof r && (r = {
                        value: r,
                        text: r
                    }), i.push(r))
                }
                this.setItems(i)
            };
            a.prototype = new n.U.Base, a.prototype.items = null, a.prototype.selected = null, a.prototype.toggleItems = function() {
                $(this.node).toggleClass("checkbox-list--expanded")
            }, a.prototype.renderItems = function() {
                n.U.clearNode(this.nodeItems);
                var t = this.items.slice();
                if (this.nodeSearchValue) {
                    var e = $.trim(this.nodeSearchValue.toLowerCase());
                    t = t.filter((function(t) {
                        return t.text.toLowerCase().indexOf(e) > -1
                    }))
                }
                for (var i in t) {
                    var o = t[i],
                        a = !1;
                    void 0 === o.isActive || o.isActive || this.selected[o.value] || (a = !0);
                    var s = !!this.selected[o.value];
                    const e = o.text.split(" ").join("-").split('"').join("") + "-" + i;
                    new r.g(new r.S({
                        type: "checkbox",
                        value: s,
                        isReadOnly: a,
                        wrapperClass: "pf-mt-6",
                        label: '<span class="pf-ui-caption">' + o.text + "</span>",
                        name: e,
                        onChange: this.selectValue.bind(this, o.value)
                    })).append(this.nodeItems)
                }
                this.checkUI(t.length)
            }, a.prototype.checkUI = function(t) {
                n.U.addClassName(this.nodeClear, "hidden"), n.U.addClassName(this.nodeSearch, "hidden"), this.enableSearchAt > 0 && this.items.length > this.enableSearchAt && (n.U.removeClassName(this.nodeSearch, "hidden"), this.nodeItems.style.height = "auto", t > this.enableSearchAt + this.searchItemBuffer && (this.nodeItems.style.height = 25 * this.enableSearchAt + "px")), this.getSelected().length && n.U.removeClassName(this.nodeClear, "hidden")
            }, a.prototype.setItems = function(t) {
                this.items = t.filter((t => null !== t.text && void 0 !== t.text)).map((function(t) {
                    const e = t.text.replace(/\s?\/\s?/g, " / ").split(" ");
                    return "Bulk discount" === t.text ? t.text = e.map((function(t) {
                        return t.charAt(0) + t.substring(1)
                    })).join(" ") : t.text.includes("cm") ? t.text = e.map((function(t) {
                        return t.charAt(0).toLowerCase() + t.substring(1).toLowerCase()
                    })).join(" ") : "shouldCapitalize" in t && !t.shouldCapitalize || (t.text = e.map((function(t) {
                        return t.charAt(0).toUpperCase() + t.substring(1)
                    })).join(" ")), t
                })), this.renderItems()
            }, a.prototype.getSelected = function() {
                var t = [];
                for (var e in this.items) {
                    var i = this.items[e];
                    this.selected[i.value] && t.push(i.value)
                }
                return t
            }, a.prototype.getSelectedItems = function() {
                return this.items.filter((function(t) {
                    return this.selected[t.value]
                }), this)
            }, a.prototype.selectValue = function(t) {
                this.selected[t] ? delete this.selected[t] : this.par.isSingleSelect ? (this.selected = {}, this.selected[t] = t) : this.selected[t] = t, this.renderItems(), this.onChanged()
            }, a.prototype.clear = function(t) {
                return this.selected = {}, this.nodeSearchValue = "", this.renderItems(), this.onChanged(), t.preventDefault(), t.stopImmediatePropagation(), !1
            }, a.prototype.onChanged = function() {
                this.onChangeCallback ? this.onChangeCallback(this.getSelected()) : console.info("No onChangeCallback defined for checkbox list! ", this.getSelected())
            }, a.prototype.onSearchKeyUp = function(t) {
                this.nodeSearchValue = t, this.nodeSearchInput.setValue(t), this.renderItems()
            }, a.prototype.onSearchKeyUpEvent = function(t) {
                "Escape" === t.key && (this.nodeSearchValue = "", this.nodeSearchInput.setValue(""), this.renderItems())
            }, a.prototype.disableItem = function(t) {
                var e = [];
                this.items.map((function(i) {
                    i.value === t && (i.isInactive = !0), e.push(i)
                })), this.items = e, this.renderItems()
            }, window && ((globalThis || {}).PFComponentsCheckboxList = a)
        },
        7660: (t, e, i) => {
            "use strict";
            i.d(e, {
                E: () => bt
            });
            var n = i(14544),
                r = i(40245),
                o = i(30199),
                a = i(38032),
                s = i(4473),
                l = i(9651);
            const c = function(t) {
                var e, i;
                this.par = new c.Par, l.U.O2O(this.par, t || {}), this.par.showBig && (this.par.nodeClass += " swatches--big"), this.par.showInline && (this.par.nodeClass += " swatches--inline"), this.par.onColorChange && null === this.par.maxCount && (this.par.maxCount = this.par.colors.length), this.allColors = this.normalizeColorArray(this.par.colors), this.selectedColorHashes = [];
                var n = this.normalizeColorArray(this.par.activeColors);
                for (i in n) this.selectedColorHashes.push(this.getHashFromColors(n[i]));
                if (this.par.activeColorNames)
                    for (i in this.par.activeColorNames) {
                        var r = this.par.activeColorNames[i],
                            o = this.getHashFromColors(this.par.colorNames[r]);
                        o ? this.selectedColorHashes.push(o) : console.error("Cannot find color for " + r + ". Probably a duplicate")
                    }
                this.node = (0, l.U)({
                    tag: "div",
                    className: "swatches",
                    attr: {
                        "aria-label": dlang("products", "This product has {colorVariants} color variations").replace("{colorVariants}", null === (e = this.par.colors) || void 0 === e ? void 0 : e.length)
                    }
                }), this.par.maxCount && l.U.addClassName(this.node, "swatches--click"), this.par.nodeClass && l.U.addClassName(this.node, this.par.nodeClass), this.render()
            };
            c.prototype = new l.U.Base, c.prototype.allColors = null, c.prototype.selectedColorHashes = null, c.prototype.render = function() {
                l.U.clearNode(this.node);
                for (let t in this.allColors) {
                    const e = this.allColors[t],
                        i = [],
                        n = this.getHashFromColors(e);
                    for (let t in e) {
                        if (t === a.Q.luminosity) continue;
                        const n = tag("span", {
                            style: {
                                backgroundColor: e[t]
                            }
                        });
                        i.push(n)
                    }
                    const r = tag("span", {
                        className: "swatches__item",
                        title: this.getColorName(e) + " " + e.join("/")
                    }, i);
                    this.par.maxCount && (r.onclick = $.proxy(this.onColorClick, this, n)), -1 !== this.selectedColorHashes.indexOf(n) && l.U.addClassName(r, "swatches__item--active"), r.append(this.node)
                }
            }, c.prototype.onColorClick = function(t) {
                var e = this.selectedColorHashes.indexOf(t); - 1 === e ? 1 == this.par.maxCount ? this.selectedColorHashes = [t] : this.selectedColorHashes.length < this.par.maxCount && this.selectedColorHashes.push(t) : this.selectedColorHashes.splice(e, 1), this.render(), null !== this.par.onColorChange && this.par.onColorChange(this.getSelectedColors())
            }, c.prototype.getSelectedColors = function() {
                var t = [];
                for (var e in this.allColors) {
                    var i = this.allColors[e],
                        n = this.getHashFromColors(i);
                    this.selectedColorHashes.indexOf(n) > -1 && t.push(i)
                }
                return t
            }, c.prototype.getHashFromColors = function(t) {
                return !!t && t.join(":").toUpperCase()
            }, c.prototype.normalizeColorArray = function(t) {
                var e = [],
                    i = {};
                for (var n in t) {
                    var r = t[n];
                    if (r) {
                        r instanceof Array || (r = [r]);
                        var o = this.getHashFromColors(r);
                        i[o] || (e.push(r), i[o] = !0)
                    }
                }
                return e
            }, c.prototype.getColorName = function(t) {
                if (t instanceof Array == 0 && (t = [t]), !this.par.colorNames) return t.join(" ");
                var e = this.getHashFromColors(t);
                for (var i in this.par.colorNames)
                    if (e === this.getHashFromColors(this.par.colorNames[i])) return i;
                return t.join(" ")
            }, c.fromProduct = function(t, e) {
                (e = e || new c.Par).colorNames = {}, e.colors = [];
                for (const i in t.colors) {
                    const n = t.colors[i],
                        r = new s.W.ColorPair;
                    if (r.colorName = null == n ? void 0 : n.colorName, r.colorCode = null == n ? void 0 : n.colorCode, r.colorCode2 = null == n ? void 0 : n.colorCode2, !r.colorCode) continue;
                    const o = [r.colorCode.toUpperCase()];
                    r.colorCode2 && o.push(r.colorCode2.toUpperCase()), e.colors.push(o), e.colorNames[r.colorName] = r.getColorCodes()
                }
                return new c(e)
            }, c._colorOrder = a.Q.colorOrder, c._sortColors = function(t, e) {
                var i = t.length > 1,
                    n = e.length > 1;
                if (i || n) return i && !n ? 1 : !i && n ? -1 : 0;
                var r = t[0].toUpperCase(),
                    o = e[0].toUpperCase();
                return a.Q.compareColorsCallback(r, o)
            }, c.Par = function() {}, c.Par.prototype.onColorChange = null, c.Par.prototype.colors = null, c.Par.prototype.nodeClass = "", c.Par.prototype.activeColors = null, c.Par.prototype.activeColorNames = null, c.Par.prototype.maxCount = null, c.Par.prototype.colorNames = null, c.Par.prototype.showBig = !1, c.Par.prototype.showInline = !1, c.Par.prototype.shouldSortByLuminosity = !0, window && ((globalThis || {}).PFComponentsSwatches = c);
            var d = i(11072),
                u = i(65131),
                p = i(65311),
                h = i.n(p),
                f = i(82320),
                g = i(97540),
                v = i(47586),
                m = i(25046),
                _ = i(61169);

            function y(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, S(n.key), n)
                }
            }

            function b(t, e) {
                return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, b(t, e)
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
                    var i, n = T(t);
                    if (e) {
                        var r = T(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return P(this, i)
                }
            }

            function P(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return C(t)
            }

            function C(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function T(t) {
                return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, T(t)
            }

            function k(t, e, i) {
                return (e = S(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function S(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let E = function(t) {
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
                    }), e && b(t, e)
                }(a, t);
                var e, n, r, o = w(a);

                function a(t) {
                    var e;
                    let {
                        review: i,
                        renderGalleryView: n,
                        translation: r
                    } = t;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), k(C(e = o.call(this)), "reviewText", void 0), k(C(e), "isGalleryView", !1), k(C(e), "reviewTranslation", null), e.reviewText = i, e.isGalleryView = !!n, e.reviewTranslation = r, e
                }
                return e = a, (n = [{
                    key: "render",
                    value: function(t) {
                        const e = new m.L;
                        e.components = {
                            "review-text": () => i.e(88716).then(i.bind(i, 69315))
                        }, e.template = '<review-text :text="text" :isGalleryView="isGalleryView" :reviewTranslation="reviewTranslation" />', e.initialData = {
                            text: this.reviewText,
                            isGalleryView: this.isGalleryView,
                            reviewTranslation: this.reviewTranslation
                        }, new m.Z(e).prepend(t)
                    }
                }]) && y(e.prototype, n), r && y(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(_.p);
            const O = Class({
                review: null,
                modal: null,
                variant: null,
                expanded: !1,
                eventNamespace: ".reviewGalleryKeyup",
                _editReviewCallback: null,
                __construct: function(t, e, i, n, r, o) {
                    this.review = t, this._editReviewCallback = i, this.reviewableItemTitle = r, this.filters = o, this.reviewableItemTitle = r, this.rating = t.overallRating;
                    const a = Math.round(2 * this.rating) / 2,
                        s = [];
                    for (let t = 1; t <= 5; t++) {
                        let e = "";
                        a > t - 1 && a < t ? e = "-half" : t > a && (e = "-outline"), s.push(tag("span", {
                            className: `pf-i pf-i-18 pf-i-star${e} pf-mr-6 pf-text-brown`,
                            attr: {
                                "aria-hidden": !0
                            }
                        }))
                    }
                    t.variantId && this._setReviewVariant();
                    const l = t.renderGalleryView ? "div" : "span",
                        c = t.renderGalleryView ? " pf-mb-8" : "",
                        d = tag("div");
                    new E(t).render(d), this.node = tag("div", "pf-ui-body pf-py-24 review-item " + (t.renderGalleryView ? "pf-border-bottom-0" : "pf-border-bottom"), [tag("div", "", [tag("div", {
                        className: "star-rating__stars",
                        attr: {
                            "aria-label": lang("{rating} out of 5 stars").replace("{rating}", this.rating)
                        }
                    }, [s]), t.isRejected && t.isOwn ? tag("span", "pf-badge pf-badge-small pf-badge--warning pf-mr-8", [dlang("reviews", "Rejected")]) : "", t.isApproved && t.isOwn ? tag("span", "pf-badge pf-badge-small pf-badge--primary pf-mr-8" + c, [lang("You")]) : "", t.isApproved || t.isRejected ? "" : tag("span", "pf-badge pf-badge-small pf-badge--info pf-mr-8", [dlang("reviews", "Waiting approval")]), tag("strong", "pf-mr-8 data-hj-suppress", [clang("person", "By"), " ", t.name || tag("i", "", [dlang("reviews", "Anonymous")])]), t.isTopReviewer ? tag("span", "pf-badge pf-badge-rect pf-badge--new pf-m-4 pf-mr-8 pf-position-relative", dlang("reviews", "Top reviewer")) : "", tag(l, "pf-mr-16", [moment.unix(t.createdAt).fromNow(), t.fromCountry ? " " + dlang("reviews", "from {country}").replace("{country}", t.fromCountry) : ""]), t.techniqueDisplayName ? tag("span", "pf-badge pf-badge-small pf-badge--default pf-mr-8", t.techniqueDisplayName) : "", this.variant && this.variant.size ? tag("span", "pf-badge pf-badge-small pf-badge--default pf-mr-8", this._getVariantSize()) : "", this._getColorBadge(), t.canDelete && e ? tag("a", {
                        className: "pf-link float-none" + (t.technique ? " pf-ml-8" : ""),
                        onclick: e
                    }, [lang("Remove")]) : "", !i || t.isApproved || t.renderGalleryView ? "" : tag("a", {
                        className: "pf-link pf-ml-8 float-none",
                        onclick: this._editReview
                    }, [lang("Edit")]), tag("div", {
                        className: "pf-mt-16"
                    }, [d]), t.renderGalleryView ? "" : this._getImageNode(), this._reviewActionNode = tag("div", "pf-text-md-right pf-mt-24 review-actions clearfix", [t.customerReviews.length && !t.renderGalleryView ? tag("span", {
                        className: "pf-link pf-pointer more-reviews-link",
                        onclick: this._toggleCustomerReviews.bind(this)
                    }, [1 !== t.customerReviews.length || t.renderGalleryView ? dlang("reviews", "{count} more reviews for different variants").replace("{count}", t.customerReviews.length) : dlang("reviews", "1 more review for different variants"), this.chervronDown = tag("img", {
                        className: "pf-ml-8",
                        src: "/static/images/icons/chevron-down.svg"
                    }), this.chervronUp = tag("img", {
                        className: "pf-ml-8 hidden",
                        src: "/static/images/icons/chevron-up.svg"
                    })]) : "", this.childReviewContainer = tag("div", "pf-text-left hidden child-container")])])]), this._buildCustomerReviewsNode(t.customerReviews || [], n, i, e)
                },
                _buildCustomerReviewsNode: function(t, e, i, n) {
                    if (t.length)
                        for (const r in t) {
                            const o = O(t[r], n ? this._deleteChildReview.bind(this, t[r], e) : null, i, null, this.reviewableItemTitle, this.filters).append(this.childReviewContainer);
                            o.node.className = Number(r) + 1 === t.length ? "pf-ui-body review-item pf-pt-16" : o.node.className
                        }
                },
                _deleteChildReview: function(t, e) {
                    confirm(lang("Are you sure? This cannot be undone!")) && (g.D.show(this.node, {
                        minHeight: 150
                    }), (new f.m).deleteReview(t.reviewId, h().proxy((function() {
                        e()
                    }), this)))
                },
                _toggleCustomerReviews: function() {
                    this.expanded = !this.expanded, this.expanded ? (l.U.addClassName(this.chervronDown, "hidden"), l.U.removeClassName(this.chervronUp, "hidden"), l.U.removeClassName(this.childReviewContainer, "hidden")) : (l.U.addClassName(this.chervronUp, "hidden"), l.U.removeClassName(this.chervronDown, "hidden"), l.U.addClassName(this.childReviewContainer, "hidden"))
                },
                _setReviewVariant: function() {
                    var t = new f.m;
                    this.variant = t.getCachedVariantById(this.review.variantId)
                },
                _getVariantSize: function() {
                    return this.variant ? dlang("products", this.variant.size) : ""
                },
                _getColorBadge: function() {
                    return !this.variant || !this.variant.getCachedProduct() || this.variant.getCachedProduct().colors.length <= 1 ? "" : tag("span", "pf-mr-8", this._getBackgroundColor())
                },
                _getBackgroundColor: function() {
                    const t = [];
                    if (this.variant) {
                        var e, i;
                        const n = this.variant.color && this.variant.colorCode ? this.variant.color + " " + this.variant.colorCode : "",
                            o = [this.variant.colorCode, this.variant.colorCode2].filter((t => !!t)),
                            a = null !== (e = o[0]) && void 0 !== e ? e : "",
                            s = null !== (i = o[1]) && void 0 !== i ? i : a,
                            l = tag("span", {
                                className: "review-item__swatch-item",
                                style: `background: linear-gradient(90deg, ${a} 50%, ${s} 50%)`
                            }),
                            c = tag("a", {
                                className: "swatches__item",
                                title: this.variant.colorCode2 ? n + "/" + this.variant.colorCode2 : n,
                                attr: {
                                    role: "complementary",
                                    "aria-label": this.variant.name ? dlang("reviews", "Review for color {color}").replace("{color}", this.variant.name) : dlang("reviews", "Review for specific color")
                                }
                            }, [l]);
                        h()(c).tooltip({
                            container: "body",
                            trigger: (0, r.Vu)() ? "manual" : "hover"
                        }), t.push(c)
                    }
                    return t
                },
                _getImageNode: function() {
                    if (!this.review.images.length) return "";
                    for (var t = tag("div", "review-item__image-block pf-mt-8"), e = 0, i = this.review.images.length; e < i; e++) {
                        var n = this.review.images[e];
                        tag("a", {
                            href: n.urlLarge,
                            className: "review-item__image pf-p-0 pf-mx-2 pf-mt-4 pf-mb-0",
                            onclick: this._createSlider.bind(this, this.review.images[e].key),
                            style: {
                                backgroundImage: "url(" + encodeURI(n.urlThumb) + ")"
                            },
                            attr: {
                                "aria-label": dnlang("reviews", "Photo by {username}", "Photo by {username}, {current} out of {total}", i).replace("{username}", this.review.name).replace("{current}", e + 1).replace("{total}", i)
                            }
                        }).append(t)
                    }
                    return t
                },
                _getModal: function() {
                    var t = new v.Z.Par;
                    return t.nodeClass = "pf-modal", t.modalDialogClass = "modal-xxl modal-dialog-scrollable", t.onShown = function() {
                        this.modal.setContent(this.vueWrapper)
                    }.bind(this), t.onClose = function() {
                        this.vueWrapper.destroy(), this.modal.remove(), h()(document).unbind(this.eventNamespace)
                    }.bind(this), this.modal = new v.Z(t), this.modal
                },
                _editReview: function() {
                    this._editReviewCallback(this.review)
                },
                _createSlider(t, e) {
                    e && e.preventDefault(), this.filters.isRequestForGalleryView = !0;
                    const n = new m.L;
                    n.components = {
                        "product-review-image-slider": () => i.e(93126).then(i.bind(i, 39414))
                    }, n.initialData = {
                        reviewTextId: "gallery-view-review",
                        filters: this.filters,
                        imageKey: t
                    }, n.template = '<product-review-image-slider  :filters="filters" :imageKey="imageKey" :reviewTextId="reviewTextId"/>';
                    const r = this._getModal();
                    r.setTitle(this.reviewableItemTitle), this.vueWrapper = new m.Z(n), r.show()
                }
            }, l.U.Base);
            (globalThis || {}).PFProductReviewListRow = O;
            var I = i(34512),
                N = i(71218);
            const R = function(t, e) {
                var i;
                this.file = t;
                const n = this.file.isReady || (null === (i = this.file) || void 0 === i ? void 0 : i.key) && !(this.file instanceof N.z);
                if (this.onRemoveCallback = e, this.node = (0, l.U)({
                        tag: "div",
                        className: "review-upload review-upload--loading"
                    }), this.addOverlayNode(), n) {
                    const t = new Image;
                    t.onload = h().proxy(this.onImageLoaded, this), t.src = this.file.urlThumb
                }
            };
            (R.prototype = new l.U.Base).onImageLoaded = function() {
                l.U.removeClassName(this.node, "review-upload--loading"), l.U.clearNode(this.node), new I.K({
                    urlImage: this.file.urlThumb
                }).append(this.node), this.addOverlayNode()
            }, R.prototype.addOverlayNode = function() {
                (0, l.U)({
                    tag: "div",
                    className: "review-upload__overlay",
                    els: [{
                        tag: "a",
                        className: "pf-btn pf-btn-secondary",
                        text: "Remove",
                        onclick: h().proxy((function() {
                            this.onRemoveCallback && this.onRemoveCallback(this.file)
                        }), this)
                    }]
                }).append(this.node)
            }, (globalThis || {}).PFProductReviewFormFileThumb = R;
            var D = i(82475),
                x = i(21911),
                A = i(70418);
            const L = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.callbackButtonFunction = t, this.uploader = new D.P({
                    onUploaded: this.onFileUploaded.bind(this),
                    onProcessed: this.onFileProcessed.bind(this),
                    onProcessingFailed: this.onFileFailed.bind(this),
                    caption: lang("Upload images"),
                    uploadType: "review",
                    allowMultiple: !0
                }), this.textAreaKeywordErrorMessage = this.getTextAreaKeywordErrorMessageNode(), this.imageErrorMessage = this.getImageErrorMessageNode(), this.keywords = null, this.usedKeywords = new Set, this.invalidText = !1, this.getKeywords().then((t => {
                    !1 !== t.success ? (this.keywords = t.keywords, e && e.review && this.onKeyUp()) : this.keywords = []
                })), this.nodeTextarea = this.getTextAreaNode(), this.node = (0, l.U)({
                    tag: "div",
                    className: "review-form-submit",
                    els: [this.getTitleNode(), this.nodeTextarea, this.textAreaKeywordErrorMessage, this.getUploadBlockNode()]
                }), e && (this.nodeTextarea.value = e.review, this.existingImages = e.images, this.renderUploadedFiles())
            };

            function B(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function F(t, e) {
                return F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, F(t, e)
            }

            function V(t) {
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
                    var i, n = U(t);
                    if (e) {
                        var r = U(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return j(this, i)
                }
            }

            function j(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function U(t) {
                return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, U(t)
            }(L.prototype = new l.U.Base).constructor = L, L.prototype.getTitleNode = function() {
                return (0, l._)("h4", "pf-h4 pf-mt-24 pf-mb-8", [dlang("reviews", "Your review (optional)"), (0, l._)("span", {
                    className: "pf-text-red pf-ml-2 pf-mr-2",
                    innerHTML: "&#42;"
                }), this.getTooltipNode()])
            }, L.prototype.getTextAreaNode = function() {
                return (0, l._)("textarea", {
                    className: "form-control pf-mb-12",
                    style: {
                        height: "100px"
                    },
                    attr: {
                        placeholder: dlang("reviews", "Weâ€™d love to hear what you think. Write your thoughts on the products fit, feel, style, etc.")
                    },
                    prop: {
                        onkeyup: this.onKeyUp.bind(this)
                    }
                })
            }, L.prototype.getUploadBlockNode = function() {
                return (0, l._)("div", "pf-mb-12", [this.nodeUploadedFiles = (0, l._)("div"), this.imageErrorMessage, this.uploader])
            }, L.prototype.getImageErrorMessageNode = function() {
                return (0, l._)("div", "pf-text-red hidden pf-mb-8 pf-ui-body", [dlang("reviews", "Upload 2 high-quality images that have the product displayed in the center")])
            }, L.prototype.getTextAreaKeywordErrorMessageNode = function() {
                return (0, l._)("p", {
                    className: "pf-text-red hidden",
                    innerHTML: null
                })
            }, L.prototype.getTooltipNode = function() {
                const t = {
                    className: "pf-i pf-i-18 pf-i-information pf-text-gray",
                    data: {
                        toggle: "tooltip",
                        placement: "bottom",
                        html: !0,
                        template: `${(0,l._)("div",{className:"tooltip",attr:{role:"tooltip"}},[(0,l._)("div","tooltip-arrow"),(0,l._)("div",{className:"tooltip-inner",style:{maxWidth:"350px"}})]).outerHTML}`,
                        trigger: "manual"
                    },
                    prop: {
                        onmouseover: this.showTooltip.bind(this),
                        onmouseleave: this.hideTooltip.bind(this, 1e3)
                    },
                    attr: {
                        title: dlang("reviews", "<b>To avoid your review being declined</b>, please keep it primarily about the product itselfâ€“the fit, the feel, the material, the construction, and the overall quality. To include aspects about services unrelated to the product, such as shipping, fulfillment,  or customer service, please use the <i>Service review</i> block. You can read more about product review acceptance criteria {acceptanceCriteriaLink} and about our product reviews policy {policyLink}").replace("{acceptanceCriteriaLink}", `<a href="${this.getAcceptanceCriteriaLink()}" target="_blank">` + clang("clickable link", "here") + "</a>").replace("{policyLink}", `<a href="${this.getPolicyLink()}" target="_blank">` + clang("clickable link", "here") + "</a>")
                    }
                };
                return (0, l._)("span", t)
            }, L.prototype.getAcceptanceCriteriaLink = function() {
                var t;
                const e = {
                    en_US: "https://help.printful.com/hc/en-us/articles/4408225181202",
                    fr_FR: "https://help.printful.com/hc/fr/articles/4408225181202",
                    pt_BR: "https://help.printful.com/hc/pt-br/articles/4408225181202",
                    de_DE: "https://help.printful.com/hc/de/articles/4408225181202",
                    es_ES: "https://help.printful.com/hc/es/articles/4408225181202",
                    it_IT: "https://help.printful.com/hc/it/articles/4408225181202",
                    ja_JP: "https://help.printful.com/hc/ja/articles/4408225181202"
                };
                return null !== (t = e[d.A.locale]) && void 0 !== t ? t : e.en_US
            }, L.prototype.getPolicyLink = function() {
                const t = d.A.locale,
                    e = {
                        en_US: "https://help.printful.com/hc/en-us/articles/5475310975516",
                        de_DE: "https://help.printful.com/hc/de/articles/5475310975516",
                        ja_JP: "https://help.printful.com/hc/ja/articles/5475310975516"
                    };
                return ["en_US", "de_DE", "ja_JP"].includes(t) ? e[t] : e.en_US
            }, L.prototype.showTooltip = function(t) {
                this.clearTooltipHideDelay(), this.tooltipTrigger = t.target;
                const e = this;
                $(this.tooltipTrigger).on("shown.bs.tooltip", (function(t) {
                    const i = t.target.nextElementSibling;
                    $(i).off(), $(i).on("mouseenter", (function() {
                        e.clearTooltipHideDelay()
                    })), $(i).on("mouseleave", (function() {
                        e.hideTooltip(100)
                    }))
                })), $(this.tooltipTrigger).tooltip("show")
            }, L.prototype.hideTooltip = function(t) {
                const e = this;
                this.tooltipCloseDelay = setTimeout((function() {
                    $(e.tooltipTrigger).tooltip("hide")
                }), t)
            }, L.prototype.clearTooltipHideDelay = function() {
                clearTimeout(this.tooltipCloseDelay)
            }, L.prototype.getKeywords = function() {
                return (0, A.r)("product-review-keywords/get-keywords-by-language", {
                    locale: d.A.locale
                })
            }, L.prototype.onKeyUp = function() {
                if (0 === this.keywords.length) return;
                let t = null,
                    e = null;
                const i = this.nodeTextarea.value.toLowerCase();
                for (const n in this.keywords) {
                    const r = this.keywords[n];
                    r.keyword = r.keyword.toLowerCase();
                    const o = i.indexOf(r.keyword);
                    if (o > -1) {
                        this.usedKeywords.add(r.keyword);
                        const n = i[o - 1],
                            a = i[o + r.keyword.length];
                        (null === e || o < e) && this.isValidAdjoiningChar(n) && this.isValidAdjoiningChar(a) && (e = o, t = r.warningMessage)
                    }
                }
                null === e ? this.textAreaKeywordErrorMessage.classList.add("hidden") : (this.textAreaKeywordErrorMessage.classList.remove("hidden"), this.textAreaKeywordErrorMessage.innerHTML !== t && (this.textAreaKeywordErrorMessage.innerHTML = t))
            }, L.prototype.isValidAdjoiningChar = function(t) {
                let e = !1;
                return (void 0 === t || null !== t.match(/[!"#$%&'()*+,-./\\:;<=>?@[\]^_`{|}~\s]/g)) && (e = !0), e
            }, L.prototype.onFileUploaded = function(t) {
                this.uploadedImages = this.uploadedImages || {}, this.uploadedImages[t.temporaryFileKey] = t, this.renderUploadedFiles()
            }, L.prototype.onFileProcessed = function(t) {
                this.uploadedImages[t.temporaryFileKey] && (this.uploadedImages[t.temporaryFileKey] = t, this.renderUploadedFiles())
            }, L.prototype.onFileFailed = function(t) {
                var e = new x.F('"' + t.filename + '" failed to process: ' + t.reasonFailed, "danger", 4e3);
                $((0, l._)("div", "", [e])).insertAfter(this.nodeTextarea), this.onFileRemove(t)
            }, L.prototype.renderUploadedFiles = function() {
                l.U.clearNode(this.nodeUploadedFiles), this.images = {
                    ...this.uploadedImages,
                    ...this.existingImages
                };
                let t, e = !0;
                for (const i in this.images) {
                    const n = this.images[i];
                    n.isReady || (e = !1), t = new R(n, this.onFileRemove.bind(this)), !n.key || n instanceof N.z || (t = new R(n, this.onRemoveExistingFile.bind(this)), e = !0), t.append(this.nodeUploadedFiles)
                }
                this.callbackButtonFunction(e)
            }, L.prototype.onFileRemove = function(t) {
                delete this.uploadedImages[t.temporaryFileKey], this.renderUploadedFiles()
            }, L.prototype.onRemoveExistingFile = function(t) {
                this.existingImages = this.existingImages.filter((e => e.key !== t.key)), this.renderUploadedFiles()
            }, (globalThis || {}).PFProductReviewFormSubmitArea = L;
            let M = function(t) {
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
                    }), e && F(t, e)
                }(o, t);
                var e, i, n, r = V(o);

                function o(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), (e = r.call(this)).nodeTextarea = e.getTextAreaNode(), e.node = (0, l._)("div", "review-form-submit", [e.getTitleNode(), e.nodeTextarea]), t && (e.nodeTextarea.value = t.reviewComplaint.text, t.reviewComplaint.text.length > 0 && (e.nodeTextarea.disabled = !0)), e
                }
                return e = o, (i = [{
                    key: "getTitleNode",
                    value: function() {
                        return (0, l._)("h4", "pf-h4 pf-mt-24 pf-mb-8", [dlang("reviews", "Service review (optional)"), (0, l._)("span", {
                            className: "pf-text-red pf-ml-2",
                            innerHTML: "&#42;"
                        })])
                    }
                }, {
                    key: "getTextAreaNode",
                    value: function() {
                        return (0, l._)("textarea", {
                            className: "form-control pf-mb-12",
                            style: {
                                height: "100px"
                            },
                            attr: {
                                placeholder: dlang("reviews", "Review the fulfillment time, customer support, shipping, etc.")
                            }
                        })
                    }
                }]) && B(e.prototype, i), n && B(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), o
            }(_.p);
            const z = function(t) {
                this.stars = t.rating || null, this.defaultClass = "pf-i pf-i-24 pf-text-brown pf-pr-8 pf-keydown-click", this.starType = " pf-i-star", this.nodeStars = [], this.titleData = t;
                for (var e = 1; e <= 5; e++) this.nodeStars.push(tag("div", {
                    className: this.defaultClass + this.starType,
                    onclick: $.proxy(this.setStars, this, e),
                    attr: {
                        role: "button",
                        tabindex: "0",
                        "aria-label": this.textual[e - 1]
                    },
                    prop: {
                        onmouseover: this.highlightStars.bind(this, e)
                    }
                }));
                this.nodeTextual = (0, l.U)({
                    tag: "span",
                    className: "review-stars__textual"
                }), this.node = (0, l.U)({
                    tag: "div",
                    els: [tag("h4", "pf-h4 pf-mt-24 pf-mb-4", this.titleData.categoryTitle), {
                        tag: "span",
                        className: "review-stars__stars",
                        els: this.nodeStars,
                        prop: {
                            onmouseout: this.highlightStars.bind(this, !1)
                        }
                    }, this.nodeTextual]
                }), this.highlightStars()
            };
            (z.prototype = new l.U.Base).textual = [dlang("reviews", "Terrible"), dlang("reviews", "Not impressed"), dlang("reviews", "It's fine"), dlang("reviews", "Like it"), dlang("reviews", "Love it")], z.prototype.getStars = function() {
                return {
                    category_id: this.titleData.categoryId,
                    rating: this.stars
                }
            }, z.prototype.setStars = function(t) {
                this.stars = t, this.highlightStars(this.stars)
            }, z.prototype.highlightStars = function(t) {
                for (var e in t = t || this.stars, this.nodeStars) this.nodeStars[e].className = e <= t - 1 ? this.defaultClass + this.starType : this.defaultClass + this.starType + "-outline";
                this.nodeTextual.classList.remove("pf-text-red"), this.nodeTextual.textContent = this.textual[t - 1]
            }, (globalThis || {}).PFProductReviewFormStarRating = z;
            var q = i(71155);
            const H = function(t, e, i, n) {
                let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                this.reviewableItem = t, this.existingReview = r, this.modal = e, this.overallQualityRatingCategory = n, this.onSubmittedCallback = i, this.reviewVariant = r ? {
                    ...r.variantInfo,
                    technique: r.technique,
                    techniqueDisplayName: r.techniqueDisplayName,
                    productId: r.productId,
                    variantId: r.variantId
                } : this.reviewableItem.reviewVariant, this.pendingReviewId = r ? r.pendingReviewId : this.reviewVariant.pendingReviewId, this.badges = this.getVariantBadges(), this.colorCodes = this.reviewVariant.colorCodes, this.setReviewStars(), this.tableBlock = this.getTableBlockNode(), this.featuredReviewStatus = this.getFeaturedReviewStatusNode(), this.featuredReviewDetails = this.getFeaturedReviewDetailsNode(), this.featuredReviewErrorMessage = this.getFeaturedReviewErrorMessageNode(), this.formNode = new L(this.uploadCallback.bind(this), this.existingReview), this.serviceReviewFormNode = new M(this.existingReview), this.reviewDisclaimer = this.getReviewDisclaimerNode(), this.reviewDivider = this.getReviewDividerNode(), this.existingReview && this.setValuesForExistingReview(), this.node = this.getFormContent(), (0, q.N)(this.nodeTextarea)
            };
            (H.prototype = new l.U.Base).selectedColor = "", H.prototype.selectedSize = "", H.prototype.getFormContent = function() {
                return (0, l._)("div", "review-form", [this.tableBlock, this.overallQualityStarRatingNode, this.formNode, this.serviceReviewFormNode, this.featuredReviewStatus, this.featuredReviewErrorMessage, this.featuredReviewDetails, this.reviewDisclaimer, this.reviewDivider, (0, l._)("div", "pf-mt-16", [this.getAddReviewButtonNode()])])
            }, H.prototype.setValuesForExistingReview = function() {
                this.featuredReviewCheckBox.checked = this.existingReview.isFeatured, this.existingReview.featuredReviewData.instagramUrl && (this.instagramUrl.value = this.existingReview.featuredReviewData.instagramUrl), this.existingReview.isFeatured && this.featuredReviewDetails.classList.remove("hidden")
            }, H.prototype.getReviewDividerNode = function() {
                return (0, l._)("div", "review-divider")
            }, H.prototype.getTableBlockNode = function() {
                let t = "";
                const e = [];
                var i;
                (this.badges.forEach((t => {
                    e.push((0, l._)("span", "pf-badge pf-badge-small pf-badge--default pf-mr-8", t))
                })), this.colorCodes.length) && (t = (0, l._)("span", "swatches__item", [(0, l._)("span", {
                    className: "review-item__swatch-item",
                    title: this.reviewVariant.color,
                    style: "background: linear-gradient(90deg, {color1} 50%, {color2} 50%)".replace("{color1}", this.colorCodes[0]).replace("{color2}", null !== (i = this.colorCodes[1]) && void 0 !== i ? i : this.colorCodes[0])
                })]));
                return (0, l._)("div", "pf-d-flex pf-m-0", [(0, l._)("div", "", [(0, l._)("img", {
                    className: "img-responsive center-block",
                    src: this.reviewVariant.imgUrl,
                    attr: {
                        width: 90
                    }
                })]), (0, l._)("div", "", [(0, l._)("div", "pf-h5 pf-pl-24", this.reviewableItem.getTitle()), (0, l._)("div", "pf-h5 pf-pl-24", [...e, t])])])
            }, H.prototype.getFeaturedReviewStatusNode = function() {
                return (0, l._)("label", "review-form__featured pf-ui-body pf-mr-16 pf-mt-12 pf-mb-8", [this.featuredReviewCheckBox = (0, l._)("input", {
                    type: "checkbox",
                    attr: {
                        value: 0
                    },
                    prop: {
                        onchange: this.renderDetails.bind(this)
                    },
                    className: "pf-mr-8",
                    style: {
                        marginTop: "6px"
                    }
                }), (0, l._)("span", {
                    innerHTML: dlang("reviews", "I want my review to be considered as a {linkStart}featured review{linkEnd} on Printful's website").replace("{linkStart}", `<a class="pf-link" target="_blank" href="${langUrl("/faq/products/478-how-can-i-get-featured-on-printful-s-website-")}">`).replace("{linkEnd}", "</a>")
                })])
            }, H.prototype.getFeaturedReviewErrorMessageNode = function() {
                return this.featuredReviewErrorMessage = (0, l._)("div", "error-message pf-text-red hidden", dlang("reviews", "This field is required"))
            }, H.prototype.renderDetails = function(t) {
                const e = t.target;
                e.checked ? (e.value = 1, this.featuredReviewDetails.classList.remove("hidden")) : (e.value = 0, this.featuredReviewDetails.classList.add("hidden"))
            }, H.prototype.getFeaturedReviewDetailsNode = function() {
                return (0, l._)("div", "hidden", [(0, l._)("label", {
                    className: "pf-text-muted pf-ui-body pf-mb-16",
                    innerHTML: dlang("reviews", "Weâ€™ll approve your submission if the content follows our {linkStart}featured reviews policy{linkEnd}, and display it with a link to your product on your storefront").replace("{linkStart}", `<a class="pf-link" target="_blank" href="${langUrl("/faq/products/478-how-can-i-get-featured-on-printful-s-website-")}">`).replace("{linkEnd}", "</a>")
                }), (0, l._)("label", "pf-h5", [dlang("reviews", "Link to an Instagram post showcasing the product")]), this.instagramUrl = (0, l._)("input", {
                    type: "text",
                    className: "form-control pf-mb-12"
                }), this.urlErrorMessage = (0, l._)("div", "pf-text-red hidden pf-ui-body", [dlang("reviews", "Please provide a valid link")])])
            }, H.prototype.uploadCallback = function(t) {
                this.nodeSubmit && (this.nodeSubmit.classList.remove("disabled"), this.nodeSubmit.innerText = dlang("reviews", this.submitButtonText), t || (this.nodeSubmit.classList.add("disabled"), this.nodeSubmit.innerText = lang("Waiting for imagesâ€¦")))
            }, H.prototype.getReviewDisclaimerNode = function() {
                return (0, l._)("div", "pf-mt-24 pf-pb-16 pf-text-muted pf-ui-caption review-disclaimer", [(0, l._)("span", {
                    className: "pf-text-red pf-mr-2",
                    innerHTML: "&#42;"
                }), dlang("reviews", "Your review might be used for Printful's marketing purposes")])
            }, H.prototype.getAddReviewButtonNode = function() {
                return this.submitButtonText = this.existingReview ? dlang("reviews", "Edit review") : dlang("reviews", "Add review"), (0, l._)("div", "", [this.nodeSubmit = (0, l._)("a", {
                    className: "pf-btn pf-btn-primary pf-mr-12",
                    onclick: this.onSubmit.bind(this)
                }, dlang("reviews", this.submitButtonText)), (0, l._)("a", {
                    className: "pf-btn pf-btn-secondary",
                    onclick: this.onModalHide.bind(this)
                }, dlang("reviews", "Not now"))])
            }, H.prototype.setSelectedColor = function(t) {
                H.prototype.selectedColor = t
            }, H.prototype.setSelectedSize = function(t) {
                H.prototype.selectedSize = t
            }, H.prototype.uploadedImages = null, H.prototype.onSubmit = function() {
                let t = !1;
                this.overallQualityStarRatingNode.getStars().rating || (this.overallQualityStarRatingNode.nodeStars.forEach((t => {
                    t.classList.remove("pf-text-brown"), t.classList.add("pf-text-red")
                })), this.overallQualityStarRatingNode.nodeTextual.classList.add("pf-text-red"), this.overallQualityStarRatingNode.nodeTextual.textContent = dlang("reviews", "To rate is required"), t = !0), this.featuredReviewCheckBox.checked ? this.validateInstagramUrl(this.instagramUrl.value).then((e => {
                    e ? this.urlErrorMessage.classList.add("hidden") : (t = !0, this.urlErrorMessage.classList.remove("hidden")), this.formNode.images && 2 === Object.keys(this.formNode.images).length ? this.formNode.imageErrorMessage.classList.add("hidden") : (t = !0, this.formNode.imageErrorMessage.classList.remove("hidden")), g.D.hide(this.node), this.submitReview(t)
                })) : this.submitReview(t)
            }, H.prototype.onSubmitRe = function(t, e) {
                l.U.clearNode(this.node);
                const i = (0, l._)("div");
                t ? (this.modal.setTitle(dlang("reviews", "Product review submitted")), this.getReviewAffiliateBanner(i)) : (this.modal.setTitle(dlang("reviews", "Error submitting the review")), (0, l._)("div", null, e).append(i)), this.modal.setContent(i), this.onSubmittedCallback && this.onSubmittedCallback(e)
            }, H.prototype.getReviewAffiliateBanner = function(t) {
                const e = new m.L;
                e.components = {
                    "review-affiliate-banner": () => i.e(7944).then(i.bind(i, 8175))
                }, e.template = "<review-affiliate-banner\n                                @on-modal-close=\"emitEvent('on-modal-close')\"\n                                @on-ask-for-review=\"emitEvent('on-ask-for-review')\"\n                            />", e.emitEvent = t => {
                    "on-modal-close" === t && this.modal.remove(), "on-ask-for-review" === t && this.modal.setContent((0, l._)("div", null, [this.getExternalReviewRequest("trustpilot"), (0, l._)("div", null, [(0, l._)("a", {
                        text: lang("Review us"),
                        title: lang("Review us"),
                        href: "https://www.trustpilot.com/review/printful.com",
                        className: "pf-btn pf-btn-primary pf-mr-8",
                        target: "_blank",
                        attr: {
                            rel: "nofollow"
                        }
                    }), (0, l._)("a", {
                        text: lang("Cancel"),
                        title: lang("Cancel"),
                        className: "pf-btn pf-btn-secondary",
                        prop: {
                            onclick: () => {
                                this.modal.remove()
                            }
                        }
                    })])]))
                }, this.vueWrapper = new m.Z(e), this.vueWrapper.prepend(t)
            }, H.prototype.getExternalReviewRequest = function(t) {
                const e = "trustpilot" === t ? PF.ASSETS_URL + "images/products-catalog/trustpilot-review.svg" : PF.ASSETS_URL + "images/products-catalog/yelp-review.svg",
                    i = "trustpilot" === t ? dclang("products", "trustpilot review request", "Weâ€™re so glad youâ€™re loving Printful products! Would you consider <strong>reviewing us on Trustpilot?</strong> Sharing your experience and help others find Printful.") : dclang("products", "yelp review request", "Weâ€™re so glad youâ€™re loving Printful products! Would you consider <strong>reviewing us on Yelp?</strong> Sharing your experience and help others find Printful.");
                return (0, l._)("div", "pf-pb-16", [(0, l._)("p", "pf-h3 pf-m-0", dlang("", "Thanks for the positive reviews!")), (0, l._)("img", {
                    className: "img-responsive pf-mx-auto pf-my-24",
                    src: e,
                    attr: {
                        alt: "collect reviews " + t
                    }
                }), (0, l._)("p", {
                    className: "pf-m-0",
                    innerHTML: i
                })])
            }, H.prototype.validateInstagramUrl = function(t) {
                return (0, A.r)("product-reviews/validate-instagram-url", {
                    instagramUrl: t
                }).then((t => t.success))
            }, H.prototype.submitReview = function(t) {
                if (t) return;
                g.D.show(this.node);
                const e = [];
                for (const t in this.formNode.images) {
                    const i = {
                        key: this.formNode.images[t].temporaryFileKey,
                        isTemporaryFile: !0
                    };
                    !this.formNode.images[t].key || this.formNode.images[t] instanceof N.z || (i.key = this.formNode.images[t].key, i.isTemporaryFile = !1), e.push(i)
                }
                const i = this.existingReview && this.existingReview.reviewComplaint.text.length ? this.existingReview.reviewComplaint.text : this.serviceReviewFormNode.nodeTextarea.value,
                    n = {
                        productId: this.reviewableItem.getId(),
                        overallRating: this.overallQualityStarRatingNode.getStars().rating,
                        technique: this.reviewVariant.technique,
                        selectedVariant: this.reviewVariant.variantId,
                        pendingReviewId: this.pendingReviewId,
                        review: this.formNode.nodeTextarea.value,
                        complaint: i,
                        images: e,
                        isForFeatured: this.featuredReviewCheckBox.checked,
                        instagramUrl: this.instagramUrl.value,
                        isEditing: !!this.existingReview,
                        oldReviewId: this.existingReview ? this.existingReview.reviewId : null,
                        ratingCategoryCriterionIds: []
                    };
                (new f.m).submitProductReview(n, this.onSubmitRe.bind(this)), this.formNode.usedKeywords.size > 0 && this.saveUsedKeywords()
            }, H.prototype.saveUsedKeywords = function() {
                (0, A.r)("product-review-keywords/update-keyword-counters", {
                    keywords: Array.from(this.formNode.usedKeywords),
                    locale: d.A.locale
                }).then((() => Promise.resolve(!0)))
            }, H.prototype.setReviewStars = function() {
                const t = this.existingReview ? this.existingReview.overallQualityStarRating : this.overallQualityRatingCategory;
                this.overallQualityStarRatingNode = new z(t)
            }, H.prototype.onModalHide = function() {
                this.modal.hide()
            }, H.prototype.getVariantBadges = function() {
                return [this.reviewVariant.techniqueDisplayName, this.reviewVariant.size].filter((t => t))
            }, (globalThis || {}).PFProductReviewForm = H;
            var W = i(17570),
                G = i(20833),
                Y = i(17327);
            const K = function(t, e, i) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                if (this._reviewableItem = t, this.overallQualityRatingCategory = r, !PF.Customer.customerId) return void this.signupPopUp();
                const a = !!i;
                a && (this._reviewableItem.reviewVariant = i), this.onSubmittedCallback = e;
                const s = tag("div");
                g.D.show(s, {
                    minHeight: 120
                });
                const l = new v.Z.Par;
                return l.accessibility = !0, l.onShown = t => {
                    (0, Y.fo)(t.target.querySelector(".modal-body"))
                }, n && (l.onClose = () => {
                    (0, Y.KS)(n)
                }), this.modal = new v.Z(l), 0 === Object.keys(this._reviewableItem.reviewVariant).length ? this.reviewNotAllowedModal() : (this.modal.setTitle(dlang("reviews", "Add a review")), this.modal.setContent(s), this.modal.show(), o ? this.beginReviewing() : void(new f.m).isExceededProductVariantReviewCount(t, a, ((t, e) => {
                    t ? a ? this.editReview(i) : this.beginReviewing() : this.onNotAllowedToSubmit(e)
                })))
            };
            K.prototype.onNotAllowedToSubmit = function(t) {
                this.modal.setTitle("Oops!"), this.modal.setContent(tag("div", "", [tag("p", "pf-mb-32", t), tag("a", {
                    className: "pf-btn pf-btn-primary",
                    onclick: function() {
                        this.modal.remove()
                    }.bind(this)
                }, lang("Got it"))]))
            }, K.prototype.beginReviewing = function() {
                this.modal.setContent(new H(this._reviewableItem, this.modal, this.onSubmittedCallback, this.overallQualityRatingCategory))
            }, K.prototype.editReview = function(t) {
                this.modal.setContent(new H(this._reviewableItem, this.modal, this.onSubmittedCallback, this.overallQualityRatingCategory, t))
            }, K.prototype.signupPopUp = function() {
                const t = new G.R,
                    e = W.z.Par;
                e.returnUrl = t.path + (t.query.toString() ? "?" + t.query.toString() : ""), e.signUpContent = [
                    [tag("span", {
                        innerHTML: lang("<strong>Automatic</strong> order fulfillment")
                    })],
                    [tag("span", {
                        innerHTML: lang("Download free print file <strong>templates</strong> and <strong>mockups</strong>")
                    })], lang("No upfront or monthly fees")
                ], e.signInContent = [dlang("reviews", "Please sign in to review products.")], new W.z(e)
            }, K.prototype.reviewNotAllowedModal = function() {
                this.modal.setTitle(dlang("reviews", "Attention"));
                const t = tag("div", "review-form", [tag("div", "", dlang("reviews", "You can add a product review once your order is marked as delivered"))]);
                this.modal.setContent(t), this.modal.show()
            }, (globalThis || {}).PFProductReview = K;
            var Z = i(27815),
                Q = i(57998),
                J = i(71843),
                X = i(78009);

            function tt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, nt(n.key), n)
                }
            }

            function et(t, e, i) {
                return e && tt(t.prototype, e), i && tt(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function it(t, e, i) {
                return (e = nt(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function nt(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let rt = et((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), it(this, "reviewableItem", null), it(this, "callbackOnShowAll", null), it(this, "totalCount", 0), it(this, "totalCountBeforeFilters", 0), it(this, "isSimpleOverview", !1), it(this, "productReviewUrl", null), it(this, "isModal", !1)
            }));
            window && ((globalThis || {}).PFComponentsProductReviewListOverviewPar = rt);
            var ot = i(90227);
            const at = function(t, e, i, n, r) {
                this.reviewableItem = t, this.page = 1, this.stars = e || 0, this.withPictures = !1, this.locale = null, this.technique = null, this.ratingCategoryCriterionIds = [], this.colors = [], this.sizes = [], this.overallQualityRatingCategory = r, this.sortBy = null, this.shouldScrollToNode = void 0 === i || i, this.node = tag("div"), this.reloadFilters = n
            };
            (at.prototype = new l.U.Base).append = function(t) {
                return this.node.append(t), this
            }, at.prototype.shouldScrollToNode = !0, at.prototype.load = function(t) {
                var e, i, n, r, o, a, s, l, c, d, u;
                g.D.show(this.node, {
                    minHeight: 150
                }), this.page = null !== (e = t.page) && void 0 !== e ? e : this.page, this.stars = null !== (i = t.stars) && void 0 !== i ? i : this.stars, this.locale = null !== (n = t.locale) && void 0 !== n ? n : this.locale, this.technique = null !== (r = t.technique) && void 0 !== r ? r : this.technique, this.withPictures = null !== (o = t.withPictures) && void 0 !== o ? o : this.withPictures, this.withText = null !== (a = t.withText) && void 0 !== a ? a : this.withText, this.ratingCategoryCriterionIds = null !== (s = t.ratingCategoryCriterionIds) && void 0 !== s ? s : this.ratingCategoryCriterionIds, this.colors = null !== (l = t.colors) && void 0 !== l ? l : this.colors, this.sizes = null !== (c = t.sizes) && void 0 !== c ? c : this.sizes, this.sortBy = null !== (d = t.sortBy) && void 0 !== d ? d : this.sortBy, this.shouldScrollToNode = null !== (u = t.shouldScrollToNode) && void 0 !== u ? u : this.shouldScrollToNode, this.filters = {
                    productId: this.reviewableItem.getId(),
                    stars: this.stars,
                    locale: this.locale,
                    technique: this.technique,
                    withPictures: this.withPictures,
                    withText: this.withText,
                    ratingCategoryCriterionIds: this.ratingCategoryCriterionIds,
                    colors: this.colors,
                    sizes: this.sizes,
                    sortBy: this.sortBy
                }, (new f.m).getReviews({
                    ...this.filters,
                    perPage: 4,
                    page: this.page,
                    callback: this.render.bind(this)
                })
            }, at.prototype.render = function(t) {
                g.D.hide(this.node);
                var e = tag("div", "text-center", [tag("a", {
                    className: "pf-btn pf-btn-lg pf-btn-primary pf-mt-24",
                    onclick: function(t) {
                        (0, A.r)("product-reviews/get-product-variant-to-review", {
                            productId: this.reviewableItem.getId()
                        }, (e => {
                            this.reviewableItem.reviewVariant = e, new K(this.reviewableItem, this.load.bind(this, 1), null, t.target, this.overallQualityRatingCategory)
                        }))
                    }.bind(this)
                }, dlang("reviews", "Add a review"))]);
                l.U.clearNode(this.node);
                var i = dlang("reviews", "There are no submitted reviews for this product right now.") + " " + dlang("reviews", "Would you like to leave one?");
                const n = this.reviewableItem.getReviewRating().reviewCount;
                if (!n) return void at.renderNoResult(i, e, this.node);
                const r = new rt;
                r.reviewableItem = this.reviewableItem, r.callbackOnShowAll = this.reloadFilters, r.totalCount = t.totalCount, r.totalCountBeforeFilters = t.totalCountBeforeFilters, tag("div", "col-12", [tag("div", "row", [tag("div", "col-12 col-sm-3 margin-top-10 product-reviews__overview", [at.getReviewRatingNode(this.reviewableItem, this.overallQualityRatingCategory, !0), at.getReviewOverview(r)]), tag("div", "col-12 col-sm-9 pf-mt-40 margin-top-25 product-reviews__reviews-list", [this._review = tag("div"), this._paging = tag("div", "reviews-paging"), tag("div", "", [e])])])]).append(this.node);
                const o = document.getElementById("mobileOverview");
                o && (o.innerHTML = "", at.getReviewRatingNode(this.reviewableItem, this.overallQualityRatingCategory, !0).append(o), at.getReviewOverview(r).append(o));
                for (var a = h()(".pro-star-text"), s = [], c = 0; c < a.length; c++) s.push(h()(a[c]).outerWidth());
                var d = s.reduce((function(t, e) {
                    return t > e ? t : e
                }), 0);
                if (h()(".pro-star-text").css({
                        minWidth: d
                    }), t.totalCount || !n) {
                    for (const e of t.items) new O(e, this.onRequestDelete.bind(this, e), this.onRequestEdit.bind(this), this.load.bind(this, {}), this.reviewableItem.getTitle(), this.filters).append(this._review);
                    var u = new Z.O;
                    u.page = t.page, u.pages = t.pages, u.callback = function(t) {
                        this.load({
                            page: t
                        })
                    }.bind(this), new Q.L(u).append(this._paging), this.shouldScrollToNode ? this.scrollToNode() : this.shouldScrollToNode = !0
                } else at.renderNoResult(dlang("reviews", "There are no reviews matching selected criteria, would you like to leave one?"), e, this._review)
            }, at.renderNoResult = function(t, e, i) {
                tag("div", "col-12 pf-mt-24 pf-mb-48 pf-bg-lighter pf-py-64 text-center", [tag("img", {
                    className: "img-responsive center-block",
                    src: "/static/images/products-catalog/no-ratings-illustration.svg"
                }), tag("p", "pf-mt-24 pf-mb-0", t), e]).append(i)
            }, at.getReviewOverview = function(t) {
                var e = t.reviewableItem,
                    i = t.callbackOnShowAll,
                    n = t.totalCount,
                    r = t.totalCountBeforeFilters,
                    o = t.isSimpleOverview,
                    a = t.productReviewUrl,
                    s = e.getReviewOverview();
                if (!s || 0 === s.length) return tag("div");
                for (var c = {
                        tag: "div",
                        className: "products-review-overview",
                        els: []
                    }, d = 1; d <= 5; d++) {
                    var u = 0 === s[d] || o,
                        p = tag("");
                    p = u ? tag("span", "pro-star-text pf-pr-16", dnlang("products", "{count} star", "{count} stars", d).replace("{count}", d)) : tag("a", {
                        className: "pro-star-text pf-pr-16 pf-link",
                        href: a ? a + "_" + d : null,
                        target: X.dB.isOrderFlow() || X.dB.isProductPush() || X.dB.isGenerator() ? "_blank" : "_self",
                        attr: {
                            "aria-label": dlang("products", "See {count} star reviews").replace("{count}", d)
                        }
                    }, dnlang("products", "{count} star", "{count} stars", d).replace("{count}", d)), c.els.unshift(tag("div", {
                        className: "pf-mt-8",
                        onclick: u ? null : function(t) {
                            i && i(t)
                        }.bind(null, d)
                    }, [p, tag("span", "pro-progress-base", [tag("span", {
                        className: "pro-progress pf-bg-brown",
                        style: {
                            width: s[d] + "%"
                        }
                    })]), tag("span", "pf-pl-12", s[d] + "%")]))
                }
                return i && c.els.unshift(tag("div", "pf-mt-8 pf-mb-40", [tag("a", {
                    className: "pf-link",
                    onclick: i.bind(null, 0)
                }, dnlang("reviews", "{totalCount} ({totalCountBeforeFilters}) review", "{totalCount} ({totalCountBeforeFilters}) reviews", n).replace("{totalCount}", n.toString()).replace("{totalCountBeforeFilters}", r.toString()))])), (0, l.U)(c)
            }, at.prototype.onRequestDelete = function(t) {
                confirm(lang("Are you sure? This cannot be undone!")) && (g.D.show(this.node, {
                    minHeight: 150
                }), (new f.m).deleteReview(t.reviewId, h().proxy((function() {
                    this.load({
                        page: 1
                    })
                }), this)))
            }, at.prototype.onRequestEdit = function(t) {
                new K(this.reviewableItem, this.load.bind(this, 1), t)
            }, at.getReviewRatingStarNode = function(t) {
                for (var e = t.getReviewRating(), i = [], n = 1; n <= 5; n++) {
                    var r = e.rating,
                        o = "";
                    o = parseInt(r) !== r && Math.round(r) === n ? "-half" : n > r ? "-outline" : "", i.push(tag("span", "pf-i pf-i-18 pf-i-star" + o + " pf-mr-6 pf-text-brown"))
                }
                return i
            }, at.getReviewRatingNode = function(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                i = i || 0;
                const o = t.getReviewRating();
                if (!o.reviewCount) return {
                    tag: "a",
                    className: "pf-link",
                    text: dlang("reviews", "Review product"),
                    onclick: function(i) {
                        (0, A.r)("product-reviews/get-product-variant-to-review", {
                            productId: t.getId()
                        }, (n => {
                            t.reviewVariant = n, new K(t, r, null, i.target, e)
                        }))
                    }
                };
                var a, s = J.h.getReviewRatingStarNode(t),
                    l = o.reviewCount;
                return i ? (this.reviewCount = l, a = tag("div", "", [tag("div", {
                    className: "pf-h2 pf-normal",
                    attr: {
                        "aria-hidden": "true"
                    }
                }, parseFloat(o.rating).toFixed(1)), tag("div", {
                    className: "pf-mt-8 star-rating__stars star-rating__stars--inline",
                    attr: {
                        "aria-label": lang("{rating} out of 5 stars").replace("{rating}", o.rating)
                    }
                }, s)])) : a = tag("a", {
                    className: "pf-link",
                    onclick: n.bind(this, parseFloat(o.rating).toFixed(1)),
                    data: {
                        toggle: "tooltip",
                        placement: "bottom"
                    }
                }, [tag("div", {
                    className: "star-rating__stars star-rating__stars--inline",
                    attr: {
                        "aria-label": lang("{rating} out of 5 stars").replace("{rating}", o.rating)
                    }
                }, s), nlang("%d Review", "%d Reviews", l)]), a
            }, at.prototype.scrollToNode = function() {
                const [t, e] = [h()(".product-reviews__reviews-list"), h()(".catalog__header")], i = h()(window).width() < ot.k.SIZES.md ? 20 : e.height();
                h()("html, body").animate({
                    scrollTop: t.offset().top - i
                }, 1e3)
            }, (globalThis || {}).PFProductReviewList = at;
            var st = i(91128),
                lt = i(79421),
                ct = i(98737),
                dt = i(12010),
                ut = i(84294),
                pt = i(26750),
                ht = i(17977),
                ft = i(90446),
                gt = i(48433),
                vt = i(48488),
                mt = i.n(vt),
                _t = i(44353),
                yt = i(61756);
            const bt = function(t) {
                var e, i;
                this.product = t.product, this.variant = t.variant, this.showFulfillmentCountries = t.showFulfillmentCountries, this.technique = t.technique, this.chooseButtonTitle = t.chooseButtonTitle || lang("Choose"), this.productUrl = t.url, this.isModal = t.isModal, this.sellingRegion = (null == t ? void 0 : t.sellingRegion) || null, this.disableEdt = (null == t ? void 0 : t.disableEdt) || !1;
                var a = t.callback;
                t.className = t.className || "col-md-3 col-xs-6";
                var s = [];
                const d = t.isSampleOrderContext && this.product.isDisabledInSample,
                    u = this.product.isPersonalUseBrand() && !X.dB.isProductsPricing() && !X.dB.isOrderFlow(),
                    p = this.product.doesNotMatchSellingRegion && !X.dB.isProductsPricing() && !X.dB.isGenerator();
                let h = "";
                this.product.isSterlingSilver && (h = tag("span", "pf-ui-legal pf-bold", dclang("products", "Product feature", "Sterling Silver")));
                const f = t.hideBadge ? "" : this._getFirstLevelBadge();
                f && s.push(f), null !== (e = this.product) && void 0 !== e && e.isEcoFriendly ? s.push(tag("span", {
                    className: "product-item__badge product-item__badge--eco pf-p-4",
                    attr: {
                        title: dclang("products", "badge", "Eco-friendly")
                    }
                }, [tag("span", {
                    className: "pf-d-flex pf-h-100 pf-align-items-center",
                    innerHTML: `<img src="/static/images/layout/eco-friendly-icon.svg" class="pf-ml-0 pf-mr-4" alt="${dclang("products","badge","Eco-friendly")}">\n                            <p class="pf-m-0">${dclang("products","badge","Eco-friendly")}</p>`
                })])) : this._showMadeInBadge(s), d && (s = [tag("span", "product-item__badge product-item__badge--disabled", [dclang("products", "Product is", "Not available for sample orders")])]), t.isUnavailable && (s = [tag("span", "product-item__badge product-item__badge--disabled", [dclang("products", "Product is", "Temporarily unavailable")])]), this.product.isTemporaryOutOfStock && (s = [tag("span", "product-item__badge product-item__badge--out-of-stock", [lang("Out of stock")])]), u && (s = [tag("span", "product-item__badge product-item__badge--disabled", [dclang("products", "Product is", "Only available for personal orders")])]), s.length && s[0].setAttribute("tabindex", "0");
                var g = {};
                this.product.isInCategory(n.s.CATEGORY_HATS) && (g.backgroundSize = "contain", g.backgroundColor = "white"), g.width = "100%";
                let v = "";
                (this.product.isTemporaryOutOfStock || d || t.isUnavailable || u) && (v = " square-box--out-of-stock");
                let m = "square-box pf-rounded-top" + v;
                t.isLocked && (m += " pf-rounded-bottom"), p && (g.opacity = "0.5");
                const _ = this._getProductImages(this.product),
                    y = tag("div", m, [this._squareContent = tag("div", "square-content", [tag("img", {
                        className: _.hoverImage ? "square-box__img" : "",
                        prop: {
                            width: "254",
                            src: t.skipLazyLoad ? _.primaryImage : st.WF,
                            loading: t.skipLazyLoad ? "eager" : "lazy",
                            alt: this.product ? this.product.customTitle : ""
                        },
                        data: {
                            src: _.primaryImage
                        },
                        style: g
                    }), _.hoverImage ? tag("img", {
                        className: "square-box__hover-img",
                        prop: {
                            width: "254",
                            src: _.hoverImage,
                            alt: this.product ? this.product.customTitle : ""
                        },
                        style: g
                    }) : "", tag("span", "product-item__empty-content", s)])]);
                ht.i.isFavoriteProductsEnabled().then((e => {
                    const i = (new ut.PFProductsCatalogUtilsStore).categories.getActiveCategoryId();
                    !e || (this.product.isTemporaryOutOfStock || t.isUnavailable) && i !== pt.p.ID_FAKE_FAVORITES || null != t && t.hideFavorites || (tag("span", {
                        className: "pf-d-flex pf-justify-content-center pf-align-items-center product-item__favorites-icon pf-mx-8 pf-mb-8",
                        attr: {
                            "data-toggle": "tooltip",
                            "data-container": "body",
                            "aria-label": dlang("products", "Add to favorites"),
                            title: this._getFavoritesNodeHoverTitle(),
                            tabindex: 0
                        },
                        style: {
                            zIndex: 1
                        }
                    }, [this._favoritesNode = tag("i", {
                        className: this._getFavoritesNodeClassName(),
                        onclick: this._openFavoritesLink.bind(this),
                        prop: {
                            onmouseover: this._onMouseoverFavorite.bind(this),
                            onmouseout: this._onMouseoutFavorite.bind(this)
                        },
                        attr: {
                            "data-toggle": "tooltip",
                            "data-container": "body",
                            title: this._getFavoritesNodeHoverTitle()
                        }
                    }), this._favoritesOverlay = tag("span")]).prepend(this._squareContent), (0, r.Vu)() || $(this._favoritesNode).tooltip())
                }));
                var b = c.fromProduct(this.product);
                l.U.addClassName(b.node, "detail pf-m-0 pf-mb-12");
                var w = this.variant ? this.variant.name : this.product.model || this.product.title;
                this.product.brand && (w = this.product.brand + " " + w), this.product.displayName && (w = this.product.displayName);
                var P = this.product.reviewRating;
                if (P && P.reviewCount)
                    for (var C = [], T = 1; T <= 5; T++) {
                        var k = this.product.reviewRating.rating,
                            S = "";
                        parseInt(k) !== k && Math.round(k) === T ? S = "-half" : T > k && (S = "-empty"), C.push(tag("span", "icon-star" + S + " star-rating__star"))
                    }
                var E = t.url && !t.isUnavailable;
                const O = t.overrideTitle || w,
                    I = this.product.isTemporaryOutOfStock || t.isUnavailable || p ? " product-item--disabled" : "";
                let N;
                const R = this.sellingRegion || ft.V.sellingRegion;
                R ? (N = [this._averageDeliveryNode = tag("div")], this._renderAverageDelivery(R)) : N = [this._getFulfillmentDaysNode(), this._getFulfillmentCountries(), this._getBrandingOptionsNode()], (p || t.isLocked) && (E = !1);
                const D = t.isSecondaryStyleButton ? "pf-btn-secondary" : "pf-btn-primary",
                    x = t.productItemClassName || "pf-mb-16 pf-mb-md-24 pf-mb-lg-32";
                var A = tag(E ? "a" : "div", {
                    className: "product-item " + x + " pf-rounded" + I,
                    attr: {
                        "aria-label": `${O}`,
                        role: "list",
                        target: t.isNewTab ? "_blank" : "_self",
                        draggable: !1
                    }
                }, [y, tag("div", {
                    className: (t.isLocked ? "pf-px-0" : "pf-px-12") + " pf-pt-12 pf-pb-8 product-item__details",
                    attr: {
                        tabindex: 0,
                        "aria-label": dlang("products", "Product description")
                    }
                }, [this._getPrintfulOriginalNode(), h, this._getFastShippingNode(), tag("div", "product-item__detail pf-mb-12 pf-ui-body", O), o.Q.createPeriodicPriceDiscountAnnouncement(this.product, !1, "pf-mb-16"), !t.hideRating && !this.isSuggested && P && P.reviewCount ? this._getProductReviewNode(P, C) : "", tag("div", "product-item__detail__price pf-my-12", t.hidePrice ? null : [this._getProductPriceNode(), this.product.hasFreeShipping ? tag("span", "product-item__detail__free-shipping pf-ui-caption pf-bold", dclang("products", "badge", " + free shipping")) : ""]), t.hideColors || this.isSuggested ? "" : b, !t.showSizes && (t.hideProfile || !this.product.isEmbroidery() || this.product.hasEmbroideryProfile()) || this.isSuggested ? "" : tag("div", {
                    className: "product-item__sizes pf-pb-8 pf-text-muted pf-ui-caption pf-bold",
                    attr: {
                        "aria-label": dlang("products", "This product has {sizes} available sizes").replace("{sizes}", this._getSizeText().replace("-", ` ${lang("to")} `))
                    }
                }, [this._getSizeText()]), !t.hideProfile && this.product.isEmbroidery() && this.product.hasEmbroideryProfile() ? tag("div", "product-item__embroidery-profile pf-my-12", [dclang("products", "low/high/beanie profile", "{type} profile").replace("{type}", this.product.getEmbroideryProfile())]) : "", t.hideAdditionalInfo ? "" : N, !this.variant && this.product.extraDescription ? tag("div", {
                    innerHTML: this.product.extraDescription
                }) : "", t.showChooseButton ? tag("div", "product-item__choose-button", [tag("div", "pf-p-12", [tag("span", `pf-btn pf-btn-block ${D}`, [this.chooseButtonTitle])])]) : ""])]);
                const L = !this.product.isTemporaryOutOfStock && !d;
                !L && (null === (i = this.category) || void 0 === i ? void 0 : i.id) !== pt.p.ID_FAKE_FAVORITES || t.isLocked || (t.callback && (A.onclick = e => {
                    if (L && !e.target.classList.contains("product-item__favorite")) {
                        if (document.querySelector(`#review-tooltip-${this.product.productId}`)) return !!e.target.matches(".pf-link") && e.target.click();
                        if (window.getSelection().toString()) return !1;
                        if (X.dB.addRecentMockup({
                                id: t.product.productId,
                                title: O,
                                generatorUrl: t.product.getMockupGeneratorUrl(),
                                catalogPageUrl: t.product.catalogPageUrl,
                                image: _.primaryImage
                            }), !((2 == e.which || 4 == e.button || e.metaKey || e.ctrlKey) && E)) {
                            var i = e.defaultPrevented,
                                n = window.location.href;
                            a(this.product, e);
                            var r = i !== e.defaultPrevented,
                                o = n !== window.location.href;
                            e.preventDefault(), !E || r || o || (window.location.href = t.url)
                        }
                    }
                }), L && E && (A.href = t.url)), p && !t.isLocked && (A.onclick = t => {
                    document.querySelectorAll(".does-not-match-selling-region-tooltip-container").forEach((t => {
                        $(t).tooltip("destroy"), t.remove()
                    }));
                    const e = tag("span", {
                        className: "pf-position-absolute pf-d-block does-not-match-selling-region-tooltip-container",
                        style: {
                            top: `${t.pageY}px`,
                            left: `${t.pageX}px`
                        },
                        attr: {
                            tabindex: 0
                        }
                    });
                    e.append(document.body);
                    let i = dlang("sellingRegion", "Adjust your {linkStart}default catalog and delivery preferences{linkEnd} to select this product");
                    PF.Customer.isLogged() && !PF.Customer.isB2c() && (i = dlang("products", "Adjust your {linkStart}default selling preferences{linkEnd} to select this product")), $(e).tooltip({
                        template: '<div class="tooltip does-not-match-selling-region-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "focus",
                        placement: "top",
                        html: !0,
                        title: i.replace("{linkStart}", '<a href="javascript:">').replace("{linkEnd}", "</a>")
                    }), $(e).focus(), $(e).on("shown.bs.tooltip", (() => {
                        document.querySelector(".does-not-match-selling-region-tooltip a").addEventListener("click", (() => {
                            (0, gt.l3)()
                        }))
                    }))
                }), this.node = tag("div", {
                    className: t.className,
                    style: t.customStyle
                }, [A])
            };
            bt.prototype = new l.U.Base, bt.prototype._openFavoritesLink = function() {
                let t = (new ut.PFProductsCatalogUtilsStore).categories.getActiveCategoryId();
                const e = this.product.favoriteCatalogCategoryId;
                return t && t !== pt.p.ID_FAKE_FAVORITES || (t = e || this.product.mainCatalogCategoryId), (0, lt.Z)("favorite-product/update-favorite-product", {
                    productId: this.productId || this.product.productId,
                    catalogCategoryId: t
                }).then((t => {
                    t && (this.product.isFavorite = !this.product.isFavorite, this._favoritesNode.className = this._getFavoritesNodeClassName(), this._favoritesNode.setAttribute("data-original-title", this._getFavoritesNodeHoverTitle()), this._favoritesNode.classList.add("product-item__favorites-icon--bouncy"), this.product.isFavorite && this._favoritesOverlay.classList.add("product-item__favorites-icon--ripple"), setTimeout((() => {
                        this._favoritesNode.classList.remove("product-item__favorites-icon--bouncy"), this._favoritesOverlay.classList.remove("product-item__favorites-icon--ripple")
                    }), 450), yt.NN.emit(yt.NN.PRODUCT_FAVORITE_STATUS_UPDATED, {
                        productId: this.productId || this.product.productId,
                        status: this.product.isFavorite,
                        createdAt: t.created_at ? mt()(t.created_at).unix() : null
                    }), delete ft.V.cachedData[this.product.productId])
                })), !1
            }, bt.prototype._getFavoritesNodeClassName = function() {
                return (this.product.isFavorite ? "pf-i-heart pf-text-red" : "pf-i-heart-outline pf-i-dark") + " pf-i pf-i-24 pf-pointer product-item__favorite"
            }, bt.prototype._onMouseoverFavorite = function() {
                this.product.isFavorite ? (l.U.removeClassName(this._favoritesNode, "pf-text-red"), l.U.addClassName(this._favoritesNode, "pf-text-dark-red")) : l.U.removeClassName(this._favoritesNode, "pf-i-dark")
            }, bt.prototype._onMouseoutFavorite = function() {
                this.product.isFavorite ? (l.U.addClassName(this._favoritesNode, "pf-text-red"), l.U.removeClassName(this._favoritesNode, "pf-text-dark-red")) : l.U.addClassName(this._favoritesNode, "pf-i-dark")
            }, bt.prototype._getBrandingOptionsNode = function() {
                var t = "";
                return this.product.hasTearAwayLabel() && (t = tag("span", {
                    className: "product-item__label product-item__label--branding",
                    attr: {
                        "data-toggle": "tooltip",
                        title: dlang("products", "Tear-away label"),
                        tabindex: "0",
                        "aria-label": dlang("products", "Tear-away label")
                    }
                }, [tag("i", {
                    className: "pf-i pf-i-tag pf-i-18",
                    attr: {
                        "aria-hidden": "true"
                    }
                })]), (0, r.Vu)() || $(t).tooltip({
                    html: !0
                })), t
            }, bt.prototype._getFulfillmentDaysNode = function() {
                var t = "";
                if (null !== this.product.fulfillmentDays) {
                    var e = Math.round(10 * this.product.fulfillmentDays) / 10,
                        i = langUrl("/faq/shipping-packaging-fulfillment/192-how-long-is-fulfillment-time-");
                    t = tag("div", "pf-mb-12 product-item__fulfilment-days", [this.moreInfoSpan = tag("span", {
                        className: "pf-link",
                        text: dclang("products", "fulfillment", "Ready in"),
                        onclick: function(t) {
                            t.stopPropagation(), t.preventDefault(), window.open(i, "_blank")
                        }
                    }), tag("strong", "", [tag("span", "product-item__fulfilment-days__tilde", " ~ "), dnclang("products", "fulfillment", "{days} business day", "{days} business days", Math.floor(e)).replace("{days}", e)])]), this.moreInfoSpan.addEventListener("mousedown", (function(t) {
                        4 === t.buttons && (t.stopPropagation(), t.preventDefault(), window.open(i, "_blank"))
                    }))
                }
                return t
            }, bt.prototype._getSizeText = function() {
                var t = this.variant && this.variant.size ? [this.variant.size] : this.product.sizes.slice(0);
                if (0 === t.length) return "";
                if (1 === t.length) {
                    var e = t.pop();
                    return e === bt.ONE_SIZE && (e = bt.ONE_SIZE_TRANSLATED), e
                } {
                    let e = t.shift(),
                        i = t.pop();
                    return e.indexOf("yrs") && (e = e.replace("yrs", dclang("products", "Product size (human years)", "yrs"))), e.indexOf("in") && (e = e.replace("in", dclang("products", "Product size (inches)", "in"))), i.indexOf("yrs") && (i = i.replace("yrs", dclang("products", "Product size (human years)", "yrs"))), i.indexOf("in") && (i = i.replace("in", dclang("products", "Product size (inches)", "in"))), e + " - " + i
                }
            }, bt.ONE_SIZE = "One Size", bt.ONE_SIZE_TRANSLATED = dlang("products", "One Size"), bt.prototype._getProductPriceNode = function() {
                var t = this.product.shouldShowTaxInclusion();
                return this.variant ? o.Q.createDiscountElementFromPriceData({
                    priceData: this.variant.priceData,
                    showTaxInclusion: t
                }) : o.Q.createDiscountElementFromPriceRange(this.product.priceRange, 0, t)
            }, bt.prototype._getFastShippingNode = function() {
                var t;
                if (this.sellingRegion || ft.V.sellingRegion) return "";
                if (null === (t = PF.Customer) || void 0 === t || !t.location) return "";
                const e = {
                        ES: {
                            region: ct.T.REGION_EUROPE_SPAIN,
                            label: clang("fast shipping label", "Fast delivery in Spain")
                        },
                        JP: {
                            region: ct.T.REGION_JAPAN,
                            label: clang("fast shipping label", "Fast delivery in Japan")
                        },
                        CA: {
                            region: ct.T.REGION_CANADA,
                            label: clang("fast shipping label", "Quick delivery to Canada"),
                            class: "ca-fs"
                        }
                    },
                    i = PF.Customer.location.country,
                    n = e[i];
                return n && Object.values(this.product.fulfillmentCountriesMap).indexOf(n.region) > -1 ? tag("div", "pf-ui-caption product-item__fast-shipping-container", [tag("span", `flag ${n.class||i.toLowerCase()}`), tag("strong", "pf-text-dark", n.label)]) : ""
            }, bt.prototype._getPrintfulOriginalNode = function() {
                return this.product.isPrintfulOriginal ? tag("h5", "pf-d-block pf-mb-8 pf-h5 pf-text-cyan-800", "Printful Original") : ""
            }, bt.prototype._getFulfillmentCountries = function() {
                if (!this.showFulfillmentCountries) return !1;
                const t = this.variant ? this.variant.getFulfillmentCountries() : this.product.fulfillmentCountries,
                    e = Object.keys(t).map((t => (0, dt.G)(t))).join(d.A.isJp() ? "ã€" : ", "),
                    i = dlang("products", "Ships worldwide, stocked in the {regions}").replace("{regions}", e),
                    n = tag("span", {
                        className: "fulfillmentLabelContainer",
                        attr: {
                            "data-toggle": "tooltip",
                            tabindex: "0",
                            "aria-label": i,
                            title: i
                        }
                    }, [Object.keys(t).map((e => tag("span", {
                        className: "pf-badge pf-badge-location pf-mr-4 pf-mb-4",
                        style: {
                            "background-color": t[e].color
                        },
                        attr: {
                            "aria-hidden": "true"
                        }
                    }, (0, dt.W)(t[e].title))))]);
                return (0, r.Vu)() || $(n).tooltip({
                    html: !0
                }), n
            }, bt.prototype._getProductReviewNode = function(t, e) {
                const i = tag("span", "", [tag("span", "star-rating__stars star-rating__stars--inline pf-mr-0", e), tag("i", {
                        className: "pf-i pf-i-18 pf-i-chevron-down pf-text-muted product-item__review-arrow",
                        id: `review-arrow-${this.product.productId}`
                    })]),
                    n = tag("span", {
                        className: "product-item__review no-outline",
                        attr: {
                            tabindex: 0,
                            "aria-label": lang("{rating} out of 5 stars").replace("{rating}", t.rating),
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            "data-container": this.isModal ? "" : "body",
                            "data-html": "true",
                            "data-trigger": "click"
                        },
                        innerHTML: i.outerHTML
                    });
                return $(n).tooltip({
                    html: !0,
                    template: `\n                <div class="tooltip product-item__review-tooltip ${this.isModal?"":"catalog"}">\n                     <div id="review-tooltip-arrow" class="tooltip-arrow"></div>\n                     <div id="review-tooltip-${this.product.productId}" class="pf-mx-8 tooltip-inner pf-ui-caption product-item__review-tooltip-content pf-border" tabindex="0"></div>\n                </div>\n            `
                }), document.addEventListener("click", this._resetReviewArrow), n.addEventListener("mousedown", (t => {
                    this._resetReviewArrow(), n.classList.add("no-outline");
                    const e = n.querySelector(`#review-arrow-${this.product.productId}`);
                    let i = document.querySelector(`#review-tooltip-${this.product.productId}`);
                    if (i) {
                        var r;
                        $(n).tooltip("hide"), null === (r = this.node.querySelector(".product-item__rating")) || void 0 === r || r.focus()
                    } else {
                        if (e.classList.add("product-item__review-arrow--open"), e.classList.remove("product-item__review-arrow--close"), $(n).tooltip("show"), i = document.querySelector(`#review-tooltip-${this.product.productId}`), i) {
                            const t = i.querySelectorAll(".pro-star-text"),
                                e = Math.max.apply(Math, Object.values(t).map((t => t.offsetWidth)));
                            t.forEach((t => t.style.minWidth = `${e}px`))
                        }
                        t.preventDefault(), i.focus()
                    }
                })), n.addEventListener("focus", (() => {
                    window.addEventListener("keyup", (t => {
                        if ("Tab" === t.key) n.classList.remove("no-outline");
                        else if ("Enter" === t.key || "Escape" === t.key) {
                            var e;
                            if (n.hasAttribute("aria-describedby")) $(n).tooltip("hide"), null === (e = this.node.querySelector(".product-item__rating")) || void 0 === e || e.focus()
                        }
                    }))
                })), n.addEventListener("click", (t => {
                    t.stopPropagation(), t.preventDefault()
                })), this._getProductReviewOverview(n, t, e), tag("div", {
                    className: "product-item__rating pf-ui-caption",
                    attr: {
                        tabindex: 0
                    }
                }, [tag("div", "product-item__rating-stars star-rating__stars star-rating__stars--inline pf-d-none", e), tag("span", "review-tooltip pf-mr-8 collapsed", [n]), tag("span", "pf-m-0 pf-mt-4 pf-d-inline-block", nlang("%d review", "%d reviews", t.reviewCount))])
            }, bt.prototype._getProductReviewOverview = function(t, e, i) {
                const n = new u.v(this.product),
                    r = this.productUrl + "#reviews",
                    o = new rt;
                o.reviewableItem = n, o.productReviewUrl = r;
                const a = tag("div", "", [tag("div", "star-rating__stars star-rating__stars--inline", [tag("div", "pf-mt-16", [i, tag("span", "pf-ml-8 pf-bold", dlang("products", "{rating} out of 5").replace("{rating}", e.rating))]), tag("span", "pf-m-0 pf-mt-4 pf-d-inline-block", nlang("%d review", "%d reviews", e.reviewCount))]), at.getReviewOverview(o), tag("div", "pf-mb-4 pf-mt-8 text-center", [tag("a", {
                    target: this.isModal || X.dB.isGenerator() ? "_blank" : "_self",
                    className: "pf-link",
                    href: r,
                    attr: {
                        tabindex: 0
                    }
                }, [dlang("products", "See all reviews")])])]);
                t.setAttribute("data-original-title", a.outerHTML)
            }, bt.prototype._resetReviewArrow = function() {
                const t = document.querySelector(".product-item__review-arrow--open");
                t && (t.classList.add("product-item__review-arrow--close"), t.classList.remove("product-item__review-arrow--open"))
            }, bt.prototype._getFavoritesNodeHoverTitle = function() {
                return this.product.isFavorite ? dlang("products", "Remove from favorites") : dlang("products", "Add to favorites")
            }, bt.prototype._renderAverageDelivery = function(t) {
                var e;
                this._averageDeliveryNode && l.U.clearNode(this._averageDeliveryNode);
                const i = this.product;
                if (!i.doesNotMatchSellingRegion && !this.disableEdt && null !== (e = i.estimateDeliveryFormatted) && void 0 !== e && e.title) {
                    let e = null;
                    if (i.estimateDeliveryFormatted.range) e = tag("div", "product-item__detail__delivery", [tag("img", {
                        src: t.getIcon(),
                        className: "pf-mr-4",
                        style: {
                            width: "24px",
                            marginTop: "-4px"
                        },
                        alt: t.getName()
                    }), i.estimateDeliveryFormatted.title, " ", i.estimateDeliveryFormatted.range]);
                    else {
                        var n, r;
                        let t = "";
                        i.estimateDeliveryFormatted.tooltip && (t = tag("i", {
                            title: i.estimateDeliveryFormatted.tooltip,
                            className: "pf-i pf-i-20 pf-i-information pf-text-gray pf-ml-4",
                            "data-html": "true",
                            "data-toggle": "tooltip",
                            "data-placement": "top"
                        }));
                        const o = null === (n = null !== (r = i.estimateDeliveryFormatted.tooltip) && void 0 !== r ? r : i.estimateDeliveryFormatted.title) || void 0 === n ? void 0 : n.replace(/<\/?strong>/g, "");
                        e = tag("p", "", [tag("span", {
                            innerHTML: i.estimateDeliveryFormatted.title,
                            attr: {
                                "aria-label": o
                            }
                        }), t]), t && $(t).tooltip({
                            html: !0
                        })
                    }
                    e && e.append(this._averageDeliveryNode)
                }
            }, bt.prototype._showMadeInBadge = function(t) {
                if (!(this._showMadeInUsBadge() || this._showMadeInEuBadge())) return;
                const e = dclang("products", "badge", "Made in");
                let i = "",
                    n = "",
                    r = "";
                this._showMadeInUsBadge() ? (i = "product-item__badge--usa", n = dclang("products", "badge", "Made in USA"), r = "/static/images/layout/usa-flag.png") : this._showMadeInEuBadge() && (i = "product-item__badge--eu", n = dclang("products", "badge", "Made in EU"), r = "/static/images/layout/flags/eu.svg"), t.push(tag("span", {
                    className: `product-item__badge ${i} pf-p-4`,
                    attr: {
                        title: n
                    }
                }, [tag("span", "pf-d-flex pf-h-100 pf-align-items-center", [tag("p", "pf-m-0 pf-uppercase", e), tag("img", {
                    src: r,
                    className: "pf-ml-8 pf-mr-0 pf-h-100",
                    alt: n
                })])]))
            }, bt.prototype._showMadeInUsBadge = function() {
                const t = this.sellingRegion || ft.V.sellingRegion,
                    e = this.product.isMadeInUSA();
                return t ? t.isNorthAmerica() && e : e
            }, bt.prototype._showMadeInEuBadge = function() {
                const t = this.sellingRegion || ft.V.sellingRegion,
                    e = this.product.isMadeInEU;
                return t ? t.isEuBadgeRegion() && e : e
            }, bt.prototype._getFirstLevelBadge = function() {
                return this.product.hasClearance ? tag("span", "pf-badge pf-badge-rect pf-badge--primary pf-badge-position-card", dclang("products", "badge", "clearance")) : this.product.isPopular ? tag("span", "pf-badge pf-badge-rect pf-badge--primary pf-badge-position-card", dclang("products", "badge", "bestseller")) : this.product.hasBetaAccess && !s.W.PRODUCTS_WITH_HIDDEN_BETA_BADGE.includes(this.product.productId) ? tag("span", "pf-badge pf-badge-rect pf-badge--beta pf-badge-position-card", dclang("products", "badge", "beta")) : this.product.isNew ? tag("span", "pf-badge pf-badge-rect pf-badge--new pf-badge-position-card", dclang("products", "badge", "new")) : this.product.isSuggested ? tag("span", {
                    className: "pf-badge pf-badge-rect pf-badge--info pf-badge-position-card",
                    style: "text-transform: none"
                }, dclang("products", "badge", "Printful suggests")) : ""
            }, bt.prototype._getProductImages = function(t) {
                let e, i;
                if (t.customImageUrl) e = this.product.customImageUrl, i = this.product.hoverImageUrl || null;
                else {
                    const t = _t.y.getProductImageByType(this.product.images, this.product.mainCatalogCategoryId);
                    e = (null == t ? void 0 : t.primary) || this.product.urlImage, i = (null == t ? void 0 : t.hover) || null
                }
                return {
                    primaryImage: e,
                    hoverImage: i
                }
            }, window && ((globalThis || {}).PFComponentsProductListItem = bt)
        },
        62442: (t, e, i) => {
            "use strict";
            i.d(e, {
                p: () => o
            });
            var n = i(9651),
                r = i(47586);
            const o = Class({
                __construct: function(t) {
                    this._par = t, this._render()
                },
                _render: function() {
                    var t, e, i = tag("div", "", [tag("div", "", [tag("h4", "pf-h4 pf-m-0", this._par.contentTitle), tag("p", {
                            className: this._par.contentTitle ? "pf-mt-8 pf-m-0 pf-ui-caption pf-text-muted" : "pf-m-0 pf-ui-caption pf-text-muted",
                            innerHTML: this._par.contentText
                        })])]),
                        n = tag("div", (null === (t = this._par.footerCssClasses) || void 0 === t ? void 0 : t.container) || "text-left", [this._primaryButton = tag("a", {
                            className: this._getPrimaryButtonClass(),
                            onclick: this._onPrimaryClick
                        }, this._par.primaryBtnText), this._secondaryButton = tag("a", {
                            className: (null === (e = this._par.footerCssClasses) || void 0 === e ? void 0 : e.secondaryBtn) || "pf-btn pf-btn-secondary pf-d-block pf-d-xs-inline-block",
                            onclick: this._onSecondaryClick
                        }, this._par.secondaryBtnText)]),
                        o = new r.Z.Par;
                    o.nodeClass = "pf-modal", o.modalDialogClass = "modal-md pf-justify-content-center", this._modal = new r.Z(o), this._modal.setTitle(this._par.modalTitle), this._modal.setContent(i), this._modal.setFooterContent(n), this._modal.show()
                },
                _getPrimaryButtonClass() {
                    var t;
                    let e = (null === (t = this._par.footerCssClasses) || void 0 === t ? void 0 : t.primaryBtn) || "pf-btn pf-btn-primary pf-d-block pf-d-xs-inline-block pf-mb-12 pf-mb-xs-0 pf-mr-xs-12";
                    return this._par.isPrimaryButtonDisabled && (e += " disabled"), e
                },
                _onPrimaryClick: function(t) {
                    n.U.addClassName(this._primaryButton, "disabled"), this._par.onPrimaryBtnClick && this._par.onPrimaryBtnClick(t), this._par.isPrimaryButtonDisabled || this.closeDialog()
                },
                _onSecondaryClick: function() {
                    n.U.addClassName(this._secondaryButton, "disabled"), this._par.onSecondaryBtnClick && this._par.onSecondaryBtnClick(), this.closeDialog()
                },
                closeDialog: function() {
                    this._modal.remove()
                },
                enablePrimaryButton: function() {
                    this._primaryButton && n.U.removeClassName(this._primaryButton, "disabled")
                },
                enableSecondaryButton: function() {
                    this._secondaryButton && n.U.removeClassName(this._secondaryButton, "disabled")
                }
            });
            window && ((globalThis || {}).PFComponentsWarningDialog = o)
        },
        40: (t, e, i) => {
            "use strict";
            i.d(e, {
                X: () => n
            });
            const n = Class({
                modalTitle: "",
                contentTitle: "",
                contentText: "",
                primaryBtnText: "",
                secondaryBtnText: "",
                isPrimaryButtonDisabled: !1,
                onSecondaryBtnClick: null,
                onPrimaryBtnClick: null,
                disableButtonsOnClick: !0,
                footerCssClasses: null
            });
            window && ((globalThis || {}).PFComponentsWarningDialogPar = n)
        },
        49781: (t, e, i) => {
            "use strict";
            i.d(e, {
                O: () => o
            });
            var n = i(19765),
                r = i(9651);
            const o = function(t, e, i) {
                t = t || [], this.orders = t.reverse(), this.isHomepage = e, this.wrapperClass = i || !1, this.interval = 2;
                for (let t in this.orders)("string" == typeof this.orders[t].timestamp || this.orders[t].timestamp instanceof String) && (this.orders[t].timestamp = parseInt(this.orders[t].timestamp)), this.orders[t].age = moment().unix() - this.orders[t].timestamp;
                this.node = tag("ul", {
                    className: "row list-unstyled pf-mb-0",
                    attr: {
                        "aria-label": dlang("site", "Latest orders"),
                        "aria-describedby": "latest-orders-title"
                    }
                }), setInterval($.proxy(this.updateAge, this), 1e3 * this.interval), this.render()
            };
            o.prototype = new r.U.Base, o.prototype.render = function(t) {
                t = t || !1, r.U.clearNode(this.node);
                const e = this.wrapperClass || (this.isHomepage ? "col-4 col-md-6 col-xl-4" : "col-4");
                for (const i in this.orders) {
                    const r = 2 == i && this.isHomepage ? " pf-d-md-none pf-d-xl-flex" : "";
                    let o = this.orders[i].location.toLowerCase().split(", ");
                    const a = [n.y.ucFirst(o[0]), o[1].toUpperCase()].join(", ");
                    this.orders[i].formattedOrderLocation = a;
                    let s = tag("li", e + r, [tag("div", "pf-latest-orders__item" + (this.isHomepage ? " pf-justify-content-start" : ""), [tag("img", {
                        className: "img-responsive",
                        src: "/static/images/layout/lord.png",
                        attr: {
                            alt: ""
                        }
                    }), tag("div", {
                        className: "text-center-xs pf-mt-8 pf-ml-sm-16 pf-mt-sm-0",
                        attr: {
                            "aria-hidden": "true"
                        }
                    }, [tag("span", "pf-h5 location", a), tag(this.wrapperClass ? "" : "br"), this.orders[i].ageNode = tag("span", "pf-ui-body pf-text-gray-700")]), this.orders[i].ageNodeAccessibleText = tag("p", {
                        className: "sr-only",
                        attr: {
                            "aria-live": "polite",
                            "aria-atomic": "true"
                        }
                    })])]).append(this.node);
                    t && 0 == i && ($(s).css("opacity", 0), $(s).animate({
                        opacity: 1
                    }, 600))
                }
                this.updateAge()
            }, o.prototype.updateAge = function() {
                for (var t in this.orders) {
                    this.orders[t].age = this.orders[t].age + this.interval;
                    var e = this.orders[t].age;
                    if (e < 2) e = " " + lang("just now");
                    else if (e < 60) e = lang("{count} sec ago").replace("{count}", e);
                    else if (e < 3600) e = lang("{count} min ago").replace("{count}", Math.round(e / 60));
                    else if (e < 216e3) {
                        var i = Math.round(e / 60 / 60);
                        e = 1 === i ? lang("hour ago") : lang("{count} hours ago").replace("{count}", i)
                    } else e = lang("a while ago");
                    $(this.orders[t].ageNode).text(e), $(this.orders[t].ageNodeAccessibleText).text(`${this.orders[t].formattedOrderLocation}, ${e}`)
                }
            }, o.prototype.isHomepage = !1, o.prototype.wrapperClass = void 0, (globalThis || {}).PFLatestOrders = o
        },
        57581: (t, e, i) => {
            "use strict";
            i.d(e, {
                j: () => o
            });
            var n = i(82320),
                r = i(14544);
            const o = Class({
                variableProductId: "dimension2",
                variablePageType: "dimension3",
                variableTotalValue: "dimension4",
                _setVariable: function(t, e) {
                    PF.DEV ? console.log("GA variable set. " + t + " => " + e) : ga("set", t, e)
                },
                trackProductView: function(t) {
                    const e = (new n.m).getCachedProductById(t.productId),
                        i = new r.s;
                    let o;
                    o = e.mainCategoryId && i.getById(e.mainCategoryId) ? i.getById(e.mainCategoryId).name : i.getById(e.categoryIds[0]).name, this._setVariable(this.variableProductId, t.productId + "_" + t.variantId), this._setVariable(this.variablePageType, "product"), this._setVariable(this.variableTotalValue, "" + t.priceData.price.toFixed(2)), PF.DEV || ga("send", "event", "Variant clicked", o, t.name)
                },
                trackPageView: function(t) {
                    t = t || window.location.pathname, this._setVariable("page", t), ga("send", "pageview")
                },
                pushGeneralDataLayerEvent: function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    window.dataLayer = window.dataLayer || [];
                    const i = {
                        event: "general",
                        page_type: t,
                        selling_region: PF.Customer.sellingRegionSetting.originSellingRegion.name,
                        display_currency: PF.DisplayCurrency.currency,
                        language: PF.Lang.language,
                        locale: PF.Lang.userLocale,
                        customer_id: PF.Customer.isAnonymous() ? null : PF.Customer.customerId,
                        environment_id: PF.Customer.isAnonymous() ? null : PF.Customer.environmentId,
                        lead_scoring_profile: PF.Customer.leadScoringProfile,
                        ...e
                    };
                    window.dataLayer.push(i)
                }
            });
            o.PAGE_TYPE_CATALOG_CATEGORY = "Product catalog - regular", o.PAGE_TYPE_CATALOG_PRODUCT = "Product details - regular", o.PAGE_TYPE_GENERATOR_CATEGORY = "Product catalog - design maker", o.PAGE_TYPE_GENERATOR_PRODUCT = "Product details - design maker", (globalThis || {}).PFMarketingGoogleAnalytics = o
        },
        70314: (t, e, i) => {
            "use strict";
            i.d(e, {
                N: () => d
            });
            var n = i(82320),
                r = i(65311),
                o = i.n(r),
                a = i(4473),
                s = i(9651),
                l = i(47586),
                c = i(48776);
            const d = Class({
                _product: null,
                _isVisible: !1,
                __construct: function(t, e) {
                    this._product = (new n.m).getCachedProductById(t), this._isVisible = e
                },
                getButton: function() {
                    return this.canHaveSizeGuide() ? (0, s.U)({
                        tag: "a",
                        className: "pull-right margin-right-5 margin-left-30 pf-link",
                        text: dlang("products", "See size guide"),
                        onclick: this.show
                    }) : ""
                },
                canHaveSizeGuide: function() {
                    return this._isVisible && this._product.canHaveSizeGuide
                },
                show: function(t) {
                    (0, c.au)();
                    var e = new l.Z.Par;
                    e.title = lang("Size guide"), e.modalDialogClass = "modal-lg", e.onClose = this.hide.bind(this), e.url = a.W.getSizeChartUrl(this._product.productId), this.sizeGuideModal = new l.Z(e), o()(t.target).css("pointer-events", "none"), this.sizeGuideModal.show(), o()(this.sizeGuideModal._node).on("hidden.bs.modal", (function() {
                        o()(t.target).css("pointer-events", "all")
                    }))
                },
                hide: function() {
                    this.sizeGuideModal && (this.sizeGuideModal.remove(), this.sizeGuideModal = null)
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductPushSizeGuide = d)
        },
        5460: (t, e, i) => {
            "use strict";
            i.d(e, {
                r: () => a
            });
            var n = i(9651);
            const r = Class({
                rowspans: {},
                __construct: function(t, e, i) {
                    for (var r in this.rowspans = e, this.activeColumns = i, this.node = (0, n.U)({
                            tag: "tr"
                        }), t) {
                        var o = t[r];
                        null !== o.value && this._isCellVisible(o.key) && this._renderCell(o, parseInt(r)).append(this.node)
                    }
                },
                _isCellVisible: function(t) {
                    return this.activeColumns.indexOf(t) > -1
                },
                _renderCell: function(t, e) {
                    var i = this.rowspans[e] ? this.rowspans[e] : 1,
                        r = (0, n.U)({
                            tag: "td",
                            attr: {
                                rowspan: i
                            }
                        });
                    return "title" === t.type ? ((0, n.U)({
                        tag: "strong",
                        innerHTML: t.value
                    }).append(r), r) : "link" === t.type ? ((0, n.U)({
                        tag: "a",
                        className: "pf-link",
                        text: lang("Download"),
                        href: t.value
                    }).append(r), r) : (r.innerHTML = t.value, r)
                }
            }, n.U.Base);
            window && ((globalThis || {}).PFProductsCatalogComponentsSizingTableRow = r);
            var o = i(51122);
            const a = Class({
                dataRows: [],
                allowedColumns: ["description", "type", "size", "printArea", "printFileSize", "recommendedSize", "downloadUrl"],
                activeColumns: [],
                columnTitles: {},
                columnTypes: {
                    description: "title",
                    type: "value",
                    size: "value",
                    printArea: "value",
                    printFileSize: "value",
                    recommendedSize: "value",
                    downloadUrl: "link"
                },
                disclaimers: {},
                __construct: function(t, e) {
                    this.dataRows = t.sort(this._sortRows).map(this._filterData), this.columnTitles = this._getColumnTitles(e), this.node = tag("div", {
                        className: this.dataRows.length < 1 ? "hidden" : "",
                        id: "guidelines"
                    }, [tag("div", "table-responsive", [tag("table", "table table-bordered catalog__guidelines__table", [tag("thead", "", [tag("tr", "", this.allowedColumns.filter(this._filterColumn).map(this._getHeader))]), tag("tbody", "", this.dataRows.map(this._getBodyRow))])])]), this._getDisclaimers()
                },
                _filterColumn: function(t) {
                    return this.activeColumns.indexOf("string" == typeof t ? t : t.key) > -1
                },
                _sortRows: function(t, e) {
                    return t.isBrandingTemplate > e.isBrandingTemplate
                },
                _getColumnTitles: function(t) {
                    return {
                        description: dlang("products", "Placement"),
                        type: dlang("products", "Type"),
                        size: dlang("products", "Sizes"),
                        printArea: this._getPrintAreaText(t),
                        printFileSize: this._getPrintFileSizeText(t),
                        recommendedSize: this._getRecommendedSizeText(t),
                        downloadUrl: this._getDownloadUrlText(t)
                    }
                },
                _getRecommendedSizeText: function(t) {
                    return this._isTechniqueEngraving(t) ? dlang("products", "Engraving file template") : this._isTypeEmbroidery(t) ? dlang("products", "Recommended embroidery file size") : dlang("products", "Recommended print file size")
                },
                _getPrintAreaText: function(t) {
                    return this._isTypeEmbroidery(t) ? dlang("products", "Max embroidery area") : dlang("products", "Max print area")
                },
                _getPrintFileSizeText: function(t) {
                    return this._isTypeEmbroidery(t) ? dlang("products", "Embroidery file size") : dlang("products", "Print file size")
                },
                _getDownloadUrlText: function(t) {
                    return this._isTypeEmbroidery(t) ? dlang("products", "Embroidery file template") : dlang("products", "Print file template")
                },
                _isTypeEmbroidery: t => t === o.V_,
                _isTechniqueEngraving: t => t === o.hC,
                _getPrintOrEmbroidery: function(t, e) {
                    var i = t ? dclang("products", "Technique", "embroidery") : dclang("products", "Technique", "print");
                    return e ? i.charAt(0).toUpperCase() + i.slice(1) : i
                },
                _getHeader: function(t) {
                    var e = this.columnTitles[t];
                    return this.disclaimers[t] && (e += Array(Object.keys(this.disclaimers).indexOf(t) + 2).join("*")), tag("th", "", [e])
                },
                _getBodyRow: function(t) {
                    return t.map(function(e, i) {
                        return new r(e, this._getRowSpanValues(e, t, i), this.activeColumns)
                    }.bind(this))
                },
                _getDisclaimers: function() {
                    var t = [];
                    for (var e in this.disclaimers) {
                        var i = Array(Object.keys(this.disclaimers).indexOf(e) + 2).join("*") + " " + this.disclaimers[e];
                        t.push(tag("div", "", [i]))
                    }
                    t.length && tag("div", {
                        className: "margin-bottom-25 padding-bottom-15 disclaimer-text",
                        style: {
                            fontStyle: "italic",
                            borderBottom: "1px solid #ddd"
                        }
                    }, t).append(this.node)
                },
                _getRowSpanValues: function(t, e, i) {
                    var n = {},
                        r = {};
                    for (var o in t)
                        for (var a in e) parseInt(a) <= i || (e[a][o].value ? r[o] = !0 : r[o] || (n[o] || (n[o] = 1), n[o] += 1));
                    return n
                },
                _filterData: function(t) {
                    var e = [];
                    for (var i in this.allowedColumns) {
                        var n = this.allowedColumns[i];
                        t[n] && this.activeColumns.indexOf(n) < 0 && this.activeColumns.push(n);
                        var r = t[n] ? t[n] : "";
                        e.push({
                            key: n,
                            type: this.columnTypes[n],
                            value: this._hasNewline(r) ? r.split("\n") : r
                        }), t.disclaimers[n] && !this.disclaimers[n] && (this.disclaimers[n] = t.disclaimers[n])
                    }
                    return this._parseRows(e)
                },
                _parseRows: function(t) {
                    for (var e = this._getLongestArray(t), i = [], n = 0; n < e; n++) i.push(t.map(this._normalize.bind(this, e, n)));
                    return i
                },
                _normalize: function(t, e, i) {
                    var n = "string" == typeof i.value ? 0 === e ? i.value : null : i.value[e] ? i.value[e] : null;
                    return {
                        key: i.key,
                        type: i.type,
                        value: n
                    }
                },
                _getLongestArray: function(t) {
                    var e = 1;
                    for (var i in t) t[i].value instanceof Array && t[i].value.length > e && (e = t[i].value.length);
                    return e
                },
                _hasNewline: function(t) {
                    return t.indexOf("\n") > -1
                }
            }, n.U.Base);
            window && ((globalThis || {}).PFProductsCatalogComponentsSizingTable = a)
        },
        37529: (t, e, i) => {
            "use strict";
            i.d(e, {
                C: () => C
            });
            var n = i(87457),
                r = i(84294),
                o = i(99386),
                a = i(58334),
                s = i(9651);
            const l = Class({
                _filter: null,
                _params: null,
                _selectedValues: [],
                _filterTypeMaterial: "material",
                __construct: function(t) {
                    this._params = t, this.node = (0, s.U)({
                        tag: "div"
                    }), this._params.type && (this._selectedValues = t.selectedItems, this.render(this._params.productItems))
                },
                getType: function() {
                    return this._params.type
                },
                render: function(t) {
                    var e = this._prepareFilter(this._params.productItems),
                        i = this._prepareFilter(t);
                    e.length && (e = e.map(this._formatItem.bind(this, i)), i.length >= 6 && (e = e.sort(this._sortSelected)), s.U.clearNode(this.node), this._filter = new o.z({
                        header: this._params.title,
                        items: e,
                        selectedValues: this._selectedValues,
                        enableSearchAt: 10,
                        searchItemBuffer: 0,
                        onChange: this._onChange
                    }), this._filter.append(this.node))
                },
                _isMaterialType: function() {
                    return this._filterTypeMaterial === this.getType()
                },
                _formatItem: function(t, e) {
                    let i = !0;
                    return this._isMaterialType() && (i = !1), {
                        shouldCapitalize: i,
                        text: this._getLabel(e, this.getType()),
                        value: e,
                        isActive: t.includes(e)
                    }
                },
                _getLabel: function(t, e) {
                    return C.labelOverrides[e] && C.labelOverrides[e][t] ? C.labelOverrides[e][t] : t
                },
                getSelected: function() {
                    return this._filter ? this._filter.getSelected() : []
                },
                getMatchingProducts: function(t) {
                    return t.filter(this.filterProduct)
                },
                _prepareFilter: function(t) {
                    var e = [].concat.apply([], t.map(this.filterParam.bind(this)));
                    return e.filter(this.filterEmptyOrDuplicateParam.bind(this, e))
                },
                _sortSelected: function(t, e) {
                    var i = t.isActive === e.isActive ? 0 : t.isActive ? -1 : 1;
                    return this._selectedValues.indexOf(t.value) > -1 ? i = -2 : this._selectedValues.indexOf(e.value) > -1 && (i = 2), i
                },
                _onChange: function(t, e) {
                    this._selectedValues = t, t.length, this._params.onSomethingChanged(this, e)
                },
                getItems: function() {
                    return this._filter ? this._filter.items : []
                },
                getProduct: function(t) {
                    return t instanceof a.O ? t.getCachedProduct() : t
                },
                filterProduct: function(t) {
                    if (!this._selectedValues.length) return !0;
                    var e = t[this._params.type];
                    if (e instanceof Array) {
                        var i;
                        for (var n in e)
                            if (!(this._selectedValues.indexOf(e[n]) < 0)) {
                                i = !0;
                                break
                            } return i
                    }
                    return this._selectedValues.indexOf(e) > -1
                },
                isEnabled: function(t) {
                    if (!this._filter) return !1;
                    if (this._filter.items.length > 1) return !0;
                    var e = this._filter.items.map((function(t) {
                            return t.value
                        })),
                        i = t.filter(function(t) {
                            var i = t[this._params.type];
                            if (i instanceof Array) {
                                var n;
                                for (var r in i)
                                    if (!(e.indexOf(i[r]) < 0)) {
                                        n = !0;
                                        break
                                    } return n
                            }
                            return e.indexOf(i) > -1
                        }.bind(this));
                    return t.length !== i.length
                },
                isParamBlacklisted: function(t) {
                    return ["STOCK-PRODUCT"].indexOf(t) > -1
                },
                filterParam: function(t) {
                    var e = t[this._params.type];
                    if (e instanceof Array) {
                        this._params.type === C.ecoFriendlyFilter.type && t.isEcoFriendly && !e.includes(C.ecoFriendlyFilter.name) && e.push(C.ecoFriendlyFilter.name);
                        var i = [];
                        for (var n in e) {
                            var r = e[n];
                            i.indexOf(r) > -1 || i.push(r)
                        }
                        if (i.length) return i
                    }
                    if (e) return e
                },
                filterEmptyOrDuplicateParam: function(t, e, i) {
                    return !(!e || !e.length) && (!this.isParamBlacklisted(e) && t.indexOf(e) === i)
                }
            }, s.U.Base);
            l.Par = Class({
                type: "",
                title: "",
                productItems: [],
                selectedItems: [],
                onSomethingChanged: null
            }), window && ((globalThis || {}).PFProductsCatalogFiltersBase = l);
            i(4473);
            var c = i(20833),
                d = i(75717);
            const u = Class({
                _prepareFilter: function(t) {
                    var e = {},
                        i = [];
                    return t.map(function(t) {
                        this.getProduct(t).colors.map(function(t) {
                            i.indexOf(t.colorName) > -1 ? e[t.colorName].times++ : (i.push(t.colorName), e[t.colorName] = {
                                name: t.colorName,
                                times: 1
                            })
                        }.bind(this))
                    }.bind(this)), d.A.convertToArray(e).sort(this._sortColors).map((function(t) {
                        return t.name
                    }))
                },
                _sortColors: function(t, e) {
                    return e.times - t.times
                },
                filterProduct: function(t) {
                    if (!this._selectedValues.length) return !0;
                    var e;
                    for (var i in t.colors) this._selectedValues.indexOf(t.colors[i].colorName) < 0 || (e = !0);
                    return this._isVariantAndHasColor(t) && (e = !0), e
                },
                _isVariantAndHasColor: function(t) {
                    return t.color && -1 !== this._selectedValues.indexOf(t.color)
                },
                isEnabled: function(t) {
                    if (!this._filter) return !1;
                    if (this._filter.items.length > 1) return !0;
                    var e = this._filter.items.map((function(t) {
                            return t.value
                        })),
                        i = t.filter((function(t) {
                            var i = !1;
                            for (var n in t.colors) e.indexOf(t.colors[n].colorName) < 0 || (i = !0);
                            return i
                        }));
                    return t.length !== i.length
                }
            }, l);
            window && ((globalThis || {}).PFProductsCatalogFiltersColor = u);
            const p = Class({
                _prepareFilter: function(t) {
                    var e = [].concat.apply([], t.map(this._mapProductOrVariant.bind(this)));
                    return e.filter(this.filterEmptyOrDuplicateParam.bind(this, e))
                },
                _mapProductOrVariant: function(t) {
                    const e = this.getProduct(t),
                        i = [];
                    for (const t in e.availableTechniques) e.availableTechniques[t] && i.push(e.availableTechniques[t]);
                    return i
                },
                filterProduct: function(t) {
                    if (!this._selectedValues.length) return !0;
                    let e, i = t;
                    t instanceof a.O && (i = t.getCachedProduct());
                    for (const t in i.availableTechniques)
                        if (!(this._selectedValues.indexOf(i.availableTechniques[t]) < 0)) {
                            e = !0;
                            break
                        } return e
                }
            }, l);
            window && ((globalThis || {}).PFProductsCatalogFiltersTechnique = p);
            const h = Class({
                _prepareFilter: function(t) {
                    var e = [].concat.apply([], t.map(this._mapSpecialOffer.bind(this)));
                    return e.filter(this.filterEmptyOrDuplicateParam.bind(this, e))
                },
                _mapSpecialOffer: function(t) {
                    var e = [];
                    return this.getProduct(t).priceRange.bulkDiscountTiers && e.push(dlang("global", "Bulk discount")), e
                },
                filterProduct: function(t) {
                    return !this._selectedValues.length || !!this.getProduct(t).priceRange.bulkDiscountTiers
                }
            }, l);
            window && ((globalThis || {}).PFProductsCatalogFiltersSpecialOffers = h);
            const f = Class({
                _prepareFilter: function(t) {
                    const e = [].concat.apply([], t.map(this._mapProductOrVariant.bind(this)));
                    return e.filter(this.filterEmptyOrDuplicateParam.bind(this, e))
                },
                _mapProductOrVariant: function(t) {
                    const e = this.getProduct(t),
                        i = Object.values(e.fulfillmentCountriesMap);
                    return [...new Set(i)]
                },
                filterProduct: function(t) {
                    if (!this._selectedValues.length) return !0;
                    let e;
                    const i = this._mapProductOrVariant(t);
                    for (const t of i)
                        if (-1 !== this._selectedValues.indexOf(t)) {
                            e = !0;
                            break
                        } return e
                }
            }, l);
            window && ((globalThis || {}).PFProductsCatalogFiltersFulfillmentCountries = f);
            var g = i(44353);
            const v = Class({
                _prepareFilter: function(t) {
                    var e = [].concat.apply([], t.map(this._mapProductOrVariant.bind(this)));
                    return e.filter(this.filterEmptyOrDuplicateParam.bind(this, e)).sort(g.y.sizeSortingCallback)
                },
                _mapProductOrVariant: function(t) {
                    var e = this.getProduct(t),
                        i = [];
                    for (var n in e.allSizes) this._isSizeValid(n) && e.allSizes[n] && i.push(n);
                    return i
                },
                _isSizeValid: function(t) {
                    return !!t
                },
                filterProduct: function(t) {
                    if (!this._selectedValues.length) return !0;
                    var e = t,
                        i = null;
                    if (t instanceof a.O && (e = t.getCachedProduct(), i = t), i) return this._selectedValues.indexOf(i.size) > -1;
                    var n, r = {};
                    for (var o in e.allSizes) e.allSizes[o] && (r[o] = e.allSizes[o]);
                    for (var s in r)
                        if (!(this._selectedValues.indexOf(s) < 0)) {
                            n = !0;
                            break
                        } return n
                }
            }, l);
            window && ((globalThis || {}).PFProductsCatalogFiltersSize = v);
            const m = Class({
                _isSizeValid: function(t) {
                    return "cm" === t.slice(-2)
                }
            }, v);
            window && ((globalThis || {}).PFProductsCatalogFiltersSizeCm = m);
            const _ = Class({
                _isSizeValid: function(t) {
                    return "cm" !== t.slice(-2)
                }
            }, v);
            window && ((globalThis || {}).PFProductsCatalogFiltersSizeIn = _);
            var y = i(98737),
                b = i(12010),
                w = i(78009),
                P = i(51122);
            const C = Class({
                _productOrVariantItems: [],
                _onFilterCallback: null,
                _totalCount: null,
                _filters: [],
                _filterClasses: {},
                _params: [],
                _finalLoad: !0,
                _sellingRegionSetting: null,
                __construct: function(t, e, i, n, o, a) {
                    var s = this;
                    this._productOrVariantItems = t, this._onFilterCallback = function() {
                        s._finalLoad = !1;
                        for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                        e.apply(s, i)
                    }, this._totalCount = n, this._allowedFulfillmentRegions = i || [], this._finalLoad = a, this._sellingRegionSetting = o, this._filterClasses[w.dB.FILTER_TYPES.color] = u, this._filterClasses[w.dB.FILTER_TYPES.availableTechniques] = p, this._filterClasses[w.dB.FILTER_TYPES.specialOffers] = h, this._sellingRegionSetting || (this._filterClasses[w.dB.FILTER_TYPES.fulfillmentCountries] = f), t.filter((function(t) {
                        return t.sizes ? t.sizes.join(", ").indexOf("cm") > -1 : t.size.indexOf("cm") > -1
                    })).length > 0 ? (this._filterClasses[w.dB.FILTER_TYPES.cmSizes] = m, this._filterClasses[w.dB.FILTER_TYPES.inSizes] = _) : this._filterClasses[w.dB.FILTER_TYPES.allSizes] = v, this._params = (new r.PFProductsCatalogUtilsStore).getActiveFilters(), this.node = tag("div", "catalog__sidebar-filter__body pf-mr-40 pf-mr-sm-0"), this._setFilterLabels(), this.render(this._productOrVariantItems)
                },
                render: function(t) {
                    this._filters = this._params.map(this._initFilter.bind(this, t)).filter(function(e) {
                        return e._params.type === w.dB.FILTER_TYPES.brandingOptions || e._params.type === w.dB.FILTER_TYPES.specialOffers ? e.isEnabled(t) : e.isEnabled(t) && e.getItems().length > 1
                    }.bind(this)), this._applyAdditionalConditions(), this._onSomethingChanged(null, !0), s.U.clearNode(this.node), tag("div", "", this._filters).append(this.node)
                },
                getAllSelectedValues: function() {
                    return this._filters.map((function(t) {
                        return t.getSelected()
                    })).filter((function(t) {
                        return t.length > 0
                    }))
                },
                _initFilter: function(t, e) {
                    var i = new l.Par;
                    return i.type = e.type, i.title = e.title, i.productItems = t, i.selectedItems = this._getSelectedFromUrl(e.type), i.onSomethingChanged = this._onSomethingChanged, new(this._getFilterClass(e.type))(i)
                },
                _getFilterClass: function(t) {
                    return this._filterClasses[t] ? this._filterClasses[t] : l
                },
                _getFilterByType: function(t) {
                    return this._filters.filter(function(e) {
                        return t === e.getType()
                    }.bind(this)).shift()
                },
                _onSomethingChanged: function(t, e) {
                    var i = this._productOrVariantItems,
                        n = this.updateFilters(this._filters, t, i);
                    this.updateFilters(n.filters, t, n.productItems, this._totalCount), this._pushToHistory(n.productItems, e, this._totalCount), this._onFilterCallback && this._onFilterCallback(i)
                },
                updateFilters: function(t, e, i, n) {
                    var r = [];
                    for (var o in t) {
                        var a = t[o];
                        0 === a.getSelected().length && r.push(a), e && e.getType() === a.getType() || a.render(i), a.getSelected().length && (i = a.getMatchingProducts(i))
                    }
                    return {
                        productItems: i,
                        filters: r,
                        totalCount: n
                    }
                },
                _applyAdditionalConditions: function() {
                    var t = this._getFilterByType(w.dB.FILTER_TYPES.cmSizes),
                        e = this._getFilterByType(w.dB.FILTER_TYPES.inSizes),
                        i = this._getFilterByType(w.dB.FILTER_TYPES.allSizes),
                        n = this._getFilterByType(w.dB.FILTER_TYPES.fulfillmentCountries);
                    t && t.getItems().length && e && e.getItems().length ? i && i.remove() : (t && t.remove(), e && e.remove()), n && n.getSelected().length < 1 && this._allowedFulfillmentRegions.length < n.getItems().length && (n._selectedValues = this._allowedFulfillmentRegions)
                },
                _getSelectedFromUrl: function(t) {
                    var e = new c.R;
                    return e.query[t] ? e.query[t].split("!") : []
                },
                _setFilterLabels: function() {
                    var t = {};
                    t[P.V_] = dlang("products", "Embroidery"), t[P.GE] = dlang("products", "Mug"), t[P._j] = dlang("products", "Poster"), t[P.WK] = dlang("products", "Framed Poster"), t[P._E] = dlang("products", "Canvas"), t[P.ml] = dlang("products", "Direct to garment (DTG)"), t[P._M] = dlang("products", "Sublimation"), t[P.ZA] = dlang("products", "Phone case"), t[P.AN] = dlang("products", "Cut & sew"), t[P.hC] = dlang("products", "Engraving"), t[P.wT] = dlang("products", "Tote"), t[P.pu] = dlang("products", "Hang tag"), t[P.q9] = dlang("products", "Paper printing"), t[P.wP] = dlang("products", "Fabric"), t[P.Sd] = dlang("products", "Puzzle"), t[P.Io] = dlang("products", "Candle"), t[P.yq] = dlang("products", "Decor"), t[P.de] = dlang("products", "Cosmetics"), t["FRAMED-PRINT"] = dlang("products", "Framed canvas"), C.labelOverrides[w.dB.FILTER_TYPES.availableTechniques] = t;
                    let e = {};
                    e[y.T.REGION_USA] = (0, b.G)(y.T.REGION_USA), e[y.T.REGION_MEXICO] = (0, b.G)(y.T.REGION_MEXICO), e[y.T.REGION_EUROPE] = (0, b.G)(y.T.REGION_EUROPE), e[y.T.REGION_EUROPE_LATVIA] = (0, b.G)(y.T.REGION_EUROPE_LATVIA), e[y.T.REGION_EUROPE_MEXICO] = (0, b.G)(y.T.REGION_EUROPE_MEXICO), e[y.T.REGION_JAPAN] = (0, b.G)(y.T.REGION_JAPAN), e[y.T.REGION_EUROPE_SPAIN] = (0, b.G)(y.T.REGION_EUROPE_SPAIN), e[y.T.REGION_AUSTRALIA] = (0, b.G)(y.T.REGION_AUSTRALIA), C.labelOverrides[w.dB.FILTER_TYPES.fulfillmentCountries] = e
                },
                _pushToHistory: function(t, e, i) {
                    var r = {};
                    this._filters.map((function(t) {
                        t.getSelected().length && (r[t.getType()] = t.getSelected())
                    })), n.l.createAndDispatch(this._finalLoad ? w.dB.EVENT_ALL_LOADED : w.dB.EVENT_PRODUCTS_FILTER, {
                        filter: r,
                        productsOrVariants: t,
                        skipHistory: !!e,
                        totalCount: i
                    })
                }
            }, s.U.Base);
            C.labelOverrides = {}, C.ecoFriendlyFilter = {
                type: "features",
                name: "Eco-friendly"
            }, window && ((globalThis || {}).PFProductsCatalogFilters = C)
        },
        8504: (t, e, i) => {
            "use strict";
            i.d(e, {
                m: () => l
            });
            var n = i(56805),
                r = i(58334),
                o = i(4473),
                a = i(9651),
                s = i(51122);
            const l = Class({
                product: null,
                activeVariant: null,
                variants: [],
                descriptionTitle: "",
                isLogged: !1,
                printCareInstructionsHtml: "",
                productDescription: "",
                productsPricingInfoHtml: "",
                printInfo: {},
                guidelines: "",
                templates: {},
                guidelinesAndTemplates: null,
                regions: null,
                availabilityTabRegions: null,
                insideLabel: "",
                shippingReturns: "",
                images: [],
                shipping: "",
                isFeaturedReviews: !1,
                isFavorite: !1,
                addedToFavoritesAt: null,
                productSpecs: {},
                productSource: {},
                isFulfilledAtPartnerFacility: !1,
                favoriteCatalogCategoryId: null,
                sellingRegionSettings: null,
                correspondingProduct: [],
                canHaveSampleOrderOffer: !0,
                overallQualityRatingCategory: null,
                scheduledPrices: [],
                techniqueDisplayNames: {},
                originalTechniqueDisplayNames: {},
                isOutsideSellingRegionAvailable: !1,
                setActiveVariantById: function(t) {
                    this.activeVariant = t ? this.variants.filter((function(e) {
                        return e.variantId === t
                    })).shift() : null
                },
                hasPriceEstimator: function() {
                    return this.product.type === s.ml
                },
                getRegionVariants: function() {
                    var t = new n.x;
                    return t.availableRegions = this.regions.availableRegions, t.variantsByRegion = this.regions.variantsByRegion, t.allowedSellingRegions = this.regions.allowedSellingRegions, t
                },
                getPrintInfo: function(t, e) {
                    return this.printInfo[t] ? e ? this.printInfo[t][e] ? this.printInfo[t][e] : "" : this.printInfo[t] : ""
                }
            });
            l.fromArray = function(t) {
                var e = new l;
                return a.U.O2O(e, t), e.product = o.W.fromArray(t.product), e.variants = t.variants.map(r.O.fromArray), e
            }, window && ((globalThis || {}).PFProductsCatalogProductData = l)
        },
        99713: (t, e, i) => {
            "use strict";
            i.d(e, {
                DY: () => Di,
                DE: () => xi,
                Q8: () => Bi,
                _O: () => Vi
            });
            var n = i(65131),
                r = i(61133),
                o = i(33286),
                a = i(49781),
                s = i(54200),
                l = i(62755),
                c = i(50999),
                d = i(11097),
                u = i(92512),
                p = i(3044),
                h = i(18730),
                f = i(44353),
                g = i(30199),
                v = i(87457),
                m = i(18170),
                _ = i(76731),
                y = i(4473),
                b = i(25194),
                w = i(11072),
                P = i(37774),
                C = i(98607),
                T = i(20833),
                k = i(61756),
                S = i(9651),
                E = i(48488),
                O = i.n(E),
                I = i(23279),
                N = i.n(I),
                R = i(79421),
                D = i(6047),
                x = i(78009),
                A = i(90227),
                L = i(82320),
                B = i(84294),
                F = i(26750),
                V = i(17977),
                j = i(97452),
                U = i(48433),
                M = i(55874),
                z = i(25046),
                q = i(61169);

            function H(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function W(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function G(t, e, i) {
                return e && W(t.prototype, e), i && W(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function Y(t, e) {
                return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Y(t, e)
            }

            function K(t) {
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
                    var i, n = J(t);
                    if (e) {
                        var r = J(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return Z(this, i)
                }
            }

            function Z(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Q(t)
            }

            function Q(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function J(t) {
                return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, J(t)
            }

            function X(t, e, i) {
                tt(t, e), e.set(t, i)
            }

            function tt(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function et(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, nt(t, e, "get"))
            }

            function it(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, nt(t, e, "set"), i), i
            }

            function nt(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var rt = new WeakMap,
                ot = new WeakMap,
                at = new WeakSet;
            let st = function(t) {
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
                var e = K(i);

                function i(t) {
                    var n, r, o;
                    return H(this, i), n = e.call(this), tt(r = Q(n), o = at), o.add(r), X(Q(n), rt, {
                            writable: !0,
                            value: void 0
                        }), X(Q(n), ot, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div", "favorites-button-mke"), it(Q(n), rt, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(Q(n), at, lt).call(Q(n)), n
                }
                return G(i, [{
                    key: "destroy",
                    value: function() {
                        et(this, ot).destroy(), it(this, ot, null)
                    }
                }]), i
            }(q.p);
            async function lt() {
                const t = new z.L;
                t.components = {
                    "favorites-button": () => i.e(64900).then(i.bind(i, 76553))
                }, t.template = '\n            <favorites-button\n                :is-favorite="isFavorite"\n                :is-text="isText"\n                @on-click="emitEvent(\'onClick\', $event)"\n            />\n        ', t.initialData = {
                    isFavorite: et(this, rt).isFavorite,
                    isText: et(this, rt).isText
                }, t.emitEvent = (t, e) => {
                    "onClick" === t && (et(this, rt).onClick && et(this, rt).onClick(), et(this, ot).updateData({
                        isFavorite: e
                    }))
                }, it(this, ot, new z.Z(t)), et(this, ot).append(this.node)
            }
            let ct = G((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                H(this, t), this.isFavorite = e.isFavorite || !1, this.isText = e.isText || !1, this.onClick = e.onClick || void 0
            }));
            var dt = i(26346),
                ut = i(63137),
                pt = i.n(ut),
                ht = i(7187),
                ft = i.n(ht);

            function gt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function vt(t, e, i) {
                return e && gt(t.prototype, e), i && gt(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function mt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function _t(t, e) {
                return _t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, _t(t, e)
            }

            function yt(t) {
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
                    var i, n = Pt(t);
                    if (e) {
                        var r = Pt(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return bt(this, i)
                }
            }

            function bt(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return wt(t)
            }

            function wt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Pt(t) {
                return Pt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Pt(t)
            }

            function Ct(t, e, i) {
                Tt(t, e), e.set(t, i)
            }

            function Tt(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function kt(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, Et(t, e, "get"))
            }

            function St(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Et(t, e, "set"), i), i
            }

            function Et(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Ot = new WeakMap,
                It = new WeakMap,
                Nt = new WeakSet;
            let Rt = function(t) {
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
                    }), e && _t(t, e)
                }(i, t);
                var e = yt(i);

                function i(t) {
                    var n, r, o;
                    return mt(this, i), n = e.call(this), Tt(r = wt(n), o = Nt), o.add(r), Ct(wt(n), Ot, {
                            writable: !0,
                            value: void 0
                        }), Ct(wt(n), It, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div"), St(wt(n), It, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(wt(n), Nt, Dt).call(wt(n)), n
                }
                return vt(i)
            }(q.p);
            async function Dt() {
                const t = new z.L;
                t.components = {
                    "bulk-discount-slider": () => i.e(31471).then(i.bind(i, 23805))
                }, t.template = '\n            <bulk-discount-slider\n                :bulk-discount-tier-list="bulkDiscountTierList"\n                :currency="currency"\n                :current-price="currentPrice"\n                :allow-tax-inclusion="allowTaxInclusion"\n                :technique="activeTechnique"\n            />\n        ', t.initialData = {
                    bulkDiscountTierList: kt(this, It).bulkDiscountTierList,
                    currency: kt(this, It).currency,
                    currentPrice: kt(this, It).currentPrice,
                    allowTaxInclusion: kt(this, It).allowTaxInclusion,
                    activeTechnique: kt(this, It).activeTechnique
                }, St(this, Ot, new z.Z(t)), kt(this, Ot).append(this.node)
            }
            let xt = vt((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                mt(this, t), this.bulkDiscountTierList = e.bulkDiscountTierList || null, this.currency = e.currency, this.currentPrice = e.currentPrice, this.allowTaxInclusion = e.allowTaxInclusion, this.activeTechnique = e.activeTechnique
            }));
            var At = i(28091);

            function Lt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function Bt(t, e) {
                return Bt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Bt(t, e)
            }

            function Ft(t) {
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
                    var i, n = Ut(t);
                    if (e) {
                        var r = Ut(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return Vt(this, i)
                }
            }

            function Vt(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return jt(t)
            }

            function jt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Ut(t) {
                return Ut = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Ut(t)
            }

            function Mt(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function zt(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, Ht(t, e, "get"))
            }

            function qt(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Ht(t, e, "set"), i), i
            }

            function Ht(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Wt = new WeakMap,
                $t = new WeakSet;
            let Gt = function(t) {
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
                    }), e && Bt(t, e)
                }(o, t);
                var e, i, n, r = Ft(o);

                function o() {
                    var t, e, i;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), t = r.call(this), Mt(e = jt(t), i = $t), i.add(e),
                        function(t, e, i) {
                            Mt(t, e), e.set(t, i)
                        }(jt(t), Wt, {
                            writable: !0,
                            value: void 0
                        }), t.node = tag("div", "sample-order-offer-mke"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(jt(t), $t, Yt).call(jt(t)), t
                }
                return e = o, (i = [{
                    key: "destroy",
                    value: function() {
                        zt(this, Wt).destroy(), qt(this, Wt, null)
                    }
                }]) && Lt(e.prototype, i), n && Lt(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), o
            }(q.p);
            async function Yt() {
                const t = new z.L;
                t.components = {
                    "sample-order-offer": () => i.e(35613).then(i.bind(i, 90255))
                }, t.template = '\n            <sample-order-offer\n                :show-border="false"\n            />\n        ', qt(this, Wt, new z.Z(t)), zt(this, Wt).append(this.node)
            }

            function Kt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function Zt(t, e, i) {
                return e && Kt(t.prototype, e), i && Kt(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function Qt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function Jt(t, e) {
                return Jt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Jt(t, e)
            }

            function Xt(t) {
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
                    var i, n = ie(t);
                    if (e) {
                        var r = ie(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return te(this, i)
                }
            }

            function te(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return ee(t)
            }

            function ee(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function ie(t) {
                return ie = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, ie(t)
            }

            function ne(t, e, i) {
                re(t, e), e.set(t, i)
            }

            function re(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function oe(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, se(t, e, "get"))
            }

            function ae(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, se(t, e, "set"), i), i
            }

            function se(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var le = new WeakMap,
                ce = new WeakMap,
                de = new WeakSet;
            let ue = function(t) {
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
                    }), e && Jt(t, e)
                }(i, t);
                var e = Xt(i);

                function i(t) {
                    var n, r, o;
                    return Qt(this, i), n = e.call(this), re(r = ee(n), o = de), o.add(r), ne(ee(n), le, {
                            writable: !0,
                            value: void 0
                        }), ne(ee(n), ce, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div"), ae(ee(n), le, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(ee(n), de, pe).call(ee(n)), n
                }
                return Zt(i)
            }(q.p);
            async function pe() {
                const t = new z.L;
                t.components = {
                    "price-change-info-banner": () => i.e(22328).then(i.bind(i, 21496))
                }, t.template = '\n            <price-change-info-banner\n                :date="date"\n                :value="value"\n                :destination="destination"\n                :priceChangeUrl="priceChangeUrl"\n            />\n        ', t.initialData = {
                    date: oe(this, le).date,
                    value: oe(this, le).value,
                    destination: oe(this, le).destination,
                    priceChangeUrl: oe(this, le).priceChangeUrl
                }, ae(this, ce, new z.Z(t)), oe(this, ce).append(this.node)
            }

            function he(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function fe(t, e) {
                return fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, fe(t, e)
            }

            function ge(t) {
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
                    var i, n = _e(t);
                    if (e) {
                        var r = _e(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return ve(this, i)
                }
            }

            function ve(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return me(t)
            }

            function me(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function _e(t) {
                return _e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, _e(t)
            }

            function ye(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function be(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, Pe(t, e, "get"))
            }

            function we(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Pe(t, e, "set"), i), i
            }

            function Pe(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Ce = new WeakMap,
                Te = new WeakSet;
            let ke = function(t) {
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
                    }), e && fe(t, e)
                }(o, t);
                var e, i, n, r = ge(o);

                function o() {
                    var t, e, i;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), t = r.call(this), ye(e = me(t), i = Te), i.add(e),
                        function(t, e, i) {
                            ye(t, e), e.set(t, i)
                        }(me(t), Ce, {
                            writable: !0,
                            value: void 0
                        }), t.node = tag("div"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(me(t), Te, Se).call(me(t)), t
                }
                return e = o, (i = [{
                    key: "destroy",
                    value: function() {
                        be(this, Ce).destroy(), we(this, Ce, null)
                    }
                }]) && he(e.prototype, i), n && he(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), o
            }(q.p);
            async function Se() {
                const t = new z.L;
                t.components = {
                    "large-front-embroidery-banner": () => i.e(2878).then(i.bind(i, 78062))
                }, t.template = "<large-front-embroidery-banner/>", we(this, Ce, new z.Z(t)), be(this, Ce).append(this.node)
            }
            var Ee = i(38053),
                Oe = i(29890),
                Ie = i(613),
                Ne = i(51122),
                Re = i(11876),
                De = i(15425),
                xe = i(79442),
                Ae = i(71824),
                Le = {
                    state: {
                        allSpecialValues: {},
                        selectedValues: {},
                        allValues: {},
                        valueTypes: [],
                        hiddenTypes: [],
                        errors: {}
                    },
                    namespaced: !0,
                    mutations: {
                        [Ae.nP](t, e) {
                            t.allSpecialValues = e
                        },
                        [Ae.eN](t, e) {
                            t.selectedValues = e
                        },
                        [Ae.r8](t, e) {
                            let {
                                key: i,
                                value: n
                            } = e;
                            t.selectedValues[i] = n
                        },
                        [Ae.O7](t, e) {
                            t.allValues = e
                        },
                        [Ae.bS](t, e) {
                            t.valueTypes = e
                        },
                        [Ae.oy](t, e) {
                            t.hiddenTypes = e
                        },
                        [Ae.B$](t, e) {
                            t.errors = e
                        }
                    },
                    getters: {
                        [Ae.Xz]: t => t.allSpecialValues,
                        [Ae.vP]: t => t.valueTypes.reduce(((e, i) => (e[i] = Object.keys(t.allSpecialValues).reduce(((e, n) => {
                            const r = t.allSpecialValues[n];
                            return r[i] ? (e[n] = {
                                ...r[i]
                            }, e[n].values = Object.keys(r[i].values).filter((e => !!r[i].values[e].find((e => {
                                for (const i in e)
                                    if (i in t.selectedValues && !t.selectedValues[i].includes(e[i])) return !1;
                                return !0
                            })))), e) : e
                        }), {}), e)), {}),
                        [Ae.ZW]: t => t.selectedValues,
                        [Ae.bD]: t => t.allValues,
                        [Ae.lI]: t => t.valueTypes,
                        [Ae.cq]: t => t.hiddenTypes,
                        [Ae.R0]: t => t.errors
                    }
                };

            function Be(t) {
                (0, xe.getVuex)().commit(Ae.ak(Ae.eN), t)
            }

            function Fe(t) {
                var e;
                return null !== (e = (0, xe.getVuex)().getters[Ae.ak(Ae.ZW)][t]) && void 0 !== e ? e : []
            }

            function Ve(t) {
                var e;
                return null !== (e = Fe(t)[0]) && void 0 !== e ? e : null
            }

            function je(t) {
                if (!(0, xe.getVuex)().getters[Ae.ak(Ae.lI)].includes(t)) return !0;
                const e = (0, xe.getVuex)().getters[Ae.ak(Ae.vP)][t];
                return !!(0, xe.getVuex)().getters[Ae.ak(Ae.bD)][t].find((t => {
                    let {
                        value: i
                    } = t;
                    return !e.discontinued.values.includes(i) && !e.outOfStock.values.includes(i) && !e.unavailableInRegion.values.includes(i)
                }))
            }
            var Ue = i(24115);

            function Me(t, e, i) {
                return (e = We(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function ze(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function qe(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, We(n.key), n)
                }
            }

            function He(t, e, i) {
                return e && qe(t.prototype, e), i && qe(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function We(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }

            function $e(t, e) {
                return $e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, $e(t, e)
            }

            function Ge(t) {
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
                    var i, n = Ze(t);
                    if (e) {
                        var r = Ze(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return Ye(this, i)
                }
            }

            function Ye(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Ke(t)
            }

            function Ke(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Ze(t) {
                return Ze = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Ze(t)
            }

            function Qe(t, e, i) {
                Je(t, e), e.set(t, i)
            }

            function Je(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function Xe(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, ei(t, e, "get"))
            }

            function ti(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, ei(t, e, "set"), i), i
            }

            function ei(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var ii = new WeakMap,
                ni = new WeakMap,
                ri = new WeakSet;
            let oi = function(t) {
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
                    }), e && $e(t, e)
                }(i, t);
                var e = Ge(i);

                function i(t) {
                    var n, r, o;
                    return ze(this, i), n = e.call(this), Je(r = Ke(n), o = ri), o.add(r), Qe(Ke(n), ii, {
                            writable: !0,
                            value: void 0
                        }), Qe(Ke(n), ni, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div", "pickers-mke"), ti(Ke(n), ii, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(Ke(n), ri, ai).call(Ke(n)), n
                }
                return He(i, [{
                    key: "destroy",
                    value: function() {
                        Xe(this, ni).destroy(), ti(this, ni, null)
                    }
                }]), i
            }(q.p);
            async function ai() {
                var t;
                t = Xe(this, ii).availability, (0, xe.getVuex)().commit(Ae.ak(Ae.nP), t), Be(Xe(this, ii).defaultSelectedValues),
                    function(t) {
                        (0, xe.getVuex)().commit(Ae.ak(Ae.O7), t)
                    }(Xe(this, ii).values),
                    function(t) {
                        (0, xe.getVuex)().commit(Ae.ak(Ae.bS), t)
                    }(Xe(this, ii).valueTypes);
                const e = new z.L;
                e.components = {
                    "all-pickers": () => i.e(88226).then(i.bind(i, 48595))
                }, e.template = '\n            <all-pickers\n                :value-types="valueTypes"\n                :picker-data="pickerData"\n                :available-first-types="availableFirstTypes"\n                @select="emitEvent(\'onSelect\', $event)"\n                @open-link="emitEvent(\'onOpenLink\', $event)"\n            />\n        ', e.initialData = {
                    valueTypes: Xe(this, ii).valueTypes,
                    pickerData: Xe(this, ii).pickerData,
                    availableFirstTypes: Ue.Qo
                }, e.emitEvent = (t, e) => {
                    "onSelect" === t && Xe(this, ii).onSelect && Xe(this, ii).onSelect(e), "onOpenLink" === t && Xe(this, ii).onOpenLink[e] && Xe(this, ii).onOpenLink[e](e)
                }, e.plugins = {
                    store: (0, xe.getVuex)()
                }, ti(this, ni, new z.Z(e)), Xe(this, ni).append(this.node)
            }
            let si = He((function t() {
                ze(this, t), Me(this, "valueTypes", []), Me(this, "values", {}), Me(this, "pickerData", {
                    allowMultiselect: {},
                    buttonTypes: {},
                    pickerTitles: {},
                    additionalPickerClasses: {},
                    linkTexts: {}
                }), Me(this, "defaultSelectedValues", {}), Me(this, "availability", {}), Me(this, "onSelect", void 0), Me(this, "onOpenLink", {}), Me(this, "linkTexts", {})
            }));
            var li = i(70314),
                ci = i(56472);

            function di(t, e, i, n, r) {
                var o;
                const a = e[0],
                    s = (null == a ? void 0 : a.color) && !(null != a && a.colorCode),
                    l = !a.size && (null == t ? void 0 : t.isEmbroidery()) && !t.isEmbroiderySample(),
                    c = (null === (o = a.size) || void 0 === o ? void 0 : o.toLowerCase()) === Ue.L8 || l,
                    d = {
                        [Ue.yY]: s ? Ue.At : Ue.Uh,
                        [Ue.Ct]: Ue.Uh,
                        [Ue.n0]: c ? Ue.E0 : Ue.At
                    },
                    {
                        valueTypes: u,
                        values: p,
                        defaultSelectedValues: h,
                        availability: f
                    } = (0, ci.Lk)(e, i, n, d, r),
                    g = new si;
                if (t.shouldShowOutlinePicker()) {
                    u.splice(1, 0, Ue.Ct), p[Ue.Ct] = function(t) {
                        return Object.entries(t.options[Re.$b].values).map((t => {
                            let [e, i] = t;
                            return {
                                value: e,
                                title: i,
                                extra: {
                                    label: lang("Color {color}").replace("{color}", i),
                                    codes: [e],
                                    tooltip: `${i} ${e}`
                                }
                            }
                        }))
                    }(t), h[Ue.Ct] = [p[Ue.Ct][0].value];
                    const e = new T.R;
                    e.query.outlineColor && p[e.query.outlineColor] && (h[Ue.Ct] = p[e.query.outlineColor])
                }
                return g.pickerData.buttonTypes = d, g.pickerData.pickerTitles = {
                    [Ue.yY]: t.getColorPickerTitle(1),
                    [Ue.n0]: t.getSizePickerTitle(1),
                    [Ue.Ct]: dlang("products", "Choose outline color")
                }, g.pickerData.additionalPickerClasses = {
                    [Ue.yY]: "swatches--click swatches--huge",
                    [Ue.Ct]: "swatches--click swatches--huge"
                }, g.valueTypes = u, g.values = p, g.defaultSelectedValues = h, g.availability = f, null != t && t.canHaveSizeGuide && (g.onOpenLink = {
                    size: new li.N(t.productId, !1).show
                }, g.pickerData.linkTexts[Ue.n0] = lang("Size guide")), g
            }
            var ui = i(64498),
                pi = i(87826);

            function hi(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function fi(t, e) {
                return fi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, fi(t, e)
            }

            function gi(t) {
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
                    var i, n = _i(t);
                    if (e) {
                        var r = _i(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return vi(this, i)
                }
            }

            function vi(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return mi(t)
            }

            function mi(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function _i(t) {
                return _i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, _i(t)
            }

            function yi(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function bi(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, wi(t, e, "set"), i), i
            }

            function wi(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Pi = new WeakMap,
                Ci = new WeakSet;
            let Ti = function(t) {
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
                    }), e && fi(t, e)
                }(o, t);
                var e, i, n, r = gi(o);

                function o() {
                    var t, e, i;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), t = r.call(this), yi(e = mi(t), i = Ci), i.add(e),
                        function(t, e, i) {
                            yi(t, e), e.set(t, i)
                        }(mi(t), Pi, {
                            writable: !0,
                            value: void 0
                        }), t.node = tag("div", "pf-mt-16"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(mi(t), Ci, ki).call(mi(t)), t
                }
                return e = o, i && hi(e.prototype, i), n && hi(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(q.p);
            async function ki() {
                const t = new z.L;
                var e, n;
                t.components = {
                    "digitization-costs-accordion": () => i.e(70787).then(i.bind(i, 33290))
                }, t.template = "<digitization-costs-accordion/>", bi(this, Pi, new z.Z(t)), (e = this, n = Pi, function(t, e) {
                    return e.get ? e.get.call(t) : e.value
                }(e, wi(e, n, "get"))).append(this.node)
            }
            var Si = i(45739),
                Ei = i(61005),
                Oi = i(69935),
                Ii = i(14040),
                Ni = i(48776),
                Ri = i(87919);
            const Di = Class({
                    productData: null,
                    variant: null,
                    _sizePicker: null,
                    _pickers: null,
                    _shouldShowNewPickers: !1,
                    _regionPicker: null,
                    _techniquePicker: null,
                    _latestOrderNode: null,
                    regionData: null,
                    _colorPicker: null,
                    _outlinePicker: null,
                    _embroiderySubTechniquePicker: null,
                    _printingTechniquePicker: null,
                    _variantAvailability: null,
                    _isRegionUnavailable: !1,
                    _isUpdatingPickers: !1,
                    _estimatedDeliveryNode: null,
                    _topOffset: 0,
                    sellingRegionSettings: null,
                    _getTechniqueFromMemory: !1,
                    _debounceVisibilityChangesCallback: () => {},
                    _bulkDiscountSlider: null,
                    _priceChangeInfoBannerNode: null,
                    _discountAnnouncementNode: "",
                    hasPlacementDiscountBanner: !1,
                    hasEmbroideryDiscountBanner: !1,
                    _orderButtonPosition: "main",
                    orderButtonClass: "pf-btn-primary",
                    buttonDisabled: "",
                    _digitizationCostsNode: null,
                    _servicePriceCalculator: null,
                    _blockHighlightTimeout: null,
                    pickerItemStatuses: null,
                    techniqueChangedCount: 0,
                    __construct: function(t, e, i) {
                        var r, o, a, s, c, p, h, f, g, v, _;
                        this._shouldShowNewPickers = (0, Ie.Cl)(Ie.SF), this._shouldShowNewPickers && ((0, xe.moduleExistsAt)(Ae.rE) || (0, xe.registerModuleAt)(Ae.rE, Le, {
                            skipIfAlreadyRegistered: !0
                        })), this.productData = t, this.regionData = t.regions, this.sellingRegionSettings = null, this.productData.sellingRegionSettings && (this.sellingRegionSettings = new M.k6(this.productData.sellingRegionSettings)), this._onVariantChanged = e, this._onTechniqueChanged = i, this._variantAvailability = new u.w(this.productData.variants, this.regionData, this.getActiveTechnique(), this.productData.isOutsideSellingRegionAvailable || !1), this.pickerItemStatuses = (0, ci.lm)(this.productData.variants, this.regionData, this._dsrSettingsApplied(), this.productData.product.availableTechniques ? this.productData.product.availableTechniques : []);
                        var w = null;
                        this.productData.product.fulfillmentDays && (w = Math.round(10 * this.productData.product.fulfillmentDays) / 10), this._nodePriceList = new m.Z(this.productData.product), this._shouldShowNewPickers || (this._colorPicker = new d.k(this.productData.variants, this._onColorPicked, this.productData.product.productId, "pf-mb-24")), this._productFeatureNode = this.productData.product.isSterlingSilver ? (0, S._)("div", "products-pricing-info__feature-tag pf-h5", [dclang("products", "Product feature", "Sterling Silver")]) : "";
                        const E = this.productData.product.availableTechniques || [];
                        this._regionPicker = new P.e(new P.v({
                            variants: this.productData.variants,
                            regionData: this.productData.getRegionVariants(),
                            onChanged: this._onRegionChanged.bind(this),
                            shouldShowAvailabilityInfo: !this.productData.product.isAdidas(),
                            shouldLimitPickableRegionCount: !E.includes(Ne.V_)
                        }));
                        const O = (0, S._)("div"),
                            I = null === (r = PF.Customer) || void 0 === r || null === (o = r.sellingRegionSetting) || void 0 === o ? void 0 : o.originSellingRegion,
                            N = {
                                content: dlang("products", "Depending on your total order value, this product may have customs fees in Canada due to it being fulfilled outside of Canada")
                            },
                            R = {
                                content: dlang("products", "Custom embroidery file upload is now available for this product!"),
                                dataTest: "banner-large-embroidery-file-upload"
                            },
                            D = {
                                content: dlang("products", "All engraving products are now placed on clearance and will be discontinued in January 2023"),
                                flagKey: Ie.BN,
                                productId: null === (a = this.productData.product) || void 0 === a ? void 0 : a.productId
                            },
                            x = {
                                content: ft()(dlang("products", "{boldStart}This product will be discontinued on{breakLine}March 17{boldEnd}{breakLine}Please remove this listing from your store(s) and add its alternative, the {linkStart}Unisex Crew Neck Sweatshirt | Gildan 18000{linkEnd}, instead.")).replace("{linkStart}", '<a href="/custom/mens/shirts/unisex-crew-neck-sweatshirt-gildan-18000" target="_blank">').replace("{linkEnd}", "</a>").replace("{boldStart}", "<strong>").replace("{boldEnd}", "</strong>").replaceAll("{breakLine}", "</br>"),
                                flagKey: Ie.UI,
                                dataTest: "banner-upcoming-discontinued-product-p160"
                            },
                            A = (ft()(dlang("products", "{boldStart}This product is discontinued{boldEnd}{breakLine}Please remove this listing from your store(s) and add its alternative, the {linkStart}Unisex Crew Neck Sweatshirt | Gildan 18000{linkEnd}, instead.")).replace("{linkStart}", '<a href="/custom/mens/shirts/unisex-crew-neck-sweatshirt-gildan-18000" target="_blank">').replace("{linkEnd}", "</a>").replace("{boldStart}", "<strong>").replace("{boldEnd}", "</strong>").replaceAll("{breakLine}", "</br>"), Ie.UI, {
                                content: ft()(dlang("products", "{boldStart}This product will be discontinued on{breakLine}March 17{boldEnd}{breakLine}Please remove this listing from your store(s) and add its alternative, the {linkStart}Unisex Heavy Blend Hoodie | Gildan 18500{linkEnd}, instead.")).replace("{linkStart}", '<a href="/custom/mens/shirts/unisex-heavy-blend-hoodie-gildan-18500" target="_blank">').replace("{linkEnd}", "</a>").replace("{boldStart}", "<strong>").replace("{boldEnd}", "</strong>").replaceAll("{breakLine}", "</br>"),
                                flagKey: Ie.UI,
                                dataTest: "banner-upcoming-discontinued-product-p170"
                            }),
                            L = (ft()(dlang("products", "{boldStart}This product is discontinued{boldEnd}{breakLine}Please remove this listing from your store(s) and add its alternative, the {linkStart}Unisex Heavy Blend Hoodie | Gildan 18500{linkEnd}, instead.")).replace("{linkStart}", '<a href="/custom/mens/shirts/unisex-heavy-blend-hoodie-gildan-18500" target="_blank">').replace("{linkEnd}", "</a>").replace("{boldStart}", "<strong>").replace("{boldEnd}", "</strong>").replaceAll("{breakLine}", "</br>"), Ie.UI, this._shouldShowNewPickers ? [this._newPickersNode = (0, S._)("div")] : [(0, S._)("div", "", [this._colorPicker]), this._nodeOutlinePicker = (0, S._)("div"), this._nodeSizePicker = (0, S._)("div", "", [this._sizePicker = this._getSizePicker()])]);
                        this.node = (0, S._)("div", "pf-ui-body", [this._mobileReferenceNode = (0, S._)("div", "catalog__product__sticky-reference"), this._productFeatureNode, this._fullTitleNode = (0, S._)("div", "pf-mb-8 pf-d-flex pf-flex-column pf-flex-xs-row", [(0, S._)("h1", "pf-h3 pf-my-0 pf-mr-16", [this.productData.product.getFullTitle()])]), this._discountAnnouncementNode = (0, S._)("div"), (0, S._)("div", "pf-mb-24", [(0, Ri.Wg)(new n.v(this.productData.product))]), (0, dt.J)(this.productData.product.canHaveOnlyLabel()), null !== (s = this.productData.product) && void 0 !== s && s.isCutSew() && (null != I && I.isCanada || "CA" === (null === (c = PF.Customer.location) || void 0 === c ? void 0 : c.country)) ? new Ee.Z(N) : (0, S._)("div"), this.productData.product.canEstimateEmbroideryCosts ? new Ee.Z(R) : "", this.productData.product.shouldShowLargeFrontEmbroideryBanner() ? new ke : (0, S._)("div"), null !== (p = this.productData.product) && void 0 !== p && p.isEngravingProduct() && null !== (h = PF.Customer) && void 0 !== h && h.isB2bProfile() ? new Ee.Z(D) : (0, S._)("div"), (null === (f = this.productData.product) || void 0 === f ? void 0 : f.productId) === y.W.ID_HANES_P_160 && (0, De.xX)() ? new Ee.Z(x) : (0, S._)("div"), (null === (g = this.productData.product) || void 0 === g ? void 0 : g.productId) === y.W.ID_HANES_P_170 && (0, De.xX)() ? new Ee.Z(A) : (0, S._)("div"), this.productData.product.isPersonalUseBrand() ? (0, S._)("div", "pf-mb-24", [(0, S._)("strong", null, lang("Availability") + ":"), (0, S._)("p", {
                            className: "pf-text-muted pf-ui-caption",
                            innerHTML: dclang("products", "availability", "This product can only be ordered for personal use in the US. You can't resell it because of brand restrictions.")
                        })]) : "", (0, S._)("div", "pf-mb-8 pf-border-bottom"), this.productData.product.isPrintfulOriginal ? (0, S._)("div", "pf-my-16", [(0, S._)("h5", "pf-d-inline pf-h5 pf-text-cyan-800", dlang("products", "This is a {printfulOriginal} product").replace("{printfulOriginal}", "Printful Original")), (0, S._)("i", {
                            className: "pf-i pf-i-information pf-pointer pf-i-18 pf-text-gray pf-ml-4 pf-mb-4",
                            attr: {
                                title: dlang("products", "{printfulOriginal} products are sourced and made by in-house experts").replace("{printfulOriginal}", "Printful Original"),
                                "data-toggle": "tooltip"
                            }
                        })]) : "", this._getPackinsBadge(), O, this._nodeSubTechniquePicker = (0, S._)("div"), this.placementDiscountCountdown = (0, S._)("div"), this.embroideryDiscountCountdown = (0, S._)("div"), ...L, this._referenceNode = (0, S._)("div", "sticky-desktop-reference catalog__product__sticky-reference"), (0, S._)("div", "row no-gutters pf-mb-24", [(0, S._)("div", "col-6 pf-d-flex", [(0, S._)("div", "pf-p-12 pf-mr-16 pf-w-100 pf-rounded--large pf-bg-lighter", [(0, S._)("div", "pf-h5 pf-mb-2", [dlang("products", "Price"), (0, S._)("b", "products-pricing-info__red", ["*"])]), (0, S._)("div", "pf-d-inline-block"), this._originalPriceNode = (0, S._)("div", "pf-mt-16", [this._nodePrice = (0, S._)("div", "pf-h3 catalog__product-price-wrapper")])])]), this._estimatedDeliveryNode = (0, S._)("div", {
                            className: "col-6 pf-p-12",
                            style: {
                                transition: "background-color 200ms linear"
                            }
                        }), this._digitizationCostsNode = (0, S._)("div", "col-12"), this._bulkDiscountSlider = (0, S._)("div", "col-md-12 pf-mt-16 bulk-discount-slider")]), this._priceChangeInfoBannerNode = (0, S._)("div"), this._promoCountdownNode = (0, S._)("div"), this._originalNode = (0, S._)("div"), this._nodeWarning = (0, S._)("div"), this._nodePeriodicDiscountCountdown = (0, S._)("div"), this._buttonNode = (0, S._)("div", {
                            id: "catalog-product-buttons",
                            className: "pf-mb-24 pf-p-12 pf-p-sm-0 catalog__product__buttons catalog__product__sticky-button-hidden"
                        }), this._stickyBlock = (0, S._)("div", "pf-d-flex pf-py-8 pf-justify-content-between pf-pr-12 catalog__product__sticky-bottom"), null !== w ? (0, S._)("div", "catalog__product__shipping-container pf-mb-24", [(0, S._)("div", "pf-text-muted", [(0, S._)("span", {
                            innerHTML: dclang("products", "fulfillment", "Ready in") + " ({url})".replace("{url}", (0, S._)("a", {
                                className: "pf-link",
                                href: langUrl("/faq/shipping-packaging-fulfillment/192-how-long-is-fulfillment-time-"),
                                text: dclang("products", "fulfillment", "avg fulfillment"),
                                attr: {
                                    target: "_blank"
                                }
                            }).outerHTML) + ": "
                        }), (0, S._)("strong", "", dnclang("products", "fulfillment", "{days} business day", "{days} business days", Math.floor(w)).replace("{days}", w))])]) : "", this._latestOrderNode = (0, S._)("div"), this._nodePriceList]), this._setButtons(), V.i.isFavoriteProductsEnabled().then((t => {
                            if (!t) return;
                            const e = new ct;
                            e.isFavorite = this.productData.isFavorite, e.isText = !1, e.onClick = this.openFavoritesLink;
                            const i = new st(e);
                            (0, S._)("div", "pf-d-none pf-d-sm-flex pf-justify-content-center pf-flex-column", [i]).append(this._fullTitleNode)
                        })), At.z.isFirstOrderOfferAvailable(this.productData).then((t => {
                            t && (0, S._)("div", "pf-d-none pf-d-sm-flex pf-justify-content-center pf-flex-column", [new Gt]).append(this._promoCountdownNode)
                        })), C.U.getPeriodicPriceCountdownFromPriceRange({
                            productData: this.productData,
                            showTopTriangle: !0,
                            customBlockClass: "pf-py-12",
                            containerClass: "pf-mb-16 products-pricing-info__discount-countdown"
                        }).then((t => {
                            t && (this._nodePeriodicDiscountCountdown = (0, S._)("div"), t.append(this._nodePeriodicDiscountCountdown))
                        })), $("i", this.node).tooltip();
                        const B = new T.R;
                        let F = null;
                        this.productData.activeVariant && !this.productData.activeVariant.isTemporaryOutOfStock ? F = this.productData.activeVariant : ((B.query.color || B.query.size) && (F = this._findVariant(B.query.color, B.query.size)), F || (F = this._getVariantForPreSelect())), this._shouldShowNewPickers ? this._renderNewPickers(F) : (F && this._setVariant(F), this._setUnavailableSizes(), this._setUnavailableColors()), this._renderOutlinePicker(), this._renderDiscountAnnouncementNode(), this._getLatestOrderFrom(), this._onSomethingChanged(!1), this._handleStickyElements();
                        const j = this.getActiveTechnique(),
                            U = null === (v = this.productData.product) || void 0 === v || null === (_ = v.priceRange) || void 0 === _ ? void 0 : _.techniqueDiscountData[Ne.V_];
                        if (this._getTechniques().length) {
                            const t = this._variantAvailability.getTechniqueAvailability(this.productData.product.availableTechniques),
                                e = this._regionPicker.getRegion(),
                                i = new b.K;
                            i.techniques = this._getTechniquesWithGroups(), i.hasNewPlacement = this.productData.product.hasNewPlacement, i.activeValue = j, i.callback = this._onTechniquePicked, i.regions = e, i.techniqueAvailability = t, i.hasEmbroideryDiscount = !!U, i.isRegionUnavailable = this._isRegionUnavailable, this._techniquePicker = new l.J(i), this._techniquePicker.append(O), this._renderSubTechniquePicker(t, e)
                        }
                        const z = PF.Customer.isB2c(),
                            q = !PF.Customer.isLogged() || z;
                        B.query.openDesigner && q && (PF.Customer.isLogged() && !z ? this.orderProduct.call(this) : this._onProductChosen()), this.productData.product.useNewPricing && this.productData.product.placementDiscountData && this.productData.product.placementDiscountData.techniques.hasOwnProperty(j) && this.productData.product.placementDiscountData.techniques[j] && (this.hasPlacementDiscountBanner = !0, this.renderPlacementDiscountCountdownBanner(this.productData.product.placementDiscountData.endTimestamp)), !this._isRegionUnavailable && U && window.abTesting && window.abTesting.isTestAssigned(57) && (1 === window.abTesting.getAbTestVariant(57) && (this.hasEmbroideryDiscountBanner = !0, this.renderEmbroideryDiscountCountdownBanner(U.discountExpiryDate)), window.abTesting.trackAbTest(57)), this._setSubTechniquePickerPrices(), k.on(Di.EVENT_VARIANT_COLOR_CHANGED, this._onVariantPickerVariantChanged), k.on(Di.EVENT_PRODUCT_TECHNIQUE_CHANGED, this._onTechniquePicked)
                    },
                    renderPlacementDiscountCountdownBanner(t) {
                        t && (0, S._)("div", "pf-banner pf-banner-gray pf-mb-24", [(0, S._)("div", "row", [(0, S._)("div", "text-center pf-text-gray-700", [(0, S._)("span", {
                            innerHTML: dlang("products", "Design placement discount available")
                        })]), (0, S._)("div", "pf-mt-12", [C.U.createDiscountCountdown({
                            countdownText: dlang("products", "Ends in"),
                            endTime: t,
                            showBackground: !1
                        })])])]).append(this.placementDiscountCountdown)
                    },
                    renderEmbroideryDiscountCountdownBanner(t) {
                        t && (0, S._)("div", "pf-banner pf-banner-gray pf-mb-24 pf-d-inline-flex pf-p-16 pf-flex-wrap pf-flex-md-nowrap pf-justify-content-center", [(0, S._)("div", {
                            innerHTML: dlang("products", "Choose embroidery and get the sale price discount")
                        }), (0, S._)("div", "pf-mt-12 pf-w-100", [C.U.createDiscountCountdown({
                            countdownText: dlang("products", "Ends in"),
                            endTime: t,
                            showBackground: !1
                        })])]).append(this.embroideryDiscountCountdown)
                    },
                    _handleStickyElements: function() {
                        this._isMobileWidth() ? (this._changeStickyMobileButton(), this._debounceVisibilityChanges(this._mobileReferenceNode, this._changeStickyMobileButton)) : (this._attachStickyPriceNode(), this._debounceVisibilityChanges(this._referenceNode, this._attachStickyPriceNode), this._topOffset = -50)
                    },
                    _debounceVisibilityChanges: function(t, e) {
                        this._debounceVisibilityChangesCallback = N()((() => this.onVisibilityChange(t, e)()), 15), ["DOMContentLoaded", "load ", "resize", "scroll"].forEach((t => window.addEventListener(t, this._debounceVisibilityChangesCallback))), k.S1(k._A, this._removeDebounceVisibilityChanges), k.on(k._A, this._removeDebounceVisibilityChanges)
                    },
                    _removeDebounceVisibilityChanges() {
                        const t = document.querySelector(".catalog__product__sticky-top");
                        t && t.remove(), ["DOMContentLoaded", "load ", "resize", "scroll"].forEach((t => window.removeEventListener(t, this._debounceVisibilityChangesCallback)))
                    },
                    _changeStickyMobileButton: function() {
                        const t = "catalog__product__sticky-button-hidden";
                        this.isElementAboveOrInViewport(this._mobileReferenceNode) ? S.U.removeClassName(this._buttonNode, t) : S.U.hasClassName(this._buttonNode, t) || S.U.addClassName(this._buttonNode, t)
                    },
                    _attachStickyPriceNode: function() {
                        const t = "catalog__product__sticky-bottom-hidden";
                        let e = "",
                            i = "";
                        this._isTopSticky() ? (S.U.addClassName(this._stickyBlock, t), this._attachStickyButtonToTop()) : this._isBottomSticky() ? (i = this._buttonNode.className, e = this._nodePrice.className, this._attachStickyButtonToBottom()) : (S.U.hasClassName(this._stickyBlock, t) || S.U.addClassName(this._stickyBlock, t), this._resetStickyButtonToOriginal(e, i))
                    },
                    _attachStickyButtonToTop() {
                        var t, e;
                        const i = document.querySelector(".pf-breadcrumbs"),
                            n = document.querySelector(".additional-breadcrumb-data"),
                            r = document.querySelector(".breadcrumbs-wrapper");
                        if (i) {
                            const t = i.querySelector(".catalog__product__sticky-top");
                            i.classList.add("pf-d-none"), null == t || t.remove()
                        }
                        var o;
                        (this._buttonNode.setAttribute("class", "pf-p-12 pf-p-sm-0 catalog__product__buttons catalog__product__sticky-button-hidden catalog__product__sticky-top pf-w-auto"), this._orderButton.setAttribute("class", `pf-btn-primary pf-btn pf-btn-sm ${this.buttonDisabled}`), this._nodePrice.setAttribute("class", "pf-h3 pf-d-flex pf-justify-content-end catalog__product__sticky-top pf-pt-4 pf-mr-24"), this._orderButtonPosition = "sticky top", null !== (t = this._sellingButton) && void 0 !== t && t.node) && (this._orderButton.classList.add("pf-d-none"), null === (o = this._sellingButton) || void 0 === o || o.node.querySelector("a").classList.remove("pf-btn-lg", "pf-mb-8", "pf-btn-block", "pf-px-0"), this._sellingButton.buttonLocation = "sticky top");
                        null === (e = this._templateButton) || void 0 === e || e.node.classList.add("pf-d-none"), null == r || r.classList.add("row"), n && (n.classList.add("pf-mr-16"), n.appendChild(this._nodePrice), n.appendChild(this._buttonNode))
                    },
                    _attachStickyButtonToBottom() {
                        var t, e;
                        const i = document.querySelector(".order-button"),
                            n = this._nodePrice.querySelector(".product-item__detail__free-shipping");
                        var r;
                        (this._nodePrice.setAttribute("class", "pf-h3 pf-ml-16 pf-my-16"), this._nodePrice.append(this._stickyBlock), this._buttonNode.setAttribute("class", "row pf-my-16 catalog__product__buttons"), this._buttonNode.append(this._stickyBlock), this._orderButton.setAttribute("class", `pf-btn-primary pf-btn pf-btn-block pf-px-0 pf-btn-sm ${this.buttonDisabled}`), this._orderButtonPosition = "sticky bottom", null !== (t = this._sellingButton) && void 0 !== t && t.node) && (this._orderButton.classList.add("pf-d-none"), null === (r = this._sellingButton) || void 0 === r || r.node.querySelector("a").classList.remove("pf-btn-lg", "pf-mb-8"), this._sellingButton.buttonLocation = "sticky bottom");
                        null === (e = this._templateButton) || void 0 === e || e.node.classList.add("pf-d-none"), null == i || i.classList.add("col-12"), null == n || n.classList.add("pf-d-none"), S.U.removeClassName(this._stickyBlock, "catalog__product__sticky-bottom-hidden")
                    },
                    _resetStickyButtonToOriginal(t, e) {
                        var i, n;
                        const r = document.querySelector(".additional-breadcrumb-data"),
                            o = document.querySelector(".breadcrumbs-wrapper"),
                            a = document.querySelector(".order-button"),
                            s = this._nodePrice.querySelector(".product-item__detail__free-shipping"),
                            l = document.querySelector(".pf-breadcrumbs");
                        var c;
                        (null == l || l.classList.remove("pf-d-none"), this._nodePrice.append(this._originalPriceNode), this._buttonNode.append(this._originalNode), this._nodePrice.className = t || this._nodePrice.className, this._buttonNode.className = e || this._buttonNode.className, this._orderButton.classList.remove("pf-btn-sm", "col-10"), this._nodePrice.classList.remove("catalog__product__sticky-top", "pf-my-16", "pf-ml-16", "pf-d-flex", "pf-justify-content-end", "pf-pt-4", "pf-mr-24"), null == a || a.classList.remove("col-12"), null == s || s.classList.remove("pf-d-none"), this._orderButtonPosition = "main", null !== (i = this._sellingButton) && void 0 !== i && i.node) && (this._orderButton.classList.remove("pf-d-none"), null === (c = this._sellingButton) || void 0 === c || c.node.querySelector("a").classList.add("pf-btn-lg", "pf-mb-8", "pf-btn-block", "pf-px-0"), this._sellingButton.buttonLocation = "main");
                        null === (n = this._templateButton) || void 0 === n || n.node.classList.remove("pf-d-none"), null == r || r.classList.remove("pf-mr-16"), null == o || o.classList.remove("row"), this._buttonNode.classList.remove("row", "catalog__product__sticky-top", "pf-my-16", "pf-w-auto"), this._orderButton.classList.add("pf-btn-lg", "pf-btn-block", "pf-px-0", this.orderButtonClass), S.U.addClassName(this._buttonNode, "pf-mb-24")
                    },
                    _isTopSticky: function() {
                        return this.isElementAboveViewport(this._referenceNode) && !this._isMobileWidth()
                    },
                    _isBottomSticky: function() {
                        return !this.isElementInViewport(this._referenceNode) && !this._isMobileWidth()
                    },
                    _isMobileWidth: function() {
                        return window.innerWidth < A.k.SIZES.SM
                    },
                    onVisibilityChange: function(t, e) {
                        let i;
                        return () => {
                            const n = this.isElementInViewport(t);
                            n !== i && (i = n, "function" == typeof e && e())
                        }
                    },
                    isElementInViewport: function(t) {
                        const e = t.getBoundingClientRect();
                        return e.top >= this._topOffset && e.bottom <= window.innerHeight
                    },
                    isElementAboveViewport: function(t) {
                        return t.getBoundingClientRect().bottom < this._topOffset
                    },
                    isElementAboveOrInViewport: function(t) {
                        return t.getBoundingClientRect().bottom <= window.innerHeight
                    },
                    openFavoritesLink: function() {
                        let t = (new B.PFProductsCatalogUtilsStore).categories.getActiveCategoryId();
                        const e = this.productData.product.favoriteCatalogCategoryId;
                        t && t !== F.p.ID_FAKE_FAVORITES || (t = e || this.productData.product.mainCatalogCategoryId), (0, R.Z)("favorite-product/update-favorite-product", {
                            productId: this.productId || this.productData.product.productId,
                            catalogCategoryId: t
                        }).then((t => {
                            t && (this.productData.isFavorite = !this.productData.isFavorite, this.productData.product.isFavorite = this.productData.isFavorite, (new L.m).cacheProduct(this.productData.product))
                        }))
                    },
                    openPriceList: function() {
                        this._nodePriceList._showModal("bulk")
                    },
                    _setVariant: function(t) {
                        this._sizePicker instanceof Oi.d1 ? this._sizePicker.setSelected([t.size]) : this._sizePicker.setVariant(t), this._colorPicker.setVariant(t)
                    },
                    _getVariantForPreSelect: function() {
                        return Ui(this.productData.variants, this._regionPicker)
                    },
                    _findVariant: function(t, e) {
                        return ji(t, e, this._regionPicker)
                    },
                    _getTechniques: function() {
                        return this.productData.product.availableTechniques.map((t => ({
                            type: t,
                            label: this.productData.techniqueDisplayNames[t],
                            isNew: this._shouldShowIsNewBadge(t, this.productData.product.availableTechniques),
                            isBeta: this.productData.product.availableBetaTechniques.includes(t)
                        }))).filter((t => {
                            let {
                                label: e
                            } = t;
                            return e
                        }))
                    },
                    _getTechniquesWithGroups: function() {
                        const t = this._getTechniques();
                        if (Ne.nz.some((t => !this.productData.product.availableTechniques.includes(t)))) return t;
                        const e = Ne.uE,
                            i = [];
                        return t.forEach((t => Ne.nz.includes(t.type) ? e.techniques.push(t) : i.push(t))), i.push(e), i
                    },
                    _shouldShowIsNewBadge(t, e) {
                        return t === Ne.gj && this.productData.product.hasEmbroiderySubTechnique || t === Ne.Ub && e.length > 1
                    },
                    getActiveTechnique: function() {
                        var t = this.productData.product,
                            e = t.availableTechniques ? t.availableTechniques : [];
                        if (!this._getTechniqueFromMemory) {
                            var i;
                            const t = new T.R;
                            if (e.includes(null === (i = t.query) || void 0 === i ? void 0 : i.technique)) return t.query.technique
                        }
                        const n = (0, p.z)(t.productId).getTechniqueFromMemory();
                        return n && e.indexOf(n) > -1 ? n : e.length ? e.slice().shift() : t.type
                    },
                    _onTechniquePicked: function(t) {
                        var e, i, n;
                        (new p.z(this.productData.product.productId).rememberLastUsedTechnique(t), this._getTechniqueFromMemory = !0, this._variantAvailability.updateRegionalAvailability(t), this._onSomethingChanged(), this._renderDiscountAnnouncementNode(), null === (e = this._embroiderySubTechniquePicker) || void 0 === e || e.setIsShown(t === Ne.gj), null === (i = this._printingTechniquePicker) || void 0 === i || i.setIsShown(Ne.nz.includes(t)), this._onTechniqueChanged) && (Ni.ZP.push({
                            event: Ni.vG,
                            button_category: "product page",
                            button_name: null === (n = this.productData.originalTechniqueDisplayNames) || void 0 === n ? void 0 : n[t],
                            click_count: ++this.techniqueChangedCount
                        }), this._onTechniqueChanged(t));
                        this.productData.product.useNewPricing && this.productData.product.placementDiscountData && this.productData.product.placementDiscountData.techniques.hasOwnProperty(t) && this.productData.product.placementDiscountData.techniques[t] ? this.hasPlacementDiscountBanner || (this.hasPlacementDiscountBanner = !0, this.renderPlacementDiscountCountdownBanner(this.productData.product.placementDiscountData.endTimestamp)) : (this.hasPlacementDiscountBanner = !1, S.U.clearNode(this.placementDiscountCountdown))
                    },
                    _getSizePicker: function() {
                        var t;
                        return null !== (t = this.productData.product) && void 0 !== t && t.hasDropdownSizePicker ? this._gerDropdownSizePicker() : new c.N(this.productData.variants, this._onSizeChanged, "pf-mb-24")
                    },
                    _gerDropdownSizePicker() {
                        if (this._sizePicker instanceof Oi.d1) return this._sizePicker;
                        const t = new Oi.Kt;
                        return t.onChanged = t => {
                            this._sizePicker.setSelected([t.value]), this._onSizeChanged()
                        }, new Oi.d1(t)
                    },
                    _renderOutlinePicker() {
                        if (!this._nodeOutlinePicker || !this.productData.product.shouldShowOutlinePicker()) return;
                        const t = this.productData.product.options[Re.$b].values,
                            e = new Oe.s;
                        e.availableColors = pt()(t), e.onChanged = () => {
                            this._onSomethingChanged()
                        };
                        const i = new T.R;
                        i.query.outlineColor && t[i.query.outlineColor] && (e.default = t[i.query.outlineColor]), this._outlinePicker = new Oe.d(e), this._outlinePicker.append(this._nodeOutlinePicker)
                    },
                    _renderNewPickers(t) {
                        if (!this._shouldShowNewPickers || !this.productData.variants.length) return;
                        const e = this.productData.product,
                            i = di(e, this.productData.variants, this.regionData, this._dsrSettingsApplied(), e.availableTechniques);
                        if (i.onSelect = this._onPickersChanged, t)
                            for (const e in i.defaultSelectedValues) e in t && (i.defaultSelectedValues[e] = [t[e]]);
                        this._pickers = new oi(i), this._pickers.append(this._newPickersNode)
                    },
                    _getSubTechniquePickerParams(t, e) {
                        const i = this.getActiveTechnique(),
                            n = new ui.Z;
                        if (n.prices = {}, this._servicePriceCalculator = new Si.O(this.productData.product.servicePrices), this.productData.product.hasEmbroiderySubTechnique) {
                            n.isShown = i === Ne.gj, n.onChanged = this._onSomethingChanged.bind(this), n.label = dlang("products", "Select embroidery color option"), n.helpLinkText = dlang("products", "Which embroidery color option to choose"), n.options = this._getSubTechniquePickerOptions(pi.QY), n.primaryTechnique = Ne.gj;
                            const t = new T.R;
                            return pi.XF.includes(t.query.embroiderySubTechnique) && (n.selectedValue = t.query.embroiderySubTechnique), n
                        }
                        const r = this.productData.product.availableTechniques;
                        if (Ne.nz.some((t => !r.includes(t)))) return;
                        const o = this._getTechniques().filter((t => t.type !== Ne.gj));
                        n.isShown = Ne.nz.includes(i), n.onChanged = this._onTechniquePicked, n.selectedValue = i, n.label = dlang("products", "Select printing type"), n.disabledTechniques = r.filter((i => !t[i] && (null == e ? void 0 : e.length))), n.options = this._getSubTechniquePickerOptions(o);
                        const a = new T.R;
                        return o.includes(a.query.technique) && (n.selectedValue = a.query.technique), n
                    },
                    _getSubTechniquePickerOptions: t => t.map((t => ({
                        value: t.type,
                        title: t.label,
                        icon: pi.LS + t.type.toLowerCase(),
                        isNew: t.type === Ne.Wi,
                        isBeta: t.isBeta
                    }))),
                    _renderSubTechniquePicker(t, e) {
                        const i = this._getSubTechniquePickerParams(t, e);
                        if (i) {
                            if (i.primaryTechnique === Ne.gj) return this._embroiderySubTechniquePicker = new ui.n(i), this._embroiderySubTechniquePicker.append(this._nodeSubTechniquePicker), void(this._isUnlimitedEmbroidery() && (this._setUnavailableSizes(), this._setUnavailableColors()));
                            this._printingTechniquePicker = new ui.n(i), this._printingTechniquePicker.append(this._nodeSubTechniquePicker)
                        }
                    },
                    _setSubTechniquePickerPrices() {
                        if (!this.productData.product.hasEmbroiderySubTechnique || !this._embroiderySubTechniquePicker) return;
                        const t = this._servicePriceCalculator.getServicePrice(Ei.GY, Ei.GY, this.variant.priceByTechnique[this.getActiveTechnique()].productionCurrency),
                            e = {
                                [pi.cD]: prettyMoney(null == t ? void 0 : t.discountedPrice, this.productData.product.priceRange.currency)
                            };
                        this._embroiderySubTechniquePicker.setPrices(e)
                    },
                    _getOrderButtons() {
                        const t = this.productData.product.isStockProduct() ? lang("Get yours") : (0, De.xX)() ? dlang("products", "Start new order") : lang("Start designing");
                        return (0, S._)("div", "order-button", [this._orderButton = (0, S._)("a", {
                            className: `pf-btn pf-btn-primary pf-btn-lg pf-btn-block pf-px-0 ${this.buttonDisabled}`,
                            attr: {
                                dusk: "products-pricing-order-button"
                            },
                            onclick: this._onOrderButtonClick.bind(this)
                        }, t)])
                    },
                    _onOrderButtonClick() {
                        if (beginOrderTracking("catalog"), (0, De.xX)()) return this.orderProduct.call(this), this._sendPushFlowEvent("start new order"), !0;
                        this._sendPushFlowEvent("start designing"), this._onProductChosen()
                    },
                    _onProductChosen() {
                        k.j8(s.r.EVENT_OPEN_DESIGNER, {
                            productData: this.productData,
                            variant: this.variant,
                            productOptions: {
                                outlineColor: this.getOutlineColor(),
                                embroiderySubTechnique: this.getEmbroiderySubTechnique()
                            },
                            node: this._orderButton
                        })
                    },
                    async _getTemplateButton() {
                        const t = dlang("products", "Create product template"),
                            e = this.getSelectedColorName(),
                            n = this.getSelectedSize(),
                            r = this.getEmbroiderySubTechnique(),
                            {
                                PFProductsCatalogProductInfoPushDesigner: o
                            } = await Promise.all([i.e(98904), i.e(10113), i.e(68171), i.e(46684), i.e(14034), i.e(20061), i.e(74252), i.e(33532)]).then(i.bind(i, 9476));
                        return new o(t, this.buttonDisabled, this.productData, e, n, r)
                    },
                    async _getSellingButton() {
                        const t = dlang("products", "Add to store"),
                            e = this._getIsProductOrVariantDisabledInPush() ? " disabled" : "",
                            n = this.getSelectedColorName(),
                            r = this.getSelectedSize(),
                            o = this.getEmbroiderySubTechnique(),
                            {
                                PFProductsCatalogProductInfoPushFlow: a
                            } = await Promise.all([i.e(78345), i.e(15248), i.e(91642), i.e(2818), i.e(98904), i.e(10113), i.e(68171), i.e(46684), i.e(14034), i.e(20061), i.e(26387), i.e(94630), i.e(74252), i.e(2618), i.e(18834), i.e(93630), i.e(12629)]).then(i.bind(i, 93800));
                        return new a(t, e, this.productData, n, r, o)
                    },
                    _getIsProductOrVariantDisabledInPush() {
                        var t, e, i;
                        return (null === (t = this.productData.product) || void 0 === t ? void 0 : t.isTemporaryOutOfStock) || (null === (e = this.productData.product) || void 0 === e ? void 0 : e.isDisabledInPush) || (null === (i = this.variant) || void 0 === i ? void 0 : i.isDisabledInPush)
                    },
                    async _setButtons() {
                        this._orderButtons = this._getOrderButtons();
                        let t = [this._orderButtons];
                        var e, i;
                        (0, De.xX)() && !this.productData.product.isStockProduct() && (PF.Customer.hasVisibleAndActiveStore ? (this._sellingButton = await this._getSellingButton(), this._orderButton.classList.remove("pf-btn-primary"), this._orderButton.classList.add("pf-btn-secondary"), this.orderButtonClass = "pf-btn-secondary", t = [null === (e = this._sellingButton) || void 0 === e ? void 0 : e.node, ...t]) : (this._templateButton = await this._getTemplateButton(), t = [...t, null === (i = this._templateButton) || void 0 === i ? void 0 : i.node]));
                        return k.j8(Di.EVENT_PRODUCT_BUTTONS_LOADED), (0, S._)("div", "", t).append(this._buttonNode)
                    },
                    _sendPushFlowEvent(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._orderButtonPosition;
                        window.dataLayer.push({
                            event: "button_click",
                            button_category: "product page",
                            button_name: t,
                            button_location: e
                        })
                    },
                    _getLatestOrderFrom: function() {
                        (0, R.Z)("product-catalog/get-latest-order", {
                            productId: this.productData.product.productId
                        }).then((t => this._getLatestOrdersFromRe(t)))
                    },
                    getEstimate: async function(t, e, i) {
                        if (this._shouldShowNewPickers && !je(Ue.yY) && !je(Ue.n0) || !this._shouldShowNewPickers && !this._colorPicker.hasAvailableColorsInSellingRegion() && !this._hasAvailableSizesInSellingRegion()) return this._renderSellingRegionDisclaimer(), !0;
                        (0, R.Z)("estimated-delivery-time/get", {
                            variant: t,
                            technique: e,
                            region: i
                        }).then((t => this._renderEstimate(t)))
                    },
                    _getDateRangeEstimateNode: function(t) {
                        const e = O()(t.from),
                            i = O()(t.to),
                            n = new j.j,
                            r = n.format(e, i, !0),
                            o = e.isSame(i) ? "{from}" : clang("estimate delivery", "{from}{rangeSymbol}{to}"),
                            a = n.shortMonthDay;
                        return (0, S._)("span", null, o.replace("{from}", e.format(a)).replace("{rangeSymbol}", n.symbolRange).replace("{to}", i.format(r)))
                    },
                    _getDayRangeEstimateNode: function(t) {
                        const e = t.fromDays === t.toDays ? t.fromDays : `${t.fromDays}${(new j.j).symbolRange}${t.toDays}`;
                        return (0, S._)("span", null, [dclang("products", 'day or days range, e.g. "2-6 days"', "{daysFromTo} days").replace("{daysFromTo}", e)])
                    },
                    _renderEstimate(t) {
                        !t.success && t.country ? Fi(this._estimatedDeliveryNode, t) : xi(this._estimatedDeliveryNode, t, this.sellingRegionSettings)
                    },
                    _renderSellingRegionDisclaimer() {
                        Vi(this._estimatedDeliveryNode)
                    },
                    _renderEstimateRegionDisclaimer: function() {
                        var t;
                        if (this.sellingRegionSettings && this._isRegionUnavailable) return this._renderSellingRegionDisclaimer(), !0;
                        if (!1 === (null === (t = this.sellingRegionSettings) || void 0 === t ? void 0 : t.isSingleCountry())) {
                            S.U.clearNode(this._estimatedDeliveryNode), S.U.addClassName(this._estimatedDeliveryNode, "pf-border-left");
                            let t = lang("When selling worldwide, delivery time is based on your end-customer's location and the selected product. See delivery times {linkStart}here{linkEnd}.");
                            this.sellingRegionSettings.isWorldwide() || (t = lang("When selling in {region}, delivery time is based on your end-customer's location and the selected product. See delivery times {linkStart}here{linkEnd}."));
                            const e = langUrl("/shipping"),
                                i = t.replace("{linkStart}", `<a class="pf-link" href="${e}">`).replace("{linkEnd}", "</a>").replace("{region}", this.sellingRegionSettings.getName());
                            return (0, S._)("p", {
                                innerHTML: i,
                                className: "pf-ui-body"
                            }).append(this._estimatedDeliveryNode), !0
                        }
                        return !1
                    },
                    _getLatestOrdersFromRe: function(t) {
                        if (t && t.length > 0) {
                            var e = new a.O(t, !1, "col-12");
                            S.U.clearNode(this._latestOrderNode), (0, S._)("div", "product-item__latest-order", [(0, S._)("span", "pf-mr-12", lang("Latest orders from:") + " "), e]).append(this._latestOrderNode)
                        }
                    },
                    _getPriceElementData: function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = "";
                        const i = this.productData.product.shouldShowTaxInclusion();
                        if (this.variant) {
                            var n;
                            const r = this.variant.priceByTechnique[this.getActiveTechnique()],
                                o = (this.productData.product.hasEmbroiderySubTechnique ? (null === (n = this._embroiderySubTechniquePicker) || void 0 === n ? void 0 : n.getSelectedValue()) === pi.cD : null) ? this._servicePriceCalculator.getServicePrice(Ei.GY, Ei.GY, r.productionCurrency) : 0;
                            e = g.Q.createDiscountElementFromPriceData({
                                priceData: r,
                                basePriceAdjustment: null == o ? void 0 : o.discountedPrice,
                                showTaxInclusion: i,
                                returnRaw: t
                            })
                        } else e = g.Q.createDiscountElementFromPriceRange(this.productData.product.priceRange, 0, i, t);
                        return e
                    },
                    _renderPriceNode: function() {
                        var t, e;
                        Bi(this._nodePrice, this.productData.product, this.variant, this.getActiveTechnique(), null !== (t = null === (e = this._embroiderySubTechniquePicker) || void 0 === e ? void 0 : e.getSelectedValue()) && void 0 !== t ? t : null, !0)
                    },
                    _renderDiscountAnnouncementNode: function() {
                        S.U.clearNode(this._discountAnnouncementNode), g.Q.createDiscountAnnouncement(this.productData, this.getActiveTechnique(), !0, "pf-mb-16 pf-mt-8").then((t => {
                            (0, S._)("div", "", [t]).append(this._discountAnnouncementNode)
                        }))
                    },
                    _updateShippingInfo: function() {
                        (0, R.Z)("product-catalog/get-shipping-info", {
                            region: this._regionPicker.getRegion(),
                            productId: this.productData.product.productId
                        }).then((t => this._updateShippingInfoRe(t)))
                    },
                    _updateShippingInfoRe: function(t) {
                        S.U.clearNode(this._nodeShippingInfo), (0, S._)("div", {
                            innerHTML: t
                        }).append(this._nodeShippingInfo)
                    },
                    updatePickers: function(t) {
                        this._isUpdatingPickers = !0, this._shouldShowNewPickers || (this._sizePicker instanceof c.N && (this._sizePicker = this._getSizePicker(), S.U.clearNode(this._nodeSizePicker), this._sizePicker.append(this._nodeSizePicker)), this._setUnavailableSizes(), this._setUnavailableColors()), _.o.pushProductDataLayer(this.variant, t)
                    },
                    orderProduct: function() {
                        var t, e = new r.E;
                        e.productId = this.productData.product.productId, e.productColor = this.getSelectedColorName(), e.productOutlineColor = this.getOutlineColor(), e.productEmbroiderySubTechnique = this.getEmbroiderySubTechnique(), e.productTechnique = this.getActiveTechnique(), e.productRegion = this.getSelectedRegion(), e.allowStoresWithAvailableProductId = this.productData.product.productId, e.allowStoresWithAvailableVariantId = (null === (t = this.variant) || void 0 === t ? void 0 : t.variantId) || null, this._shouldShowNewPickers && this._pickers ? e.productSize = Ve(Ue.n0) : !this._shouldShowNewPickers && this._sizePicker ? e.productSize = this._getSizePickerSelectedSize() : 1 === this.productData.product.sizes.length && (e.productSize = this.productData.product.sizes[0]), new o.g(e);
                        for (var i = [this.productData.product.brand, this.productData.product.model], n = "", a = 0; a < i.length; a++) null !== i[a] && (n += i[a] + " ");
                        (n = n.slice(0, -1)) || (n = this.productData.product.title), ga("send", "event", "Button Clicks", "Order Product Button", n)
                    },
                    getSelectedColorName: function() {
                        return this._shouldShowNewPickers ? !!this._pickers && Ve(Ue.yY) : !!this._colorPicker && this._colorPicker.getColor()
                    },
                    getOutlineColor() {
                        var t;
                        return this._shouldShowNewPickers ? this._pickers && null !== (t = Ve(Ue.Ct)) && void 0 !== t ? t : "" : this._outlinePicker ? this._outlinePicker.getSelectedColorCode() : ""
                    },
                    getEmbroiderySubTechnique() {
                        var t, e;
                        return null !== (t = null === (e = this._embroiderySubTechniquePicker) || void 0 === e ? void 0 : e.getSelectedValue()) && void 0 !== t ? t : ""
                    },
                    _isUnlimitedEmbroidery() {
                        return this.getActiveTechnique() === Ne.gj && this.getEmbroiderySubTechnique() === pi.cD
                    },
                    getSelectedRegion: function() {
                        return !!this._regionPicker && this._regionPicker.getRegion()
                    },
                    getSelectedSize: function() {
                        return this._shouldShowNewPickers ? !!this._pickers && Ve(Ue.n0) : !!this._sizePicker && this._getSizePickerSelectedSize()
                    },
                    getSelectedRegionDisabledValues: function(t) {
                        return this._colorPicker.setSelectedRegionDisabledValues(this._regionPicker.getMatchingVariants(), this.productData.variants, t, this.regionData), this._colorPicker.getValueCount() > 0 ? this._colorPicker.getSelectedRegionDisabledValues(t) : []
                    },
                    _onRegionChanged: function() {
                        this._colorPicker && this._regionPicker && !this._shouldShowNewPickers && (this._techniquePicker && this._techniquePicker.updateTechniqueAvailability(this._regionPicker.getRegion()), this._colorPicker.getValueCount() > 0 && this._colorPicker.setVariantsAndDisabledRegionColors(this._regionPicker.getMatchingVariants(), this.productData.variants, this.regionData), (new L.m).setActiveStockedInRegion(this._regionPicker.getRegion(), this.variant.productId), this._onSomethingChanged())
                    },
                    _onPickersChanged(t) {
                        t !== Ue.yY ? this._onSomethingChanged() : this._onSomethingChanged(!0, !0, !0)
                    },
                    _onColorPicked: function() {
                        this._onSomethingChanged(!0, !0, !0)
                    },
                    _onSizeChanged: function() {
                        this._onSomethingChanged()
                    },
                    _getSizePickerSizes: function() {
                        return this._sizePicker instanceof Oi.d1 ? this._sizePicker.getItems().map((t => {
                            let {
                                value: e
                            } = t;
                            return e
                        })) : this._sizePicker.getSizes()
                    },
                    _getSizePickerSelectedSize: function() {
                        var t;
                        return this._sizePicker instanceof Oi.d1 ? null !== (t = this._sizePicker.getSelected()[0]) && void 0 !== t ? t : null : this._sizePicker.getSize()
                    },
                    _hasAvailableSizesInSellingRegion: function() {
                        return this._sizePicker instanceof Oi.d1 ? (0, ci.mY)(this._getSizePickerSizes(), this.getSelectedColorName(), this.getActiveTechnique(), this.pickerItemStatuses) : this._sizePicker.hasAvailableSizesInSellingRegion()
                    },
                    _onVariantPickerVariantChanged: function(t) {
                        const {
                            color: e,
                            size: i
                        } = t, n = this._findVariant(e, i);
                        n && (this._shouldShowNewPickers ? Be({
                            color: [n.color],
                            size: [n.size]
                        }) : this._setVariant(n), this._onColorPicked())
                    },
                    _setUnavailableSizes: function() {
                        if (this._sizePicker instanceof Oi.d1) {
                            const t = this.getSelectedColorName();
                            let e = this._sizePicker.getItems();
                            return e.length || (e = Object.values((0, ci.iN)(this.productData.variants, this.productData.product.priceRange.currency))), this._sizePicker.setSelectedColor([t]), void this._sizePicker.setItems((0, ci.pX)(e, t, this.getActiveTechnique(), this.pickerItemStatuses))
                        }
                        const t = this.getSelectedColorName(),
                            e = this.productData.variants.filter((e => !t || t === e.color));
                        let i;
                        if (i = this.productData.isOutsideSellingRegionAvailable ? e : this._regionPicker.getMatchingVariants().filter((e => !t || t === e.color)), !this._sizePicker && !t && 0 !== this._colorPicker.getValueCount()) return;
                        const n = this._variantAvailability.getUnavailableSizes(t || "", this._getSizePickerSizes(), this._isUnlimitedEmbroidery()),
                            r = this._variantAvailability.getNonExistentSizes(t || "", this._getSizePickerSizes());
                        this._sizePicker.setSelectedRegionDisabledValues(i, e, "size", this.regionData);
                        const o = this._sizePicker.getSelectedRegionDisabledValues("size");
                        this._dsrSettingsApplied() ? this._sizePicker.setSellingRegionLimitedSizes(o) : this._sizePicker.setInactiveSizes(o), this._sizePicker.setUnavailableSizes(n), this._sizePicker.setHiddenSizes(r.concat(this._variantAvailability.getDiscontinuedSizes(t)))
                    },
                    _setUnavailableColors: function() {
                        const t = !!this._getSizePickerSizes().length && this._getSizePickerSelectedSize(),
                            e = this.productData.variants.filter((e => !t || t === e.size));
                        let i;
                        if (i = this.productData.isOutsideSellingRegionAvailable ? e : this._regionPicker.getMatchingVariants().filter((e => !t || t === e.size)), !this._getSizePickerSizes().length && this.productData.product.type !== Ne.V_) return;
                        if (!this._colorPicker.hasAtLeastOneValue()) return;
                        this._colorPicker.setSelectedRegionDisabledValues(i, e, "color", this.regionData);
                        const n = this._colorPicker.getSelectedRegionDisabledValues("color"),
                            r = this._variantAvailability.getDiscontinuedColors(t || "").concat(this._variantAvailability.getNonExistentColors(t, this._colorPicker.getAllColors()));
                        this._colorPicker.setUnavailableColors(this._variantAvailability.getUnAvailableColors(t || "", this._isUnlimitedEmbroidery())), this._colorPicker.setDiscontinuedColors(r), this._dsrSettingsApplied() ? this._colorPicker.setSellingRegionLimitedColors(n) : this._colorPicker.setDisabledRegionColors(n), this._colorPicker.render()
                    },
                    _highlightEstimatedDeliveryBlock: function(t) {
                        this.sellingRegionSettings.isLatvia() || (t && t === pi.cD ? (S.U.addClassName(this._estimatedDeliveryNode, "catalog__product__block-highlight"), this._blockHighlightTimeout && clearTimeout(this._blockHighlightTimeout), this._blockHighlightTimeout = setTimeout((() => S.U.removeClassName(this._estimatedDeliveryNode, "catalog__product__block-highlight")), 1200)) : S.U.removeClassName(this._estimatedDeliveryNode, "catalog__product__block-highlight"))
                    },
                    _onSomethingChanged: function(t, e, i) {
                        var n, r;
                        this.variant = this._regionPicker.getMatchingVariants().filter(this._filterVariant.bind(this, this.getSelectedColorName(), this.getSelectedSize())).shift(), this._isRegionUnavailable = !1, this.variant || (this.variant = this._regionPicker.getAllVariants().filter(this._filterVariant.bind(this, this.getSelectedColorName(), this.getSelectedSize())).shift(), this._isRegionUnavailable = !0), this._toggleOrderAvailability(), this._renderPriceNode(), Di.isVariantChanged = !this._isUpdatingPickers, this._isUpdatingPickers = !1;
                        const o = this.getActiveTechnique(),
                            a = o === Ne.gj ? this.getEmbroiderySubTechnique() : "";
                        this._highlightEstimatedDeliveryBlock(a), this._shouldDispatchEvent(t) && v.l.createAndDispatch(x.dB.EVENT_VARIANT_CHANGED, {
                            productTechnique: o,
                            productColor: this.getSelectedColorName(),
                            productSize: this.getSelectedSize(),
                            productOutlineColor: this.getOutlineColor(),
                            productEmbroiderySubTechnique: a,
                            activeProductId: this.productData.product.productId
                        }), this._shouldCallback(e) && this._onVariantChanged(this.variant, this.getOutlineColor(), i), this._nodePriceList.variantChanged(this.variant, o), this.variant && setTimeout((() => {
                            this.getEstimate(this.variant.variantId, o, this.getSelectedRegion())
                        }), 1), this.getActiveTechnique() === Ne.gj ? this._renderDigitizationCostsAccordion() : S.U.clearNode(this._digitizationCostsNode), this._renderBulkDiscountSlider(), S.U.clearNode(this._priceChangeInfoBannerNode);
                        const s = this.variant.priceByTechnique[o];
                        if (s.scheduledPriceData && s.price != s.scheduledPriceData.value && this._showScheduledPriceBanner(s.scheduledPriceData), null === (n = this._templateButton) || void 0 === n || !n._modal || null === (r = this._sellingButton) || void 0 === r || !r._modal) {
                            var l, c, d, u, p;
                            const t = this.getEmbroiderySubTechnique();
                            null === (l = this._templateButton) || void 0 === l || l.updateColorAndSize(this.getSelectedColorName(), this.getSelectedSize()), null === (c = this._templateButton) || void 0 === c || c.updateEmbroiderySubTechnique(t), null === (d = this._sellingButton) || void 0 === d || d.updateColorAndSize(this.getSelectedColorName(), this.getSelectedSize()), null === (u = this._sellingButton) || void 0 === u || u.updateEmbroiderySubTechnique(t), null === (p = this._sellingButton) || void 0 === p || p.toggleDisabledClass(this._getIsProductOrVariantDisabledInPush())
                        }
                    },
                    _showScheduledPriceBanner: function(t) {
                        new ue({
                            date: t.activeFrom,
                            currency: t.currency,
                            value: t.value,
                            destination: t.destination,
                            priceChangeUrl: t.priceChangeUrl
                        }).append(this._priceChangeInfoBannerNode)
                    },
                    _filterColor: function(t, e) {
                        return e === t
                    },
                    _mapInactiveColorDisabledSizes: function(t, e) {
                        return e.color === t && e.size
                    },
                    _filterVariant: function(t, e, i) {
                        return (!t || i.color === t) && (!e || i.size === e)
                    },
                    _hasValidVariant: function() {
                        return this.variant && !this.variant.isDisabledInPush && this.variant.hasStock
                    },
                    _toggleOrderAvailability: function() {
                        this._isOrderAvailable = this._isOrderingAvailable(), this._enableOrderButton(this._isOrderAvailable), this.buttonDisabled = this._isOrderAvailable ? "" : " disabled"
                    },
                    _isOrderingAvailable: function() {
                        var t, e;
                        return !(!this.variant || this._isRegionUnavailable && !this.productData.isOutsideSellingRegionAvailable || this.productData.product.isTemporaryOutOfStock || null !== (t = this.variant) && void 0 !== t && t.isTemporaryOutOfStock || null !== (e = this.variant) && void 0 !== e && e.isDisabledInPush && !this.variant.hasStock)
                    },
                    _enableOrderButton: function(t) {
                        this._addOrRemoveClass("disabled", t, this._orderButton)
                    },
                    _shouldCallback: function(t) {
                        return !(void 0 !== t && !t) && (this._onVariantChanged && this.variant)
                    },
                    _shouldDispatchEvent: function(t) {
                        return !(void 0 !== t && !t) && (this._isOrderAvailable && (this.getSelectedColorName() || this.getSelectedSize()))
                    },
                    _addOrRemoveClass: function(t, e, i) {
                        S.U[e ? "removeClassName" : "addClassName"](i, t)
                    },
                    _getPackinsBadge: function() {
                        const t = this.productData.warehouseItemTypes.find((t => t.name === D.Zg.PACKIN)),
                            e = langUrl("/branded-packaging-inserts"),
                            i = dlang("products", "{linkStart}Pack-ins{linkEnd} are promotional materials that can be added to your customersâ€™ orders").replace("{linkStart}", `<a href="${e}" target="_blank">`).replace("{linkEnd}", "</a>");
                        let n = "";
                        const r = t ? (0, S._)("div", "pf-mt-16 pf-mb-16 pf-d-flex pf-align-items-center", [(0, S._)("img", {
                            src: "/static/images/custom-products/warehouse-packins.svg",
                            style: {
                                width: "36px",
                                height: "36px"
                            }
                        }), (0, S._)("span", "pf-ml-8", [dlang("products", "Can be stored in warehouse and used as a pack-in"), n = (0, S._)("span", {
                            className: "pf-i pf-i-information pf-pointer pf-i-18 pf-text-gray pf-ml-8 pf-mb-4",
                            attr: {
                                title: i,
                                "data-toggle": "tooltip",
                                "data-html": !0
                            }
                        })])]) : "";
                        return !PFUtilsIsTouch() && n && $(n).tooltip({
                            delay: {
                                hide: 2e3
                            }
                        }), r
                    },
                    _dsrSettingsApplied() {
                        return !!this.regionData.allowedSellingRegions
                    },
                    _renderBulkDiscountSlider() {
                        const t = this._getPriceElementData(!0),
                            e = new xt,
                            i = this.productData.product.priceRange.bulkDiscountTiers;
                        i && (S.U.clearNode(this._bulkDiscountSlider), e.bulkDiscountTierList = i, e.currency = t.currency, e.currentPrice = t.originalPrice ? t.originalPrice : t.currentPrice, e.allowTaxInclusion = t.allowTaxInclusion, e.activeTechnique = this.getActiveTechnique(), new Rt(e).append(this._bulkDiscountSlider))
                    },
                    _renderDigitizationCostsAccordion() {
                        var t;
                        null !== (t = this._digitizationCostsNode) && void 0 !== t && t.innerHTML || (new Ti).append(this._digitizationCostsNode)
                    }
                }, S.U.Base),
                xi = function(t, e) {
                    var i;
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (S.U.clearNode(t), S.U.removeClassName(t, "pf-rounded--large"), S.U.removeClassName(t, "pf-bg-lighter"), !(e.success && e.country && e.title && e.range)) return;
                    S.U.addClassName(t, "pf-rounded--large pf-bg-lighter");
                    let r = "",
                        o = "",
                        a = [(0, S._)("div", "pf-h5 pf-mb-2", e.title), (0, S._)("div", "catalog__product__estimated-delivery-container", [(0, S._)("span", "pf-ui-body", [(0, S._)("span", {
                            className: "flag pf-mr-4",
                            style: {
                                backgroundImage: `url(${e.country.flag})`
                            }
                        }), (0, S._)("span", "", e.country.name)])])];
                    w.A.isJp() && (a = a.reverse()), e.tooltip && (o = (0, S._)("span", {
                        className: "pf-i pf-i-information pf-pointer pf-i-18 pf-text-gray pf-ml-8 pf-mb-4",
                        attr: {
                            title: e.tooltip,
                            "data-toggle": "tooltip",
                            tabindex: 0
                        }
                    })), e.estimatedShippingPrice && (r = (0, S._)("span", "estimate__shipping-price pf-text-muted", [`${e.estimatedShippingPrice.title} `, prettyMoney(e.estimatedShippingPrice.price, e.estimatedShippingPrice.currency)])), (0, S._)("div", null, [(0, S._)("div", "catalog__product__right-red-indicator pf-position-absolute pf-bg-red-400 pf-rounded"), (0, S._)("div", null, a), (0, S._)("div", "pf-h3 pf-mt-16 pf-mb-2", [(0, S._)("span", "", e.range), o]), r]).append(t);
                    const s = PF.Customer.isLogged() && !PF.Customer.isB2cStarter();
                    null !== (i = window.abTesting) && void 0 !== i && i.isTestAssigned(De.jk) && (null != n && n.isUsa() || null != n && n.isUK()) && s && window.abTesting.trackAbTest(De.jk), o && $(o).tooltip({
                        html: !0,
                        delay: {
                            hide: 2e3
                        }
                    }).on("shown.bs.tooltip", (() => {
                        document.querySelector(".js-open-shipping-tab").addEventListener("click", (() => {
                            $("html, body").animate({
                                scrollTop: $(".catalog__product__tabs").offset().top
                            }, 1e3), setTimeout((() => {
                                $(".catalog__product__tabs li#tab-shipping a").click().focus()
                            }), 1e3)
                        }))
                    }))
                };

            function Ai(t, e, i, n, r) {
                const o = t.shouldShowTaxInclusion();
                if (!e) return g.Q.createDiscountElementFromPriceRange(t.priceRange, 0, o, !r);
                const a = e.priceByTechnique[i],
                    s = !!t.hasEmbroiderySubTechnique && n === pi.cD ? new Si.O(t.servicePrices).getServicePrice(Ei.GY, Ei.GY, a.productionCurrency) : {};
                return g.Q.createDiscountElementFromPriceData({
                    priceData: a,
                    basePriceAdjustment: null == s ? void 0 : s.discountedPrice,
                    showTaxInclusion: o,
                    returnRaw: !r
                })
            }
            const Li = function(t, e, i) {
                    if (!PF.Customer.isLogged()) return void(0, S._)("span", "product-item__print-desc pf-ui-body pf-text-muted pf-d-block", function(t) {
                        return t === Ne.V_ ? dlang("products", "One embroidery placement included") : t === Ne.ml ? dlang("products", "One print included") : dlang("products", "Print included")
                    }(i)).append(t);
                    const n = "product-pricing-wrapper";
                    Ii.G.register(n, (() => {
                        const t = document.querySelector(".catalog__product-price-wrapper");
                        t && (Ii.G.unregister(n), t.classList.add("catalog__product-price"))
                    }))
                },
                Bi = function(t, e, i, n, r) {
                    let o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    const a = Ai(e, i, n, r, !0);
                    S.U.clearNode(t), a.append(t), e.hasFreeShipping && (0, S._)("span", "product-item__detail__free-shipping pf-ui-caption pf-bold", dclang("products", "badge", " + free shipping")).append(t), o && Li(t, e.productId, n)
                },
                Fi = function(t, e) {
                    S.U.clearNode(t), S.U.addClassName(t, "pf-rounded--large pf-bg-lighter");
                    const i = `<span class="flag pf-mr-4" style="background-image:url(${e.country.flag})"></span>`,
                        n = `<span class="pf-bold">${e.country.name}</span>`,
                        r = dlang("products", "Sorry, delivery to {location} isnâ€™t available for this product");
                    (0, S._)("div", {
                        style: {
                            top: "50%",
                            transform: "translateY(-50%)"
                        },
                        className: "catalog__product__estimated-delivery-container pf-pr-12 pf-m-0 pf-position-absolute"
                    }, [(0, S._)("p", {
                        className: "pf-m-0",
                        innerHTML: r.replace("{location}", `<span class="pf-ui-body">${i+n}</span>`)
                    })]).append(t)
                },
                Vi = function(t) {
                    let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    const i = PF.Customer.isLogged() && !PF.Customer.isB2c();
                    let n = i ? dlang("products", "Adjust your {linkBegin}default selling preferences{linkEnd} to select this product") : dlang("products", "Adjust your {linkBegin}default catalog and delivery preferences{linkEnd} to select this product");
                    n = e ? n.replace("{linkBegin}", '<a id="dsr-disclaimer" class="pf-link pf-pointer" onclick="">').replace("{linkEnd}", "</a>") : n.replace("{linkBegin}", "").replace("{linkEnd}", ""), S.U.clearNode(t), S.U.addClassName(t, "pf-rounded--large pf-bg-lighter"), (0, S._)("div", null, [(0, S._)("span", "pf-text-bold", [(0, S._)("strong", null, dlang("products", "This product is unavailable in your region"))]), (0, S._)("p", {
                        innerHTML: n,
                        className: "pf-text-muted"
                    })]).append(t), e && document.querySelector("#dsr-disclaimer").addEventListener("click", (() => {
                        Ni.ZP.push({
                            event: Ni.Bi,
                            location: null,
                            name: "default selling preferences",
                            flow: De.I4,
                            click_path_url: null,
                            block_index: null,
                            index: null,
                            customer_segment_id: null
                        }), (0, U.l3)()
                    }))
                };

            function ji(t, e, i) {
                let n = null;
                const r = i.getMatchingVariants();
                for (const i in r) {
                    const o = r[i],
                        a = !e || o.size === e,
                        s = !t || o.color === t;
                    if (a && s && !o.isTemporaryOutOfStock) {
                        n = o;
                        break
                    }
                }
                return n
            }

            function Ui(t, e) {
                var i;
                const n = t.filter((t => {
                        let {
                            isTemporaryOutOfStock: e
                        } = t;
                        return !e
                    })),
                    r = h.Y.fetchSizesFromVariants(n),
                    o = -1 !== r.indexOf("M") ? "M" : r.sort(f.y.sizeSortingCallback)[0];
                return null !== (i = n[n.length - 1]) && void 0 !== i && i.color ? ji(n[n.length - 1].color, o, e) : ji(!1, o, e)
            }
            Di.isVariantChanged = !1, Di.EVENT_VARIANT_COLOR_CHANGED = "variantColorChanged", Di.EVENT_PRODUCT_TECHNIQUE_CHANGED = "productTechniqueChanged", Di.EVENT_PRODUCT_BUTTONS_LOADED = "productButtonsLoaded", Di.getVariantByColorSize = ji, Di.getVariantForPreSelect = Ui, Di.getPriceDataOrElement = Ai, window && ((globalThis || {}).PFProductsCatalogProductInfo = Di, (globalThis || {}).PFProductsCatalogProductInfoEdtRenderer = xi, (globalThis || {}).PFProductsCatalogProductInfoPriceRenderer = Bi, (globalThis || {}).PFProductsCatalogProductInfoSellingRegionDisclaimerRenderer = Vi)
        },
        58944: (t, e, i) => {
            "use strict";
            i.d(e, {
                L: () => g
            });
            const n = "Gender",
                r = "Female",
                o = "Size",
                a = "Comment";
            var s = i(9651),
                l = i(91128),
                c = i(78009),
                d = i(40245),
                u = i(23279),
                p = i.n(u);

            function h(t) {
                let e = "";
                return e = `<svg width="100%" height="100%" \n                viewBox="0 0 ${t.viewBox[0]} ${t.viewBox[1]}">`, Object.entries(t.paths).forEach((t => {
                    let [i, n] = t;
                    e += `<path id="${i}" d="${n}"></path>`
                })), e += "</svg>", e
            }
            var f = i(48776);
            const g = Class({
                images: [],
                videos: [],
                _onVideoClick: null,
                currentSlide: 0,
                productTitle: "",
                emptyImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                zoomEnabled: !1,
                _imageOptions: {
                    outlineColor: ""
                },
                _productInfoPopovers: null,
                __construct: function(t) {
                    this._onVideoClick = t.onVideoClick, this.currentSlide = t.currentSlide, this.productTitle = t.productTitle, this.original = null, this.canClick = !1, this.node = tag("div", "row catalog__slick", [this._thumbContainer = tag("div", "col-sm-2 col-md-3 col-lg-2 hidden-xs", [this._nodeThumbnails = tag("div"), this._nodeVideo = tag("div")]), this._imgContainer = tag("div", "col-sm-10 col-md-9 col-lg-10", [this._productInfoPopovers = tag("div", "catalog__product__model-badge pf-d-flex pf-flex-column pf-text-right", [this._tooltipNode = this._renderTooltip()]), this._nodeImages = tag("div", "catalog__main-slider")])]), t.images.length && this.render(t.images, t.videos), $(this._nodeThumbnails).on("mouseenter", ".slick-slide", function(t) {
                        const e = $(t.currentTarget);
                        if (e.find("video")) return;
                        const i = $(e).data("slick-index");
                        if (!$(e).hasClass("slick-current")) {
                            var n;
                            this.original = $(this._nodeImages).find(".slick-current img");
                            const t = $(this.original).clone(),
                                e = $(this._nodeImages).find("[data-slick-index=" + i + "] img"),
                                r = null !== (n = e[0]) && void 0 !== n && n.hasAttribute("data-lazy") ? e.attr("data-lazy") : e.attr("src"),
                                o = t.attr("src", r);
                            $(o).addClass("cloned-image");
                            const a = $(this._nodeImages).find(".slick-current div div");
                            $(a).append(o), $(this.original).addClass("pf-d-none")
                        }
                        this._updateTooltipInfo(this._nodeImages.slick.$slides[i])
                    }.bind(this)), $(this._nodeThumbnails).on("mouseleave", ".slick-slide", function() {
                        $(".cloned-image").remove(), $(this.original).removeClass("pf-d-none");
                        const t = $(this._nodeImages).find(".slick-current div div")[0];
                        this._updateTooltipInfo(t)
                    }.bind(this)), window.addEventListener("keyup", this._onKeyUp.bind(this))
                },
                async render(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    this.imagesToLazyLoad = 0, this.images = this._setFilteredImages(t), this.videos = this._setVideos(t, e), this._setThumbs(), this._setImages(), this._initSlickSliders(), this._updateTooltipInfo(this._nodeImages.slick.$slides[0]), this.addSlickSliderDataLayerListeners(), i.outlineColor && this.updateOutlineColor(i.outlineColor), this._setInitialImageBackground(), this.hasFitVideo() && (this.setSlickDots(), window.addEventListener("resize", p()(this.setSlickDots.bind(this), 300)))
                },
                _updateBackgroundColor: function(t) {
                    const e = ".slick-slide:not(.slick-cloned)",
                        i = t[0].forceBackgroundColor;
                    if (!!t[0].svgUnderlay) return this._updateSVGColor(`${e} #backgroundColor`, i), void this._updateZoomedSVG(t);
                    $(this._nodeImages).find(`${e} img`).css("background", `0% 0% / contain ${i}`), $(this._nodeThumbnails).find("img").css("background", i), $(this._nodeImages).find(`${e} .catalog__product__image`).each(((e, n) => {
                        var r;
                        t[e] && (n.style.background = `url(${null===(r=t[e])||void 0===r?void 0:r.thumbLink}), ${i}`)
                    }))
                },
                _updateBackgroundImage: function(t) {
                    const e = ".slick-slide:not(.slick-cloned)",
                        i = t[0].forceBackgroundImage,
                        n = document.createElement("img");
                    n.src = i, n.addEventListener("load", (() => {
                        $(this._nodeImages).find(`${e} img`).css("background", `url('${i}') 0% 0% / contain`), $(this._nodeThumbnails).find("img").css("background", `url('${i})`).css("background-size", "100%"), $(this._nodeImages).find(`${e} .catalog__product__image`).each(((e, n) => {
                            let r = n.querySelector("img").naturalWidth,
                                o = n.querySelector("img").naturalHeight;
                            var a;
                            (r = r > 100 ? r : 700, o = o > 100 ? o : 1e3, t[e]) && (n.style.background = `url('${null===(a=t[e])||void 0===a?void 0:a.thumbLink}'), url('${i}') 0% 0% / ${r}px ${o}px`)
                        }))
                    }), {
                        once: !0
                    })
                },
                _updateZoomImages(t) {
                    $(this._nodeImages).find(".slick-slide:not(.slick-cloned) .catalog__product__image").each(((e, i) => {
                        var n;
                        t[e] && (i.style.background = `url(${null===(n=t[e])||void 0===n?void 0:n.thumbLink}) 0% 0%`)
                    }))
                },
                updateOutlineColor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this._updateSVGColor(".slick-slide:not(.slick-cloned) #outlineColor", t), this._imageOptions.outlineColor = t, e && this._updateZoomedSVG(e)
                },
                _updateSVGColor(t, e) {
                    $(this._nodeImages).find(t).css("fill", e), $(this._nodeThumbnails).find(t).css("fill", e)
                },
                _updateZoomedSVG(t) {
                    const e = t[0].forceBackgroundColor;
                    $(this._nodeImages).find(".slick-slide:not(.slick-cloned) .catalog__product__image").each(((i, n) => {
                        var r;
                        if (!t[i] || !t[i].svgUnderlay) return;
                        const {
                            naturalHeight: o,
                            naturalWidth: a
                        } = $(n).find("img")[0];
                        if (1 === o) return;
                        const s = function(t, e, i, n, r) {
                            let o = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" \n                    viewBox="0 0 ${t.viewBox[0]} ${t.viewBox[1]}">`;
                            Object.keys(t.paths).forEach((e => {
                                o += `<path fill="${"outlineColor"===e?r:n}" d="${t.paths[e]}"></path>`
                            })), o += "</svg>";
                            const a = new Blob([o], {
                                type: "image/svg+xml"
                            });
                            return URL.createObjectURL(a)
                        }(t[i].svgUnderlay, 0, 0, e, this._imageOptions.outlineColor);
                        n.style.background = `url(${null===(r=t[i])||void 0===r?void 0:r.thumbLink}), url(${s}) 0% 0% / ${a}px ${o}px`
                    }))
                },
                _updateImgUrl: function(t, e) {
                    ["src", "data-lazy"].forEach((i => {
                        $(this._nodeImages).find(`img[${i}*="${t}"]`).attr(i, e);
                        const n = t.replace("_l", "_t"),
                            r = e.replace("_l", "_t");
                        $(this._nodeThumbnails).find(`img[${i}*="${n}"]`).attr(i, r)
                    }))
                },
                _updateImgFromVideo: function(t) {
                    this._nodeImages.querySelectorAll('img[src="' + t + '"]').forEach((function(t) {
                        t.classList.remove("hidden");
                        var e = t.previousElementSibling;
                        e && e.remove()
                    }))
                },
                _updateVideoFromImg: function(t, e) {
                    this._nodeImages.querySelectorAll('img[src="' + t + '"]').forEach(function(i) {
                        i.classList.add("hidden");
                        var n = i.previousElementSibling;
                        n ? n.classList.remove("hidden") : (n = this._renderVideoNode(e, t), i.parentElement.insertBefore(n, i), n.load())
                    }.bind(this))
                },
                _updateVideoFromVideo: function(t, e, i) {
                    this._nodeImages.querySelectorAll('video source[src="' + e + '"]').forEach(function(e) {
                        var n = this._renderVideoNode(t, i);
                        e.parentElement.replaceWith(n), n.load()
                    }.bind(this))
                },
                _setImages: function() {
                    s.U.hasClassName(this._nodeImages, "slick-initialized") && $(this._nodeImages).slick("destroy"), s.U.clearNode(this._nodeImages), this.images.concat(this.videos).map(this._renderImage)
                },
                _setInitialImageBackground() {
                    const t = this.images.find((t => "png" === t.extension));
                    t ? t.forceBackgroundColor ? this._updateBackgroundColor(this.images) : t.forceBackgroundImage && this._updateBackgroundImage(this.images) : this._updateZoomImages(this.images)
                },
                _setThumbs: function() {
                    s.U.hasClassName(this._nodeThumbnails, "slick-initialized") && $(this._nodeThumbnails).slick("destroy"), s.U.clearNode(this._nodeThumbnails), s.U.clearNode(this._nodeVideo), this.images.concat(this.videos).map(this._renderThumbnail), this.images.length < 6 && !this.images.length > 4 && this.hasFitVideo() && $(this._thumbContainer).addClass("catalog__slick-thumbnail")
                },
                _adjustThumbnailHeight: function() {
                    const t = this._nodeThumbnails.querySelectorAll(".slick-slide");
                    let e = -1;
                    t.forEach((t => {
                        const i = t.getBoundingClientRect().height;
                        i > e && (e = i)
                    })), t.forEach((t => {
                        t.style.minHeight = e + "px"
                    }))
                },
                _initSlickSliders: function() {
                    $(this._nodeThumbnails).off("lazyLoaded").on("lazyLoaded", function(t, e) {
                        e.setDimensions(), this._adjustThumbnailHeight(), e.setPosition()
                    }.bind(this)).slick({
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        asNavFor: this._nodeImages,
                        lazyLoad: "ondemand",
                        dots: !1,
                        vertical: !0,
                        arrows: !0,
                        verticalSwiping: !1,
                        speed: 300,
                        focusOnSelect: !0,
                        accessibility: !0,
                        focusOnChange: !1,
                        adaptiveHeight: !1,
                        prevArrow: '<div role="button" class="catalog__slick__arrow catalog__slick__arrow--vertical catalog__slick__arrow--top slick-arrow-thumb"><div class="catalog__slick__arrow-bg"><span class="pf-i pf-i-chevron-up"></span></div></div>',
                        nextArrow: '<div role="button" class="catalog__slick__arrow catalog__slick__arrow--vertical catalog__slick__arrow--bottom slick-arrow-thumb"><div class="catalog__slick__arrow-bg"><span class="pf-i pf-i-chevron-down"></span></div></div>'
                    }).on("keyup", ".slick-slide", (t => {
                        "enter" === t.key.toLowerCase() && $(this._nodeImages).slick("slickGoTo", $(t.target).data("slick-index"))
                    })), setTimeout((() => {
                        $(this._nodeThumbnails).find(".slick-slide").attr({
                            role: "button",
                            tabindex: "0"
                        })
                    }), 0), $(this._nodeImages).off("beforeChange").on("beforeChange", function(t, e, i, n) {
                        this.canClick = !1, this.currentSlide = n;
                        const r = $(e.$slides[n]).find("video");
                        r.length && (r[0].autoplay = !0, r[0].load()), $(e.$slides[n]).find(".catalog__product__image").css("opacity", 0)
                    }.bind(this)).on("afterChange", function(t, e, i, n) {
                        this._updateTooltipInfo(e.$slides[i]), this.canClick = !0, $(this._nodeThumbnails).find(".slick-slide").attr({
                            role: "button",
                            tabindex: "0"
                        }), $(e.$slides[i]).find(".catalog__product__image").css("opacity", 1)
                    }.bind(this)).off("lazyLoaded").on("lazyLoaded", (function(t, e) {
                        this.imagesToLazyLoad < 1 && e.animateHeight(), this.imagesToLazyLoad++
                    })).on("swipe", (() => {
                        this.dataLayerCallback(this._nodeImages, "image")
                    })).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !0,
                        fade: !1,
                        asNavFor: this._nodeThumbnails,
                        lazyLoad: "ondemand",
                        swipeToSlide: !0,
                        speed: 300,
                        prevArrow: '<div role="button" aria-label="' + lang("Navigate to previous image") + '" class="catalog__slick__arrow catalog__slick__arrow--horizontal catalog__slick__arrow--left slick-arrow-main"><div class="catalog__slick__arrow-bg"><span class="pf-i pf-i-chevron-left"></span></div></div>',
                        nextArrow: '<div role="button" aria-label="' + lang("Navigate to next image") + '" class="catalog__slick__arrow catalog__slick__arrow--horizontal catalog__slick__arrow--right slick-arrow-main"><div class="catalog__slick__arrow-bg"><span class="pf-i pf-i-chevron-right"></span></div></div>',
                        dots: !1,
                        responsive: [{
                            breakpoint: c.dB.BREAKPOINT_DOTS,
                            settings: {
                                dots: !0
                            }
                        }]
                    }).find(".catalog__slick__arrow").attr("tabindex", "0").on("keyup", (t => {
                        "enter" === t.key.toLowerCase() && t.target.click()
                    })), $(this._nodeImages).slick("slickSetOption", "speed", 0).slick("slickGoTo", this.currentSlide).slick("slickSetOption", "speed", 300), 1 === this.images.length && $(this._nodeImages).addClass("one-image");
                    const t = this.hasFitVideo() ? 1 : 0;
                    this.images.length + t <= 5 && $(this._nodeThumbnails).find(".slick-list").addClass("not-sliding")
                },
                _getThumb: function(t, e) {
                    return t.originalLink ? t.originalLink : t.actualThumbLink && !e ? t.actualThumbLink : t.thumbLink
                },
                _getProductAltText: function(t) {
                    return this.productTitle + " thumbnail " + (parseInt(t) + 1)
                },
                _renderVideoNode: function(t, e) {
                    var i = tag("video", {
                        className: "img-responsive catalog__product__video",
                        attr: {
                            poster: e,
                            preload: "true",
                            playsinline: "true",
                            "webkit-playsinline": "true",
                            muted: !0
                        }
                    }, [tag("source", {
                        attr: {
                            src: t,
                            type: "video/mp4"
                        }
                    })]);
                    return i.muted = !0, i.loop = !0, i.autoplay = !1, i.playsinline = !0, i.controls = !1, i.preload = !1, i
                },
                _renderImage(t, e) {
                    let i = !1;
                    if (!t.videoLink || t.videoId || t.videoThumbnail || (i = !0), this._imageModelInfo = tag("div", {
                            id: "model-info-" + t.variantImageId,
                            className: "catalog__product__model-info pf-d-none text-left"
                        }), this._getModelInfo(t.modelInfo), !this.isYoutubeVideo(null == t ? void 0 : t.videoLink))
                        if (t.videoLink) tag("div", {
                            attr: {
                                "thumbnail-type": "video"
                            }
                        }, [this._imageModelInfo, this._renderVideoNode(t.videoLink, this._getThumb(t, !0))]).append(this._nodeImages);
                        else {
                            const n = {
                                    className: "img-responsive catalog__product__image-loading " + (i ? "hidden" : ""),
                                    attr: {
                                        "data-lazy": this._getThumb(t, !0),
                                        src: this.emptyImage,
                                        alt: this._getProductAltText(e),
                                        "thumbnail-type": "img"
                                    },
                                    prop: {
                                        onload: t => {
                                            const e = t.currentTarget;
                                            e.complete && e.naturalHeight > 400 && t.currentTarget.classList.contains("catalog__product__image-loading") && t.currentTarget.classList.remove("catalog__product__image-loading")
                                        }
                                    }
                                },
                                r = {
                                    className: "img-responsive " + (i ? "hidden" : ""),
                                    onclick: this._onImageClick && this._onImageClick.bind(this, e),
                                    attr: {
                                        "data-lazy": this._getThumb(t, !0),
                                        src: this.emptyImage,
                                        alt: this._getProductAltText(e)
                                    }
                                };
                            let o = "";
                            t.svgUnderlay && (n.prop.onload = t => {
                                const e = t.currentTarget;
                                e.complete && e.naturalHeight > 400 && t.currentTarget.classList.contains("catalog__product__image-loading") && (t.currentTarget.classList.remove("catalog__product__image-loading"), this._updateZoomedSVG(this.images))
                            }, delete r.onclick, o = h(t.svgUnderlay)), tag("div", "", [i ? this._renderVideoNode(t.videoLink, this._getThumb(t, !0)) : "", this._imageModelInfo, tag("div", {
                                className: "catalog__product__image catalog__product__image-loading",
                                onclick: t => {
                                    t.preventDefault(), this.zoomEnabled = !this.zoomEnabled, this.onImageClickToggleZoom(this.zoomEnabled, e, t), this.zoomEnabled && setTimeout((() => {
                                        window.addEventListener("click", this.onClickOutside.bind(this, t), {
                                            once: !0
                                        })
                                    }), 50)
                                },
                                prop: {
                                    onmousemove: this.imageZoom.bind(this)
                                },
                                style: {
                                    backgroundImage: `url(${this._getThumb(t,!0)})`
                                }
                            }, [t.svgUnderlay ? tag("div", {
                                className: "pf-d-inline-block pf-position-relative"
                            }, [tag("span", {
                                innerHTML: o,
                                className: "pf-position-absolute pf-w-100 pf-h-100",
                                style: "left: 0; z-index: -1;"
                            }), tag("img", n)]) : tag("img", n)])]).append(this._nodeImages)
                        }
                },
                _updateTooltipInfo: function(t) {
                    if (!t) return;
                    const e = t.querySelector('[id^="model-info-"]'),
                        i = null == e ? void 0 : e.querySelector(".model-info-content");
                    if (this._tooltipNode.classList.add("pf-d-none"), null != e && e.childElementCount) {
                        const t = e.cloneNode(!0);
                        t.classList.remove("pf-d-none"), i && this._tooltipNode.classList.remove("pf-d-none"), this._tooltipNode.setAttribute("data-original-title", t.outerHTML), this._tooltipNode.setAttribute("aria-labeledby", e.id)
                    }
                },
                _renderTooltip: function() {
                    const t = tag("span", {
                        className: "pf-d-none",
                        attr: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            "data-container": "body",
                            "data-html": "true",
                            tabindex: "0"
                        },
                        els: [tag("span", {
                            className: "pf-badge pf-badge-location pf-bg-dark",
                            attr: {
                                "aria-hidden": "true"
                            }
                        }, [tag("img", {
                            src: "/static/images/products-catalog/ruler.svg",
                            alt: "Ruler"
                        })])]
                    });
                    return $(t).tooltip({
                        html: !0,
                        template: '\n                    <div class="tooltip catalog__product__tooltip" style="z-index: 99;">\n                         <div class="tooltip-arrow"></div>\n                         <div class="tooltip-inner catalog__product__tooltip-content"></div>\n                    </div>\n                '
                    }), t
                },
                _getModelInfo: function(t) {
                    if (t) {
                        const e = JSON.parse(t);
                        for (let t = 0; t < e.length; t++) this._getModelInfoText(e[t], e.length, t).append(this._imageModelInfo)
                    }
                },
                _getModelInfoText: function(t, e, i) {
                    const r = tag("div", "model-info-content" + (i + 1 < e ? " pf-mb-16" : ""), []);
                    for (let e = 0; e < t.length; e++) {
                        if (t[e].key === n) continue;
                        let i;
                        i = t[e].key === a ? this._getCommentText(t) : t[e].key === o ? this._getSizeText(t) : tag("p", "", [this._getModelKeyText(t, t[e].key), t[e].value]), i && i.append(r)
                    }
                    return r
                },
                _getModelKeyText: function(t, e) {
                    const i = {
                        "Waist circumference": dclang("products", "tooltip", "Waist circumference"),
                        "Chest circumference": dclang("products", "tooltip", "Chest circumference"),
                        Height: dclang("products", "tooltip", "Height"),
                        Hips: dclang("products", "tooltip", "Hips")
                    };
                    return tag("b", "", [i[e] + ": "])
                },
                _getCommentText: function(t) {
                    const e = t.find((t => t.key === a));
                    return e ? tag("p", {
                        className: "pf-mt-16 pf-italic",
                        style: {
                            "white-space": "normal"
                        }
                    }, e.value) : null
                },
                _getSizeText: function(t) {
                    const e = t.find((t => t.key === o));
                    let i = "";
                    return i = t.find((t => t.key === n)).value === r ? dclang("products", "tooltip", "Female model is wearing <b>size {size}</b>").replace("{size}", e.value) : dclang("products", "tooltip", "Male model is wearing <b>size {size}</b>").replace("{size}", e.value), tag("p", {
                        innerHTML: i
                    })
                },
                _renderThumbnail: function(t, e) {
                    if (t.videoLink && (t.videoId || t.videoThumbnail)) this._renderVideoThumbnail(t, e);
                    else {
                        const i = this.currentSlide === e ? "slick-current" : "";
                        tag("div", {
                            className: `pf-mt-8 img-holder ${i}`,
                            attr: {
                                "thumbnail-type": "img"
                            },
                            onclick: () => {
                                f.ZP.push({
                                    event: f.Fk,
                                    action: "click product image thumbnail",
                                    flow: c.dB.getCatalogTypeName(),
                                    type: "img",
                                    index: e + 1
                                })
                            }
                        }, [t.svgUnderlay ? tag("div", {
                            className: "pf-d-inline-block pf-position-relative",
                            onclick: function() {
                                $(this._nodeImages).slick("slickGoTo", e, !0)
                            }.bind(this)
                        }, [tag("span", {
                            innerHTML: h(t.svgUnderlay),
                            className: "pf-position-absolute pf-w-100 pf-h-100",
                            style: "left: 0;"
                        }), tag("img", {
                            className: "img-responsive",
                            attr: {
                                "data-lazy": this._getThumb(t),
                                src: l.WF,
                                alt: this._getProductAltText(e)
                            }
                        })]) : tag("img", {
                            className: "img-responsive",
                            onclick: function() {
                                $(this._nodeImages).slick("slickGoTo", e, !0)
                            }.bind(this),
                            attr: {
                                "data-lazy": this._getThumb(t),
                                src: l.WF,
                                alt: this._getProductAltText(e)
                            }
                        })]).append(this._nodeThumbnails)
                    }
                },
                _renderVideoThumbnail(t, e) {
                    this._nodeVideoButton && (s.U.clearNode(this._nodeVideoButton), s.U.clearNode(this._nodeVideo)), this._nodeVideoButton = document.querySelector(".single-product-view__video-button");
                    let i = tag("img", {
                        className: "img-responsive center-block",
                        src: this._getThumb(t)
                    });
                    const n = t.extension ? "video/" + t.extension : t.type,
                        r = {
                            loop: !0
                        };
                    d.pu.isIOS() || (r.autoplay = !0), ["video/mp4", "video/webm"].includes(n) && !this.isYoutubeVideo(t.videoLink) && (i = tag("video", {
                        className: "img-responsive center-block",
                        width: "80px",
                        height: "100px",
                        prop: r
                    }, [tag("source", {
                        attr: {
                            src: this._getThumb(t),
                            type: n
                        }
                    })]));
                    const o = tag("div", {
                        className: "pf-mt-8 img-holder video-gif pf-d-none pf-d-sm-block",
                        attr: {
                            role: "button",
                            tabindex: "0",
                            "aria-label": lang("Watch product showcase")
                        }
                    }, [i, this.isYoutubeVideo(t.videoLink) ? tag("div", {
                        className: "pf-d-flex pf-align-items-center pf-flex-column pf-justify-content-center video-gif__wrapper",
                        onclick: this._onVideoClick.bind(this, t.videoLink)
                    }, [tag("div", "video-gif__overlay pf-position-absolute pf-w-100 pf-h-100"), tag("img", {
                        src: `${PF.ASSETS_URL}images/landing/youtube/youtube-icon.svg`,
                        className: "pf-w-50 pf-bg-transparent video-gif__on-top"
                    })]) : tag("div", {
                        className: "pf-d-flex pf-align-items-center pf-flex-column pf-justify-content-center video-gif__wrapper",
                        attr: {
                            "thumbnail-type": "video"
                        },
                        onclick: () => {
                            f.ZP.push({
                                event: f.Fk,
                                action: "click product image thumbnail",
                                flow: c.dB.getCatalogTypeName(),
                                type: "video",
                                index: e + 1
                            })
                        }
                    }, [tag("div", "video-gif__overlay pf-position-absolute pf-w-100 pf-h-100 pf-z"), tag("i", "pf-i pf-i-play pf-i-36 video-gif__on-top")])]);
                    this.isYoutubeVideo(t.videoLink) ? o.append(this._nodeVideo) : o.append(this._nodeThumbnails)
                },
                _setVideos: function(t, e) {
                    var i = t.filter((function(t) {
                        if (t.videoThumbnail) return !0
                    }));
                    return i.length > 0 ? i : e
                },
                _setFilteredImages: function(t) {
                    return t.filter((function(t) {
                        if (!t.videoThumbnail) return !0
                    }))
                },
                _onKeyUp: function(t) {
                    "keyup" === t.type && (t.keyCode === $.ui.keyCode.RIGHT && $(this._nodeImages).slick("slickNext"), t.keyCode === $.ui.keyCode.LEFT && $(this._nodeImages).slick("slickPrev"))
                },
                isYoutubeVideo: t => (null == t ? void 0 : t.search("youtube")) >= 0,
                hasFitVideo() {
                    return this.videos.find((t => !this.isYoutubeVideo(null == t ? void 0 : t.videoLink)))
                },
                setSlickDots() {
                    if (window.innerWidth <= c.dB.BREAKPOINT_DOTS) {
                        const t = $(this._nodeImages).find(".slick-dots li").last();
                        t.empty();
                        const e = `<a href="javascript:" class="pf-h-100 pf-d-flex pf-align-items-center pf-fit-video-button">\n                                    <img src="${PF.ASSETS_URL}images/products-catalog/play-dot.svg" class="pf-fit-video-button__default">\n                                    <img src="${PF.ASSETS_URL}images/products-catalog/play-dot-active.svg" class="pf-fit-video-button__active">\n                                </a>`;
                        t.html(e)
                    }
                },
                getYoutubeVideoLink() {
                    var t;
                    return null === (t = this.videos.filter((t => this.isYoutubeVideo(null == t ? void 0 : t.videoLink)))) || void 0 === t ? void 0 : t[0]
                },
                onImageClickToggleZoom(t, e, i) {
                    if (window.innerWidth < c.dB.BREAKPOINT_DOTS) return !1;
                    this.zoomEnabled = t;
                    const n = document.querySelector(".catalog__slick .catalog__main-slider .slick-list");
                    this.zoomEnabled ? (n.style.zIndex = 5, i.currentTarget.classList.add("zoomed"), i.currentTarget.classList.contains("catalog__product__image-loading") && i.currentTarget.classList.remove("catalog__product__image-loading"), f.ZP.push({
                        event: f.Fk,
                        action: "zoom product image",
                        flow: c.dB.getCatalogTypeName(),
                        index: e + 1
                    }), this.imageZoom(i)) : (n.style.zIndex = 0, i.currentTarget.classList.remove("zoomed"), i.currentTarget.classList.add("catalog__product__image-loading"))
                },
                imageZoom(t) {
                    if (!this.zoomEnabled) return;
                    const e = t.currentTarget,
                        i = t.offsetX / e.offsetWidth * 100,
                        n = t.offsetY / e.offsetHeight * 100;
                    e.style.backgroundPosition = i + "% " + n + "%"
                },
                onClickOutside(t, e) {
                    var i;
                    let n = t.target.parentElement;
                    null !== (i = this.images[this.currentSlide]) && void 0 !== i && i.svgUnderlay && (n = n.parentElement);
                    const r = e.target;
                    if (!n.contains(r) && !n.contains(r) && n !== r) {
                        const t = document.querySelector(".catalog__slick .catalog__main-slider .slick-list");
                        if (!t) return;
                        t.style.zIndex = 0, n.classList.remove("zoomed"), n.classList.add("catalog__product__image-loading"), this.zoomEnabled = !1
                    }
                },
                addSlickSliderDataLayerListeners() {
                    var t, e;
                    (null === (t = this._thumbContainer) || void 0 === t ? void 0 : t.querySelectorAll(".slick-arrow-thumb")).forEach((t => t.addEventListener("click", (() => this.dataLayerCallback(this._thumbContainer, "list")))));
                    (null === (e = this._nodeImages) || void 0 === e ? void 0 : e.querySelectorAll(".slick-arrow-main")).forEach((t => t.addEventListener("click", (() => this.dataLayerCallback(this._nodeImages, "image")))))
                },
                dataLayerCallback(t, e) {
                    var i, n;
                    const r = $(t).find(".slick-active.slick-current[data-slick-index]"),
                        o = null == r ? void 0 : r.attr("data-slick-index"),
                        a = null === (i = $(r)) || void 0 === i || null === (n = i.find("[thumbnail-type]")) || void 0 === n ? void 0 : n.attr("thumbnail-type");
                    f.ZP.push({
                        event: f.Fk,
                        action: "switch product image",
                        flow: c.dB.getCatalogTypeName(),
                        location: e,
                        type: a,
                        index: parseInt(o) + 1
                    })
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogProductMediaGallery = g)
        },
        69663: (t, e, i) => {
            "use strict";
            i.d(e, {
                R: () => n
            });
            const n = Class({
                images: [],
                videos: [],
                productTitle: "",
                onVideoClick: null,
                currentSlide: 0
            });
            window && ((globalThis || {}).PFProductsCatalogProductMediaGalleryPar = n)
        },
        18170: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => p
            });
            var n = i(82320),
                r = i(30199),
                o = i(9730),
                a = i(99574),
                s = i(4473),
                l = i(9651),
                c = i(47586),
                d = i(17327),
                u = i(51122);
            const p = Class({
                _product: null,
                _variant: null,
                _priceListItems: null,
                _asteriskNode: null,
                displayAsterisk: !0,
                _detailedInfoModalTrigger: null,
                __construct: function(t, e) {
                    this._product = t, this.node = tag("span"), e ? this._render(e) : (new n.m).getBrandingOptionsPriceList(this._product, this._render)
                },
                _render: function(t) {
                    l.U.clearNode(this.node), this._priceListItems = t, tag("div", "products-pricing-info__muted text-muted", [tag("span", "products-pricing-info__red", ["* "]), tag("span", "pf-text-muted", [dlang("products", "Price varies depending on the production technique, print placement, product color and size, taxes, and shipping. See"), " "]), this._detailedInfoModalTrigger = tag("a", {
                        className: "pf-link",
                        onclick: this._showModal.bind(this)
                    }, [dlang("products", "detailed info")])]).append(this.node)
                },
                _showModal: function(t) {
                    t = t || "";
                    var e = new c.Z.Par;
                    e.title = dlang("products", "Product extras and costs"), e.modalDialogClass = "modal-lg", e.accessibility = !0, e.onShown = t => {
                        (0, d.fo)(t.target.querySelector(".modal-body"))
                    }, e.onClose = () => {
                        this.modal.remove(), (0, d.KS)(this._detailedInfoModalTrigger)
                    }, this.modal = new c.Z(e), this.modal.setContent(this.getContent(t)), this.modal.show()
                },
                _getBrandingItem: function(t) {
                    var e = this._getBrandingItemId(t.brandingOption);
                    return tag("div", "branding-options__category pf-px-12 pf-py-16", [tag("a", {
                        className: "category",
                        href: "#" + e,
                        data: {
                            toggle: "collapse"
                        },
                        attr: {
                            role: "button",
                            "aria-expanded": !1,
                            "aria-controls": e
                        }
                    }, [tag("div", "", [tag("span", "arrow"), tag("span", "branding-options__category__item-title", [t.title])]), tag("div", "branding-options__category__price-wrapper", [tag("p", "branding-options__category__item-price", [r.Q.createDiscountElementFromPrices(t.price, t.discountedPrice, t.currency, t.discountType)]), tag("span", "pf-text-muted text-right", [t.unit ? " / " + t.unit : ""])]), tag("div", {
                        className: "collapse info-text",
                        id: e
                    }, [tag("p", "branding-options__category__item-content margin-bottom-20", [t.content])])])])
                },
                variantChanged: function(t, e) {
                    this._variant = t, this._technique = e, this._priceListItems ? this._render(this._priceListItems) : (new n.m).getBrandingOptionsPriceList(this._product, this._render)
                },
                getContent: function(t) {
                    var e = new a.w("secondary"),
                        i = [],
                        n = this._getTabCaptions();
                    for (var r in n) {
                        var s = new o.t,
                            c = n[r];
                        s.caption = c.title, t && n.some((function(e) {
                            return e.id == t
                        })) ? s.isActive = c.id == t : s.isActive = 0 == r;
                        var d = tag("div", s.isActive ? "" : "hidden");
                        "technique" === c.id && this._getTechniqueContent().append(d), "location" === c.id && this._getFulfillmentLocationContent().append(d), i.push(d), s.onclick = function(t, e) {
                            for (var n in i)
                                if (i.hasOwnProperty(n)) {
                                    var r = i[n];
                                    n === e ? l.U.removeClassName(r, "hidden") : l.U.addClassName(r, "hidden")
                                }
                        }.bind(this, c, r), e.add(s)
                    }
                    l.U.addClassName(e.node, "pf-mb-24");
                    var u = dlang("products", "The product <b>price depends on</b> factors like production <b>technique, print placement, product color, size</b> and <b>fulfillment location.</b> You also have to take into account that shipping and taxes are extra.") + " ";
                    return tag("div", "branding-options", [tag("div", "", [tag("p", {
                        className: "pf-m-0 pf-pb-16 text-muted",
                        innerHTML: u
                    }), e, tag("div", "", i)])])
                },
                _getTabCaptions: function() {
                    var t = [];
                    return Object.keys(this._priceListItems).length && t.push({
                        id: "technique",
                        title: clang("printing", "Technique")
                    }), t.push({
                        id: "location",
                        title: lang("Fulfillment location")
                    }), t
                },
                _getTechniqueContent: function() {
                    var t = this._product.availableTechniques || [this._product.type],
                        e = tag("div", ""),
                        i = 0;
                    for (var n in t) {
                        if (!t.hasOwnProperty(n)) continue;
                        i++;
                        var r = t[n],
                            o = s.W.LABELS[r],
                            a = tag("div", "pf-mt-32", [tag("div", "pf-h4 pf-mb-12", [i + ". " + o])]);
                        const d = this.getTechniqueTabContent(r);
                        d && d.append(a);
                        var l = this._priceListItems[r];
                        for (var c in l) this._getBrandingItem(l[c]).append(a);
                        a.append(e)
                    }
                    return e
                },
                getTechniqueTabContent: t => t == u.V_ ? tag("p", {
                    className: "pf-mt-0 pf-mb-32 text-muted"
                }, [tag("div", {
                    innerHTML: dlang("products", "Your design will be machine-embroidered on the product. <b>Embroidery costs more than printed clothing because it takes more time and has higher production costs.</b> <br/><br/>Embroidery also comes with <b>digitization</b> and <b>adjustment costs</b>. We don't accept files that have been digitized elsewhere and we only charge files that are part of an order.")
                }), tag("div", {
                    className: "pf-mt-16",
                    innerHTML: dlang("products", "<b>Order 25+ embroidery products in a single order, and we'll digitize all your embroidery designs for free.</b> You can choose different products and add as many designs as you like.")
                })]) : t === u.ml ? tag("p", {
                    className: "pf-mt-0 pf-mb-32 text-muted",
                    innerHTML: dlang("products", "Your design will be printed directly on the product with the DTG (direct-to-garment) technique that yields bold and vibrant prints. Our base price <b>includes one print</b>, these are the extras you can get.")
                }) : null,
                _getFulfillmentLocationContent: function() {
                    var t = dlang("products", "Our product prices can change depending on where an order is fulfilled and which currency you use to pay for it."),
                        e = dlang("products", "Each product has a <b>fixed price</b> for each location. Our North American products have a fixed USD price, and our products in Europe have a fixed EUR price."),
                        i = dlang("products", "Products fulfilled in one location but charged in a different currency have a <b>floating price</b>."),
                        n = dlang("products", "For example, let's say you're ordering a t-shirt that we only fulfill in the US and you're paying for it in EUR. The price you pay would be our USD price converted to EUR. The end price would also depend on that month's exchange rate, which is what makes it a floating price."),
                        r = dlang("products", "If you're ordering a product that we fulfill in Europe and you're paying for it in EUR, you would pay our fixed EUR price.");
                    return tag("div", "pf-text-muted", [tag("p", "", t), tag("p", {
                        innerHTML: e
                    }), tag("p", {
                        innerHTML: i
                    }), tag("p", "", n), tag("p", "", r)])
                },
                setAsterisk: function(t) {
                    this._asteriskNode = t
                },
                _getBrandingItemId: function(t) {
                    return "sub_" + ++p._brandingItemId + "_" + t
                }
            }, l.U.Base);
            p._brandingItemId = 0, window && ((globalThis || {}).PFProductsCatalogProductBrandingOptionPriceList = p)
        },
        32965: (t, e, i) => {
            "use strict";
            i.d(e, {
                a: () => c
            });
            var n = i(3044),
                r = i(5460),
                o = i(9730),
                a = i(99574),
                s = i(4473),
                l = i(9651);
            const c = Class({
                __construct: function(t) {
                    if (t.guidelinesAndTemplates && Object.keys(t.guidelinesAndTemplates).length > 0) {
                        var e = new a.w("secondary"),
                            i = [],
                            c = Object.keys(t.guidelinesAndTemplates),
                            d = (0, n.z)(t.product.productId).getTechniqueFromMemory() || c[0];
                        for (var u in t.guidelinesAndTemplates)
                            if (t.guidelinesAndTemplates.hasOwnProperty(u)) {
                                var p = t.guidelinesAndTemplates[u],
                                    h = new o.t;
                                h.caption = s.W.LABELS[u], h.isActive = u === d, h.customId = u;
                                var f = tag("div", h.isActive ? "" : "hidden", [new r.r(p.templates, u), tag("div", {
                                    style: {
                                        wordWrap: "break-word"
                                    },
                                    className: "wysiwyg",
                                    innerHTML: p.guidelines
                                })]);
                                i.push(f), h.onclick = function(e) {
                                    for (var n = Object.keys(t.guidelinesAndTemplates).indexOf(e), r = 0, o = i.length; r < o; r++)
                                        if (i.hasOwnProperty(r)) {
                                            var a = i[r];
                                            r === n ? l.U.removeClassName(a, "hidden") : l.U.addClassName(a, "hidden")
                                        }
                                }.bind(this, u), e.add(h)
                            } c.length < 2 && l.U.addClassName(e.node, "hidden"), this.node = tag("div", "", [e, tag("div", "pf-mt-24", i)])
                    } else {
                        var g = (0, n.z)(t.product.productId).getTechniqueFromMemory() || t.product.type;
                        this.node = tag("div", "", [new r.r(t.templates, g), tag("div", {
                            style: {
                                wordWrap: "break-word"
                            },
                            className: "wysiwyg",
                            innerHTML: t.guidelines
                        })])
                    }
                }
            }, l.U.Base);
            window && ((globalThis || {}).PFProductsCatalogProductTabsGuidelines = c)
        },
        76731: (t, e, i) => {
            "use strict";
            i.d(e, {
                o: () => qr
            });
            var n = i(57581),
                r = i(82320),
                o = i(41286),
                a = i(90227),
                s = i(9651),
                l = i(70418),
                c = i(78009);
            const d = Class({
                _maximumColumnCount: 12,
                _slideHeight: 0,
                _columnTitleHeight: 0,
                _categoryId: 0,
                _activeData: null,
                _columns: [],
                _columnSwitcher: [],
                _slickOptions: {
                    arrows: !1,
                    dots: !0,
                    fade: !1,
                    lazyLoad: "ondemand",
                    infinite: !1,
                    swipeToSlide: !0,
                    responsive: [{
                        breakpoint: c.dB.BREAKPOINT_DOTS,
                        settings: {
                            dots: !0
                        }
                    }]
                },
                __construct: function(t, e) {
                    this._categoryId = e, this._data = t, this.node = tag("div"), this._getCachedData() ? this._render() : this._getData()
                },
                _getCachedData: function() {
                    return this._data[this._categoryId] || null
                },
                _render: function() {
                    this._activeData = this._getCachedData(), this._columns = this._activeData.columns.map(this._setColumns), s.U.clearNode(this.node), this.contentNode = tag("div", "pf-pt-24 pf-pb-64", [tag("hr", {
                        className: "pf-my-0 pf-mb-64",
                        attr: {
                            "aria-hidden": "true"
                        }
                    }), this._getTitle(), this.columnsNode = tag("div", "row", [this._columns])]), this._renderTextSwitcher(), this.contentNode.append(this.node)
                },
                _renderTextSwitcher: function() {
                    1 !== this._columns.length && setTimeout(function() {
                        this._initSlider(), window.addEventListener("resize", this._reInitColumns, !0)
                    }.bind(this))
                },
                removeResizeEvent: function() {
                    window.removeEventListener("resize", this._reInitColumns, !0)
                },
                _filterEmptyColumns: function(t) {
                    return !!t.column.value.length && t
                },
                _cacheData: function(t, e) {
                    e.columns = e.columns.filter(this._filterEmptyColumns), (e.title.value.length || e.columns.length) && (this._data[this._categoryId] = e, t())
                },
                _getData: function() {
                    (0, l.r)("product-catalog/get-category-text-block-info", {
                        categoryId: null !== this._categoryId && -1 !== Number(this._categoryId) ? this._categoryId : null
                    }, this._cacheData.bind(this, this._render))
                },
                _getColumnClass: function(t) {
                    return " col-sm-" + (1 === t ? 6 : this._maximumColumnCount / t)
                },
                _reInitColumns: function() {
                    s.U.hasClassName(this.node, "text-block-initialized") && (this._resetHeightValues(), s.U.removeClassName(this.node, "text-block-initialized"), this._initSlider())
                },
                _resetHeightValues: function() {
                    this._slideHeight = 0, this._columnTitleHeight = 0
                },
                _initSlider: function() {
                    if (this._columns.map(this._setTitleHeightValues), this._columns = this._columns.map(this._mapColumnTitles), this._columns.map(this._setColumnHeightValues), this._columns = this._columns.map(this._mapColumns), s.U.addClassName(this.node, "text-block-initialized"), window.innerWidth > c.dB.BREAKPOINT_DOTS && s.U.hasClassName(this.columnsNode, "slick-initialized")) return $(this.columnsNode).slick("destroy");
                    window.innerWidth <= c.dB.BREAKPOINT_DOTS && !s.U.hasClassName(this.columnsNode, "slick-initialized") && $(this.columnsNode).slick(this._slickOptions)
                },
                _setTitleHeightValues: function(t) {
                    var e = t.querySelector(".pf-h3");
                    return e.style.minHeight = "", this._columnTitleHeight = this._columnTitleHeight < e.offsetHeight ? e.offsetHeight : this._columnTitleHeight, t
                },
                _setColumnHeightValues: function(t) {
                    return t.style.minHeight = "", this._slideHeight = this._slideHeight < t.offsetHeight ? t.offsetHeight : this._slideHeight, t
                },
                _mapColumnTitles: function(t) {
                    return t.querySelector(".pf-h3").style.minHeight = this._columnTitleHeight + "px", t
                },
                _mapColumns: function(t, e) {
                    return t.style.minHeight = this._slideHeight + "px", t
                },
                _setColumns: function(t, e) {
                    return (0, s.U)({
                        tag: "div",
                        className: this._getColumnClass(this._activeData.columns.length),
                        els: [tag("h3", {
                            className: this._getColumnTitleClass(t),
                            innerHTML: t.title.value
                        }), tag("div", {
                            className: "pf-ui-body",
                            innerHTML: t.column.value
                        })],
                        data: {
                            columnId: "column-" + e
                        }
                    })
                },
                _getColumnTitleClass: function(t) {
                    return "pf-h3 " + (this._activeData.title.value.length ? "" : "pf-mt-0 pf-mb-8") + (1 !== this._activeData.columns.length || t.title.value.length ? "" : " pf-my-0")
                },
                _getTitle: function() {
                    return this._activeData.title.value.length ? tag("div", {
                        className: "col-md-12 pf-my-0 pf-h2 pf-mb-16",
                        style: {
                            overflowWrap: "break-word"
                        },
                        innerHTML: this._activeData.title.value
                    }) : ""
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogViewsTextBlock = d);
            var u = i(7660),
                p = i(93993),
                h = i(48433),
                f = i(90446),
                g = i(96486),
                v = i.n(g),
                m = i(33848),
                _ = i(15425),
                y = i(1250),
                b = i(48776);

            function w(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, C(n.key), n)
                }
            }

            function P(t, e, i) {
                return (e = C(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function C(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            let T = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), P(this, "price", null), P(this, "currency", null), P(this, "item_name", null), P(this, "price_usd", null), P(this, "item_id", null), P(this, "item_brand", null), P(this, "index", 0), P(this, "badge", null), P(this, "item_category", null), P(this, "item_category2", null)
                }
                var e, i, n;
                return e = t, n = [{
                    key: "fromArray",
                    value: function(t) {
                        if (!t) return {};
                        const e = Object.assign(new this, t.dataLayerData);
                        return delete Object.assign(e, {
                            item_name: e.itemName
                        }).itemName, delete Object.assign(e, {
                            price_usd: e.priceUsd
                        }).priceUsd, e.item_id = t.productId, e.item_brand = t.brand, e.badge = (0, b.t2)(t), e
                    }
                }], (i = null) && w(e.prototype, i), n && w(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();
            var k = i(56106),
                S = i(12930),
                E = i(9300);
            const O = Class({
                _type: "",
                _productItems: null,
                _productsNode: null,
                _sellingRegion: null,
                _data: {},
                __construct: function(t, e, i, n) {
                    if (this._type = t, this._productItems = e, this._sellingRegion = i, this._data = n || {}, this._shouldNotDisplayBlock()) return this.node = tag("div");
                    this.node = tag("div", "row", [tag("div", this._isTypeSimilar() || this._data.fullWidth ? "col-12" : "offset-xs-12 offset-sm-4 offset-md-3 offset-lg-3 offset-xl-2 col-12 col-sm-8 col-md-9 col-lg-9 col-xl-10", [this._getHeader(), this._productsNode = tag("div", {
                        className: "row pf-mb-40 products-pricing-other",
                        id: "similar-product-wrapper",
                        attr: {
                            "aria-label": this._getHeaderText(),
                            role: "list"
                        }
                    })])]), (this._isTypeSimilar() || this._isTypeDoesNotMatchSellingRegion()) && this._render(e), this._isTypeSimilar() && this._initProductObserver(), this._isTypeRecentlyViewed() && (new r.m).getRecentlyViewedProducts(this._render)
                },
                _initProductObserver: (0, g.debounce)((function() {
                    (0, y.k)("similar-product-wrapper", this._productObserverCallback, .85)
                }), 500),
                _productObserverCallback: function() {
                    const t = this._productItems.map(((t, e) => {
                        const i = T.fromArray(t);
                        return i.index = e + 1, i
                    }));
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: m.ef,
                        item_list_id: null,
                        item_list_name: O.SUGGESTED_PRODUCT_LIST_NAME,
                        catalog_level: 4,
                        flow: _.I4,
                        block_index: null,
                        customer_segment_id: null,
                        items: t
                    })
                },
                _render: function(t) {
                    for (var e = 0, i = t.length; e < i; e++) {
                        var n = t[e];
                        new u.E({
                            product: n,
                            className: (this._isTypeSimilar() ? "col-6 col-md-4 col-lg-3" : "col-6 col-md-4 col-xl-3") + " pf-mt-2 pf-mb-24 pf-pb-2",
                            showSizes: !n.isEmbroidery() || n.isApparelEmbroidery(),
                            showFulfillmentCountries: !0,
                            url: n.catalogPageUrl,
                            sellingRegion: this._sellingRegion,
                            disableEdt: this._isTypeRecentlyViewed(),
                            callback: this._onProductCardClick.bind(this, n, e)
                        }).append(this._productsNode)
                    }
                    setTimeout(function() {
                        this._initSlick()
                    }.bind(this), 50)
                },
                _onProductCardClick: function(t, e) {
                    if (!this._isTypeSimilar()) return;
                    const i = T.fromArray(t);
                    i.index = e, window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: m.H6,
                        item_list_name: O.SUGGESTED_PRODUCT_LIST_NAME,
                        catalog_level: 4,
                        flow: _.I4,
                        block_index: null,
                        customer_segment_id: null,
                        item: i
                    }), (0, k.addCustomerEvent)({
                        trigger: S.CUSTOMER_EVENT_TRIGGER_CLICK,
                        source: S.CUSTOMER_EVENT_SOURCE_PRODUCT_SUGGESTION_PRODUCT_INFO,
                        context: (0, E.getCustomerEventProductIdContext)(t.productId),
                        ttl: S.CUSTOMER_EVENT_TTL_30MIN,
                        maxUnloadsCount: 5
                    })
                },
                _initSlick: function() {
                    const t = $(this._productsNode);
                    t.hasClass("slick-initialized") && t.slick("unslick"), t.not(".slick-initialized").slick({
                        arrows: !1,
                        infinite: !1,
                        accessibility: !0,
                        dots: !0,
                        focusOnChange: !0,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        rows: 0,
                        responsive: [{
                            breakpoint: 1600,
                            settings: {
                                slidesToShow: this._isTypeSimilar() ? 4 : 3,
                                slidesToScroll: this._isTypeSimilar() ? 4 : 3
                            }
                        }, {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }]
                    })
                },
                _getHeader: function() {
                    if (this._isTypeSimilar() || this._isTypeRecentlyViewed()) {
                        let t = "";
                        return this._isTypeSimilar() ? t = dlang("products", "You might also like") : this._isTypeRecentlyViewed() && (t = dlang("products", "Recently viewed")), tag("h3", "pf-h3 pf-mt-24 pf-mb-16", t)
                    }
                    if (this._isTypeDoesNotMatchSellingRegion()) {
                        let t = dlang("products", "{count} products don't match your current default catalog and delivery preferences.");
                        PF.Customer.isLogged() && !PF.Customer.isB2c() && (t = dlang("products", "{count} products don't match your current default selling preferences."));
                        const e = [tag("span", "", t.replace("{count}", this._data.productCount))];
                        if (!f.V.isDSRSettingLocked) {
                            const t = tag("i", {
                                className: "pf-i pf-i-information pf-i-24 pf-text-gray pf-ml-4",
                                style: {
                                    outline: "none"
                                },
                                attr: {
                                    tabindex: 0,
                                    title: dlang("sellingRegion", "{linkStart}Adjust your preferences{linkEnd} to select them").replace("{linkStart}", '<a href="javascript:" class="pf-link-white dsr-does-not-match-settings-tooltip-link">').replace("{linkEnd}", "</a>"),
                                    "data-toggle": "tooltip",
                                    "data-trigger": "hover focus",
                                    "data-delay": '{"hide": 2000}',
                                    "data-html": !0
                                }
                            });
                            $(t).tooltip(), $(t).on("shown.bs.tooltip", (() => {
                                document.querySelector(".dsr-does-not-match-settings-tooltip-link").addEventListener("click", (() => {
                                    (0, h.l3)(this._data.activeStoreId || null)
                                })), document.querySelector(".dsr-does-not-match-settings-tooltip-link").addEventListener("keydown", (t => {
                                    "Enter" !== t.key && "Spacebar" !== t.key && " " !== t.key || (t.preventDefault(), (0, h.l3)(this._data.activeStoreId, t))
                                }))
                            })), e.push(t)
                        }
                        return new p.L({
                            id: "does-not-match-selling-region-products-block",
                            type: "gray",
                            heading: e,
                            className: "pf-mb-16"
                        })
                    }
                    return ""
                },
                _getHeaderText: function() {
                    return this._isTypeSimilar() ? dlang("products", "You might also like") : this._isTypeRecentlyViewed() ? dlang("products", "Recently viewed") : this._isTypeDoesNotMatchSellingRegion() ? dlang("products", "Not matching selling region products") : void 0
                },
                _isTypeSimilar: function() {
                    return this._type === O.TYPE_SIMILAR
                },
                _isTypeRecentlyViewed: function() {
                    return this._type === O.TYPE_RECENTLY_VIEWED
                },
                _isTypeDoesNotMatchSellingRegion: function() {
                    return this._type === O.TYPE_DOES_NOT_MATCH_SELLING_REGION
                },
                _shouldNotDisplayBlock: function() {
                    var t;
                    return !((!this._isTypeSimilar() || this._productItems && 0 !== this._productItems.length) && ((null === (t = this._data) || void 0 === t ? void 0 : t.categoryId) !== _.wo || this._sellingRegion.originSellingRegion.countryCode)) || this._isTypeRecentlyViewed() && 0 === (new r.m).getRecentlyViewedProductIds().length
                }
            }, s.U.Base);
            O.TYPE_SIMILAR = "SIMILAR_PRODUCTS", O.TYPE_RECENTLY_VIEWED = "RECENTLY_VIEWED", O.TYPE_DOES_NOT_MATCH_SELLING_REGION = "DOES_NOT_MATCH_SELLING_REGION", O.SUGGESTED_PRODUCT_LIST_NAME = "you might also like", window && ((globalThis || {}).PFProductsCatalogViewsOtherProducts = O);
            var I = i(8627),
                N = i(87457),
                R = i(37529);
            const D = Class({
                _productItems: [],
                _filters: null,
                _nodeClearAll: null,
                _sellingRegionSetting: null,
                __construct: function(t) {
                    this.node = tag("div"), this._sellingRegionSetting = t
                },
                render: function(t, e, i, n) {
                    s.U.clearNode(this.node), t && t.length && (this._productItems = t, this._filters = new R.C(this._productItems, this._onFilter, e || [], i, this._sellingRegionSetting, n), t.length < 2 || !this._filters._filters.length || (tag("div", "catalog__sidebar-filter", [tag("div", "catalog__sidebar-filter__title clearfix hidden-xs", [tag("span", "clearfix catalog__sidebar-filter__title__toggle", [tag("strong", "hidden-xs", [lang("Filter by"), ":"]), this._getCollapseNode()]), this._nodeClearAll = tag("a", {
                        className: "catalog__sidebar-filter__clear pf-link hidden",
                        onclick: this.clearAll
                    }, [lang("Clear all")])]), tag("div", {
                        className: "navbar-collapse collapse filters-wrap pf-p-0",
                        style: {
                            maxHeight: "none"
                        }
                    }, [this._filters])]).append(this.node), this._onFilter()))
                },
                clearAll: function() {
                    N.l.createAndDispatch(c.dB.EVENT_PRODUCTS_FILTER, {
                        filter: null,
                        productsOrVariants: this._productItems,
                        isOnPopstate: !0
                    })
                },
                _getCollapseNode: function() {
                    return (0, s.U)({
                        tag: "a",
                        className: "navbar-toggle collapsed clearfix visible-xs",
                        style: {
                            padding: 0,
                            margin: 0,
                            display: "block",
                            float: "none",
                            width: "100%"
                        },
                        data: {
                            toggle: "collapse",
                            target: ".filters-wrap"
                        },
                        els: [{
                            tag: "strong",
                            text: lang("Filter by")
                        }, {
                            tag: "img",
                            className: "pull-right",
                            src: "/static/images/products-catalog/filter.svg",
                            style: {
                                width: "20px",
                                height: "20px"
                            }
                        }]
                    })
                },
                _onFilter: function() {
                    this._filters && this._nodeClearAll && (this._filters.getAllSelectedValues().length ? s.U.removeClassName(this._nodeClearAll, "hidden") : s.U.addClassName(this._nodeClearAll, "hidden"))
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogSidebarFilter = D);
            const x = Class({
                categories: [],
                activeTopLevelCategory: null,
                activeCategoryId: null,
                shouldShowNew: !1,
                isTopLevel: !1,
                swapCategories: null,
                canAccessFastDelivery: !1,
                canAccessStarterPackCategory: !1
            });
            window && ((globalThis || {}).PFProductsCatalogSidebarMenuPar = x);
            var A = i(84294);
            const L = {
                getItemParent: t => (new A.PFProductsCatalogUtilsStore).categories.getById(t.parentId)
            };
            (globalThis || {}).PFProductsCatalogItemsCategoryItemHelpers = L;
            const B = Class({
                _category: null,
                _classActive: "catalog__sidebar-menu__item--active",
                _menuNode: null,
                __construct: function(t, e, i, n, r, o) {
                    this._category = t, this._activeCategoryId = e, this._activeTopLevelCategoryId = i, this._callback = n;
                    var a = new x;
                    a.categories = t.children, a.activeCategoryId = e, a.shouldShowNew = r, a.swapCategories = o, this._menuNode = this.hasChildren() && new M(a), this.node = (0, s.U)({
                        tag: "li",
                        className: this._getClassName(),
                        els: [{
                            tag: "a",
                            onclick: this._callback.bind(this, this),
                            href: this._category.getUrl(),
                            className: "pf-mb-12",
                            els: [tag("span", "catalog__sidebar-menu__item__text", this.getTitle()), !!r && this._category.isNew && tag("span", "pf-ml-4 pf-py-2 pf-badge pf-badge-small pf-badge--primary", clang("Badge", "New in Sidebar")), !!r && this.shouldShowNewSidebar() && tag("span", "pf-ml-4 pf-py-2 pf-badge pf-badge-small pf-badge--primary", clang("Badge", "New in Sidebar")), !r && this.shouldShowNewSidebar() && tag("span", "pf-ml-4 pf-badge pf-badge-small pf-badge--primary", clang("Badge", "New")), this.isTopLevel() && tag("span", "catalog__sidebar-menu__item__arrow")]
                        }, this._menuNode, (0, _.Q$)(t.id) && (this.isTopLevel() || (0, _.H9)(t.id)) ? tag("div", {
                            style: {
                                display: "flow-root"
                            }
                        }, [tag("hr", "pf-mb-8 pf-mt-20")]) : tag("div")]
                    })
                },
                isTopLevel: function() {
                    return 0 === this._category.parentId
                },
                hasChildren: function() {
                    return this._category.children.length > 0
                },
                shouldShowNewSidebar: function() {
                    var t = moment(this._category.settings.showNewSidebarSetAt),
                        e = t ? t.clone().add(30, "days") : null;
                    return t < e
                },
                setAsActive: function() {
                    s.U.addClassName(this.node, this._classActive)
                },
                removeActive: function() {
                    s.U.removeClassName(this.node, this._classActive)
                },
                getCategory: function() {
                    return this._category.isClone ? L.getItemParent(this._category) : this._category
                },
                getCategoryId: function() {
                    return this._category ? this._category.id : 0
                },
                getTitle: function() {
                    return this._category.settings.sidebarNavTitle ? this._category.settings.sidebarNavTitle : this._category.title
                },
                getActiveCategory: function() {
                    return this._category.id === this._activeCategoryId ? this._category : !!this._menuNode && this._menuNode._items.map(function(t) {
                        return t.getActiveCategory()
                    }.bind(this)).filter(Boolean).shift()
                },
                _getClassName: function() {
                    var t = "catalog__sidebar-menu__item";
                    return (0, _.H9)(this._category.id) && (t += " catalog__sidebar-menu--promoted pf-mb-16 pf-position-relative"), this.isTopLevel() && (t += " pf-mb-16 pf-position-relative"), this._isActive() ? t + " catalog__sidebar-menu__item--active" : t
                },
                _isActive: function() {
                    return 0 !== this._activeCategoryId && (!(0, _.EJ)(this._activeTopLevelCategoryId, this._activeCategoryId, this._category.id) && (this._category.id === this._activeCategoryId || this._category.id === this._activeTopLevelCategoryId))
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogSidebarMenuItem = B);
            var F = i(20833),
                V = i(26750),
                j = i(17977),
                U = i(50522);
            const M = Class({
                _params: null,
                _focus: null,
                _items: [],
                _activeItem: null,
                _nodeActiveSubItem: null,
                __construct: function(t) {
                    this._params = t, this._items = this._params.activeCategoryId !== V.p.ID_FAKE_FAVORITES ? this._getCategories(t.canAccessFastDelivery, t.canAccessStarterPackCategory).sort(this._sort).map(this._renderItem) : [], this.node = tag("ul", this._getClassName(), [this._items]), this._nodeActiveSubItem = tag("div", "catalog__sidebar-menu__current-item").append(this.node), j.i.isFavoriteProductsEnabled().then((t => {
                        t && this._shouldRenderFavorites() && this._getFavoritesNode().prepend(this.node)
                    }))
                },
                _shouldRenderFavorites: function() {
                    let t = 0;
                    return this._params.categories.forEach((e => {
                        t += e.parentId
                    })), this._isActiveTopLevel() || -1 === this._params.activeCategoryId || (0 === this._params.activeCategoryId || null === this._params.activeCategoryId) && !Number(t)
                },
                _getFavoritesNode: function() {
                    return tag("li", {
                        className: "catalog__sidebar-menu__item"
                    }, [tag("a", {
                        onclick: this.openFavoritesLink.bind(this),
                        className: "catalog__sidebar-menu__item-favorites",
                        href: "javascript:;"
                    }, [tag("span", "", lang("My favorites"))]), tag("div", "", [tag("hr", "pf-my-32")])])
                },
                openFavoritesLink: function() {
                    N.l.createAndDispatch(c.dB.EVENT_NAME, {
                        category: V.p.getTemporaryFavoritesCategory(0 === this._params.activeCategoryId ? null : this._params.activeCategoryId)
                    })
                },
                _renderItem: function(t) {
                    var e;
                    return new B(t, this._params.activeCategoryId, null === (e = this._params.activeTopLevelCategory) || void 0 === e ? void 0 : e.id, this._onclick, this._params.shouldShowNew, this._params.swapCategories)
                },
                _getClassName: function() {
                    var t = "catalog__sidebar-menu";
                    return this._params.isTopLevel && !this._params.activeCategoryId && (t += " catalog__sidebar-menu--hide-children"), this._params.isTopLevel && (t += " catalog__sidebar-menu--top-level hidden-xs"), t
                },
                _onclick: function(t, e) {
                    e.preventDefault(), this._params.isTopLevel && t.hasChildren() ? this._toggleActive(t) : this._setActiveItem(t)
                },
                _setActiveItem: function(t) {
                    N.l.createAndDispatch(c.dB.EVENT_NAME, {
                        category: t.getCategory(),
                        clickedOnSidebar: !0,
                        activeTab: (new F.R).hash,
                        isRenderRequired: !1
                    })
                },
                _getCategories: function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this._params.swapCategories && this._params.swapCategories.length ? this._params.categories.filter((t => (0, U.LH)(t, this._params.swapCategories))) : 0 === (null === (i = this._params.categories) || void 0 === i || null === (n = i[0]) || void 0 === n ? void 0 : n.parentId) ? (0, _.dY)(this._params.categories, "settings.sidebarNavPosition", !1, t, e) : this._params.categories;
                    var i, n
                },
                _toggleActive: function(t) {
                    if (void 0 !== t.getCategoryId) {
                        this._focus = t.getCategoryId() !== this._focus ? t.getCategoryId() : null;
                        var e = !0;
                        for (var i in this._items) {
                            var n = this._items[i];
                            if ("function" == typeof n.getCategoryId) {
                                if (n.getCategoryId() === this._focus) {
                                    n.setAsActive(), e = !1;
                                    continue
                                }
                                n.removeActive()
                            }
                        }
                        var r = t.getActiveCategory();
                        e && r ? mkE({
                            tag: "span",
                            text: r.getSidebarTitle()
                        }).append(this._nodeActiveSubItem) : mkE.clearNode(this._nodeActiveSubItem)
                    }
                },
                _isActiveTopLevel: function() {
                    return this._params.isTopLevel && this._params.activeTopLevelCategory
                },
                _sort: function(t, e) {
                    return t.settings.sidebarNavPosition - e.settings.sidebarNavPosition
                }
            }, mkE.Base);
            window && ((globalThis || {}).PFProductsCatalogSidebarMenu = M);
            const z = Class({
                _store: null,
                _isCategoriesMenuEnabled: !0,
                _sellingRegionSetting: null,
                filters: null,
                swapCategories: null,
                activeStoreId: null,
                canAccessFastDelivery: !1,
                __construct: function(t, e, i, n, r) {
                    this._store = t, this._isCategoriesMenuEnabled = e, this._sellingRegionSetting = i, this.swapCategories = n, this.activeStoreId = r, this.node = tag("div", "catalog__sidebar-content"), this._renderCategoriesMenu()
                },
                _renderCategoriesMenu: function() {
                    if (!this._isCategoriesMenuEnabled) return this;
                    const t = new x;
                    let e = this._store.categories.getAll();
                    return c.dB.isProductSwap() && (e = e.filter((t => {
                        let {
                            id: e
                        } = t;
                        return ![_.Zx, _.qH].includes(e)
                    }))), t.categories = e, t.activeTopLevelCategory = this._store.categories.getTopLevelCategory(), t.activeCategoryId = this._store.categories.getActiveCategoryId(), t.isTopLevel = !0, t.swapCategories = this.swapCategories, t.canAccessFastDelivery = c.dB.CAN_ACCESS_FAST_DELIVERY_CATEGORY, t.canAccessStarterPackCategory = c.dB.CAN_ACCESS_STARTER_PACK_CATEGORY, new M(t).append(this.node), this
                },
                _renderFilters: function() {
                    return this.filters = new D(this._sellingRegionSetting), this.filters.append(this.node), this
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogSidebar = z);
            var q = i(55558),
                H = i(32965),
                W = i(65311),
                G = i.n(W),
                Y = i(47586);
            const K = Class({
                __construct: function(t) {
                    var e = new Y.Z.Par,
                        i = new Y.Z(e);
                    i.setTitle(dlang("products", "Print care instructions")), i.setContent(this._getContent(t)), i.show()
                },
                _getContent: function(t) {
                    return tag("div", "", [tag("div", "pf-d-flex pf-mb-12", [tag("img", {
                        src: "/static/images/icons/01-wash-cold.svg",
                        className: "pf-mr-12",
                        style: {
                            height: "45px"
                        }
                    }), tag("p", "pf-m-0", t.careInstructions[0])]), tag("div", "pf-d-flex pf-mb-12", [tag("img", {
                        src: "/static/images/icons/02-thubmle-low.svg",
                        className: "pf-mr-12",
                        style: {
                            height: "45px"
                        }
                    }), tag("p", "pf-m-0", t.careInstructions[1])]), tag("div", "pf-d-flex pf-mb-12", [tag("img", {
                        src: "/static/images/icons/03-iron-cool.svg",
                        className: "pf-mr-12",
                        style: {
                            height: "45px"
                        }
                    }), tag("p", "pf-m-0", t.careInstructions[2])]), tag("div", "pf-d-flex", [tag("img", {
                        src: "/static/images/icons/04-no-dry-clean.svg",
                        className: "pf-mr-12",
                        style: {
                            height: "45px"
                        }
                    }), tag("p", "pf-m-0", t.careInstructions[3])])])
                }
            });
            window && ((globalThis || {}).PFProductsCatalogProductPrintCare = K);
            var Z = i(9730),
                Q = i(99574),
                J = i(61756),
                X = i(61169),
                tt = i(25046);

            function et(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function it(t, e) {
                return it = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, it(t, e)
            }

            function nt(t) {
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
                    var i, n = at(t);
                    if (e) {
                        var r = at(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return rt(this, i)
                }
            }

            function rt(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return ot(t)
            }

            function ot(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function at(t) {
                return at = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, at(t)
            }

            function st(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function lt(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, ct(t, e, "set"), i), i
            }

            function ct(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var dt = new WeakMap,
                ut = new WeakSet;
            let pt = function(t) {
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
                    }), e && it(t, e)
                }(o, t);
                var e, i, n, r = nt(o);

                function o(t) {
                    var e, i, n;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), e = r.call(this), st(i = ot(e), n = ut), n.add(i),
                        function(t, e, i) {
                            st(t, e), e.set(t, i)
                        }(ot(e), dt, {
                            writable: !0,
                            value: void 0
                        }), e.node = tag("div", "product-source-map-details"), e.par = t,
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(ot(e), ut, ht).call(ot(e)), e
                }
                return e = o, i && et(e.prototype, i), n && et(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(X.p);
            async function ht() {
                const t = new tt.L;
                var e, n;
                t.components = {
                    "product-source-map-details-vue": () => i.e(38781).then(i.bind(i, 16587))
                }, t.template = '\n            <product-source-map-details-vue :source-data="sourceData"/>\n        ', t.initialData = {
                    sourceData: this.par
                }, lt(this, dt, new tt.Z(t)), (e = this, n = dt, function(t, e) {
                    return e.get ? e.get.call(t) : e.value
                }(e, ct(e, n, "get"))).append(this.node)
            }

            function ft(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, wt(n.key), n)
                }
            }

            function gt(t, e) {
                return gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, gt(t, e)
            }

            function vt(t) {
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
                    var i, n = yt(t);
                    if (e) {
                        var r = yt(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return mt(this, i)
                }
            }

            function mt(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return _t(t)
            }

            function _t(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function yt(t) {
                return yt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, yt(t)
            }

            function bt(t, e, i) {
                return (e = wt(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function wt(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }

            function Pt(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function Ct(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Tt(t, e, "set"), i), i
            }

            function Tt(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var kt = new WeakMap,
                St = new WeakSet;
            let Et = function(t) {
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
                    }), e && gt(t, e)
                }(o, t);
                var e, i, n, r = vt(o);

                function o(t, e) {
                    var i, n, a;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), i = r.call(this), Pt(n = _t(i), a = St), a.add(n),
                        function(t, e, i) {
                            Pt(t, e), e.set(t, i)
                        }(_t(i), kt, {
                            writable: !0,
                            value: void 0
                        }), bt(_t(i), "variantId", void 0), bt(_t(i), "technique", void 0), i.variantId = t, i.technique = e, i.node = tag("div"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(_t(i), St, Ot).call(_t(i)), i
                }
                return e = o, i && ft(e.prototype, i), n && ft(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(X.p);

            function Ot() {
                const t = new tt.L;
                var e, n;
                t.components = {
                    "product-shipping-table": () => Promise.all([i.e(33348), i.e(45871)]).then(i.bind(i, 44273))
                }, t.template = '<product-shipping-table\n            :initial-variant-id="variantId" \n            :initial-technique="technique" />', t.initialData = {
                    variantId: this.variantId,
                    technique: this.technique
                }, Ct(this, kt, new tt.Z(t)), (e = this, n = kt, function(t, e) {
                    return e.get ? e.get.call(t) : e.value
                }(e, Tt(e, n, "get"))).append(this.node)
            }
            i(79421);
            const It = Class({
                _tabItems: [],
                productData: null,
                productInfo: null,
                _onVariantPicked: null,
                isTabEventDispatching: !0,
                _availability: null,
                activeTabId: "",
                __construct: function(t, e, i) {
                    this._tabItems = [{
                        id: "description",
                        title: lang("Description"),
                        callback: this._renderDescription
                    }], this.productData = t, this.productInfo = e, this.node = tag("div", "catalog__product__tabs pf-pt-48 pf-mb-64", [this._tabs = new Q.w("primary center-fixed", !0), this._tabContent = tag("div", "pf-text-muted")]), this.productData = t, this._onVariantPicked = i, this._renderTabs()
                },
                async setTabItems() {
                    var t, e;
                    if (this._tabItems.push({
                            id: "shipping",
                            title: lang("Shipping"),
                            callback: this._renderShipping.bind(this)
                        }), this.productData.product.shouldShowFileGuidelineTab() && this._tabItems.push({
                            id: "guidelines",
                            title: lang("File guidelines"),
                            callback: this._renderGuidelines.bind(this)
                        }), this.productData.product.shouldShowAvailabilityTab()) {
                        const t = "availability";
                        this._tabItems.push({
                            id: t,
                            title: lang("Availability"),
                            callback: this._renderAvailability
                        }), J.on("showProductAvailability", function() {
                            this.setActive(t), G()("html, body").animate({
                                scrollTop: G()(this.node).offset().top - G()(".catalog__product__tabs .pf-tabs").outerHeight()
                            }, 1e3)
                        }.bind(this))
                    }
                    null !== (t = this.productData) && void 0 !== t && null !== (e = t.productSource) && void 0 !== e && e.source && this._tabItems.push({
                        id: "source",
                        title: lang("Source"),
                        callback: this._renderSource
                    })
                },
                setActive: function(t) {
                    this._tabs.setActiveTab(this.getTab(t))
                },
                getActiveTab: function() {
                    return this.getTab((new F.R).hash)
                },
                getTab: function(t) {
                    const e = this._tabs.items.slice();
                    if (t) {
                        const i = e.filter((function(e) {
                            return e.customId === t
                        }));
                        if (i.length) return i.shift()
                    }
                    return e.shift()
                },
                async _renderTabs() {
                    await this.setTabItems(), this._tabs.items = this._tabItems.map(this._renderTab), this._tabs.render(), this.isTabEventDispatching = !1, this._tabs.setActiveTab(this.getActiveTab())
                },
                _renderTab: function(t) {
                    var e = new Z.t;
                    return e.caption = t.title, e.customId = t.id, e.subtitle = t.icon, this._isTestingProduct() ? (this._renderTabContentTest(this._getContent(t), t.id), e.onclick = this._showTabContent.bind(this, t.id)) : e.onclick = this._renderTabContent.bind(this, this._getContent.bind(this, t), t.id), e
                },
                _getContent: function(t) {
                    let e = "col-md-9 col-xl-7";
                    return ["availability", "shipping", "source"].includes(t.id) && (e = "col-md-12"), tag("div", "clearfix row", [t.key ? tag("div", {
                        className: e,
                        innerHTML: t.key.split(":").map(this._getProductDataValue.bind(this)).join("")
                    }) : "", t.callback ? tag("div", e, [t.callback()]) : ""])
                },
                _getProductDataValue: function(t) {
                    return this.productData[t] ? this.productData[t] : ""
                },
                _renderTabContent: function(t, e) {
                    const i = `tabContentItem-${e}`;
                    let n = this._tabContent.querySelector(`#${i}`);
                    this._tabContent.querySelectorAll(".tab-content-item").forEach((t => t.classList.add("hidden"))), n || (n = tag("div", {
                        className: "tab-content-item pf-pt-24 hidden",
                        id: `tabContentItem-${e}`
                    }, [t()]).append(this._tabContent)), n.classList.remove("hidden"), this._shouldDispatchTabEvent() && (N.l.createAndDispatch(c.dB.EVENT_TAB_CHOOSE, {
                        activeTab: "description" !== e ? e : "",
                        activeProductId: this.productData.product.productId
                    }), e !== this.activeTabId && b.ZP.push({
                        event: b.$B,
                        category: b.Zn,
                        location: null,
                        name: e
                    })), this.activeTabId = e, G()('[data-toggle="tooltip"]').tooltip(), null !== this._availability && this._availability.adjustScrollButtons()
                },
                _isTestingProduct: function() {
                    return 308 === this.productData.product.productId
                },
                _renderTabContentTest: function(t, e) {
                    tag("div", {
                        className: "pf-pt-24 hidden",
                        id: e
                    }, [t]).append(this._tabContent), null !== this._availability && this._availability.adjustScrollButtons()
                },
                _showTabContent: function(t) {
                    this._shouldDispatchTabEvent() && N.l.createAndDispatch(c.dB.EVENT_TAB_CHOOSE, {
                        activeTab: "description" !== t ? t : "",
                        activeProductId: this.productData.product.productId
                    }), G()(this._tabContent).find("#" + this.activeTab).addClass("hidden"), G()(this._tabContent).find("#" + t).removeClass("hidden"), this.activeTab = t
                },
                _renderDescription: function() {
                    var t = tag("div", {
                        className: "pf-mb-24",
                        innerHTML: this._getProductDataValue("productDescription")
                    });
                    return this.productData.product.careInstructions.length && tag("div", {
                        className: "pf-mb-24",
                        innerHTML: this._getProductDataValue("printCareInstructionsHtml")
                    }).append(t), this.productData.warnings && this.productData.warnings.length && tag("div", null, this.productData.warnings.map(this._renderWarning)).append(t), G()(t).find('a[href="#care-instructions"]').on("click", function(t) {
                        t.preventDefault(), new K(this.productData.product)
                    }.bind(this)), t
                },
                _renderWarning: function(t) {
                    return tag("div", {
                        className: "pf-mb-24 pf-alert pf-alert--warning-gray",
                        id: t.htmlId
                    }, [tag("span", "pf-text-brown pf-alert__icon icon-warning-triangle"), tag("div", {
                        innerHTML: t.htmlDescription
                    })])
                },
                _renderGuidelines: function() {
                    return this.productData.guidelines.length ? new H.a(this.productData) : ""
                },
                _renderAvailability: function() {
                    return this._availability = new q.W, this._availability.initAndGetContainerNode(this.productData)
                },
                _renderShipping() {
                    return tag("div", "", [new Et(this.productData.activeVariant.variantId, this.productInfo.getActiveTechnique())])
                },
                _renderSource() {
                    return new pt(this.productData.productSource.source.items)
                },
                _shouldDispatchTabEvent: function() {
                    return !!this.isTabEventDispatching || (this.isTabEventDispatching = !0, !1)
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogProductTabs = It);
            var Nt = i(51122);
            const Rt = Class({
                _productData: null,
                columnTypes: ["technique", "printArea", "branding", "features"],
                __construct: function(t, e) {
                    this._productData = t;
                    var i = !!this._productData.getPrintInfo("branding"),
                        n = this._productData.getPrintInfo("features").length > 0,
                        r = this._productData.getPrintInfo("printArea").length > 0,
                        o = this._productData.getPrintInfo("technique").length > 0 && (!this._productData.product.isStockProduct() || this._productData.product.isEmbroiderySample());
                    if (r || i || n || o) {
                        var a = [lang("Branding options")];
                        i && this._isDTGAndMultiTechnique() && a.push(lang("(DTG only)")), this.node = tag("div", "whitesmoke pf-pt-32 pf-pb-4", [tag("div", "container catalog__product__print-techniques__container", [r && this._getColumn("printArea", tag("div", "", [tag("p", "", [lang("File size")]), tag("div", "", this._productData.getPrintInfo("printArea").map(function(t) {
                            return tag("div", "pf-mb-16", [tag("h3", "", [t.label + this._getTechniqueLabel(t)]), t.downloadUrl ? tag("a", {
                                className: "pf-link",
                                href: t.downloadUrl
                            }, [dlang("products", "Get print file template")]) : ""])
                        }.bind(this)))])), i && this._getColumn("branding", tag("div", "", [tag("p", "", a.join(" ")), tag("h3", {
                            innerHTML: this._productData.getPrintInfo("branding")
                        }), tag("a", {
                            className: "pf-link",
                            onclick: e
                        }, [dlang("products", "See guidelines")])])), o && this._getColumn("technique", tag("div", "", [tag("p", "", [dlang("products", "Technique")]), tag("div", "", this._productData.getPrintInfo("technique").map((function(t, e, i) {
                            return tag("span", "", [tag("h3", {
                                innerHTML: t
                            }), e < i.length - 1 ? tag("div", "pf-text-muted", [lang("or")]) : ""])
                        }))), this._productData.isLogged ? "" : tag("span", {
                            innerHTML: "&nbsp;"
                        })])), n && this._getColumn("features", tag("div", "", [tag("p", "", [dlang("products", "Features")]), tag("div", "", this._productData.getPrintInfo("features").map((function(t) {
                            return tag("span", "", [tag("h3", {
                                innerHTML: t
                            })])
                        })))]))])])
                    } else this.node = tag("div")
                },
                _getTechniqueLabel: function(t) {
                    var e = "";
                    return t.techniqueLabel && (e = " (" + t.techniqueLabel + ")"), e
                },
                _getColumn: function(t, e) {
                    var i = "catalog__product__print-techniques";
                    return tag("div", i, [tag("div", i + "__image " + i + "__" + t + "__image"), tag("div", i + "__text", [e])])
                },
                _isDTGAndMultiTechnique: function() {
                    var t = this._productData.product.availableTechniques;
                    return t.includes(Nt.ml) && t.length > 1
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogProductPrintInfo = Rt);
            var Dt = i(69663),
                xt = i(58944);

            function At(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function Lt(t, e) {
                return Lt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Lt(t, e)
            }

            function Bt(t) {
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
                    var i, n = jt(t);
                    if (e) {
                        var r = jt(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return Ft(this, i)
                }
            }

            function Ft(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Vt(t)
            }

            function Vt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function jt(t) {
                return jt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, jt(t)
            }

            function Ut(t, e, i) {
                Mt(t, e), e.set(t, i)
            }

            function Mt(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function zt(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, Ht(t, e, "get"))
            }

            function qt(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Ht(t, e, "set"), i), i
            }

            function Ht(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Wt = new WeakMap,
                $t = new WeakMap,
                Gt = new WeakSet;
            let Yt = function(t) {
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
                    }), e && Lt(t, e)
                }(o, t);
                var e, i, n, r = Bt(o);

                function o(t) {
                    var e, i, n;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), e = r.call(this), Mt(i = Vt(e), n = Gt), n.add(i), Ut(Vt(e), Wt, {
                            writable: !0,
                            value: {}
                        }), Ut(Vt(e), $t, {
                            writable: !0,
                            value: void 0
                        }), qt(Vt(e), Wt, t), e.node = (0, s._)("div"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(Vt(e), Gt, Kt).call(Vt(e)), e
                }
                return e = o, i && At(e.prototype, i), n && At(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(X.p);

            function Kt() {
                const t = new tt.L;
                t.components = {
                    "product-additional-info-popovers": () => i.e(42831).then(i.bind(i, 75008))
                }, t.template = '<product-additional-info-popovers\n                            :is-eco-friendly="isEcoFriendly"\n                            :product-id="productId"\n                        />', t.initialData = {
                    isEcoFriendly: zt(this, Wt).isEcoFriendly,
                    productId: zt(this, Wt).productId
                }, qt(this, $t, new tt.Z(t)), zt(this, $t).append(this.node)
            }
            const Zt = Class({
                product: null,
                images: [],
                _tempImages: [],
                activeSlideIndex: 0,
                __construct: function(t) {
                    this.productData = t, this.product = t.product;
                    var e = new Dt.R;
                    e.onVideoClick = this._openVideoModal, e.productTitle = this.product.getFullTitle(), this._tempImages = t.images, this.node = tag("div", "", [this.gallery = new xt.L(e)]), this._initPopovers()
                },
                _getMatchingImages: function(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    var n = this._tempImages.filter(function(n) {
                        if (!n.variantMaps.length) return n.active;
                        if (!n.active) return !1;
                        var r = (new A.PFProductsCatalogUtilsStore).categories.getPath();
                        for (var o in !e || r.length && !i || ((r = (new A.PFProductsCatalogUtilsStore).categories).setActiveCategoryId(e), r = r.getPath()), n.variantMaps)
                            if (this._doesMapMatchVariant(n.variantMaps[o], t, r)) return !0;
                        return !1
                    }.bind(this));
                    return n.sort((function(t, e) {
                        return t.order - e.order
                    }))
                },
                _doesMapMatchVariant: function(t, e, i) {
                    var n = i.some((function(e) {
                        return t.categoryId == e.id
                    }));
                    if (t.categoryId && !n) return !1;
                    var r = !t.color || t.color == e.color,
                        o = !t.size || t.size == e.size;
                    return r && o
                },
                setVariantImage(t, e) {
                    var i = [{
                            thumbLink: t.urlImage
                        }],
                        n = this._getMatchingImages(t, this.product.favoriteCatalogCategoryId);
                    if (!!!n.filter((t => 0 === t.videoThumbnail)).length && this.product.imageFallbackCategoryId && (n = this._getMatchingImages(t, this.product.imageFallbackCategoryId, !0)), n.length) {
                        var r = n.map((function(e) {
                                var i;
                                for (var n in e.backgroundOverride) n == t.color && (i = e.backgroundOverride[n]);
                                var r = null,
                                    o = null,
                                    a = null;
                                return e.useGeneratorColor && i ? (r = i.colorCode, o = i.image, a = i.type) : e.useVariantColor && (r = e.useVariantColor ? t.colorCode : null), {
                                    thumbLink: e.largeUrl,
                                    actualThumbLink: e.thumbUrl,
                                    originalLink: e.originalUrl,
                                    forceBackgroundImage: o,
                                    forceBackgroundColor: r,
                                    videoLink: e.videoUrl,
                                    videoThumbnail: e.videoThumbnail,
                                    type: a,
                                    extension: e.extension,
                                    modelInfo: e.modelInfo,
                                    variantImageId: e.variantImageId,
                                    svgUnderlay: e.svgUnderlay
                                }
                            })),
                            o = !1,
                            a = r.filter((function(t) {
                                return !!t.videoThumbnail || (o = !0, !1)
                            }));
                        i = !o && a.length > 0 ? i.concat(a) : r
                    }
                    this._updateGallery(i, e)
                },
                _updateGallery(t, e) {
                    if (0 === this.images.length) return this.images = t, void this.gallery.render(this.images, this.product.productVideoData, e);
                    var i = this.images.map((function(t) {
                            return t.thumbLink
                        })),
                        n = t.map((function(t) {
                            return t.thumbLink
                        }));
                    if (i.length !== n.length) return this.images = t, void this.gallery.render(this.images, this.product.productVideoData, e);
                    for (var r = 0; r < t.length; r++) this.images[r].thumbLink !== t[r].thumbLink && this.gallery._updateImgUrl(this.images[r].thumbLink, t[r].thumbLink), !this.images[r].videoLink && t[r].videoLink && this.gallery._updateVideoFromImg(t[r].thumbLink, t[r].videoLink), this.images[r].videoLink && !t[r].videoLink && this.gallery._updateImgFromVideo(t[r].thumbLink), this.images[r].videoLink && t[r].videoLink && this.images[r].videoLink !== t[r].videoLink && this.gallery._updateVideoFromVideo(t[r].videoLink, this.images[r].videoLink, t[r].thumbLink);
                    const o = this.gallery._setFilteredImages(t),
                        a = this.images.find((t => "png" === t.extension)),
                        s = t.find((t => "png" === t.extension));
                    s ? ((null == a ? void 0 : a.forceBackgroundColor) !== s.forceBackgroundColor && this.gallery._updateBackgroundColor(o), null != a && a.svgUnderlay || (null == a ? void 0 : a.forceBackgroundImage) === s.forceBackgroundImage || !s.forceBackgroundImage || this.gallery._updateBackgroundImage(o), e.outlineColor && this.gallery.updateOutlineColor(e.outlineColor, o)) : this.gallery._updateZoomImages(o), this.images = t
                },
                _openVideoModal: function(t) {
                    var e, i = new Y.Z.Par;
                    i.title = this.product.getFullTitle(), i.modalDialogClass = "modal-lg", i.onClose = function() {
                        e.remove()
                    }, (e = new Y.Z(i)).setContent(this._getVideoNode(t)), e.show(), b.ZP.push({
                        event: b.Fk,
                        action: "click product image thumbnail",
                        flow: c.dB.getCatalogTypeName(),
                        type: "youtube video",
                        index: null
                    })
                },
                _getVideoNode(t) {
                    return t.includes("youtube.com") ? this._prepareYoutubeIframe(t) : this._prepareHtmlVideo(t)
                },
                _prepareYoutubeIframe: function(t) {
                    return tag("iframe", {
                        src: t,
                        attr: {
                            width: "100%",
                            height: "480px",
                            frameborder: "0"
                        }
                    })
                },
                _prepareHtmlVideo: function(t) {
                    return tag("video", {
                        attr: {
                            controls: !0,
                            width: "100%",
                            height: "480px"
                        }
                    }, [tag("source", {
                        attr: {
                            src: t
                        }
                    })])
                },
                _initPopovers() {
                    new Yt({
                        isEcoFriendly: this.productData.product.isEcoFriendly,
                        productId: this.productData.product.productId
                    }).append(this.gallery._productInfoPopovers)
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogProductMedia = Zt);
            var Qt = i(99713);

            function Jt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function Xt(t, e) {
                return Xt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Xt(t, e)
            }

            function te(t) {
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
                    var i, n = ne(t);
                    if (e) {
                        var r = ne(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return ee(this, i)
                }
            }

            function ee(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return ie(t)
            }

            function ie(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function ne(t) {
                return ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, ne(t)
            }

            function re(t, e) {
                ae(t, e), e.add(t)
            }

            function oe(t, e, i) {
                ae(t, e), e.set(t, i)
            }

            function ae(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function se(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, de(t, e, "get"))
            }

            function le(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }

            function ce(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, de(t, e, "set"), i), i
            }

            function de(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var ue = new WeakMap,
                pe = new WeakMap,
                he = new WeakMap,
                fe = new WeakMap,
                ge = new WeakSet,
                ve = new WeakSet;
            let me = function(t) {
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
                    }), e && Xt(t, e)
                }(o, t);
                var e, i, n, r = te(o);

                function o(t, e, i) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), re(ie(n = r.call(this)), ve), re(ie(n), ge), oe(ie(n), ue, {
                        writable: !0,
                        value: void 0
                    }), oe(ie(n), pe, {
                        writable: !0,
                        value: null
                    }), oe(ie(n), he, {
                        writable: !0,
                        value: null
                    }), oe(ie(n), fe, {
                        writable: !0,
                        value: !1
                    }), ce(ie(n), pe, t), ce(ie(n), he, e), ce(ie(n), fe, i), n.node = tag("div", "row featured-items"), le(ie(n), ge, _e).call(ie(n)), n
                }
                return e = o, i && Jt(e.prototype, i), n && Jt(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(X.p);

            function _e() {
                const t = new tt.L;
                t.components = {
                    "featured-reviews": () => Promise.all([i.e(72529), i.e(91642), i.e(23145)]).then(i.bind(i, 32190))
                }, t.template = '\n            <featured-reviews\n                :product-id="productId"\n                :category-id="categoryId"\n                :is-catalog="isCatalog"\n                :use-rpc="useRpc"\n            />\n        ', t.initialData = {
                    productId: se(this, pe),
                    categoryId: se(this, he),
                    isCatalog: se(this, fe),
                    useRpc: !0
                }, ce(this, ue, new tt.Z(t)), se(this, ue).append(this.node), se(this, fe) && le(this, ve, ye).call(this)
            }

            function ye() {
                const t = (window.innerWidth - document.body.getBoundingClientRect().width) / 2;
                this.node.style.marginLeft = `calc(50% - 50vw + ${t}px)`, this.node.style.marginRight = `calc(50% - 50vw + ${t}px)`
            }

            function be(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function we(t, e) {
                return we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, we(t, e)
            }

            function Pe(t) {
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
                    var i, n = ke(t);
                    if (e) {
                        var r = ke(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return Ce(this, i)
                }
            }

            function Ce(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Te(t)
            }

            function Te(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function ke(t) {
                return ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, ke(t)
            }

            function Se(t, e, i) {
                Ee(t, e), e.set(t, i)
            }

            function Ee(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function Oe(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, Ne(t, e, "get"))
            }

            function Ie(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Ne(t, e, "set"), i), i
            }

            function Ne(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Re = new WeakMap,
                De = new WeakMap,
                xe = new WeakMap,
                Ae = new WeakSet;
            let Le = function(t) {
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
                    }), e && we(t, e)
                }(o, t);
                var e, i, n, r = Pe(o);

                function o(t) {
                    var e, i, n;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), e = r.call(this), Ee(i = Te(e), n = Ae), n.add(i), Se(Te(e), Re, {
                            writable: !0,
                            value: {}
                        }), Se(Te(e), De, {
                            writable: !0,
                            value: !1
                        }), Se(Te(e), xe, {
                            writable: !0,
                            value: void 0
                        }), Ie(Te(e), Re, t.productSpecs), Ie(Te(e), De, t.product.shouldShowFileGuidelineTab()), e.node = (0, s._)("div"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(Te(e), Ae, Be).call(Te(e)), e
                }
                return e = o, i && be(e.prototype, i), n && be(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(X.p);

            function Be() {
                const t = new tt.L;
                t.components = {
                    "product-specs": () => Promise.all([i.e(4473), i.e(27497), i.e(19990)]).then(i.bind(i, 65409))
                }, t.template = '<product-specs :specs="specs" :show-file-guidelines="showFileGuidelines"/>', t.initialData = {
                    specs: Oe(this, Re),
                    showFileGuidelines: Oe(this, De)
                }, Ie(this, xe, new tt.Z(t)), Oe(this, xe).append(this.node)
            }
            var Fe = i(66429),
                Ve = i(55874);

            function je(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function Ue(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function Me(t, e, i) {
                return e && Ue(t.prototype, e), i && Ue(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function ze(t, e) {
                return ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, ze(t, e)
            }

            function qe(t) {
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
                    var i, n = $e(t);
                    if (e) {
                        var r = $e(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return He(this, i)
                }
            }

            function He(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return We(t)
            }

            function We(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function $e(t) {
                return $e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, $e(t)
            }

            function Ge(t, e, i) {
                Ye(t, e), e.set(t, i)
            }

            function Ye(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function Ke(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, Qe(t, e, "get"))
            }

            function Ze(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Qe(t, e, "set"), i), i
            }

            function Qe(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Je = new WeakMap,
                Xe = new WeakMap,
                ti = new WeakSet;
            let ei = function(t) {
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
                    }), e && ze(t, e)
                }(i, t);
                var e = qe(i);

                function i(t) {
                    var n, r, o;
                    return je(this, i), n = e.call(this), Ye(r = We(n), o = ti), o.add(r), Ge(We(n), Je, {
                            writable: !0,
                            value: void 0
                        }), Ge(We(n), Xe, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div", "single-product-view__product-actions-mke"), Ze(We(n), Je, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(We(n), ti, ii).call(We(n)), n
                }
                return Me(i, [{
                    key: "destroy",
                    value: function() {
                        Ke(this, Xe).destroy(), Ze(this, Xe, null)
                    }
                }]), i
            }(X.p);
            async function ii() {
                const t = new tt.L;
                t.components = {
                    "product-actions": () => i.e(68235).then(i.bind(i, 69902))
                }, t.template = '\n            <product-actions\n                :is-product-video="isProductVideo"\n                :is-favorite-products-enabled="isFavoriteProductsEnabled"\n                :is-product-favorite="isProductFavorite"\n                @on-video-button-click="emitEvent(\'onVideoButtonClick\')"\n                @on-favorite-button-click="emitEvent(\'onFavoriteButtonClick\', $event)"\n            />\n        ', t.initialData = {
                    isProductVideo: Ke(this, Je).isProductVideo,
                    isFavoriteProductsEnabled: Ke(this, Je).isFavoriteProductsEnabled,
                    isProductFavorite: Ke(this, Je).isProductFavorite
                }, t.emitEvent = (t, e) => {
                    switch (t) {
                        case "onVideoButtonClick":
                            Ke(this, Je).onVideoButtonClick && Ke(this, Je).onVideoButtonClick();
                            break;
                        case "onFavoriteButtonClick":
                            Ke(this, Je).onFavoriteButtonClick && Ke(this, Je).onFavoriteButtonClick(), Ke(this, Xe).updateData({
                                isProductFavorite: e
                            })
                    }
                }, Ze(this, Xe, new tt.Z(t)), Ke(this, Xe).append(this.node)
            }
            let ni = Me((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                je(this, t), this.isProductVideo = e.isProductVideo || !1, this.isFavoriteProductsEnabled = e.isFavoriteProductsEnabled || !1, this.isProductFavorite = e.isProductFavorite || !1, this.onVideoButtonClick = e.onVideoButtonClick || void 0, this.onFavoriteButtonClick = e.onFavoriteButtonClick || void 0
            }));

            function ri(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function oi(t, e) {
                return oi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, oi(t, e)
            }

            function ai(t) {
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
                    var i, n = ci(t);
                    if (e) {
                        var r = ci(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return si(this, i)
                }
            }

            function si(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return li(t)
            }

            function li(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function ci(t) {
                return ci = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, ci(t)
            }

            function di(t, e, i) {
                ui(t, e), e.set(t, i)
            }

            function ui(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function pi(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, fi(t, e, "get"))
            }

            function hi(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, fi(t, e, "set"), i), i
            }

            function fi(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var gi = new WeakMap,
                vi = new WeakMap,
                mi = new WeakSet;
            let _i = function(t) {
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
                    }), e && oi(t, e)
                }(o, t);
                var e, i, n, r = ai(o);

                function o(t) {
                    var e, i, n;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), e = r.call(this), ui(i = li(e), n = mi), n.add(i), di(li(e), gi, {
                            writable: !0,
                            value: 0
                        }), di(li(e), vi, {
                            writable: !0,
                            value: void 0
                        }), hi(li(e), gi, t), e.node = (0, s._)("div"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(li(e), mi, yi).call(li(e)), e
                }
                return e = o, i && ri(e.prototype, i), n && ri(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(X.p);

            function yi() {
                const t = new tt.L;
                t.components = {
                    "mockup-showcase-slider": () => i.e(98460).then(i.bind(i, 75004))
                }, t.template = '<mockup-showcase-slider :productId="productId"/>', t.initialData = {
                    productId: pi(this, gi)
                }, hi(this, vi, new tt.Z(t)), pi(this, vi).append(this.node)
            }

            function bi(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function wi(t, e) {
                return wi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, wi(t, e)
            }

            function Pi(t) {
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
                    var i, n = ki(t);
                    if (e) {
                        var r = ki(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return Ci(this, i)
                }
            }

            function Ci(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Ti(t)
            }

            function Ti(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function ki(t) {
                return ki = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, ki(t)
            }

            function Si(t, e, i) {
                Ei(t, e), e.set(t, i)
            }

            function Ei(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function Oi(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, Ni(t, e, "get"))
            }

            function Ii(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Ni(t, e, "set"), i), i
            }

            function Ni(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Ri = new WeakMap,
                Di = new WeakMap,
                xi = new WeakSet;
            let Ai = function(t) {
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
                    }), e && wi(t, e)
                }(o, t);
                var e, i, n, r = Pi(o);

                function o(t) {
                    var e, i, n;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), e = r.call(this), Ei(i = Ti(e), n = xi), n.add(i), Si(Ti(e), Ri, {
                            writable: !0,
                            value: {}
                        }), Si(Ti(e), Di, {
                            writable: !0,
                            value: void 0
                        }), Ii(Ti(e), Ri, t), e.node = (0, s._)("div"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(Ti(e), xi, Li).call(Ti(e)), e
                }
                return e = o, i && bi(e.prototype, i), n && bi(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(X.p);

            function Li() {
                const t = new tt.L;
                t.components = {
                    "corresponding-product": () => i.e(13510).then(i.bind(i, 36511))
                }, t.template = '<corresponding-product\n                            :corresponding-product="correspondingProduct" \n                        />', t.initialData = {
                    correspondingProduct: {
                        ...Oi(this, Ri).correspondingProduct
                    }
                }, Ii(this, Di, new tt.Z(t)), Oi(this, Di).append(this.node)
            }
            const Bi = Class({
                productData: null,
                _tabs: null,
                _isProductVideo: null,
                _isFavoriteProductsEnabled: null,
                __construct: function(t) {
                    J.j8(PFShoppingCart.EVENT_PREPARE_CART), J.on(PFShoppingCart.EVENT_CART_CREATED, (() => J.j8(PFShoppingCart.EVENT_PREPARE_CART))), this.productData = t, this.node = tag("div"), (new r.m).saveRecentlyViewedProduct(this.productData.product.productId)
                },
                init: async function() {
                    this._isFavoriteProductsEnabled = await j.i.isFavoriteProductsEnabled(), this.render()
                },
                render: function() {
                    var t;
                    s.U.clearNode(this.node), this.productInfo = new Qt.DY(this.productData, this.onVariantChanged, this.onTechniqueChanged), this.productMedia = new Zt(this.productData), null !== (t = this.productData.correspondingProduct) && void 0 !== t && t.productImage && (this.additionalProductInfo = new Ai({
                        correspondingProduct: this.productData.correspondingProduct
                    })), this.productMedia.setVariantImage(this.productData.activeVariant, {
                        outlineColor: this.productInfo.getOutlineColor()
                    });
                    const e = this.productMedia.gallery.getYoutubeVideoLink();
                    this._isProductVideo = !(null == e || !e.videoLink);
                    let i = null;
                    this.productData.sellingRegionSettings && (i = new Ve.k6(this.productData.sellingRegionSettings));
                    const n = new ni;
                    n.isProductVideo = this._isProductVideo, n.isFavoriteProductsEnabled = this._isFavoriteProductsEnabled, n.isProductFavorite = this.productData.isFavorite, n.onFavoriteButtonClick = this.productInfo.openFavoritesLink, n.onVideoButtonClick = this._isProductVideo ? this.productMedia.gallery._onVideoClick.bind(this, null == e ? void 0 : e.videoLink) : null;
                    const r = new ei(n),
                        o = PF.Customer.isLogged() && !PF.Customer.isB2c();
                    tag("div", "", [tag("div", "container", [tag("div", "row", [tag("div", "col-xl-10 offset-xl-1", [tag("div", "row", [tag("div", "col-md-6 col-lg-7 col-xl-6", [this.productMedia]), this._isProductVideo || this._isFavoriteProductsEnabled ? tag("div", "pf-d-sm-none pf-mt-16", [r]) : "", tag("div", "col-md-6 col-lg-5 col-xl-6 pf-mt-32 pf-mt-md-0 pf-mb-24", [this.productInfo, this.productData.correspondingProduct && this.additionalProductInfo ? this.additionalProductInfo : ""])])])])]), Object.keys(this.productData.productSpecs).length ? new Le(this.productData) : new Rt(this.productData, this.onOpenTemplatesTab), o ? new _i(this.productData.product.productId) : "", tag("div", "container", [this._tabs = new It(this.productData, this.productInfo, this.onVariantChanged)]), tag("hr", "pf-my-0 pf-border-light"), this.productData.isFeaturedReviews ? new me(this.productData.product.productId, null, !1) : "", tag("div", "container pf-ui-body pf-mb-48 pf-mt-48", [tag("div", {
                        className: "row",
                        id: "reviews"
                    }, [new Fe.Z({
                        productData: this.productData.product
                    }).render()])]), tag("div", "container", [tag("div", "row", [tag("div", "col-sm-12", [new O(O.TYPE_SIMILAR, this.productData.similarProducts, i)])])])]).append(this.node), window.addEventListener("beforeunload", (function() {
                        const t = (0, _.G)(_.w9);
                        if (!t || !t.activeCategoryId || !t.activePage) return !1;
                        t.backFromProduct = !0, (0, _.t_)(_.w9, t)
                    }), !1)
                },
                setActiveTab: function(t, e) {
                    this._tabs.isTabEventDispatching = e, this._tabs.setActive(t)
                },
                onOpenTemplatesTab: function() {
                    this._tabs.setActive("guidelines"), $("html, body").animate({
                        scrollTop: $(this._tabs.node).offset().top
                    }, 1e3)
                },
                onVariantChanged(t, e) {
                    J.j8(J.O2, null == t ? void 0 : t.variantId), this.productData.activeVariant = t, this.productMedia && this.productMedia.setVariantImage(t, {
                        outlineColor: e
                    })
                },
                onTechniqueChanged: function(t) {
                    J.j8(J.rL, t)
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogProduct = Bi);
            const Fi = Class({
                categoryId: null,
                actionBefore: null,
                forMockupGenerator: !1,
                forProductPush: !1,
                forOrderFlow: !1,
                forProductTemplate: !1,
                storeId: null,
                productTotalCount: null,
                matchSellingRegion: !1,
                doesNotMatchSellingRegion: !1,
                allowedType: null,
                requiredPlacements: []
            });
            window && ((globalThis || {}).PFProductsCatalogItemsGetProductParams = Fi);
            const Vi = Class({
                bannerId: 0,
                gaEventId: "",
                buttonText: "",
                imgSrc: "",
                imgSrcMobile: "",
                url: "",
                title: "",
                columns: [],
                campaignName: ""
            });
            window && ((globalThis || {}).PFProductsCatalogComponentsProductsBannerPar = Vi);
            const ji = Class({
                __construct: function(t) {
                    this._par = t, this.node = tag("a", {
                        className: "pf-px-16 pf-mb-sm-24 bubble pf-pt-2",
                        onclick: this._onBannerClicked.bind(this)
                    }, [tag("div", "pf-product-banner-block pf-border pf-rounded pf-hover-shadow", [tag("picture", "pf-product-banner-block__item", [tag("source", {
                        attr: {
                            srcset: this._par.imgSrc,
                            media: "(min-width: 767px)"
                        }
                    }), tag("source", {
                        attr: {
                            srcset: this._par.imgSrcMobile
                        }
                    }), tag("img", {
                        src: this._par.imgSrc
                    })]), tag("div", this._getColumns() + " pf-p-16 pf-p-lg-24 pf-product-banner-block__info", [tag("h2", "pf-h3 pf-m-0", this._par.title), this._par.buttonText ? tag("a", "pf-mt-16 pf-btn pf-btn-primary", this._par.buttonText) : ""])])]), this._sendImpressionEvent()
                },
                _getColumns: function() {
                    return this._par.columns.join(" ")
                },
                _onBannerClicked: function() {
                    location.href = this._par.url, ga("send", "event", "Banner Clicks", "PnP Banner", this._par.gaEventId + " clicked"), (0, b.nS)(b.fc, this._par.title, this._par.bannerId, b.uJ, this._par.campaignName, this._par.gaEventId)
                },
                _sendImpressionEvent() {
                    (0, b.Re)(b.fc, this._par.title, this._par.bannerId, this._par.campaignName, this._par.gaEventId)
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogComponentsProductsBanner = ji);
            var Ui = i(28053),
                Mi = i(90675),
                zi = i(40245),
                qi = i(27815),
                Hi = i(57998),
                Wi = i(58334),
                $i = i(4473),
                Gi = i(34638),
                Yi = i.n(Gi),
                Ki = i(2864),
                Zi = i.n(Ki),
                Qi = i(73042),
                Ji = i(51747),
                Xi = i(52307),
                tn = i(136);

            function en(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function nn(t, e) {
                return nn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, nn(t, e)
            }

            function rn(t) {
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
                    var i, n = sn(t);
                    if (e) {
                        var r = sn(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return on(this, i)
                }
            }

            function on(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return an(t)
            }

            function an(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function sn(t) {
                return sn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, sn(t)
            }

            function ln(t, e, i) {
                cn(t, e), e.set(t, i)
            }

            function cn(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function dn(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, pn(t, e, "get"))
            }

            function un(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, pn(t, e, "set"), i), i
            }

            function pn(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var hn = new WeakMap,
                fn = new WeakMap,
                gn = new WeakMap,
                vn = new WeakSet;
            let mn = function(t) {
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
                    }), e && nn(t, e)
                }(o, t);
                var e, i, n, r = rn(o);

                function o(t, e) {
                    var i, n, a;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), i = r.call(this), cn(n = an(i), a = vn), a.add(n), ln(an(i), hn, {
                            writable: !0,
                            value: void 0
                        }), ln(an(i), fn, {
                            writable: !0,
                            value: void 0
                        }), ln(an(i), gn, {
                            writable: !0,
                            value: void 0
                        }), i.node = (0, s._)("div", "col-6 col-md-4 col-xl-3 pf-mb-16 pf-mb-md-24 pf-mb-lg-32 order-4 order-md-6 order-xl-8"), un(an(i), hn, t), un(an(i), fn, e),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(an(i), vn, _n).call(an(i)), i
                }
                return e = o, (i = [{
                    key: "destroy",
                    value: function() {
                        var t;
                        null === (t = dn(this, gn)) || void 0 === t || t.destroy(), un(this, gn, null)
                    }
                }]) && en(e.prototype, i), n && en(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), o
            }(X.p);

            function _n() {
                const t = new tt.L;
                return t.components = {
                    "catalog-products-p-f-challenge": () => Promise.all([i.e(72529), i.e(15248), i.e(69689), i.e(12356)]).then(i.bind(i, 74664))
                }, t.template = '<catalog-products-p-f-challenge :challenge="challenge" :old-catalog="true" :flow-type="flowType"/>', t.initialData = {
                    challenge: dn(this, hn),
                    flowType: dn(this, fn)
                }, t.existingNode = this.node, new tt.Z(t)
            }

            function yn(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function bn(t, e) {
                return bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, bn(t, e)
            }

            function wn(t) {
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
                    var i, n = Tn(t);
                    if (e) {
                        var r = Tn(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return Pn(this, i)
                }
            }

            function Pn(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Cn(t)
            }

            function Cn(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Tn(t) {
                return Tn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Tn(t)
            }

            function kn(t, e, i) {
                Sn(t, e), e.set(t, i)
            }

            function Sn(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function En(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, In(t, e, "get"))
            }

            function On(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, In(t, e, "set"), i), i
            }

            function In(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Nn = new WeakMap,
                Rn = new WeakMap,
                Dn = new WeakSet;
            let xn = function(t) {
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
                    }), e && bn(t, e)
                }(o, t);
                var e, i, n, r = wn(o);

                function o(t) {
                    var e, i, n, a;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), i = r.call(this), Sn(n = Cn(i), a = Dn), a.add(n), kn(Cn(i), Nn, {
                        writable: !0,
                        value: void 0
                    }), kn(Cn(i), Rn, {
                        writable: !0,
                        value: void 0
                    }), On(Cn(i), Nn, t);
                    const l = null !== (e = En(Cn(i), Nn).className) && void 0 !== e ? e : "col-6 col-md-4 col-xl-3 pf-mb-16 pf-mb-md-24 pf-mb-lg-32 order-1";
                    return i.node = (0, s._)("div", l),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(Cn(i), Dn, An).call(Cn(i)), i
                }
                return e = o, (i = [{
                    key: "destroy",
                    value: function() {
                        var t;
                        null === (t = En(this, Rn)) || void 0 === t || t.destroy(), On(this, Rn, null)
                    }
                }]) && yn(e.prototype, i), n && yn(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), o
            }(X.p);

            function An() {
                const t = new tt.L;
                return t.components = {
                    "catalog-products-suggested-card": () => Promise.all([i.e(72529), i.e(45353)]).then(i.bind(i, 72493))
                }, t.template = '\n            <catalog-products-suggested-card \n                :products="products" \n                :flow-type="flowType" \n                :on-click-callback="onClickCallback"\n            />\n        ', t.initialData = {
                    products: En(this, Nn).products,
                    flowType: En(this, Nn).flowType,
                    onClickCallback: En(this, Nn).onClickCallback
                }, t.existingNode = this.node, new tt.Z(t)
            }
            const Ln = Class({
                id: "models",
                filters: null,
                _searchKeywords: "",
                _products: null,
                _filters: null,
                _warningTexts: null,
                _category: null,
                page: 1,
                productsPerPage: 24,
                url: new F.R,
                showFulfillmentCountries: !0,
                isTabAlwaysVisible: !0,
                sortMethods: Ui.C,
                _totalProductCount: 0,
                _maxCountPerPage: 0,
                _minCountPerPage: 0,
                isSampleOrder: !1,
                activeStoreId: null,
                _suggestedProducts: null,
                _canUserAccessChallengeCard: !1,
                __construct: function() {
                    this._searchKeywords = this.url.query.search || "", this.page = this.url.query.page ? parseInt(this.url.query.page) : 1, this.node = tag("div", "", [this._filtersNode = tag("div", "", [tag("div", "row pf-mt-16 hidden-xs", [this._beforeFilterNode = tag("div", "pf-d-flex pf-align-items-center col-xs-12 col-sm-8", [this._resultsPerPageNode = tag("span"), this._nodeClearFilters = tag("a", {
                        className: "pf-link pf-d-none pf-ml-24",
                        onclick: this._clearFilters.bind(this)
                    }, dlang("products", "Clear filters"))]), this._productFilterNode = tag("div", "col-sm-4", [this._productFilterDropdown = tag("div")])]), tag("div", "row pf-mt-16 hidden-sm hidden-md hidden-lg products-pricing", [this._nodeMobileFilters = tag("div", "products-pricing__mobile-filters " + ((0, zi.Vu)() ? "touch" : ""), [tag("div", {
                        className: "products-pricing__mobile-filters__filter pf-px-16 pf-py-8 pull-left",
                        prop: {
                            onclick: this._onMobileFilter
                        }
                    }, [tag("div", "pf-text-muted small", [lang("Filter by")]), this._nodeMobileFilterTitle = tag("div", "bold")]), this._mobileSortDropdown = tag("div"), tag("div", "col-6 pf-mt-16 pf-px-8 pull-right", [this._nodeMobileClearFilters = tag("a", {
                        className: "catalog__sidebar-filter__clear pf-link pf-d-none pull-right",
                        onclick: this._clearFilters.bind(this)
                    }, dlang("products", "Clear filters"))]), tag("div", "col-12 pf-mt-16 pf-px-8 pull-left", [this._mobileResultsPerPageNode = tag("div")]), tag("div", "clearfix")])])]), this._nodeWarning = tag("div"), this._productsNode = tag("div", "clearfix catalog__products-list"), this._nodeFooter = tag("div")]), j.i.isFavoriteProductsEnabled().then((t => {
                        t && (this._favoritesNode = tag("div", {
                            className: "products-pricing__mobile-filters touch " + (a.k.isWindowSmallerThan(a.k.XS) ? "pf-border-top" : "")
                        }, [tag("div", {
                            onclick: this.openFavoritesLink.bind(this),
                            className: "pf-pb-xs-16 pf-pt-xs-0 pf-px-16 pf-py-16 pf-bold",
                            text: lang("My favorites"),
                            href: "javascript:;"
                        }, [tag("i", "pf-i pf-i-heart pf-i-18 pf-text-muted pull-right")])]), this._nodeMobileFilters.parentNode.insertBefore(this._favoritesNode, this._nodeMobileFilters), window.addEventListener("resize", v().debounce(this._changeFavoritesNodeBorder.bind(this), 100)))
                    }))
                },
                render: function(t) {
                    var e, i, n;
                    if (null != t && t.activeStoreId && (this.activeStoreId = t.activeStoreId), null != t && t.category && (this._category = t.category), (null == t || null === (e = t.category) || void 0 === e ? void 0 : e.id) !== _.wo || c.dB.CAN_ACCESS_FAST_DELIVERY_CATEGORY || (t.products = [], t.totalProductCount = 0, s.U.clearNode(this._productFilterDropdown)), t && t.products && (this._products = t.products, this._filters = t.filters, this._renderSortOptions()), f.V.suggestedProducts.length) {
                        var r;
                        const t = null === (r = f.V.suggestedProducts) || void 0 === r ? void 0 : r.find((t => {
                            var e;
                            let {
                                categoryId: i
                            } = t;
                            return i === (null === (e = this._category) || void 0 === e ? void 0 : e.id)
                        }));
                        this._suggestedProducts = null == t ? void 0 : t.products
                    }
                    t && null !== t.keywords && (this._searchKeywords = t.keywords), t && void 0 !== t.showFulfillmentCountries && (this.showFulfillmentCountries = t.showFulfillmentCountries), null != t && t.isFilterOutside && this._renderFilterOutside(), t && t.page && (this.page = t.page), t && t.categoryTexts && (this._warningTexts = t.categoryTexts), this.renderSortDropdown();
                    const o = this._productDropdown.getActiveValue(),
                        a = null === (i = this._products) || void 0 === i ? void 0 : i.filter(this._isProductMatchingKeywords).sort(this.sortProducts.bind(this, o));
                    if (t && t.totalProductCount) {
                        const e = Object.values(t.filters).some((t => t.length));
                        this._totalProductCount = e ? a.length : t.totalProductCount, this._renderResultsPerPage()
                    }
                    var l, d;
                    null != t && t.skipProductsRendering || (this._canUserAccessChallengeCard = (null === (l = this._category) || void 0 === l ? void 0 : l.id) !== _.wo && (null === (d = this._products) || void 0 === d ? void 0 : d.length) && !(null === f.V || void 0 === f.V || !f.V.challenge), this.renderProducts(a), this.renderPaginator());
                    return null !== (n = this._warningTexts) && void 0 !== n && n.shouldRender && this._renderWarning(), this._renderFilterTitles(), this._onFilter(), this
                },
                renderSortDropdown() {
                    s.U.clearNode(this._productFilterDropdown), this._productDropdown = new Ji.$E(new Ji.GD({
                        onChanged: this.sortProductsByCategory.bind(this),
                        products: this._products,
                        productCategory: this._category
                    })).append(this._productFilterDropdown)
                },
                _renderFilterTitles: function() {
                    var t = "";
                    this._filters && (t = Object.values(this._filters).filter((function(t) {
                        return t && t.length > 0
                    })).join(", ")), t || (t = lang("No filters")), s.U.setNodeText(this._nodeMobileFilterTitle, t)
                },
                getProductFilterDropdown() {
                    return this._productFilterDropdown
                },
                sortProducts: function(t, e, i) {
                    return this.sortMethods[t](e, i)
                },
                sortProductsByCategory(t) {
                    var e;
                    const i = null === (e = this._products) || void 0 === e ? void 0 : e.filter(this._isProductMatchingKeywords).sort(this.sortProducts.bind(this, t));
                    this.renderProducts(i), this.renderPaginator()
                },
                getDsrChangeTooltip() {
                    if (!f.V.sellingRegion || f.V.isDSRSettingLocked) return [];
                    let t = "";
                    t = PF.Customer.isLogged() && !PF.Customer.isB2c() ? dlang("products", "You can change the Global default selling preferences {linkStart}here{linkEnd}") : dlang("products", "You can change the Default catalog and delivery preferences {linkStart}here{linkEnd}");
                    const e = tag("i", {
                        className: "pf-i pf-pointer pf-i-information pf-i-24 pf-text-gray pf-ml-4",
                        style: {
                            marginTop: "-2px",
                            outline: "none"
                        },
                        attr: {
                            tabindex: 0,
                            title: t.replace("{linkStart}", '<a href="javascript:" class="pf-link-white pf-pointer dsr-settings-tooltip-link">').replace("{linkEnd}", "</a>"),
                            "data-toggle": "tooltip",
                            "data-trigger": "hover focus",
                            "data-delay": '{"hide": 2000}',
                            "data-html": !0
                        }
                    });
                    return $(e).tooltip(), $(e).on("shown.bs.tooltip", (() => {
                        document.querySelector(".dsr-settings-tooltip-link").addEventListener("click", (() => {
                            (0, h.l3)(this.activeStoreId)
                        })), document.querySelector(".dsr-settings-tooltip-link").addEventListener("keydown", (t => {
                            "Enter" !== t.key && "Spacebar" !== t.key && " " !== t.key || (t.preventDefault(), (0, h.l3)(this.activeStoreId, t))
                        }))
                    })), e
                },
                renderProducts: function(t) {
                    var e, i;
                    s.U.clearNode(this._productsNode);
                    let n = tag("div", "alert alert-warning text-center", [dlang("products", "Sorry, couldn't find any products")]);
                    (null === (e = this._category) || void 0 === e ? void 0 : e.id) === _.wo && (n = tag("div", "pf-banner pf-banner-gray", [tag("div", "pf-bold pf-h5 pf-m-0 pf-d-inline-block", [(0, _.YL)(), this.getDsrChangeTooltip()])]));
                    const r = null == t ? void 0 : t.filter(this._limitProducts);
                    let o = tag("div", "row row-flex pf-mt-16", [(null == r ? void 0 : r.length) < 1 ? tag("div", "col-12", [n]) : ""]);
                    if (0 === (null == r ? void 0 : r.length) && (null === (i = this._category) || void 0 === i ? void 0 : i.id) === V.p.ID_FAKE_FAVORITES) o = tag("div", "pf-d-flex pf-align-items-center pf-flex-column pf-align-items-center pf-justify-content-center", [tag("img", {
                        className: "favorites-image",
                        src: Zi()
                    }), tag("div", "pf-pt-40 pf-mb-16 pf-mb-md-24 pf-mb-lg-32", dlang("products", "Pick your favorite products and weâ€™ll list them here"))]);
                    else {
                        if (this._suggestedProducts && r.length && 1 === this.page) {
                            const t = c.dB.getCatalogTypeName(),
                                e = this._suggestedProducts.map((t => {
                                    const e = $i.W.fromArray(t);
                                    return e.dataLayerSource = S.CUSTOMER_EVENT_SOURCE_CROSS_SELL_PRODUCT_CARD, e
                                }));
                            new xn({
                                products: e,
                                flowType: t,
                                onClickCallback: this._onClickProduct
                            }).append(o)
                        }
                        this._canUserAccessChallengeCard && 1 === this.page && new mn(f.V.challenge, c.dB.getCatalogTypeName()).append(o);
                        const t = this._suggestedProducts ? 2 : 1;
                        for (const e in r) {
                            this._getProductListItem(r[e], t + parseInt(e)).append(o)
                        }
                    }
                    o.append(this._productsNode)
                },
                _getProductListItem: function(t, e) {
                    var i, n;
                    if (!t) return tag("div");
                    var r = null,
                        o = t;
                    return t instanceof Wi.O && (r = t, o = t.getCachedProduct()), new u.E({
                        product: o,
                        variant: r,
                        className: "col-6 col-md-4 col-xl-3 pf-mb-0",
                        showSizes: !o.isEmbroidery() || o.isApparelEmbroidery(),
                        showFulfillmentCountries: this.showFulfillmentCountries,
                        isUnavailable: this._isUnavailable(o),
                        url: c.dB.isGenerator() ? o.getMockupGeneratorUrl() : o.catalogPageUrl,
                        callback: this._onClickProduct.bind(this, o, r),
                        technique: this._getCategoryTechnique(o),
                        isSampleOrderContext: this._isSampleOrderFlow(),
                        isModal: c.dB.isOrderFlow() || c.dB.isProductPush(),
                        disableEdt: Boolean(null === (i = this._category) || void 0 === i || null === (n = i.settings) || void 0 === n ? void 0 : n.productsRegion),
                        customStyle: {
                            order: e
                        }
                    })
                },
                _getCategoryTechnique: function(t) {
                    var e = this._getFirstTechnique(t);
                    return this._category && this._category.isEmbroideryShirts() && t.hasTechnique(Nt.V_) ? Nt.V_ : e
                },
                _onClickProduct: function(t, e, i, n) {
                    var r, o;
                    if (n && n.preventDefault(), this._isUnavailable(t)) return;
                    const a = null === I.Q || void 0 === I.Q || null === (r = I.Q.instance) || void 0 === r ? void 0 : r.state,
                        s = (new Xi.M).getById(null == t ? void 0 : t.mainCatalogCategoryId);
                    a.category = null != s ? s : a.category, N.l.createAndDispatch(c.dB.EVENT_PRODUCT_CHOOSE, {
                        skipHistory: c.CQ.catalogType === c.dB.TYPE_MG,
                        scrollToTop: c.dB.isProductsPricing(),
                        activeProductId: t.productId,
                        activeVariantId: e ? e.variantId : null,
                        category: null == a ? void 0 : a.category,
                        dataLayerSource: null !== (o = null == t ? void 0 : t.dataLayerSource) && void 0 !== o ? o : null
                    })
                },
                _getFirstTechnique: function(t) {
                    var e = this._filters.availableTechniques;
                    return null != e && e.length ? e[0] : t.type
                },
                _isProductMatchingKeywords: function(t) {
                    if (!this._searchKeywords) return !0;
                    var e = this._searchKeywords.toLowerCase().split(" "),
                        i = 0,
                        n = t.colors ? t.colors.map((function(t) {
                            return t.colorName
                        })).join(" ") : t.color,
                        r = t.sizes ? t.sizes.join(" ") : t.size;
                    for (var o in e) {
                        var a = t.model && t.model.toLowerCase().indexOf(e[o]) > -1,
                            s = t.brand && t.brand.toLowerCase().indexOf(e[o]) > -1,
                            l = t.title && t.title.toLowerCase().indexOf(e[o]) > -1,
                            c = t.name && t.name.toLowerCase().indexOf(e[o]) > -1,
                            d = r && r.replace(/Ã—/g, "x").toLowerCase().indexOf(e[o]) > -1,
                            u = n && n.toLowerCase().indexOf(e[o]) > -1;
                        (a || s || l || c || d || u) && i++
                    }
                    return i === e.length
                },
                _renderSortOptions: function() {
                    s.U.clearNode(this._mobileSortDropdown), new Ji.$E(new Ji.GD({
                        onChanged: this.sortProductsByCategory.bind(this),
                        products: this._products,
                        productCategory: this._category,
                        isMobile: !0
                    })).append(this._mobileSortDropdown)
                },
                _renderResultsPerPage: function() {
                    var t, e;
                    if (null !== (t = this._category) && void 0 !== t && null !== (e = t.settings) && void 0 !== e && e.productsRegion) return "";
                    this._minCountPerPage = this.page * this.productsPerPage - (this.productsPerPage - 1), this._maxCountPerPage = Math.min(this._minCountPerPage + this.productsPerPage - 1, this._totalProductCount), s.U.clearNode(this._resultsPerPageNode), s.U.clearNode(this._mobileResultsPerPageNode);
                    let i = tag("span");
                    const n = f.V.sellingRegion;
                    if (n) {
                        const t = PF.Customer.isLogged() && !PF.Customer.isB2c(),
                            e = tag("span", "pf-ui-body");
                        let r = dlang("products", "Showing {total} results that deliver to {icon} {region} and match your current delivery preferences");
                        t && (r = dlang("products", "Showing {total} results that deliver to {icon} {region} and match your current selling preferences")), n.isWorldwide() && (r = dlang("products", "Showing full product catalog for {icon} {region} delivery")), e.innerHTML = r.replace("{total}", this._totalProductCount.toString()).replace("{region}", n.getName()).replace("{icon}", tag("img", {
                            src: n.getIcon(),
                            style: {
                                width: "24px",
                                marginTop: "-4px"
                            },
                            attr: {
                                "aria-hidden": !0
                            }
                        }).outerHTML);
                        const o = [e, this.getDsrChangeTooltip()];
                        i = tag("div", "", o)
                    } else i = tag("span", "", dlang("products", "{minPerPage} - {perPage} of {total} results").replace("{minPerPage}", this._minCountPerPage.toString()).replace("{perPage}", this._maxCountPerPage.toString()).replace("{total}", this._totalProductCount.toString()));
                    this._addResultsPerPageNode(i), window.addEventListener("resize", v().debounce((() => this._addResultsPerPageNode(i)), 100))
                },
                _addResultsPerPageNode(t) {
                    const e = a.k.isWindowSmallerThan(a.k.SIZES.SM) ? this._mobileResultsPerPageNode : this._resultsPerPageNode;
                    e.hasChildNodes() || e.appendChild(t)
                },
                _clearFilters: function() {
                    this.filters && this.filters.clearAll()
                },
                _onFilter: function() {
                    this.filters && this.filters._filters && (this.filters._filters.getAllSelectedValues().length ? (s.U.removeClassName(this._nodeClearFilters, "pf-d-none"), s.U.removeClassName(this._nodeMobileClearFilters, "pf-d-none")) : (s.U.addClassName(this._nodeClearFilters, "pf-d-none"), s.U.addClassName(this._nodeMobileClearFilters, "pf-d-none")))
                },
                _renderFilterOutside() {
                    s.U.removeClassName(this._beforeFilterNode, "col-sm-8"), s.U.addClassName(this._productFilterNode, "pf-d-none")
                },
                _getSortingOptions: function(t, e, i, n, r) {
                    var o = {
                        [tn.Z1]: dlang("products", "Most popular"),
                        [tn.ei]: dlang("products", "Fastest delivery"),
                        [tn.ty]: dlang("products", "New"),
                        [tn.Jd]: dlang("products", "Highest rated"),
                        [tn.Id]: [dlang("products", "Price"), {
                            [tn.An]: dlang("products", "Low - High"),
                            [tn.MD]: dlang("products", "High - Low")
                        }],
                        [tn.I_]: [dlang("products", "Date saved as favorite"), {
                            [tn.iv]: dlang("products", "Newest - Oldest"),
                            [tn.uZ]: dlang("products", "Oldest - Newest")
                        }]
                    };
                    const a = f.V.sellingRegion || PF.Customer.sellingRegionSetting;
                    if (a && null != a && a.isSingleCountry() || delete o[tn.ei], t) {
                        var s = [];
                        for (var l in t) {
                            var c = t[l];
                            c instanceof Wi.O && !c.suggestedProductText && (c = c.getCachedProduct()), s.push(c)
                        }(t = s || t).some((function(t) {
                            if (t.hasOwnProperty("isNew")) return t.isNew
                        })) || delete o[tn.ty];
                        t.every((t => t.hasOwnProperty("isFavorite") ? t.isFavorite : null)) || delete o[tn.I_], t.some((function(t) {
                            if (t.hasOwnProperty("reviewRating")) return t.reviewRating.reviewCount > 0
                        })) || delete o[tn.Jd], t.some((function(t) {
                            if (t.hasOwnProperty("isPopular")) return t.isPopular
                        })) || delete o[tn.Z1]
                    }
                    return this._getSortingOptionsDOM(o, i, n, r)
                },
                _getSortingOptionsDOM: function(t, e, i, n) {
                    if (e) {
                        var r = [];
                        for (var o in t) {
                            if ("string" == typeof(p = t[o])) r.push(tag("option", {
                                value: o,
                                prop: {
                                    selected: o === n
                                }
                            }, [p]));
                            else {
                                var a = [],
                                    s = p[0],
                                    l = p[1];
                                for (var c in l) {
                                    var d = l[c];
                                    a.push(tag("option", {
                                        value: c,
                                        prop: {
                                            selected: c === n
                                        }
                                    }, [d]))
                                }
                                r.push(tag("optgroup", {
                                    attr: {
                                        label: s
                                    }
                                }, [a]))
                            }
                        }
                        return r
                    }
                    if (i) {
                        var u = [];
                        for (var o in t) {
                            var p;
                            if ("string" == typeof(p = t[o])) u.push(tag("li", {
                                className: "pf-p-12 pf-ui-body",
                                value: o,
                                onclick: this._changeMobileSort.bind(this, {
                                    target: {
                                        value: o
                                    }
                                })
                            }, [p]));
                            else {
                                var h = [];
                                s = p[0], l = p[1];
                                for (var c in h.push(tag("li", "pf-px-8 pf-py-4 pf-ui-body pf-bold", [s])), l) {
                                    d = l[c];
                                    h.push(tag("li", {
                                        className: "pf-p-12 pf-pl-16 pf-ui-body",
                                        value: c,
                                        onclick: this._changeMobileSort.bind(this, {
                                            target: {
                                                value: c
                                            }
                                        })
                                    }, [d]))
                                }
                                u.push(tag("ul", "pf-p-0", [h]))
                            }
                        }
                        return u
                    }
                    return t
                },
                _isUnavailable: function(t) {
                    return t.isDisabledInPush && (c.dB.isProductPush() || c.dB.isGenerator()) && !(t.hasBetaAccess && c.dB.isGenerator())
                },
                _isSampleOrderFlow: function() {
                    return c.dB.isOrderFlow() && (this.order = Qi.m.getActiveInstance(), this.isSampleOrder = this.order.isSampleOrder), this.isSampleOrder
                },
                _onSearch: function() {
                    N.l.createAndDispatch(c.dB.EVENT_PRODUCTS_FILTER, {
                        productSearchKeywords: this._searchBox.getValue(),
                        productsOrVariants: this._products
                    })
                },
                _limitProducts: function(t, e) {
                    const i = [this._canUserAccessChallengeCard, !!this._suggestedProducts].filter((t => t)).length,
                        n = this.page * this.productsPerPage - i;
                    let r = (this.page - 1) * this.productsPerPage;
                    return 1 !== this.page && i && (r -= i), e >= r && e < n
                },
                _onPaginate: function(t) {
                    this.page = t, N.l.createAndDispatch(c.dB.EVENT_PRODUCTS_FILTER, {
                        productsViewPage: this.page,
                        productsOrVariants: this._products
                    }), this._renderResultsPerPage()
                },
                _changeMobileSort: function(t) {
                    this._sortBox.value = t.target.value, this.sortProductsByCategory(this._sortBox.value), this._renderFilterTitles()
                },
                _onMobileFilter: function(t) {
                    t.preventDefault(), $("html, body").css("overflow", "pf-d-none"), $(document).find(".catalog__sidebar-floating").closest(".modal").scrollTop(0).css("overflow-y", "pf-d-none"), $(document).find(".catalog__sidebar-floating").addClass("open")
                },
                _renderWarning: function() {
                    c.CQ.catalogType !== c.dB.TYPE_MG && (s.U.clearNode(this._nodeWarning), tag("div", "pf-pb-8 pf-pt-24", [new p.L({
                        id: "product-selector-banner",
                        type: "gray",
                        heading: this._warningTexts.heading,
                        content: this._warningTexts.content,
                        linkText: this._warningTexts.linkText,
                        icon: Yi(),
                        closable: !0,
                        onLinkClick: () => {
                            window.open(langUrl("/covid-19"), "_blank")
                        }
                    })]).append(this._nodeWarning))
                },
                openFavoritesLink: function() {
                    N.l.createAndDispatch(c.dB.EVENT_NAME, {
                        category: V.p.getTemporaryFavoritesCategory()
                    })
                },
                _changeFavoritesNodeBorder: function() {
                    this._favoritesNode.className = "products-pricing__mobile-filters touch " + (a.k.isWindowSmallerThan(a.k.XS) ? "pf-border-top" : "")
                },
                renderPaginator() {
                    const t = [this._canUserAccessChallengeCard, !!this._suggestedProducts].filter((t => t)).length,
                        e = Number(this._totalProductCount) + t,
                        i = Math.ceil(e / this.productsPerPage);
                    if (i > 0 && this.page > i) return this._onPaginate(i), this;
                    if (this._totalProductCount > this.productsPerPage) {
                        const t = new qi.O;
                        t.page = this.page, t.pages = i, t.callback = this._onPaginate, t.scrollNode = this.node, t.scrollOffset = -100, t.className = "pf-mt-16", tag("div", "clearfix", [new Hi.L(t)]).append(this._productsNode)
                    }
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogViewsProductsSelector = Ln);
            const Bn = Class({
                id: "retail-prices",
                _products: [],
                renderProducts: function(t) {
                    if (!t) return this;
                    var e = t.filter(this._limitProducts);
                    return this.retailPriceView ? this.retailPriceView.setItems(e) : this.retailPriceView = new Mi.a(e), s.U.clearNode(this._productsNode), (0, s.U)({
                        tag: "div",
                        className: "table-responsive",
                        els: [this.retailPriceView]
                    }).append(this._productsNode), s.U.clearNode(this._nodeFooter), (0, s.U)({
                        tag: "div",
                        className: "margin-bottom-40",
                        els: [this._hasLargeSize() ? {
                            tag: "p",
                            els: [{
                                tag: "span",
                                className: "pf-mr-4 pf-text-red",
                                text: "*"
                            }, dlang("products", "Sizes 2XL and larger can be up to $1.50 extra per item.")]
                        } : "", {
                            tag: "p",
                            els: [{
                                tag: "span",
                                className: "pf-mr-4 pf-text-red",
                                text: "**"
                            }, dlang("products", "The price you sell at is up to you. Want more profit? Sell at a higher price!")]
                        }]
                    }).append(this._nodeFooter), this
                },
                _getSortingOptions: function(t, e) {
                    var i = {
                        popular: dlang("products", "Popular"),
                        price: [dlang("products", "Price"), {
                            priceLow: dlang("products", "Low - High"),
                            priceHigh: dlang("products", "High - Low")
                        }],
                        retailPrice: [dlang("products", "Retail price"), {
                            retailPriceLow: dlang("products", "Low - High"),
                            retailPriceHigh: dlang("products", "High - Low")
                        }],
                        profit: [dlang("products", "Profit"), {
                            profitLow: dlang("products", "Low - High"),
                            profitHigh: dlang("products", "High - Low")
                        }]
                    };
                    return this._getSortingOptionsDOM(i, t, e)
                },
                _hasLargeSize: function() {
                    var t = !1;
                    for (var e in this._products) {
                        var i = this._products[e];
                        for (var n in i.sizes) {
                            "2XL" === i.sizes[n] && (t = !0)
                        }
                    }
                    return t
                },
                sortProducts: function(t, e, i) {
                    if (!Ui.$[t]) return this.sortMethods[t](e, i);
                    var n = this.retailPriceView.getProductOrVariantProfit(e),
                        r = this.retailPriceView.getProductOrVariantProfit(i);
                    return Ui.$[t](e, i, n, r)
                }
            }, Ln);
            window && ((globalThis || {}).PFProductsCatalogViewsRetailPrices = Bn);
            const Fn = Class({
                defaultCaption: "",
                caption: "",
                content: null,
                isActive: !1,
                isDisabled: !1,
                tooltipText: "",
                __construct: function(t, e, i) {
                    this.defaultCaption = t, this.content = e, this.isDisabled = !e, this.isActive = void 0 !== i && i
                },
                getTabItem: function(t) {
                    var e = new Z.t;
                    return e.caption = this.getCaption(), e.onclick = t.bind(this, this, !0), e.isActive = this.isActive, e.isDisabled = this.isDisabled, e.tooltipTitle = this.tooltipText, e
                },
                render: function(t) {
                    return "function" != typeof this.content.render ? this : this.content.render(t)
                },
                setCaption: function(t) {
                    this.caption = t
                },
                getProductFilterDropdown() {
                    return this.content.getProductFilterDropdown()
                },
                getCaption: function() {
                    return this.caption ? this.caption : this.defaultCaption
                },
                isTabAlwaysVisible: function() {
                    return this.content && this.content.isTabAlwaysVisible || this.isDisabled
                },
                append: function(t) {
                    this.content.append(t)
                }
            });
            window && ((globalThis || {}).PFProductsCatalogViewsWrap = Fn);
            var Vn = i(75717),
                jn = (i(28289), i(75414)),
                Un = i(99988),
                Mn = i(94673),
                zn = i(11072),
                qn = i(97540);

            function Hn(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function Wn(t, e) {
                return Wn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Wn(t, e)
            }

            function $n(t) {
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
                    var i, n = Kn(t);
                    if (e) {
                        var r = Kn(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return Gn(this, i)
                }
            }

            function Gn(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Yn(t)
            }

            function Yn(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Kn(t) {
                return Kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Kn(t)
            }

            function Zn(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function Qn(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, Xn(t, e, "get"))
            }

            function Jn(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Xn(t, e, "set"), i), i
            }

            function Xn(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var tr = new WeakMap,
                er = new WeakSet;
            let ir = function(t) {
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
                    }), e && Wn(t, e)
                }(o, t);
                var e, i, n, r = $n(o);

                function o() {
                    var t, e, i;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), t = r.call(this), Zn(e = Yn(t), i = er), i.add(e),
                        function(t, e, i) {
                            Zn(t, e), e.set(t, i)
                        }(Yn(t), tr, {
                            writable: !0,
                            value: void 0
                        }), t.node = tag("div"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(Yn(t), er, nr).call(Yn(t)), t
                }
                return e = o, (i = [{
                    key: "destroy",
                    value: function() {
                        Qn(this, tr).destroy(), Jn(this, tr, null)
                    }
                }]) && Hn(e.prototype, i), n && Hn(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), o
            }(X.p);

            function nr() {
                const t = new tt.L;
                t.components = {
                    VContactSalesModal: () => Promise.all([i.e(33348), i.e(52481), i.e(25914), i.e(8318)]).then(i.bind(i, 3019))
                }, t.template = '<v-contact-sales-modal :title="title" :show-modal="showModal" :inquiry-type="inquiryType"/>', t.initialData = {
                    title: dlang("products", "Contact our sales team"),
                    showModal: !0,
                    inquiryType: "product-catalog"
                }, Jn(this, tr, new tt.Z(t)), Qn(this, tr).append(this.node)
            }
            var rr = i(56897),
                or = i(20039);
            const ar = Class({
                filters: null,
                views: {},
                _tabs: null,
                _tabItems: {},
                _products: [],
                _category: null,
                isTabEventDispatching: !0,
                salesForm: null,
                _newFilter: null,
                __construct: function() {
                    this.views = {
                        models: new Fn(dclang("products", "Product models", "Models"), new Ln, !0),
                        retail_prices: new Fn(dlang("products", "Retail prices"), new Bn)
                    }, this.node = tag("div", "catalog__products-selector", [this._nodeTabsRow = tag("div", "row pf-mt-16 pf-mt-sm-8 pf-mt-md-0 pf-mb-16", [tag("div", "col-md-12", [this._tabs = new Q.w("primary center-fixed pf-mb-16", !0), zn.A.isEnglish() || zn.A.isFr() || zn.A.isDe() || zn.A.isEs() ? tag("span", "large-volume pf-mr-lg-16 pf-mr-md-12 pf-mr-sm-8", [tag("img", {
                        src: "/static/images/products-catalog/menu-mockup.svg"
                    }), tag("a", {
                        className: "pf-link pf-ml-8",
                        onclick: this._openLargeClientForm
                    }, dlang("products", "Doing large volume?"))]) : ""])]), this._newFilterNode = tag("div", "filter"), this._contentNode = tag("div"), this.doesNotMatchSellingRegionProductsBlock = tag("div"), this.recentlyViewedBlock = tag("div")]), s.U.addClassName(this._nodeTabsRow, "hidden"), (0, Ji.aP)([""])
                },
                renderModelsView: function(t, e) {
                    this.views.models.render({
                        showFulfillmentCountries: t.catalogType !== c.dB.TYPE_MG,
                        isFilterOutside: e
                    }).append(this._contentNode)
                },
                getProductFilterDropdown() {
                    return this.views.models.getProductFilterDropdown()
                },
                renderProducts: function(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    this.views.models.content.filters = this.filters, this._category = t.category, this._products = t.getProducts();
                    var r = new F.R,
                        o = {
                            products: this._products,
                            category: this._category,
                            keywords: t.productSearchKeywords,
                            totalProductCount: t.totalProductCount,
                            categoryTexts: t.categoryTexts,
                            page: this._resolvePageNumber(t.productsViewPage, r.query.page, e),
                            showFulfillmentCountries: t.catalogType !== c.dB.TYPE_MG,
                            filters: $.extend({}, I.Q.getFiltersFromUrl(), t.filter),
                            skipProductsRendering: i,
                            activeStoreId: n
                        };
                    this.views.models.render(o), this.views.retail_prices.render(o);
                    var a = t.activeTab ? t.activeTab : (new F.R).hash;
                    a && this.setActiveTab(a)
                },
                renderTabs: function(t) {
                    s.U.removeClassName(this._nodeTabsRow, "hidden"), this._setTabItems(t), this._tabs.render()
                },
                hideTabs: function() {
                    s.U.addClassName(this._nodeTabsRow, "hidden")
                },
                setActiveTab: function(t) {
                    s.U.removeClassName(this._nodeTabsRow, "hidden");
                    var e = this._findViewById(t),
                        i = this._tabItems[t];
                    e && i && this._tabs.setActiveTab(i)
                },
                _setTabItems: function(t) {
                    for (var e in this.views) {
                        var i = this.views[e],
                            n = i.content ? this._findTab(t, e) : null,
                            r = i.content ? i.content.id : e;
                        (n && n.active || i.isTabAlwaysVisible()) && (this._isTestingCategory() ? this._tabItems[r] = this._renderTabTest(n, i) : this._tabItems[r] = this._renderTab(n, i))
                    }
                    var o = [];
                    for (var a in this._tabItems) o.push(this._tabItems[a]);
                    this._tabs.items = Vn.A.convertToArray(this._tabItems)
                },
                _isTestingCategory: function() {
                    var t;
                    return 14 === (null === (t = this._category) || void 0 === t ? void 0 : t.id)
                },
                _findViewById: function(t) {
                    for (var e in this.views) {
                        var i = this.views[e];
                        if (i.content && i.content.id === t) return i
                    }
                    return null
                },
                _renderTab: function(t, e) {
                    var i = {
                        mainHeader: "",
                        documentTitle: ""
                    };
                    return e.setCaption(""), t && (e.setCaption(t.name), i.mainHeader = t.mainHeader, i.documentTitle = t.pageTitle), e.isActive && (s.U.clearNode(this._contentNode), this.renderContent(i, e)), e.getTabItem(this.renderContent.bind(this, i))
                },
                _renderTabTest: function(t, e) {
                    var i = {
                        mainHeader: "",
                        documentTitle: ""
                    };
                    return e.setCaption(""), t && (e.setCaption(t.name), i.mainHeader = t.mainHeader, i.documentTitle = t.pageTitle), e.isActive ? this.activeTabId = this._tabItems[e.content.id] ? e.content.id : "models" : s.U.addClassName(e.content.node, "hidden"), this.renderContentTest(e), e.getTabItem(this.showTabContent.bind(this, e, i))
                },
                renderContentTest: function(t) {
                    if (!t || !t instanceof Fn || t.isDisabled) return !1;
                    t.render().append(this._contentNode)
                },
                showTabContent: function(t, e, i) {
                    var n = this._findViewById(this.activeTabId);
                    s.U.addClassName(n.content.node, "hidden"), s.U.removeClassName(t.content.node, "hidden"), this.activeTabId = t.content.id, this._shouldDispatchTabEvent(i) && N.l.createAndDispatch(c.dB.EVENT_TAB_CHOOSE, {
                        activeTab: "models" !== this.activeTabId ? this.activeTabId : "",
                        productsOrVariants: this._products,
                        filter: I.Q.getFiltersFromUrl(),
                        customMainHeader: e.mainHeader,
                        documentTitle: e.documentTitle
                    })
                },
                _findTab: function(t, e) {
                    for (var i in t) {
                        var n = t[i];
                        if (n.type === e) return n
                    }
                    return null
                },
                _resolvePageNumber: function(t, e, i) {
                    if (t > 1) return t;
                    if (i) return 1;
                    if (!e) return 1;
                    var n = parseInt(e);
                    return n > 1 ? n : 1
                },
                renderContent: function(t, e, i) {
                    if (!e || !e instanceof Fn) return !1;
                    if (e.isDisabled) return !1;
                    var n = this._tabItems[e.content.id] && "models" !== e.content.id ? e.content.id : "";
                    s.U.clearNode(this._contentNode), e.render().append(this._contentNode), this._shouldDispatchTabEvent(i) && N.l.createAndDispatch(c.dB.EVENT_TAB_CHOOSE, {
                        activeTab: n,
                        productsOrVariants: this._products,
                        filter: I.Q.getFiltersFromUrl(),
                        customMainHeader: t.mainHeader,
                        documentTitle: t.documentTitle
                    })
                },
                _shouldDispatchTabEvent: function(t) {
                    return !!t && (!!this.isTabEventDispatching || (this.isTabEventDispatching = !0, !1))
                },
                clear: function() {
                    return s.U.clearNode(this._contentNode), this
                },
                hide: function() {
                    return s.U.addClassName(this.node, "hidden"), this
                },
                show: function() {
                    return s.U.removeClassName(this.node, "hidden"), this
                },
                _openLargeClientForm: function() {
                    if (this.salesForm) return J.NN.emit("showSalesForm");
                    this.salesForm = new ir, this.salesForm.append(this.node)
                },
                _getMainContent: function() {
                    return tag("div", "", [tag("p", "pf-h4 pf-mb-4", dlang("products", "Want to talk to our sales rep?")), tag("p", "pf-ui-body pf-text-muted pf-mb-16", dlang("products", "Leave your email and they'll be in touch.")), new Un.C(new Un.R({
                        type: "text",
                        inputSize: "lg",
                        placeholder: "name@mail.com",
                        name: "customer-email",
                        id: "customer-email",
                        className: "pf-mb-16"
                    })), new Mn.g(new Mn.S({
                        type: "checkbox",
                        value: !1,
                        label: dlang("products", "I agree to my data being processed in accordance with {linkStart}Printful's Privacy Policy{linkEnd}").replace("{linkStart}", '<a class="pf-link" href="' + langUrl("/policies/privacy") + '" target="_blank">').replace("{linkEnd}", "</a>"),
                        labelClass: "pf-ui-caption pf-text-muted pf-mb-12",
                        wrapperClass: "pf-ml-4",
                        name: "privacy-checkbox",
                        id: "privacy-checkbox"
                    })), this.emailErrorMessage = tag("label", "pf-text-red hidden", [dlang("reviews", "Please enter your email")]), this.checkboxErrorMessage = tag("label", "pf-text-red hidden", [dlang("reviews", "You must agree to our Terms of Service and Privacy Policy")])])
                },
                _getFooterContent: function() {
                    return tag("div", "text-left", [tag("a", {
                        className: "pf-btn pf-btn-primary pf-mr-8",
                        onclick: this._send,
                        attr: {
                            role: "button"
                        }
                    }, dlang("products", "Submit")), tag("a", {
                        className: "pf-btn pf-btn-secondary pf-mr-8",
                        onclick: this._closeModal,
                        attr: {
                            role: "button"
                        }
                    }, dlang("products", "Cancel"))])
                },
                _send: function() {
                    const t = document.getElementById("customer-email").value,
                        e = document.getElementById("privacy-checkbox").checked;
                    let i = !1;
                    qn.D.show(this.modal._nodeContent), t ? this.emailErrorMessage.classList.add("hidden") : (this.emailErrorMessage.classList.remove("hidden"), i = !0), e ? this.checkboxErrorMessage.classList.add("hidden") : (this.checkboxErrorMessage.classList.remove("hidden"), i = !0), i ? qn.D.hide(this.modal._nodeContent) : (0, l.r)("customer/potential-client", {
                        email: t
                    }).then((t => {
                        if (!t.success) return qn.D.hide(this.modal._nodeContent), void this.emailErrorMessage.classList.remove("hidden");
                        new jn.N({
                            type: jn.N.TYPE_SUCCESS,
                            content: dlang("dashboard", "Got it"),
                            duration: 3e3
                        }), this.modal.hide()
                    }))
                },
                _closeModal() {
                    this.modal && this.modal.hide()
                },
                renderFilters(t, e) {
                    if (null == t || !t.id) return;
                    const i = [];
                    (0, or.tG)(t, i);
                    const n = -1 === t.id;
                    this._newFilter = new rr.C(i, t.id, this.getProductFilterDropdown(), e, n), this._newFilter.node.append(this._newFilterNode)
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogProductsView = ar);
            var sr = i(91128);
            const lr = Class({
                _categoryItem: null,
                isActive: !1,
                hiddenInOrderFlow: 0,
                hiddenInCatalog: 0,
                __construct: function(t, e) {
                    this._categoryItem = t, this.isActive = t.isActive, this.hiddenInOrderFlow = t.hiddenInOrderFlow, this.hiddenInCatalog = t.hiddenInCatalog, this.node = tag("a", {
                        className: this.getSize() + " catalog__category pf-mb-16 pf-mb-md-24 pf-mb-lg-32 pf-text-decoration-none",
                        href: this._categoryItem.getUrl(),
                        onclick: e.bind(this, this._categoryItem)
                    }, [tag("div", "catalog__category__card pf-border pf-rounded pf-hover-shadow pf-h-100 pf-position-relative", [this._categoryItem.isNew && tag("span", "pf-badge pf-badge-rect pf-badge--new pf-badge-position-card", dclang("products", "Category badge title", "New")), tag("img", {
                        className: "catalog__category__thumbnail pf-w-100 pf-bg-lighter",
                        src: sr.WF,
                        data: {
                            src: this._categoryItem.urlImage
                        },
                        attr: {
                            alt: this.getTitle(),
                            "aria-hidden": "true"
                        }
                    }), tag("h3", "pf-h5 pf-p-12 pf-m-0 pf-py-0", [this.getTitle()])])])
                },
                getSize: function() {
                    return {
                        3: "col-xl-3 col-md-3 col-6",
                        4: "col-xl-3 col-md-4 col-6",
                        6: "col-xl-4 col-md-6 col-12",
                        8: "col-xl-6 col-md-8 col-12"
                    } [this._categoryItem.thumbSize]
                },
                getTitle: function() {
                    return this._categoryItem.settings.thumbnailTitle ? this._categoryItem.settings.thumbnailTitle : this._categoryItem.title
                },
                getCategoryItem: function() {
                    return this._categoryItem
                }
            }, s.U.Base);
            window && ((globalThis || {}).PFProductsCatalogCategory = lr);
            var cr = i(83271);
            const dr = Class({
                _isTopLevel: !1,
                resizeTimeout: null,
                swapCategories: [],
                __construct: function() {
                    this.node = tag("div", "catalog clearfix"), window.addEventListener("resize", this._setTimeout.bind(this, this._onResize, 300))
                },
                render: function(t, e, i) {
                    this.swapCategories = null != i ? i : [], this._isTopLevel = !e, c.dB.CAN_ACCESS_FAST_DELIVERY_CATEGORY || e !== _.Zx || (t = t.filter((t => {
                        let {
                            id: e
                        } = t;
                        return e !== _.wo
                    }))), c.dB.CAN_ACCESS_STARTER_PACK_CATEGORY || e !== _.Zx || (t = t.filter((t => {
                        let {
                            id: e
                        } = t;
                        return e !== _.kN
                    }))), c.dB.isProductSwap() && (t = t.filter((t => {
                        let {
                            id: e
                        } = t;
                        return ![_.Zx, _.qH].includes(e)
                    }))), this.clear().renderCategories(t).show()
                },
                renderCategories: function(t) {
                    return tag("div", "row row-flex pf-mt-16", this._getCategories(t)).append(this.node), this
                },
                clear: function() {
                    return s.U.clearNode(this.node), this
                },
                hide: function() {
                    return s.U.addClassName(this.node, "hidden"), this
                },
                show: function() {
                    return s.U.removeClassName(this.node, "hidden"), setTimeout(this._afterAppend.bind(this), 0), this
                },
                _afterAppend: function() {},
                _setTimeout: function(t, e) {
                    clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(t.bind(this), e)
                },
                _onResize: function() {},
                _getCategories: function(t) {
                    return [].concat.apply([], t.map(this._renderCategory)).filter(Boolean).sort(this._sort)
                },
                _renderCategory: function(t) {
                    const e = [];
                    return this.swapCategories.length && !(0, U.LH)(t, this.swapCategories) ? e.shift() : (dr.filterCategories(t) && e.push(new lr(t, this._onClick)), t.children.length && !this._isTopLevel ? e.concat(t.children.filter(dr.filterCategories).map(this._renderCategory)) : e.shift())
                },
                _sort: function(t, e) {
                    return t.getCategoryItem().catalogPosition - e.getCategoryItem().catalogPosition
                },
                _onClick: function(t, e) {
                    cr.T.track(t), 2 == e.which || 4 == e.button || e.metaKey || e.ctrlKey || (e.preventDefault(), N.l.createAndDispatch(c.dB.EVENT_NAME, {
                        scrollToTop: !0,
                        category: t
                    }))
                }
            }, s.U.Base);
            dr.filterCategories = function(t) {
                return !t.isClone && !t.hiddenInCatalog && ![_.eK].includes(t.id)
            }, window && ((globalThis || {}).PFProductsCatalogCategoriesSelector = dr);
            var ur = i(51049),
                pr = i(39697),
                hr = i(58270);

            function fr(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function gr(t, e, i) {
                return e && fr(t.prototype, e), i && fr(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function vr(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function mr(t, e) {
                return mr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, mr(t, e)
            }

            function _r(t) {
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
                    var i, n = wr(t);
                    if (e) {
                        var r = wr(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return yr(this, i)
                }
            }

            function yr(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return br(t)
            }

            function br(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function wr(t) {
                return wr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, wr(t)
            }

            function Pr(t, e, i) {
                Cr(t, e), e.set(t, i)
            }

            function Cr(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function Tr(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, Sr(t, e, "get"))
            }

            function kr(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, Sr(t, e, "set"), i), i
            }

            function Sr(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var Er = new WeakMap,
                Or = new WeakMap,
                Ir = new WeakSet;
            let Nr = function(t) {
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
                    }), e && mr(t, e)
                }(i, t);
                var e = _r(i);

                function i(t) {
                    var n, r, o;
                    return vr(this, i), n = e.call(this), Cr(r = br(n), o = Ir), o.add(r), Pr(br(n), Er, {
                            writable: !0,
                            value: void 0
                        }), Pr(br(n), Or, {
                            writable: !0,
                            value: void 0
                        }), n.node = tag("div", "product-catalog-subheadline-mke"), kr(br(n), Er, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(br(n), Ir, Rr).call(br(n)), n
                }
                return gr(i)
            }(X.p);
            async function Rr() {
                const t = new tt.L;
                t.components = {
                    "subheadline-cards": () => Promise.all([i.e(72529), i.e(13942)]).then(i.bind(i, 89898))
                }, t.template = '\n            <subheadline-cards\n                :variant-id="variantId"\n            />\n        ', t.initialData = {
                    variantId: Tr(this, Er).variantId
                }, kr(this, Or, new tt.Z(t)), Tr(this, Or).append(this.node)
            }
            let Dr = gr((function t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                vr(this, t), this.variantId = e.variantId
            }));
            var xr = i(79442);

            function Ar(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function Lr(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function Br(t, e) {
                return Br = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Br(t, e)
            }

            function Fr(t) {
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
                    var i, n = jr(t);
                    if (e) {
                        var r = jr(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return Vr(this, i)
                }
            }

            function Vr(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function jr(t) {
                return jr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, jr(t)
            }
            let Ur = function(t) {
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
                    }), e && Br(t, e)
                }(a, t);
                var e, n, r, o = Fr(a);

                function a() {
                    return Ar(this, a), o.apply(this, arguments)
                }
                return e = a, (n = [{
                    key: "render",
                    value: function(t) {
                        const e = new tt.L;
                        e.components = {
                            "product-template-swap-product-banner": () => i.e(47837).then(i.bind(i, 2467))
                        }, e.template = "<product-template-swap-product-banner/>", e.plugins = {
                            store: (0, xr.getVuex)()
                        }, new tt.Z(e).append(t)
                    }
                }]) && Lr(e.prototype, n), r && Lr(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(X.p);
            var Mr = i(70878),
                zr = i(19728);
            const qr = Class({
                _params: null,
                _state: null,
                _productView: null,
                _cookieEventReference: null,
                _wasUserOnProduct: !1,
                __construct: function(t) {
                    var e;
                    this._params = t, this._params.pageNumber = (t.isEmbeddedView() ? this._params.pageNumber : (new F.R).query.page) || 1, this._isHeadingSet = this._params.headingNode && this._params.breadcrumbsNode, this._breadcrumbs = this._renderBreadcrumbs(), this._isHeadingSet && (this._titleNode = this._params.headingNode, this._breadcrumbsNode = this._params.breadcrumbsNode, this._breadcrumbs.append(this._breadcrumbsNode)), this._productFilterDropdown = tag("div"), N.l.filterExtraParams = {}, this._params.isProductSwap && (N.l.filterExtraParams = {
                        allowedType: this._params.originalProductType,
                        requiredPlacements: this._params.originalPlacements,
                        swapTemplateId: this._params.swapTemplateId
                    }), this._state = new N.l, this.node = tag("div", this._params.productCatalogClass, [tag("div", this._params.containerClass, [this._nodeSticky = tag("div", "catalog__header", [this.container = tag("div", this._params.isStickyHeaderEnabled() ? "pf-px-0" : "", [tag("div", "row row-flex pf-flex-md-row-reverse", [this._params.enableSearch ? tag("div", "col-sm-12 col-md-3 catalog__header__search-container", [tag("div", "catalog__header__search pf-pb-16", [this._inputSearch = null !== (e = this._params.searchBox) && void 0 !== e ? e : this._renderSearch()])]) : "", tag("div", "col-12 " + (this._params.enableSearch ? "col-md-9 catalog__header__heading-container" : ""), [tag("div", "row", [this._mainHeader = tag("div", "", [this._headerWrapper = this._isHeadingSet ? this._breadcrumbsWrapper = tag("div", (this._params.isStickyHeaderEnabled() ? "col-md-11 col-xl-10" : "col-12 col-md-8") + " catalog__header__breadcrumbs-container") : tag("div", "text-left col-12 col-xl-11 pf-mb-sm-40 pf-mb-md-0 " + (this._params.enableSearch ? "pf-pb-16" : "pf-py-16"), [tag("div", "breadcrumbs-wrapper pf-d-flex", [tag("div", "main-breadcrumb-data", [this._breadcrumbs]), tag("div", "additional-breadcrumb-data pf-align-items-center pf-justify-content-end pf-d-flex", "")])])])])]), this._params.enableFilterHeader ? tag("div", "col-12 col-md-3 catalog__header__filter-container pf-pb-32 pf-pb-md-16 pf-d-none pf-d-md-block", [this._productFilterDropdown]) : ""])])]), this._titleWrapNode = this._params.enableTitle ? tag("div", "row pf-mb-24", [tag("div", "col-md-12", [this._isHeadingSet ? this._titleWrapper = tag("div") : this._titleNode = tag("h1", "pf-h2 text-center pf-my-8 pf-my-sm-0"), this._subtitleNode = tag("h2", "pf-ui-subheading-lg text-muted text-center pf-mt-8 pf-mb-0 pf-d-none")])]) : "", this._productBannerNode = tag("div", "row slick-slider slick-dotted product-banner-slider"), this.productSwapBanner = tag("div"), this._recentMockupsNode = tag("div", "recent-mockups pf-pt-40 pf-pb-24 pf-mb-40 pf-d-none pf-bg-lighter"), this._mainContentNode = tag("div")]), this._productNode = tag("div")]), this._isHeadingSet && (this._titleWrapper.appendChild(this._titleNode), this._breadcrumbsWrapper.appendChild(this._breadcrumbsNode)), this._params.isProductSwap && (this.productSwapBanner.className = "pf-mb-24 pf-mt-6", (new Ur).render(this.productSwapBanner), this._headerTitle = tag("div", "text-left pf-h4 pf-pl-0 pf-py-7 col-12 col-md-8", dlang("products", "Available products")), this._headerWrapper.appendChild(this._headerTitle), J.on(J._A, this._renderSwapProductTitle)), this._renderMainContent(), this._params.isStickyHeaderEnabled() && this._attachStickyHeader(), window.addEventListener("resize", this._closeMobileSidebar.bind(this, null)), window.addEventListener("resize", this._resizeInitRecentMockupsSlider.bind(this))
                },
                _renderSwapProductTitle() {
                    this._breadcrumbs.items.length ? s.U.addClassName(this._headerTitle, "hidden") : s.U.removeClassName(this._headerTitle, "hidden")
                },
                updateFromState: function(t) {
                    this._state = t, c.CQ.catalogType = t.catalogType, this._params.store.setActiveCategoryId(t.getCategoryId()), this._params.isRenderRequired = t.isRenderRequired, this._state.scrollToTop && setTimeout(function() {
                        this._scrollViewToTop()
                    }.bind(this), 100), this[t.action] && this[t.action]()
                },
                productCatalogProductsLoaded: function() {
                    var t, e, i, n, r;
                    const o = this._state.categoryTexts || null;
                    this._renderMainContent(), this._state.categoryTexts = this._state.categoryTexts || o, this._params.enableTabs ? this._productsSelector.renderTabs(this._state.category.tabs) : this._productsSelector.hideTabs();
                    const a = null !== (t = null === (e = this._params) || void 0 === e ? void 0 : e.activeStoreId) && void 0 !== t ? t : null;
                    this._productsSelector.renderFilters(this._state.category, a), null === (i = this._productsSelector.views.models) || void 0 === i || null === (n = i.content) || void 0 === n || null === (r = n._nodeMobileFilters) || void 0 === r || r.classList.add("pf-d-none"), !this._params.enableTabs && this._productsSelector.renderModelsView(this._state, this._params.enableFilterHeader), this._updateFilterDropdown(!0), this.productCatalogLoadAllProductData()
                },
                productCatalogLock: function() {
                    this._state.isLocked ? qn.D.show(this._mainContentNode) : qn.D.hide(this._mainContentNode)
                },
                productCatalogNavigate: function() {
                    var t = this._state.getCategoryId();
                    if (this._renderMainContent(), this._updateBreadcrumbs(), this._updateFilterDropdown(!1), this._clearBannerNode(), this._renderProductBanner(), this._renderRecentMockups(), this._initSlider(), this._params.onCategoryChoose && t && this._params.onCategoryChoose(t), this._shouldShowCategories()) this._categoriesSelector.render(this._params.store.categories.getAll(t), t, this._params.isProductSwap ? this._params.swapCategories : []);
                    else {
                        var e = new Fi;
                        e.categoryId = t, e.favorites = this._isFavoriteCategory(t), e.actionBefore = this._productsSelector.show, e.forMockupGenerator = this._params.isMockupGenerator, e.forProductPush = c.dB.isProductPush(), e.forOrderFlow = c.dB.isOrderFlow(), e.forProductTemplate = this._params.isProductTemplate, e.storeId = this._params.activeStoreId, e.pageNumber = this._params.pageNumber, e.matchSellingRegion = !0, this._params.isProductSwap && (e.allowedType = this._params.originalProductType, e.requiredPlacements = this._params.originalPlacements, e.swapTemplateId = this._params.swapTemplateId), setTimeout(function() {
                            this._params.store.products.getByParams(e)
                        }.bind(this), 1)
                    }
                    this._trackProductPageView(), this._state.clickedOnSidebar && this._sendSidebarDataLayerEvent()
                },
                productCatalogLoadAllProductData: function(t) {
                    this._params.store.products.getAllProductsList(t)
                },
                productCatalogProductsFiltered: function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this._hasSelectedFilters() ? (s.U.removeClassName(this._nodeClearFilters, "hidden"), this._pushCategoryDataLayer()) : this._nodeClearFilters && s.U.addClassName(this._nodeClearFilters, "hidden"), this._buttonTitle && s.U.setNodeText(this._buttonTitle, dlang("products", "See {productCount} products").replace("{productCount}", this._state.getProducts().length)), s.U.hasClassName(this._mainContentNode, "hidden") || this._state.isOnPopstate ? t || this.productCatalogNavigate() : this._productsSelector.renderProducts(this._state, this._params.isEmbeddedView(), e, this._params.activeStoreId)
                },
                productCatalogAllLoaded: function() {
                    const t = !((new F.R).query.page > 1);
                    this.productCatalogProductsFiltered(!0, t)
                },
                _hasSelectedFilters: function() {
                    return Object.values($.extend({}, I.Q.getFiltersFromUrl(), this._state.filter)).filter((function(t) {
                        return t && t.length > 0
                    })).length > 0
                },
                productCatalogProductChosen: function() {
                    const t = this._state.getActiveProduct();
                    var e;
                    if (r.m.prototype.setLastActiveCatalogCategory(t.productId, t.mainCatalogCategoryId), !c.dB.isProductPush() || c.dB.isProductTemplate() || c.dB.isProductSwap() || (0, b.aF)(t, "b2b_checkout", "push", "selecting product"), this._params.onProductChoose) return t.dataLayerSource = null !== (e = this._state.dataLayerSource) && void 0 !== e ? e : null, this._params.onProductChoose(t), void this._trackProductPageView(!0);
                    this._updateTitle(!1), this._updateBreadcrumbs(t), this.hideMainContent(), qn.D.show(this._productNode, {
                        minHeight: 300
                    }), this._params.store.products.getDataByProductId(this._state.activeProductId, this._renderProduct), this._trackProductPageView(!0)
                },
                productCatalogVariantChanged: function() {
                    this._productView.productInfo.updatePickers(this._params.store.categories.getActiveCategory())
                },
                hideMainContent: function() {
                    s.U.addClassName(this._mainContentNode, "hidden")
                },
                isMainContentHidden: function() {
                    return s.U.hasClassName(this._mainContentNode, "hidden")
                },
                productCatalogTabChosen: function() {
                    this._state.activeProductId ? this._state.isOnPopstate && this._productView.setActiveTab(this._state.activeTab, !1) : this.isMainContentHidden() || this._state.isOnPopstate ? this.isMainContentHidden() ? this.productCatalogNavigate() : (this._productsSelector.isTabEventDispatching = !1, this._productsSelector.setActiveTab(this._state.activeTab), this._trackProductPageView()) : this._updateTitle(this._state.getTitle())
                },
                _renderBreadcrumbs: function() {
                    if (!this._params.enableBreadcrumbs) return "";
                    var t = new ur.O;
                    return t.setNewCatalogAvailability(this._params.isNewCatalogAvailable), t.addIndex(this._params.breadcrumbsIndexCategoryTitle), t
                },
                _updateBreadcrumbs: function(t) {
                    if (!this._breadcrumbs) return;
                    const e = this._params.store.categories.getActiveCategory();
                    if (this._isFavoriteCategory(null == e ? void 0 : e.id)) {
                        const e = "â† " + (t ? dlang("products", "Back to favorites") : dlang("products", "Back to all products"));
                        this._breadcrumbs.setShouldRenderIndex(!1), this._breadcrumbs.set([{
                            title: e,
                            onclick: this._returnToPrevious
                        }, {
                            title: ""
                        }]), this._breadcrumbs.node.classList.add("hide-last"), this._breadcrumbs.node.classList.add("hide-after")
                    } else this._breadcrumbs.setShouldRenderIndex(!0), this._breadcrumbs.node.classList.remove("hide-last"), this._breadcrumbs.node.classList.remove("hide-after"), this._breadcrumbs.set(this._params.store.categories.getPath()), t && this._breadcrumbs.add(t);
                    J.j8(J._A), this.updateBreadcrumbsWrapper()
                },
                updateBreadcrumbsWrapper() {
                    if (this._state.activeProductId) s.U.clearNode(this._mainHeader), this._headerWrapper = tag("div", "text-left col-12 col-xl-11 " + (this._params.enableSearch ? "pf-pb-16" : "pf-py-16"), [tag("div", "breadcrumbs-wrapper pf-d-flex", [tag("div", "main-breadcrumb-data", [this._breadcrumbs]), tag("div", "additional-breadcrumb-data pf-align-items-center pf-justify-content-end pf-d-flex", "")])]), this._headerWrapper.append(this._mainHeader), this._wasUserOnProduct = !0;
                    else {
                        if (!this._wasUserOnProduct) return;
                        s.U.clearNode(this._mainHeader), this._headerWrapper = this._breadcrumbsWrapper = tag("div", (this._params.isStickyHeaderEnabled() ? "col-xl-10" : "col-12 col-md-8") + " pf-my-16 catalog__header__breadcrumbs-container", [this._breadcrumbs]), this._headerWrapper.append(this._mainHeader), this._wasUserOnProduct = !1
                    }
                },
                _updateFilterDropdown(t) {
                    this._params.enableFilterHeader && (s.U.clearNode(this._productFilterDropdown), t && this._productsSelector.getProductFilterDropdown().append(this._productFilterDropdown))
                },
                _returnToPrevious: function() {
                    this._state.action === c.dB.EVENT_PRODUCT_CHOOSE ? N.l.createAndDispatch(c.dB.EVENT_NAME, {
                        category: this._state.category
                    }) : N.l.createAndDispatch(c.dB.EVENT_NAME, {
                        category: (new Xi.M).getById(this._state.category.parentId) || new V.p
                    })
                },
                _updateTitle: function(t) {
                    if (this._params.enableTitle)
                        if (t) {
                            this._titleNode.innerHTML = t;
                            var e = this._state.getSubtitle();
                            e ? (this._subtitleNode.innerHTML = e, s.U.removeClassName(this._subtitleNode, "pf-d-none")) : s.U.addClassName(this._subtitleNode, "pf-d-none"), s.U.insertBefore(this._titleWrapNode, this._productBannerNode)
                        } else s.U.removeNode(this._titleWrapNode)
                },
                _clearBannerNode: function() {
                    this._productBannerNode.classList.contains("slick-initialized") && this._productBannerNode.slick.destroy(), s.U.clearNode(this._productBannerNode)
                },
                _renderMainContent: function() {
                    var t, e, i;
                    if (this._params.isProductSwap && qn.D.show(this.node), !1 === this._params.isRenderRequired) return;
                    s.U.clearNode(this._mainContentNode), s.U.clearNode(this._productNode), s.U.removeClassName(this._mainContentNode, "hidden"), this._updateTitle(this._state.getTitle());
                    var n = this._state.getProducts(),
                        r = this._params.enableCategoriesSidebar || n.length && this._params.enableProductsSidebar,
                        o = this._params.store.categories.getActiveCategory();
                    this._params.store.allowedFulfillmentRegions = this._params.allowedFulfillmentRegions, this._productsSelector = new ar;
                    const a = this._getEmptyFavoriteProductNode(null == o ? void 0 : o.id, n);
                    a ? a.append(this._mainContentNode) : (this._pushCategoryDataLayer(), tag("div", "row", [this._subHeadlineNode = tag("div"), r ? tag("div", "col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 hidden-xs catalog__sidebar-floating", [tag("div", "catalog__sidebar-header row hidden-sm hidden-md hidden-lg", [tag("div", "pf-p-16", [tag("h5", "pf-ui-subheading text-center pf-m-0", [dlang("products", "Filters")]), tag("a", {
                        className: "close",
                        prop: {
                            onclick: this._closeMobileSidebar
                        }
                    })]), tag("div", "pf-px-16 pf-py-8 bordered", [tag("img", {
                        className: "category-thumb pf-mr-16",
                        prop: {
                            src: o ? o.urlImage : ""
                        }
                    }), tag("h6", "pf-h6 category-title", [o ? o.getSidebarTitle() : ""]), this._nodeClearFilters = tag("a", {
                        className: "pf-link pull-right pf-mt-8 hidden",
                        onclick: this._clearFilters
                    }, [dlang("products", "Clear filters")])])]), this._sidebar = new z(this._params.store, this._params.enableCategoriesSidebar, this._params.sellingRegion || f.V.sellingRegion, this._params.isProductSwap ? this._params.swapCategories : null, this._params.activeStoreId || null), tag("div", "catalog__sidebar-footer row pf-p-16 hidden-sm hidden-md hidden-lg", [tag("a", {
                        className: "pf-btn pf-btn-primary btn-block",
                        prop: {
                            onclick: this._closeMobileSidebar
                        }
                    }, [this._buttonTitle = tag("span", "", [dlang("products", "See {productCount} products").replace("{productCount}", n.length)])])])]) : "", tag("div", r ? "col-xs-12 col-sm-8 col-md-9 col-lg-9 col-xl-10" : "col-xs-12", [this._categoriesSelector = new dr, this._productsSelector])]).append(this._mainContentNode)), this._sidebar && this._productsSelector && (this._productsSelector.filters = this._sidebar.filters);
                    const l = this._params.sellingRegion || f.V.sellingRegion;
                    let u = null;
                    c.dB.isProductsPricing() && (u = new O(O.TYPE_RECENTLY_VIEWED, [], l, {
                        fullWidth: !this._shouldShowCategories()
                    }), this._shouldShowCategories() ? u.append(this._mainContentNode) : (s.U.clearNode(this._productsSelector.recentlyViewedBlock), u.append(this._productsSelector.recentlyViewedBlock)), this._params.isFeaturedReviews && (this._params.featuredReviews = new me(null, this._params.store.categories.getActiveCategoryId(), !0), this._params.featuredReviews.append(this._mainContentNode))), !l || l.isWorldwide() || this._shouldShowCategories() || null !== (t = this._state.category) && void 0 !== t && null !== (e = t.settings) && void 0 !== e && e.productsRegion || !this._params.store.products._params || (null === (i = this._state.category) || void 0 === i ? void 0 : i.id) === _.wo ? s.U.clearNode(this._productsSelector.doesNotMatchSellingRegionProductsBlock) : this._params.store.products.getSellingRegionNotMatchedProducts((t => {
                        if (t.products && t.products.length) {
                            var e;
                            const i = new O(O.TYPE_DOES_NOT_MATCH_SELLING_REGION, t.products, l, {
                                productCount: t.totalCount,
                                activeStoreId: this._params.activeStoreId || null,
                                fullWidth: !0,
                                categoryId: null === (e = this._state.category) || void 0 === e ? void 0 : e.id
                            });
                            s.U.clearNode(this._productsSelector.doesNotMatchSellingRegionProductsBlock), i.append(this._productsSelector.doesNotMatchSellingRegionProductsBlock)
                        }
                    })), this._isTextBlockVisible() && (void 0 !== this._params.textBlockData.currentActiveBlock && this._params.textBlockData.currentActiveBlock.removeResizeEvent(), this._params.textBlockData.currentActiveBlock = new d(this._params.textBlockData, this._params.store.categories.getActiveCategoryId()), this._params.textBlockData.currentActiveBlock.append(this._mainContentNode)), this._params.store.categories.getActiveCategoryId() || this.node.classList.remove("catalog__sticky"), this._renderSubheadline("ab-test-catalog-text"), this._renderSubheadline("ab-test-catalog-cards"), qn.D.hide(this.node)
                },
                _renderSubheadline: function(t) {
                    const e = new Dr;
                    e.variantId = t;
                    new Nr(e).append(this._subHeadlineNode)
                },
                _clearFilters: function(t) {
                    N.l.createAndDispatch(c.dB.EVENT_PRODUCTS_FILTER, {
                        filter: null,
                        productsOrVariants: this._productItems,
                        isOnPopstate: !0
                    }), this._openMobileSidebar(t)
                },
                _closeMobileSidebar: function(t) {
                    t && t.preventDefault(), $("html, body").css("overflow", ""), $(document).find(".catalog__sidebar-floating").closest(".modal").scrollTop(0).css("overflow-y", "auto"), $(document).find(".catalog__sidebar-floating").removeClass("open")
                },
                _openMobileSidebar: function(t) {
                    t.preventDefault(), $("html, body").css("overflow", "hidden"), $(document).find(".catalog__sidebar-floating").closest(".modal").scrollTop(0).css("overflow-y", "hidden"), $(document).find(".catalog__sidebar-floating").addClass("open")
                },
                _renderSearch: function() {
                    return new pr.z({
                        placeholder: dlang("products", "Search products..."),
                        type: this._params.searchType,
                        urlQuery: this._params.isProductSwap ? {
                            allowedProductType: this._params.originalProductType,
                            requiredPlacements: this._params.originalPlacements.join()
                        } : {},
                        onEnterPressed: function() {
                            $(this.nodeInput).parent().find(".tt-selectable:first").addClass("tt-cursor").click()
                        },
                        onSelected: function(t) {
                            this._params.isProductTemplate ? this._params.onProductChoose($i.W.fromArray(t)) : location.href = t.autoCompleteUrl
                        }.bind(this)
                    })
                },
                _renderProduct: async function(t) {
                    this._clearBannerNode(), s.U.clearNode(this._productNode), qn.D.hide(this._productNode), t.isFeaturedReviews = this._params.isFeaturedReviews, this._state.activeVariantId && t.setActiveVariantById(this._state.activeVariantId), this._productView = new Bi(t), await this._productView.init(), this._productView.append(this._productNode), qr.pushProductDataLayer(t.activeVariant, this._params.store.categories.getActiveCategory())
                },
                attachCookies() {
                    const t = document.getElementById("cookie-policy");
                    if (!document.getElementsByClassName("cookie-policy__inner").length) return window.removeEventListener("resize", this._cookieEventReference);
                    window.innerWidth <= 768 || window.innerWidth >= 992 ? (t.style.bottom = 0, t.style.top = "unset") : (t.style.bottom = "unset", t.style.top = 0)
                },
                isStickyTop(t, e, i) {
                    return this._state.activeProductId ? (null == t ? void 0 : t.getBoundingClientRect().bottom) <= e : i + 100 <= window.pageYOffset
                },
                _attachStickyHeader: function() {
                    var t;
                    let e = 0,
                        i = 0,
                        n = !1;
                    const r = "catalog__sticky",
                        o = "catalog__header--visible",
                        l = "pf-px-0";
                    this._cookieEventReference = this.attachCookies.bind(this), null !== (t = PF.Cookies) && void 0 !== t && t.arePreferencesSet() || (document.body.classList.add("pf-pt-0"), window.addEventListener("resize", this._cookieEventReference)), window.addEventListener("scroll", function() {
                        e || (e = $(this._nodeSticky).offset().top), this._state.activeProductId && (n = document.querySelector(".sticky-desktop-reference"));
                        const t = this._params.store.categories.getActiveCategoryId();
                        this.isStickyTop(n, -50, e) && t ? (s.U.addClassName(this.node, r), s.U.removeClassName(this.container, l), s.U.removeClassName(this._nodeSticky, o), !window.innerWidth < a.k.SIZES.MD && s.U.addClassName(this._nodeSticky.firstChild, "container"), this._nodeSticky.style.top = "") : t && (s.U.removeClassName(this.node, r), s.U.addClassName(this.container, l), s.U.removeClassName(this._nodeSticky, o), !window.innerWidth < a.k.SIZES.MD && s.U.removeClassName(this._nodeSticky.firstChild, "container"), this._nodeSticky.style.top = ""), window.pageYOffset > i && this._inputSearch && !this._inputSearch.getValue() ? s.U.removeClassName(this._nodeSticky, o) : s.U.addClassName(this._nodeSticky, o), i = window.pageYOffset
                    }.bind(this))
                },
                _scrollViewToTop: function() {
                    var t = this.isMainContentHidden() ? this._productNode : this._mainContentNode;
                    $(t).offset().top > window.pageYOffset || $("html, body").animate({
                        scrollTop: $(t).offset().top - 100
                    }, 300)
                },
                _shouldShowCategories: function() {
                    return !this._state.category || 0 === this._state.category.parentId
                },
                _isTextBlockVisible: function() {
                    return this._isTextBlockVisibleInLocale() && c.dB.isProductsPricing() && (this._params.store.isRootCategory() || this._isProductListCategory() || this._isCategoryListCategory())
                },
                _isCategoryListCategory: function() {
                    return null !== this._state.category && 0 === this._state.category.parentId
                },
                _isProductListCategory: function() {
                    return this._state.products.length
                },
                _isTextBlockVisibleInLocale: function() {
                    return zn.A.isEnglish() || zn.A.isEs() || zn.A.isJp() || zn.A.isDe() || zn.A.isFr()
                },
                _trackProductPageView: function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (qr.TRACKED_PAGE_VIEWS++, qr.TRACKED_PAGE_VIEWS <= 1) return;
                    const e = new n.j;
                    e.trackPageView(), t && c.CQ.catalogType === c.dB.TYPE_MG || e.pushGeneralDataLayerEvent(this._getPageType(t))
                },
                _renderProductBanner: function() {
                    let t = this._params.banners;
                    const e = this._params.bannersPerPage,
                        i = this._params.store.categories.getActiveCategoryId();
                    let n = [];
                    if (Array.isArray(t) && t.length && (n = t.sort((function(t, e) {
                            return t.position - e.position
                        }))), this._params.enableProductBanners && n.length)
                        for (var r in n = n.filter((function(t) {
                                return t.categoryId === i
                            })), e && (t = n.slice(0, e)), n) {
                            const t = n[r];
                            let e = new Vi;
                            e.bannerId = t.bannerId, e.gaEventId = t.gaEventId ? t.gaEventId : t.bannerId, e.buttonText = t.buttonText, e.imgSrc = t.imageLink, e.imgSrcMobile = t.mobileImageLink, e.url = langUrl(t.url), e.title = t.title, e.columns = t.columns, e.campaignName = t.campaignName, new ji(e).append(this._productBannerNode)
                        }
                },
                _initSlider: function() {
                    if (this._productBannerNode.children.length) {
                        var t = $(this._productBannerNode);
                        t.slick({
                            autoplay: !1,
                            slidesToShow: 2,
                            lazyLoad: "ondemand",
                            slidesToScroll: 1,
                            infinite: !0,
                            arrows: !1,
                            adaptiveHeight: !1,
                            focusOnSelect: !1,
                            dots: !1,
                            rows: 0,
                            responsive: [{
                                breakpoint: c.dB.BREAKPOINT_DOTS,
                                settings: {
                                    autoplay: !0,
                                    slidesToShow: 1,
                                    dots: !0
                                }
                            }]
                        }).on("click", (function() {
                            t.slick("slickSetOption", {
                                autoplay: !1
                            }, !1)
                        })).on("touchend touchcancel touchmove", (function() {
                            t.slick("slickPlay")
                        }))
                    }
                },
                _pushCategoryDataLayer() {
                    const t = this._state.getProducts(),
                        e = this._params.store.categories.getActiveCategory();
                    if (!t.length || !e) return;
                    const i = t.map((t => t.productId));
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "dynamicRemarketing",
                        ecomm_prodid: i,
                        ecomm_pagetype: "category",
                        ecomm_category: e.title
                    })
                },
                _renderRecentMockups() {
                    if (s.U.clearNode(this._recentMockupsNode), this._state.catalogType !== c.dB.TYPE_MG && !this._params.isProductPickable || this._state.getCategoryId() > 0 || this._isFavoriteCategory(this._state.getCategoryId())) return void s.U.addClassName(this._recentMockupsNode, "pf-d-none");
                    const t = c.dB.getRecentMockups();
                    t.length < 1 ? s.U.addClassName(this._recentMockupsNode, "pf-d-none") : s.U.removeClassName(this._recentMockupsNode, "pf-d-none"), tag("div", "container", [tag("h4", "pf-h4 pf-mt-0 pf-mb-16", dlang("products", "Your recent products")), this._recentMockupsSlickNode = tag("div", "row pf-my-0 slick-slider slick-dotted", t.map((t => tag("div", "col-12 col-sm-6 col-lg-3 pf-mb-24", [tag("div", {
                        className: "pf-d-block pf-bg-white pf-hover-shadow pf-border pf-rounded pf-pointer recent-mockups__item",
                        onclick: this._onRecentProductClick.bind(this, t)
                    }, [tag("div", "row no-gutters", [tag("div", "col-4 col-lg-5", [tag("img", {
                        className: "img-responsive",
                        src: t.image
                    })]), tag("div", "col", [tag("p", "pf-ui-body pf-mx-8 pf-my-12", t.title)])])])]))))]).append(this._recentMockupsNode), this._initRecentMockupsSlider()
                },
                _onRecentProductClick(t) {
                    (0, Mr.w)(t.id, this._params.onProductChoose.bind(this))
                },
                _resizeInitRecentMockupsSlider() {
                    o.H.delay("recent-mockups-slider", this._initRecentMockupsSlider.bind(this), 200)
                },
                _initRecentMockupsSlider() {
                    var t;
                    (null === (t = this._recentMockupsSlickNode) || void 0 === t ? void 0 : t.children.length) < 2 || $(this._recentMockupsSlickNode).slick({
                        autoplay: !1,
                        lazyLoad: "ondemand",
                        infinite: !0,
                        adaptiveHeight: !1,
                        focusOnSelect: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                        dots: !0,
                        mobileFirst: !0,
                        accessibility: !1,
                        responsive: [{
                            breakpoint: a.k.SIZES.SM,
                            settings: "unslick"
                        }]
                    })
                },
                _getEmptyFavoriteProductNode(t, e) {
                    var i;
                    return void 0 === (null === (i = this._state) || void 0 === i ? void 0 : i.totalCount) || !this._isFavoriteCategory(t) || e.length ? null : tag("div", "pf-d-flex pf-align-items-center pf-flex-column pf-align-items-center pf-justify-content-center pf-mb-32", [tag("img", {
                        className: "favorites-image",
                        src: Zi()
                    }), tag("div", "pf-pt-40", dlang("products", "Pick your favorite products and weâ€™ll list them here")), tag("a", {
                        className: "pf-btn pf-btn-secondary pf-mt-24 pf-mr-8 pf-mb-12",
                        onclick: this._returnToPrevious,
                        text: dlang("products", "Go to catalog")
                    })])
                },
                _isFavoriteCategory: t => t === V.p.ID_FAKE_FAVORITES,
                _getPageType() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return this._params.isMockupGenerator ? t ? n.j.PAGE_TYPE_GENERATOR_PRODUCT : n.j.PAGE_TYPE_GENERATOR_CATEGORY : t ? n.j.PAGE_TYPE_CATALOG_PRODUCT : n.j.PAGE_TYPE_CATALOG_CATEGORY
                },
                _sendSidebarDataLayerEvent() {
                    var t, e, i, n, r;
                    const o = this._state.category,
                        a = null === (t = this._params.store) || void 0 === t || null === (e = t.categories) || void 0 === e ? void 0 : e.getTopLevelCategory(),
                        s = new zr.C;
                    s.name = null === (i = o.dataLayer) || void 0 === i ? void 0 : i.sidebarTitle, s.flow = c.dB.getCatalogTypeName(), s.click_url_path = null === (n = o.dataLayer) || void 0 === n ? void 0 : n.slug, s.id = o.id, s.main_category_name = null === (r = a.dataLayer) || void 0 === r ? void 0 : r.sidebarTitle, s.main_category_id = a.id, (0, _.NO)(s)
                }
            }, s.U.Base);
            qr.TRACKED_PAGE_VIEWS = 0, qr.toggleLock = function(t) {
                hr.u.toggleLock(t)
            }, qr.pushProductDataLayer = (t, e) => {
                t && e && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                    event: "dynamicRemarketing",
                    ecomm_prodid: t.variantId,
                    ecomm_pagetype: "product",
                    ecomm_category: e.title,
                    ecomm_totalvalue: t.price
                }))
            }, qr.hasAccess = !0, c.CQ.isCatalogLoadedIn = !0, window && ((globalThis || {}).PFProductsCatalog = qr)
        },
        84294: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                PFProductsCatalogUtilsStore: () => s
            });
            var n = i(90446),
                r = i(52307),
                o = i(4473),
                a = i(87179);
            const s = Class({
                products: null,
                categories: null,
                __construct: function() {
                    this.categories = new r.M, this.products = new n.V(this.categories), this._initConfigureStore(this)
                },
                cacheCategories: function(t) {
                    return this.categories.cache(t), this
                },
                setActiveCategoryId: function(t) {
                    return void 0 === t || this.categories.setActiveCategoryId(t), this
                },
                setActiveProductId: function(t) {
                    return null !== t && this.products.setActiveId(t), this
                },
                setCurrency: function(t) {
                    return this.products.setCurrency(t), this
                },
                setActiveFilters: function(t) {
                    return t.length ? (s.activeFiltersCache = t.map((function(t) {
                        return {
                            type: t.type,
                            title: t.title,
                            orderIndex: t.orderIndex
                        }
                    })), this) : this
                },
                getActiveFilters: function() {
                    return s.activeFiltersCache
                },
                cacheProductFromArray: function(t, e) {
                    if (!t) return this;
                    var i = o.W.fromArray(t);
                    return this.products.cacheById(i), e && this.products.cacheData(i.productId, null, e), this
                },
                isRootCategory: function() {
                    return 0 === this.categories.getActiveCategoryId()
                },
                _initConfigureStore() {
                    if (s._storeInitCallbackExecuted) return;
                    s._storeInitCallbackExecuted = !0;
                    const t = a.n.getMainStoreInitCallback();
                    t && t(this)
                }
            });
            s.activeFiltersCache = [], s._storeInitCallbackExecuted = !1, window && ((globalThis || {}).PFProductsCatalogUtilsStore = s)
        },
        90446: (t, e, i) => {
            "use strict";
            i.d(e, {
                V: () => y
            });
            var n = i(82320),
                r = i(75717),
                o = i(87457),
                a = i(8504),
                s = i(9651);
            const l = Class({
                variantImageId: 0,
                thumbUrl: "",
                useVariantColor: !1,
                order: 0,
                largeUrl: "",
                variantMaps: [],
                useGeneratorColor: !0,
                backgroundOverride: []
            });
            l.fromArray = function(t) {
                var e = new l;
                return s.U.O2O(e, t), e
            }, window && ((globalThis || {}).PFProductsCatalogItemsProductImageItem = l);
            var c = i(58334),
                d = i(4473),
                u = i(70418),
                p = i(78009),
                h = i(58270),
                f = i(26750),
                g = i(87179),
                v = i(55874),
                m = i(3044),
                _ = i(51122);
            const y = Class({
                _categoryProducts: {},
                _repo: null,
                _currency: "",
                _hasNewCategoryProductDataMethodAccess: null,
                __construct: function(t) {
                    this.categories = t, this._repo = new n.m, this._initConfigureStore(this)
                },
                getByParams: function(t) {
                    "function" == typeof t.actionBefore && t.actionBefore(), this._params = t, h.u.toggleLock(!0);
                    const e = Number(t.categoryId) !== f.p.ID_FAKE_FAVORITES ? this.getCachedProducts(t.categoryId) : [];
                    if (e.products) return this._dispatchEvents(e.products, e.totalCount);
                    this._requestProductsData(t, 1)
                },
                getAllProductsList: function(t) {
                    const e = this.getCachedProducts(this._params.categoryId);
                    e.products && e.products.length === Number(e.totalCount) || this._requestProductsData(this._params, !1, t)
                },
                getSellingRegionNotMatchedProducts: async function(t) {
                    (0, u.r)("product-catalog/get-category-product-data", Object.assign(this._getRequestParams(this._params), {
                        matchSellingRegion: 0,
                        doesNotMatchSellingRegion: 1
                    }), (e => {
                        const i = r.A.convertToArray(e.products).map((t => (t.variants.map((t => n.m.prototype.cacheVariant(c.O.fromArray(t)))), d.W.fromArray(Object.assign(t.product, {
                            doesNotMatchSellingRegion: !0
                        })))));
                        e.sellingRegion && (y.sellingRegion = new v.k6(e.sellingRegion)), t({
                            products: i,
                            totalCount: e.totalCount
                        })
                    }))
                },
                _getRequestParams: function(t) {
                    return {
                        activeCategoryId: t.categoryId,
                        categoryIds: t.favorites ? [] : this.categories.getCategoryChildIds(this.categories.getById(t.categoryId)),
                        forMockupGenerator: t.forMockupGenerator ? 1 : 0,
                        forProductPush: t.forProductPush ? 1 : 0,
                        forOrderFlow: t.forOrderFlow ? 1 : 0,
                        forProductTemplate: t.forProductTemplate ? 1 : 0,
                        currency: this._currency,
                        storeId: t.storeId,
                        favorites: t.favorites,
                        limitUsingDefaultCount: 0,
                        matchSellingRegion: t.matchSellingRegion ? 1 : 0,
                        doesNotMatchSellingRegion: t.doesNotMatchSellingRegion ? 1 : 0,
                        allowedType: t.allowedType || null,
                        requiredPlacements: t.requiredPlacements || [],
                        swapTemplateId: t.swapTemplateId || null
                    }
                },
                _requestProductsData: async function(t, e, i) {
                    (0, u.r)("product-catalog/get-category-product-data", Object.assign(this._getRequestParams(t), {
                        limitUsingDefaultCount: e ? 1 : 0
                    }), this._cacheProducts.bind(this, {
                        categoryId: this._params.categoryId,
                        initialLoad: e,
                        callBackFunction: i
                    }))
                },
                getDataByProductId: function(t, e) {
                    var i = this._getCachedProductData(t);
                    $.isEmptyObject(i) ? (0, u.r)("product-catalog/get-product-data", {
                        productId: t,
                        categoryId: this._params.categoryId,
                        currency: this._currency
                    }, this.cacheData.bind(this, t, e)) : e(i)
                },
                getActive: function() {
                    var t = y.activeProductId;
                    return t ? y.cacheById[t] : null
                },
                setActiveId: function(t) {
                    y.activeProductId = t
                },
                setCurrency: function(t) {
                    this._currency = t
                },
                cacheById: function(t) {
                    return t instanceof d.W || (t = d.W.fromArray(t)), this._repo.cacheProduct(t), y.cacheById[t.productId] = t, t
                },
                cacheByCategoryId(t, e) {
                    t instanceof d.W || (t = d.W.fromArray(t)), this._repo.cacheProductByCategoryId(t, e)
                },
                getCachedProducts: function(t) {
                    const {
                        tempDisabledProductsLimit: e,
                        tempDisabledProductsPushed: i
                    } = y;
                    return this._params.swapTemplateId ? this._categoryProducts[this._getSwapCacheKey(t)] || [] : e && i >= e ? [] : this._categoryProducts[t] || []
                },
                _cacheProducts: function(t, e) {
                    var i, n = t.categoryId,
                        o = t.initialLoad,
                        a = t.callBackFunction;
                    for (var s in e.products = r.A.convertToArray(e.products).map(this._getProductItem.bind(this)), e.products.map(this.cacheById), e.products.forEach((t => this.cacheByCategoryId(t, n))), e.tempDisabledProductsLimit && (y.tempDisabledProductsLimit = e.tempDisabledProductsLimit, y.tempDisabledProductsPushed = e.tempDisabledProductsPushed, y.tempDisabledProductTypes = e.tempDisabledProductTypes, y.tempDisabledProductIds = e.tempDisabledProductIds), e.sellingRegion && this._useSellingRegion(e.sellingRegion), y.isDSRSettingLocked = e.isDSRSettingLocked || !1, this._params.swapTemplateId ? this._categoryProducts[this._getSwapCacheKey(n)] = e : this._categoryProducts[n] = e, e.products) {
                        if (e.products[s].variantRegions) {
                            var l = e.products[s].variants;
                            for (var u in this._repo.cacheProductVariantRegions(e.products[s].product.productId, e.products[s].variantRegions), l) this._repo.cacheVariant(c.O.fromArray(l[u]))
                        }
                        const t = e.products[s];
                        d.W.PRODUCT_IDS_WITH_DTG_DISABLED.includes(t.productId) && !t.availableTechniques.includes((0, m.z)(t.productId).getTechniqueFromMemory()) && (0, m.z)(t.productId).rememberLastUsedTechnique(_.V_)
                    }
                    if (null !== (i = e.suggestedProduct) && void 0 !== i && i.length) {
                        const t = e.suggestedProduct.map((t => d.W.fromArray(t)));
                        t.map(this.cacheById), y.suggestedProducts.push({
                            categoryId: n,
                            products: t
                        })
                    }
                    if (e.challenge && (y.challenge = e.challenge), o) return this._dispatchEvents(e.products, e.totalCount);
                    a && a(!o)
                },
                _getSwapCacheKey(t) {
                    return "swap-" + t + "-" + this._params.swapTemplateId
                },
                _useSellingRegion(t) {
                    y.sellingRegion = new v.k6(t)
                },
                _getCachedProductData: function(t) {
                    return y.cachedData[t] ? y.cachedData[t] : []
                },
                cacheData: function(t, e, i) {
                    y.cachedData[t] = a.m.fromArray(i);
                    var n = this._getCachedProductData(t);
                    n.variants.map(function(t) {
                        this._repo.cacheVariant(t)
                    }.bind(this)), n.similarProducts = i.similarProducts.map((function(t) {
                        return d.W.fromArray(t)
                    })), i.sellingRegionSettings && this._useSellingRegion(i.sellingRegionSettings), n.images = i.images.map((function(t) {
                        return l.fromArray(t)
                    })), e && e(n)
                },
                _getProductItem: function(t) {
                    return t.variants.map(function(t) {
                        this._repo.cacheVariant(c.O.fromArray(t))
                    }.bind(this)), d.W.fromArray(t.product)
                },
                _dispatchEvents: function(t, e) {
                    h.u.toggleLock(!1), o.l.createAndDispatch(p.dB.EVENT_PRODUCTS_LOADED, {
                        productsOrVariants: t,
                        totalCount: e
                    })
                },
                _initConfigureStore() {
                    if (y._storeInitCallbackExecuted) return;
                    y._storeInitCallbackExecuted = !0;
                    const t = g.n.getProductsStoreInitCallback();
                    t && t(this)
                }
            });
            y.cacheById = {}, y.cachedData = {}, y.activeProductId = 0, y.sellingRegion = null, y.tempDisabledProductsPushed = 0, y.tempDisabledProductsLimit = void 0, y.tempDisabledProductTypes = [], y.tempDisabledProductIds = [], y._storeInitCallbackExecuted = !1, y.suggestedProducts = [], y.challenge = null, window && ((globalThis || {}).PFProductsCatalogUtilsStoreProducts = y)
        },
        87457: (t, e, i) => {
            "use strict";
            i.d(e, {
                l: () => h
            });
            var n = i(82320),
                r = i(84294),
                o = i(99713),
                a = i(58334),
                s = i(20833),
                l = i(78009),
                c = i(72354),
                d = i(70869),
                u = i(11072),
                p = i(75232);
            const h = Class({
                prefix: "",
                category: null,
                products: [],
                totalProductCount: null,
                variantIds: [],
                activeProductId: null,
                activeVariantId: null,
                filter: null,
                skipHistory: !1,
                openedFirstTime: !1,
                productSearchKeywords: null,
                activeTab: "",
                customMainHeader: "",
                documentTitle: "",
                action: l.dB.EVENT_NAME,
                catalogType: "",
                productsViewPage: 1,
                productColor: null,
                productSize: null,
                productOutlineColor: null,
                productEmbroiderySubTechnique: null,
                isOnPopstate: !1,
                openDesigner: !1,
                quickDesign: null,
                scrollToTop: !1,
                geoElementId: "",
                suggestedProduct: null,
                isRenderRequired: !0,
                filterExtraParams: {},
                __construct: function() {
                    this.catalogType = l.CQ.catalogType || l.dB.TYPE_PP
                },
                getCategoryId: function() {
                    return this.category ? this.category.id : 0
                },
                getObject: function() {
                    return {
                        action: this.action,
                        activeProductId: this.activeProductId,
                        category: this.category ? JSON.stringify(this.category) : null,
                        products: this.products ? JSON.stringify(this.products) : null,
                        activeTab: this.activeTab,
                        filter: this.filter ? JSON.stringify(this.filter) : null
                    }
                },
                getTitle: function() {
                    if (this.customMainHeader) return this.customMainHeader;
                    if (!this.category || !this.category.id) return l.dB.PAGE_TITLES[this.catalogType];
                    if (this.category.seo[this.catalogType]) {
                        var t = this.category.seo[this.catalogType],
                            e = Object.values(t).pop();
                        if (e && e.mainHeading) return e.mainHeading
                    }
                    return this.category.settings && this.category.settings.thumbnailTitle ? this.category.settings.thumbnailTitle : this.category.title
                },
                getSubtitle: function() {
                    return this.category && this.category.id ? "" : l.dB.PAGE_SUBTITLES[this.catalogType] ? l.dB.PAGE_SUBTITLES[this.catalogType] : ""
                },
                getDocumentTitle: function() {
                    var t = l.dB.TITLES[this.catalogType];
                    if (this.documentTitle) return this.documentTitle;
                    if (this.activeProductId) {
                        t = this.catalogType === l.dB.TYPE_PP ? " | Printful" : " | " + t;
                        var e = this.getActiveProduct().getFullTitle();
                        return this.getActiveProduct().customTitle && (e = this.getActiveProduct().customTitle), e + t
                    }
                    if (!this.category || !this.category.id) return l.dB.BASE_TITLES[this.catalogType] || t;
                    if (this.category.seo[this.catalogType]) {
                        var i = this.category.seo[this.catalogType],
                            n = Object.values(i).pop();
                        if (n && n.pageTitle) return n.pageTitle
                    }
                    return t
                },
                getUrl: function() {
                    var t, e, i = new s.R;
                    i.path = this.prefix + "/";
                    const n = (0, p.IS)(i.query);
                    if (i.query.clear(), !this.category) return i.toString();
                    if (i.path += this.category.slug, i.hash = this.activeTab ? this.activeTab : "", this.activeProductId) return i.path += "/" + this.getActiveProduct().slug, this.productColor && (i.query.color = this.productColor), this.productTechnique && (i.query.technique = this.productTechnique), this.productSize && (i.query.size = this.productSize), this.activeVariantId && (i.query.variant = this.activeVariantId), this.quickDesign && (i.query.quickDesign = this.quickDesign), this.openDesigner && (i.query.openDesigner = this.openDesigner), this.productOutlineColor && (i.query.outlineColor = this.productOutlineColor), this.productEmbroiderySubTechnique ? i.query.embroiderySubTechnique = this.productEmbroiderySubTechnique : delete i.query.embroiderySubTechnique, l.v2.marketingParams.forEach((t => {
                        const e = n[t];
                        e && (i.query[t] = e)
                    })), i.toString();
                    if (0 === this.category.id && this.prefix === (null === (t = l.dB.PRODUCT_CATALOG_INDEX_SLUG_CHANGES) || void 0 === t || null === (e = t[u.A.locale]) || void 0 === e ? void 0 : e.old) && (i.path = l.dB.PRODUCT_CATALOG_INDEX_SLUG_CHANGES[u.A.locale].new), !this._hasUrlParams()) return i.hash = "", i.path = i.path.replace(/\/$/, ""), i.toString();
                    for (var r in this.filter) {
                        var o = this.filter[r].join("!");
                        o && (i.query[r] = o)
                    }
                    return this.productSearchKeywords && (i.query.search = this.productSearchKeywords), this.productsViewPage > 1 && (i.query.page = this.productsViewPage), i.toString()
                },
                getProducts: function() {
                    var t, e;
                    const i = new n.m,
                        r = null !== (t = null === (e = this.category) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : 0,
                        o = this.products ? this.products.map((t => i.getCachedProductByCategoryId(+t, r))).filter((t => t)) : [],
                        a = this.variantIds ? this.variantIds.map(i.getCachedVariantById.bind(i)) : [];
                    return [].concat.apply(a, o.map((function(t) {
                        return -1 === d.F.getConfig().expandTypes.indexOf(t.type) ? t : i.getCachedVariantsByProductId(t.productId)
                    })))
                },
                getActiveProduct: function() {
                    return this.activeProductId ? (new n.m).getCachedProductById(this.activeProductId) : null
                },
                pushToHistory: function() {
                    if (this.getDocumentTitle() && (document.title = this.getDocumentTitle()), this._shouldPushToHistory()) {
                        var t = this.getObject(),
                            e = this.getTitle(),
                            i = this.getUrl();
                        this.openedFirstTime || this.activeProductId && !c.$.isClicked ? (o.DY.isVariantChanged && (t.action = l.dB.EVENT_PRODUCT_CHOOSE), window.history.replaceState(t, e, i)) : window.history.pushState(t, e, i)
                    }
                    o.DY.isVariantChanged = !1, c.$.isClicked = !1
                },
                _shouldPushToHistory: function() {
                    var t = [l.dB.EVENT_PRODUCTS_LOADED, l.dB.EVENT_TOGGLE_LOCK];
                    return !this.skipHistory && !this.geoElementId && -1 === t.indexOf(this.action)
                },
                _hasUrlParams: function() {
                    return this._hasFilter() || this.productSearchKeywords || this.activeTab || this.productsViewPage > 1
                },
                _hasFilter: function() {
                    return this.filter || !$.isEmptyObject(this.filter)
                }
            });
            h.createFromObject = function(t, e) {
                var i = new h;
                if (!t) return i;
                for (var n in t) i[n] = t[n];
                var o = t.category ? JSON.parse(t.category) : null;
                return i.products = t.products ? JSON.parse(t.products) : [], i.category = o ? (new r.PFProductsCatalogUtilsStore).categories.getById(o.id) : null, i.filter = t.filter ? JSON.parse(t.filter) : {}, i.isOnPopstate = void 0 !== e && e, i
            }, h.clone = function(t, e) {
                !t instanceof h && (t = h.createFromObject(t));
                var i = new h;
                for (var n in t)
                    if ("function" != typeof t[n]) {
                        var r = t[n];
                        r && !$.isEmptyObject(r) || !e[n] || (r = e[n]), i[n] = r
                    } return i
            }, h.createAndDispatch = function(t, e) {
                var i = new h;
                for (var n in i.action = t, e) "productsOrVariants" !== n && (i[n] = e[n]);
                if (e.productsOrVariants)
                    for (var r in i.totalProductCount = e.totalCount || null, e.productsOrVariants) {
                        var o = e.productsOrVariants[r];
                        o instanceof a.O ? i.variantIds.push(o.variantId) : i.products.push(o.productId)
                    }
                var s = document.createEvent("CustomEvent");
                s.initCustomEvent(t, !1, !0, i), document.dispatchEvent(s)
            }, l.v2.createAndDispatchEvent = h.createAndDispatch, l.v2.marketingParams = ["utm_source", "utm_medium", "utm_campaign", "utm_content"], window && ((globalThis || {}).PFProductsCatalogUtilsState = h)
        },
        58270: (t, e, i) => {
            "use strict";
            i.d(e, {
                u: () => o
            });
            var n = i(87457),
                r = i(78009);
            const o = {
                toggleLock(t) {
                    n.l.createAndDispatch(r.dB.EVENT_TOGGLE_LOCK, {
                        isLocked: t
                    })
                }
            };
            (globalThis || {}).PFProductsCatalogUtilsStateHelpers = o
        },
        8627: (t, e, i) => {
            "use strict";
            i.d(e, {
                Q: () => u
            });
            var n = i(3044),
                r = i(52307),
                o = i(51122);
            const a = Class({
                _state: null,
                _categoriesStore: null,
                __construct: function() {
                    this._categoriesStore = new r.M
                },
                apply: function(t) {
                    return this._state = t, this[t.action] && this[t.action](), this
                },
                continue: function(t) {
                    return t && t(this._state), this
                },
                productCatalogProductChosen: function() {
                    this._categoriesStore.getPath().filter((function(t) {
                        return t.isEmbroideryShirts()
                    })).length > 0 && (0, n.z)(this._state.activeProductId).rememberLastUsedTechnique(o.V_)
                }
            });
            window && ((globalThis || {}).PFProductsCatalogUtilsMiddleware = a);
            var s = i(87457),
                l = i(26750),
                c = (i(37529), i(20833)),
                d = i(78009);
            const u = Class({
                events: [d.dB.EVENT_NAME, d.dB.EVENT_ALL_LOADED, d.dB.EVENT_PRODUCTS_FILTER, d.dB.EVENT_PRODUCTS_LOADED, d.dB.EVENT_PRODUCT_CHOOSE, d.dB.EVENT_TAB_CHOOSE, d.dB.EVENT_VARIANT_CHANGED, d.dB.EVENT_TOGGLE_LOCK],
                params: null,
                state: null,
                middleware: null,
                __construct: function(t) {
                    this.params = t, this.state = new s.l, this.middleware = new a, this._initEventHandler(), this._initEventListeners()
                },
                goTo: function(t, e) {
                    var i = {
                        category: t && t,
                        activeProductId: e && e.productId,
                        productSearchKeywords: this._getFromUrl("search"),
                        activeTab: (new c.R).hash,
                        filter: u.getFiltersFromUrl(),
                        productColor: this._getFromUrl("color"),
                        productSize: this._getFromUrl("size"),
                        openDesigner: this._getFromUrl("openDesigner"),
                        quickDesign: this._getFromUrl("quickDesign"),
                        productOutlineColor: this._getFromUrl("outlineColor"),
                        productEmbroiderySubTechnique: this._getFromUrl("embroiderySubTechnique"),
                        activeVariantId: parseInt(this._getFromUrl("variant")),
                        skipHistory: !t,
                        openedFirstTime: !0,
                        productsViewPage: parseInt(this._getFromUrl("page")),
                        productTechnique: this._getFromUrl("technique"),
                        geoElementId: this._getFromUrl("geoElementId")
                    };
                    s.l.createAndDispatch(e ? d.dB.EVENT_PRODUCT_CHOOSE : d.dB.EVENT_NAME, i)
                },
                goToIndex: function() {
                    s.l.createAndDispatch(d.dB.EVENT_NAME, {
                        category: new l.p
                    })
                },
                getCatalogType: function() {
                    return this.params.catalogType
                },
                popState: function(t) {
                    this.state = s.l.createFromObject(t.state, !0), this.update()
                },
                addState: function(t) {
                    this.state = t, !this.params.skipHistory && t.pushToHistory()
                },
                update: function() {
                    this.params.onUpdate && this.middleware.apply(this.state).continue(this.params.onUpdate)
                },
                updateParams: function(t) {
                    this._destroyEventListeners(), this.params = t, this._initEventHandler(), this._initEventListeners()
                },
                _getFromUrl: function(t) {
                    var e = new c.R;
                    return e.query[t] ? e.query[t] : null
                },
                _initEventHandler: function() {
                    this._changeHandlerObject = {
                        handleEvent: u.onChange.bind(this, this.params)
                    }
                },
                _initEventListeners: function() {
                    window.onpopstate = this.popState, this.events.map(this._addListener)
                },
                _destroyEventListeners: function() {
                    this.events.map(this._removeListener)
                },
                _addListener: function(t) {
                    document.addEventListener(t, this._changeHandlerObject, !0)
                },
                _removeListener: function(t) {
                    document.removeEventListener(t, this._changeHandlerObject, !0)
                }
            });
            u.instance = null, u.getInstance = function(t) {
                return u.instance || (u.instance = new u(t)), u.instance
            }, u.onChange = function(t, e) {
                var i = u.getInstance(t),
                    n = s.l.clone(e.detail, {
                        category: i.state.category,
                        prefix: i.params.prefix
                    });
                n.catalogType = i.getCatalogType(), i.addState(n), i.update()
            }, u.getFiltersFromUrl = function() {
                var t = new c.R,
                    e = {};
                for (var i in d.dB.FILTER_TYPES) {
                    var n = (t.query[i] || "").split("!") || [];
                    n = n.filter((function(t) {
                        return !!t
                    })), e[d.dB.FILTER_TYPES[i]] = n
                }
                return e
            }, u.Par = Class({
                productsCatalog: null,
                prefix: "",
                onUpdate: null,
                skipHistory: !1,
                catalogType: d.dB.TYPE_PP
            }), window && ((globalThis || {}).PFProductsCatalogUtilsRouter = u)
        },
        90675: (t, e, i) => {
            "use strict";
            i.d(e, {
                a: () => u
            });
            var n = i(23343),
                r = i(76229),
                o = i(58334),
                a = i(20833),
                s = i(9651),
                l = i(91128),
                c = i(44353);
            const d = function(t, e, i) {
                let d, u;
                this._variantId = null, t instanceof o.O ? (u = t.getCachedProduct(), d = t, this._variantId = d.variantId) : u = t, this._onProfitChangeCallback = i, this._price = d ? d.priceData.price : u.priceRange.minPrice, this._currency = d ? d.priceData.currency : u.priceRange.currency, this._productId = u.productId;
                let p = new a.R(u.catalogPageUrl);
                d && (p.query.variantId = d.variantId), this._nodeInputPrice = (0, s.U)({
                    tag: "input",
                    type: "number",
                    className: "products-pricing__profit-input",
                    value: n.O.getDisplayValueForCurrency(this._price + parseFloat(e)),
                    attr: {
                        step: n.O.getDisplayCurrencyIncrementStep()
                    },
                    prop: {
                        onkeyup: $.proxy(this._onPriceKeyUp, this),
                        onchange: $.proxy(this._onPriceOnChange, this)
                    }
                });
                const h = c.y.getProductImageByType(u.images, u.mainCatalogCategoryId),
                    f = (null == h ? void 0 : h.primary) || u.urlImage;
                this.node = (0, s.U)({
                    tag: "tr",
                    els: [{
                        tag: "td",
                        attr: {
                            width: "110px"
                        },
                        style: {
                            minWidth: "80px"
                        },
                        els: [{
                            tag: "a",
                            href: p,
                            els: [{
                                tag: "img",
                                src: l.WF,
                                data: {
                                    src: f
                                },
                                className: "img-responsive",
                                title: d ? d.name : u.getFullTitle()
                            }]
                        }]
                    }, {
                        tag: "td",
                        style: {
                            verticalAlign: "middle"
                        },
                        els: [{
                            tag: "a",
                            href: p,
                            text: d ? d.name : u.getFullTitle(),
                            style: {
                                color: "#626262"
                            }
                        }]
                    }, {
                        tag: "td",
                        style: {
                            verticalAlign: "middle",
                            textAlign: "center"
                        },
                        text: prettyMoney(this._price, this._currency)
                    }, {
                        tag: "td",
                        style: {
                            verticalAlign: "middle",
                            paddingRight: 0
                        },
                        els: [r.N.getCurrencySymbol(this._currency) + " ", this._nodeInputPrice]
                    }, {
                        tag: "td",
                        className: "text-center",
                        style: {
                            verticalAlign: "middle"
                        },
                        els: [this.nodeProfit = (0, s.U)({
                            tag: "b"
                        })]
                    }]
                }), this._renderProfit()
            };
            (d.prototype = new s.U.Base)._renderProfit = function() {
                var t = parseFloat(this._nodeInputPrice.value);
                t = isNaN(t) ? this._price : t, this.nodeProfit.textContent = prettyMoney(t - this._price, this._currency), this._onProfitChangeCallback && this._onProfitChangeCallback(t - this._price)
            }, d.prototype._onPriceKeyUp = function() {
                var t = parseFloat(this._nodeInputPrice.value);
                isNaN(t) || this._renderProfit()
            }, d.prototype._onPriceOnChange = function() {
                let t = parseFloat(this._nodeInputPrice.value);
                t = isNaN(t) || t < this._price ? this._price : t, this._nodeInputPrice.value = n.O.getDisplayValueForCurrency(t), this._renderProfit()
            }, d.prototype.getProfit = function() {
                return parseFloat(this._nodeInputPrice.value) - this._price
            }, d.prototype.setUserProfit = function(t) {
                t = parseFloat(t), isNaN(t) && (t = 0), this._nodeInputPrice.value = n.O.getDisplayValue(t + this._price), this._renderProfit()
            }, (globalThis || {}).PFProductsPricingRetailPriceViewRow = d;
            const u = function(t, e) {
                this._userProfit = e || 10, this.productsOrVariants = t, this._lastProfit = {}, this._rows = [], this.node = (0, s.U)({
                    tag: "table",
                    className: "table",
                    els: [{
                        tag: "thead",
                        els: [{
                            tag: "tr",
                            els: [{
                                tag: "th",
                                text: dlang("site", "Product"),
                                attr: {
                                    colspan: 2
                                }
                            }, {
                                tag: "th",
                                style: {
                                    width: "135px"
                                },
                                els: [dclang("site", "You buy at [price]", "You buy at") + " ", {
                                    tag: "span",
                                    style: {
                                        color: "#f0473d"
                                    },
                                    text: "*"
                                }]
                            }, {
                                tag: "th",
                                style: {
                                    width: "135px"
                                },
                                els: [dclang("site", "You sell at [price]", "You sell at") + " ", {
                                    tag: "span",
                                    style: {
                                        color: "#f0473d"
                                    },
                                    text: "**"
                                }]
                            }, {
                                tag: "th",
                                style: {
                                    width: "135px"
                                },
                                text: dlang("site", "Your profit")
                            }]
                        }]
                    }, this.nodeBody = (0, s.U)({
                        tag: "tbody"
                    })]
                })
            };
            u.prototype = new s.U.Base, u.prototype.append = function(t) {
                return this._render(this.productsOrVariants), this.node.append(t), this
            }, u.prototype.setItems = function(t) {
                this._render(t)
            }, u.prototype._render = function(t) {
                s.U.clearNode(this.nodeBody);
                var e = [];
                for (var i in t) {
                    var n, r = t[i],
                        o = this._lastProfit[r.productId || r.variantId];
                    n = o || (r.priceRange ? r.priceRange.minRetailPrice - r.priceRange.minPrice : r.priceData ? r.priceData.retailPrice - r.priceData.price : this._userProfit), e.push(new d(r, n, $.proxy(this._onProfitChanged, this, r))), this._lastProfit[r.productId || r.variantId] = n, e[i].append(this.nodeBody)
                }
                this._rows = e, this.productsOrVariants = t
            }, u.prototype.getProfit = function() {
                return this._userProfit
            }, u.prototype._onProfitChanged = function(t, e) {
                this._lastProfit[t.productId || t.variantId] = parseFloat(e)
            }, u.prototype.getProductOrVariantProfit = function(t) {
                return this._lastProfit[t.productId || t.variantId] || this._userProfit
            }, u.prototype.setUserProfit = function(t) {
                for (var e in this._userProfit = parseFloat(t), this._rows) this._rows[e].setUserProfit(t)
            }, (globalThis || {}).PFProductsPricingRetailPriceView = u
        },
        28053: (t, e, i) => {
            "use strict";
            i.d(e, {
                $: () => a,
                C: () => o
            });
            var n = i(58334),
                r = i(15425);
            const o = {
                    fastestDelivery: function(t, e) {
                        t = t instanceof n.O ? t.getCachedProduct() : t, e = e instanceof n.O ? e.getCachedProduct() : e;
                        const i = this._outOfStockPriority(t, e),
                            o = (0, r.xX)();
                        return 0 !== i ? i : this._getFastDeliveryScore(e, t, o) - this._getFastDeliveryScore(t, e, o)
                    },
                    _getTimestampFromDate: t => Math.floor(new Date(t).getTime() / 1e3),
                    _getFastDeliveryScore(t, e, i) {
                        var n, r;
                        if (null === (n = t.estimateDelivery) || void 0 === n || !n.fromDays || null === (r = e.estimateDelivery) || void 0 === r || !r.fromDays) return 0;
                        let o = t.estimateDelivery.fromDays,
                            a = e.estimateDelivery.fromDays,
                            s = t.estimateDelivery.toDays,
                            l = e.estimateDelivery.toDays;
                        return i || (o = this._getTimestampFromDate(t.estimateDelivery.from), a = this._getTimestampFromDate(e.estimateDelivery.from), s = this._getTimestampFromDate(t.estimateDelivery.to), l = this._getTimestampFromDate(e.estimateDelivery.to)), (o < a ? 2 : 0) + (a > o ? 2 : 0) + (s - o < l - a ? 1 : 0)
                    },
                    isNew: function(t, e) {
                        t = t instanceof n.O ? t.getCachedProduct() : t, e = e instanceof n.O ? e.getCachedProduct() : e;
                        const i = this._outOfStockPriority(t, e);
                        return 0 !== i ? i : this._getSortByNewPriority(e) - this._getSortByNewPriority(t)
                    },
                    _getSortByNewPriority(t) {
                        const e = t.launchedAt / 100;
                        return (t.hasBetaAccess ? 1e9 : 0) + (t.isNew ? 1e8 + e : 0) + (t.isSuggested ? 1e7 : 0) + (t.isPopular ? 1e6 : 0) + (t.hasClearance ? -1e5 : 0) + (t.isPrintfulOriginal ? 5e4 : 0) + t.rating
                    },
                    popular: function(t, e) {
                        t = t instanceof n.O ? t.getCachedProduct() : t, e = e instanceof n.O ? e.getCachedProduct() : e;
                        const i = this._outOfStockPriority(t, e);
                        return 0 !== i ? i : this._getSortByMostPopularPriority(e) - this._getSortByMostPopularPriority(t)
                    },
                    _getSortByMostPopularPriority: t => (t.isSuggested ? 1e9 : 0) + (t.isPopular ? 1e8 : 0) + (t.hasBetaAccess ? 1e7 : 0) + (t.isNew ? 1e6 : 0) + (t.hasClearance ? -1e5 : 0) + (t.isPrintfulOriginal ? 5e5 : 0) + t.rating,
                    review: function(t, e) {
                        t = t instanceof n.O ? t.getCachedProduct() : t, e = e instanceof n.O ? e.getCachedProduct() : e;
                        const i = this._outOfStockPriority(t, e);
                        if (0 !== i) return i;
                        let r = 0,
                            o = 0,
                            a = 0,
                            s = 0;
                        return t.reviewRating && (r = t.reviewRating.rating || 0, a = t.reviewRating.reviewCount || 0), e.reviewRating && (o = e.reviewRating.rating || 0, s = e.reviewRating.reviewCount || 0), r - o == 0 ? s - a : o - r
                    },
                    priceLow: function(t, e) {
                        const i = this._outOfStockPriority(t, e);
                        if (0 !== i) return i;
                        return (t instanceof n.O ? t.priceData.price : t.priceRange.minPrice) - (e instanceof n.O ? e.priceData.price : e.priceRange.minPrice)
                    },
                    priceHigh: function(t, e) {
                        const i = this._outOfStockPriority(t, e);
                        return 0 !== i ? i : -1 * o.priceLow(t, e)
                    },
                    retailPriceLow: function(t, e) {
                        const i = this._outOfStockPriority(t, e);
                        if (0 !== i) return i;
                        return (t instanceof n.O ? t.priceData.retailPrice : t.priceRange.minRetailPrice) - (e instanceof n.O ? e.priceData.retailPrice : e.priceRange.minRetailPrice)
                    },
                    retailPriceHigh: function(t, e) {
                        const i = this._outOfStockPriority(t, e);
                        return 0 !== i ? i : -1 * o.retailPriceLow(t, e)
                    },
                    profitLow: function(t, e) {
                        const i = this._outOfStockPriority(t, e);
                        if (0 !== i) return i;
                        const r = t instanceof n.O ? t.priceData.retailPrice : t.priceRange.minRetailPrice,
                            o = e instanceof n.O ? e.priceData.retailPrice : e.priceRange.minRetailPrice;
                        return r - (t instanceof n.O ? t.priceData.price : t.priceRange.minPrice) - (o - (e instanceof n.O ? e.priceData.price : e.priceRange.minPrice))
                    },
                    profitHigh: function(t, e) {
                        const i = this._outOfStockPriority(t, e);
                        return 0 !== i ? i : -1 * o.profitLow(t, e)
                    },
                    favoritesAsc: function(t, e) {
                        return -1 * this._sortFavorite(t, e)
                    },
                    favoritesDesc: function(t, e) {
                        return this._sortFavorite(t, e)
                    },
                    _sortFavorite(t, e) {
                        t = t instanceof n.O ? t.getCachedProduct() : t, e = e instanceof n.O ? e.getCachedProduct() : e;
                        const i = this._outOfStockPriority(t, e);
                        if (0 !== i) return i;
                        let r = 0,
                            o = 0;
                        return t.addedToFavoritesAt && (r = t.addedToFavoritesAt || 0), e.addedToFavoritesAt && (o = e.addedToFavoritesAt || 0), r - o
                    },
                    _outOfStockPriority: function(t, e) {
                        return !(null != t && t.isTemporaryOutOfStock) == !(null != e && e.isTemporaryOutOfStock) ? 0 : null != t && t.isTemporaryOutOfStock ? 1 : -1
                    }
                },
                a = {
                    retailPriceLow: function(t, e, i, r) {
                        let o = t instanceof n.O ? t.priceData.price : t.priceRange.minPrice,
                            a = e instanceof n.O ? e.priceData.price : e.priceRange.minPrice;
                        return o += i, a += r, o - a
                    },
                    retailPriceHigh: function(t, e, i, n) {
                        return -1 * a.retailPriceLow(t, e, i, n)
                    },
                    profitLow: function(t, e, i, n) {
                        return i - n
                    },
                    profitHigh: function(t, e, i, n) {
                        return -1 * a.profitLow(t, e, i, n)
                    }
                };
            window && ((globalThis || {}).PFProductsPricingSortingMethods = o, (globalThis || {}).PFProductsPricingRetailSortMethods = a)
        },
        18730: (t, e, i) => {
            "use strict";
            i.d(e, {
                Y: () => n
            });
            const n = {
                fetchSizesFromVariants: function(t) {
                    var e = [];
                    for (var i in t) {
                        var n = t[i];
                        n.size && -1 === e.indexOf(n.size) && e.push(n.size)
                    }
                    return e
                }
            };
            (globalThis || {}).PFUtilsSizes = n
        },
        11097: (t, e, i) => {
            "use strict";
            i.d(e, {
                k: () => p
            });
            var n = i(44416),
                r = i(82320),
                o = i(14544),
                a = i(38032),
                s = i(281),
                l = i(37523),
                c = i(20833),
                d = i(9651),
                u = i(14684);
            const p = Class({
                _PRODUCTS_WITHOUT_REGION_POPOVER: [],
                _variants: [],
                _variant: null,
                _availableColors: null,
                _discontinuedColors: [],
                _disabledRegionColors: [],
                _unavailableColors: [],
                _sellingRegionLimitedColors: [],
                _selectedColor: null,
                _isHats: !1,
                nodeError: null,
                __construct: function(t, e, i, n) {
                    this.setVariants(t), this._allColors = this._getUniquePushableColors(t), this._productId = i, n && (this._marginClass = n);
                    var a = this._getColorCount();
                    if (0 !== a) {
                        if (1 === a)
                            for (var s in t) {
                                this._variant = t[s], this._setSelectedColor(this._variant.color);
                                break
                            }
                        var l = (new r.m).getCachedProductById(i);
                        l.isInCategory(o.s.CATEGORY_HATS) && (this._isHats = !0), this.node = (0, d.U)({
                            tag: "div",
                            className: this._marginClass || "margin-bottom-30",
                            els: [{
                                tag: "div",
                                className: "margin-bottom-5",
                                els: [{
                                    tag: "b",
                                    text: l.getColorPickerTitle(1)
                                }]
                            }, this._nodePicker = (0, d.U)({
                                tag: "div"
                            }), this.nodeError = (0, d.U)({
                                tag: "div",
                                className: "alert alert-danger text-center hidden padding-10 margin-top-15",
                                text: lang("Please choose a color!")
                            })]
                        }), this._onColorChangedCallback = e, this.render()
                    } else this.node = (0, d.U)({
                        tag: "div"
                    })
                },
                _render: function() {
                    var t;
                    if (d.U.clearNode(this._nodePicker), this._isButtonPicker())
                        for (var e in this._availableColors) {
                            t = this._availableColors[e];
                            var i = "pf-btn pf-btn-square pf-btn-outline pf-w-auto pf-mb-4 pf-mr-4 pf-px-4";
                            this._selectedColor === e && (i += " active"), this._unavailableColors.indexOf(e) > -1 && (i += " btn-default"), this._discontinuedColors.indexOf(e) > -1 && (i += " disabled"), (0, d.U)({
                                tag: "a",
                                className: i,
                                text: e,
                                onclick: this._onButtonSelectorPicked.bind(this, e)
                            }).append(this._nodePicker)
                        } else {
                            var n = new s.A;
                            n.maxCount = 1, n.showHuge = !0, n.preSelectFirst = !0, n.canDeselectLast = !1, n.colors = this._availableColors, n.onChange = this._onColorPicked, this._variant && (n.selectedColors = [this._variant.color]), this._picker = new l.X(n), this._picker.append(this._nodePicker);
                            var r = this._picker.getSelectedColors();
                            if (r) {
                                var o = this.getAvailableVariantByColor(r[0]);
                                o && this.setVariant(o)
                            }
                            var a = new c.R;
                            if (a.query.color)
                                for (t in this._availableColors) t === a.query.color && this._setSelectedColor(a.query.color)
                        }
                },
                render: function() {
                    this._picker ? (this._picker.render(), this.togglePopover()) : this._render()
                },
                _getColorCount: function() {
                    return Object.keys(this._availableColors).length
                },
                getValueCount: function() {
                    return this._getColorCount()
                },
                _onColorPicked: function(t) {
                    this._selectedColor = this._picker ? this._picker.getSelectedColors()[0] : null, t[0] === this._selectedColor && this._onColorChangedCallback(this._selectedColor), this.togglePopover(t[0])
                },
                _onButtonSelectorPicked: function(t) {
                    this._selectedColor = t, this._onColorChangedCallback(this._selectedColor), this._render()
                },
                setVariants: function(t) {
                    this._variants = t, this._availableColors = a.Q.fetchColorsFromVariants(this._variants)
                },
                getAvailableVariantByColor: function(t) {
                    for (var e in this._variants) {
                        var i = this._variants[e];
                        if (i.color === t) return i
                    }
                    return null
                },
                getColor: function() {
                    return this._selectedColor
                },
                setVariant: function(t) {
                    var e = this._getColorCount();
                    if (this._variant = t, this._variant) this._setSelectedColor(this._variant.color);
                    else if (1 === e)
                        for (var i in this._variants) {
                            this._variant = this._variants[i], this._setSelectedColor(this._variant.color);
                            break
                        }
                },
                setUnavailableColors: function(t) {
                    this._unavailableColors = t, this._isColorsAvailable() && this._picker.setUnavailableColors(t)
                },
                setDiscontinuedColors: function(t) {
                    this._discontinuedColors = t, this._isColorsAvailable() && this._picker.setDiscontinuedColors(t)
                },
                setDisabledRegionColors: function(t) {
                    this._disabledRegionColors = t, this._isColorsAvailable() && this._picker.setDisabledRegionColors(t)
                },
                setSellingRegionLimitedColors: function(t) {
                    this._sellingRegionLimitedColors = t, this._isColorsAvailable() && this._picker.setDisabledRegionColors(t)
                },
                setVariantsAndDisabledRegionColors: function(t, e, i) {
                    this.getAvailableColors() && (this.setVariants(t), this.setSelectedRegionDisabledValues(t, e, "color", i), this.setDisabledRegionColors(this.getSelectedRegionDisabledValues("color")), this.render())
                },
                _isColorsAvailable: function() {
                    return !(!this._getColorCount() || 0 === this._getColorCount()) && (!!this._picker || (this._render(), !1))
                },
                _isButtonPicker: function() {
                    for (var t in this._variants) {
                        var e = this._variants[t];
                        if (e.color && !e.colorCode) return !0
                    }
                    return !1
                },
                isValuePicked: function() {
                    return !!this.getColor()
                },
                hasAtLeastOneValue: function() {
                    return !!this._getColorCount()
                },
                hasAvailableColorsInSellingRegion() {
                    return Object.keys(this._availableColors).filter((t => {
                        var e, i;
                        return !(this.isColorDiscontinued(t) || this._sellingRegionLimitedColors.includes(t) || null !== (e = this._picker) && void 0 !== e && e.getDisabledRegionColors().includes(t) || null !== (i = this._picker) && void 0 !== i && i.getUnavailableColors().includes(t))
                    })).length > 0
                },
                togglePopover: function(t) {
                    if (!(t = t || this._selectedColor) || !this._picker) return;
                    let e = "",
                        i = "";
                    const r = this.getAvailableAttributeRegion(t, "color");
                    this.isColorDiscontinued(t) ? (e = p.POPOVER.DISCONTINUED.TITLE, i = p.POPOVER.DISCONTINUED.DESC, this._variants[0].size || (i = p.POPOVER.DISCONTINUED.DESC_COLOR_ONLY)) : this._sellingRegionLimitedColors.includes(t) ? e = this.hasAvailableColorsInSellingRegion() ? u.K.DESC_COLOR.replace("{linkStart}", "").replace("{linkEnd}", "") : "" : this._picker.getUnavailableColors().indexOf(t) > -1 || !r && this._picker.getDisabledRegionColors().indexOf(t) > -1 ? (e = n.z.POPOVER.UNAVAILABLE.TITLE, i = n.z.POPOVER.UNAVAILABLE.DESC, this._variants[0].size || (i = n.z.POPOVER.UNAVAILABLE.DESC_COLOR_ONLY)) : this._picker.getDisabledRegionColors().indexOf(t) > -1 && !this._PRODUCTS_WITHOUT_REGION_POPOVER.includes(this._productId) && (e = n.z.POPOVER.REGION.TITLE.replace("{region}", r), i = n.z.POPOVER.REGION.DESC), (e || i) && this._picker.showPopover(t, e, i)
                },
                isColorDiscontinued: function(t) {
                    return !!this._picker && this._picker.getDiscontinuedColors().includes(t)
                },
                getAvailableColors: function() {
                    var t = [];
                    for (var e in this._availableColors) - 1 === t.indexOf(e) && t.push(e);
                    return t
                },
                getAllColors() {
                    return [...this._allColors]
                },
                _setSelectedColor: function(t) {
                    this._selectedColor = t, this._picker && this._picker.setSelectedColor(t)
                },
                _getUniquePushableColors: t => t.reduce(((t, e) => {
                    let {
                        color: i,
                        isDisabledInPush: n,
                        hasStock: r
                    } = e;
                    return !i || t.includes(i) || n && !r || t.push(i), t
                }), [])
            }, n.z);
            p.POPOVER = {
                DISCONTINUED: {
                    TITLE: lang("Discontinued"),
                    DESC: dlang("generator", "Sorry, this size and color combination is discontinued. Please choose a different size and color combination."),
                    DESC_SIZE_ONLY: dlang("generator", "Sorry, this size is discontinued. Please choose a different size."),
                    DESC_COLOR_ONLY: dlang("generator", "Sorry, this color is discontinued. Please choose a different color.")
                }
            }, (globalThis || {}).PFVariantPickerColorPicker = p
        },
        62755: (t, e, i) => {
            "use strict";
            i.d(e, {
                J: () => u
            });
            var n = i(44416),
                r = i(9651),
                o = i(61756),
                a = i(51122),
                s = i(25046),
                l = i(48776),
                c = i(15425),
                d = i(14684);
            const u = Class({
                _showWarningPopup: !1,
                _isPopupBusy: !1,
                _itemsNode: null,
                isEmbroideryDiscountPopupOpen: !0,
                _hasMultipleTechniques: !0,
                _title: "",
                __construct: function(t) {
                    this._par = t, this.node = tag("div", "row no-gutters"), this._render(), this._scrollToAvailability(), o.NN.on(o.NN.PRODUCT_TECHNIQUE_SELECTED, this._onTechniqueChanged)
                },
                _render: function() {
                    r.U.clearNode(this.node), this._hasMultipleTechniques = this._par.techniques.length > 1, this._title = this._hasMultipleTechniques ? dlang("products", "Choose technique") : dlang("products", "Technique");
                    const t = `technique-picker ${this._hasMultipleTechniques?"row pf-d-flex text-center":""} pf-mb-24`;
                    tag("div", "col-12", [tag("div", "row pf-my-8", [tag("div", this._par.isGenerator ? "col-12" : "col-6", [tag("h6", "pf-h5 pf-m-0", [this._title, this._getTagNew()])]), tag("div", "col-6 " + (this._par.isGenerator ? "pf-d-none" : "pf-d-inline-block"), [tag("a", {
                        className: "pf-link pf-m-0 float-right",
                        onclick: this._scrollToGuidelines.bind(this),
                        id: "fileGuidelinesButton"
                    }, dlang("products", "File guidelines"))])]), tag("div", t, [this._itemsNode = tag("div")])]).append(this.node), this.updateTechniqueAvailability(this._par.regions)
                },
                _renderItems() {
                    const t = this._hasMultipleTechniques ? "col-12 pf-d-flex" : "";
                    r.U.clearNode(this._itemsNode), tag("div", {
                        className: t,
                        attr: {
                            role: "list",
                            "aria-label": this._title
                        }
                    }, this._par.techniques.map(this._renderItem)).append(this._itemsNode)
                },
                _renderItem: function(t) {
                    const e = this._isTechniqueDisabled(t.isGroup ? t : t.type),
                        i = this._techniquePickerParams(t, e);
                    e && !this._par.isMockupGenerator && (i.title = d.K.DESC_TECHNIQUE.replace("{linkStart}", "").replace("{linkEnd}", ""), i.data = {
                        toggle: "tooltip",
                        placement: "top",
                        container: "body"
                    });
                    const n = [t.label];
                    (t.isBeta || t.isNew) && n.push(tag("span", "pf-ml-4 pf-py-2 pf-badge pf-badge-small pf-badge--primary pf-text-white", t.isNew ? lang("New") : lang("Beta")));
                    const r = tag("a", i, n);
                    if (!this._par.isRegionUnavailable && this._par.hasEmbroideryDiscount && t.type === a.gj && window.abTesting && window.abTesting.isTestAssigned(57)) {
                        if (0 !== window.abTesting.getAbTestVariant(57)) {
                            tag("i", {
                                className: "pf-i pf-i-brightness-percent pf-text-red pf-i-18 pf-ml-4",
                                id: "embroidery-discount-icon",
                                attr: {
                                    "data-test": "single-prod-view-embroidery-discount-icon-35LqoqoSr1g1j17"
                                }
                            }).appendTo(r)
                        }
                        this._par.activeValue !== a.gj && 2 === window.abTesting.getAbTestVariant(57) && this.setTimeoutForInitialEmbroideryDiscountPopover()
                    }
                    return $(r).tooltip(), r
                },
                _techniquePickerParams(t, e) {
                    if (this._hasMultipleTechniques) {
                        const i = e && !this._par.isMockupGenerator,
                            n = this._isActive(t),
                            r = "disabled disabled-technique",
                            o = "active";
                        let a = "";
                        return i ? a = r : n && (a = o), {
                            className: `pf-btn pf-btn-text-center pf-btn-outline pf-width-max pf-mr-4 ${a}`,
                            onclick: this._onTechniquePicked.bind(this, t),
                            attr: {
                                role: "button"
                            }
                        }
                    }
                    return {
                        tag: "p",
                        className: "pf-text-gray-700 "
                    }
                },
                _getTagNew() {
                    return this._par.hasNewPlacement ? tag("span", "pf-ml-4 pf-py-2 pf-badge pf-badge-small pf-badge--primary pf-text-white", lang("New")) : ""
                },
                _isActive: function(t) {
                    return t.isGroup ? t.techniques.some((t => t.type === this._par.activeValue)) : this._par.activeValue === t.type
                },
                _onTechniqueChanged: function(t) {
                    t === this._par.activeValue || this._isTechniqueDisabled(t) || (this._isPopupBusy = !1, this._par.activeValue = t, this._render())
                },
                _onTechniquePicked: async function(t) {
                    if (this._isActive(t)) return;
                    if (t.isGroup) {
                        const e = t.techniques.find((t => {
                            let {
                                type: e
                            } = t;
                            return !this._isTechniqueDisabled(e)
                        }));
                        return void(e && await this._onTechniquePicked(e))
                    }
                    const e = t.type;
                    if (!this._isTechniqueDisabled(e))
                        if (this._showWarningPopup) {
                            if (!this._isPopupBusy) {
                                this._isPopupBusy = !0, setTimeout(function() {
                                    this._isPopupBusy = !1
                                }.bind(this), 1e3);
                                const {
                                    PFVariantPickerTechniquePickerPopup: t
                                } = await i.e(48779).then(i.bind(i, 64594));
                                new t(this._onTechniquePickedRe.bind(this, e))
                            }
                        } else this._onTechniquePickedRe(e)
                },
                _onTechniquePickedRe: function(t) {
                    this._isPopupBusy = !1, this._par.activeValue = t, this._render(), this._par.callback && this._par.callback(t)
                },
                toggleChangeTechniquePopup: function(t) {
                    this._showWarningPopup = t
                },
                _scrollToAvailability: function() {
                    $(window).load((function() {
                        "#availability" === window.location.hash && ($("html, body").animate({
                            scrollTop: $(".catalog__product__tabs").offset().top
                        }, 1e3), $(".catalog__product__tabs li#availability a").trigger("click"))
                    }))
                },
                _scrollToGuidelines: function() {
                    var t, e;
                    (l.ZP.push({
                        event: l.Bi,
                        category: l.Zn,
                        location: "technique selector",
                        name: "file guidelines",
                        flow: c.I4,
                        click_path_url: null,
                        block_index: null,
                        index: null,
                        customer_segment_id: null
                    }), $("html, body").animate({
                        scrollTop: $(".catalog__product__tabs").offset().top - $(".catalog__product__tabs .pf-tabs").outerHeight()
                    }, 1e3), $(".catalog__product__tabs li#tab-guidelines a").trigger("click").focus(), null !== (t = this._par) && void 0 !== t && t.activeValue) && (null === (e = document.querySelector(`.catalog__product__tabs #tab-${this._par.activeValue}`)) || void 0 === e || e.click())
                },
                updateTechniqueAvailability: function(t) {
                    if (this._par.regions = t, this._par.activeValue === a.gj && this._isTechniqueDisabled(this._par.activeValue) && !this._par.isMockupGenerator) {
                        const t = this._par.techniques.filter((t => t.type !== a.gj));
                        if (t.length) return void this._onTechniquePickedRe(t[0].type)
                    }
                    this._renderItems()
                },
                _isTechniqueDisabled: function(t) {
                    var e, i;
                    return !(null === (e = this._par) || void 0 === e || null === (i = e.regions) || void 0 === i || !i.length) && (t.isGroup ? t.techniques.every((t => {
                        let {
                            type: e
                        } = t;
                        return !this._par.techniqueAvailability[e]
                    })) : !this._par.techniqueAvailability[t])
                },
                toggleEmbroideryDiscountPopover(t) {
                    this.isEmbroideryDiscountPopupOpen = t;
                    const e = document.getElementById("embroidery-discount-icon");
                    if (t) {
                        const t = document.body.clientWidth - e.getBoundingClientRect().right,
                            i = this.buildEmbroideryDiscountPopupParams(t);
                        new s.Z(i).append(e)
                    } else {
                        const t = document.getElementById("embroidery-discount-popover");
                        null == t || t.remove()
                    }
                },
                buildEmbroideryDiscountPopupParams(t) {
                    const e = new s.L,
                        n = t < 270;
                    return e.components = {
                        popover: () => i.e(88056).then(i.bind(i, 28268))
                    }, e.template = '\n            <popover \n                id="embroidery-discount-popover" \n                :arrow-placement="arrowPlacement" \n                :closable="closable" \n                :position-absolute="positionAbsolute"\n                :position-style="positionStyle"\n                @close="emitEvent(\'onPopoverClose\', $event)"\n            >\n                <div slot="popover-content" \n                    class="pf-p-16 text-left"\n                    style="font-family: \'ProximaNova\', sans-serif"\n                    @click="emitEvent(\'onPopoverClick\', $event)"\n                >\n                    <h5 class="pf-h5">{{ popoverTitle }}</h5>\n                    <div class="pf-ui-body pf-text-muted" style="white-space: normal !important">\n                        {{ popoverText }}\n                    </div>\n                </div>\n            </popover>\n            ', e.initialData = {
                        arrowPlacement: n ? "bottom-center" : "left-top",
                        closable: !0,
                        positionAbsolute: !0,
                        positionStyle: {
                            top: n ? "-125px" : "-40px",
                            right: n ? "-130px" : "-290px",
                            width: "279px"
                        },
                        popoverTitle: dlang("products", "How about embroidery?"),
                        popoverText: dlang("products", "Choose embroidery and get the sale price discount")
                    }, e.emitEvent = (t, e) => {
                        e.stopPropagation(), "onPopoverClose" === t && this.toggleEmbroideryDiscountPopover(!1)
                    }, e
                },
                setTimeoutForInitialEmbroideryDiscountPopover() {
                    setTimeout((() => this.toggleEmbroideryDiscountPopover(!0)), 1e3)
                }
            }, n.z);
            (globalThis || {}).PFVariantPickerTechniquePicker = u
        },
        25194: (t, e, i) => {
            "use strict";

            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, a(n.key), n)
                }
            }

            function r(t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function o(t, e, i) {
                return (e = a(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function a(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            i.d(e, {
                K: () => s
            });
            let s = r((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), o(this, "techniques", []), o(this, "hasNewPlacement", !1), o(this, "activeValue", ""), o(this, "callback", null), o(this, "isGenerator", !1), o(this, "isMockupGenerator", !1), o(this, "regions", []), o(this, "techniqueAvailability", {}), o(this, "hasEmbroideryDiscount", !1), o(this, "isRegionUnavailable", !1)
            }));
            window && ((globalThis || {}).PFVariantPickerTechniquePickerPar = s)
        },
        6047: (t, e, i) => {
            "use strict";
            i.d(e, {
                Zg: () => _,
                yT: () => E
            });
            var n = i(39438),
                r = i(72820),
                o = i.n(r),
                a = i(31554),
                s = i.n(a),
                l = i(43336),
                c = i.n(l),
                d = i(81991),
                u = i.n(d),
                p = i(58151),
                h = i.n(p),
                f = i(89276),
                g = i.n(f),
                v = i(840),
                m = i.n(v);
            const _ = {
                    INPUT_ERROR: "Please set warehouse item type",
                    DIMENSION_WARNING: "Product has larger dimensions than allowed for pack-ins. Are you sure you want to continue?",
                    PACKIN: "Pack-in",
                    PRODUCT: "Product",
                    LENGTH_LIMIT_IN: 8,
                    WIDTH_LIMIT_IN: 6,
                    HEIGHT_LIMIT_IN: 1,
                    WEIGHT_LIMIT_OZ: 2,
                    HEIGHT_LOG_MESSAGE: "Product height too big for pack-in",
                    WEIGHT_LOG_MESSAGE: "Product weight too big for pack-in",
                    WIDTH_LENGTH_LOG_MESSAGE: "Product width or length too big for pack-in"
                },
                y = (n.W2, n.V_, n.AN, n._M, ["Raglan", "Ringer", "V-neck", "Crew neck", "Racerback"]),
                b = (n.W2, n.AN, n._M, n.V_, "illustration_biodegratable"),
                w = "illustration_eco_friendly_less_co2",
                P = "illustration_eco_friendly_saves_water",
                C = "illustration_organic_cotton",
                T = "illustration_plastic_mailers",
                k = "illustration_recycled_materials",
                S = "illustration_recycled_polyster",
                E = {
                    [b]: o(),
                    [w]: s(),
                    [P]: c(),
                    [C]: u(),
                    [T]: h(),
                    [k]: g(),
                    [S]: m()
                }
        },
        1250: (t, e, i) => {
            "use strict";
            async function n(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
                    o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                const a = document.getElementById(t);
                if (!a) {
                    if (o) {
                        const {
                            logError: e
                        } = await Promise.resolve().then(i.bind(i, 65613));
                        e(`Cannot find observable element #${t}`)
                    }
                    return !1
                }
                const s = new IntersectionObserver(((t, i) => r(t, i, a, e)), {
                    threshold: n
                });
                return s.observe(a), !0
            }

            function r(t, e, i, n) {
                t.length && t[0].isIntersecting && (e.unobserve(i), n())
            }
            i.d(e, {
                k: () => n
            })
        },
        64498: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => I,
                n: () => E
            });
            var n = i(61169),
                r = i(9651),
                o = i(25046),
                a = i(87826),
                s = i(79442);

            function l(t, e, i) {
                return (e = p(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, p(n.key), n)
                }
            }

            function u(t, e, i) {
                return e && d(t.prototype, e), i && d(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function p(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }

            function h(t, e) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, h(t, e)
            }

            function f(t) {
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
                    var i, n = m(t);
                    if (e) {
                        var r = m(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return g(this, i)
                }
            }

            function g(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return v(t)
            }

            function v(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function m(t) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, m(t)
            }

            function _(t, e, i) {
                y(t, e), e.set(t, i)
            }

            function y(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function b(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, P(t, e, "get"))
            }

            function w(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, P(t, e, "set"), i), i
            }

            function P(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var C = new WeakMap,
                T = new WeakMap,
                k = new WeakMap,
                S = new WeakSet;
            let E = function(t) {
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
                    }), e && h(t, e)
                }(i, t);
                var e = f(i);

                function i(t) {
                    var n, o, s;
                    return c(this, i), n = e.call(this), y(o = v(n), s = S), s.add(o), _(v(n), C, {
                            writable: !0,
                            value: ""
                        }), _(v(n), T, {
                            writable: !0,
                            value: null
                        }), _(v(n), k, {
                            writable: !0,
                            value: void 0
                        }), n.node = (0, r._)("div"), w(v(n), T, t), w(v(n), C, t.selectedValue || a.sg),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(v(n), S, O).call(v(n)), n
                }
                return u(i, [{
                    key: "getSelectedValue",
                    value: function() {
                        return b(this, C)
                    }
                }, {
                    key: "setIsShown",
                    value: function(t) {
                        b(this, k).setDataProp("isShown", t)
                    }
                }, {
                    key: "toggleChangeSubTechniquePopup",
                    value: function(t) {
                        b(this, k).setDataProp("isWarningShown", t)
                    }
                }, {
                    key: "setPrices",
                    value: function(t) {
                        b(this, k).setDataProp("prices", t)
                    }
                }]), i
            }(n.p);
            async function O() {
                const t = new o.L;
                t.components = {
                    "sub-technique-picker": () => i.e(75931).then(i.bind(i, 1898))
                }, t.template = '\n            <sub-technique-picker \n                :default-value="value"\n                :prices="prices"\n                :is-shown="isShown"\n                :is-warning-shown="isWarningShown"\n                :options="options"\n                :label="label"\n                :help-link-text="helpLinkText"\n                :disabled-techniques="disabledTechniques"\n                :primary-technique="primaryTechnique"\n                @selected="emitEvent(\'select\', $event)"/>\n        ', t.initialData = {
                    value: b(this, C),
                    prices: b(this, T).prices,
                    isShown: b(this, T).isShown,
                    isWarningShown: b(this, T).isWarningShown,
                    options: b(this, T).options,
                    label: b(this, T).label,
                    helpLinkText: b(this, T).helpLinkText,
                    disabledTechniques: b(this, T).disabledTechniques,
                    primaryTechnique: b(this, T).primaryTechnique
                }, t.plugins = {
                    store: (0, s.getVuex)()
                }, t.emitEvent = (t, e) => {
                    if ("select" === t) w(this, C, e), b(this, T).onChanged && b(this, T).onChanged(e)
                }, w(this, k, new o.Z(t)), b(this, k).append(this.node)
            }
            let I = u((function t() {
                c(this, t), l(this, "selectedValue", a.sg), l(this, "prices", {}), l(this, "onChanged", null), l(this, "isShown", !0), l(this, "options", []), l(this, "label", ""), l(this, "helpLinkText", ""), l(this, "disabledTechniques", []), l(this, "primaryTechnique", "")
            }))
        },
        26346: (t, e, i) => {
            "use strict";
            i.d(e, {
                J: () => v
            });
            var n = i(25046),
                r = i(61169),
                o = i(613);

            function a(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function s(t, e) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, s(t, e)
            }

            function l(t) {
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
                    var i, n = u(t);
                    if (e) {
                        var r = u(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return c(this, i)
                }
            }

            function c(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return d(t)
            }

            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, u(t)
            }

            function p(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function h(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, g(t, e, "get"))
            }

            function f(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, g(t, e, "set"), i), i
            }

            function g(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }

            function v(t) {
                return t ? new y : tag("div")
            }
            var m = new WeakMap,
                _ = new WeakSet;
            let y = function(t) {
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
                }(o, t);
                var e, i, n, r = l(o);

                function o() {
                    var t, e, i;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), t = r.call(this), p(e = d(t), i = _), i.add(e),
                        function(t, e, i) {
                            p(t, e), e.set(t, i)
                        }(d(t), m, {
                            writable: !0,
                            value: void 0
                        }), t.node = tag("div"),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(d(t), _, b).call(d(t)), t
                }
                return e = o, (i = [{
                    key: "destroy",
                    value: function() {
                        h(this, m) && (h(this, m).destroy(), f(this, m, null))
                    }
                }]) && a(e.prototype, i), n && a(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), o
            }(r.p);
            async function b() {
                if (!await (0, o.Tg)(o.rj)) return;
                const t = new n.L;
                t.components = {
                    "label-only-banner": () => i.e(83764).then(i.bind(i, 58060))
                }, t.template = "<label-only-banner/>", f(this, m, new n.Z(t)), h(this, m).append(this.node)
            }
        },
        29890: (t, e, i) => {
            "use strict";
            i.d(e, {
                d: () => N,
                s: () => x
            });
            var n = i(61169),
                r = i(281),
                o = i(9651),
                a = i(37523);

            function s(t, e, i) {
                return (e = u(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function l(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, u(n.key), n)
                }
            }

            function d(t, e, i) {
                return e && c(t.prototype, e), i && c(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function u(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function h(t) {
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
                    var i, n = v(t);
                    if (e) {
                        var r = v(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return f(this, i)
                }
            }

            function f(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return g(t)
            }

            function g(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function v(t) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, v(t)
            }

            function m(t, e) {
                y(t, e), e.add(t)
            }

            function _(t, e, i) {
                y(t, e), e.set(t, i)
            }

            function y(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function b(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }

            function w(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, C(t, e, "get"))
            }

            function P(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, C(t, e, "set"), i), i
            }

            function C(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var T = new WeakMap,
                k = new WeakMap,
                S = new WeakMap,
                E = new WeakMap,
                O = new WeakSet,
                I = new WeakSet;
            let N = function(t) {
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
                    }), e && p(t, e)
                }(i, t);
                var e = h(i);

                function i(t) {
                    var n;
                    return l(this, i), m(g(n = e.call(this)), I), m(g(n), O), _(g(n), T, {
                        writable: !0,
                        value: null
                    }), _(g(n), k, {
                        writable: !0,
                        value: null
                    }), _(g(n), S, {
                        writable: !0,
                        value: null
                    }), _(g(n), E, {
                        writable: !0,
                        value: null
                    }), n.node = (0, o._)("div"), P(g(n), T, t.availableColors), P(g(n), S, t.onChanged), P(g(n), k, t.activeColor || Object.keys(w(g(n), T))[0]), b(g(n), O, R).call(g(n)), n
                }
                return d(i, [{
                    key: "getSelectedColorCode",
                    value: function() {
                        const t = w(this, T)[w(this, k)];
                        return Array.isArray(t) ? t[0] : t
                    }
                }]), i
            }(n.p);

            function R() {
                const t = new r.A;
                t.maxCount = 1, t.showHuge = !0, t.canDeselectLast = !1, t.colors = w(this, T), t.onChange = b(this, I, D).bind(this), t.selectedColors = [w(this, k)], P(this, E, new a.X(t)), (0, o._)("div", "pf-mb-4", [(0, o._)("b", "", dlang("products", "Choose outline color"))]).append(this.node), w(this, E).append(this.node)
            }

            function D(t) {
                1 === t.length && (P(this, k, t[0]), w(this, S) && w(this, S).call(this, w(this, k), this.getSelectedColorCode()))
            }
            let x = d((function t() {
                l(this, t), s(this, "availableColors", {}), s(this, "activeColor", ""), s(this, "onChanged", null)
            }))
        },
        38053: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => y
            });
            var n = i(25046),
                r = i(61169);

            function o(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function a(t, e) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, a(t, e)
            }

            function s(t) {
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
                    var i, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return l(this, i)
                }
            }

            function l(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return c(t)
            }

            function c(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function d(t) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, d(t)
            }

            function u(t, e, i) {
                p(t, e), e.set(t, i)
            }

            function p(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function h(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, g(t, e, "get"))
            }

            function f(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, g(t, e, "set"), i), i
            }

            function g(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }
            var v = new WeakMap,
                m = new WeakMap,
                _ = new WeakSet;
            let y = function(t) {
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
                    }), e && a(t, e)
                }(l, t);
                var e, i, n, r = s(l);

                function l(t) {
                    var e, i, n;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), e = r.call(this), p(i = c(e), n = _), n.add(i), u(c(e), v, {
                            writable: !0,
                            value: void 0
                        }), u(c(e), m, {
                            writable: !0,
                            value: {}
                        }), e.node = tag("div"), f(c(e), m, t),
                        function(t, e, i) {
                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                            return i
                        }(c(e), _, b).call(c(e)), e
                }
                return e = l, (i = [{
                    key: "destroy",
                    value: function() {
                        h(this, v).destroy(), f(this, v, null)
                    }
                }]) && o(e.prototype, i), n && o(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), l
            }(r.p);
            async function b() {
                var t;
                const e = new n.L;
                e.components = {
                    "product-information-banner": () => i.e(47090).then(i.bind(i, 96721))
                }, e.template = '<product-information-banner\n            :content="content"\n            :flag-key="flagKey"\n            :data-test="dataTest"\n            :product-id="productId"\n             />', e.initialData = {
                    content: h(this, m).content,
                    flagKey: h(this, m).flagKey,
                    dataTest: h(this, m).dataTest,
                    productId: null !== (t = h(this, m).productId) && void 0 !== t ? t : null
                }, f(this, v, new n.Z(e)), h(this, v).append(this.node)
            }
        },
        48433: (t, e, i) => {
            "use strict";
            i.d(e, {
                UU: () => u,
                l3: () => l,
                xv: () => d,
                zU: () => p
            });
            var n = i(90227),
                r = i(61756),
                o = i(40),
                a = i(62442),
                s = i(78009);

            function l() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (t && t !== PF.Customer.personalOrdersStoreId && t > 0) return void(location.href = langUrl(`/dashboard/settings/${t}/store`));
                const i = [r.pC, r.ap];
                let n, l = !1;
                for (const t of i) r.e$(t) && (l = !0, n = t);
                if (l || s.dB.isProductPickable()) {
                    const t = new o.X;
                    t.modalTitle = dlang("generator", "Are you sure?"), t.contentText = dlang("generator", "If you leave, your changes won't be saved."), t.primaryBtnText = dlang("generator", "Stay"), t.secondaryBtnText = dlang("generator", "Leave"), t.onSecondaryBtnClick = () => {
                        !s.dB.isProductPickable() || (r.j8(r.y$), l) ? (r.j8(n), c(e, n)) : c(e, r.y$)
                    }, new a.p(t)
                } else c(e)
            }

            function c(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (n.k.isWindowSmallerThan(n.k.SIZES.MD)) {
                    var i = document.querySelector(".js-env-selling-region .nav__submenu a");
                    if (document.querySelector(".navbar-toggle").click(), document.querySelector(".js-env-selling-region").classList.contains("open")) return void i.focus();
                    document.querySelector("#header-b2b:not(.pf-d-none) #selling-region-menu-toggle, #header-b2c:not(.pf-d-none) #selling-region-menu-toggle-b2c").click(), setTimeout((() => {
                        i.focus()
                    }), 500)
                } else window.scrollTo(0, 0), setTimeout((function() {
                    r.j8(r.m_, t, e)
                }), 0)
            }

            function d(t) {
                const e = "PFCatalog:productEdt:" + t;
                try {
                    sessionStorage.removeItem(e)
                } catch (t) {}
            }

            function u(t) {
                l(t)
            }

            function p(t, e) {
                "Enter" !== e.key && "Spacebar" !== e.key && " " !== e.key || (e.preventDefault(), l(t, e))
            }
        },
        24115: (t, e, i) => {
            "use strict";
            i.d(e, {
                $x: () => d,
                At: () => u,
                Ct: () => P,
                D9: () => y,
                E0: () => p,
                F6: () => s,
                Gb: () => n,
                HF: () => o,
                L8: () => C,
                Qo: () => T,
                Uh: () => c,
                bt: () => k,
                dA: () => a,
                n0: () => w,
                tR: () => l,
                tV: () => r,
                yY: () => b
            });
            const n = "discontinued",
                r = "unavailableInRegion",
                o = "outOfStock",
                a = "unclickable",
                s = [n, r, o, a],
                l = "dropdownItem",
                c = "color",
                d = "colorSvg",
                u = "button",
                p = "oneSize",
                h = "swatches__item--unavailable",
                f = "pf-border--dashed disabled";

            function g(t) {
                return {
                    overlay: t,
                    isSelectable: !1,
                    isClickable: !0,
                    values: {},
                    popover: {
                        title: "",
                        description: ""
                    }
                }
            }
            const v = {
                    [n]: g("swatches__item--discontinued"),
                    [r]: g(h),
                    [o]: g(h)
                },
                m = {
                    [n]: {
                        overlay: f,
                        isSelectable: !1,
                        isClickable: !0,
                        values: {}
                    },
                    [r]: {
                        overlay: f,
                        isSelectable: !1,
                        isClickable: !0,
                        values: {}
                    },
                    [o]: {
                        overlay: f,
                        isSelectable: !1,
                        isClickable: !0,
                        values: {}
                    }
                },
                _ = {
                    [a]: {
                        isSelectable: !1,
                        isClickable: !1,
                        values: {}
                    }
                },
                y = {
                    [c]: v,
                    [u]: m,
                    [d]: _,
                    [p]: _,
                    [l]: m
                },
                b = "color",
                w = "size",
                P = "outlineColor",
                C = "one size",
                T = [b],
                k = "M8.8 4.1L8.8 12C8.8 12.4 \n8.8 12.6 8.9 12.6 9 12.7 9.3 12.7 9.9 12.7L10.4 12.7 10.4 14.5 4.6 14.5 4.6 12.7 5.1 12.7C5.7 12.7 6 \n12.7 6.1 12.6 6.2 12.6 6.2 12.4 6.2 12L6.2 4.1 4.7 4.1C4.6 4.1 4.6 4.1 4.5 4.1 4 4.1 3.8 4.2 3.5 4.3 \n3.3 4.6 3 5 2.5 5.9L2.3 6.3 0.7 5.8 1.8 1.5 13.2 1.5 14.3 5.8 12.7 6.3 12.5 5.9C12 5 11.7 4.6 11.5 4.3 \n11.2 4.2 11 4.1 10.5 4.1 10.4 4.1 10.4 4.1 10.3 4.1L8.8 4.1Z"
        },
        56472: (t, e, i) => {
            "use strict";
            i.d(e, {
                Lk: () => w,
                iN: () => C,
                lm: () => P,
                mY: () => k,
                pX: () => T
            });
            var n = i(24115),
                r = i(11097),
                o = i(50999),
                a = i(44416),
                s = i(55558),
                l = i(44353),
                c = i(69935),
                d = i(14684);

            function u(t) {
                var e;
                const i = t[0],
                    r = i.getCachedProduct(),
                    o = !i.size && (null == r ? void 0 : r.isEmbroidery()) && !r.isEmbroiderySample(),
                    a = (null === (e = i.size) || void 0 === e ? void 0 : e.toLowerCase()) === n.L8 || o,
                    {
                        sizes: s,
                        colors: c,
                        formattedValues: d
                    } = function(t, e) {
                        return t.reduce(((t, i) => {
                            let {
                                size: n,
                                color: r,
                                colorCode: o,
                                colorCode2: a,
                                translatedSize: s,
                                isDisabledInPush: l,
                                hasStock: c
                            } = i;
                            return l && !c || (!n && !e || t.sizes.includes(n) || (t.formattedValues.size.push({
                                value: n,
                                title: s
                            }), t.sizes.push(n)), r && !t.colors.includes(r) && (t.formattedValues.color.push({
                                value: r,
                                title: r,
                                extra: {
                                    label: lang("Color {color}").replace("{color}", r),
                                    codes: [o, a].filter(Boolean),
                                    tooltip: `${r} ${o}`
                                }
                            }), t.colors.push(r))), t
                        }), {
                            sizes: [],
                            colors: [],
                            formattedValues: {
                                color: [],
                                size: []
                            }
                        })
                    }(t, a),
                    u = {
                        size: s.reduce(((t, e) => (t[e] = c.map((t => ({
                            color: t
                        }))), t)), {}),
                        color: c.reduce(((t, e) => (t[e] = s.map((t => ({
                            size: t
                        }))), t)), {})
                    };
                return {
                    formattedValues: {
                        color: d.color,
                        size: d.size.sort(((t, e) => {
                            let {
                                value: i
                            } = t, {
                                value: n
                            } = e;
                            return l.y.sizeSortingCallback(i, n)
                        }))
                    },
                    valueCombos: u,
                    isOneSize: a
                }
            }

            function p(t, e, i) {
                const s = u(e),
                    l = e[0],
                    c = {
                        color: !!s.formattedValues.color.length,
                        size: !!s.formattedValues.size.length || s.isOneSize
                    },
                    p = [],
                    h = {},
                    f = {},
                    g = {},
                    v = function(t, e) {
                        let {
                            size: i,
                            color: s
                        } = t;
                        return {
                            [n.Gb]: {
                                color: {
                                    title: r.k.POPOVER.DISCONTINUED.TITLE,
                                    description: i ? r.k.POPOVER.DISCONTINUED.DESC : r.k.POPOVER.DISCONTINUED.DESC_COLOR_ONLY
                                },
                                size: {
                                    title: o.N.POPOVER.DISCONTINUED.TITLE,
                                    description: s ? o.N.POPOVER.DISCONTINUED.DESC : o.N.POPOVER.DISCONTINUED.DESC_SIZE_ONLY
                                }
                            },
                            [n.tV]: {
                                color: {
                                    title: e ? d.K.DESC_COLOR.replace("{linkStart}", "").replace("{linkEnd}", "") : a.z.POPOVER.UNAVAILABLE.TITLE,
                                    description: e ? "" : i ? a.z.POPOVER.UNAVAILABLE.DESC : a.z.POPOVER.UNAVAILABLE.DESC_COLOR_ONLY
                                },
                                size: {
                                    title: e ? d.K.DESC_SIZE.replace("{linkStart}", "").replace("{linkEnd}", "") : a.z.POPOVER.UNAVAILABLE.TITLE,
                                    description: e ? "" : s ? a.z.POPOVER.UNAVAILABLE.DESC : a.z.POPOVER.UNAVAILABLE.DESC_SIZE_ONLY
                                }
                            },
                            [n.HF]: {
                                color: {
                                    title: a.z.POPOVER.UNAVAILABLE.TITLE,
                                    description: i ? a.z.POPOVER.UNAVAILABLE.DESC : a.z.POPOVER.UNAVAILABLE.DESC_COLOR_ONLY
                                },
                                size: {
                                    title: a.z.POPOVER.UNAVAILABLE.TITLE,
                                    description: s ? a.z.POPOVER.UNAVAILABLE.DESC : a.z.POPOVER.UNAVAILABLE.DESC_SIZE_ONLY
                                }
                            }
                        }
                    }(c, t);
                return Object.entries(c).forEach((t => {
                    let [e, r] = t;
                    if (!r) return;
                    switch (e) {
                        case n.yY:
                        case n.n0:
                            if (!l) break;
                            f[e] = [l[e]];
                            break;
                        default:
                            return void console.error(e + " not set up for new pickers")
                    }
                    p.push(e), h[e] = s.formattedValues[e],
                        function(t, e, i, r) {
                            n.F6.map((o => {
                                var a;
                                const s = e[i];
                                null !== n.D9 && void 0 !== n.D9 && null !== (a = n.D9[s]) && void 0 !== a && a[o] && (t[o] = t[o] || {}, t[o][i] = n.D9[s][o], t[o][i].isClickable && (t[o][i].popover = r[o][i]))
                            }))
                        }(g, i, e, v);
                    const o = null == g ? void 0 : g[n.Gb];
                    null != o && o[e] && (o[e].values = s.valueCombos[e])
                })), {
                    valueTypes: p,
                    values: h,
                    defaultSelectedValues: f,
                    availability: g
                }
            }

            function h(t, e, i, r, o) {
                const a = null == i ? void 0 : i[n.Gb],
                    s = null == i ? void 0 : i[n.dA],
                    l = null == i ? void 0 : i[n.HF];
                for (const c in t) {
                    const d = t[c];
                    e.forEach((t => {
                        var c, u;
                        const p = e.filter((e => e !== t));
                        switch (t) {
                            case n.yY:
                            case n.n0:
                                if (null != a && null !== (c = a[t]) && void 0 !== c && null !== (u = c.values) && void 0 !== u && u[d[t]]) {
                                    const e = a[t].values[d[t]];
                                    a[t].values[d[t]] = e.filter((t => {
                                        for (const e in t)
                                            if (t[e] !== d[e]) return !0;
                                        return !1
                                    })), a[t].values[d[t]].length || delete a[t].values[d[t]]
                                }
                                return void o.forEach((e => {
                                    null != s && s[t] ? y(i, n.dA, e, t, d, p) : f(r, e, d) || g(r, e, d) || (null != a && a[t] && v(r, e, d) ? y(i, n.Gb, e, t, d, p) : null != l && l[t] && m(r, e, d) && y(i, n.HF, e, t, d, p))
                                }));
                            default:
                                console.error(t + " not set up for new pickers")
                        }
                    }))
                }
            }

            function f(t, e, i) {
                return _(t, e, i, s.W.AVAILABILITY_IN_STOCK)
            }

            function g(t, e, i) {
                return _(t, e, i, s.W.AVAILABILITY_ON_DEMAND)
            }

            function v(t, e, i) {
                return _(t, e, i, s.W.AVAILABILITY_DISCONTINUED)
            }

            function m(t, e, i) {
                return _(t, e, i, s.W.AVAILABILITY_SUPPLIER_OUT_OF_STOCK)
            }

            function _(t, e, i, n) {
                return t.some((t => {
                    if (!(t in i.availabilityByTechniques)) return i.availability[t] === n;
                    const r = Object.keys(i.availabilityByTechniques[t]).filter((t => "regionAvailability" !== t)).reduce(((e, n) => (e[n] = i.availabilityByTechniques[t][n], e)), {});
                    return Object.values(r).some((t => t === n || (t[e] || null) === n))
                }))
            }

            function y(t, e, i, n, r, o) {
                var a;
                const s = o.reduce(((t, e) => (t[e] = r[e], t)), {});
                s.technique = i, t[e][n].values[r[n]] = null !== (a = t[e][n].values[r[n]]) && void 0 !== a ? a : [], t[e][n].values[r[n]].push(s)
            }

            function b(t, e, i, r, o) {
                const a = null == r ? void 0 : r[n.tV];
                if (!a) return;
                [...t.filter((t => !e.some((e => t.variantId === e.variantId)))), ...e.filter((e => !t.some((t => e.variantId === t.variantId))))].forEach((t => {
                    i.forEach((e => {
                        const s = i.filter((t => t !== e));
                        switch (e) {
                            case n.yY:
                            case n.n0:
                                return void o.forEach((i => {
                                    null != a && a[e] && y(r, n.tV, i, e, t, s)
                                }));
                            default:
                                console.error(e + " not set up for new pickers")
                        }
                    }))
                }))
            }

            function w(t, e, i, n, r) {
                const o = [],
                    a = t.filter((t => {
                        let {
                            variantId: i
                        } = t;
                        for (const t in e.allowedSellingRegions) {
                            const n = e.allowedSellingRegions[t];
                            if (e.variantsByRegion[n].includes(i)) return !0
                        }
                        return !1
                    }));
                e.allowedSellingRegions.forEach((t => {
                    o.push(e.abbrMap[t])
                }));
                const {
                    valueTypes: s,
                    values: l,
                    defaultSelectedValues: c,
                    availability: d
                } = p(i, t, n);
                return h(t, s, d, o, r), b(t, a, s, d, r), {
                    valueTypes: s,
                    values: l,
                    defaultSelectedValues: c,
                    availability: d
                }
            }

            function P(t, e, i, r) {
                const o = [],
                    a = {
                        [n.yY]: n.Uh,
                        [n.n0]: n.tR
                    },
                    s = t.filter((t => {
                        let {
                            variantId: i
                        } = t;
                        for (const t in e.allowedSellingRegions) {
                            const n = e.allowedSellingRegions[t];
                            if (e.variantsByRegion[n].includes(i)) return !0
                        }
                        return !1
                    }));
                e.allowedSellingRegions.forEach((t => {
                    o.push(e.abbrMap[t])
                }));
                const {
                    availability: l
                } = p(i, t, a), c = [n.yY, n.n0];
                return h(t, c, l, o, r), b(t, s, c, l, r), l
            }

            function C(t, e) {
                const i = {};
                return t.forEach((t => {
                    let {
                        size: n,
                        color: r,
                        price: o,
                        translatedSize: a,
                        urlImage: s
                    } = t;
                    n && (i[n] || (i[n] = new c.GQ({
                        value: n,
                        name: null != a ? a : n
                    })), i[n].image[r] = s, i[n].badge[r] = o ? prettyMoney(o, e) : null)
                })), i
            }

            function T(t, e, i, r) {
                return t.map((t => {
                    t.isSelectable = !0, t.isClickable = !0, t.overlay = null;
                    for (const s of n.F6) {
                        var o, a;
                        const l = null === (o = r[s]) || void 0 === o ? void 0 : o.size,
                            c = null == l || null === (a = l.values) || void 0 === a ? void 0 : a[t.value];
                        (null != c ? c : []).find((t => t.color === e && (!t.technique || t.technique === i))) && (t.isSelectable = l.isSelectable, t.isClickable = l.isClickable, t.overlay = s === n.HF ? dlang("products", "Out of stock") : null)
                    }
                    return t
                }))
            }

            function k(t, e, i, r) {
                return t.some((t => {
                    for (const s of n.F6) {
                        var o, a;
                        const n = null === (o = r[s]) || void 0 === o ? void 0 : o.size,
                            l = null == n || null === (a = n.values) || void 0 === a ? void 0 : a[t];
                        if (null == n || !n.isSelectable) return !1;
                        for (const t of null != l ? l : [])
                            if (t.color === e && (!t.technique || t.technique === i)) return !1
                    }
                    return !0
                }))
            }
        },
        71824: (t, e, i) => {
            "use strict";
            i.d(e, {
                B$: () => d,
                O7: () => s,
                R0: () => m,
                Xz: () => u,
                ZW: () => h,
                ak: () => _,
                bD: () => f,
                bS: () => l,
                cq: () => v,
                eN: () => o,
                lI: () => g,
                nP: () => r,
                oy: () => c,
                r8: () => a,
                rE: () => n,
                vP: () => p
            });
            const n = "pickerController",
                r = "m_setAllSpecialValues",
                o = "m_setSelectedValues",
                a = "m_setSelectedValue",
                s = "m_setAllValues",
                l = "m_setValueTypes",
                c = "m_setHiddenTypes",
                d = "m_setErrors",
                u = "g_allSpecialValues",
                p = "g_specialValues",
                h = "g_selectedValues",
                f = "g_allValues",
                g = "g_valueTypes",
                v = "g_hiddenTypes",
                m = "g_errors";

            function _(t) {
                return n + "/" + t
            }
        },
        19728: (t, e, i) => {
            "use strict";
            i.d(e, {
                C: () => a
            });
            var n = i(33848);

            function r(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function o(t, e, i) {
                return e && r(t.prototype, e), i && r(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            let a = o((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.event = n.KU, this.category = "product catalog", this.location = "side-menu", this.name = "", this.flow = "", this.block_index = null, this.level = null, this.customer_segment_id = null, this.click_url_path = "", this.id = 0, this.main_category_name = "", this.main_category_id = 0
            }))
        },
        20039: (t, e, i) => {
            "use strict";
            i.d(e, {
                JJ: () => c,
                Tv: () => y,
                YK: () => d,
                _F: () => _,
                cT: () => a,
                hP: () => l,
                nB: () => r,
                qW: () => s,
                qd: () => b,
                tG: () => o
            });
            var n = i(20833);

            function r(t) {
                if (null == t || !t.length) return "";
                if ((null == t ? void 0 : t.length) <= 1) return `background: ${t[0]}`;
                const e = 100 / t.length;
                return `background: linear-gradient(to right, ${t.map(((t,i)=>`${t} ${e*i}% ${e*i+e}%`)).join(", ")})`
            }

            function o(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                e.push(t.id), null != t && t.children.length && (null == t || t.children.forEach((t => {
                    o(t, e)
                })))
            }

            function a(t) {
                const e = [],
                    i = new n.R;
                Object.entries(i.query).forEach((t => {
                    let [i, n] = t;
                    "string" == typeof n && m.includes(i) && (i in v && (i = v[i]), e.push({
                        type: i,
                        values: n.split("!")
                    }))
                })), e.length && t && t(e)
            }
            const s = "variants.color",
                l = "variants.size",
                c = "branding_options",
                d = "techniques",
                u = "features",
                p = "special_offer",
                h = "models",
                f = "brand",
                g = "material",
                v = {
                    variants_size: l,
                    variants_color: s
                },
                m = [s, l, c, d, u, p, h, f, g],
                _ = {
                    [s]: dlang("products", "Clear all colors"),
                    [l]: dlang("products", "Clear all sizes"),
                    [c]: dlang("products", "Clear all branding options"),
                    [d]: dlang("products", "Clear all techniques"),
                    [u]: dlang("products", "Clear all features"),
                    [p]: dlang("products", "Clear all special offers"),
                    [h]: dlang("products", "Clear all models"),
                    [f]: dlang("products", "Clear all brands"),
                    [g]: dlang("products", "Clear all materials")
                },
                y = "side",
                b = "top"
        },
        56897: (t, e, i) => {
            "use strict";
            i.d(e, {
                C: () => w
            });
            var n = i(61169),
                r = i(25046);

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (r = n.key, o = void 0, "symbol" == typeof(o = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var n = i.call(t, e || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(r, "string")) ? o : String(o)), n)
                }
                var r, o
            }

            function s(t, e) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, s(t, e)
            }

            function l(t) {
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
                    var i, n = u(t);
                    if (e) {
                        var r = u(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return c(this, i)
                }
            }

            function c(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return d(t)
            }

            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, u(t)
            }

            function p(t, e) {
                f(t, e), e.add(t)
            }

            function h(t, e, i) {
                f(t, e), e.set(t, i)
            }

            function f(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function g(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, m(t, e, "get"))
            }

            function v(t, e, i) {
                return function(t, e, i) {
                    if (e.set) e.set.call(t, i);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = i
                    }
                }(t, m(t, e, "set"), i), i
            }

            function m(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
                return e.get(t)
            }

            function _(t, e, i) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }
            var y = new WeakMap,
                b = new WeakSet;
            let w = function(t) {
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
                }(c, t);
                var e, i, n, r = l(c);

                function c(t, e) {
                    var i;
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return o(this, c), p(d(i = r.call(this)), b), h(d(i), y, {
                        writable: !0,
                        value: void 0
                    }), i.node = tag("div", "products-filter-mke"), _(d(i), b, P).call(d(i), t, e, n, a, s), i
                }
                return e = c, (i = [{
                    key: "destroy",
                    value: function() {
                        g(this, y).destroy(), v(this, y, null)
                    }
                }]) && a(e.prototype, i), n && a(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(n.p);
            async function P(t, e, n, o, a) {
                const s = new r.L;
                s.components = {
                    "products-filter": () => Promise.all([i.e(91642), i.e(33348), i.e(23485), i.e(22819)]).then(i.bind(i, 92911))
                }, s.template = '\n            <products-filter :categoryIds="categoryIds" :sorting-node="sortingNode" :active-category-id="categoryId" :store-id="storeId" :is-favorite-products="favoriteProducts"/>\n        ', s.initialData = {
                    categoryIds: t,
                    categoryId: e,
                    sortingNode: n,
                    storeId: o,
                    favoriteProducts: a
                }, v(this, y, new r.Z(s)), g(this, y).append(this.node)
            }
        },
        2864: t => {
            t.exports = "https://static.cdn.printful.com/dist-pf/image-assets/favorites.b9d921109178a0754969e89018a4949c.svg"
        },
        34638: t => {
            t.exports = "https://static.cdn.printful.com/dist-pf/image-assets/warning.4d4371ed98da6fcd445eb2afe3324835.svg"
        },
        72820: t => {
            t.exports = "https://static.cdn.printful.com/dist-pf/image-assets/PF_Eco_Illustration_biodegratable.84bcc8741ba4be5a1a30979b91313d06.svg"
        },
        31554: t => {
            t.exports = "https://static.cdn.printful.com/dist-pf/image-assets/PF_Eco_Illustration_eco_friendly_less_co2.085563f46d62b1e14a251b8ea0391c3f.svg"
        },
        43336: t => {
            t.exports = "https://static.cdn.printful.com/dist-pf/image-assets/PF_Eco_Illustration_eco_friendly_saves_water.e4476051403879fd8470cf6dcc2cbad1.svg"
        },
        81991: t => {
            t.exports = "https://static.cdn.printful.com/dist-pf/image-assets/PF_Eco_Illustration_organic_cotton.1163a8840c3fa289094cd13cb46bfe68.svg"
        },
        58151: t => {
            t.exports = "https://static.cdn.printful.com/dist-pf/image-assets/PF_Eco_Illustration_plastic_mailers.63bb4325587921234ca3ea2c7365ba0b.svg"
        },
        89276: t => {
            t.exports = "https://static.cdn.printful.com/dist-pf/image-assets/PF_Eco_Illustration_recycled_materials.050de34863487a5cda70c66ea0ddc3ae.svg"
        },
        840: t => {
            t.exports = "https://static.cdn.printful.com/dist-pf/image-assets/PF_Eco_Illustration_recycled_polyester.8f3274ea593411d3ad536a731e11d514.svg"
        },
        28483: (t, e, i) => {
            var n = i(25063)();
            t.exports = n
        },
        47816: (t, e, i) => {
            var n = i(28483),
                r = i(3674);
            t.exports = function(t, e) {
                return t && n(t, e, r)
            }
        },
        78975: (t, e, i) => {
            var n = i(47816);
            t.exports = function(t, e, i, r) {
                return n(t, (function(t, n, o) {
                    e(r, i(t), n, o)
                })), r
            }
        },
        25063: t => {
            t.exports = function(t) {
                return function(e, i, n) {
                    for (var r = -1, o = Object(e), a = n(e), s = a.length; s--;) {
                        var l = a[t ? s : ++r];
                        if (!1 === i(o[l], l, o)) break
                    }
                    return e
                }
            }
        },
        17779: (t, e, i) => {
            var n = i(78975);
            t.exports = function(t, e) {
                return function(i, r) {
                    return n(i, t, e(r), {})
                }
            }
        },
        63137: (t, e, i) => {
            var n = i(75703),
                r = i(17779),
                o = i(6557),
                a = Object.prototype.toString,
                s = r((function(t, e, i) {
                    null != e && "function" != typeof e.toString && (e = a.call(e)), t[e] = i
                }), n(o));
            t.exports = s
        }
    }
]);