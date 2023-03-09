/*
 * jQuery File Upload Processing Plugin 10.2.0
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license.
 * See license text here: https://opensource.org/licenses/MIT
 */

/* global define, require */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.fileupload"], e) : "object" == typeof exports ? e(require("jquery"), require("./jquery.fileupload")) : e(window.jQuery)
}(function(n) {
    "use strict";
    var i = n.blueimp.fileupload.prototype.options.add;
    n.widget("blueimp.fileupload", n.blueimp.fileupload, {
        options: {
            processQueue: [],
            add: function(e, r) {
                var s = n(this);
                r.process(function() {
                    return s.fileupload("process", r)
                }), i.call(this, e, r)
            }
        },
        processActions: {},
        _processFile: function(e, i) {
            var o = this,
                t = n.Deferred().resolveWith(o, [e]).promise();
            return this._trigger("process", null, e), n.each(e.processQueue, function(e, r) {
                function s(e) {
                    return i.errorThrown ? n.Deferred().rejectWith(o, [i]).promise() : o.processActions[r.action].call(o, e, r)
                }
                t = t.then(s, r.always && s)
            }), t.done(function() {
                o._trigger("processdone", null, e), o._trigger("processalways", null, e)
            }).fail(function() {
                o._trigger("processfail", null, e), o._trigger("processalways", null, e)
            }), t
        },
        _transformProcessQueue: function(o) {
            var r = [];
            n.each(o.processQueue, function() {
                var s = {},
                    e = this.action,
                    i = !0 === this.prefix ? e : this.prefix;
                n.each(this, function(e, r) {
                    "string" === n.type(r) && "@" === r.charAt(0) ? s[e] = o[r.slice(1) || (i ? i + e.charAt(0).toUpperCase() + e.slice(1) : e)] : s[e] = r
                }), r.push(s)
            }), o.processQueue = r
        },
        processing: function() {
            return this._processing
        },
        process: function(i) {
            var o = this,
                t = n.extend({}, this.options, i);
            return t.processQueue && t.processQueue.length && (this._transformProcessQueue(t), 0 === this._processing && this._trigger("processstart"), n.each(i.files, function(e) {
                function r() {
                    return i.errorThrown ? n.Deferred().rejectWith(o, [i]).promise() : o._processFile(s, i)
                }
                var s = e ? n.extend({}, t) : t;
                s.index = e, o._processing += 1, o._processingQueue = o._processingQueue.then(r, r).always(function() {
                    o._processing -= 1, 0 === o._processing && o._trigger("processstop")
                })
            })), this._processingQueue
        },
        _create: function() {
            this._super(), this._processing = 0, this._processingQueue = n.Deferred().resolveWith(this).promise()
        }
    })
});