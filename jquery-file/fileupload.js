/*
 * jQuery File Upload Plugin 10.2.0
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license.
 * See license text here: https://opensource.org/licenses/MIT
 */

/* global define, require */
/* eslint-disable new-cap */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "jquery-ui/ui/widget"], e) : "object" == typeof exports ? e(require("jquery"), require("./vendor/jquery.ui.widget")) : e(window.jQuery)
}(function(m) {
    "use strict";

    function e(i) {
        var n = "dragover" === i;
        return function(e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var t = e.dataTransfer;
            t && -1 !== m.inArray("Files", t.types) && !1 !== this._trigger(i, m.Event(i, {
                delegatedEvent: e
            })) && (e.preventDefault(), n && (t.dropEffect = "copy"))
        }
    }
    m.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || m('<input type="file"/>').prop("disabled")), m.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), m.support.xhrFormDataFileUpload = !!window.FormData, m.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), m.widget("blueimp.fileupload", {
        options: {
            dropZone: m(document),
            pasteZone: void 0,
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            limitMultiFileUploadSize: void 0,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            uniqueFilenames: void 0,
            messages: {
                uploadedBytes: "Uploaded bytes exceed file size"
            },
            i18n: function(i, e) {
                return i = this.messages[i] || i.toString(), e && m.each(e, function(e, t) {
                    i = i.replace("{" + e + "}", t)
                }), i
            },
            formData: function(e) {
                return e.serializeArray()
            },
            add: function(e, t) {
                if (e.isDefaultPrevented()) return !1;
                (t.autoUpload || !1 !== t.autoUpload && m(this).fileupload("option", "autoUpload")) && t.process().done(function() {
                    t.submit()
                })
            },
            processData: !1,
            contentType: !1,
            cache: !1,
            timeout: 0
        },
        _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _blobSlice: m.support.blobSlice && function() {
            return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
        },
        _BitrateTimer: function() {
            this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function(e, t, i) {
                var n = e - this.timestamp;
                return this.bitrate && i && !(i < n) || (this.bitrate = (t - this.loaded) * (1e3 / n) * 8, this.loaded = t, this.timestamp = e), this.bitrate
            }
        },
        _isXHRUpload: function(e) {
            return !e.forceIframeTransport && (!e.multipart && m.support.xhrFileUpload || m.support.xhrFormDataFileUpload)
        },
        _getFormData: function(e) {
            var i;
            return "function" === m.type(e.formData) ? e.formData(e.form) : m.isArray(e.formData) ? e.formData : "object" === m.type(e.formData) ? (i = [], m.each(e.formData, function(e, t) {
                i.push({
                    name: e,
                    value: t
                })
            }), i) : []
        },
        _getTotal: function(e) {
            var i = 0;
            return m.each(e, function(e, t) {
                i += t.size || 1
            }), i
        },
        _initProgressObject: function(e) {
            var t = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            e._progress ? m.extend(e._progress, t) : e._progress = t
        },
        _initResponseObject: function(e) {
            var t;
            if (e._response)
                for (t in e._response) Object.prototype.hasOwnProperty.call(e._response, t) && delete e._response[t];
            else e._response = {}
        },
        _onProgress: function(e, t) {
            if (e.lengthComputable) {
                var i, n = Date.now ? Date.now() : (new Date).getTime();
                if (t._time && t.progressInterval && n - t._time < t.progressInterval && e.loaded !== e.total) return;
                t._time = n, i = Math.floor(e.loaded / e.total * (t.chunkSize || t._progress.total)) + (t.uploadedBytes || 0), this._progress.loaded += i - t._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(n, this._progress.loaded, t.bitrateInterval), t._progress.loaded = t.loaded = i, t._progress.bitrate = t.bitrate = t._bitrateTimer.getBitrate(n, i, t.bitrateInterval), this._trigger("progress", m.Event("progress", {
                    delegatedEvent: e
                }), t), this._trigger("progressall", m.Event("progressall", {
                    delegatedEvent: e
                }), this._progress)
            }
        },
        _initProgressListener: function(i) {
            var n = this,
                e = i.xhr ? i.xhr() : m.ajaxSettings.xhr();
            e.upload && (m(e.upload).bind("progress", function(e) {
                var t = e.originalEvent;
                e.lengthComputable = t.lengthComputable, e.loaded = t.loaded, e.total = t.total, n._onProgress(e, i)
            }), i.xhr = function() {
                return e
            })
        },
        _deinitProgressListener: function(e) {
            var t = e.xhr ? e.xhr() : m.ajaxSettings.xhr();
            t.upload && m(t.upload).unbind("progress")
        },
        _isInstanceOf: function(e, t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        },
        _getUniqueFilename: function(e, t) {
            return t[e = String(e)] ? (e = e.replace(/(?: \(([\d]+)\))?(\.[^.]+)?$/, function(e, t, i) {
                return " (" + (t ? Number(t) + 1 : 1) + ")" + (i || "")
            }), this._getUniqueFilename(e, t)) : (t[e] = !0, e)
        },
        _initXHRData: function(n) {
            var r, o = this,
                e = n.files[0],
                t = n.multipart || !m.support.xhrFileUpload,
                s = "array" === m.type(n.paramName) ? n.paramName[0] : n.paramName;
            n.headers = m.extend({}, n.headers), n.contentRange && (n.headers["Content-Range"] = n.contentRange), t && !n.blob && this._isInstanceOf("File", e) || (n.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(e.uploadName || e.name) + '"'), t ? m.support.xhrFormDataFileUpload && (n.postMessage ? (r = this._getFormData(n), n.blob ? r.push({
                name: s,
                value: n.blob
            }) : m.each(n.files, function(e, t) {
                r.push({
                    name: "array" === m.type(n.paramName) && n.paramName[e] || s,
                    value: t
                })
            })) : (o._isInstanceOf("FormData", n.formData) ? r = n.formData : (r = new FormData, m.each(this._getFormData(n), function(e, t) {
                r.append(t.name, t.value)
            })), n.blob ? r.append(s, n.blob, e.uploadName || e.name) : m.each(n.files, function(e, t) {
                if (o._isInstanceOf("File", t) || o._isInstanceOf("Blob", t)) {
                    var i = t.uploadName || t.name;
                    n.uniqueFilenames && (i = o._getUniqueFilename(i, n.uniqueFilenames)), r.append("array" === m.type(n.paramName) && n.paramName[e] || s, t, i)
                }
            })), n.data = r) : (n.contentType = e.type || "application/octet-stream", n.data = n.blob || e), n.blob = null
        },
        _initIframeSettings: function(e) {
            var t = m("<a></a>").prop("href", e.url).prop("host");
            e.dataType = "iframe " + (e.dataType || ""), e.formData = this._getFormData(e), e.redirect && t && t !== location.host && e.formData.push({
                name: e.redirectParamName || "redirect",
                value: e.redirect
            })
        },
        _initDataSettings: function(e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
        },
        _getParamName: function(e) {
            var t = m(e.fileInput),
                n = e.paramName;
            return n ? m.isArray(n) || (n = [n]) : (n = [], t.each(function() {
                for (var e = m(this), t = e.prop("name") || "files[]", i = (e.prop("files") || [1]).length; i;) n.push(t), i -= 1
            }), n.length || (n = [t.prop("name") || "files[]"])), n
        },
        _initFormSettings: function(e) {
            e.form && e.form.length || (e.form = m(e.fileInput.prop("form")), e.form.length || (e.form = m(this.options.fileInput.prop("form")))), e.paramName = this._getParamName(e), e.url || (e.url = e.form.prop("action") || location.href), e.type = (e.type || "string" === m.type(e.form.prop("method")) && e.form.prop("method") || "").toUpperCase(), "POST" !== e.type && "PUT" !== e.type && "PATCH" !== e.type && (e.type = "POST"), e.formAcceptCharset || (e.formAcceptCharset = e.form.attr("accept-charset"))
        },
        _getAJAXSettings: function(e) {
            var t = m.extend({}, this.options, e);
            return this._initFormSettings(t), this._initDataSettings(t), t
        },
        _getDeferredState: function(e) {
            return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending"
        },
        _enhancePromise: function(e) {
            return e.success = e.done, e.error = e.fail, e.complete = e.always, e
        },
        _getXHRPromise: function(e, t, i) {
            var n = m.Deferred(),
                r = n.promise();
            return t = t || this.options.context || r, !0 === e ? n.resolveWith(t, i) : !1 === e && n.rejectWith(t, i), r.abort = n.promise, this._enhancePromise(r)
        },
        _addConvenienceMethods: function(e, i) {
            function n(e) {
                return m.Deferred().resolveWith(r, e).promise()
            }
            var r = this;
            i.process = function(e, t) {
                return (e || t) && (i._processQueue = this._processQueue = (this._processQueue || n([this])).then(function() {
                    return i.errorThrown ? m.Deferred().rejectWith(r, [i]).promise() : n(arguments)
                }).then(e, t)), this._processQueue || n([this])
            }, i.submit = function() {
                return "pending" !== this.state() && (i.jqXHR = this.jqXHR = !1 !== r._trigger("submit", m.Event("submit", {
                    delegatedEvent: e
                }), this) && r._onSend(e, this)), this.jqXHR || r._getXHRPromise()
            }, i.abort = function() {
                return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", r._trigger("fail", null, this), r._getXHRPromise(!1))
            }, i.state = function() {
                return this.jqXHR ? r._getDeferredState(this.jqXHR) : this._processQueue ? r._getDeferredState(this._processQueue) : void 0
            }, i.processing = function() {
                return !this.jqXHR && this._processQueue && "pending" === r._getDeferredState(this._processQueue)
            }, i.progress = function() {
                return this._progress
            }, i.response = function() {
                return this._response
            }
        },
        _getUploadedBytes: function(e) {
            var t = e.getResponseHeader("Range"),
                i = t && t.split("-"),
                n = i && 1 < i.length && parseInt(i[1], 10);
            return n && n + 1
        },
        _chunkedUpload: function(o, e) {
            o.uploadedBytes = o.uploadedBytes || 0;
            var t, s, a = this,
                i = o.files[0],
                l = i.size,
                p = o.uploadedBytes,
                u = o.maxChunkSize || l,
                d = this._blobSlice,
                h = m.Deferred(),
                n = h.promise();
            return !(!(this._isXHRUpload(o) && d && (p || ("function" === m.type(u) ? u(o) : u) < l)) || o.data) && (!!e || (l <= p ? (i.error = o.i18n("uploadedBytes"), this._getXHRPromise(!1, o.context, [null, "error", i.error])) : (s = function() {
                var n = m.extend({}, o),
                    r = n._progress.loaded;
                n.blob = d.call(i, p, p + ("function" === m.type(u) ? u(n) : u), i.type), n.chunkSize = n.blob.size, n.contentRange = "bytes " + p + "-" + (p + n.chunkSize - 1) + "/" + l, a._trigger("chunkbeforesend", null, n), a._initXHRData(n), a._initProgressListener(n), t = (!1 !== a._trigger("chunksend", null, n) && m.ajax(n) || a._getXHRPromise(!1, n.context)).done(function(e, t, i) {
                    p = a._getUploadedBytes(i) || p + n.chunkSize, r + n.chunkSize - n._progress.loaded && a._onProgress(m.Event("progress", {
                        lengthComputable: !0,
                        loaded: p - n.uploadedBytes,
                        total: p - n.uploadedBytes
                    }), n), o.uploadedBytes = n.uploadedBytes = p, n.result = e, n.textStatus = t, n.jqXHR = i, a._trigger("chunkdone", null, n), a._trigger("chunkalways", null, n), p < l ? s() : h.resolveWith(n.context, [e, t, i])
                }).fail(function(e, t, i) {
                    n.jqXHR = e, n.textStatus = t, n.errorThrown = i, a._trigger("chunkfail", null, n), a._trigger("chunkalways", null, n), h.rejectWith(n.context, [e, t, i])
                }).always(function() {
                    a._deinitProgressListener(n)
                })
            }, this._enhancePromise(n), n.abort = function() {
                return t.abort()
            }, s(), n)))
        },
        _beforeSend: function(e, t) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, this._progress.loaded += t.loaded, this._progress.total += t.total
        },
        _onDone: function(e, t, i, n) {
            var r = n._progress.total,
                o = n._response;
            n._progress.loaded < r && this._onProgress(m.Event("progress", {
                lengthComputable: !0,
                loaded: r,
                total: r
            }), n), o.result = n.result = e, o.textStatus = n.textStatus = t, o.jqXHR = n.jqXHR = i, this._trigger("done", null, n)
        },
        _onFail: function(e, t, i, n) {
            var r = n._response;
            n.recalculateProgress && (this._progress.loaded -= n._progress.loaded, this._progress.total -= n._progress.total), r.jqXHR = n.jqXHR = e, r.textStatus = n.textStatus = t, r.errorThrown = n.errorThrown = i, this._trigger("fail", null, n)
        },
        _onAlways: function(e, t, i, n) {
            this._trigger("always", null, n)
        },
        _onSend: function(e, t) {
            t.submit || this._addConvenienceMethods(e, t);

            function i() {
                return a._sending += 1, l._bitrateTimer = new a._BitrateTimer, n = n || ((r || !1 === a._trigger("send", m.Event("send", {
                    delegatedEvent: e
                }), l)) && a._getXHRPromise(!1, l.context, r) || a._chunkedUpload(l) || m.ajax(l)).done(function(e, t, i) {
                    a._onDone(e, t, i, l)
                }).fail(function(e, t, i) {
                    a._onFail(e, t, i, l)
                }).always(function(e, t, i) {
                    if (a._deinitProgressListener(l), a._onAlways(e, t, i, l), a._sending -= 1, a._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > a._sending)
                        for (var n = a._slots.shift(); n;) {
                            if ("pending" === a._getDeferredState(n)) {
                                n.resolve();
                                break
                            }
                            n = a._slots.shift()
                        }
                    0 === a._active && a._trigger("stop")
                })
            }
            var n, r, o, s, a = this,
                l = a._getAJAXSettings(t);
            return this._beforeSend(e, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? ((s = 1 < this.options.limitConcurrentUploads ? (o = m.Deferred(), this._slots.push(o), o.then(i)) : (this._sequence = this._sequence.then(i, i), this._sequence)).abort = function() {
                return r = [void 0, "abort", "abort"], n ? n.abort() : (o && o.rejectWith(l.context, r), i())
            }, this._enhancePromise(s)) : i()
        },
        _onAdd: function(n, r) {
            var o, e, s, t, a = this,
                l = !0,
                i = m.extend({}, this.options, r),
                p = r.files,
                u = p.length,
                d = i.limitMultiFileUploads,
                h = i.limitMultiFileUploadSize,
                c = i.limitMultiFileUploadSizeOverhead,
                f = 0,
                g = this._getParamName(i),
                _ = 0;
            if (!u) return !1;
            if (h && void 0 === p[0].size && (h = void 0), (i.singleFileUploads || d || h) && this._isXHRUpload(i))
                if (i.singleFileUploads || h || !d)
                    if (!i.singleFileUploads && h)
                        for (s = [], o = [], t = 0; t < u; t += 1) f += p[t].size + c, (t + 1 === u || f + p[t + 1].size + c > h || d && d <= t + 1 - _) && (s.push(p.slice(_, t + 1)), (e = g.slice(_, t + 1)).length || (e = g), o.push(e), _ = t + 1, f = 0);
                    else o = g;
            else
                for (s = [], o = [], t = 0; t < u; t += d) s.push(p.slice(t, t + d)), (e = g.slice(t, t + d)).length || (e = g), o.push(e);
            else s = [p], o = [g];
            return r.originalFiles = p, m.each(s || p, function(e, t) {
                var i = m.extend({}, r);
                return i.files = s ? t : [t], i.paramName = o[e], a._initResponseObject(i), a._initProgressObject(i), a._addConvenienceMethods(n, i), l = a._trigger("add", m.Event("add", {
                    delegatedEvent: n
                }), i)
            }), l
        },
        _replaceFileInput: function(e) {
            var i = e.fileInput,
                n = i.clone(!0),
                t = i.is(document.activeElement);
            e.fileInputClone = n, m("<form></form>").append(n)[0].reset(), i.after(n).detach(), t && n.focus(), m.cleanData(i.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function(e, t) {
                return t === i[0] ? n[0] : t
            }), i[0] === this.element[0] && (this.element = n)
        },
        _handleFileTreeEntry: function(t, i) {
            function n(e) {
                e && !e.entry && (e.entry = t), o.resolve([e])
            }
            var e, r = this,
                o = m.Deferred(),
                s = [],
                a = function() {
                    e.readEntries(function(e) {
                        e.length ? (s = s.concat(e), a()) : function(e) {
                            r._handleFileTreeEntries(e, i + t.name + "/").done(function(e) {
                                o.resolve(e)
                            }).fail(n)
                        }(s)
                    }, n)
                };
            return i = i || "", t.isFile ? t._file ? (t._file.relativePath = i, o.resolve(t._file)) : t.file(function(e) {
                e.relativePath = i, o.resolve(e)
            }, n) : t.isDirectory ? (e = t.createReader(), a()) : o.resolve([]), o.promise()
        },
        _handleFileTreeEntries: function(e, t) {
            var i = this;
            return m.when.apply(m, m.map(e, function(e) {
                return i._handleFileTreeEntry(e, t)
            })).then(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function(e) {
            var t = (e = e || {}).items;
            return t && t.length && (t[0].webkitGetAsEntry || t[0].getAsEntry) ? this._handleFileTreeEntries(m.map(t, function(e) {
                var t;
                return e.webkitGetAsEntry ? ((t = e.webkitGetAsEntry()) && (t._file = e.getAsFile()), t) : e.getAsEntry()
            })) : m.Deferred().resolve(m.makeArray(e.files)).promise()
        },
        _getSingleFileInputFiles: function(e) {
            var t, i, n = (e = m(e)).prop("webkitEntries") || e.prop("entries");
            if (n && n.length) return this._handleFileTreeEntries(n);
            if ((t = m.makeArray(e.prop("files"))).length) void 0 === t[0].name && t[0].fileName && m.each(t, function(e, t) {
                t.name = t.fileName, t.size = t.fileSize
            });
            else {
                if (!(i = e.prop("value"))) return m.Deferred().resolve([]).promise();
                t = [{
                    name: i.replace(/^.*\\/, "")
                }]
            }
            return m.Deferred().resolve(t).promise()
        },
        _getFileInputFiles: function(e) {
            return e instanceof m && 1 !== e.length ? m.when.apply(m, m.map(e, this._getSingleFileInputFiles)).then(function() {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(e)
        },
        _onChange: function(t) {
            var i = this,
                n = {
                    fileInput: m(t.target),
                    form: m(t.target.form)
                };
            this._getFileInputFiles(n.fileInput).always(function(e) {
                n.files = e, i.options.replaceFileInput && i._replaceFileInput(n), !1 !== i._trigger("change", m.Event("change", {
                    delegatedEvent: t
                }), n) && i._onAdd(t, n)
            })
        },
        _onPaste: function(e) {
            var t = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
                n = {
                    files: []
                };
            t && t.length && (m.each(t, function(e, t) {
                var i = t.getAsFile && t.getAsFile();
                i && n.files.push(i)
            }), !1 !== this._trigger("paste", m.Event("paste", {
                delegatedEvent: e
            }), n) && this._onAdd(e, n))
        },
        _onDrop: function(t) {
            t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
            var i = this,
                e = t.dataTransfer,
                n = {};
            e && e.files && e.files.length && (t.preventDefault(), this._getDroppedFiles(e).always(function(e) {
                n.files = e, !1 !== i._trigger("drop", m.Event("drop", {
                    delegatedEvent: t
                }), n) && i._onAdd(t, n)
            }))
        },
        _onDragOver: e("dragover"),
        _onDragEnter: e("dragenter"),
        _onDragLeave: e("dragleave"),
        _initEventHandlers: function() {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop,
                dragenter: this._onDragEnter,
                dragleave: this._onDragLeave
            }), this._on(this.options.pasteZone, {
                paste: this._onPaste
            })), m.support.fileInput && this._on(this.options.fileInput, {
                change: this._onChange
            })
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, "dragenter dragleave dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
        },
        _destroy: function() {
            this._destroyEventHandlers()
        },
        _setOption: function(e, t) {
            var i = -1 !== m.inArray(e, this._specialOptions);
            i && this._destroyEventHandlers(), this._super(e, t), i && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function() {
            var e = this.options;
            void 0 === e.fileInput ? e.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : e.fileInput instanceof m || (e.fileInput = m(e.fileInput)), e.dropZone instanceof m || (e.dropZone = m(e.dropZone)), e.pasteZone instanceof m || (e.pasteZone = m(e.pasteZone))
        },
        _getRegExp: function(e) {
            var t = e.split("/"),
                i = t.pop();
            return t.shift(), new RegExp(t.join("/"), i)
        },
        _isRegExpOption: function(e, t) {
            return "url" !== e && "string" === m.type(t) && /^\/.*\/[igm]{0,3}$/.test(t)
        },
        _initDataAttributes: function() {
            var r = this,
                o = this.options,
                s = this.element.data();
            m.each(this.element[0].attributes, function(e, t) {
                var i, n = t.name.toLowerCase();
                /^data-/.test(n) && (n = n.slice(5).replace(/-[a-z]/g, function(e) {
                    return e.charAt(1).toUpperCase()
                }), i = s[n], r._isRegExpOption(n, i) && (i = r._getRegExp(i)), o[n] = i)
            })
        },
        _create: function() {
            this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers()
        },
        active: function() {
            return this._active
        },
        progress: function() {
            return this._progress
        },
        add: function(t) {
            var i = this;
            t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(e) {
                t.files = e, i._onAdd(null, t)
            }) : (t.files = m.makeArray(t.files), this._onAdd(null, t)))
        },
        send: function(t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var i, n, r = this,
                        o = m.Deferred(),
                        e = o.promise();
                    return e.abort = function() {
                        return n = !0, i ? i.abort() : (o.reject(null, "abort", "abort"), e)
                    }, this._getFileInputFiles(t.fileInput).always(function(e) {
                        n || (e.length ? (t.files = e, (i = r._onSend(null, t)).then(function(e, t, i) {
                            o.resolve(e, t, i)
                        }, function(e, t, i) {
                            o.reject(e, t, i)
                        })) : o.reject())
                    }), this._enhancePromise(e)
                }
                if (t.files = m.makeArray(t.files), t.files.length) return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
});