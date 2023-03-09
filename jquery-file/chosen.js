(function() {
    var l, t, r, n, o = {}.hasOwnProperty;

    function e() {
        this.options_index = 0, this.parsed = []
    }

    function s(t, e) {
        this.form_field = t, this.options = null != e ? e : {}, s.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
    }

    function i() {
        return i.__super__.constructor.apply(this, arguments)
    }
    e.prototype.add_node = function(t) {
            return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
        }, e.prototype.add_group = function(t) {
            var e, s, i, r, o, n;
            for (e = this.parsed.length, this.parsed.push({
                    array_index: e,
                    group: !0,
                    label: this.escapeExpression(t.label),
                    title: t.title ? t.title : void 0,
                    children: 0,
                    disabled: t.disabled,
                    classes: t.className
                }), n = [], i = 0, r = (o = t.childNodes).length; i < r; i++) s = o[i], n.push(this.add_option(s, e, t.disabled));
            return n
        }, e.prototype.add_option = function(t, e, s) {
            if ("OPTION" === t.nodeName.toUpperCase()) return "" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: t.value,
                text: t.text,
                html: t.innerHTML,
                title: t.title ? t.title : void 0,
                selected: t.selected,
                disabled: !0 === s ? s : t.disabled,
                group_array_index: e,
                group_label: null != e ? this.parsed[e].label : null,
                classes: t.className,
                style: t.style.cssText,
                data: t.dataset,
                search_highlight_tag: t.search_highlight_tag
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1
        }, e.prototype.escapeExpression = function(t) {
            var e, s;
            return null == t || !1 === t ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, s = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(s, function(t) {
                return e[t] || "&amp;"
            })) : t
        }, (n = e).select_to_array = function(t) {
            var e, s, i, r, o;
            for (s = new n, i = 0, r = (o = t.childNodes).length; i < r; i++) e = o[i], s.add_node(e);
            return s.parsed
        }, s.prototype.set_default_values = function() {
            var e = this;
            return this.click_test_action = function(t) {
                return e.test_active_click(t)
            }, this.activate_action = function(t) {
                return e.activate_field(t)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.search_highlight_tag = this.options.search_highlight_tag, void 0 === this.search_highlight_tag && (this.search_highlight_tag = "em"), this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
        }, s.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || s.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || s.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || s.default_no_result_text
        }, s.prototype.choice_label = function(t) {
            if (this.include_group_label_in_selected && null != t.group_label) return "<b class='group-name'>" + t.group_label + "</b>" + t.html;
            var e = t.html;
            return t.data.selectvalue && (e = t.data.selectvalue), t.data.prepend && (e = mkE({
                tag: "div",
                els: [JSON.parse(t.data.prepend), e]
            }).innerHTML), e
        }, s.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, s.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, s.prototype.input_focus = function(t) {
            var e = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return e.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, s.prototype.input_blur = function(t) {
            var e = this;
            if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function() {
                return e.blur_test()
            }, 100)
        }, s.prototype.results_option_build = function(t) {
            var e, s, i, r, o;
            for (e = "", i = 0, r = (o = this.results_data).length; i < r; i++)(s = o[i]).group ? e += this.result_add_group(s) : e += this.result_add_option(s), (null != t ? t.first : void 0) && (s.selected && this.is_multiple ? this.choice_build(s) : s.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(s)));
            return e
        }, s.prototype.result_add_option = function(t) {
            var e, s;
            return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), (s = document.createElement("li")).className = e.join(" "), s.style.cssText = t.style, s.setAttribute("data-option-array-index", t.array_index), s.innerHTML = t.search_text, t.title && (s.title = t.title), t.data.prepend && s.prepend(mkE(JSON.parse(t.data.prepend))), this.outerHTML(s)) : ""
        }, s.prototype.result_add_group = function(t) {
            var e, s;
            return (t.search_match || t.group_match) && 0 < t.active_options ? ((e = []).push("group-result"), t.classes && e.push(t.classes), (s = document.createElement("li")).className = e.join(" "), s.innerHTML = t.search_text, t.title && (s.title = t.title), this.outerHTML(s)) : ""
        }, s.prototype.results_update_field = function() {
            if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
        }, s.prototype.reset_single_select_options = function() {
            var t, e, s, i, r;
            for (r = [], e = 0, s = (i = this.results_data).length; e < s; e++)(t = i[e]).selected ? r.push(t.selected = !1) : r.push(void 0);
            return r
        }, s.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, s.prototype.results_search = function(t) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, s.prototype.winnow_results = function() {
            var t, e, s, i, r, o, n, h, l, c, a, _, u, d;
            for (this.no_results_clear(), i = 0, t = (o = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(t, "i"), s = this.get_search_regex(t), _ = 0, u = (d = this.results_data).length; _ < u; _++)(e = d[_]).search_match = !1, r = null, this.include_option_in_results(e) && (e.group && (e.group_match = !1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (0 === (r = this.results_data[e.group_array_index]).active_options && r.search_match && (i += 1), r.active_options += 1), e.search_text = e.group ? e.label : e.html, e.group && !this.group_search || (e.search_match = this.search_string_match(e.search_text, s), e.search_match && !e.group && (i += 1), e.search_match ? (o.length && (n = e.search_text.search(l), c = this.search_highlight_tag ? "<" + this.search_highlight_tag + ">" : "", a = this.search_highlight_tag ? "</" + this.search_highlight_tag + ">" : "", h = e.search_text.substr(0, n + o.length) + a + e.search_text.substr(n + o.length), e.search_text = h.substr(0, n) + c + h.substr(n)), null != r && (r.group_match = !0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match = !0)));
            return this.result_clear_highlight(), i < 1 && o.length ? (this.update_results_content(""), this.no_results(o)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, s.prototype.get_search_regex = function(t) {
            var e;
            return e = this.search_contains ? "" : "^", new RegExp(e + t, "i")
        }, s.prototype.search_string_match = function(t, e) {
            var s, i, r, o;
            if (e.test(t)) return !0;
            if (this.enable_split_word_search && (0 <= t.indexOf(" ") || 0 === t.indexOf("[")) && (i = t.replace(/\[|\]/g, "").split(" ")).length)
                for (r = 0, o = i.length; r < o; r++)
                    if (s = i[r], e.test(s)) return !0
        }, s.prototype.choices_count = function() {
            var t, e, s;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (t = this.selected_option_count = 0, e = (s = this.form_field.options).length; t < e; t++) s[t].selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, s.prototype.choices_click = function(t) {
            if (t.preventDefault(), !this.results_showing && !this.is_disabled) return this.results_show()
        }, s.prototype.keyup_checker = function(t) {
            var e, s;
            switch (e = null != (s = t.which) ? s : t.keyCode, this.search_field_scale(), e) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && 0 < this.choices_count()) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (t.preventDefault(), this.results_showing) return this.result_select(t);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, s.prototype.clipboard_event_checker = function(t) {
            var e = this;
            return setTimeout(function() {
                return e.results_search()
            }, 50)
        }, s.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
        }, s.prototype.include_option_in_results = function(t) {
            return !(this.is_multiple && !this.display_selected_options && t.selected || !this.display_disabled_options && t.disabled || t.empty)
        }, s.prototype.search_results_touchstart = function(t) {
            return this.touch_started = !0, this.search_results_mouseover(t)
        }, s.prototype.search_results_touchmove = function(t) {
            return this.touch_started = !1, this.search_results_mouseout(t)
        }, s.prototype.search_results_touchend = function(t) {
            if (this.touch_started) return this.search_results_mouseup(t)
        }, s.prototype.outerHTML = function(t) {
            var e;
            return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t), e.innerHTML)
        }, s.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? 8 <= document.documentMode : /iP(od|hone|ad)/i.test(window.navigator.userAgent) ? window.chosenBypassMobile : !/Android/i.test(window.navigator.userAgent) || !/Mobile/i.test(window.navigator.userAgent) || window.chosenBypassMobile
        }, s.default_multiple_text = "Select Some Options", s.default_single_text = "Select an Option", s.default_no_result_text = "No results match", t = s, (l = jQuery).fn.extend({
            chosen: function(i) {
                return t.browser_is_supported() ? this.each(function(t) {
                    var e, s;
                    s = (e = l(this)).data("chosen"), "destroy" === i && s instanceof r ? s.destroy() : s instanceof r || e.data("chosen", new r(this, i))
                }) : this
            }
        }),
        function(t, e) {
            for (var s in e) o.call(e, s) && (t[s] = e[s]);

            function i() {
                this.constructor = t
            }
            i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype
        }(i, t), i.prototype.setup = function() {
            return this.form_field_jq = l(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, i.prototype.set_up_html = function() {
            var t, e;
            return (t = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), e = {
                class: t.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (e.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = l("<div />", e), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, i.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, i.prototype.register_observers = function() {
            var e = this;
            return this.container.bind("touchstart.chosen", function(t) {
                e.container_mousedown(t)
            }), this.container.bind("touchend.chosen", function(t) {
                return e.container_mouseup(t), t.preventDefault()
            }), this.container.bind("mousedown.chosen", function(t) {
                e.container_mousedown(t)
            }), this.container.bind("mouseup.chosen", function(t) {
                e.container_mouseup(t)
            }), this.container.bind("mouseenter.chosen", function(t) {
                e.mouse_enter(t)
            }), this.container.bind("mouseleave.chosen", function(t) {
                e.mouse_leave(t)
            }), this.search_results.bind("mouseup.chosen", function(t) {
                e.search_results_mouseup(t)
            }), this.search_results.bind("mouseover.chosen", function(t) {
                e.search_results_mouseover(t)
            }), this.search_results.bind("mouseout.chosen", function(t) {
                e.search_results_mouseout(t)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(t) {
                e.search_results_mousewheel(t)
            }), this.search_results.bind("touchstart.chosen", function(t) {
                e.search_results_touchstart(t)
            }), this.search_results.bind("touchmove.chosen", function(t) {
                e.search_results_touchmove(t)
            }), this.search_results.bind("touchend.chosen", function(t) {
                e.search_results_touchend(t)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(t) {
                e.results_update_field(t)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(t) {
                e.activate_field(t)
            }), this.form_field_jq.bind("chosen:open.chosen", function(t) {
                e.container_mousedown(t)
            }), this.form_field_jq.bind("chosen:close.chosen", function(t) {
                e.input_blur(t)
            }), this.search_field.bind("blur.chosen", function(t) {
                e.input_blur(t)
            }), this.search_field.bind("keyup.chosen", function(t) {
                e.keyup_checker(t)
            }), this.search_field.bind("keydown.chosen", function(t) {
                e.keydown_checker(t)
            }), this.search_field.bind("focus.chosen", function(t) {
                e.input_focus(t)
            }), this.search_field.bind("cut.chosen", function(t) {
                e.clipboard_event_checker(t)
            }), this.search_field.bind("paste.chosen", function(t) {
                e.clipboard_event_checker(t)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(t) {
                e.choices_click(t)
            }) : this.container.bind("click.chosen", function(t) {
                t.preventDefault()
            })
        }, i.prototype.destroy = function() {
            return l(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, i.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, i.prototype.container_mousedown = function(t) {
            if (!this.is_disabled && (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null == t || !l(t.target).hasClass("search-choice-close"))) return this.active_field ? this.is_multiple || !t || l(t.target)[0] !== this.selected_item[0] && !l(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), l(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field()
        }, i.prototype.container_mouseup = function(t) {
            if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t)
        }, i.prototype.search_results_mousewheel = function(t) {
            var e;
            if (t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop())
        }, i.prototype.blur_test = function(t) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
        }, i.prototype.close_field = function() {
            return l(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, i.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, i.prototype.test_active_click = function(t) {
            var e;
            return (e = l(t.target).closest(".chosen-container")).length && this.container[0] === e[0] ? this.active_field = !0 : this.close_field()
        }, i.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = n.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, i.prototype.result_do_highlight = function(t) {
            var e, s, i, r;
            if (t.length) {
                if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), (i = parseInt(this.search_results.css("maxHeight"), 10)) + (r = this.search_results.scrollTop()) <= (e = (s = this.result_highlight.position().top + this.search_results.scrollTop()) + this.result_highlight.outerHeight())) return this.search_results.scrollTop(0 < e - i ? e - i : 0);
                if (s < r) return this.search_results.scrollTop(s)
            }
        }, i.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, i.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, i.prototype.update_results_content = function(t) {
            return this.search_results.html(t)
        }, i.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, i.prototype.set_tab_index = function(t) {
            var e;
            if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e
        }, i.prototype.set_label_behavior = function() {
            var e = this;
            if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = l("label[for='" + this.form_field.id + "']")), 0 < this.form_field_label.length) return this.form_field_label.bind("click.chosen", function(t) {
                return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
            })
        }, i.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, i.prototype.search_results_mouseup = function(t) {
            var e;
            if ((e = l(t.target).hasClass("active-result") ? l(t.target) : l(t.target).parents(".active-result").first()).length) return this.result_highlight = e, this.result_select(t), this.search_field.focus()
        }, i.prototype.search_results_mouseover = function(t) {
            var e;
            if (e = l(t.target).hasClass("active-result") ? l(t.target) : l(t.target).parents(".active-result").first()) return this.result_do_highlight(e)
        }, i.prototype.search_results_mouseout = function(t) {
            if (l(t.target).hasClass("active-result")) return this.result_clear_highlight()
        }, i.prototype.choice_build = function(t) {
            var e, s, i = this;
            return e = l("<li />", {
                class: "search-choice"
            }).html("<span>" + this.choice_label(t) + "</span>"), t.disabled ? e.addClass("search-choice-disabled") : ((s = l("<a />", {
                class: "search-choice-close",
                "data-option-array-index": t.array_index
            })).bind("touchstart.chosen click.chosen", function(t) {
                return i.choice_destroy_link_click(t)
            }), e.append(s)), this.search_container.before(e)
        }, i.prototype.choice_destroy_link_click = function(t) {
            if (t.preventDefault(), t.stopPropagation(), !this.is_disabled) return this.choice_destroy(l(t.target))
        }, i.prototype.choice_destroy = function(t) {
            if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.show_search_field_default(), this.is_multiple && 0 < this.choices_count() && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()
        }, i.prototype.results_reset = function() {
            if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field) return this.results_hide()
        }, i.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, i.prototype.result_select = function(t) {
            var e, s;
            if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), (s = this.results_data[e[0].getAttribute("data-option-array-index")]).selected = !0, this.form_field.options[s.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(s) : this.single_set_selected_text(this.choice_label(s)), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), !this.is_multiple && this.form_field.selectedIndex === this.current_selectedIndex || this.form_field_jq.trigger("change", {
                selected: this.form_field.options[s.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale())
        }, i.prototype.single_set_selected_text = function(t) {
            return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t)
        }, i.prototype.result_deselect = function(t) {
            var e;
            return e = this.results_data[t], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[e.options_index].value
            }), this.search_field_scale(), !0)
        }, i.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
        }, i.prototype.get_search_text = function() {
            return l("<div/>").text(l.trim(this.search_field.val())).html()
        }, i.prototype.winnow_results_set_highlight = function() {
            var t, e;
            if (null != (t = (e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result")).length ? e.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(t)
        }, i.prototype.no_results = function(t) {
            var e;
            return (e = l('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>')).find("span").first().html(t), this.search_results.append(e), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, i.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, i.prototype.keydown_arrow = function() {
            var t;
            return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
        }, i.prototype.keyup_arrow = function() {
            var t;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (0 < this.choices_count() && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
        }, i.prototype.keydown_backstroke = function() {
            var t;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
        }, i.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, i.prototype.keydown_checker = function(t) {
            var e, s;
            switch (e = null != (s = t.which) ? s : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                    break;
                case 13:
                    this.results_showing && t.preventDefault();
                    break;
                case 32:
                    this.disable_search && t.preventDefault();
                    break;
                case 38:
                    t.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    t.preventDefault(), this.keydown_arrow()
            }
        }, i.prototype.search_field_scale = function() {
            var t, e, s, i, r, o, n, h;
            if (this.is_multiple) {
                for (i = "position:absolute; left: -1000px; top: -1000px; display:none;", n = o = 0, h = (r = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"]).length; n < h; n++) i += (s = r[n]) + ":" + this.search_field.css(s) + ";";
                return (t = l("<div />", {
                    style: i
                })).text(this.search_field.val()), l("body").append(t), o = t.width() + 25, t.remove(), (e = this.container.outerWidth()) - 10 < o && (o = e - 10), this.search_field.css({
                    width: o + "px"
                })
            }
        }, r = i
}).call(this);