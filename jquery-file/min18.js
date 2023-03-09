/*! License information is available at https://static.cdn.printful.com/dist-pf/6995.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [6995], {
        66459: (t, e, i) => {
            i.d(e, {
                Y: () => o
            });
            var n = i(9651);
            const o = Class({
                _par: null,
                _nodeInput: null,
                _nodeHelpBlock: null,
                _nodeCharCounter: "",
                node: null,
                labelNode: null,
                _errors: [],
                _requiredValidators: [],
                _isRequired: !1,
                _requiredErrorMessage: dlang("dashboard", "This field is required"),
                _helpText: "",
                _switcherIndex: 0,
                _switcherNode: null,
                __construct: function(t) {
                    this._par = t, this._nodeInput = this._getNewInput(), this.setSwitcherIndex(), this._applyEvents();
                    var e = this._getNewInputWrapped(this._nodeInput);
                    this.node = this._getWrapper(e), this._requiredErrorMessage = this._par.requiredErrorMessage ? this._par.requiredErrorMessage : this._requiredErrorMessage, this.setReadOnly(this._par.isReadOnly), this.setInputTooltip(this._par.tooltip), this._par.value && this.setValue(this._par.value), this.setRequired(this._par.isRequired), this._updateCharCounter()
                },
                _applyEvents: function() {
                    this._par.onchange && (this.onchange = this._par.onchange), this._par.onkeyup && (this.onkeyup = this._par.onkeyup), this._par.onfocus && (this.onfocus = this._par.onfocus), this._par.onblur && (this.onblur = this._par.onblur), this._par.onfocus && (this.onfocus = this._par.onfocus), this._par.onvalidated && (this.onvalidated = this._par.onvalidated)
                },
                setSwitcherValueUp: function() {
                    this._switcherIndex > 0 && this._switcherIndex <= this._par.switcherOptions.length && (this._switcherIndex = this._switcherIndex - 1, n.U.setNodeText(this._switcherNode, this._par.prefix || this._par.suffix || this.getActiveSwitcherValue().name), this._par.onSwitcherValueChange(this.getActiveSwitcherValue()))
                },
                setSwitcherValueDown: function() {
                    this._switcherIndex >= this._par.switcherOptions.length - 1 && this._switcherIndex > 0 || (this._switcherIndex = this._switcherIndex + 1, n.U.setNodeText(this._switcherNode, this._par.prefix || this._par.suffix || this.getActiveSwitcherValue().name), this._par.onSwitcherValueChange(this.getActiveSwitcherValue()))
                },
                setSwitcherIndex: function() {
                    if (null == this._par.activeSwitcherOption) this._switcherIndex = 0;
                    else
                        for (var t in this._par.switcherOptions) {
                            if (this._par.switcherOptions[t].value !== this._par.activeSwitcherOption) {
                                this._switcherIndex = this._par.activeSwitcherOption;
                                break
                            }
                        }
                },
                getActiveSwitcherValue: function() {
                    return void 0 !== this._switcherIndex || (this._switcherIndex = this._par.activeSwitcherOption), this._par.switcherOptions[this._switcherIndex]
                },
                getErrors: function() {
                    return this._errors
                },
                isRequired: function() {
                    return this._isRequired
                },
                setRequired: function(t) {
                    this._isRequired = t
                },
                getValue: function() {
                    return this._nodeInput.value
                },
                getName: function() {
                    return this._par.name
                },
                _getNewInput: function() {
                    return null
                },
                _getNewInputWrapped: function(t) {
                    return t
                },
                _getWrapper: function(t) {
                    return t || console.error("No input node specified!"), t.id = t.id || this._par.id || this._getId(), this._requiredValidators = [], (this._par.prefix || this._par.prefixSwitcher) && (t = tag("div", "pf-form-inline pf-input-group" + (this._par.inputSize ? " pf-input-group-" + this._par.inputSize : ""), [this._par.prefix || this._par.switcherOptions ? tag("div", "pf-input-group-prepend " + (this._par.prefixClass ? this._par.prefixClass : ""), [tag("div", "pf-input-group-text pf-d-flex pf-form-control" + (this._par.inputSize ? "-" + this._par.inputSize : "") + (this._par.prefixSwitcher ? " pf-py-2 pf-bg-white" : ""), [this._switcherNode = tag("div", this._par.switcherOptions ? "pf-m-0 pf-switcher-value-input-field" : "", this._par.prefix || this.getActiveSwitcherValue().name), this._par.prefixSwitcher ? tag("div", "pf-ml-8", [tag("i", {
                        className: "pf-i pf-i-chevron-up pf-d-block",
                        onclick: this.setSwitcherValueUp.bind(this)
                    }), tag("i", {
                        className: "pf-i pf-i-chevron-down pf-d-block",
                        onclick: this.setSwitcherValueDown.bind(this)
                    })]) : ""])]) : "", t])), (this._par.suffix || this._par.suffixSwitcher) && (t = tag("div", "pf-form-inline pf-input-group" + (this._par.inputSize ? " pf-input-group-" + this._par.inputSize : ""), [t, this._par.suffix || this._par.switcherOptions ? tag("div", "pf-input-group-append" + (this._par.suffixClass ? " " + this._par.suffixClass : "") + (this._par.inputSize ? " pf-input-group-" + this._par.inputSize : ""), [tag("span", "pf-input-group-text pf-d-flex pf-form-control" + (this._par.inputSize ? "-" + this._par.inputSize : "") + (this._par.suffixSwitcher ? " pf-py-2 pf-bg-white" : ""), [this._switcherNode = tag("div", this._par.switcherOptions ? "pf-m-0 pf-switcher-value-input-field" : "", this._par.suffix || this.getActiveSwitcherValue().name), this._par.suffixSwitcher ? tag("span", "pf-ml-8", [tag("i", {
                        className: "pf-i pf-i-chevron-up pf-d-block",
                        onclick: this.setSwitcherValueUp.bind(this)
                    }), tag("i", {
                        className: "pf-i pf-i-chevron-down pf-d-block",
                        onclick: this.setSwitcherValueDown.bind(this)
                    })]) : ""])]) : ""])), tag("div", "pf-form-group " + (this._par.nodeClassName ? this._par.nodeClassName : ""), [this.getLabel(t) || "", t, this._nodeHelpBlock = this._getNewHelpBlock()])
                },
                getLabel: function(t) {
                    var e;
                    if (this._par.labelHelpText && (e = tag("span", "pf-text-muted pf-ml-4 " + (this._par.inputSize ? "pf-ui-body" : "pf-ui-caption"), this._par.labelHelpText)), !this._par.label) return e;
                    this._par.maxLength && (this._nodeCharCounter = tag("span", "float-right"));
                    var i = "";
                    return this._par.infoIcon && (i = this.getInfoIcon()), this.labelNode = tag("label", {
                        className: "pf-h5",
                        attr: {
                            for: t.id
                        }
                    }, [this._par.label, i, this._nodeCharCounter, e || ""]), this.labelNode
                },
                getLabelNode: function() {
                    return this.labelNode
                },
                getInfoIcon: function() {
                    var t = "pf-i-" + (this._par.infoIconName || "information"),
                        e = tag("span", {
                            className: "pf-ml-4 pf-custom-helper pf-d-inline-block pf-mb-2 pf-i pf-text-gray pf-i-18 " + t,
                            title: this._par.infoIcon,
                            attr: {
                                tabindex: 0,
                                "data-toggle": "tooltip"
                            }
                        }),
                        i = {
                            html: !0,
                            toggle: "tooltip-delay"
                        };
                    return this._par.infoIconDelay && (i.delay = {
                        hide: this._par.infoIconDelay
                    }), $(e).tooltip(i), e
                },
                _getNewHelpBlock: function() {
                    return tag("div", "pf-custom-control-error-message pf-mt-4 " + (this._par.inputSize ? "pf-ui-body" : "pf-ui-caption"))
                },
                setHelp: function(t) {
                    this._helpText = t, this._setDescription(t)
                },
                _setDescription: function(t) {
                    if (t instanceof Array) {
                        if (1 == t.length) return void this._setDescriptionSingle(t[0]);
                        var e = tag("ul", "pf-form-error-list");
                        return t.forEach((function(t) {
                            var i = tag("li");
                            "string" == typeof t ? i.textContent = t : t.append(i), i.append(e)
                        })), void this._setDescriptionSingle(e)
                    }
                    this._setDescriptionSingle(t)
                },
                _setDescriptionSingle: function(t) {
                    "string" != typeof t ? (n.U.clearNode(this._nodeHelpBlock), t.append(this._nodeHelpBlock)) : this._nodeHelpBlock.textContent = t
                },
                setError: function(t) {
                    this._setDescription(t), n.U.addClassName(this.node, "pf-custom-control-has-error")
                },
                removeErrorClass: function() {
                    n.U.removeClassName(this.node, "pf-custom-control-has-error")
                },
                removeError: function() {
                    this._errors = [], this.setHelp(this._helpText), this.removeErrorClass()
                },
                setReadOnly: function(t) {
                    this._nodeInput.readOnly = !!t
                },
                setInputTooltip: function(t) {
                    !t && $(this._nodeInput).data("bs.tooltip") && $(this._nodeInput).tooltip("destroy"), t && (this._nodeInput.title = t, $(this._nodeInput).tooltip({
                        html: !0
                    }))
                },
                setValue: function(t) {
                    this._nodeInput.value = t, this._updateCharCounter()
                },
                _getId: function() {
                    return o._ID_COUNTER += 1, "pf-form-input-" + o._ID_COUNTER
                },
                show: function() {
                    n.U.removeClassName(this.node, "hidden")
                },
                hide: function() {
                    n.U.addClassName(this.node, "hidden")
                },
                setSensitive: function(t) {
                    t ? n.U.addClassName(this.node, "data-hj-suppress") : n.U.removeClassName(this.node, "data-hj-suppress")
                },
                isVisible: function() {
                    return !n.U.hasClassName(this.node, "hidden")
                },
                onchange: function() {},
                onkeyup: function() {},
                onfocus: function() {},
                onblur: function() {},
                onvalidated: function() {},
                _onchange: function(t) {
                    this.triggerError(), this._updateCharCounter(), this.onchange.call(this._nodeInput, t)
                },
                _onkeyup: function(t) {
                    this._updateCharCounter(), this.onkeyup.call(this._nodeInput, t)
                },
                _onfocus: function(t) {
                    this.onfocus.call(this._nodeInput, t)
                },
                _onblur: function(t) {
                    this.triggerError(), this._updateCharCounter(), this.onblur.call(this._nodeInput, t)
                },
                _updateCharCounter: function() {
                    this._nodeCharCounter && (this._nodeCharCounter.textContent = this.getValue().length + "/" + this._par.maxLength)
                },
                triggerError: function() {
                    return !this._nodeHelpBlock || !this.node || (this.hasError() ? (this.setError(this._errors), !1) : (this.removeError(), !0))
                },
                validate: function(t) {
                    return (t = void 0 !== t && !!t) ? !this.hasError() : this.triggerError()
                },
                hasError: function() {
                    return this._validate(), !!this._errors.length
                },
                _validate: function() {
                    if (this._nodeHelpBlock && this.node) {
                        this.removeError();
                        var t = this.getValue();
                        this.isRequired() && "" === t && this._errors.push(this._requiredErrorMessage);
                        var e = (this._par.validators || []).concat(this._requiredValidators || []);
                        e.length > 0 && e.forEach(function(e) {
                            e.isValid(t) || this._errors.push(e.getMessage())
                        }.bind(this)), this.onvalidated()
                    }
                },
                focus: function() {
                    this._nodeInput.focus()
                }
            }, n.U.Base);
            o._ID_COUNTER = 0, window && ((globalThis || {}).PFFormsBaseInput = o)
        },
        65033: (t, e, i) => {
            i.d(e, {
                d: () => n
            });
            const n = function() {};
            n.prototype.placeholder = "", n.prototype.id = null, n.prototype.name = "", n.prototype.value = "", n.prototype.label = "", n.prototype.type = "text", n.prototype.labelHelpText = null, n.prototype.infoIcon = null, n.prototype.infoIconDelay = null, n.prototype.infoIconName = null, n.prototype.isReadOnly = null, n.prototype.isRequired = !1, n.prototype.requiredErrorMessage = null, n.prototype.tooltip = null, n.prototype.prefix = null, n.prototype.prefixClass = null, n.prototype.suffix = null, n.prototype.suffixClass = null, n.prototype.prefixSwitcher = !1, n.prototype.suffixSwitcher = !1, n.prototype.onchange = null, n.prototype.onkeyup = null, n.prototype.onfocus = null, n.prototype.onblur = null, n.prototype.onfocus = null, n.prototype.onvalidated = null, n.prototype.prop = null, n.prototype.className = null, n.prototype.inputSize = null, n.prototype.validators = null, n.prototype.maxLength = null, n.prototype.switcherOptions = null, n.prototype.activeSwitcherOption = 0, n.prototype.onSwitcherValueChange = null, n.prototype.nodeClassName = null, n.prototype.dataTestTag = "", window && ((globalThis || {}).PFFormsInputPar = n)
        },
        10493: (t, e, i) => {
            i.d(e, {
                u: () => r
            });
            var n = i(66459),
                o = i(9651);
            const r = Class({
                _par: null,
                _getNewInput: function() {
                    var t = {
                            onchange: this._onchange,
                            onblur: this._onblur
                        },
                        e = {};
                    this._par.multiple && (e.multiple = !0), e["data-no_results_text"] = lang("No results match"), this._par.dataTestTag && (e["data-test"] = this._par.dataTestTag), this._par.prop && o.U.O2O(t, this._par.prop);
                    var i = {
                        tag: "select",
                        className: this._par.className || "form-control",
                        name: this._par.name,
                        els: this._getOptionsElements(this._par.options),
                        attr: e,
                        prop: t
                    };
                    return this._par.useChosen && (i.data = {
                        placeholder: this._par.placeholder || " "
                    }), (0, o.U)(i)
                },
                _getNewInputWrapped: function(t) {
                    return this._par.useChosen ? t : (0, o.U)({
                        tag: "span",
                        className: "styled-select",
                        els: [t]
                    })
                },
                setOptions: function(t) {
                    var e = this._nodeInput.value;
                    o.U.clearNode(this._nodeInput);
                    var i = this._getOptionsElements(t);
                    for (var n in i) i[n].append(this._nodeInput);
                    e && (this._nodeInput.value = e), this._par.useChosen && this._updateChosen()
                },
                getValue: function() {
                    if (!this._par.multiple) return this._nodeInput.value;
                    var t = [];
                    for (var e in this._nodeInput.options) {
                        var i = this._nodeInput.options[e];
                        i.selected && t.push(i.value)
                    }
                    return t
                },
                _getOptionsElements: function(t) {
                    var e = [];
                    for (var i in t) {
                        var n = t[i];
                        e.push((0, o.U)({
                            tag: "option",
                            value: n.value,
                            text: n.name,
                            data: n.data
                        }))
                    }
                    return e
                },
                setValue: function(t) {
                    if (this._par.multiple)
                        for (var e in this._nodeInput.options) {
                            var i = this._nodeInput.options[e];
                            $.inArray(i.value, t) > -1 && (i.selected = !0)
                        } else this._nodeInput.value = t;
                    this._par.useChosen && this._updateChosen()
                },
                setReadOnly: function(t) {
                    this._nodeInput.readOnly = !!t, this._par.useChosen && (this._nodeInput.disabled = !!t), this._updateChosen()
                },
                setDisabled: function() {
                    this._nodeInput.disabled = !0
                },
                append: function(t) {
                    return this.node.append(t), this._par.useChosen && (this._par.useChosenMobile && (window.chosenBypassMobile = !0), $(this._nodeInput).chosen(Object.assign({
                        width: "100%"
                    }, this._par.chosenConfig)), this._par.useChosenMobile && (window.chosenBypassMobile = !1)), this
                },
                _onchange: function(t) {
                    this.triggerError(), t && this._par.useChosen && t.isTrusted && this._updateChosen(), this.onchange.call(this._nodeInput, t)
                },
                _updateChosen: function() {
                    $(this._nodeInput).trigger("chosen:updated")
                }
            }, n.Y);
            window && ((globalThis || {}).PFFormsSelect = r)
        },
        68147: (t, e, i) => {
            i.d(e, {
                v: () => o
            });
            var n = i(65033);
            const o = function() {
                this.options = []
            };
            o.prototype = new n.d, o.prototype.options = null, o.prototype.useChosen = !1, o.prototype.chosenConfig = {}, o.prototype.multiple = !1, o.prototype.value = "", o.prototype.useChosenMobile = null, n.d.prototype.dataTestTag = "", window && ((globalThis || {}).PFFormsSelectPar = o)
        },
        20111: (t, e, i) => {
            i.d(e, {
                q: () => f
            });
            var n = i(62627),
                o = i(97540),
                r = i(9651),
                s = i(47586),
                a = i(70418),
                p = i(68147),
                l = i(10493),
                u = i(65311),
                h = i.n(u),
                c = i(60993),
                d = i(19721);
            const f = Class({
                _menuToggleSelector: ".js-user-settings-toggle",
                _taxToggleSelector: ".js-tax-settings-toggle",
                _currencies: [],
                _currentDisplayCurrency: null,
                _hasStores: null,
                _originalDisplayCurrency: null,
                _modal: null,
                _taxOptions: null,
                __construct: function(t) {
                    this._currencies = t.currencies, this._currentDisplayCurrency = t.displayCurrency, this._originalDisplayCurrency = t.displayCurrency, this._isLoggedIn = t.isLoggedIn, this._isWarehousingUser = t.isWarehousingUser, this._hasStores = t.hasStores, this._defaultWarehousingCurrency = t.defaultWarehousingCurrency, this._defaultCurrencySymbol = t.defaultCurrencySymbol, this._allStoresCurrencyData = t.allStoresCurrencyData, this._allStoresCurrencySymbol = t.allStoresCurrencySymbol, this.showPricesWithTax = !1;
                    var e, i = document.querySelectorAll(this._menuToggleSelector);
                    for (e = 0; e < i.length; e++) {
                        i[e].addEventListener("click", function(t) {
                            t.stopImmediatePropagation(), this._onMenuToggleClicked()
                        }.bind(this))
                    }
                    var n = document.querySelectorAll(this._taxToggleSelector);
                    for (e = 0; e < n.length; e++) {
                        n[e].addEventListener("click", function(t) {
                            t.preventDefault(), t.stopImmediatePropagation(), this._onMenuToggleClicked()
                        }.bind(this))
                    }
                },
                _onMenuToggleClicked: function() {
                    var t = new s.Z.Par;
                    t.title = lang("Currency settings"), t.onClose = this._onModalClose.bind(this), t.nodeClass = "pf-modal currency-modal browse-currency-pop-up", this._currentDisplayCurrency = this._originalDisplayCurrency, this._modal = new s.Z(t), this._content = this._getUserSettingsModal(), this._modal.setContent(this._content), this._isLoggedIn && (this._hasStores || this._isWarehousingUser) && this._modal.setFooterContent(this._getFooterContent()), h()(this._currencyOptions.node).on("chosen:showing_dropdown", (() => {
                        window.innerHeight < 610 && (this._modal.getContentNode().scrollTop = this._modal.getContentNode().scrollHeight)
                    })), h()(this._currencyOptions.node).on("chosen:hiding_dropdown", (() => {
                        window.innerHeight < 610 && (this._modal.getContentNode().scrollTop = 0)
                    })), this._modal.show()
                },
                _getStoreCurrencyBlock: function() {
                    return this._isLoggedIn && this._hasStores ? tag("div", "pf-py-12 pf-px-24 pf-d-xs-flex pf-align-items-center pf-justify-content-between text-left", [tag("div", "", [tag("p", "pf-h4 pf-m-0", [tag("span", "pf-i pf-i-24 pf-i-credit-card-outline pf-text-gray"), tag("span", "pf-pl-8", lang("Store billing currency"))])]), tag("div", "pf-d-flex pf-justify-content-between pf-justify-content-xs-start pf-ui-body pf-mt-8 pf-mt-xs-0", [tag("div", "pf-pr-8", [tag("span", "pf-pr-8 pf-text-gray", this._allStoresCurrencySymbol + " " + this._allStoresCurrencyData)]), tag("div", "", [tag("a", {
                        className: "pf-link",
                        href: langUrl("/dashboard/billing/billing-methods#stores")
                    }, [lang("Change"), tag("span", "pf-i pf-i-chevron-right pf-link-none pf-d-inline-block")])])])]) : ""
                },
                _getWarehouseCurrencyBlock: function() {
                    return this._isLoggedIn && this._isWarehousingUser ? tag("div", "pf-py-12 pf-px-24 pf-d-xs-flex pf-align-items-center pf-justify-content-between text-left", [tag("div", "", [tag("p", "pf-h4 pf-m-0", [tag("span", "pf-i pf-i-24 pf-i-package-variant-closed pf-text-gray"), tag("span", "pf-pl-8", lang("Warehouse currency"))])]), tag("div", "pf-d-flex pf-justify-content-between pf-justify-content-xs-start pf-ui-body pf-mt-8 pf-mt-xs-0", [tag("div", "pf-pr-8", [tag("span", "pf-pr-8 pf-text-gray", this._defaultCurrencySymbol + " " + this._defaultWarehousingCurrency)]), tag("div", "", [tag("a", {
                        className: "pf-link",
                        href: langUrl("/dashboard/warehousing/environment-settings")
                    }, [lang("Change"), tag("span", "pf-i pf-i-chevron-right pf-d-inline-block pf-link-none")])])])]) : ""
                },
                _getUserSettingsModal: function() {
                    return this._taxOptions = this._getTaxOptionNode(), this._currencyOptions = this._getUserCurrencySettingsForm(), this._fillBrowsingCurrencySelector(), tag("div", "", [tag("form", "", [tag("div", "form-group pf-m-0", [tag("p", "pf-h4 pf-m-0", [tag("span", "pf-i pf-i-24 pf-i-home-outline pf-text-gray"), tag("span", "pf-pl-8", lang("Site browsing currency"))]), tag("p", "pf-ui-body pf-text-muted pf-mt-8 pf-mb-16", lang("How you see Printful product and other prices on this website")), tag("div", "browse-currency-pop-up__selector", [this._currencyOptions, this._taxOptions])])]), tag("div", "pf-mt-12", [tag("button", {
                        className: "pf-btn pf-btn-primary pf-mr-12",
                        type: "button",
                        attr: {
                            "data-test": "preferences-apply-currency-btn-Au5QgEahyGs4RHX"
                        },
                        prop: {
                            onclick: this._onApplySettings.bind(this)
                        }
                    }, lang("Apply"))])])
                },
                _getUserCurrencySettingsForm: function() {
                    const t = new p.v;
                    return t.name = "siteBrowsingCurrency", t.isRequired = !0, t.useChosen = !0, t.useChosenMobile = !0, t.onchange = () => this._onCurrencySelect(), new l.u(t)
                },
                _fillBrowsingCurrencySelector: function() {
                    let t = [];
                    Object.keys(this._currencies).map(function(e) {
                        t.push({
                            value: e,
                            name: this._prepareCurrencyName(this._currencies[e])
                        })
                    }.bind(this)), t = (0, c.z)(t), this._currencyOptions.setOptions(t), this._currencyOptions.setValue(this._currentDisplayCurrency)
                },
                _prepareCurrencyName: function(t) {
                    return t.code + " | " + t.name
                },
                _onCurrencySelect: function() {
                    this._currentDisplayCurrency = this._currencyOptions.getValue(), this._updateTaxOptions()
                },
                _getFooterContent: function() {
                    var t = "";
                    return this._hasStores && this._isWarehousingUser && (t = tag("hr", "pf-m-0")), tag("div", "", [this._getStoreCurrencyBlock(), t, this._getWarehouseCurrencyBlock()])
                },
                _updateTaxOptions: function() {
                    if (this._modal.getContentNode() && (r.U.clearNode(this._taxOptions), this._isTaxChoiceAvailable(this._currentDisplayCurrency))) {
                        var t = this._getTaxOptionNode().appendTo(this._taxOptions);
                        t && t.appendTo(this._taxOptions)
                    }
                },
                _isTaxChoiceAvailable: function(t) {
                    return null !== this._currencies[t].taxes
                },
                _getTaxOptionNode: function() {
                    if (!1 === this._isTaxChoiceAvailable(this._currentDisplayCurrency)) return tag("div");
                    var t = this._currencies[this._currentDisplayCurrency].taxes;
                    return this.showPricesWithTax = !(!t || !t.includedInPrice), tag("div", "pf-mt-16", [tag("input", {
                        type: "hidden",
                        name: "taxCurrency",
                        value: this._currentDisplayCurrency
                    }), tag("hr", "pf-mt-16 pf-mb-0"), tag("div", "pf-mt-16", [tag("label", {
                        className: "pf-normal pf-d-xs-inline pf-mb-0 pf-mr-16",
                        style: {
                            cursor: "pointer"
                        }
                    }, [tag("input", {
                        className: "pf-mr-12 pf-ui-caption",
                        type: "radio",
                        name: "showPricesWithTax",
                        onclick: this._resetTaxIncluded.bind(this, !1),
                        checked: !this.showPricesWithTax
                    }), clang("tax", "Excluding {taxName}").replace("{taxName}", t.name)]), tag("label", {
                        className: "pf-normal pf-d-xs-inline pf-mt-8 pf-mt-xs-0 pf-mb-0",
                        style: {
                            cursor: "pointer"
                        }
                    }, [tag("input", {
                        className: "pf-mr-12 pf-ui-caption",
                        type: "radio",
                        name: "showPricesWithTax",
                        onclick: this._resetTaxIncluded.bind(this, !0),
                        checked: !!this.showPricesWithTax
                    }), clang("tax", "Including {taxName}*").replace("{taxName}", t.name)])]), tag("div", "pf-mt-12", [tag("p", {
                        className: "pf-ui-caption text-muted pf-my-0"
                    }, [clang("tax", "*Note that {taxName} rates may vary. The final price will be calculated at checkout.").replace("{taxName}", t.name)])])])
                },
                _resetTaxIncluded: function(t) {
                    this.showPricesWithTax = t
                },
                _onModalClose: function() {
                    this._modal.remove()
                },
                _onApplySettings: function() {
                    o.D.show(this._content), (0, a.r)("user-settings/update-settings", {
                        displayCurrency: this._currentDisplayCurrency,
                        showPricesWithTax: this.showPricesWithTax ? 1 : 0,
                        taxCurrency: this._currentDisplayCurrency
                    }, function(t) {
                        t.success ? (n.z.toggleTaxInclusion(t.currency, Boolean(t.includeTax)), this._onModalClose(), location = t.url) : alert(t.error)
                    }.bind(this))
                }
            });
            f.changeLanguage = d.D, (globalThis || {}).PFUserSettingsMenu = f
        },
        97540: (t, e, i) => {
            i.d(e, {
                D: () => o
            });
            var n = i(9651);
            const o = {
                showLogo: function(t, e) {
                    return e = e || {}, n.U.O2O(e, {
                        pulsatingLogo: !0
                    }), o.show(t, e)
                },
                show: function(t, e) {
                    var i;
                    if (e = e || {}, !(i = "string" == typeof t ? document.getElementById(t) : t)) return null;
                    i._loadingOverlay && i._loadingOverlay.remove(), i._loadingOverlayPreviousMinHeight = i.style.minHeight, i._loadingOverlayPreviousPosition = i.style.position, "static" == o._getStyle(i, "position") && (i.style.position = "relative"), e.minHeight && (i.style.minHeight = e.minHeight + "px"), e.disableBodyScroll && (i._previousBodyPosition = document.body.style.position, i._previousBodyOverflow = document.body.style.overflow, setTimeout((() => {
                        document.body.style.position = "fixed", document.body.style.overflow = "hidden"
                    }), 1));
                    const r = {
                        height: "auto",
                        width: "auto",
                        bottom: "0",
                        right: "0",
                        opacity: "0.5"
                    };
                    e.overlayPosition && (r.position = e.overlayPosition), e.zIndex && (r.zIndex = e.zIndex);
                    var s = i._loadingOverlay = (0, n.U)({
                        tag: "div",
                        className: "loading-overlay",
                        style: r
                    }).append(i);
                    return e.pulsatingLogo && (n.U.addClassName(s, "loading-overlay--logo"), (0, n.U)({
                        tag: "div",
                        className: "loading-overlay--logo__logo",
                        els: [{
                            tag: "div"
                        }, {
                            tag: "div"
                        }, {
                            tag: "div"
                        }]
                    }).appendTo(s)), e.hideSpinner && n.U.addClassName(s, "loading-overlay--no-spinner"), setTimeout($.proxy((function() {
                        i._loadingOverlay && e.loadingText && (0, n.U)({
                            tag: "div",
                            className: "loading-overlay__text".concat(e.loadingTextClass ? " " + e.loadingTextClass : ""),
                            text: e.loadingText
                        }).append(s)
                    }), this), e.loadingTextTimeout ? e.loadingTextTimeout : 2e3), e.backgroundPosition ? s.style.backgroundPosition = e.backgroundPosition : s.offsetHeight > 400 && (s.style.backgroundAttachmentX = "fixed"), $(s).animate({
                        opacity: .9
                    }, 6e3), PF.DEV && (s.ondblclick = function() {
                        o.hide(i)
                    }), s
                },
                hide: function(t) {
                    return "string" == typeof t && (t = document.getElementById(t)), !!t && (void 0 !== t._loadingOverlayPreviousMinHeight && (t.style.minHeight = t._loadingOverlayPreviousMinHeight, delete t._loadingOverlayPreviousMinHeight, t.style.position = t._loadingOverlayPreviousPosition, delete t._loadingOverlayPreviousPosition), void 0 !== t._previousBodyOverflow && (document.body.style.overflow = t._previousBodyOverflow), void 0 !== t._previousBodyPosition && (document.body.style.position = t._previousBodyPosition), !!t._loadingOverlay && (t._loadingOverlay.remove(), !0))
                },
                _getStyle: function(t, e) {
                    return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(t, null)[e] : t.currentStyle ? t.currentStyle[e] : t.style[e]
                }
            };
            window && ((globalThis || {}).PFLoadingOverlay = o)
        },
        42649: (t, e, i) => {
            i.d(e, {
                SE: () => g,
                ZP: () => w,
                TK: () => y,
                HO: () => m
            });
            var n = i(65311),
                o = i.n(n),
                r = i(96486),
                s = i.n(r),
                a = i(70538),
                p = i(15579);
            var l = i(83657),
                u = i(65613),
                h = i(65427);
            const c = ["router-view", "router-link", "portal-target"],
                d = ["refund-tool"],
                f = [],
                g = Object.freeze({
                    PRINTFUL: "PRINTFUL",
                    ECOM: "ECOM",
                    MYORDERS: "MYORDERS",
                    DYNAMIC_INSTANCE: "DYNAMIC_INSTANCE",
                    KEYWORDSCOUT: "KEYWORDSCOUT"
                });

            function _(t) {
                var e;
                if (!(t || p && p.getCurrentHub().getClient())) return;
                const i = null === (e = globalThis.SentryUtils) || void 0 === e ? void 0 : e.getInitParameters();
                if (!i) return;
                const n = new p.BrowserClient({
                    ...i,
                    integrations: [...p.defaultIntegrations, new l.w({
                        Vue: t,
                        logErrors: !0
                    })]
                });
                p.getCurrentHub().bindClient(n)
            }

            function y(t) {
                const e = new t({});
                Object.defineProperty(t.prototype, "$bus", {
                    get: () => e
                }), Object.defineProperty(t.prototype, "$eventBus", {
                    get: () => e
                })
            }

            function m(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const i = Object.keys(t),
                    n = [];
                c.forEach((t => {
                    i.push(t)
                }));
                const r = i.filter((t => !d.includes(t) && o()(":not([data-vue-root], [data-vue-root] *) > " + t).filter(":not([data-vue-root])").length));
                if (r.length) return (0, u.logError)(new h.yI("Initializing the old Vue flow; components outside defined Vue roots found", {
                    info: {
                        outsideRootComponentNames: r
                    }
                })), void v(t, e);
                const s = o()("[data-vue-root]");
                if (s.length) {
                    for (let i = 0; i < s.length; i++) {
                        const o = C(s[i], t, e);
                        o && n.push(o)
                    }
                    return () => {
                        n.forEach((t => {
                            t && t.$destroy()
                        }))
                    }
                }
            }
            const v = (t, e) => {
                    new a.default({
                        el: "#content",
                        components: t,
                        ...e
                    })
                },
                C = (t, e, i) => {
                    const n = t.getAttribute("data-vue-root");
                    if (f.indexOf(n) > -1) return;
                    f.push(n);
                    const o = t.dataset.vueRoot;
                    let r = [];
                    void 0 !== t.dataset.vueComponents && (r = JSON.parse(t.dataset.vueComponents)), r = s().difference(r, c);
                    const p = {};
                    return r.forEach((t => {
                        p[t] = e[t]
                    })), new a.default({
                        el: t,
                        name: o,
                        components: p,
                        ...i
                    })
                };
            var w = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.PRINTFUL;
                t.__PF_CONFIGURED_ALREADY || (t.__PF_CONFIGURED_ALREADY = !0, _(t), t.mixin({
                    methods: {
                        xss: () => {
                            window.xss && window.xss(!0)
                        },
                        asset: t => `${window.PF.ASSETS_URL}${t}`,
                        ...e !== g.MYORDERS ? {
                            prettyMoney: e !== g.ECOM ? window.prettyMoney : function(t) {
                                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USD";
                                return window.prettyMoney(t, e)
                            }
                        } : {}
                    }
                }), t.mixin({
                    methods: {
                        lang: window.lang,
                        nlang: window.nlang,
                        clang: window.clang,
                        nclang: window.nclang,
                        dlang: window.dlang,
                        dnlang: window.dnlang,
                        dclang: window.dclang,
                        dnclang: window.dnclang,
                        langUrl: window.langUrl
                    }
                }), e === g.KEYWORDSCOUT && t.mixin({
                    methods: {
                        prettyNumber: window.prettyNumber
                    }
                }), [g.PRINTFUL, g.ECOM].includes(e) && e === g.ECOM && t.mixin({
                    methods: {
                        mObjectSimpleClone: t => JSON.parse(JSON.stringify(t))
                    }
                }))
            }
        },
        60993: (t, e, i) => {
            i.d(e, {
                z: () => s
            });
            var n = i(96486),
                o = i(80464);
            const r = {
                [o.PFItemsCurrencyItem.CURRENCY_USD]: 7,
                [o.PFItemsCurrencyItem.CURRENCY_EUR]: 6,
                [o.PFItemsCurrencyItem.CURRENCY_GBP]: 5,
                [o.PFItemsCurrencyItem.CURRENCY_CAD]: 4,
                [o.PFItemsCurrencyItem.CURRENCY_JPY]: 3,
                [o.PFItemsCurrencyItem.CURRENCY_AUD]: 2,
                [o.PFItemsCurrencyItem.CURRENCY_BRL]: 1
            };

            function s(t) {
                const e = (0, n.cloneDeep)(t);
                return e.sort(((t, e) => {
                    var i, n, o, s;
                    return (null !== (i = r[t.value]) && void 0 !== i ? i : 0) === (null !== (n = r[e.value]) && void 0 !== n ? n : 0) ? t.name.localeCompare(e.name) : (null !== (o = r[t.value]) && void 0 !== o ? o : 0) > (null !== (s = r[e.value]) && void 0 !== s ? s : 0) ? -1 : 1
                })), e
            }
        }
    }
]);