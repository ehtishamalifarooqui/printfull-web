/*! License information is available at https://static.cdn.printful.com/dist-pf/91642.licenses.txt if third party dependencies are included */
"use strict";
(self.webpackChunkwebpackpf = self.webpackChunkwebpackpf || []).push([
    [91642], {
        91642: (e, t, n) => {
            n.d(t, {
                ZP: () => ie,
                Ps: () => H
            });
            var r = n(70655);

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }
            var o = n(99763);

            function a(e, t) {
                for (var n, r = /\r\n|[\n\r]/g, i = 1, o = t + 1;
                    (n = r.exec(e.body)) && n.index < t;) i += 1, o = t + 1 - (n.index + n[0].length);
                return {
                    line: i,
                    column: o
                }
            }

            function s(e) {
                return c(e.source, a(e.source, e.start))
            }

            function c(e, t) {
                var n = e.locationOffset.column - 1,
                    r = l(n) + e.body,
                    i = t.line - 1,
                    o = e.locationOffset.line - 1,
                    a = t.line + o,
                    s = 1 === t.line ? n : 0,
                    c = t.column + s,
                    p = "".concat(e.name, ":").concat(a, ":").concat(c, "\n"),
                    h = r.split(/\r\n|[\n\r]/g),
                    f = h[i];
                if (f.length > 120) {
                    for (var d = Math.floor(c / 80), E = c % 80, v = [], y = 0; y < f.length; y += 80) v.push(f.slice(y, y + 80));
                    return p + u([
                        ["".concat(a), v[0]]
                    ].concat(v.slice(1, d + 1).map((function(e) {
                        return ["", e]
                    })), [
                        [" ", l(E - 1) + "^"],
                        ["", v[d + 1]]
                    ]))
                }
                return p + u([
                    ["".concat(a - 1), h[i - 1]],
                    ["".concat(a), f],
                    ["", l(c - 1) + "^"],
                    ["".concat(a + 1), h[i + 1]]
                ])
            }

            function u(e) {
                var t = e.filter((function(e) {
                        e[0];
                        return void 0 !== e[1]
                    })),
                    n = Math.max.apply(Math, t.map((function(e) {
                        return e[0].length
                    })));
                return t.map((function(e) {
                    var t, r = e[0],
                        i = e[1];
                    return l(n - (t = r).length) + t + (i ? " | " + i : " |")
                })).join("\n")
            }

            function l(e) {
                return Array(e + 1).join(" ")
            }

            function p(e) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, p(e)
            }

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function E(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? v(e) : t
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return y = function(e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return N(e, arguments, I(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), m(r, e)
                }, y(e)
            }

            function N(e, t, n) {
                return N = T() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var i = new(Function.bind.apply(e, r));
                    return n && m(i, n.prototype), i
                }, N.apply(null, arguments)
            }

            function T() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function m(e, t) {
                return m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, m(e, t)
            }

            function I(e) {
                return I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, I(e)
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && m(e, t)
                }(GraphQLError, e);
                var t, n, r, u, l, p = (t = GraphQLError, n = T(), function() {
                    var e, r = I(t);
                    if (n) {
                        var i = I(this).constructor;
                        e = Reflect.construct(r, arguments, i)
                    } else e = r.apply(this, arguments);
                    return E(this, e)
                });

                function GraphQLError(e, t, n, r, o, s, c) {
                    var u, l, d, y;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, GraphQLError), (y = p.call(this, e)).name = "GraphQLError", y.originalError = null != s ? s : void 0, y.nodes = _(Array.isArray(t) ? t : t ? [t] : void 0);
                    for (var N = [], T = 0, m = null !== (I = y.nodes) && void 0 !== I ? I : []; T < m.length; T++) {
                        var I, O = m[T].loc;
                        null != O && N.push(O)
                    }
                    N = _(N), y.source = null != n ? n : null === (u = N) || void 0 === u ? void 0 : u[0].source, y.positions = null != r ? r : null === (l = N) || void 0 === l ? void 0 : l.map((function(e) {
                        return e.start
                    })), y.locations = r && n ? r.map((function(e) {
                        return a(n, e)
                    })) : null === (d = N) || void 0 === d ? void 0 : d.map((function(e) {
                        return a(e.source, e.start)
                    })), y.path = null != o ? o : void 0;
                    var x, A = null == s ? void 0 : s.extensions;
                    return null == c && ("object" == i(x = A) && null !== x) ? y.extensions = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? h(Object(n), !0).forEach((function(t) {
                                f(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, A) : y.extensions = null != c ? c : {}, Object.defineProperties(v(y), {
                        message: {
                            enumerable: !0
                        },
                        locations: {
                            enumerable: null != y.locations
                        },
                        path: {
                            enumerable: null != y.path
                        },
                        extensions: {
                            enumerable: null != y.extensions && Object.keys(y.extensions).length > 0
                        },
                        name: {
                            enumerable: !1
                        },
                        nodes: {
                            enumerable: !1
                        },
                        source: {
                            enumerable: !1
                        },
                        positions: {
                            enumerable: !1
                        },
                        originalError: {
                            enumerable: !1
                        }
                    }), null != s && s.stack ? (Object.defineProperty(v(y), "stack", {
                        value: s.stack,
                        writable: !0,
                        configurable: !0
                    }), E(y)) : (Error.captureStackTrace ? Error.captureStackTrace(v(y), GraphQLError) : Object.defineProperty(v(y), "stack", {
                        value: Error().stack,
                        writable: !0,
                        configurable: !0
                    }), y)
                }
                return r = GraphQLError, (u = [{
                    key: "toString",
                    value: function() {
                        return function printError(e) {
                            var t = e.message;
                            if (e.nodes)
                                for (var n = 0, r = e.nodes; n < r.length; n++) {
                                    var i = r[n];
                                    i.loc && (t += "\n\n" + s(i.loc))
                                } else if (e.source && e.locations)
                                    for (var o = 0, a = e.locations; o < a.length; o++) {
                                        var u = a[o];
                                        t += "\n\n" + c(e.source, u)
                                    }
                            return t
                        }(this)
                    }
                }, {
                    key: o.YF,
                    get: function() {
                        return "Object"
                    }
                }]) && d(r.prototype, u), l && d(r, l), GraphQLError
            }(y(Error));

            function _(e) {
                return void 0 === e || 0 === e.length ? void 0 : e
            }

            function syntaxError(e, t, n) {
                return new O("Syntax Error: ".concat(n), void 0, e, [t])
            }
            var x = Object.freeze({
                    NAME: "Name",
                    DOCUMENT: "Document",
                    OPERATION_DEFINITION: "OperationDefinition",
                    VARIABLE_DEFINITION: "VariableDefinition",
                    SELECTION_SET: "SelectionSet",
                    FIELD: "Field",
                    ARGUMENT: "Argument",
                    FRAGMENT_SPREAD: "FragmentSpread",
                    INLINE_FRAGMENT: "InlineFragment",
                    FRAGMENT_DEFINITION: "FragmentDefinition",
                    VARIABLE: "Variable",
                    INT: "IntValue",
                    FLOAT: "FloatValue",
                    STRING: "StringValue",
                    BOOLEAN: "BooleanValue",
                    NULL: "NullValue",
                    ENUM: "EnumValue",
                    LIST: "ListValue",
                    OBJECT: "ObjectValue",
                    OBJECT_FIELD: "ObjectField",
                    DIRECTIVE: "Directive",
                    NAMED_TYPE: "NamedType",
                    LIST_TYPE: "ListType",
                    NON_NULL_TYPE: "NonNullType",
                    SCHEMA_DEFINITION: "SchemaDefinition",
                    OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
                    SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
                    OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
                    FIELD_DEFINITION: "FieldDefinition",
                    INPUT_VALUE_DEFINITION: "InputValueDefinition",
                    INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
                    UNION_TYPE_DEFINITION: "UnionTypeDefinition",
                    ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
                    ENUM_VALUE_DEFINITION: "EnumValueDefinition",
                    INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
                    DIRECTIVE_DEFINITION: "DirectiveDefinition",
                    SCHEMA_EXTENSION: "SchemaExtension",
                    SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
                    OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
                    INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
                    UNION_TYPE_EXTENSION: "UnionTypeExtension",
                    ENUM_TYPE_EXTENSION: "EnumTypeExtension",
                    INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
                }),
                A = n(25217),
                b = Object.freeze({
                    SOF: "<SOF>",
                    EOF: "<EOF>",
                    BANG: "!",
                    DOLLAR: "$",
                    AMP: "&",
                    PAREN_L: "(",
                    PAREN_R: ")",
                    SPREAD: "...",
                    COLON: ":",
                    EQUALS: "=",
                    AT: "@",
                    BRACKET_L: "[",
                    BRACKET_R: "]",
                    BRACE_L: "{",
                    PIPE: "|",
                    BRACE_R: "}",
                    NAME: "Name",
                    INT: "Int",
                    FLOAT: "Float",
                    STRING: "String",
                    BLOCK_STRING: "BlockString",
                    COMMENT: "Comment"
                }),
                k = n(10143),
                D = Object.freeze({
                    QUERY: "QUERY",
                    MUTATION: "MUTATION",
                    SUBSCRIPTION: "SUBSCRIPTION",
                    FIELD: "FIELD",
                    FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
                    FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
                    INLINE_FRAGMENT: "INLINE_FRAGMENT",
                    VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
                    SCHEMA: "SCHEMA",
                    SCALAR: "SCALAR",
                    OBJECT: "OBJECT",
                    FIELD_DEFINITION: "FIELD_DEFINITION",
                    ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
                    INTERFACE: "INTERFACE",
                    UNION: "UNION",
                    ENUM: "ENUM",
                    ENUM_VALUE: "ENUM_VALUE",
                    INPUT_OBJECT: "INPUT_OBJECT",
                    INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
                }),
                S = n(87392),
                g = function() {
                    function e(e) {
                        var t = new A.WU(b.SOF, 0, 0, 0, 0, null);
                        this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
                    }
                    var t = e.prototype;
                    return t.advance = function() {
                        return this.lastToken = this.token, this.token = this.lookahead()
                    }, t.lookahead = function() {
                        var e = this.token;
                        if (e.kind !== b.EOF)
                            do {
                                var t;
                                e = null !== (t = e.next) && void 0 !== t ? t : e.next = R(this, e)
                            } while (e.kind === b.COMMENT);
                        return e
                    }, e
                }();

            function w(e) {
                return isNaN(e) ? b.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
            }

            function R(e, t) {
                for (var n = e.source, r = n.body, i = r.length, o = t.end; o < i;) {
                    var a = r.charCodeAt(o),
                        s = e.line,
                        c = 1 + o - e.lineStart;
                    switch (a) {
                        case 65279:
                        case 9:
                        case 32:
                        case 44:
                            ++o;
                            continue;
                        case 10:
                            ++o, ++e.line, e.lineStart = o;
                            continue;
                        case 13:
                            10 === r.charCodeAt(o + 1) ? o += 2 : ++o, ++e.line, e.lineStart = o;
                            continue;
                        case 33:
                            return new A.WU(b.BANG, o, o + 1, s, c, t);
                        case 35:
                            return L(n, o, s, c, t);
                        case 36:
                            return new A.WU(b.DOLLAR, o, o + 1, s, c, t);
                        case 38:
                            return new A.WU(b.AMP, o, o + 1, s, c, t);
                        case 40:
                            return new A.WU(b.PAREN_L, o, o + 1, s, c, t);
                        case 41:
                            return new A.WU(b.PAREN_R, o, o + 1, s, c, t);
                        case 46:
                            if (46 === r.charCodeAt(o + 1) && 46 === r.charCodeAt(o + 2)) return new A.WU(b.SPREAD, o, o + 3, s, c, t);
                            break;
                        case 58:
                            return new A.WU(b.COLON, o, o + 1, s, c, t);
                        case 61:
                            return new A.WU(b.EQUALS, o, o + 1, s, c, t);
                        case 64:
                            return new A.WU(b.AT, o, o + 1, s, c, t);
                        case 91:
                            return new A.WU(b.BRACKET_L, o, o + 1, s, c, t);
                        case 93:
                            return new A.WU(b.BRACKET_R, o, o + 1, s, c, t);
                        case 123:
                            return new A.WU(b.BRACE_L, o, o + 1, s, c, t);
                        case 124:
                            return new A.WU(b.PIPE, o, o + 1, s, c, t);
                        case 125:
                            return new A.WU(b.BRACE_R, o, o + 1, s, c, t);
                        case 34:
                            return 34 === r.charCodeAt(o + 1) && 34 === r.charCodeAt(o + 2) ? M(n, o, s, c, t, e) : U(n, o, s, c, t);
                        case 45:
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            return F(n, o, a, s, c, t);
                        case 65:
                        case 66:
                        case 67:
                        case 68:
                        case 69:
                        case 70:
                        case 71:
                        case 72:
                        case 73:
                        case 74:
                        case 75:
                        case 76:
                        case 77:
                        case 78:
                        case 79:
                        case 80:
                        case 81:
                        case 82:
                        case 83:
                        case 84:
                        case 85:
                        case 86:
                        case 87:
                        case 88:
                        case 89:
                        case 90:
                        case 95:
                        case 97:
                        case 98:
                        case 99:
                        case 100:
                        case 101:
                        case 102:
                        case 103:
                        case 104:
                        case 105:
                        case 106:
                        case 107:
                        case 108:
                        case 109:
                        case 110:
                        case 111:
                        case 112:
                        case 113:
                        case 114:
                        case 115:
                        case 116:
                        case 117:
                        case 118:
                        case 119:
                        case 120:
                        case 121:
                        case 122:
                            return j(n, o, s, c, t)
                    }
                    throw syntaxError(n, o, C(a))
                }
                var u = e.line,
                    l = 1 + o - e.lineStart;
                return new A.WU(b.EOF, i, i, u, l, t)
            }

            function C(e) {
                return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(w(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(w(e), ".")
            }

            function L(e, t, n, r, i) {
                var o, a = e.body,
                    s = t;
                do {
                    o = a.charCodeAt(++s)
                } while (!isNaN(o) && (o > 31 || 9 === o));
                return new A.WU(b.COMMENT, t, s, n, r, i, a.slice(t + 1, s))
            }

            function F(e, t, n, r, i, o) {
                var a = e.body,
                    s = n,
                    c = t,
                    u = !1;
                if (45 === s && (s = a.charCodeAt(++c)), 48 === s) {
                    if ((s = a.charCodeAt(++c)) >= 48 && s <= 57) throw syntaxError(e, c, "Invalid number, unexpected digit after 0: ".concat(w(s), "."))
                } else c = P(e, c, s), s = a.charCodeAt(c);
                if (46 === s && (u = !0, s = a.charCodeAt(++c), c = P(e, c, s), s = a.charCodeAt(c)), 69 !== s && 101 !== s || (u = !0, 43 !== (s = a.charCodeAt(++c)) && 45 !== s || (s = a.charCodeAt(++c)), c = P(e, c, s), s = a.charCodeAt(c)), 46 === s || function(e) {
                        return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
                    }(s)) throw syntaxError(e, c, "Invalid number, expected digit but got: ".concat(w(s), "."));
                return new A.WU(u ? b.FLOAT : b.INT, t, c, r, i, o, a.slice(t, c))
            }

            function P(e, t, n) {
                var r = e.body,
                    i = t,
                    o = n;
                if (o >= 48 && o <= 57) {
                    do {
                        o = r.charCodeAt(++i)
                    } while (o >= 48 && o <= 57);
                    return i
                }
                throw syntaxError(e, i, "Invalid number, expected digit but got: ".concat(w(o), "."))
            }

            function U(e, t, n, r, i) {
                for (var o, a, s, c, u = e.body, l = t + 1, p = l, h = 0, f = ""; l < u.length && !isNaN(h = u.charCodeAt(l)) && 10 !== h && 13 !== h;) {
                    if (34 === h) return f += u.slice(p, l), new A.WU(b.STRING, t, l + 1, n, r, i, f);
                    if (h < 32 && 9 !== h) throw syntaxError(e, l, "Invalid character within String: ".concat(w(h), "."));
                    if (++l, 92 === h) {
                        switch (f += u.slice(p, l - 1), h = u.charCodeAt(l)) {
                            case 34:
                                f += '"';
                                break;
                            case 47:
                                f += "/";
                                break;
                            case 92:
                                f += "\\";
                                break;
                            case 98:
                                f += "\b";
                                break;
                            case 102:
                                f += "\f";
                                break;
                            case 110:
                                f += "\n";
                                break;
                            case 114:
                                f += "\r";
                                break;
                            case 116:
                                f += "\t";
                                break;
                            case 117:
                                var d = (o = u.charCodeAt(l + 1), a = u.charCodeAt(l + 2), s = u.charCodeAt(l + 3), c = u.charCodeAt(l + 4), B(o) << 12 | B(a) << 8 | B(s) << 4 | B(c));
                                if (d < 0) {
                                    var E = u.slice(l + 1, l + 5);
                                    throw syntaxError(e, l, "Invalid character escape sequence: \\u".concat(E, "."))
                                }
                                f += String.fromCharCode(d), l += 4;
                                break;
                            default:
                                throw syntaxError(e, l, "Invalid character escape sequence: \\".concat(String.fromCharCode(h), "."))
                        }
                        p = ++l
                    }
                }
                throw syntaxError(e, l, "Unterminated string.")
            }

            function M(e, t, n, r, i, o) {
                for (var a = e.body, s = t + 3, c = s, u = 0, l = ""; s < a.length && !isNaN(u = a.charCodeAt(s));) {
                    if (34 === u && 34 === a.charCodeAt(s + 1) && 34 === a.charCodeAt(s + 2)) return l += a.slice(c, s), new A.WU(b.BLOCK_STRING, t, s + 3, n, r, i, (0, S.W7)(l));
                    if (u < 32 && 9 !== u && 10 !== u && 13 !== u) throw syntaxError(e, s, "Invalid character within String: ".concat(w(u), "."));
                    10 === u ? (++s, ++o.line, o.lineStart = s) : 13 === u ? (10 === a.charCodeAt(s + 1) ? s += 2 : ++s, ++o.line, o.lineStart = s) : 92 === u && 34 === a.charCodeAt(s + 1) && 34 === a.charCodeAt(s + 2) && 34 === a.charCodeAt(s + 3) ? (l += a.slice(c, s) + '"""', c = s += 4) : ++s
                }
                throw syntaxError(e, s, "Unterminated string.")
            }

            function B(e) {
                return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
            }

            function j(e, t, n, r, i) {
                for (var o = e.body, a = o.length, s = t + 1, c = 0; s !== a && !isNaN(c = o.charCodeAt(s)) && (95 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122);) ++s;
                return new A.WU(b.NAME, t, s, n, r, i, o.slice(t, s))
            }
            var V = function() {
                function e(e, t) {
                    var n = (0, k.T)(e) ? e : new k.H(e);
                    this._lexer = new g(n), this._options = t
                }
                var t = e.prototype;
                return t.parseName = function() {
                    var e = this.expectToken(b.NAME);
                    return {
                        kind: x.NAME,
                        value: e.value,
                        loc: this.loc(e)
                    }
                }, t.parseDocument = function() {
                    var e = this._lexer.token;
                    return {
                        kind: x.DOCUMENT,
                        definitions: this.many(b.SOF, this.parseDefinition, b.EOF),
                        loc: this.loc(e)
                    }
                }, t.parseDefinition = function() {
                    if (this.peek(b.NAME)) switch (this._lexer.token.value) {
                        case "query":
                        case "mutation":
                        case "subscription":
                            return this.parseOperationDefinition();
                        case "fragment":
                            return this.parseFragmentDefinition();
                        case "schema":
                        case "scalar":
                        case "type":
                        case "interface":
                        case "union":
                        case "enum":
                        case "input":
                        case "directive":
                            return this.parseTypeSystemDefinition();
                        case "extend":
                            return this.parseTypeSystemExtension()
                    } else {
                        if (this.peek(b.BRACE_L)) return this.parseOperationDefinition();
                        if (this.peekDescription()) return this.parseTypeSystemDefinition()
                    }
                    throw this.unexpected()
                }, t.parseOperationDefinition = function() {
                    var e = this._lexer.token;
                    if (this.peek(b.BRACE_L)) return {
                        kind: x.OPERATION_DEFINITION,
                        operation: "query",
                        name: void 0,
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: this.parseSelectionSet(),
                        loc: this.loc(e)
                    };
                    var t, n = this.parseOperationType();
                    return this.peek(b.NAME) && (t = this.parseName()), {
                        kind: x.OPERATION_DEFINITION,
                        operation: n,
                        name: t,
                        variableDefinitions: this.parseVariableDefinitions(),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                        loc: this.loc(e)
                    }
                }, t.parseOperationType = function() {
                    var e = this.expectToken(b.NAME);
                    switch (e.value) {
                        case "query":
                            return "query";
                        case "mutation":
                            return "mutation";
                        case "subscription":
                            return "subscription"
                    }
                    throw this.unexpected(e)
                }, t.parseVariableDefinitions = function() {
                    return this.optionalMany(b.PAREN_L, this.parseVariableDefinition, b.PAREN_R)
                }, t.parseVariableDefinition = function() {
                    var e = this._lexer.token;
                    return {
                        kind: x.VARIABLE_DEFINITION,
                        variable: this.parseVariable(),
                        type: (this.expectToken(b.COLON), this.parseTypeReference()),
                        defaultValue: this.expectOptionalToken(b.EQUALS) ? this.parseValueLiteral(!0) : void 0,
                        directives: this.parseDirectives(!0),
                        loc: this.loc(e)
                    }
                }, t.parseVariable = function() {
                    var e = this._lexer.token;
                    return this.expectToken(b.DOLLAR), {
                        kind: x.VARIABLE,
                        name: this.parseName(),
                        loc: this.loc(e)
                    }
                }, t.parseSelectionSet = function() {
                    var e = this._lexer.token;
                    return {
                        kind: x.SELECTION_SET,
                        selections: this.many(b.BRACE_L, this.parseSelection, b.BRACE_R),
                        loc: this.loc(e)
                    }
                }, t.parseSelection = function() {
                    return this.peek(b.SPREAD) ? this.parseFragment() : this.parseField()
                }, t.parseField = function() {
                    var e, t, n = this._lexer.token,
                        r = this.parseName();
                    return this.expectOptionalToken(b.COLON) ? (e = r, t = this.parseName()) : t = r, {
                        kind: x.FIELD,
                        alias: e,
                        name: t,
                        arguments: this.parseArguments(!1),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.peek(b.BRACE_L) ? this.parseSelectionSet() : void 0,
                        loc: this.loc(n)
                    }
                }, t.parseArguments = function(e) {
                    var t = e ? this.parseConstArgument : this.parseArgument;
                    return this.optionalMany(b.PAREN_L, t, b.PAREN_R)
                }, t.parseArgument = function() {
                    var e = this._lexer.token,
                        t = this.parseName();
                    return this.expectToken(b.COLON), {
                        kind: x.ARGUMENT,
                        name: t,
                        value: this.parseValueLiteral(!1),
                        loc: this.loc(e)
                    }
                }, t.parseConstArgument = function() {
                    var e = this._lexer.token;
                    return {
                        kind: x.ARGUMENT,
                        name: this.parseName(),
                        value: (this.expectToken(b.COLON), this.parseValueLiteral(!0)),
                        loc: this.loc(e)
                    }
                }, t.parseFragment = function() {
                    var e = this._lexer.token;
                    this.expectToken(b.SPREAD);
                    var t = this.expectOptionalKeyword("on");
                    return !t && this.peek(b.NAME) ? {
                        kind: x.FRAGMENT_SPREAD,
                        name: this.parseFragmentName(),
                        directives: this.parseDirectives(!1),
                        loc: this.loc(e)
                    } : {
                        kind: x.INLINE_FRAGMENT,
                        typeCondition: t ? this.parseNamedType() : void 0,
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                        loc: this.loc(e)
                    }
                }, t.parseFragmentDefinition = function() {
                    var e, t = this._lexer.token;
                    return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? {
                        kind: x.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        variableDefinitions: this.parseVariableDefinitions(),
                        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                        loc: this.loc(t)
                    } : {
                        kind: x.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                        loc: this.loc(t)
                    }
                }, t.parseFragmentName = function() {
                    if ("on" === this._lexer.token.value) throw this.unexpected();
                    return this.parseName()
                }, t.parseValueLiteral = function(e) {
                    var t = this._lexer.token;
                    switch (t.kind) {
                        case b.BRACKET_L:
                            return this.parseList(e);
                        case b.BRACE_L:
                            return this.parseObject(e);
                        case b.INT:
                            return this._lexer.advance(), {
                                kind: x.INT,
                                value: t.value,
                                loc: this.loc(t)
                            };
                        case b.FLOAT:
                            return this._lexer.advance(), {
                                kind: x.FLOAT,
                                value: t.value,
                                loc: this.loc(t)
                            };
                        case b.STRING:
                        case b.BLOCK_STRING:
                            return this.parseStringLiteral();
                        case b.NAME:
                            switch (this._lexer.advance(), t.value) {
                                case "true":
                                    return {
                                        kind: x.BOOLEAN, value: !0, loc: this.loc(t)
                                    };
                                case "false":
                                    return {
                                        kind: x.BOOLEAN, value: !1, loc: this.loc(t)
                                    };
                                case "null":
                                    return {
                                        kind: x.NULL, loc: this.loc(t)
                                    };
                                default:
                                    return {
                                        kind: x.ENUM, value: t.value, loc: this.loc(t)
                                    }
                            }
                        case b.DOLLAR:
                            if (!e) return this.parseVariable()
                    }
                    throw this.unexpected()
                }, t.parseStringLiteral = function() {
                    var e = this._lexer.token;
                    return this._lexer.advance(), {
                        kind: x.STRING,
                        value: e.value,
                        block: e.kind === b.BLOCK_STRING,
                        loc: this.loc(e)
                    }
                }, t.parseList = function(e) {
                    var t = this,
                        n = this._lexer.token;
                    return {
                        kind: x.LIST,
                        values: this.any(b.BRACKET_L, (function() {
                            return t.parseValueLiteral(e)
                        }), b.BRACKET_R),
                        loc: this.loc(n)
                    }
                }, t.parseObject = function(e) {
                    var t = this,
                        n = this._lexer.token;
                    return {
                        kind: x.OBJECT,
                        fields: this.any(b.BRACE_L, (function() {
                            return t.parseObjectField(e)
                        }), b.BRACE_R),
                        loc: this.loc(n)
                    }
                }, t.parseObjectField = function(e) {
                    var t = this._lexer.token,
                        n = this.parseName();
                    return this.expectToken(b.COLON), {
                        kind: x.OBJECT_FIELD,
                        name: n,
                        value: this.parseValueLiteral(e),
                        loc: this.loc(t)
                    }
                }, t.parseDirectives = function(e) {
                    for (var t = []; this.peek(b.AT);) t.push(this.parseDirective(e));
                    return t
                }, t.parseDirective = function(e) {
                    var t = this._lexer.token;
                    return this.expectToken(b.AT), {
                        kind: x.DIRECTIVE,
                        name: this.parseName(),
                        arguments: this.parseArguments(e),
                        loc: this.loc(t)
                    }
                }, t.parseTypeReference = function() {
                    var e, t = this._lexer.token;
                    return this.expectOptionalToken(b.BRACKET_L) ? (e = this.parseTypeReference(), this.expectToken(b.BRACKET_R), e = {
                        kind: x.LIST_TYPE,
                        type: e,
                        loc: this.loc(t)
                    }) : e = this.parseNamedType(), this.expectOptionalToken(b.BANG) ? {
                        kind: x.NON_NULL_TYPE,
                        type: e,
                        loc: this.loc(t)
                    } : e
                }, t.parseNamedType = function() {
                    var e = this._lexer.token;
                    return {
                        kind: x.NAMED_TYPE,
                        name: this.parseName(),
                        loc: this.loc(e)
                    }
                }, t.parseTypeSystemDefinition = function() {
                    var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
                    if (e.kind === b.NAME) switch (e.value) {
                        case "schema":
                            return this.parseSchemaDefinition();
                        case "scalar":
                            return this.parseScalarTypeDefinition();
                        case "type":
                            return this.parseObjectTypeDefinition();
                        case "interface":
                            return this.parseInterfaceTypeDefinition();
                        case "union":
                            return this.parseUnionTypeDefinition();
                        case "enum":
                            return this.parseEnumTypeDefinition();
                        case "input":
                            return this.parseInputObjectTypeDefinition();
                        case "directive":
                            return this.parseDirectiveDefinition()
                    }
                    throw this.unexpected(e)
                }, t.peekDescription = function() {
                    return this.peek(b.STRING) || this.peek(b.BLOCK_STRING)
                }, t.parseDescription = function() {
                    if (this.peekDescription()) return this.parseStringLiteral()
                }, t.parseSchemaDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("schema");
                    var n = this.parseDirectives(!0),
                        r = this.many(b.BRACE_L, this.parseOperationTypeDefinition, b.BRACE_R);
                    return {
                        kind: x.SCHEMA_DEFINITION,
                        description: t,
                        directives: n,
                        operationTypes: r,
                        loc: this.loc(e)
                    }
                }, t.parseOperationTypeDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseOperationType();
                    this.expectToken(b.COLON);
                    var n = this.parseNamedType();
                    return {
                        kind: x.OPERATION_TYPE_DEFINITION,
                        operation: t,
                        type: n,
                        loc: this.loc(e)
                    }
                }, t.parseScalarTypeDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("scalar");
                    var n = this.parseName(),
                        r = this.parseDirectives(!0);
                    return {
                        kind: x.SCALAR_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r,
                        loc: this.loc(e)
                    }
                }, t.parseObjectTypeDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("type");
                    var n = this.parseName(),
                        r = this.parseImplementsInterfaces(),
                        i = this.parseDirectives(!0),
                        o = this.parseFieldsDefinition();
                    return {
                        kind: x.OBJECT_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        interfaces: r,
                        directives: i,
                        fields: o,
                        loc: this.loc(e)
                    }
                }, t.parseImplementsInterfaces = function() {
                    var e;
                    if (!this.expectOptionalKeyword("implements")) return [];
                    if (!0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLImplementsInterfaces)) {
                        var t = [];
                        this.expectOptionalToken(b.AMP);
                        do {
                            t.push(this.parseNamedType())
                        } while (this.expectOptionalToken(b.AMP) || this.peek(b.NAME));
                        return t
                    }
                    return this.delimitedMany(b.AMP, this.parseNamedType)
                }, t.parseFieldsDefinition = function() {
                    var e;
                    return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(b.BRACE_L) && this._lexer.lookahead().kind === b.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(b.BRACE_L, this.parseFieldDefinition, b.BRACE_R)
                }, t.parseFieldDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription(),
                        n = this.parseName(),
                        r = this.parseArgumentDefs();
                    this.expectToken(b.COLON);
                    var i = this.parseTypeReference(),
                        o = this.parseDirectives(!0);
                    return {
                        kind: x.FIELD_DEFINITION,
                        description: t,
                        name: n,
                        arguments: r,
                        type: i,
                        directives: o,
                        loc: this.loc(e)
                    }
                }, t.parseArgumentDefs = function() {
                    return this.optionalMany(b.PAREN_L, this.parseInputValueDef, b.PAREN_R)
                }, t.parseInputValueDef = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription(),
                        n = this.parseName();
                    this.expectToken(b.COLON);
                    var r, i = this.parseTypeReference();
                    this.expectOptionalToken(b.EQUALS) && (r = this.parseValueLiteral(!0));
                    var o = this.parseDirectives(!0);
                    return {
                        kind: x.INPUT_VALUE_DEFINITION,
                        description: t,
                        name: n,
                        type: i,
                        defaultValue: r,
                        directives: o,
                        loc: this.loc(e)
                    }
                }, t.parseInterfaceTypeDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("interface");
                    var n = this.parseName(),
                        r = this.parseImplementsInterfaces(),
                        i = this.parseDirectives(!0),
                        o = this.parseFieldsDefinition();
                    return {
                        kind: x.INTERFACE_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        interfaces: r,
                        directives: i,
                        fields: o,
                        loc: this.loc(e)
                    }
                }, t.parseUnionTypeDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("union");
                    var n = this.parseName(),
                        r = this.parseDirectives(!0),
                        i = this.parseUnionMemberTypes();
                    return {
                        kind: x.UNION_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r,
                        types: i,
                        loc: this.loc(e)
                    }
                }, t.parseUnionMemberTypes = function() {
                    return this.expectOptionalToken(b.EQUALS) ? this.delimitedMany(b.PIPE, this.parseNamedType) : []
                }, t.parseEnumTypeDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("enum");
                    var n = this.parseName(),
                        r = this.parseDirectives(!0),
                        i = this.parseEnumValuesDefinition();
                    return {
                        kind: x.ENUM_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r,
                        values: i,
                        loc: this.loc(e)
                    }
                }, t.parseEnumValuesDefinition = function() {
                    return this.optionalMany(b.BRACE_L, this.parseEnumValueDefinition, b.BRACE_R)
                }, t.parseEnumValueDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription(),
                        n = this.parseName(),
                        r = this.parseDirectives(!0);
                    return {
                        kind: x.ENUM_VALUE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r,
                        loc: this.loc(e)
                    }
                }, t.parseInputObjectTypeDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("input");
                    var n = this.parseName(),
                        r = this.parseDirectives(!0),
                        i = this.parseInputFieldsDefinition();
                    return {
                        kind: x.INPUT_OBJECT_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: r,
                        fields: i,
                        loc: this.loc(e)
                    }
                }, t.parseInputFieldsDefinition = function() {
                    return this.optionalMany(b.BRACE_L, this.parseInputValueDef, b.BRACE_R)
                }, t.parseTypeSystemExtension = function() {
                    var e = this._lexer.lookahead();
                    if (e.kind === b.NAME) switch (e.value) {
                        case "schema":
                            return this.parseSchemaExtension();
                        case "scalar":
                            return this.parseScalarTypeExtension();
                        case "type":
                            return this.parseObjectTypeExtension();
                        case "interface":
                            return this.parseInterfaceTypeExtension();
                        case "union":
                            return this.parseUnionTypeExtension();
                        case "enum":
                            return this.parseEnumTypeExtension();
                        case "input":
                            return this.parseInputObjectTypeExtension()
                    }
                    throw this.unexpected(e)
                }, t.parseSchemaExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("schema");
                    var t = this.parseDirectives(!0),
                        n = this.optionalMany(b.BRACE_L, this.parseOperationTypeDefinition, b.BRACE_R);
                    if (0 === t.length && 0 === n.length) throw this.unexpected();
                    return {
                        kind: x.SCHEMA_EXTENSION,
                        directives: t,
                        operationTypes: n,
                        loc: this.loc(e)
                    }
                }, t.parseScalarTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("scalar");
                    var t = this.parseName(),
                        n = this.parseDirectives(!0);
                    if (0 === n.length) throw this.unexpected();
                    return {
                        kind: x.SCALAR_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        loc: this.loc(e)
                    }
                }, t.parseObjectTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("type");
                    var t = this.parseName(),
                        n = this.parseImplementsInterfaces(),
                        r = this.parseDirectives(!0),
                        i = this.parseFieldsDefinition();
                    if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
                    return {
                        kind: x.OBJECT_TYPE_EXTENSION,
                        name: t,
                        interfaces: n,
                        directives: r,
                        fields: i,
                        loc: this.loc(e)
                    }
                }, t.parseInterfaceTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("interface");
                    var t = this.parseName(),
                        n = this.parseImplementsInterfaces(),
                        r = this.parseDirectives(!0),
                        i = this.parseFieldsDefinition();
                    if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
                    return {
                        kind: x.INTERFACE_TYPE_EXTENSION,
                        name: t,
                        interfaces: n,
                        directives: r,
                        fields: i,
                        loc: this.loc(e)
                    }
                }, t.parseUnionTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("union");
                    var t = this.parseName(),
                        n = this.parseDirectives(!0),
                        r = this.parseUnionMemberTypes();
                    if (0 === n.length && 0 === r.length) throw this.unexpected();
                    return {
                        kind: x.UNION_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        types: r,
                        loc: this.loc(e)
                    }
                }, t.parseEnumTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("enum");
                    var t = this.parseName(),
                        n = this.parseDirectives(!0),
                        r = this.parseEnumValuesDefinition();
                    if (0 === n.length && 0 === r.length) throw this.unexpected();
                    return {
                        kind: x.ENUM_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        values: r,
                        loc: this.loc(e)
                    }
                }, t.parseInputObjectTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("input");
                    var t = this.parseName(),
                        n = this.parseDirectives(!0),
                        r = this.parseInputFieldsDefinition();
                    if (0 === n.length && 0 === r.length) throw this.unexpected();
                    return {
                        kind: x.INPUT_OBJECT_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        fields: r,
                        loc: this.loc(e)
                    }
                }, t.parseDirectiveDefinition = function() {
                    var e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("directive"), this.expectToken(b.AT);
                    var n = this.parseName(),
                        r = this.parseArgumentDefs(),
                        i = this.expectOptionalKeyword("repeatable");
                    this.expectKeyword("on");
                    var o = this.parseDirectiveLocations();
                    return {
                        kind: x.DIRECTIVE_DEFINITION,
                        description: t,
                        name: n,
                        arguments: r,
                        repeatable: i,
                        locations: o,
                        loc: this.loc(e)
                    }
                }, t.parseDirectiveLocations = function() {
                    return this.delimitedMany(b.PIPE, this.parseDirectiveLocation)
                }, t.parseDirectiveLocation = function() {
                    var e = this._lexer.token,
                        t = this.parseName();
                    if (void 0 !== D[t.value]) return t;
                    throw this.unexpected(e)
                }, t.loc = function(e) {
                    var t;
                    if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation)) return new A.Ye(e, this._lexer.lastToken, this._lexer.source)
                }, t.peek = function(e) {
                    return this._lexer.token.kind === e
                }, t.expectToken = function(e) {
                    var t = this._lexer.token;
                    if (t.kind === e) return this._lexer.advance(), t;
                    throw syntaxError(this._lexer.source, t.start, "Expected ".concat(G(e), ", found ").concat(K(t), "."))
                }, t.expectOptionalToken = function(e) {
                    var t = this._lexer.token;
                    if (t.kind === e) return this._lexer.advance(), t
                }, t.expectKeyword = function(e) {
                    var t = this._lexer.token;
                    if (t.kind !== b.NAME || t.value !== e) throw syntaxError(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(K(t), "."));
                    this._lexer.advance()
                }, t.expectOptionalKeyword = function(e) {
                    var t = this._lexer.token;
                    return t.kind === b.NAME && t.value === e && (this._lexer.advance(), !0)
                }, t.unexpected = function(e) {
                    var t = null != e ? e : this._lexer.token;
                    return syntaxError(this._lexer.source, t.start, "Unexpected ".concat(K(t), "."))
                }, t.any = function(e, t, n) {
                    this.expectToken(e);
                    for (var r = []; !this.expectOptionalToken(n);) r.push(t.call(this));
                    return r
                }, t.optionalMany = function(e, t, n) {
                    if (this.expectOptionalToken(e)) {
                        var r = [];
                        do {
                            r.push(t.call(this))
                        } while (!this.expectOptionalToken(n));
                        return r
                    }
                    return []
                }, t.many = function(e, t, n) {
                    this.expectToken(e);
                    var r = [];
                    do {
                        r.push(t.call(this))
                    } while (!this.expectOptionalToken(n));
                    return r
                }, t.delimitedMany = function(e, t) {
                    this.expectOptionalToken(e);
                    var n = [];
                    do {
                        n.push(t.call(this))
                    } while (this.expectOptionalToken(e));
                    return n
                }, e
            }();

            function K(e) {
                var t = e.value;
                return G(e.kind) + (null != t ? ' "'.concat(t, '"') : "")
            }

            function G(e) {
                return function(e) {
                    return e === b.BANG || e === b.DOLLAR || e === b.AMP || e === b.PAREN_L || e === b.PAREN_R || e === b.SPREAD || e === b.COLON || e === b.EQUALS || e === b.AT || e === b.BRACKET_L || e === b.BRACKET_R || e === b.BRACE_L || e === b.PIPE || e === b.BRACE_R
                }(e) ? '"'.concat(e, '"') : e
            }
            var Y = new Map,
                W = new Map,
                J = !0,
                Q = !1;

            function X(e) {
                return e.replace(/[\s,]+/g, " ").trim()
            }

            function q(e) {
                var t = new Set,
                    n = [];
                return e.definitions.forEach((function(e) {
                    if ("FragmentDefinition" === e.kind) {
                        var r = e.name.value,
                            i = X((a = e.loc).source.body.substring(a.start, a.end)),
                            o = W.get(r);
                        o && !o.has(i) ? J && console.warn("Warning: fragment with name " + r + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || W.set(r, o = new Set), o.add(i), t.has(i) || (t.add(i), n.push(e))
                    } else n.push(e);
                    var a
                })), (0, r.pi)((0, r.pi)({}, e), {
                    definitions: n
                })
            }

            function Z(e) {
                var t = X(e);
                if (!Y.has(t)) {
                    var n = function(e, t) {
                        return new V(e, t).parseDocument()
                    }(e, {
                        experimentalFragmentVariables: Q,
                        allowLegacyFragmentVariables: Q
                    });
                    if (!n || "Document" !== n.kind) throw new Error("Not a valid GraphQL document.");
                    Y.set(t, function(e) {
                        var t = new Set(e.definitions);
                        t.forEach((function(e) {
                            e.loc && delete e.loc, Object.keys(e).forEach((function(n) {
                                var r = e[n];
                                r && "object" == typeof r && t.add(r)
                            }))
                        }));
                        var n = e.loc;
                        return n && (delete n.startToken, delete n.endToken), e
                    }(q(n)))
                }
                return Y.get(t)
            }

            function H(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                "string" == typeof e && (e = [e]);
                var r = e[0];
                return t.forEach((function(t, n) {
                    t && "Document" === t.kind ? r += t.loc.source.body : r += t, r += e[n + 1]
                })), Z(r)
            }
            var z, $ = H,
                ee = function() {
                    Y.clear(), W.clear()
                },
                te = function() {
                    J = !1
                },
                ne = function() {
                    Q = !0
                },
                re = function() {
                    Q = !1
                };
            (z = H || (H = {})).gql = $, z.resetCaches = ee, z.disableFragmentWarnings = te, z.enableExperimentalFragmentVariables = ne, z.disableExperimentalFragmentVariables = re, H.default = H;
            var ie = H
        },
        70655: (e, t, n) => {
            n.d(t, {
                Jh: () => c,
                ZT: () => i,
                _T: () => a,
                ev: () => u,
                mG: () => s,
                pi: () => o
            });
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            };

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var o = function() {
                return o = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, o.apply(this, arguments)
            };

            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }

            function s(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            }

            function c(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            Object.create;

            function u(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
            Object.create
        },
        25821: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(45695);

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }

            function o(e) {
                return a(e, [])
            }

            function a(e, t) {
                switch (i(e)) {
                    case "string":
                        return JSON.stringify(e);
                    case "function":
                        return e.name ? "[function ".concat(e.name, "]") : "[function]";
                    case "object":
                        return null === e ? "null" : function(e, t) {
                            if (-1 !== t.indexOf(e)) return "[Circular]";
                            var n = [].concat(t, [e]),
                                i = function(e) {
                                    var t = e[String(r.Z)];
                                    if ("function" == typeof t) return t;
                                    if ("function" == typeof e.inspect) return e.inspect
                                }(e);
                            if (void 0 !== i) {
                                var o = i.call(e);
                                if (o !== e) return "string" == typeof o ? o : a(o, n)
                            } else if (Array.isArray(e)) return function(e, t) {
                                if (0 === e.length) return "[]";
                                if (t.length > 2) return "[Array]";
                                for (var n = Math.min(10, e.length), r = e.length - n, i = [], o = 0; o < n; ++o) i.push(a(e[o], t));
                                1 === r ? i.push("... 1 more item") : r > 1 && i.push("... ".concat(r, " more items"));
                                return "[" + i.join(", ") + "]"
                            }(e, n);
                            return function(e, t) {
                                var n = Object.keys(e);
                                if (0 === n.length) return "{}";
                                if (t.length > 2) return "[" + function(e) {
                                    var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                                    if ("Object" === t && "function" == typeof e.constructor) {
                                        var n = e.constructor.name;
                                        if ("string" == typeof n && "" !== n) return n
                                    }
                                    return t
                                }(e) + "]";
                                var r = n.map((function(n) {
                                    return n + ": " + a(e[n], t)
                                }));
                                return "{ " + r.join(", ") + " }"
                            }(e, n)
                        }(e, t);
                    default:
                        return String(e)
                }
            }
        },
        45695: (e, t) => {
            var n = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;
            t.Z = n
        },
        25217: (e, t, n) => {
            n.d(t, {
                Ye: () => o,
                WU: () => a,
                UG: () => s
            });
            var r = n(45695);

            function i(e) {
                var t = e.prototype.toJSON;
                "function" == typeof t || function(e, t) {
                    if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
                }(0), e.prototype.inspect = t, r.Z && (e.prototype[r.Z] = t)
            }
            var o = function() {
                function e(e, t, n) {
                    this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
                }
                return e.prototype.toJSON = function() {
                    return {
                        start: this.start,
                        end: this.end
                    }
                }, e
            }();
            i(o);
            var a = function() {
                function e(e, t, n, r, i, o, a) {
                    this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = a, this.prev = o, this.next = null
                }
                return e.prototype.toJSON = function() {
                    return {
                        kind: this.kind,
                        value: this.value,
                        line: this.line,
                        column: this.column
                    }
                }, e
            }();

            function s(e) {
                return null != e && "string" == typeof e.kind
            }
            i(a)
        },
        87392: (e, t, n) => {
            function r(e) {
                var t = e.split(/\r\n|[\n\r]/g),
                    n = function(e) {
                        for (var t, n = !0, r = !0, i = 0, o = null, a = 0; a < e.length; ++a) switch (e.charCodeAt(a)) {
                            case 13:
                                10 === e.charCodeAt(a + 1) && ++a;
                            case 10:
                                n = !1, r = !0, i = 0;
                                break;
                            case 9:
                            case 32:
                                ++i;
                                break;
                            default:
                                r && !n && (null === o || i < o) && (o = i), r = !1
                        }
                        return null !== (t = o) && void 0 !== t ? t : 0
                    }(e);
                if (0 !== n)
                    for (var r = 1; r < t.length; r++) t[r] = t[r].slice(n);
                for (var o = 0; o < t.length && i(t[o]);) ++o;
                for (var a = t.length; a > o && i(t[a - 1]);) --a;
                return t.slice(o, a).join("\n")
            }

            function i(e) {
                for (var t = 0; t < e.length; ++t)
                    if (" " !== e[t] && "\t" !== e[t]) return !1;
                return !0
            }

            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = -1 === e.indexOf("\n"),
                    i = " " === e[0] || "\t" === e[0],
                    o = '"' === e[e.length - 1],
                    a = "\\" === e[e.length - 1],
                    s = !r || o || a || n,
                    c = "";
                return !s || r && i || (c += "\n" + t), c += t ? e.replace(/\n/g, "\n" + t) : e, s && (c += "\n"), '"""' + c.replace(/"""/g, '\\"""') + '"""'
            }
            n.d(t, {
                LZ: () => o,
                W7: () => r
            })
        },
        10143: (e, t, n) => {
            n.d(t, {
                H: () => c,
                T: () => u
            });
            var r = n(99763),
                i = n(25821);

            function o(e, t) {
                if (!Boolean(e)) throw new Error(t)
            }
            var a = function(e, t) {
                return e instanceof t
            };

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var c = function() {
                function e(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            line: 1,
                            column: 1
                        };
                    "string" == typeof e || o(0, "Body must be a string. Received: ".concat((0, i.Z)(e), ".")), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || o(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || o(0, "column in locationOffset is 1-indexed and must be positive.")
                }
                var t, n, a;
                return t = e, (n = [{
                    key: r.YF,
                    get: function() {
                        return "Source"
                    }
                }]) && s(t.prototype, n), a && s(t, a), e
            }();

            function u(e) {
                return a(e, c)
            }
        },
        99763: (e, t, n) => {
            n.d(t, {
                YF: () => r
            });
            "function" == typeof Symbol && null != Symbol.iterator && Symbol.iterator, "function" == typeof Symbol && null != Symbol.asyncIterator && Symbol.asyncIterator;
            var r = "function" == typeof Symbol && null != Symbol.toStringTag ? Symbol.toStringTag : "@@toStringTag"
        }
    }
]);