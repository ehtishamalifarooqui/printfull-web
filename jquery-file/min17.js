/*! License information is available at https://static.cdn.printful.com/dist-pf/98607.licenses.txt if third party dependencies are included */
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [98607], {
        38137: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => u,
                k: () => c
            });
            var n = r(65557),
                o = r(75270),
                i = r(90227),
                a = r(97425),
                s = r.n(a);

            function c() {
                (0, n.$)("PF.Utils.CustomerTracker", o.s), (0, n.$)("PF.Utils.Breakpoints", i.k), PF.DEV || function() {
                    if (window.chrome || window.safari) {
                        const e = new Image;
                        e.src = s(), e.height = window.safari ? 56 : 24, e.width = 124;
                        const t = ["font-size: 1px;", "line-height: " + e.height + "px;", "padding: " + .5 * e.height + "px " + .5 * e.width + "px;", "background: url(" + e.src + ") no-repeat;", "background-size: contain;"];
                        console.log("%c ", t.join(" "))
                    }
                    console.log("%c" + lang("Hold upâ€‰â€”â€‰be sure what you're doing here!"), "font-size: 28px;font-weight: bold;color: #E40F0A;"), console.log("%c" + lang("This browser feature is for developers. Don't enter or paste here anything that you don't understand. Doing so could lead to attackers acquiring your info or taking over your account."), "font-size: 16px;"), console.log("%c" + lang("Stay safe."), "font-size: 16px;")
                }()
            }

            function u() {
                return {
                    "cookie-banner": () => r.e(81886).then(r.bind(r, 81930))
                }
            }
        },
        75414: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => o
            });
            var n = r(9651);
            const o = Class({
                _par: null,
                __construct: function(e) {
                    this._par = this._initPar(e), this.node = tag("div", "snackbar pf-py-16 pf-px-24 " + this._getSnackbarClass()), this._render(), this._stackExistingSnackbars()
                },
                _stackExistingSnackbars: function() {
                    const e = this._getPositionClass(),
                        t = document.querySelectorAll("body ." + e);
                    if (t.length < 1) return;
                    const r = Array.from(t).reverse(),
                        n = this._par.position === o.POSITION_BOTTOM,
                        i = n ? -1 : 1,
                        a = n ? window.innerHeight - 64 : 32;
                    for (let e = 0; e < r.length; e++) {
                        if (e < 1) {
                            r[e].style.top = a + "px";
                            continue
                        }
                        const t = r[e - 1];
                        r[e].style.top = t.offsetTop + t.offsetHeight * i + 16 * i + "px"
                    }
                },
                _getColorClass: function() {
                    switch (this._par.type) {
                        case o.TYPE_ERROR:
                            return "snackbar--error";
                        case o.TYPE_DEFAULT:
                            return "snackbar--default";
                        default:
                            return "snackbar--success"
                    }
                },
                _getPositionClass: function() {
                    switch (this._par.position) {
                        case o.POSITION_TOP_RIGHT:
                            return "snackbar--top-right";
                        case o.POSITION_BOTTOM:
                            return "snackbar--bottom";
                        default:
                            return "snackbar--top"
                    }
                },
                _getSizeClass: function() {
                    return this._par.isSmall ? "snackbar--small" : "snackbar--large"
                },
                _getSnackbarClass: function() {
                    return this._getColorClass() + " " + this._getPositionClass() + " " + this._getSizeClass()
                },
                _render: function() {
                    n.U.clearNode(this.node), tag("div", {
                        className: "snackbar__inner pf-ui-body row",
                        attr: {
                            role: this._par.type === o.TYPE_ERROR ? "alert" : "status",
                            "data-test": this._par.dataTest
                        }
                    }, [tag("div", this._par.actionLabel ? "col-9 pf-text-left" : "col-12 pf-text-center", [tag("p", "snackbar__text pf-m-0", this._par.content)]), this._par.actionLabel ? tag("div", "col-3", [tag("a", {
                        className: "pf-bold pf-link pf-text-white",
                        onclick: this._par.actionCallback
                    }, this._par.actionLabel)]) : ""]).append(this.node), this.node.appendTo(document.body), this.node.onclick = this._hideNode.bind(this), $(this.node).fadeIn(this._par.animationDuration, function() {
                        setTimeout(this._hideNode.bind(this), this._par.duration)
                    }.bind(this))
                },
                _initPar: function(e) {
                    return e.content = e.content || "", e.type = e.type || o.TYPE_SUCCESS, e.duration = e.duration || 7e3, e.isSmall = e.isSmall || !1, e.position = e.position || o.POSITION_TOP, e.animationDuration = e.animationDuration || 400, e.actionCallback = e.actionCallback || "", e.actionLabel = e.actionLabel || "", e
                },
                _hideNode: function() {
                    this.node && $(this.node).fadeOut(this._par.animationDuration, function() {
                        this.node && (n.U.removeNode(this.node), this.node = null, this._stackExistingSnackbars())
                    }.bind(this))
                }
            }, n.U.Base);
            o.TYPE_SUCCESS = "success", o.TYPE_DEFAULT = "default", o.TYPE_ERROR = "error", o.POSITION_TOP = "top", o.POSITION_BOTTOM = "bottom", o.POSITION_TOP_RIGHT = "top-right", window && ((globalThis || {}).PFComponentsSnackbar = o)
        },
        19721: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => i
            });
            var n = r(70418),
                o = r(69182);

            function i(e) {
                (0, n.r)("user-settings/update-language", {
                    displayLanguage: e
                }, function(e) {
                    if (1 === e.success) {
                        (0, o.DJ)();
                        try {
                            window.localStorage.removeItem("AddressSelector")
                        } catch (e) {
                            console.warn("Could not remove AddressSelector from localStorage!")
                        }
                        window.location.reload()
                    } else alert(e.error)
                }.bind(this))
            }
        },
        59597: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => c
            });
            var n = r(96486),
                o = r.n(n);

            function i(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a(n.key), n)
                }
            }

            function a(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            let s = function() {
                function e() {
                    var t, r, n;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), t = this, n = [], (r = a(r = "toArrayKeys")) in t ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = n
                }
                var t, r, n;
                return t = e, (r = [{
                    key: "toArray",
                    value: function(e, t) {
                        e = e || {}, t = t || this.toArrayKeys;
                        const r = {};
                        for (const n in t) {
                            const i = t[n];
                            let a = this[i];
                            if (a && o().isObject(a))
                                if (o().isFunction(a.toArray)) a = a.toArray(e);
                                else {
                                    const t = {};
                                    for (const r in a) {
                                        const n = a[r];
                                        o().isObject(n) && o().isFunction(n.toArray) ? t[r] = n.toArray(e) : t[r] = n
                                    }
                                    a = t
                                } r[i] = o().isBoolean(a) ? a ? 1 : 0 : a
                        }
                        return r
                    }
                }]) && i(t.prototype, r), n && i(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();
            const c = s;
            (globalThis || {}).PFItemsItem = s
        },
        9651: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => o,
                _: () => i
            });
            var n = r(61169);

            function o(e) {
                let t;
                if (!e.tag && "string" != typeof e.text) return !1;
                if (e.tag) {
                    switch (e.prop = e.prop || {}, e.tag) {
                        case "img":
                            e.src && (e.prop.src = e.src), e.alt && (e.prop.alt = e.alt);
                            break;
                        case "a":
                            e.prop.href = e.prop.href || e.href || "javascript:", e.target && (e.prop.target = e.target);
                            break;
                        case "select":
                            void 0 !== e.value && (e.prop.value = e.value), e.name && (e.prop.name = e.name);
                            break;
                        case "option":
                            e.value && (e.prop.value = e.value);
                            break;
                        case "input":
                            e.value && (e.prop.value = e.value), e.type && (e.prop.type = e.type), e.name && (e.prop.name = e.name), e.checked && (e.prop.checked = e.checked), e.type && "checkbox" == e.type && e.prop.checked && (e.prop.defaultChecked = e.prop.checked);
                            break;
                        case "textarea":
                            e.value && (e.prop.value = e.value), e.name && (e.prop.name = e.name);
                            break;
                        case "iframe":
                            e.src && (e.prop.src = e.src)
                    }
                    e.id && (e.prop.id = e.id), e.className && (e.prop.className = e.className), e.style && (e.prop.style = e.style), e.innerHTML && (e.prop.innerHTML = e.innerHTML), e.onclick && (e.prop.onclick = e.onclick), e.ondblclick && (e.prop.ondblclick = e.ondblclick), e.onmouseenter && (e.prop.onmouseenter = e.onmouseenter), e.onmouseleave && (e.prop.onmouseleave = e.onmouseleave), e.ontouchstart && (e.prop.ontouchstart = e.ontouchstart), e.ontouchmove && (e.prop.ontouchmove = e.ontouchmove), e.ontouchend && (e.prop.ontouchend = e.ontouchend), e.title && (e.prop.title = e.title);
                    const r = e.tag;
                    if (e.tag == r) t = document.createElement(e.tag);
                    else try {
                        t = document.createElement(e.tag)
                    } catch (e) {
                        t = document.createElement(r)
                    }
                    let n;
                    if (e.component && (t.component = e.component), e.data && "object" == typeof e.data)
                        for (n in e.data) t.setAttribute("data-" + n, e.data[n]);
                    if (e.attr)
                        for (const r in e.attr) t.setAttribute(r, e.attr[r]);
                    if (e.els && "object" == typeof e.els) {
                        let r;
                        for (n in e.innerHTML && console.warn("innerHTML prop will overwrite els prop value. Use only one of them, not both"), e.els) {
                            switch (r = e.els[n], typeof r) {
                                case "number":
                                    t.appendChild(document.createTextNode(String(r)));
                                    continue;
                                case "string":
                                    t.appendChild(document.createTextNode(r));
                                    continue;
                                case "object":
                                    if (!r.nodeType && r.tag) {
                                        r = o(r);
                                        break
                                    }
                                    if (r instanceof Array) {
                                        for (let e = 0; e < r.length; ++e) o._appendTypeElement(t, r[e]);
                                        continue
                                    }
                                    break;
                                case "boolean":
                                    continue;
                                case "undefined":
                                    console && console.error && console.error("mkE: undefined child", e);
                                    continue
                            }
                            r.append ? r.append(t) : t.appendChild(r)
                        }
                    }
                    e.els && "string" == typeof e.els && (e.innerHTML = e.els), o.O2O(t, e.prop), void 0 !== e.text && t.appendChild(document.createTextNode(e.text)), t.append = o.append, t.appendTo = o.appendTo, t.prepend = o.prepend, t.remove = o.remove, t.replace = o.replace
                } else t = document.createTextNode(e.text);
                return t
            }

            function i(e, t, r) {
                if (void 0 === e) throw new Error("Tag not specified");
                let n = {
                    tag: e
                };
                if ("string" == typeof t) n.className = t;
                else if ("object" == typeof t && null !== typeof t)
                    for (const e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                if (null == r) return o(n);
                if ("string" != typeof r && "number" != typeof r || (r = [r + ""]), !Array.isArray(r)) throw new Error("Incorrect children specified");
                return n.els = r, o(n)
            }
            o.append = function(e) {
                return "string" == typeof e && (e = document.getElementById(e)), e.appendChild(this), this
            }, o.prepend = function(e) {
                return e.firstChild ? (o.insertBefore(this, e.firstChild), this) : (e.appendChild(this), this)
            }, o.remove = function() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return o.removeNode(this, e), this
            }, o.clear = function() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return o.clearNode(this, e), this
            }, o._appendTypeElement = function(e, t) {
                switch (typeof t) {
                    case "number":
                        return void e.appendChild(document.createTextNode(String(t)));
                    case "string":
                        return void e.appendChild(document.createTextNode(t));
                    case "object":
                        if (!t.nodeType && t.tag) {
                            t = o(t);
                            break
                        }
                        if (t instanceof Array) {
                            for (var r = 0; r < t.length; ++r) o._appendTypeElement(e, t[r]);
                            return
                        }
                        break;
                    case "boolean":
                        return;
                    case "undefined":
                        return void(console && console.error && console.error("mkE: undefined child", e))
                }
                t.append ? t.append(e) : e.appendChild(t)
            }, o.appendTo = function(e, t) {
                return void 0 === t && (t = !0), "string" == typeof e && (e = t ? $(e)[0] : document.getElementById(e)), e instanceof Array && (e = o.reset(e)), e.appendChild(this), this
            }, o.replace = function(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return e.parentNode ? (o.insertBefore(this, e), o.removeNode(e, t), this) : this
            }, o.removeNode = function(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (e.parentNode && e.parentNode.tagName) {
                    const r = e.parentNode.removeChild(e);
                    return t && o.destroyNodeComponents(e), r
                }
                return !1
            }, o.clearNode = function(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = e.firstChild;
                for (; r;) {
                    if (t && o.destroyNodeComponents(r), r instanceof o.Base || r instanceof n.p ? r.remove(!1) : r.remove ? r.remove() : o.removeNode(r, !1), r === e.firstChild) throw new Error("Infinite loop in clearNode!");
                    r = e.firstChild
                }
            }, o.destroyNodeComponents = function(e) {
                if (!e || !e.getElementsByTagName) return;
                const t = e => {
                    var r;
                    ([...e.children] || []).forEach((e => {
                        t(e)
                    }));
                    const n = e.__destroyed;
                    e.__destroyed = !0, null !== (r = e.component) && void 0 !== r && r.destroy && !n && e.component.destroy()
                };
                t(e)
            }, o.addClassName = function(e, t) {
                var r, n = e.className.split(" "),
                    o = !1;
                for (r = 0; r < n.length; r++) n[r] == t && (o = !0);
                return o || n.push(t), e.className = n.join(" "), e
            }, o.setNodeText = function(e, t) {
                if ("string" == typeof e.textContent) e.textContent = t;
                else if ("string" == typeof e.innerText) e.innerText = t;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(e.createTextNode(t))
                }
            }, o.hasClassName = function(e, t) {
                return (" " + e.className + " ").indexOf(" " + t + " ") > -1
            }, o.removeClassName = function(e, t) {
                for (var r = e.className.split(" "), n = [], o = 0; o < r.length; o++) r[o] !== t && n.push(r[o]);
                return e.className = n.join(" "), e
            }, o.O2O = function(e, t) {
                if (void 0 === e || void 0 === t) return e;
                for (var r in t) {
                    var n = t[r];
                    if (void 0 === n && console && console.error) {
                        if (document.location.href.indexOf(".local") > 0) throw new Error("mkE O2O undefined key");
                        console.error("mkE O2O undefined key", t, r)
                    }
                    if (n && n.constructor == Object) e[r] || (e[r] = {}), o.O2O(e[r], n);
                    else try {
                        e[r] = n
                    } catch (e) {}
                }
                return e
            }, o.reset = function(e) {
                for (var t in e) return e[t];
                return null
            }, o.insertBefore = function(e, t) {
                t.parentNode.insertBefore(e, t)
            }, o.Base = n.p, o.Par = function() {}, o.Par.prototype.alt = "", o.Par.prototype.attr = {}, o.Par.prototype.checked = !1, o.Par.prototype.className = "", o.Par.prototype.data = null, o.Par.prototype.els = [], o.Par.prototype.href = "", o.Par.prototype.id = "", o.Par.prototype.innerHTML = "", o.Par.prototype.name = "", o.Par.prototype.onclick = null, o.Par.prototype.ondblclick = null, o.Par.prototype.onmouseenter = null, o.Par.prototype.onmouseleave = null, o.Par.prototype.ontouchstart = null, o.Par.prototype.ontouchmove = null, o.Par.prototype.ontouchend = null, o.Par.prototype.prop = {}, o.Par.prototype.src = "", o.Par.prototype.style = "", o.Par.prototype.tag = "", o.Par.prototype.target = "", o.Par.prototype.text = "", o.Par.prototype.title = "", o.Par.prototype.type = "", o.Par.prototype.value = "", (globalThis || {}).mkE = o, (globalThis || {}).tag = i
        },
        90227: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => n
            });
            const n = function() {};
            n.XXS = "XXS", n.XS = "XS", n.SM = "SM", n.MD = "MD", n.LG = "LG", n.XL = "XL", n.SIZES = {
                XXS: 0,
                XS: 540,
                SM: 768,
                MD: 992,
                LG: 1200,
                XL: 1600
            }, n.getWindowSize = function() {
                return window.innerWidth
            }, n.getContentSize = function() {
                return $(document).find(".dashboard__content").width()
            }, n.getBreakpointWidth = function(e) {
                return this.SIZES.hasOwnProperty(e) ? this.SIZES[e] : parseInt(e)
            }, n.isWindowBiggerThan = function(e) {
                return this.getWindowSize() >= this.getBreakpointWidth(e)
            }, n.isWindowSmallerThan = function(e) {
                return this.getWindowSize() < this.getBreakpointWidth(e)
            }, n.isContentBiggerThan = function(e) {
                return this.getContentSize() >= this.getBreakpointWidth(e)
            }, n.isContentSmallerThan = function(e) {
                return this.getContentSize() < this.getBreakpointWidth(e)
            }, n.getWindowBreakpoint = function() {
                const e = this.getWindowSize();
                let t = null,
                    r = -1 / 0;
                return Object.keys(n.SIZES).forEach((o => {
                    const i = n.SIZES[o];
                    e > i && r < i && (t = o, r = n.SIZES[t])
                })), {
                    key: t,
                    value: r
                }
            }, window && ((globalThis || {}).PFUtilsBreakpoints = n)
        },
        75270: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => i
            });
            var n = r(48488),
                o = r.n(n);
            const i = Class({
                STORAGE_KEY: "ga_origin_new_",
                STORAGE_KEY_PREFIX: "ga_event_custom_prefix_",
                STORAGE_KEY_ACTION_SUFFIX: "ga_action_suffix_",
                _expiryTime: 1800,
                _type: null,
                categoryNames: {},
                categoryActions: {},
                eventPrefixes: {},
                additionalData: {},
                purchaseEventData: {},
                __construct: function(e) {
                    this._type = e, this.categoryNames[i.Types.Registration] = "Registration", this.categoryNames[i.Types.Order] = "Order Completed", this.categoryActions[i.Types.Registration] = "Sign up successful", this.categoryActions[i.Types.Order] = "Order submission", this.eventPrefixes[i.Types.Registration] = "Sign up from ", this.eventPrefixes[i.Types.Order] = "Order from "
                },
                setOrigin: function(e) {
                    return this._remove(this.STORAGE_KEY + this._type), this._remove(this.STORAGE_KEY_ACTION_SUFFIX + this._type), this._set(this.STORAGE_KEY + this._type, e)
                },
                setOriginIfNotExist: function() {
                    this.getOrigin() || this.setOrigin("direct")
                },
                getOrigin: function(e) {
                    return e || (e = this._type), this._get(this.STORAGE_KEY + e)
                },
                removeOrigin: function() {
                    this._remove(this.STORAGE_KEY + this._type)
                },
                removePrefix: function() {
                    this._remove(this.STORAGE_KEY_PREFIX + i.Types.Order), this._remove(this.STORAGE_KEY_PREFIX + i.Types.Registration)
                },
                setCustomActionSuffix: function(e) {
                    return this._set(this.STORAGE_KEY_ACTION_SUFFIX + this._type, e)
                },
                setCustomActionPrefix: function(e) {
                    return this._set(this.STORAGE_KEY_PREFIX + this._type, e)
                },
                sendEvent: function() {
                    const e = this._getEventLabel();
                    if (!e) return !1;
                    const t = this._getEventCategory();
                    return window.dataLayer = window.dataLayer || [], ga("send", {
                        hitType: "event",
                        eventCategory: t,
                        eventAction: this._getCategoryAction(),
                        eventLabel: e
                    }), !0
                },
                _getEventCategory: function() {
                    return this.categoryNames[this._type]
                },
                _getCategoryAction: function() {
                    let e = "";
                    return this._getCustomActionSuffix() && (e = this._getCustomActionSuffix(), this._remove(this.STORAGE_KEY_ACTION_SUFFIX + this._type)), this.categoryActions[this._type] + e
                },
                _getEventLabel: function() {
                    const e = this.getOrigin(),
                        t = this._getEventPrefix();
                    return !!e && t + e
                },
                _getCustomActionSuffix: function() {
                    return this._get(this.STORAGE_KEY_ACTION_SUFFIX + this._type)
                },
                _getEventPrefix: function() {
                    const e = this._get(this.STORAGE_KEY_PREFIX + this._type);
                    return e || this.eventPrefixes[this._type]
                },
                _set: function(e, t) {
                    try {
                        return localStorage && localStorage.setItem(e, JSON.stringify({
                            value: t,
                            timestamp: o().now()
                        }))
                    } catch (e) {
                        console.log("Local storage not supported")
                    }
                },
                _remove: function(e) {
                    try {
                        return localStorage && localStorage.removeItem(e)
                    } catch (e) {
                        console.log("Local storage not supported")
                    }
                },
                _get: function(e) {
                    if (!localStorage || !localStorage.getItem(e)) return "";
                    const t = JSON.parse(localStorage.getItem(e));
                    return !t.timestamp || this._isItemExpired(t.timestamp) ? this._remove(e) : t.value
                },
                _isItemExpired: function(e) {
                    return o().unix(e + this._expiryTime) < o()()
                }
            });
            i.Types = {}, i.Types.Order = "order", i.Types.Registration = "registration", i.Types.RegistrationProgress = "registration-progress", i.beginRegistrationTracking = function(e, t) {
                const r = new i(i.Types.Registration);
                r.removePrefix(), r.setOrigin(t ? e + " " + window.location.pathname : e)
            }, i.beginOrderTracking = function(e, t) {
                const r = new i(i.Types.Order);
                r.setOrigin(e), r.removePrefix(), t && r.setCustomActionSuffix(t)
            }, i.sendCustomerTrackerEvent = function(e, t, r) {
                const n = new i(e);
                return t && (n.additionalData = t, n.purchaseEventData = r), n.sendEvent()
            }, i.saveCustomerTrackerOriginFromOrder = function() {
                const e = new i(i.Types.Registration),
                    t = e.getOrigin(i.Types.Order);
                e.setCustomActionPrefix("Sign up after order from "), e.setOrigin(t)
            }, i.removeCustomerTrackerOrigin = function(e) {
                const t = new i(e);
                t.removeOrigin(), t.removePrefix()
            }, "function" != typeof beginRegistrationTracking && (window.beginRegistrationTracking = i.beginRegistrationTracking), "function" != typeof beginOrderTracking && (window.beginOrderTracking = i.beginOrderTracking), "function" != typeof sendCustomerTrackerEvent && (window.sendCustomerTrackerEvent = i.sendCustomerTrackerEvent), "function" != typeof removeCustomerTrackerOrigin && (window.removeCustomerTrackerOrigin = i.removeCustomerTrackerOrigin), "function" != typeof saveCustomerTrackerOriginFromOrder && (window.saveCustomerTrackerOriginFromOrder = i.saveCustomerTrackerOriginFromOrder), (globalThis || {}).PFUtilsCustomerTracker = i
        },
        65557: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => g
            });
            var n = r(96486),
                o = r.n(n),
                i = r(65427);

            function a(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, d(n.key), n)
                }
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function u(e) {
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
                    var r, n = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return l(this, r)
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

            function p(e) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, p(e)
            }

            function f(e, t, r) {
                return (t = d(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function d(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            const h = /^[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*$/;

            function g(e, t, r) {
                window && y(e, t, window, r)
            }

            function y(e, t, r, n) {
                if (n = function() {
                        var e, t;
                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return r = o().isObjectLike(r) ? r : {}, (e = r).allowExistingPathRegister || (e.allowExistingPathRegister = globalThis.HAS_ECOM_ASSETS || !1), (t = r).skipIfPathExists || (t.skipIfPathExists = !1), r
                    }(n), !o().isObject(r)) throw new m("Attempting to register data onto a non-object!");
                ! function(e) {
                    if (o().isEmpty(e)) throw new m("Attempting to globally register data with an empty name!");
                    if (!o().isString(e)) throw new m("Attempting to globally register data with a non-string name!");
                    if (!e.match(h)) throw new m(`Attempting to globally register data with an invalid name - ${e}!`)
                }(e);
                const i = e.split(".");
                let a = r;
                for (let s = 0; s < i.length; s++) {
                    const c = s === i.length - 1,
                        u = i[s],
                        l = a.hasOwnProperty(u);
                    if (c)
                        if (l) {
                            if (n.skipIfPathExists) return;
                            if (!n.allowExistingPathRegister) {
                                const t = new m(`Attempting to register data on an already registered path - ${e}`);
                                return void console.error(t)
                            }
                            const i = o().get(r, e, null);
                            if (o().isObjectLike(t) && o().isObjectLike(i)) {
                                for (const e in i) t.hasOwnProperty(e) || (t[e] = i[e]);
                                a[u] = t
                            }
                        } else a[u] = t;
                    else l || (a[u] = {});
                    a = a[u]
                }
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
                    }), t && c(e, t)
                }(GlobalDataRegistryError, e);
                var t, r, n, o = u(GlobalDataRegistryError);

                function GlobalDataRegistryError() {
                    return s(this, GlobalDataRegistryError), o.apply(this, arguments)
                }
                return t = GlobalDataRegistryError, r && a(t.prototype, r), n && a(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }(i.yI);
            f(m, "code", "GLOBAL_DATA_REGISTRY_ERROR"), f(m, "defaultMessage", "Unknown global data registry error")
        },
        65613: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                logError: () => logError
            });
            var n = r(96486),
                o = r.n(n),
                i = r(65427);

            function logError(e) {
                let {
                    logToConsole: t = !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e instanceof Error || (e = o().isString(e) ? new i.yI(e) : new i.yI("Attempted to log invalid error!", {
                        info: {
                            invalidErrorContent: e
                        }
                    })), process.env.JEST_WORKER_ID) throw e;
                if (window.Sentry && window.Sentry.captureException(e), t) {
                    const t = [e];
                    e instanceof i.yI && t.push(e.fullInfo()), console.error.apply(this, t)
                }
            }
        },
        61169: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => a
            });
            var n = r(9651);

            function o(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, i(n.key), n)
                }
            }

            function i(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            let a = function() {
                function e() {
                    var t, r, n;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), t = this, n = void 0, (r = i(r = "node")) in t ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = n
                }
                var t, r, a;
                return t = e, r = [{
                    key: "append",
                    value: function(e) {
                        return this.node.component = this, this.node.append(e), this
                    }
                }, {
                    key: "prepend",
                    value: function(e) {
                        return this.node.component = this, this.node.prepend(e), this
                    }
                }, {
                    key: "remove",
                    value: function() {
                        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        return this.node.component = this, e && n.U.destroyNodeComponents(this.node), this.node.remove(), this
                    }
                }, {
                    key: "replace",
                    value: function(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return n.U.insertBefore(this.node, e), n.U.removeNode(e, t), this
                    }
                }, {
                    key: "detach",
                    value: function() {
                        if (!this.node) return null;
                        this.node.parentElement && this.node.parentElement.removeChild(this.node)
                    }
                }, {
                    key: "destroy",
                    value: function() {}
                }], r && o(t.prototype, r), a && o(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }()
        },
        79442: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                getVuex: () => _,
                initializeVuex: () => b,
                isVuexInitialized: () => v,
                moduleExistsAt: () => w,
                registerModuleAt: () => E,
                unregisterModuleAt: () => O
            });
            var n = r(20629),
                o = r(70538),
                i = r(96486),
                a = r.n(i);

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, h(n.key), n)
                }
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, u(e, t)
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
                    var r, n = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function p(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, f(e)
            }

            function d(e, t, r) {
                return (t = h(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function h(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            let g, y = function(e) {
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
                    }), t && u(e, t)
                }(VuexManagerError, e);
                var t, r, n, o = l(VuexManagerError);

                function VuexManagerError() {
                    return c(this, VuexManagerError), o.apply(this, arguments)
                }
                return t = VuexManagerError, r && s(t.prototype, r), n && s(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }(r(65427).yI);

            function m(e) {
                return function(t) {
                    const r = t.replaceState;
                    t.replaceState = function(t) {
                        const n = e(t) || t;
                        r.call(this, n)
                    }
                }
            }

            function b(e, t) {
                if (g) return _();
                const r = [...t ? [m(t)] : [], ...(null == e ? void 0 : e.plugins) || []];
                return o.default.use(n.ZP), g = new n.ZP.Store({
                    ...e || {},
                    plugins: r
                }), _()
            }

            function v() {
                return !!g
            }

            function _() {
                return g || b()
            }

            function E(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const {
                    skipIfAlreadyRegistered: n = !1
                } = r, o = _(), i = S(e), {
                    checkIfMissingAncestors: a,
                    checkIfAlreadyRegistered: s
                } = k(i);
                if (s) {
                    if (n) return;
                    throw new y(`Module '${e}' already registered!`)
                }
                if (a) throw new y(`Attempting to register nested module at '${e}' without ancestors being registered!`);
                o.registerModule(i, t)
            }

            function O(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const r = _(),
                    n = S(e),
                    {
                        unregisterNestedModules: o = !0
                    } = t,
                    {
                        checkIfMissing: i
                    } = k(n);
                if (i) return;
                const a = o ? [...T(n) || [], n] : [n];
                a.forEach((e => r.unregisterModule(e)))
            }

            function w(e) {
                return !!P(S(e))
            }

            function T(e) {
                const t = P(e);
                if (!t) return null;
                const r = e.slice(),
                    n = (e, t) => {
                        const r = Object.keys(e._children);
                        let o = [];
                        for (let i of r) {
                            const r = [...t, i],
                                a = e.getChild(i),
                                s = n(a, r.slice());
                            o = o.concat([...s, r])
                        }
                        return o
                    };
                return n(t, r)
            }

            function P(e) {
                let t = _()._modules.root;
                for (let r of e)
                    if (t = t.getChild(r), !t) return null;
                return t
            }

            function k(e) {
                const t = {
                    checkIfAlreadyRegistered: !1,
                    checkIfMissingAncestors: !1,
                    checkIfMissing: !1
                };
                let r = _().state || {};
                for (let n = 0; n < e.length; n++) {
                    const o = e[n],
                        i = n + 1 === e.length,
                        s = a().has(r, o);
                    s && i && (t.checkIfAlreadyRegistered = !0), s || (i || (t.checkIfMissingAncestors = !0), t.checkIfMissing = !0), r = r[o] || {}
                }
                return t
            }

            function S(e) {
                return (e + "").split("/").filter((e => e && e.length))
            }
            d(y, "code", "VUEX_MANAGER_ERROR"), d(y, "defaultMessage", "Unknown Vuex manager error")
        },
        65427: (e, t, r) => {
            "use strict";
            r.d(t, {
                xQ: () => b,
                yI: () => m
            });
            var n = r(94110),
                o = r(96486);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, g(n.key), n)
                }
            }

            function s(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function c(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && u(e, t)
            }

            function u(e, t) {
                return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, u(e, t)
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
                    var r, n = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function p(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return f(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }

            function h(e, t, r) {
                return (t = g(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function g(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            const y = "error";
            let m = function(e) {
                c(BaseAppError, e);
                var t = l(BaseAppError);

                function BaseAppError(e, r) {
                    var n;
                    if (i(this, BaseAppError), r) {
                        const e = r instanceof Error ? r : r.cause;
                        r = r instanceof Error ? {
                            cause: e
                        } : r
                    } else r = {};
                    const o = new.target || {
                        code: "UNKNOWN_APP_ERROR",
                        defaultMessage: "NO MESSAGE",
                        name: "UnknownAppError"
                    };
                    return r.info = {
                        code: o.code,
                        ...r.info || {}
                    }, e || (e = o.defaultMessage), r.name = o.name, h(f(n = t.call(this, r, e)), "level", y), h(f(n), "__EXTENDS_VERROR", !0), n
                }
                return s(BaseAppError, [{
                    key: "fullStack",
                    value: function() {
                        return n.Z.fullStack(this)
                    }
                }, {
                    key: "fullInfo",
                    value: function() {
                        return n.Z.info(this)
                    }
                }, {
                    key: "getTags",
                    value: function() {
                        return (0, o.pickBy)(this.fullInfo(), (e => (0, o.isString)(e) || (0, o.isNumber)(e) || (0, o.isBoolean)(e)))
                    }
                }]), BaseAppError
            }(n.Z);
            h(m, "code", "BASE_ERROR"), h(m, "defaultMessage", "Unexpected error occurred");
            let b = function(e) {
                c(RpcCallError, e);
                var t = l(RpcCallError);

                function RpcCallError() {
                    return i(this, RpcCallError), t.apply(this, arguments)
                }
                return s(RpcCallError)
            }(m);
            h(b, "code", "RPC_CALL_ERROR"), h(b, "defaultMessage", "RPC request failed!")
        },
        93920: (e, t, r) => {
            "use strict";
            r.d(t, {
                f: () => c,
                y: () => s
            });
            var n = r(96486),
                o = r.n(n),
                i = r(65427),
                a = r(75414);

            function s(e, t, r, n, s) {
                const c = {
                    requestUrl: r,
                    statusCode: e,
                    payload: s
                };
                let u, l;
                if (404 === e) new a.N({
                    type: a.N.TYPE_ERROR,
                    content: dlang("dashboard", "Whoa, we encountered an unexpected problem. Please, refresh the page and try again! If this persists, please contact us!")
                }), u = "RPC endpoint not found!", l = "RPC_ENDPOINT_NOT_FOUND";
                else if (504 === e) new a.N({
                    type: a.N.TYPE_ERROR,
                    content: dlang("dashboard", "Whoa, it seems that the communication to server timed-out. Please, refresh the page and try again! If this persists, please contact us!")
                }), u = "RPC call timed out!", l = "RPC_TIMED_OUT";
                else if (429 === e) alert(t.message), u = "RPC call throttled!", l = "RPC_THROTTLED";
                else if (403 === e) t.permissionError ? alert(t.permissionError + "\n\nUrl: " + r) : location.reload(), u = "Permission to call RPC endpoint denied!", l = "RPC_PERMISSION_DENIED";
                else if (302 === e) {
                    const e = n["X-Redirect-Error-Message"];
                    let t = "";
                    o().isEmpty(e) || (t = ` - ${e}`), new a.N({
                        type: a.N.TYPE_ERROR,
                        content: dlang("dashboard", "Sorry, an error occurred {messageSubstr}! If this issue persists, please contact support@printful.com").replace("{messageSubstr}", t)
                    }), u = "RPC call triggered a redirect!", l = "RPC_REDIRECT_ENCOUNTERED"
                } else if (0 !== e) {
                    if (503 === e) {
                        const e = "_pf_503_cf_reload";
                        if (!document.cookie.includes(e)) return document.cookie = `${e}=1;max-age=60`, location.reload(), u = "RPC call encountered CloudFlare challenge!", l = "RPC_CLOUDFLARE_CHALLENGE_ENCOUNTERED", new i.xQ(u, {
                            info: {
                                ...c,
                                code: l
                            }
                        })
                    }
                    new a.N({
                        type: a.N.TYPE_ERROR,
                        content: dlang("dashboard", "[ {statusCode} ] Sorry, an error occurred. Reload the page and try again. If this persists, please contact support@printful.com URL: {requestUrl}").replace("{statusCode}", e).replace("{requestUrl}", r)
                    })
                } else console.error("Unknown error", r, s);
                return u && l || (u = "RPC call encountered an unknown issue!", l = "RPC_UNKNOWN_ERROR"), new i.xQ(u, {
                    info: {
                        ...c,
                        code: l
                    }
                })
            }

            function c(e, t) {
                return e.output && console.info(t + " output:\n" + e.output), e.csrf && window.yii.setCsrfToken(e.csrf[0], e.csrf[1]), e.result
            }
        },
        97425: e => {
            e.exports = "https://static.cdn.printful.com/s/dist-pf/image-assets/logo-printful.2bd82709c4f430e9f3586ed626e23a05.png"
        }
    }
]);