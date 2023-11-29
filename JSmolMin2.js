(function (a, m) { "object" === typeof module && "object" === typeof module.exports ? module.exports = a.document ? m(a, !0) : function (a) { if (!a.document) throw Error("jQuery requires a window with a document"); return m(a) } : m(a) })("undefined" !== typeof window ? window : this, function (a, m) {
	function l(g) { var w = g.length, a = f.type(g); return "function" === a || f.isWindow(g) ? !1 : 1 === g.nodeType && w ? !0 : "array" === a || 0 === w || "number" === typeof w && 0 < w && w - 1 in g } function h(g, a, p) {
		if (f.isFunction(a)) return f.grep(g, function (g, b) {
			return !!a.call(g,
				b, g) !== p
		}); if (a.nodeType) return f.grep(g, function (g) { return g === a !== p }); if ("string" === typeof a) { if (Vc.test(a)) return f.filter(a, g, p); a = f.filter(a, g) } return f.grep(g, function (g) { return 0 <= f.inArray(g, a) !== p })
	} function e(g, a) { do g = g[a]; while (g && 1 !== g.nodeType); return g } function j() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", t, !1), a.removeEventListener("load", t, !1)) : (y.detachEvent("onreadystatechange", t), a.detachEvent("onload", t)) } function t() {
		if (y.addEventListener || "load" === event.type ||
			"complete" === y.readyState) j(), f.ready()
	} function s(g, a, p) { if (void 0 === p && 1 === g.nodeType) if (p = "data-" + a.replace(Wc, "-$1").toLowerCase(), p = g.getAttribute(p), "string" === typeof p) { try { p = "true" === p ? !0 : "false" === p ? !1 : "null" === p ? null : +p + "" === p ? +p : Xc.test(p) ? f.parseJSON(p) : p } catch (Xa) { } f.data(g, a, p) } else p = void 0; return p } function u(g) { for (var a in g) if (!("data" === a && f.isEmptyObject(g[a])) && "toJSON" !== a) return !1; return !0 } function b(g, a, p, Xa) {
		if (f.acceptData(g)) {
			var b = f.expando, c = g.nodeType, d = c ? f.cache : g,
			n = c ? g[b] : g[b] && b; if (n && d[n] && (Xa || d[n].data) || !(void 0 === p && "string" === typeof a)) { n || (n = c ? g[b] = k.pop() || f.guid++ : b); d[n] || (d[n] = c ? {} : { toJSON: f.noop }); if ("object" === typeof a || "function" === typeof a) Xa ? d[n] = f.extend(d[n], a) : d[n].data = f.extend(d[n].data, a); g = d[n]; Xa || (g.data || (g.data = {}), g = g.data); void 0 !== p && (g[f.camelCase(a)] = p); "string" === typeof a ? (p = g[a], null == p && (p = g[f.camelCase(a)])) : p = g; return p }
		}
	} function c(g, a, p) {
		if (f.acceptData(g)) {
			var b, c, k = g.nodeType, d = k ? f.cache : g, n = k ? g[f.expando] : f.expando;
			if (d[n]) { if (a && (b = p ? d[n] : d[n].data)) { f.isArray(a) ? a = a.concat(f.map(a, f.camelCase)) : a in b ? a = [a] : (a = f.camelCase(a), a = a in b ? [a] : a.split(" ")); for (c = a.length; c--;)delete b[a[c]]; if (p ? !u(b) : !f.isEmptyObject(b)) return } if (!p && (delete d[n].data, !u(d[n]))) return; k ? f.cleanData([g], !0) : v.deleteExpando || d != d.window ? delete d[n] : d[n] = null }
		}
	} function d() { return !0 } function q() { return !1 } function K() { try { return y.activeElement } catch (g) { } } function U(g) {
		var a = mc.split("|"); g = g.createDocumentFragment(); if (g.createElement) for (; a.length;)g.createElement(a.pop());
		return g
	} function C(g, a) { var p, b, c = 0, k = typeof g.getElementsByTagName !== ka ? g.getElementsByTagName(a || "*") : typeof g.querySelectorAll !== ka ? g.querySelectorAll(a || "*") : void 0; if (!k) { k = []; for (p = g.childNodes || g; null != (b = p[c]); c++)!a || f.nodeName(b, a) ? k.push(b) : f.merge(k, C(b, a)) } return void 0 === a || a && f.nodeName(g, a) ? f.merge([g], k) : k } function rb(g) { Mb.test(g.type) && (g.defaultChecked = g.checked) } function Ya(g, a) {
		return f.nodeName(g, "table") && f.nodeName(11 !== a.nodeType ? a : a.firstChild, "tr") ? g.getElementsByTagName("tbody")[0] ||
			g.appendChild(g.ownerDocument.createElement("tbody")) : g
	} function Ca(g) { g.type = (null !== f.find.attr(g, "type")) + "/" + g.type; return g } function V(g) { var a = Yc.exec(g.type); a ? g.type = a[1] : g.removeAttribute("type"); return g } function O(g, a) { for (var p, b = 0; null != (p = g[b]); b++)f._data(p, "globalEval", !a || f._data(a[b], "globalEval")) } function Da(g, a) {
		if (1 === a.nodeType && f.hasData(g)) {
			var p, b, c; b = f._data(g); var k = f._data(a, b), d = b.events; if (d) for (p in delete k.handle, k.events = {}, d) {
				b = 0; for (c = d[p].length; b < c; b++)f.event.add(a,
					p, d[p][b])
			} k.data && (k.data = f.extend({}, k.data))
		}
	} function Na(g, w) { var p = f(w.createElement(g)).appendTo(w.body), b = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(p[0]).display : f.css(p[0], "display"); p.detach(); return b } function db(g) { var a = y, p = nc[g]; if (!p) { p = Na(g, a); if ("none" === p || !p) eb = (eb || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(a.documentElement), a = (eb[0].contentWindow || eb[0].contentDocument).document, a.write(), a.close(), p = Na(g, a), eb.detach(); nc[g] = p } return p } function fb(g,
		a) { return { get: function () { var p = g(); if (null != p) if (p) delete this.get; else return (this.get = a).apply(this, arguments) } } } function gb(g, a) { if (a in g) return a; for (var p = a.charAt(0).toUpperCase() + a.slice(1), b = a, f = oc.length; f--;)if (a = oc[f] + p, a in g) return a; return b } function ta(g, a) {
			for (var p, b, c, k = [], d = 0, n = g.length; d < n; d++)if (b = g[d], b.style) if (k[d] = f._data(b, "olddisplay"), p = b.style.display, a) !k[d] && "none" === p && (b.style.display = ""), "" === b.style.display && hb(b) && (k[d] = f._data(b, "olddisplay", db(b.nodeName)));
			else if (!k[d] && (c = hb(b), p && "none" !== p || !c)) f._data(b, "olddisplay", c ? p : f.css(b, "display")); for (d = 0; d < n; d++)if (b = g[d], b.style && (!a || "none" === b.style.display || "" === b.style.display)) b.style.display = a ? k[d] || "" : "none"; return g
		} function la(g, a, p) { return (g = Zc.exec(a)) ? Math.max(0, g[1] - (p || 0)) + (g[2] || "px") : a } function x(g, a, p, b, c) {
			a = p === (b ? "border" : "content") ? 4 : "width" === a ? 1 : 0; for (var k = 0; 4 > a; a += 2)"margin" === p && (k += f.css(g, p + Oa[a], !0, c)), b ? ("content" === p && (k -= f.css(g, "padding" + Oa[a], !0, c)), "margin" !== p && (k -=
				f.css(g, "border" + Oa[a] + "Width", !0, c))) : (k += f.css(g, "padding" + Oa[a], !0, c), "padding" !== p && (k += f.css(g, "border" + Oa[a] + "Width", !0, c))); return k
		} function W(g, a, p) { var b = !0, c = "width" === a ? g.offsetWidth : g.offsetHeight, k = Pa(g), d = v.boxSizing() && "border-box" === f.css(g, "boxSizing", !1, k); if (0 >= c || null == c) { c = Qa(g, a, k); if (0 > c || null == c) c = g.style[a]; if (sb.test(c)) return c; b = d && (v.boxSizingReliable() || c === g.style[a]); c = parseFloat(c) || 0 } return c + x(g, a, p || (d ? "border" : "content"), b, k) + "px" } function H(g, a, p, b, f) {
			return new H.prototype.init(g,
				a, p, b, f)
		} function ga() { setTimeout(function () { Za = void 0 }); return Za = f.now() } function L(g, a) { var p, b = { height: g }, f = 0; for (a = a ? 1 : 0; 4 > f; f += 2 - a)p = Oa[f], b["margin" + p] = b["padding" + p] = g; a && (b.opacity = b.width = g); return b } function ua(g, a, p) { for (var b, f = (ib[a] || []).concat(ib["*"]), c = 0, k = f.length; c < k; c++)if (b = f[c].call(p, a, g)) return b } function jb(g, a, p) {
			var b, c, k = 0, d = tb.length, n = f.Deferred().always(function () { delete e.elem }), e = function () {
				if (c) return !1; for (var a = Za || ga(), a = Math.max(0, r.startTime + r.duration - a), w =
					1 - (a / r.duration || 0), p = 0, b = r.tweens.length; p < b; p++)r.tweens[p].run(w); n.notifyWith(g, [r, w, a]); if (1 > w && b) return a; n.resolveWith(g, [r]); return !1
			}, r = n.promise({
				elem: g, props: f.extend({}, a), opts: f.extend(!0, { specialEasing: {} }, p), originalProperties: a, originalOptions: p, startTime: Za || ga(), duration: p.duration, tweens: [], createTween: function (a, w) { var p = f.Tween(g, r.opts, a, w, r.opts.specialEasing[a] || r.opts.easing); r.tweens.push(p); return p }, stop: function (a) {
					var w = 0, p = a ? r.tweens.length : 0; if (c) return this; for (c =
						!0; w < p; w++)r.tweens[w].run(1); a ? n.resolveWith(g, [r, a]) : n.rejectWith(g, [r, a]); return this
				}
			}); a = r.props; p = r.opts.specialEasing; var h, q, l, j; for (b in a) if (h = f.camelCase(b), q = p[h], l = a[b], f.isArray(l) && (q = l[1], l = a[b] = l[0]), b !== h && (a[h] = l, delete a[b]), (j = f.cssHooks[h]) && "expand" in j) for (b in l = j.expand(l), delete a[h], l) b in a || (a[b] = l[b], p[b] = q); else p[h] = q; for (; k < d; k++)if (b = tb[k].call(r, g, a, r.opts)) return b; f.map(a, ua, r); f.isFunction(r.opts.start) && r.opts.start.call(g, r); f.fx.timer(f.extend(e, {
				elem: g, anim: r,
				queue: r.opts.queue
			})); return r.progress(r.opts.progress).done(r.opts.done, r.opts.complete).fail(r.opts.fail).always(r.opts.always)
		} function kb(g) { return function (a, p) { "string" !== typeof a && (p = a, a = "*"); var b, c = 0, k = a.toLowerCase().match(va) || []; if (f.isFunction(p)) for (; b = k[c++];)"+" === b.charAt(0) ? (b = b.slice(1) || "*", (g[b] = g[b] || []).unshift(p)) : (g[b] = g[b] || []).push(p) } } function ub(g, a, p, b) {
			function c(n) {
				var e; k[n] = !0; f.each(g[n] || [], function (g, f) {
					var n = f(a, p, b); if ("string" === typeof n && !d && !k[n]) return a.dataTypes.unshift(n),
						c(n), !1; if (d) return !(e = n)
				}); return e
			} var k = {}, d = g === Nb; return c(a.dataTypes[0]) || !k["*"] && c("*")
		} function wa(g, a) { var p, b, c = f.ajaxSettings.flatOptions || {}; for (b in a) void 0 !== a[b] && ((c[b] ? g : p || (p = {}))[b] = a[b]); p && f.extend(!0, g, p); return g } function ma(g, a, p, b) { var c; if (f.isArray(a)) f.each(a, function (a, w) { p || ad.test(g) ? b(g, w) : ma(g + "[" + ("object" === typeof w ? a : "") + "]", w, p, b) }); else if (!p && "object" === f.type(a)) for (c in a) ma(g + "[" + c + "]", a[c], p, b); else b(g, a) } function B(g) {
			try {
				return g ? new a.ActiveXObject("Microsoft.XMLHTTP") :
					new a.XMLHttpRequest
			} catch (w) { }
		} function X() { try { return new a.XMLHttpRequest } catch (g) { } } function ca(g) { return f.isWindow(g) ? g : 9 === g.nodeType ? g.defaultView || g.parentWindow : !1 } var k = [], n = k.slice, r = k.concat, z = k.push, E = k.indexOf, N = {}, bd = N.toString, xa = N.hasOwnProperty, Ob = "".trim, v = {}, f = function (g, a) { return new f.fn.init(g, a) }, cd = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, dd = /^-ms-/, ed = /-([\da-z])/gi, fd = function (g, a) { return a.toUpperCase() }; f.fn = f.prototype = {
			jquery: "1.11.0", constructor: f, selector: "", length: 0,
			toArray: function () { return n.call(this) }, get: function (g) { return null != g ? 0 > g ? this[g + this.length] : this[g] : n.call(this) }, pushStack: function (g) { g = f.merge(this.constructor(), g); g.prevObject = this; g.context = this.context; return g }, each: function (g, a) { return f.each(this, g, a) }, map: function (g) { return this.pushStack(f.map(this, function (a, p) { return g.call(a, p, a) })) }, slice: function () { return this.pushStack(n.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (g) {
				var a =
					this.length; g = +g + (0 > g ? a : 0); return this.pushStack(0 <= g && g < a ? [this[g]] : [])
			}, end: function () { return this.prevObject || this.constructor(null) }, push: z, sort: k.sort, splice: k.splice
		}; f.extend = f.fn.extend = function () {
			var g, a, p, b, c, k = arguments[0] || {}, d = 1, n = arguments.length, e = !1; "boolean" === typeof k && (e = k, k = arguments[d] || {}, d++); "object" !== typeof k && !f.isFunction(k) && (k = {}); d === n && (k = this, d--); for (; d < n; d++)if (null != (c = arguments[d])) for (b in c) g = k[b], p = c[b], k !== p && (e && p && (f.isPlainObject(p) || (a = f.isArray(p))) ? (a ?
				(a = !1, g = g && f.isArray(g) ? g : []) : g = g && f.isPlainObject(g) ? g : {}, k[b] = f.extend(e, g, p)) : void 0 !== p && (k[b] = p)); return k
		}; f.extend({
			expando: "jQuery" + ("1.11.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (g) { throw Error(g); }, noop: function () { }, isFunction: function (g) { return "function" === f.type(g) }, isArray: Array.isArray || function (g) { return "array" === f.type(g) }, isWindow: function (g) { return null != g && g == g.window }, isNumeric: function (g) { return 0 <= g - parseFloat(g) }, isEmptyObject: function (g) {
				for (var a in g) return !1;
				return !0
			}, isPlainObject: function (g) { var a; if (!g || "object" !== f.type(g) || g.nodeType || f.isWindow(g)) return !1; try { if (g.constructor && !xa.call(g, "constructor") && !xa.call(g.constructor.prototype, "isPrototypeOf")) return !1 } catch (p) { return !1 } if (v.ownLast) for (a in g) return xa.call(g, a); for (a in g); return void 0 === a || xa.call(g, a) }, type: function (g) { return null == g ? g + "" : "object" === typeof g || "function" === typeof g ? N[bd.call(g)] || "object" : typeof g }, globalEval: function (g) {
				g && f.trim(g) && (a.execScript || function (g) {
					a.eval.call(a,
						g)
				})(g)
			}, camelCase: function (g) { return g.replace(dd, "ms-").replace(ed, fd) }, nodeName: function (g, a) { return g.nodeName && g.nodeName.toLowerCase() === a.toLowerCase() }, each: function (g, a, p) { var b, f = 0, c = g.length; b = l(g); if (p) if (b) for (; f < c && !(b = a.apply(g[f], p), !1 === b); f++); else for (f in g) { if (b = a.apply(g[f], p), !1 === b) break } else if (b) for (; f < c && !(b = a.call(g[f], f, g[f]), !1 === b); f++); else for (f in g) if (b = a.call(g[f], f, g[f]), !1 === b) break; return g }, trim: Ob && !Ob.call("\ufeff\u00a0") ? function (g) { return null == g ? "" : Ob.call(g) } :
				function (g) { return null == g ? "" : (g + "").replace(cd, "") }, makeArray: function (g, a) { var p = a || []; null != g && (l(Object(g)) ? f.merge(p, "string" === typeof g ? [g] : g) : z.call(p, g)); return p }, inArray: function (g, a, p) { var b; if (a) { if (E) return E.call(a, g, p); b = a.length; for (p = p ? 0 > p ? Math.max(0, b + p) : p : 0; p < b; p++)if (p in a && a[p] === g) return p } return -1 }, merge: function (g, a) { for (var p = +a.length, b = 0, f = g.length; b < p;)g[f++] = a[b++]; if (p !== p) for (; void 0 !== a[b];)g[f++] = a[b++]; g.length = f; return g }, grep: function (g, a, p) {
					for (var b = [], f = 0, c =
						g.length, k = !p; f < c; f++)p = !a(g[f], f), p !== k && b.push(g[f]); return b
				}, map: function (g, a, p) { var b, f = 0, c = g.length, k = []; if (l(g)) for (; f < c; f++)b = a(g[f], f, p), null != b && k.push(b); else for (f in g) b = a(g[f], f, p), null != b && k.push(b); return r.apply([], k) }, guid: 1, proxy: function (g, a) { var p, b; "string" === typeof a && (b = g[a], a = g, g = b); if (f.isFunction(g)) return p = n.call(arguments, 2), b = function () { return g.apply(a || this, p.concat(n.call(arguments))) }, b.guid = g.guid = g.guid || f.guid++, b }, now: function () { return +new Date }, support: v
		});
	f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (g, a) { N["[object " + a + "]"] = a.toLowerCase() }); var Pb = a, D = function (g, a, p, b) {
		var f, c, k, d, n; (a ? a.ownerDocument || a : Y) !== P && na(a); a = a || P; p = p || []; if (!g || "string" !== typeof g) return p; if (1 !== (d = a.nodeType) && 9 !== d) return []; if (Z && !b) {
			if (f = gd.exec(g)) if (k = f[1]) if (9 === d) if ((c = a.getElementById(k)) && c.parentNode) { if (c.id === k) return p.push(c), p } else return p; else {
				if (a.ownerDocument && (c = a.ownerDocument.getElementById(k)) && ra(a,
					c) && c.id === k) return p.push(c), p
			} else { if (f[2]) return Ea.apply(p, a.getElementsByTagName(g)), p; if ((k = f[3]) && G.getElementsByClassName && a.getElementsByClassName) return Ea.apply(p, a.getElementsByClassName(k)), p } if (G.qsa && (!Q || !Q.test(g))) {
				c = f = I; k = a; n = 9 === d && g; if (1 === d && "object" !== a.nodeName.toLowerCase()) { d = sa(g); (f = a.getAttribute("id")) ? c = f.replace(hd, "\\$&") : a.setAttribute("id", c); c = "[id='" + c + "'] "; for (k = d.length; k--;)d[k] = c + vb(d[k]); k = Qb.test(g) && ha(a.parentNode) || a; n = d.join(",") } if (n) try {
					return Ea.apply(p,
						k.querySelectorAll(n)), p
				} catch (e) { } finally { f || a.removeAttribute("id") }
			}
		} var r; a: {
			g = g.replace(wb, "$1"); c = sa(g); if (!b && 1 === c.length) {
				f = c[0] = c[0].slice(0); if (2 < f.length && "ID" === (r = f[0]).type && G.getById && 9 === a.nodeType && Z && F.relative[f[1].type]) { a = (F.find.ID(r.matches[0].replace(Fa, Ga), a) || [])[0]; if (!a) { r = p; break a } g = g.slice(f.shift().value.length) } for (d = xb.needsContext.test(g) ? 0 : f.length; d--;) {
					r = f[d]; if (F.relative[k = r.type]) break; if (k = F.find[k]) if (b = k(r.matches[0].replace(Fa, Ga), Qb.test(f[0].type) &&
						ha(a.parentNode) || a)) { f.splice(d, 1); g = b.length && vb(f); if (!g) { Ea.apply(p, b); r = p; break a } break }
				}
			} $a(g, c)(b, a, !Z, p, Qb.test(g) && ha(a.parentNode) || a); r = p
		} return r
	}, Rb = function () { function g(p, b) { a.push(p + " ") > F.cacheLength && delete g[a.shift()]; return g[p + " "] = b } var a = []; return g }, R = function (g) { g[I] = !0; return g }, oa = function (g) { var a = P.createElement("div"); try { return !!g(a) } catch (p) { return !1 } finally { a.parentNode && a.parentNode.removeChild(a) } }, Sb = function (g, a) {
		for (var p = g.split("|"), b = g.length; b--;)F.attrHandle[p[b]] =
			a
	}, pc = function (g, a) { var p = a && g, b = p && 1 === g.nodeType && 1 === a.nodeType && (~a.sourceIndex || S) - (~g.sourceIndex || S); if (b) return b; if (p) for (; p = p.nextSibling;)if (p === a) return -1; return g ? 1 : -1 }, id = function (g) { return function (a) { return "input" === a.nodeName.toLowerCase() && a.type === g } }, jd = function (g) { return function (a) { var p = a.nodeName.toLowerCase(); return ("input" === p || "button" === p) && a.type === g } }, Ra = function (g) {
		return R(function (a) {
			a = +a; return R(function (p, b) {
				for (var f, c = g([], p.length, a), k = c.length; k--;)if (p[f = c[k]]) p[f] =
					!(b[f] = p[f])
			})
		})
	}, ha = function (g) { return g && typeof g.getElementsByTagName !== T && g }, qc = function () { }, sa = function (g, a) {
		var p, b, f, c, k, d, n; if (k = Ha[g + " "]) return a ? 0 : k.slice(0); k = g; d = []; for (n = F.preFilter; k;) { if (!p || (b = kd.exec(k))) b && (k = k.slice(b[0].length) || k), d.push(f = []); p = !1; if (b = ld.exec(k)) p = b.shift(), f.push({ value: p, type: b[0].replace(wb, " ") }), k = k.slice(p.length); for (c in F.filter) if ((b = xb[c].exec(k)) && (!n[c] || (b = n[c](b)))) p = b.shift(), f.push({ value: p, type: c, matches: b }), k = k.slice(p.length); if (!p) break } return a ?
			k.length : k ? D.error(g) : Ha(g, d).slice(0)
	}, vb = function (g) { for (var a = 0, p = g.length, b = ""; a < p; a++)b += g[a].value; return b }, Tb = function (g, a, p) { var b = a.dir, f = p && "parentNode" === b, c = md++; return a.first ? function (a, p, w) { for (; a = a[b];)if (1 === a.nodeType || f) return g(a, p, w) } : function (a, p, w) { var k, d, n = [da, c]; if (w) for (; a = a[b];) { if ((1 === a.nodeType || f) && g(a, p, w)) return !0 } else for (; a = a[b];)if (1 === a.nodeType || f) { d = a[I] || (a[I] = {}); if ((k = d[b]) && k[0] === da && k[1] === c) return n[2] = k[2]; d[b] = n; if (n[2] = g(a, p, w)) return !0 } } }, Ub = function (g) {
		return 1 <
			g.length ? function (a, p, b) { for (var f = g.length; f--;)if (!g[f](a, p, b)) return !1; return !0 } : g[0]
	}, Sa = function (g, a, p, b, f) { for (var c, k = [], d = 0, n = g.length, e = null != a; d < n; d++)if (c = g[d]) if (!p || p(c, b, f)) k.push(c), e && a.push(d); return k }, Vb = function (g, a, p, b, f, c) {
		b && !b[I] && (b = Vb(b)); f && !f[I] && (f = Vb(f, c)); return R(function (c, k, d, n) {
			var e, r, qa = [], h = [], l = k.length, q; if (!(q = c)) { q = a || "*"; for (var j = d.nodeType ? [d] : d, A = [], z = 0, T = j.length; z < T; z++)D(q, j[z], A); q = A } q = g && (c || !a) ? Sa(q, qa, g, d, n) : q; j = p ? f || (c ? g : l || b) ? [] : k : q; p && p(q, j,
				d, n); if (b) { e = Sa(j, h); b(e, [], d, n); for (d = e.length; d--;)if (r = e[d]) j[h[d]] = !(q[h[d]] = r) } if (c) { if (f || g) { if (f) { e = []; for (d = j.length; d--;)if (r = j[d]) e.push(q[d] = r); f(null, j = [], e, n) } for (d = j.length; d--;)if ((r = j[d]) && -1 < (e = f ? Ta.call(c, r) : qa[d])) c[e] = !(k[e] = r) } } else j = Sa(j === k ? j.splice(l, j.length) : j), f ? f(null, k, j, n) : Ea.apply(k, j)
		})
	}, Wb = function (g) {
		var a, p, b, f = g.length, c = F.relative[g[0].type]; p = c || F.relative[" "]; for (var k = c ? 1 : 0, d = Tb(function (g) { return g === a }, p, !0), n = Tb(function (g) { return -1 < Ta.call(a, g) }, p, !0),
			e = [function (g, p, b) { return !c && (b || p !== ya) || ((a = p).nodeType ? d(g, p, b) : n(g, p, b)) }]; k < f; k++)if (p = F.relative[g[k].type]) e = [Tb(Ub(e), p)]; else { p = F.filter[g[k].type].apply(null, g[k].matches); if (p[I]) { for (b = ++k; b < f && !F.relative[g[b].type]; b++); return Vb(1 < k && Ub(e), 1 < k && vb(g.slice(0, k - 1).concat({ value: " " === g[k - 2].type ? "*" : "" })).replace(wb, "$1"), p, k < b && Wb(g.slice(k, b)), b < f && Wb(g = g.slice(b)), b < f && vb(g)) } e.push(p) } return Ub(e)
	}, za, G, F, Ia, rc, $a, ya, pa, Aa, na, P, ia, Z, Q, ea, Ja, ra, I = "sizzle" + -new Date, Y = Pb.document, da =
			0, md = 0, sc = Rb(), Ha = Rb(), Ba = Rb(), A = function (g, a) { g === a && (Aa = !0); return 0 }, T = "undefined", S = -2147483648, fa = {}.hasOwnProperty, M = [], aa = M.pop, nd = M.push, Ea = M.push, tc = M.slice, Ta = M.indexOf || function (g) { for (var a = 0, p = this.length; a < p; a++)if (this[a] === g) return a; return -1 }, uc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), vc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + uc + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
		Xb = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + vc.replace(3, 8) + ")*)|.*)\\)|)", wb = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), kd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ld = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, od = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), pd = RegExp(Xb), qd = RegExp("^" + uc + "$"), xb = {
			ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
			TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR: RegExp("^" + vc), PSEUDO: RegExp("^" + Xb), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
				"i")
		}, rd = /^(?:input|select|textarea|button)$/i, sd = /^h\d$/i, lb = /^[^{]+\{\s*\[native \w/, gd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Qb = /[+~]/, hd = /'|\\/g, Fa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), Ga = function (g, a, p) { g = "0x" + a - 65536; return g !== g || p ? a : 0 > g ? String.fromCharCode(g + 65536) : String.fromCharCode(g >> 10 | 55296, g & 1023 | 56320) }; try { Ea.apply(M = tc.call(Y.childNodes), Y.childNodes), M[Y.childNodes.length].nodeType } catch (Zd) {
			Ea = {
				apply: M.length ? function (g, a) { nd.apply(g, tc.call(a)) } :
					function (g, a) { for (var p = g.length, b = 0; g[p++] = a[b++];); g.length = p - 1 }
			}
		} G = D.support = {}; rc = D.isXML = function (g) { return (g = g && (g.ownerDocument || g).documentElement) ? "HTML" !== g.nodeName : !1 }; na = D.setDocument = function (g) {
			var a = g ? g.ownerDocument || g : Y; g = a.defaultView; if (a === P || 9 !== a.nodeType || !a.documentElement) return P; P = a; ia = a.documentElement; Z = !rc(a); g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () { na() }, !1) : g.attachEvent && g.attachEvent("onunload", function () { na() })); G.attributes = oa(function (g) {
				g.className =
				"i"; return !g.getAttribute("className")
			}); G.getElementsByTagName = oa(function (g) { g.appendChild(a.createComment("")); return !g.getElementsByTagName("*").length }); G.getElementsByClassName = lb.test(a.getElementsByClassName) && oa(function (g) { g.innerHTML = "<div class='a'></div><div class='a i'></div>"; g.firstChild.className = "i"; return 2 === g.getElementsByClassName("i").length }); G.getById = oa(function (g) { ia.appendChild(g).id = I; return !a.getElementsByName || !a.getElementsByName(I).length }); G.getById ? (F.find.ID = function (g,
				a) { if (typeof a.getElementById !== T && Z) { var b = a.getElementById(g); return b && b.parentNode ? [b] : [] } }, F.filter.ID = function (g) { var a = g.replace(Fa, Ga); return function (g) { return g.getAttribute("id") === a } }) : (delete F.find.ID, F.filter.ID = function (g) { var a = g.replace(Fa, Ga); return function (g) { return (g = typeof g.getAttributeNode !== T && g.getAttributeNode("id")) && g.value === a } }); F.find.TAG = G.getElementsByTagName ? function (g, a) { if (typeof a.getElementsByTagName !== T) return a.getElementsByTagName(g) } : function (g, a) {
					var b,
					w = [], f = 0, c = a.getElementsByTagName(g); if ("*" === g) { for (; b = c[f++];)1 === b.nodeType && w.push(b); return w } return c
				}; F.find.CLASS = G.getElementsByClassName && function (g, a) { if (typeof a.getElementsByClassName !== T && Z) return a.getElementsByClassName(g) }; ea = []; Q = []; if (G.qsa = lb.test(a.querySelectorAll)) oa(function (g) {
					g.innerHTML = "<select t=''><option selected=''></option></select>"; g.querySelectorAll("[t^='']").length && Q.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"); g.querySelectorAll("[selected]").length || Q.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
					g.querySelectorAll(":checked").length || Q.push(":checked")
				}), oa(function (g) { var b = a.createElement("input"); b.setAttribute("type", "hidden"); g.appendChild(b).setAttribute("name", "D"); g.querySelectorAll("[name=d]").length && Q.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="); g.querySelectorAll(":enabled").length || Q.push(":enabled", ":disabled"); g.querySelectorAll("*,:x"); Q.push(",.*:") }); (G.matchesSelector = lb.test(Ja = ia.webkitMatchesSelector || ia.mozMatchesSelector || ia.oMatchesSelector || ia.msMatchesSelector)) &&
					oa(function (g) { G.disconnectedMatch = Ja.call(g, "div"); Ja.call(g, "[s!='']:x"); ea.push("!=", Xb) }); Q = Q.length && RegExp(Q.join("|")); ea = ea.length && RegExp(ea.join("|")); ra = (g = lb.test(ia.compareDocumentPosition)) || lb.test(ia.contains) ? function (g, a) { var b = 9 === g.nodeType ? g.documentElement : g, w = a && a.parentNode; return g === w || !(!w || !(1 === w.nodeType && (b.contains ? b.contains(w) : g.compareDocumentPosition && g.compareDocumentPosition(w) & 16))) } : function (g, a) { if (a) for (; a = a.parentNode;)if (a === g) return !0; return !1 }; A = g ? function (g,
						b) { if (g === b) return Aa = !0, 0; var f = !g.compareDocumentPosition - !b.compareDocumentPosition; if (f) return f; f = (g.ownerDocument || g) === (b.ownerDocument || b) ? g.compareDocumentPosition(b) : 1; return f & 1 || !G.sortDetached && b.compareDocumentPosition(g) === f ? g === a || g.ownerDocument === Y && ra(Y, g) ? -1 : b === a || b.ownerDocument === Y && ra(Y, b) ? 1 : pa ? Ta.call(pa, g) - Ta.call(pa, b) : 0 : f & 4 ? -1 : 1 } : function (g, b) {
							if (g === b) return Aa = !0, 0; var f, c = 0; f = g.parentNode; var k = b.parentNode, d = [g], n = [b]; if (!f || !k) return g === a ? -1 : b === a ? 1 : f ? -1 : k ? 1 : pa ? Ta.call(pa,
								g) - Ta.call(pa, b) : 0; if (f === k) return pc(g, b); for (f = g; f = f.parentNode;)d.unshift(f); for (f = b; f = f.parentNode;)n.unshift(f); for (; d[c] === n[c];)c++; return c ? pc(d[c], n[c]) : d[c] === Y ? -1 : n[c] === Y ? 1 : 0
						}; return a
		}; D.matches = function (g, a) { return D(g, null, null, a) }; D.matchesSelector = function (g, a) {
			(g.ownerDocument || g) !== P && na(g); a = a.replace(od, "='$1']"); if (G.matchesSelector && Z && (!ea || !ea.test(a)) && (!Q || !Q.test(a))) try { var b = Ja.call(g, a); if (b || G.disconnectedMatch || g.document && 11 !== g.document.nodeType) return b } catch (f) { } return 0 <
				D(a, P, null, [g]).length
		}; D.contains = function (g, a) { (g.ownerDocument || g) !== P && na(g); return ra(g, a) }; D.attr = function (g, a) { (g.ownerDocument || g) !== P && na(g); var b = F.attrHandle[a.toLowerCase()], b = b && fa.call(F.attrHandle, a.toLowerCase()) ? b(g, a, !Z) : void 0; return void 0 !== b ? b : G.attributes || !Z ? g.getAttribute(a) : (b = g.getAttributeNode(a)) && b.specified ? b.value : null }; D.error = function (g) { throw Error("Syntax error, unrecognized expression: " + g); }; D.uniqueSort = function (g) {
			var a, b = [], f = 0, c = 0; Aa = !G.detectDuplicates; pa =
				!G.sortStable && g.slice(0); g.sort(A); if (Aa) { for (; a = g[c++];)a === g[c] && (f = b.push(c)); for (; f--;)g.splice(b[f], 1) } pa = null; return g
		}; Ia = D.getText = function (g) { var a, b = "", f = 0; if (a = g.nodeType) if (1 === a || 9 === a || 11 === a) { if ("string" === typeof g.textContent) return g.textContent; for (g = g.firstChild; g; g = g.nextSibling)b += Ia(g) } else { if (3 === a || 4 === a) return g.nodeValue } else for (; a = g[f++];)b += Ia(a); return b }; F = D.selectors = {
			cacheLength: 50, createPseudo: R, match: xb, attrHandle: {}, find: {}, relative: {
				">": { dir: "parentNode", first: !0 },
				" ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" }
			}, preFilter: {
				ATTR: function (g) { g[1] = g[1].replace(Fa, Ga); g[3] = (g[4] || g[5] || "").replace(Fa, Ga); "~=" === g[2] && (g[3] = " " + g[3] + " "); return g.slice(0, 4) }, CHILD: function (g) { g[1] = g[1].toLowerCase(); "nth" === g[1].slice(0, 3) ? (g[3] || D.error(g[0]), g[4] = +(g[4] ? g[5] + (g[6] || 1) : 2 * ("even" === g[3] || "odd" === g[3])), g[5] = +(g[7] + g[8] || "odd" === g[3])) : g[3] && D.error(g[0]); return g }, PSEUDO: function (g) {
					var a, b = !g[5] && g[2]; if (xb.CHILD.test(g[0])) return null;
					if (g[3] && void 0 !== g[4]) g[2] = g[4]; else if (b && pd.test(b) && (a = sa(b, !0)) && (a = b.indexOf(")", b.length - a) - b.length)) g[0] = g[0].slice(0, a), g[2] = b.slice(0, a); return g.slice(0, 3)
				}
			}, filter: {
				TAG: function (g) { var a = g.replace(Fa, Ga).toLowerCase(); return "*" === g ? function () { return !0 } : function (g) { return g.nodeName && g.nodeName.toLowerCase() === a } }, CLASS: function (g) {
					var a = sc[g + " "]; return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + g + "([\\x20\\t\\r\\n\\f]|$)")) && sc(g, function (g) {
						return a.test("string" === typeof g.className &&
							g.className || typeof g.getAttribute !== T && g.getAttribute("class") || "")
					})
				}, ATTR: function (g, a, b) { return function (f) { f = D.attr(f, g); if (null == f) return "!=" === a; if (!a) return !0; f += ""; return "=" === a ? f === b : "!=" === a ? f !== b : "^=" === a ? b && 0 === f.indexOf(b) : "*=" === a ? b && -1 < f.indexOf(b) : "$=" === a ? b && f.slice(-b.length) === b : "~=" === a ? -1 < (" " + f + " ").indexOf(b) : "|=" === a ? f === b || f.slice(0, b.length + 1) === b + "-" : !1 } }, CHILD: function (g, a, b, f, c) {
					var k = "nth" !== g.slice(0, 3), d = "last" !== g.slice(-4), n = "of-type" === a; return 1 === f && 0 === c ? function (g) { return !!g.parentNode } :
						function (a, b, p) {
							var w, e, r, h, q; b = k !== d ? "nextSibling" : "previousSibling"; var j = a.parentNode, l = n && a.nodeName.toLowerCase(); p = !p && !n; if (j) {
								if (k) { for (; b;) { for (e = a; e = e[b];)if (n ? e.nodeName.toLowerCase() === l : 1 === e.nodeType) return !1; q = b = "only" === g && !q && "nextSibling" } return !0 } q = [d ? j.firstChild : j.lastChild]; if (d && p) { p = j[I] || (j[I] = {}); w = p[g] || []; h = w[0] === da && w[1]; r = w[0] === da && w[2]; for (e = h && j.childNodes[h]; e = ++h && e && e[b] || (r = h = 0) || q.pop();)if (1 === e.nodeType && ++r && e === a) { p[g] = [da, h, r]; break } } else if (p && (w = (a[I] ||
									(a[I] = {}))[g]) && w[0] === da) r = w[1]; else for (; e = ++h && e && e[b] || (r = h = 0) || q.pop();)if ((n ? e.nodeName.toLowerCase() === l : 1 === e.nodeType) && ++r) if (p && ((e[I] || (e[I] = {}))[g] = [da, r]), e === a) break; r -= c; return r === f || 0 === r % f && 0 <= r / f
							}
						}
				}, PSEUDO: function (g, a) {
					var b, f = F.pseudos[g] || F.setFilters[g.toLowerCase()] || D.error("unsupported pseudo: " + g); return f[I] ? f(a) : 1 < f.length ? (b = [g, g, "", a], F.setFilters.hasOwnProperty(g.toLowerCase()) ? R(function (g, b) { for (var p, c = f(g, a), k = c.length; k--;)p = Ta.call(g, c[k]), g[p] = !(b[p] = c[k]) }) :
						function (g) { return f(g, 0, b) }) : f
				}
			}, pseudos: {
				not: R(function (g) { var a = [], b = [], f = $a(g.replace(wb, "$1")); return f[I] ? R(function (g, a, b, p) { p = f(g, null, p, []); for (var w = g.length; w--;)if (b = p[w]) g[w] = !(a[w] = b) }) : function (g, c, k) { a[0] = g; f(a, null, k, b); return !b.pop() } }), has: R(function (g) { return function (a) { return 0 < D(g, a).length } }), contains: R(function (g) { return function (a) { return -1 < (a.textContent || a.innerText || Ia(a)).indexOf(g) } }), lang: R(function (g) {
					qd.test(g || "") || D.error("unsupported lang: " + g); g = g.replace(Fa,
						Ga).toLowerCase(); return function (a) { var b; do if (b = Z ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) return b = b.toLowerCase(), b === g || 0 === b.indexOf(g + "-"); while ((a = a.parentNode) && 1 === a.nodeType); return !1 }
				}), target: function (g) { var a = Pb.location && Pb.location.hash; return a && a.slice(1) === g.id }, root: function (g) { return g === ia }, focus: function (g) { return g === P.activeElement && (!P.hasFocus || P.hasFocus()) && !(!g.type && !g.href && !~g.tabIndex) }, enabled: function (g) { return !1 === g.disabled }, disabled: function (g) {
					return !0 ===
						g.disabled
				}, checked: function (g) { var a = g.nodeName.toLowerCase(); return "input" === a && !!g.checked || "option" === a && !!g.selected }, selected: function (g) { g.parentNode && g.parentNode.selectedIndex; return !0 === g.selected }, empty: function (g) { for (g = g.firstChild; g; g = g.nextSibling)if (6 > g.nodeType) return !1; return !0 }, parent: function (g) { return !F.pseudos.empty(g) }, header: function (g) { return sd.test(g.nodeName) }, input: function (g) { return rd.test(g.nodeName) }, button: function (g) {
					var a = g.nodeName.toLowerCase(); return "input" ===
						a && "button" === g.type || "button" === a
				}, text: function (g) { var a; return "input" === g.nodeName.toLowerCase() && "text" === g.type && (null == (a = g.getAttribute("type")) || "text" === a.toLowerCase()) }, first: Ra(function () { return [0] }), last: Ra(function (g, a) { return [a - 1] }), eq: Ra(function (g, a, b) { return [0 > b ? b + a : b] }), even: Ra(function (g, a) { for (var b = 0; b < a; b += 2)g.push(b); return g }), odd: Ra(function (g, a) { for (var b = 1; b < a; b += 2)g.push(b); return g }), lt: Ra(function (g, a, b) { for (a = 0 > b ? b + a : b; 0 <= --a;)g.push(a); return g }), gt: Ra(function (g,
					a, b) { for (b = 0 > b ? b + a : b; ++b < a;)g.push(b); return g })
			}
		}; F.pseudos.nth = F.pseudos.eq; for (za in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) F.pseudos[za] = id(za); for (za in { submit: !0, reset: !0 }) F.pseudos[za] = jd(za); qc.prototype = F.filters = F.pseudos; F.setFilters = new qc; $a = D.compile = function (g, a) {
			var b, f = [], c = [], k = Ba[g + " "]; if (!k) {
				a || (a = sa(g)); for (b = a.length; b--;)k = Wb(a[b]), k[I] ? f.push(k) : c.push(k); var d = 0 < f.length, n = 0 < c.length; b = function (g, a, b, p, w) {
					var k, e, r, h = 0, q = "0", j = g && [], qa = [], l = ya, A = g || n && F.find.TAG("*",
						w), z = da += null == l ? 1 : Math.random() || 0.1, T = A.length; for (w && (ya = a !== P && a); q !== T && null != (k = A[q]); q++) { if (n && k) { for (e = 0; r = c[e++];)if (r(k, a, b)) { p.push(k); break } w && (da = z) } d && ((k = !r && k) && h--, g && j.push(k)) } h += q; if (d && q !== h) { for (e = 0; r = f[e++];)r(j, qa, a, b); if (g) { if (0 < h) for (; q--;)!j[q] && !qa[q] && (qa[q] = aa.call(p)); qa = Sa(qa) } Ea.apply(p, qa); w && (!g && 0 < qa.length && 1 < h + f.length) && D.uniqueSort(p) } w && (da = z, ya = l); return j
				}; b = d ? R(b) : b; k = Ba(g, b)
			} return k
		}; G.sortStable = I.split("").sort(A).join("") === I; G.detectDuplicates = !!Aa;
	na(); G.sortDetached = oa(function (g) { return g.compareDocumentPosition(P.createElement("div")) & 1 }); oa(function (g) { g.innerHTML = "<a href='#'></a>"; return "#" === g.firstChild.getAttribute("href") }) || Sb("type|href|height|width", function (g, a, b) { if (!b) return g.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2) }); (!G.attributes || !oa(function (g) { g.innerHTML = "<input/>"; g.firstChild.setAttribute("value", ""); return "" === g.firstChild.getAttribute("value") })) && Sb("value", function (g, a, b) { if (!b && "input" === g.nodeName.toLowerCase()) return g.defaultValue });
	oa(function (g) { return null == g.getAttribute("disabled") }) || Sb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (g, a, b) { var f; if (!b) return !0 === g[a] ? a.toLowerCase() : (f = g.getAttributeNode(a)) && f.specified ? f.value : null }); f.find = D; f.expr = D.selectors; f.expr[":"] = f.expr.pseudos; f.unique = D.uniqueSort; f.text = D.getText; f.isXMLDoc = D.isXML; f.contains = D.contains; var wc = f.expr.match.needsContext, xc = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Vc =
		/^.[^:#\[\.,]*$/; f.filter = function (g, a, b) { var c = a[0]; b && (g = ":not(" + g + ")"); return 1 === a.length && 1 === c.nodeType ? f.find.matchesSelector(c, g) ? [c] : [] : f.find.matches(g, f.grep(a, function (g) { return 1 === g.nodeType })) }; f.fn.extend({
			find: function (g) {
				var a, b = [], c = this, k = c.length; if ("string" !== typeof g) return this.pushStack(f(g).filter(function () { for (a = 0; a < k; a++)if (f.contains(c[a], this)) return !0 })); for (a = 0; a < k; a++)f.find(g, c[a], b); b = this.pushStack(1 < k ? f.unique(b) : b); b.selector = this.selector ? this.selector + " " +
					g : g; return b
			}, filter: function (g) { return this.pushStack(h(this, g || [], !1)) }, not: function (g) { return this.pushStack(h(this, g || [], !0)) }, is: function (g) { return !!h(this, "string" === typeof g && wc.test(g) ? f(g) : g || [], !1).length }
		}); var mb, y = a.document, td = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (f.fn.init = function (g, a) {
			var b, c; if (!g) return this; if ("string" === typeof g) {
				if ((b = "<" === g.charAt(0) && ">" === g.charAt(g.length - 1) && 3 <= g.length ? [null, g, null] : td.exec(g)) && (b[1] || !a)) {
					if (b[1]) {
						if (a = a instanceof f ? a[0] : a, f.merge(this,
							f.parseHTML(b[1], a && a.nodeType ? a.ownerDocument || a : y, !0)), xc.test(b[1]) && f.isPlainObject(a)) for (b in a) if (f.isFunction(this[b])) this[b](a[b]); else this.attr(b, a[b])
					} else { if ((c = y.getElementById(b[2])) && c.parentNode) { if (c.id !== b[2]) return mb.find(g); this.length = 1; this[0] = c } this.context = y; this.selector = g } return this
				} return !a || a.jquery ? (a || mb).find(g) : this.constructor(a).find(g)
			} if (g.nodeType) return this.context = this[0] = g, this.length = 1, this; if (f.isFunction(g)) return "undefined" !== typeof mb.ready ? mb.ready(g) :
				g(f); void 0 !== g.selector && (this.selector = g.selector, this.context = g.context); return f.makeArray(g, this)
		}).prototype = f.fn; mb = f(y); var ud = /^(?:parents|prev(?:Until|All))/, vd = { children: !0, contents: !0, next: !0, prev: !0 }; f.extend({ dir: function (g, a, b) { var c = []; for (g = g[a]; g && 9 !== g.nodeType && (void 0 === b || 1 !== g.nodeType || !f(g).is(b));)1 === g.nodeType && c.push(g), g = g[a]; return c }, sibling: function (g, a) { for (var b = []; g; g = g.nextSibling)1 === g.nodeType && g !== a && b.push(g); return b } }); f.fn.extend({
			has: function (g) {
				var a,
				b = f(g, this), c = b.length; return this.filter(function () { for (a = 0; a < c; a++)if (f.contains(this, b[a])) return !0 })
			}, closest: function (g, a) { for (var b, c = 0, k = this.length, d = [], n = wc.test(g) || "string" !== typeof g ? f(g, a || this.context) : 0; c < k; c++)for (b = this[c]; b && b !== a; b = b.parentNode)if (11 > b.nodeType && (n ? -1 < n.index(b) : 1 === b.nodeType && f.find.matchesSelector(b, g))) { d.push(b); break } return this.pushStack(1 < d.length ? f.unique(d) : d) }, index: function (g) {
				return !g ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" ===
					typeof g ? f.inArray(this[0], f(g)) : f.inArray(g.jquery ? g[0] : g, this)
			}, add: function (g, a) { return this.pushStack(f.unique(f.merge(this.get(), f(g, a)))) }, addBack: function (g) { return this.add(null == g ? this.prevObject : this.prevObject.filter(g)) }
		}); f.each({
			parent: function (g) { return (g = g.parentNode) && 11 !== g.nodeType ? g : null }, parents: function (g) { return f.dir(g, "parentNode") }, parentsUntil: function (g, a, b) { return f.dir(g, "parentNode", b) }, next: function (g) { return e(g, "nextSibling") }, prev: function (g) { return e(g, "previousSibling") },
			nextAll: function (g) { return f.dir(g, "nextSibling") }, prevAll: function (g) { return f.dir(g, "previousSibling") }, nextUntil: function (g, a, b) { return f.dir(g, "nextSibling", b) }, prevUntil: function (g, a, b) { return f.dir(g, "previousSibling", b) }, siblings: function (g) { return f.sibling((g.parentNode || {}).firstChild, g) }, children: function (g) { return f.sibling(g.firstChild) }, contents: function (g) { return f.nodeName(g, "iframe") ? g.contentDocument || g.contentWindow.document : f.merge([], g.childNodes) }
		}, function (g, a) {
			f.fn[g] = function (b,
				c) { var k = f.map(this, a, b); "Until" !== g.slice(-5) && (c = b); c && "string" === typeof c && (k = f.filter(c, k)); 1 < this.length && (vd[g] || (k = f.unique(k)), ud.test(g) && (k = k.reverse())); return this.pushStack(k) }
		}); var va = /\S+/g, yc = {}; f.Callbacks = function (g) {
			var a; if ("string" === typeof g) { if (!(a = yc[g])) { a = g; var b = yc[a] = {}; f.each(a.match(va) || [], function (g, a) { b[a] = !0 }); a = b } } else a = f.extend({}, g); g = a; var c, k, d, n, e, r, h = [], q = !g.once && [], j = function (a) {
				k = g.memory && a; d = !0; e = r || 0; r = 0; n = h.length; for (c = !0; h && e < n; e++)if (!1 === h[e].apply(a[0],
					a[1]) && g.stopOnFalse) { k = !1; break } c = !1; h && (q ? q.length && j(q.shift()) : k ? h = [] : l.disable())
			}, l = {
				add: function () { if (h) { var a = h.length; (function $c(a) { f.each(a, function (a, b) { var p = f.type(b); "function" === p ? (!g.unique || !l.has(b)) && h.push(b) : b && (b.length && "string" !== p) && $c(b) }) })(arguments); c ? n = h.length : k && (r = a, j(k)) } return this }, remove: function () { h && f.each(arguments, function (g, a) { for (var b; -1 < (b = f.inArray(a, h, b));)h.splice(b, 1), c && (b <= n && n--, b <= e && e--) }); return this }, has: function (g) {
					return g ? -1 < f.inArray(g,
						h) : !(!h || !h.length)
				}, empty: function () { h = []; n = 0; return this }, disable: function () { h = q = k = void 0; return this }, disabled: function () { return !h }, lock: function () { q = void 0; k || l.disable(); return this }, locked: function () { return !q }, fireWith: function (g, a) { if (h && (!d || q)) a = a || [], a = [g, a.slice ? a.slice() : a], c ? q.push(a) : j(a); return this }, fire: function () { l.fireWith(this, arguments); return this }, fired: function () { return !!d }
			}; return l
		}; f.extend({
			Deferred: function (g) {
				var a = [["resolve", "done", f.Callbacks("once memory"), "resolved"],
				["reject", "fail", f.Callbacks("once memory"), "rejected"], ["notify", "progress", f.Callbacks("memory")]], b = "pending", c = {
					state: function () { return b }, always: function () { k.done(arguments).fail(arguments); return this }, then: function () {
						var g = arguments; return f.Deferred(function (b) {
							f.each(a, function (a, p) {
								var w = f.isFunction(g[a]) && g[a]; k[p[1]](function () {
									var g = w && w.apply(this, arguments); if (g && f.isFunction(g.promise)) g.promise().done(b.resolve).fail(b.reject).progress(b.notify); else b[p[0] + "With"](this === c ? b.promise() :
										this, w ? [g] : arguments)
								})
							}); g = null
						}).promise()
					}, promise: function (g) { return null != g ? f.extend(g, c) : c }
				}, k = {}; c.pipe = c.then; f.each(a, function (g, f) { var d = f[2], n = f[3]; c[f[1]] = d.add; n && d.add(function () { b = n }, a[g ^ 1][2].disable, a[2][2].lock); k[f[0]] = function () { k[f[0] + "With"](this === k ? c : this, arguments); return this }; k[f[0] + "With"] = d.fireWith }); c.promise(k); g && g.call(k, k); return k
			}, when: function (g) {
				var a = 0, b = n.call(arguments), c = b.length, k = 1 !== c || g && f.isFunction(g.promise) ? c : 0, d = 1 === k ? g : f.Deferred(), e = function (g,
					a, b) { return function (f) { a[g] = this; b[g] = 1 < arguments.length ? n.call(arguments) : f; b === r ? d.notifyWith(a, b) : --k || d.resolveWith(a, b) } }, r, h, q; if (1 < c) { r = Array(c); h = Array(c); for (q = Array(c); a < c; a++)b[a] && f.isFunction(b[a].promise) ? b[a].promise().done(e(a, q, b)).fail(d.reject).progress(e(a, h, r)) : --k } k || d.resolveWith(q, b); return d.promise()
			}
		}); var yb; f.fn.ready = function (g) { f.ready.promise().done(g); return this }; f.extend({
			isReady: !1, readyWait: 1, holdReady: function (g) { g ? f.readyWait++ : f.ready(!0) }, ready: function (g) {
				if (!(!0 ===
					g ? --f.readyWait : f.isReady)) { if (!y.body) return setTimeout(f.ready); f.isReady = !0; !0 !== g && 0 < --f.readyWait || (yb.resolveWith(y, [f]), f.fn.trigger && f(y).trigger("ready").off("ready")) }
			}
		}); f.ready.promise = function (g) {
			if (!yb) if (yb = f.Deferred(), "complete" === y.readyState) setTimeout(f.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", t, !1), a.addEventListener("load", t, !1); else {
				y.attachEvent("onreadystatechange", t); a.attachEvent("onload", t); var b = !1; try { b = null == a.frameElement && y.documentElement } catch (p) { } b &&
					b.doScroll && function Uc() { if (!f.isReady) { try { b.doScroll("left") } catch (g) { return setTimeout(Uc, 50) } j(); f.ready() } }()
			} return yb.promise(g)
		}; var ka = "undefined", zc; for (zc in f(v)) break; v.ownLast = "0" !== zc; v.inlineBlockNeedsLayout = !1; f(function () {
			var g, a, b = y.getElementsByTagName("body")[0]; if (b) {
				g = y.createElement("div"); g.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"; a = y.createElement("div"); b.appendChild(g).appendChild(a); if (typeof a.style.zoom !== ka && (a.style.cssText =
					"border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", v.inlineBlockNeedsLayout = 3 === a.offsetWidth)) b.style.zoom = 1; b.removeChild(g)
			}
		}); var wd = y.createElement("div"); if (null == v.deleteExpando) { v.deleteExpando = !0; try { delete wd.test } catch ($d) { v.deleteExpando = !1 } } f.acceptData = function (g) { var a = f.noData[(g.nodeName + " ").toLowerCase()], b = +g.nodeType || 1; return 1 !== b && 9 !== b ? !1 : !a || !0 !== a && g.getAttribute("classid") === a }; var Xc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Wc = /([A-Z])/g; f.extend({
			cache: {}, noData: {
				"applet ": !0,
				"embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			}, hasData: function (g) { g = g.nodeType ? f.cache[g[f.expando]] : g[f.expando]; return !!g && !u(g) }, data: function (g, a, f) { return b(g, a, f) }, removeData: function (g, a) { return c(g, a) }, _data: function (g, a, f) { return b(g, a, f, !0) }, _removeData: function (g, a) { return c(g, a, !0) }
		}); f.fn.extend({
			data: function (g, a) {
				var b, c, k, d = this[0], n = d && d.attributes; if (void 0 === g) {
					if (this.length && (k = f.data(d), 1 === d.nodeType && !f._data(d, "parsedAttrs"))) {
						for (b = n.length; b--;)c = n[b].name,
							0 === c.indexOf("data-") && (c = f.camelCase(c.slice(5)), s(d, c, k[c])); f._data(d, "parsedAttrs", !0)
					} return k
				} return "object" === typeof g ? this.each(function () { f.data(this, g) }) : 1 < arguments.length ? this.each(function () { f.data(this, g, a) }) : d ? s(d, g, f.data(d, g)) : void 0
			}, removeData: function (g) { return this.each(function () { f.removeData(this, g) }) }
		}); f.extend({
			queue: function (g, a, b) { var c; if (g) return a = (a || "fx") + "queue", c = f._data(g, a), b && (!c || f.isArray(b) ? c = f._data(g, a, f.makeArray(b)) : c.push(b)), c || [] }, dequeue: function (g,
				a) { a = a || "fx"; var b = f.queue(g, a), c = b.length, k = b.shift(), d = f._queueHooks(g, a), n = function () { f.dequeue(g, a) }; "inprogress" === k && (k = b.shift(), c--); k && ("fx" === a && b.unshift("inprogress"), delete d.stop, k.call(g, n, d)); !c && d && d.empty.fire() }, _queueHooks: function (g, a) { var b = a + "queueHooks"; return f._data(g, b) || f._data(g, b, { empty: f.Callbacks("once memory").add(function () { f._removeData(g, a + "queue"); f._removeData(g, b) }) }) }
		}); f.fn.extend({
			queue: function (a, b) {
				var c = 2; "string" !== typeof a && (b = a, a = "fx", c--); return arguments.length <
					c ? f.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = f.queue(this, a, b); f._queueHooks(this, a); "fx" === a && "inprogress" !== c[0] && f.dequeue(this, a) })
			}, dequeue: function (a) { return this.each(function () { f.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) {
				var c, k = 1, d = f.Deferred(), n = this, e = this.length, r = function () { --k || d.resolveWith(n, [n]) }; "string" !== typeof a && (b = a, a = void 0); for (a = a || "fx"; e--;)if ((c = f._data(n[e], a + "queueHooks")) && c.empty) k++, c.empty.add(r);
				r(); return d.promise(b)
			}
		}); var zb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Oa = ["Top", "Right", "Bottom", "Left"], hb = function (a, b) { a = b || a; return "none" === f.css(a, "display") || !f.contains(a.ownerDocument, a) }, Ua = f.access = function (a, b, c, k, d, n, e) {
			var r = 0, h = a.length, q = null == c; if ("object" === f.type(c)) for (r in d = !0, c) f.access(a, b, r, c[r], !0, n, e); else if (void 0 !== k && (d = !0, f.isFunction(k) || (e = !0), q && (e ? (b.call(a, k), b = null) : (q = b, b = function (a, g, b) { return q.call(f(a), b) })), b)) for (; r < h; r++)b(a[r], c, e ? k : k.call(a[r],
				r, b(a[r], c))); return d ? a : q ? b.call(a) : h ? b(a[0], c) : n
		}, Mb = /^(?:checkbox|radio)$/i, Yb = y.createDocumentFragment(), ba = y.createElement("div"), nb = y.createElement("input"); ba.setAttribute("className", "t"); ba.innerHTML = "  <link/><table></table><a href='/a'>a</a>"; v.leadingWhitespace = 3 === ba.firstChild.nodeType; v.tbody = !ba.getElementsByTagName("tbody").length; v.htmlSerialize = !!ba.getElementsByTagName("link").length; v.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML; nb.type = "checkbox";
	nb.checked = !0; Yb.appendChild(nb); v.appendChecked = nb.checked; ba.innerHTML = "<textarea>x</textarea>"; v.noCloneChecked = !!ba.cloneNode(!0).lastChild.defaultValue; Yb.appendChild(ba); ba.innerHTML = "<input type='radio' checked='checked' name='t'/>"; v.checkClone = ba.cloneNode(!0).cloneNode(!0).lastChild.checked; v.noCloneEvent = !0; ba.attachEvent && (ba.attachEvent("onclick", function () { v.noCloneEvent = !1 }), ba.cloneNode(!0).click()); if (null == v.deleteExpando) {
		v.deleteExpando = !0; try { delete ba.test } catch (ae) {
			v.deleteExpando =
			!1
		}
	} var Yb = ba = nb = null, Ab, Bb, Ac = y.createElement("div"); for (Ab in { submit: !0, change: !0, focusin: !0 }) if (Bb = "on" + Ab, !(v[Ab + "Bubbles"] = Bb in a)) Ac.setAttribute(Bb, "t"), v[Ab + "Bubbles"] = !1 === Ac.attributes[Bb].expando; var Zb = /^(?:input|select|textarea)$/i, xd = /^key/, yd = /^(?:mouse|contextmenu)|click/, Bc = /^(?:focusinfocus|focusoutblur)$/, Cc = /^([^.]*)(?:\.(.+)|)$/; f.event = {
		global: {}, add: function (a, b, c, k, d) {
			var n, e, r, h, q, j, l, A, z; if (r = f._data(a)) {
				c.handler && (h = c, c = h.handler, d = h.selector); c.guid || (c.guid = f.guid++);
				if (!(e = r.events)) e = r.events = {}; if (!(q = r.handle)) q = r.handle = function (a) { return typeof f !== ka && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(q.elem, arguments) : void 0 }, q.elem = a; b = (b || "").match(va) || [""]; for (r = b.length; r--;)if (n = Cc.exec(b[r]) || [], A = j = n[1], z = (n[2] || "").split(".").sort(), A) {
					n = f.event.special[A] || {}; A = (d ? n.delegateType : n.bindType) || A; n = f.event.special[A] || {}; j = f.extend({
						type: A, origType: j, data: k, handler: c, guid: c.guid, selector: d, needsContext: d && f.expr.match.needsContext.test(d),
						namespace: z.join(".")
					}, h); if (!(l = e[A])) if (l = e[A] = [], l.delegateCount = 0, !n.setup || !1 === n.setup.call(a, k, z, q)) a.addEventListener ? a.addEventListener(A, q, !1) : a.attachEvent && a.attachEvent("on" + A, q); n.add && (n.add.call(a, j), j.handler.guid || (j.handler.guid = c.guid)); d ? l.splice(l.delegateCount++, 0, j) : l.push(j); f.event.global[A] = !0
				} a = null
			}
		}, remove: function (a, b, c, k, d) {
			var n, e, r, h, q, j, l, A, z, T, t, K = f.hasData(a) && f._data(a); if (K && (j = K.events)) {
				b = (b || "").match(va) || [""]; for (q = b.length; q--;)if (r = Cc.exec(b[q]) || [], z =
					t = r[1], T = (r[2] || "").split(".").sort(), z) { l = f.event.special[z] || {}; z = (k ? l.delegateType : l.bindType) || z; A = j[z] || []; r = r[2] && RegExp("(^|\\.)" + T.join("\\.(?:.*\\.|)") + "(\\.|$)"); for (h = n = A.length; n--;)if (e = A[n], (d || t === e.origType) && (!c || c.guid === e.guid) && (!r || r.test(e.namespace)) && (!k || k === e.selector || "**" === k && e.selector)) A.splice(n, 1), e.selector && A.delegateCount--, l.remove && l.remove.call(a, e); h && !A.length && ((!l.teardown || !1 === l.teardown.call(a, T, K.handle)) && f.removeEvent(a, z, K.handle), delete j[z]) } else for (z in j) f.event.remove(a,
						z + b[q], c, k, !0); f.isEmptyObject(j) && (delete K.handle, f._removeData(a, "events"))
			}
		}, trigger: function (g, b, c, k) {
			var d, n, e, r, h, q, j = [c || y], l = xa.call(g, "type") ? g.type : g; h = xa.call(g, "namespace") ? g.namespace.split(".") : []; e = d = c = c || y; if (!(3 === c.nodeType || 8 === c.nodeType) && !Bc.test(l + f.event.triggered)) if (0 <= l.indexOf(".") && (h = l.split("."), l = h.shift(), h.sort()), n = 0 > l.indexOf(":") && "on" + l, g = g[f.expando] ? g : new f.Event(l, "object" === typeof g && g), g.isTrigger = k ? 2 : 3, g.namespace = h.join("."), g.namespace_re = g.namespace ?
				RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, g.result = void 0, g.target || (g.target = c), b = null == b ? [g] : f.makeArray(b, [g]), h = f.event.special[l] || {}, k || !(h.trigger && !1 === h.trigger.apply(c, b))) {
					if (!k && !h.noBubble && !f.isWindow(c)) { r = h.delegateType || l; Bc.test(r + l) || (e = e.parentNode); for (; e; e = e.parentNode)j.push(e), d = e; if (d === (c.ownerDocument || y)) j.push(d.defaultView || d.parentWindow || a) } for (q = 0; (e = j[q++]) && !g.isPropagationStopped();)if (g.type = 1 < q ? r : h.bindType || l, (d = (f._data(e, "events") || {})[g.type] &&
						f._data(e, "handle")) && d.apply(e, b), (d = n && e[n]) && d.apply && f.acceptData(e)) g.result = d.apply(e, b), !1 === g.result && g.preventDefault(); g.type = l; if (!k && !g.isDefaultPrevented() && (!h._default || !1 === h._default.apply(j.pop(), b)) && f.acceptData(c) && n && c[l] && !f.isWindow(c)) { (d = c[n]) && (c[n] = null); f.event.triggered = l; try { c[l]() } catch (A) { } f.event.triggered = void 0; d && (c[n] = d) } return g.result
			}
		}, dispatch: function (a) {
			a = f.event.fix(a); var b, c, k, d, e = [], r = n.call(arguments); b = (f._data(this, "events") || {})[a.type] || []; var h =
				f.event.special[a.type] || {}; r[0] = a; a.delegateTarget = this; if (!(h.preDispatch && !1 === h.preDispatch.call(this, a))) {
					e = f.event.handlers.call(this, a, b); for (b = 0; (k = e[b++]) && !a.isPropagationStopped();) { a.currentTarget = k.elem; for (d = 0; (c = k.handlers[d++]) && !a.isImmediatePropagationStopped();)if (!a.namespace_re || a.namespace_re.test(c.namespace)) if (a.handleObj = c, a.data = c.data, c = ((f.event.special[c.origType] || {}).handle || c.handler).apply(k.elem, r), void 0 !== c && !1 === (a.result = c)) a.preventDefault(), a.stopPropagation() } h.postDispatch &&
						h.postDispatch.call(this, a); return a.result
				}
		}, handlers: function (a, b) { var c, k, d, n, e = [], r = b.delegateCount, h = a.target; if (r && h.nodeType && (!a.button || "click" !== a.type)) for (; h != this; h = h.parentNode || this)if (1 === h.nodeType && (!0 !== h.disabled || "click" !== a.type)) { d = []; for (n = 0; n < r; n++)k = b[n], c = k.selector + " ", void 0 === d[c] && (d[c] = k.needsContext ? 0 <= f(c, this).index(h) : f.find(c, this, null, [h]).length), d[c] && d.push(k); d.length && e.push({ elem: h, handlers: d }) } r < b.length && e.push({ elem: this, handlers: b.slice(r) }); return e },
		fix: function (a) { if (a[f.expando]) return a; var b, c, k; b = a.type; var d = a, n = this.fixHooks[b]; n || (this.fixHooks[b] = n = yd.test(b) ? this.mouseHooks : xd.test(b) ? this.keyHooks : {}); k = n.props ? this.props.concat(n.props) : this.props; a = new f.Event(d); for (b = k.length; b--;)c = k[b], a[c] = d[c]; a.target || (a.target = d.srcElement || y); 3 === a.target.nodeType && (a.target = a.target.parentNode); a.metaKey = !!a.metaKey; return n.filter ? n.filter(a, d) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {}, keyHooks: { props: ["char", "charCode", "key", "keyCode"], filter: function (a, b) { null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode); return a } }, mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
				var f, c, k = b.button, d = b.fromElement; null == a.pageX && null != b.clientX && (f = a.target.ownerDocument || y, c = f.documentElement, f = f.body, a.pageX = b.clientX + (c && c.scrollLeft || f && f.scrollLeft || 0) - (c && c.clientLeft ||
					f && f.clientLeft || 0), a.pageY = b.clientY + (c && c.scrollTop || f && f.scrollTop || 0) - (c && c.clientTop || f && f.clientTop || 0)); !a.relatedTarget && d && (a.relatedTarget = d === a.target ? b.toElement : d); !a.which && void 0 !== k && (a.which = k & 1 ? 1 : k & 2 ? 3 : k & 4 ? 2 : 0); return a
			}
		}, special: {
			load: { noBubble: !0 }, focus: { trigger: function () { if (this !== K() && this.focus) try { return this.focus(), !1 } catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { if (this === K() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: {
				trigger: function () {
					if (f.nodeName(this,
						"input") && "checkbox" === this.type && this.click) return this.click(), !1
				}, _default: function (a) { return f.nodeName(a.target, "a") }
			}, beforeunload: { postDispatch: function (a) { void 0 !== a.result && (a.originalEvent.returnValue = a.result) } }
		}, simulate: function (a, b, c, k) { a = f.extend(new f.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); k ? f.event.trigger(a, null, b) : f.event.dispatch.call(b, a); a.isDefaultPrevented() && c.preventDefault() }
	}; f.removeEvent = y.removeEventListener ? function (a, b, f) {
		a.removeEventListener && a.removeEventListener(b,
			f, !1)
	} : function (a, b, f) { b = "on" + b; a.detachEvent && (typeof a[b] === ka && (a[b] = null), a.detachEvent(b, f)) }; f.Event = function (a, b) { if (!(this instanceof f.Event)) return new f.Event(a, b); a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (!1 === a.returnValue || a.getPreventDefault && a.getPreventDefault()) ? d : q) : this.type = a; b && f.extend(this, b); this.timeStamp = a && a.timeStamp || f.now(); this[f.expando] = !0 }; f.Event.prototype = {
		isDefaultPrevented: q, isPropagationStopped: q,
		isImmediatePropagationStopped: q, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = d; a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = d; a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = d; this.stopPropagation() }
	}; f.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) {
		f.event.special[a] = {
			delegateType: b,
			bindType: b, handle: function (a) { var g, c = a.relatedTarget, k = a.handleObj; if (!c || c !== this && !f.contains(this, c)) a.type = k.origType, g = k.handler.apply(this, arguments), a.type = b; return g }
		}
	}); v.submitBubbles || (f.event.special.submit = {
		setup: function () {
			if (f.nodeName(this, "form")) return !1; f.event.add(this, "click._submit keypress._submit", function (a) {
				a = a.target; if ((a = f.nodeName(a, "input") || f.nodeName(a, "button") ? a.form : void 0) && !f._data(a, "submitBubbles")) f.event.add(a, "submit._submit", function (a) {
					a._submit_bubble =
					!0
				}), f._data(a, "submitBubbles", !0)
			})
		}, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { if (f.nodeName(this, "form")) return !1; f.event.remove(this, "._submit") }
	}); v.changeBubbles || (f.event.special.change = {
		setup: function () {
			if (Zb.test(this.nodeName)) {
				if ("checkbox" === this.type || "radio" === this.type) f.event.add(this, "propertychange._change", function (a) {
					"checked" === a.originalEvent.propertyName &&
					(this._just_changed = !0)
				}), f.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1); f.event.simulate("change", this, a, !0) }); return !1
			} f.event.add(this, "beforeactivate._change", function (a) { a = a.target; Zb.test(a.nodeName) && !f._data(a, "changeBubbles") && (f.event.add(a, "change._change", function (a) { this.parentNode && (!a.isSimulated && !a.isTrigger) && f.event.simulate("change", this.parentNode, a, !0) }), f._data(a, "changeBubbles", !0)) })
		}, handle: function (a) {
			var b = a.target;
			if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
		}, teardown: function () { f.event.remove(this, "._change"); return !Zb.test(this.nodeName) }
	}); v.focusinBubbles || f.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
		var c = function (a) { f.event.simulate(b, a.target, f.event.fix(a), !0) }; f.event.special[b] = {
			setup: function () { var k = this.ownerDocument || this, d = f._data(k, b); d || k.addEventListener(a, c, !0); f._data(k, b, (d || 0) + 1) }, teardown: function () {
				var k =
					this.ownerDocument || this, d = f._data(k, b) - 1; d ? f._data(k, b, d) : (k.removeEventListener(a, c, !0), f._removeData(k, b))
			}
		}
	}); f.fn.extend({
		on: function (a, b, c, k, d) {
			var n, e; if ("object" === typeof a) { "string" !== typeof b && (c = c || b, b = void 0); for (n in a) this.on(n, b, c, a[n], d); return this } null == c && null == k ? (k = b, c = b = void 0) : null == k && ("string" === typeof b ? (k = c, c = void 0) : (k = c, c = b, b = void 0)); if (!1 === k) k = q; else if (!k) return this; 1 === d && (e = k, k = function (a) { f().off(a); return e.apply(this, arguments) }, k.guid = e.guid || (e.guid = f.guid++));
			return this.each(function () { f.event.add(this, a, k, c, b) })
		}, one: function (a, b, f, c) { return this.on(a, b, f, c, 1) }, off: function (a, b, c) { var k; if (a && a.preventDefault && a.handleObj) return k = a.handleObj, f(a.delegateTarget).off(k.namespace ? k.origType + "." + k.namespace : k.origType, k.selector, k.handler), this; if ("object" === typeof a) { for (k in a) this.off(k, b, a[k]); return this } if (!1 === b || "function" === typeof b) c = b, b = void 0; !1 === c && (c = q); return this.each(function () { f.event.remove(this, a, c, b) }) }, trigger: function (a, b) {
			return this.each(function () {
				f.event.trigger(a,
					b, this)
			})
		}, triggerHandler: function (a, b) { var c = this[0]; if (c) return f.event.trigger(a, b, c, !0) }
	}); var mc = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", zd = / jQuery\d+="(?:null|\d+)"/g, Dc = RegExp("<(?:" + mc + ")[\\s/>]", "i"), $b = /^\s+/, Ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fc = /<([\w:]+)/, Gc = /<tbody/i, Ad = /<|&#?\w+;/, Bd = /<(?:script|style|link)/i, Cd = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Hc = /^$|\/(?:java|ecma)script/i, Yc = /^true\/(.*)/, Dd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ja = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, ac =
			U(y).appendChild(y.createElement("div")); ja.optgroup = ja.option; ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead; ja.th = ja.td; f.extend({
				clone: function (a, b, c) {
					var k, d, n, e, r, h = f.contains(a.ownerDocument, a); v.html5Clone || f.isXMLDoc(a) || !Dc.test("<" + a.nodeName + ">") ? n = a.cloneNode(!0) : (ac.innerHTML = a.outerHTML, ac.removeChild(n = ac.firstChild)); if ((!v.noCloneEvent || !v.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !f.isXMLDoc(a)) {
						k = C(n); r = C(a); for (e = 0; null != (d = r[e]); ++e)if (k[e]) {
							var q = k[e], l = void 0, j =
								void 0, A = void 0; if (1 === q.nodeType) {
									l = q.nodeName.toLowerCase(); if (!v.noCloneEvent && q[f.expando]) { A = f._data(q); for (j in A.events) f.removeEvent(q, j, A.handle); q.removeAttribute(f.expando) } if ("script" === l && q.text !== d.text) Ca(q).text = d.text, V(q); else if ("object" === l) q.parentNode && (q.outerHTML = d.outerHTML), v.html5Clone && (d.innerHTML && !f.trim(q.innerHTML)) && (q.innerHTML = d.innerHTML); else if ("input" === l && Mb.test(d.type)) q.defaultChecked = q.checked = d.checked, q.value !== d.value && (q.value = d.value); else if ("option" ===
										l) q.defaultSelected = q.selected = d.defaultSelected; else if ("input" === l || "textarea" === l) q.defaultValue = d.defaultValue
								}
						}
					} if (b) if (c) { r = r || C(a); k = k || C(n); for (e = 0; null != (d = r[e]); e++)Da(d, k[e]) } else Da(a, n); k = C(n, "script"); 0 < k.length && O(k, !h && C(a, "script")); return n
				}, buildFragment: function (a, b, c, k) {
					for (var d, n, e, r, h, q, l = a.length, j = U(b), A = [], z = 0; z < l; z++)if ((n = a[z]) || 0 === n) if ("object" === f.type(n)) f.merge(A, n.nodeType ? [n] : n); else if (Ad.test(n)) {
						e = e || j.appendChild(b.createElement("div")); r = (Fc.exec(n) || ["", ""])[1].toLowerCase();
						q = ja[r] || ja._default; e.innerHTML = q[1] + n.replace(Ec, "<$1></$2>") + q[2]; for (d = q[0]; d--;)e = e.lastChild; !v.leadingWhitespace && $b.test(n) && A.push(b.createTextNode($b.exec(n)[0])); if (!v.tbody) for (d = (n = "table" === r && !Gc.test(n) ? e.firstChild : "<table>" === q[1] && !Gc.test(n) ? e : 0) && n.childNodes.length; d--;)f.nodeName(h = n.childNodes[d], "tbody") && !h.childNodes.length && n.removeChild(h); f.merge(A, e.childNodes); for (e.textContent = ""; e.firstChild;)e.removeChild(e.firstChild); e = j.lastChild
					} else A.push(b.createTextNode(n));
					e && j.removeChild(e); v.appendChecked || f.grep(C(A, "input"), rb); for (z = 0; n = A[z++];)if (!(k && -1 !== f.inArray(n, k)) && (a = f.contains(n.ownerDocument, n), e = C(j.appendChild(n), "script"), a && O(e), c)) for (d = 0; n = e[d++];)Hc.test(n.type || "") && c.push(n); return j
				}, cleanData: function (a, b) {
					for (var c, d, n, e, r = 0, h = f.expando, q = f.cache, l = v.deleteExpando, j = f.event.special; null != (c = a[r]); r++)if (b || f.acceptData(c)) if (e = (n = c[h]) && q[n]) {
						if (e.events) for (d in e.events) j[d] ? f.event.remove(c, d) : f.removeEvent(c, d, e.handle); q[n] && (delete q[n],
							l ? delete c[h] : typeof c.removeAttribute !== ka ? c.removeAttribute(h) : c[h] = null, k.push(n))
					}
				}
			}); f.fn.extend({
				text: function (a) { return Ua(this, function (a) { return void 0 === a ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && Ya(this, a).appendChild(a) }) }, prepend: function () {
					return this.domManip(arguments, function (a) {
						if (1 === this.nodeType ||
							11 === this.nodeType || 9 === this.nodeType) { var b = Ya(this, a); b.insertBefore(a, b.firstChild) }
					})
				}, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) {
					for (var c, k = a ? f.filter(a, this) : this, d = 0; null != (c = k[d]); d++)!b && 1 === c.nodeType && f.cleanData(C(c)), c.parentNode && (b && f.contains(c.ownerDocument,
						c) && O(C(c, "script")), c.parentNode.removeChild(c)); return this
				}, empty: function () { for (var a, b = 0; null != (a = this[b]); b++) { for (1 === a.nodeType && f.cleanData(C(a, !1)); a.firstChild;)a.removeChild(a.firstChild); a.options && f.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function (a, b) { a = null == a ? !1 : a; b = null == b ? a : b; return this.map(function () { return f.clone(this, a, b) }) }, html: function (a) {
					return Ua(this, function (a) {
						var g = this[0] || {}, b = 0, c = this.length; if (void 0 === a) return 1 === g.nodeType ? g.innerHTML.replace(zd,
							"") : void 0; if ("string" === typeof a && !Bd.test(a) && (v.htmlSerialize || !Dc.test(a)) && (v.leadingWhitespace || !$b.test(a)) && !ja[(Fc.exec(a) || ["", ""])[1].toLowerCase()]) { a = a.replace(Ec, "<$1></$2>"); try { for (; b < c; b++)g = this[b] || {}, 1 === g.nodeType && (f.cleanData(C(g, !1)), g.innerHTML = a); g = 0 } catch (k) { } } g && this.empty().append(a)
					}, null, a, arguments.length)
				}, replaceWith: function () {
					var a = arguments[0]; this.domManip(arguments, function (b) { a = this.parentNode; f.cleanData(C(this)); a && a.replaceChild(b, this) }); return a && (a.length ||
						a.nodeType) ? this : this.remove()
				}, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) {
					a = r.apply([], a); var c, k, d, n, e = 0, h = this.length, q = this, l = h - 1, j = a[0], A = f.isFunction(j); if (A || 1 < h && "string" === typeof j && !v.checkClone && Cd.test(j)) return this.each(function (c) { var f = q.eq(c); A && (a[0] = j.call(this, c, f.html())); f.domManip(a, b) }); if (h && (n = f.buildFragment(a, this[0].ownerDocument, !1, this), c = n.firstChild, 1 === n.childNodes.length && (n = c), c)) {
						d = f.map(C(n, "script"), Ca); for (k = d.length; e < h; e++)c = n, e !==
							l && (c = f.clone(c, !0, !0), k && f.merge(d, C(c, "script"))), b.call(this[e], c, e); if (k) { n = d[d.length - 1].ownerDocument; f.map(d, V); for (e = 0; e < k; e++)if (c = d[e], Hc.test(c.type || "") && !f._data(c, "globalEval") && f.contains(n, c)) c.src ? f._evalUrl && f._evalUrl(c.src) : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(Dd, "")) } n = c = null
					} return this
				}
			}); f.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
				f.fn[a] = function (a) {
					for (var g = 0, c = [],
						k = f(a), d = k.length - 1; g <= d; g++)a = g === d ? this : this.clone(!0), f(k[g])[b](a), z.apply(c, a.get()); return this.pushStack(c)
				}
			}); var eb, nc = {}, ob, Cb, ab = y.createElement("div"); ab.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; ob = ab.getElementsByTagName("a")[0]; ob.style.cssText = "float:left;opacity:.5"; v.opacity = /^0.5/.test(ob.style.opacity); v.cssFloat = !!ob.style.cssFloat; ab.style.backgroundClip = "content-box"; ab.cloneNode(!0).style.backgroundClip = ""; v.clearCloneStyle = "content-box" ===
				ab.style.backgroundClip; ob = ab = null; v.shrinkWrapBlocks = function () {
					var a, b, c; if (null == Cb) {
						a = y.getElementsByTagName("body")[0]; if (!a) return; b = y.createElement("div"); c = y.createElement("div"); a.appendChild(b).appendChild(c); Cb = !1; typeof c.style.zoom !== ka && (c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", Cb = 3 !== c.offsetWidth);
						a.removeChild(b)
					} return Cb
				}; var Ic = /^margin/, sb = RegExp("^(" + zb + ")(?!px)[a-z%]+$", "i"), Pa, Qa, Ed = /^(top|right|bottom|left)$/; a.getComputedStyle ? (Pa = function (a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Qa = function (a, b, c) {
					var k, d, n = a.style; d = (c = c || Pa(a)) ? c.getPropertyValue(b) || c[b] : void 0; c && ("" === d && !f.contains(a.ownerDocument, a) && (d = f.style(a, b)), sb.test(d) && Ic.test(b) && (a = n.width, b = n.minWidth, k = n.maxWidth, n.minWidth = n.maxWidth = n.width = d, d = c.width, n.width = a, n.minWidth = b, n.maxWidth =
						k)); return void 0 === d ? d : d + ""
				}) : y.documentElement.currentStyle && (Pa = function (a) { return a.currentStyle }, Qa = function (a, b, c) { var f, k, d, n = a.style; d = (c = c || Pa(a)) ? c[b] : void 0; null == d && (n && n[b]) && (d = n[b]); if (sb.test(d) && !Ed.test(b)) { c = n.left; if (k = (f = a.runtimeStyle) && f.left) f.left = a.currentStyle.left; n.left = "fontSize" === b ? "1em" : d; d = n.pixelLeft + "px"; n.left = c; k && (f.left = k) } return void 0 === d ? d : d + "" || "auto" }); var dc = function () {
					var g, b, c = y.getElementsByTagName("body")[0]; c && (g = y.createElement("div"), b = y.createElement("div"),
						g.style.cssText = bc, c.appendChild(g).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", f.swap(c, null != c.style.zoom ? { zoom: 1 } : {}, function () { cc = 4 === b.offsetWidth }), Db = !0, Eb = !1, Fb = !0, a.getComputedStyle && (Eb = "1%" !== (a.getComputedStyle(b, null) || {}).top, Db = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width), c.removeChild(g), b = c = null)
				}, pb, Gb, cc, Db, Eb, Fb,
					bb = y.createElement("div"), bc = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px"; bb.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; pb = bb.getElementsByTagName("a")[0]; pb.style.cssText = "float:left;opacity:.5"; v.opacity = /^0.5/.test(pb.style.opacity); v.cssFloat = !!pb.style.cssFloat; bb.style.backgroundClip = "content-box"; bb.cloneNode(!0).style.backgroundClip = ""; v.clearCloneStyle = "content-box" === bb.style.backgroundClip; pb = bb = null; f.extend(v, {
						reliableHiddenOffsets: function () {
							if (null !=
								Gb) return Gb; var a, b, c; b = y.createElement("div"); var f = y.getElementsByTagName("body")[0]; if (f) return b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = y.createElement("div"), a.style.cssText = bc, f.appendChild(a).appendChild(b), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = b.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display =
									"none", Gb = c && 0 === b[0].offsetHeight, f.removeChild(a), Gb
						}, boxSizing: function () { null == cc && dc(); return cc }, boxSizingReliable: function () { null == Db && dc(); return Db }, pixelPosition: function () { null == Eb && dc(); return Eb }, reliableMarginRight: function () {
							var g, b, c, f; if (null == Fb && a.getComputedStyle) {
								g = y.getElementsByTagName("body")[0]; if (!g) return; b = y.createElement("div"); c = y.createElement("div"); b.style.cssText = bc; g.appendChild(b).appendChild(c); f = c.appendChild(y.createElement("div")); f.style.cssText = c.style.cssText =
									"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"; f.style.marginRight = f.style.width = "0"; c.style.width = "1px"; Fb = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight); g.removeChild(b)
							} return Fb
						}
					}); f.swap = function (a, b, c, f) { var k, d = {}; for (k in b) d[k] = a.style[k], a.style[k] = b[k]; c = c.apply(a, f || []); for (k in b) a.style[k] = d[k]; return c }; var ec = /alpha\([^)]*\)/i, Fd = /opacity\s*=\s*([^)]*)/, Gd = /^(none|table(?!-c[ea]).+)/, Zc = RegExp("^(" +
						zb + ")(.*)$", "i"), Hd = RegExp("^([+-])=(" + zb + ")", "i"), Id = { position: "absolute", visibility: "hidden", display: "block" }, Jc = { letterSpacing: 0, fontWeight: 400 }, oc = ["Webkit", "O", "Moz", "ms"]; f.extend({
							cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Qa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": v.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, k) {
								if (a && !(3 === a.nodeType ||
									8 === a.nodeType || !a.style)) {
										var d, n, e, r = f.camelCase(b), h = a.style; b = f.cssProps[r] || (f.cssProps[r] = gb(h, r)); e = f.cssHooks[b] || f.cssHooks[r]; if (void 0 !== c) { n = typeof c; if ("string" === n && (d = Hd.exec(c))) c = (d[1] + 1) * d[2] + parseFloat(f.css(a, b)), n = "number"; if (!(null == c || c !== c)) if ("number" === n && !f.cssNumber[r] && (c += "px"), !v.clearCloneStyle && ("" === c && 0 === b.indexOf("background")) && (h[b] = "inherit"), !e || !("set" in e) || void 0 !== (c = e.set(a, c, k))) try { h[b] = "", h[b] = c } catch (q) { } } else return e && "get" in e && void 0 !== (d = e.get(a,
											!1, k)) ? d : h[b]
								}
							}, css: function (a, b, c, k) { var d, n; n = f.camelCase(b); b = f.cssProps[n] || (f.cssProps[n] = gb(a.style, n)); (n = f.cssHooks[b] || f.cssHooks[n]) && "get" in n && (d = n.get(a, !0, c)); void 0 === d && (d = Qa(a, b, k)); "normal" === d && b in Jc && (d = Jc[b]); return "" === c || c ? (a = parseFloat(d), !0 === c || f.isNumeric(a) ? a || 0 : d) : d }
						}); f.each(["height", "width"], function (a, b) {
							f.cssHooks[b] = {
								get: function (a, g, c) { if (g) return 0 === a.offsetWidth && Gd.test(f.css(a, "display")) ? f.swap(a, Id, function () { return W(a, b, c) }) : W(a, b, c) }, set: function (a,
									g, c) { var k = c && Pa(a); return la(a, g, c ? x(a, b, c, v.boxSizing() && "border-box" === f.css(a, "boxSizing", !1, k), k) : 0) }
							}
						}); v.opacity || (f.cssHooks.opacity = {
							get: function (a, b) { return Fd.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function (a, b) {
								var c = a.style, k = a.currentStyle, d = f.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", n = k && k.filter || c.filter || ""; c.zoom = 1; if ((1 <= b || "" === b) && "" === f.trim(n.replace(ec, "")) && c.removeAttribute) if (c.removeAttribute("filter"),
									"" === b || k && !k.filter) return; c.filter = ec.test(n) ? n.replace(ec, d) : n + " " + d
							}
						}); f.cssHooks.marginRight = fb(v.reliableMarginRight, function (a, b) { if (b) return f.swap(a, { display: "inline-block" }, Qa, [a, "marginRight"]) }); f.each({ margin: "", padding: "", border: "Width" }, function (a, b) { f.cssHooks[a + b] = { expand: function (c) { var f = 0, k = {}; for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > f; f++)k[a + Oa[f] + b] = c[f] || c[f - 2] || c[0]; return k } }; Ic.test(a) || (f.cssHooks[a + b].set = la) }); f.fn.extend({
							css: function (a, b) {
								return Ua(this, function (a,
									b, g) { var c, k = {}, d = 0; if (f.isArray(b)) { g = Pa(a); for (c = b.length; d < c; d++)k[b[d]] = f.css(a, b[d], !1, g); return k } return void 0 !== g ? f.style(a, b, g) : f.css(a, b) }, a, b, 1 < arguments.length)
							}, show: function () { return ta(this, !0) }, hide: function () { return ta(this) }, toggle: function (a) { return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function () { hb(this) ? f(this).show() : f(this).hide() }) }
						}); f.Tween = H; H.prototype = {
							constructor: H, init: function (a, b, c, k, d, n) {
								this.elem = a; this.prop = c; this.easing = d || "swing"; this.options =
									b; this.start = this.now = this.cur(); this.end = k; this.unit = n || (f.cssNumber[c] ? "" : "px")
							}, cur: function () { var a = H.propHooks[this.prop]; return a && a.get ? a.get(this) : H.propHooks._default.get(this) }, run: function (a) {
								var b, c = H.propHooks[this.prop]; this.pos = this.options.duration ? b = f.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a; this.now = (this.end - this.start) * b + this.start; this.options.step && this.options.step.call(this.elem, this.now, this); c && c.set ? c.set(this) : H.propHooks._default.set(this);
								return this
							}
						}; H.prototype.init.prototype = H.prototype; H.propHooks = { _default: { get: function (a) { if (null != a.elem[a.prop] && (!a.elem.style || null == a.elem.style[a.prop])) return a.elem[a.prop]; a = f.css(a.elem, a.prop, ""); return !a || "auto" === a ? 0 : a }, set: function (a) { if (f.fx.step[a.prop]) f.fx.step[a.prop](a); else a.elem.style && (null != a.elem.style[f.cssProps[a.prop]] || f.cssHooks[a.prop]) ? f.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }; H.propHooks.scrollTop = H.propHooks.scrollLeft = {
							set: function (a) {
								a.elem.nodeType &&
								a.elem.parentNode && (a.elem[a.prop] = a.now)
							}
						}; f.easing = { linear: function (a) { return a }, swing: function (a) { return 0.5 - Math.cos(a * Math.PI) / 2 } }; f.fx = H.prototype.init; f.fx.step = {}; var Za, Hb, Jd = /^(?:toggle|show|hide)$/, Kc = RegExp("^(?:([+-])=|)(" + zb + ")([a-z%]*)$", "i"), Kd = /queueHooks$/, tb = [function (a, b, c) {
							var k, d, n, e, r, h, q = this, j = {}, l = a.style, A = a.nodeType && hb(a), z = f._data(a, "fxshow"); c.queue || (e = f._queueHooks(a, "fx"), null == e.unqueued && (e.unqueued = 0, r = e.empty.fire, e.empty.fire = function () { e.unqueued || r() }), e.unqueued++,
								q.always(function () { q.always(function () { e.unqueued--; f.queue(a, "fx").length || e.empty.fire() }) })); if (1 === a.nodeType && ("height" in b || "width" in b)) c.overflow = [l.overflow, l.overflowX, l.overflowY], d = f.css(a, "display"), h = db(a.nodeName), "none" === d && (d = h), "inline" === d && "none" === f.css(a, "float") && (!v.inlineBlockNeedsLayout || "inline" === h ? l.display = "inline-block" : l.zoom = 1); c.overflow && (l.overflow = "hidden", v.shrinkWrapBlocks() || q.always(function () {
									l.overflow = c.overflow[0]; l.overflowX = c.overflow[1]; l.overflowY =
										c.overflow[2]
								})); for (k in b) if (d = b[k], Jd.exec(d)) { delete b[k]; n = n || "toggle" === d; if (d === (A ? "hide" : "show")) if ("show" === d && z && void 0 !== z[k]) A = !0; else continue; j[k] = z && z[k] || f.style(a, k) } if (!f.isEmptyObject(j)) for (k in z ? "hidden" in z && (A = z.hidden) : z = f._data(a, "fxshow", {}), n && (z.hidden = !A), A ? f(a).show() : q.done(function () { f(a).hide() }), q.done(function () { var b; f._removeData(a, "fxshow"); for (b in j) f.style(a, b, j[b]) }), j) b = ua(A ? z[k] : 0, k, q), k in z || (z[k] = b.start, A && (b.end = b.start, b.start = "width" === k || "height" ===
									k ? 1 : 0))
						}], ib = { "*": [function (a, b) { var c = this.createTween(a, b), k = c.cur(), d = Kc.exec(b), n = d && d[3] || (f.cssNumber[a] ? "" : "px"), e = (f.cssNumber[a] || "px" !== n && +k) && Kc.exec(f.css(c.elem, a)), r = 1, h = 20; if (e && e[3] !== n) { n = n || e[3]; d = d || []; e = +k || 1; do r = r || ".5", e /= r, f.style(c.elem, a, e + n); while (r !== (r = c.cur() / k) && 1 !== r && --h) } d && (e = c.start = +e || +k || 0, c.unit = n, c.end = d[1] ? e + (d[1] + 1) * d[2] : +d[2]); return c }] }; f.Animation = f.extend(jb, {
							tweener: function (a, b) {
								f.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, k = 0, d = a.length; k <
									d; k++)c = a[k], ib[c] = ib[c] || [], ib[c].unshift(b)
							}, prefilter: function (a, b) { b ? tb.unshift(a) : tb.push(a) }
						}); f.speed = function (a, b, c) {
							var k = a && "object" === typeof a ? f.extend({}, a) : { complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b }; k.duration = f.fx.off ? 0 : "number" === typeof k.duration ? k.duration : k.duration in f.fx.speeds ? f.fx.speeds[k.duration] : f.fx.speeds._default; if (null == k.queue || !0 === k.queue) k.queue = "fx"; k.old = k.complete; k.complete = function () {
								f.isFunction(k.old) && k.old.call(this);
								k.queue && f.dequeue(this, k.queue)
							}; return k
						}; f.fn.extend({
							fadeTo: function (a, b, c, k) { return this.filter(hb).css("opacity", 0).show().end().animate({ opacity: b }, a, c, k) }, animate: function (a, b, c, k) { var d = f.isEmptyObject(a), n = f.speed(b, c, k); b = function () { var b = jb(this, f.extend({}, a), n); (d || f._data(this, "finish")) && b.stop(!0) }; b.finish = b; return d || !1 === n.queue ? this.each(b) : this.queue(n.queue, b) }, stop: function (a, b, c) {
								var k = function (a) { var b = a.stop; delete a.stop; b(c) }; "string" !== typeof a && (c = b, b = a, a = void 0); b &&
									!1 !== a && this.queue(a || "fx", []); return this.each(function () { var b = !0, d = null != a && a + "queueHooks", n = f.timers, e = f._data(this); if (d) e[d] && e[d].stop && k(e[d]); else for (d in e) e[d] && (e[d].stop && Kd.test(d)) && k(e[d]); for (d = n.length; d--;)if (n[d].elem === this && (null == a || n[d].queue === a)) n[d].anim.stop(c), b = !1, n.splice(d, 1); (b || !c) && f.dequeue(this, a) })
							}, finish: function (a) {
								!1 !== a && (a = a || "fx"); return this.each(function () {
									var b, c = f._data(this), k = c[a + "queue"]; b = c[a + "queueHooks"]; var d = f.timers, n = k ? k.length : 0; c.finish =
										!0; f.queue(this, a, []); b && b.stop && b.stop.call(this, !0); for (b = d.length; b--;)d[b].elem === this && d[b].queue === a && (d[b].anim.stop(!0), d.splice(b, 1)); for (b = 0; b < n; b++)k[b] && k[b].finish && k[b].finish.call(this); delete c.finish
								})
							}
						}); f.each(["toggle", "show", "hide"], function (a, b) { var c = f.fn[b]; f.fn[b] = function (a, g, k) { return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(L(b, !0), a, g, k) } }); f.each({
							slideDown: L("show"), slideUp: L("hide"), slideToggle: L("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" },
							fadeToggle: { opacity: "toggle" }
						}, function (a, b) { f.fn[a] = function (a, g, c) { return this.animate(b, a, g, c) } }); f.timers = []; f.fx.tick = function () { var a, b = f.timers, c = 0; for (Za = f.now(); c < b.length; c++)a = b[c], !a() && b[c] === a && b.splice(c--, 1); b.length || f.fx.stop(); Za = void 0 }; f.fx.timer = function (a) { f.timers.push(a); a() ? f.fx.start() : f.timers.pop() }; f.fx.interval = 13; f.fx.start = function () { Hb || (Hb = setInterval(f.fx.tick, f.fx.interval)) }; f.fx.stop = function () { clearInterval(Hb); Hb = null }; f.fx.speeds = { slow: 600, fast: 200, _default: 400 };
	f.fn.delay = function (a, b) { a = f.fx ? f.fx.speeds[a] || a : a; return this.queue(b || "fx", function (b, c) { var k = setTimeout(b, a); c.stop = function () { clearTimeout(k) } }) }; var Ib, Ka, fc, gc, qb = y.createElement("div"); qb.setAttribute("className", "t"); qb.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; Ib = qb.getElementsByTagName("a")[0]; fc = y.createElement("select"); gc = fc.appendChild(y.createElement("option")); Ka = qb.getElementsByTagName("input")[0]; Ib.style.cssText = "top:1px"; v.getSetAttribute =
		"t" !== qb.className; v.style = /top/.test(Ib.getAttribute("style")); v.hrefNormalized = "/a" === Ib.getAttribute("href"); v.checkOn = !!Ka.value; v.optSelected = gc.selected; v.enctype = !!y.createElement("form").enctype; fc.disabled = !0; v.optDisabled = !gc.disabled; Ka = y.createElement("input"); Ka.setAttribute("value", ""); v.input = "" === Ka.getAttribute("value"); Ka.value = "t"; Ka.setAttribute("type", "radio"); v.radioValue = "t" === Ka.value; var Ld = /\r/g; f.fn.extend({
			val: function (a) {
				var b, c, k, d = this[0]; if (arguments.length) return k =
					f.isFunction(a), this.each(function (c) { if (1 === this.nodeType && (c = k ? a.call(this, c, f(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : f.isArray(c) && (c = f.map(c, function (a) { return null == a ? "" : a + "" })), b = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], !b || !("set" in b) || void 0 === b.set(this, c, "value"))) this.value = c }); if (d) {
						if ((b = f.valHooks[d.type] || f.valHooks[d.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(d, "value"))) return c; c = d.value; return "string" === typeof c ? c.replace(Ld, "") :
							null == c ? "" : c
					}
			}
		}); f.extend({
			valHooks: {
				option: { get: function (a) { var b = f.find.attr(a, "value"); return null != b ? b : f.text(a) } }, select: {
					get: function (a) { for (var b, c = a.options, k = a.selectedIndex, d = (a = "select-one" === a.type || 0 > k) ? null : [], n = a ? k + 1 : c.length, e = 0 > k ? n : a ? k : 0; e < n; e++)if (b = c[e], (b.selected || e === k) && (v.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !f.nodeName(b.parentNode, "optgroup"))) { b = f(b).val(); if (a) return b; d.push(b) } return d }, set: function (a, b) {
						for (var c, k, d = a.options,
							n = f.makeArray(b), e = d.length; e--;)if (k = d[e], 0 <= f.inArray(f.valHooks.option.get(k), n)) try { k.selected = c = !0 } catch (r) { k.scrollHeight } else k.selected = !1; c || (a.selectedIndex = -1); return d
					}
				}
			}
		}); f.each(["radio", "checkbox"], function () { f.valHooks[this] = { set: function (a, b) { if (f.isArray(b)) return a.checked = 0 <= f.inArray(f(a).val(), b) } }; v.checkOn || (f.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var cb, Lc, La = f.expr.attrHandle, hc = /^(?:checked|selected)$/i, Va = v.getSetAttribute,
			Jb = v.input; f.fn.extend({ attr: function (a, b) { return Ua(this, f.attr, a, b, 1 < arguments.length) }, removeAttr: function (a) { return this.each(function () { f.removeAttr(this, a) }) } }); f.extend({
				attr: function (a, b, c) {
					var k, d, n = a.nodeType; if (a && !(3 === n || 8 === n || 2 === n)) {
						if (typeof a.getAttribute === ka) return f.prop(a, b, c); if (1 !== n || !f.isXMLDoc(a)) b = b.toLowerCase(), k = f.attrHooks[b] || (f.expr.match.bool.test(b) ? Lc : cb); if (void 0 !== c) if (null === c) f.removeAttr(a, b); else {
							if (k && "set" in k && void 0 !== (d = k.set(a, c, b))) return d; a.setAttribute(b,
								c + ""); return c
						} else { if (k && "get" in k && null !== (d = k.get(a, b))) return d; d = f.find.attr(a, b); return null == d ? void 0 : d }
					}
				}, removeAttr: function (a, b) { var c, k, d = 0, n = b && b.match(va); if (n && 1 === a.nodeType) for (; c = n[d++];)k = f.propFix[c] || c, f.expr.match.bool.test(c) ? Jb && Va || !hc.test(c) ? a[k] = !1 : a[f.camelCase("default-" + c)] = a[k] = !1 : f.attr(a, c, ""), a.removeAttribute(Va ? c : k) }, attrHooks: { type: { set: function (a, b) { if (!v.radioValue && "radio" === b && f.nodeName(a, "input")) { var c = a.value; a.setAttribute("type", b); c && (a.value = c); return b } } } }
			});
	Lc = { set: function (a, b, c) { !1 === b ? f.removeAttr(a, c) : Jb && Va || !hc.test(c) ? a.setAttribute(!Va && f.propFix[c] || c, c) : a[f.camelCase("default-" + c)] = a[c] = !0; return c } }; f.each(f.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = La[b] || f.find.attr; La[b] = Jb && Va || !hc.test(b) ? function (a, b, g) { var k, f; g || (f = La[b], La[b] = k, k = null != c(a, b, g) ? b.toLowerCase() : null, La[b] = f); return k } : function (a, b, g) { if (!g) return a[f.camelCase("default-" + b)] ? b.toLowerCase() : null } }); if (!Jb || !Va) f.attrHooks.value = {
		set: function (a, b, c) {
			if (f.nodeName(a,
				"input")) a.defaultValue = b; else return cb && cb.set(a, b, c)
		}
	}; Va || (cb = { set: function (a, b, c) { var k = a.getAttributeNode(c); k || a.setAttributeNode(k = a.ownerDocument.createAttribute(c)); k.value = b += ""; if ("value" === c || b === a.getAttribute(c)) return b } }, La.id = La.name = La.coords = function (a, b, c) { var k; if (!c) return (k = a.getAttributeNode(b)) && "" !== k.value ? k.value : null }, f.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); if (c && c.specified) return c.value }, set: cb.set }, f.attrHooks.contenteditable = {
		set: function (a,
			b, c) { cb.set(a, "" === b ? !1 : b, c) }
	}, f.each(["width", "height"], function (a, b) { f.attrHooks[b] = { set: function (a, g) { if ("" === g) return a.setAttribute(b, "auto"), g } } })); v.style || (f.attrHooks.style = { get: function (a) { return a.style.cssText || void 0 }, set: function (a, b) { return a.style.cssText = b + "" } }); var Md = /^(?:input|select|textarea|button|object)$/i, Nd = /^(?:a|area)$/i; f.fn.extend({
		prop: function (a, b) { return Ua(this, f.prop, a, b, 1 < arguments.length) }, removeProp: function (a) {
			a = f.propFix[a] || a; return this.each(function () {
				try {
					this[a] =
					void 0, delete this[a]
				} catch (b) { }
			})
		}
	}); f.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var k, d, n; n = a.nodeType; if (a && !(3 === n || 8 === n || 2 === n)) { if (n = 1 !== n || !f.isXMLDoc(a)) b = f.propFix[b] || b, d = f.propHooks[b]; return void 0 !== c ? d && "set" in d && void 0 !== (k = d.set(a, c, b)) ? k : a[b] = c : d && "get" in d && null !== (k = d.get(a, b)) ? k : a[b] } }, propHooks: { tabIndex: { get: function (a) { var b = f.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : Md.test(a.nodeName) || Nd.test(a.nodeName) && a.href ? 0 : -1 } } } }); v.hrefNormalized ||
		f.each(["href", "src"], function (a, b) { f.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4) } } }); v.optSelected || (f.propHooks.selected = { get: function (a) { if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex; return null } }); f.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () { f.propFix[this.toLowerCase()] = this }); v.enctype || (f.propFix.enctype = "encoding"); var ic = /[\t\r\n\f]/g; f.fn.extend({
			addClass: function (a) {
				var b,
				c, k, d, n, e = 0, r = this.length; b = "string" === typeof a && a; if (f.isFunction(a)) return this.each(function (b) { f(this).addClass(a.call(this, b, this.className)) }); if (b) for (b = (a || "").match(va) || []; e < r; e++)if (c = this[e], k = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ic, " ") : " ")) { for (n = 0; d = b[n++];)0 > k.indexOf(" " + d + " ") && (k += d + " "); k = f.trim(k); c.className !== k && (c.className = k) } return this
			}, removeClass: function (a) {
				var b, c, k, d, n, e = 0, r = this.length; b = 0 === arguments.length || "string" === typeof a && a; if (f.isFunction(a)) return this.each(function (b) {
					f(this).removeClass(a.call(this,
						b, this.className))
				}); if (b) for (b = (a || "").match(va) || []; e < r; e++)if (c = this[e], k = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ic, " ") : "")) { for (n = 0; d = b[n++];)for (; 0 <= k.indexOf(" " + d + " ");)k = k.replace(" " + d + " ", " "); k = a ? f.trim(k) : ""; c.className !== k && (c.className = k) } return this
			}, toggleClass: function (a, b) {
				var c = typeof a; return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : f.isFunction(a) ? this.each(function (c) { f(this).toggleClass(a.call(this, c, this.className, b), b) }) :
					this.each(function () { if ("string" === c) for (var b, k = 0, d = f(this), n = a.match(va) || []; b = n[k++];)d.hasClass(b) ? d.removeClass(b) : d.addClass(b); else if (c === ka || "boolean" === c) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : f._data(this, "__className__") || "" })
			}, hasClass: function (a) { a = " " + a + " "; for (var b = 0, c = this.length; b < c; b++)if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(ic, " ").indexOf(a)) return !0; return !1 }
		}); f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
			function (a, b) { f.fn[b] = function (a, c) { return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b) } }); f.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, k) { return this.on(b, a, c, k) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var jc = f.now(), kc = /\?/, Od = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	f.parseJSON = function (b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, k = null, d = f.trim(b + ""); return d && !f.trim(d.replace(Od, function (a, b, g, f) { c && b && (k = 0); if (0 === k) return a; c = g || b; k += !f - !g; return "" })) ? Function("return " + d)() : f.error("Invalid JSON: " + b) }; f.parseXML = function (b) {
		var c, k; if (!b || "string" !== typeof b) return null; try { a.DOMParser ? (k = new DOMParser, c = k.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (d) { c = void 0 } (!c || !c.documentElement ||
			c.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + b); return c
	}; var Wa, Ma, Pd = /#.*$/, Mc = /([?&])_=[^&]*/, Qd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Rd = /^(?:GET|HEAD)$/, Sd = /^\/\//, Nc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Oc = {}, Nb = {}, Pc = "*/".concat("*"); try { Ma = location.href } catch (be) { Ma = y.createElement("a"), Ma.href = "", Ma = Ma.href } Wa = Nc.exec(Ma.toLowerCase()) || []; f.extend({
		active: 0, lastModified: {}, etag: {}, ajaxSettings: {
			url: Ma, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Wa[1]),
			global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Pc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML }, flatOptions: { url: !0, context: !0 }
		}, ajaxSetup: function (a, b) {
			return b ? wa(wa(a,
				f.ajaxSettings), b) : wa(f.ajaxSettings, a)
		}, ajaxPrefilter: kb(Oc), ajaxTransport: kb(Nb), ajax: function (a, b) {
			function c(a, b, g, k) {
				var d, l, p, m; m = b; if (2 !== fa) {
					fa = 2; r && clearTimeout(r); q = void 0; e = k || ""; s.readyState = 0 < a ? 4 : 0; k = 200 <= a && 300 > a || 304 === a; if (g) {
						p = j; for (var M = s, S, w, E, C, U = p.contents, N = p.dataTypes; "*" === N[0];)N.shift(), void 0 === w && (w = p.mimeType || M.getResponseHeader("Content-Type")); if (w) for (C in U) if (U[C] && U[C].test(w)) { N.unshift(C); break } if (N[0] in g) E = N[0]; else {
							for (C in g) {
								if (!N[0] || p.converters[C + " " +
									N[0]]) { E = C; break } S || (S = C)
							} E = E || S
						} E ? (E !== N[0] && N.unshift(E), p = g[E]) : p = void 0
					} a: {
						g = j; S = p; w = s; E = k; var v, aa, u, M = {}, U = g.dataTypes.slice(); if (U[1]) for (aa in g.converters) M[aa.toLowerCase()] = g.converters[aa]; for (C = U.shift(); C;)if (g.responseFields[C] && (w[g.responseFields[C]] = S), !u && (E && g.dataFilter) && (S = g.dataFilter(S, g.dataType)), u = C, C = U.shift()) if ("*" === C) C = u; else if ("*" !== u && u !== C) {
							aa = M[u + " " + C] || M["* " + C]; if (!aa) for (v in M) if (p = v.split(" "), p[1] === C && (aa = M[u + " " + p[0]] || M["* " + p[0]])) {
								!0 === aa ? aa = M[v] :
								!0 !== M[v] && (C = p[0], U.unshift(p[1])); break
							} if (!0 !== aa) if (aa && g["throws"]) S = aa(S); else try { S = aa(S) } catch (Xa) { p = { state: "parsererror", error: aa ? Xa : "No conversion from " + u + " to " + C }; break a }
						} p = { state: "success", data: S }
					} if (k) j.ifModified && ((m = s.getResponseHeader("Last-Modified")) && (f.lastModified[n] = m), (m = s.getResponseHeader("etag")) && (f.etag[n] = m)), 204 === a || "HEAD" === j.type ? m = "nocontent" : 304 === a ? m = "notmodified" : (m = p.state, d = p.data, l = p.error, k = !l); else if (l = m, a || !m) m = "error", 0 > a && (a = 0); s.status = a; s.statusText =
						(b || m) + ""; k ? T.resolveWith(A, [d, m, s]) : T.rejectWith(A, [s, m, l]); s.statusCode(K); K = void 0; h && z.trigger(k ? "ajaxSuccess" : "ajaxError", [s, j, k ? d : l]); t.fireWith(A, [s, m]); h && (z.trigger("ajaxComplete", [s, j]), --f.active || f.event.trigger("ajaxStop"))
				}
			} "object" === typeof a && (b = a, a = void 0); b = b || {}; var k, d, n, e, r, h, q, l, j = f.ajaxSetup({}, b), A = j.context || j, z = j.context && (A.nodeType || A.jquery) ? f(A) : f.event, T = f.Deferred(), t = f.Callbacks("once memory"), K = j.statusCode || {}, m = {}, M = {}, fa = 0, S = "canceled", s = {
				readyState: 0, getResponseHeader: function (a) {
					var b;
					if (2 === fa) { if (!l) for (l = {}; b = Qd.exec(e);)l[b[1].toLowerCase()] = b[2]; b = l[a.toLowerCase()] } return null == b ? null : b
				}, getAllResponseHeaders: function () { return 2 === fa ? e : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); fa || (a = M[c] = M[c] || a, m[a] = b); return this }, overrideMimeType: function (a) { fa || (j.mimeType = a); return this }, statusCode: function (a) { var b; if (a) if (2 > fa) for (b in a) K[b] = [K[b], a[b]]; else s.always(a[s.status]); return this }, abort: function (a) { a = a || S; q && q.abort(a); c(0, a); return this }
			}; T.promise(s).complete =
				t.add; s.success = s.done; s.error = s.fail; j.url = ((a || j.url || Ma) + "").replace(Pd, "").replace(Sd, Wa[1] + "//"); j.type = b.method || b.type || j.method || j.type; j.dataTypes = f.trim(j.dataType || "*").toLowerCase().match(va) || [""]; null == j.crossDomain && (k = Nc.exec(j.url.toLowerCase()), j.crossDomain = !(!k || !(k[1] !== Wa[1] || k[2] !== Wa[2] || (k[3] || ("http:" === k[1] ? "80" : "443")) !== (Wa[3] || ("http:" === Wa[1] ? "80" : "443"))))); j.data && (j.processData && "string" !== typeof j.data) && (j.data = f.param(j.data, j.traditional)); ub(Oc, j, b, s); if (2 ===
					fa) return s; (h = j.global) && 0 === f.active++ && f.event.trigger("ajaxStart"); j.type = j.type.toUpperCase(); j.hasContent = !Rd.test(j.type); n = j.url; j.hasContent || (j.data && (n = j.url += (kc.test(n) ? "&" : "?") + j.data, delete j.data), !1 === j.cache && (j.url = Mc.test(n) ? n.replace(Mc, "$1_=" + jc++) : n + (kc.test(n) ? "&" : "?") + "_=" + jc++)); j.ifModified && (f.lastModified[n] && s.setRequestHeader("If-Modified-Since", f.lastModified[n]), f.etag[n] && s.setRequestHeader("If-None-Match", f.etag[n])); (j.data && j.hasContent && !1 !== j.contentType || b.contentType) &&
						s.setRequestHeader("Content-Type", j.contentType); s.setRequestHeader("Accept", j.dataTypes[0] && j.accepts[j.dataTypes[0]] ? j.accepts[j.dataTypes[0]] + ("*" !== j.dataTypes[0] ? ", " + Pc + "; q=0.01" : "") : j.accepts["*"]); for (d in j.headers) s.setRequestHeader(d, j.headers[d]); if (j.beforeSend && (!1 === j.beforeSend.call(A, s, j) || 2 === fa)) return s.abort(); S = "abort"; for (d in { success: 1, error: 1, complete: 1 }) s[d](j[d]); if (q = ub(Nb, j, b, s)) {
							s.readyState = 1; h && z.trigger("ajaxSend", [s, j]); j.async && 0 < j.timeout && (r = setTimeout(function () { s.abort("timeout") },
								j.timeout)); try { fa = 1, q.send(m, c) } catch (E) { if (2 > fa) c(-1, E); else throw E; }
						} else c(-1, "No Transport"); return s
		}, getJSON: function (a, b, c) { return f.get(a, b, c, "json") }, getScript: function (a, b) { return f.get(a, void 0, b, "script") }
	}); f.each(["get", "post"], function (a, b) { f[b] = function (a, c, g, k) { f.isFunction(c) && (k = k || g, g = c, c = void 0); return f.ajax({ url: a, type: b, dataType: k, data: c, success: g }) } }); f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
		f.fn[b] = function (a) {
			return this.on(b,
				a)
		}
	}); f._evalUrl = function (a) { return f.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }; f.fn.extend({
		wrapAll: function (a) { if (f.isFunction(a)) return this.each(function (b) { f(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = f(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]); b.map(function () { for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) {
			return f.isFunction(a) ?
				this.each(function (b) { f(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = f(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) })
		}, wrap: function (a) { var b = f.isFunction(a); return this.each(function (c) { f(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { f.nodeName(this, "body") || f(this).replaceWith(this.childNodes) }).end() }
	}); f.expr.filters.hidden = function (a) {
		return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !v.reliableHiddenOffsets() && "none" === (a.style &&
			a.style.display || f.css(a, "display"))
	}; f.expr.filters.visible = function (a) { return !f.expr.filters.hidden(a) }; var Td = /%20/g, ad = /\[\]$/, Qc = /\r?\n/g, Ud = /^(?:submit|button|image|reset|file)$/i, Vd = /^(?:input|select|textarea|keygen)/i; f.param = function (a, b) {
		var c, k = [], d = function (a, b) { b = f.isFunction(b) ? b() : null == b ? "" : b; k[k.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; void 0 === b && (b = f.ajaxSettings && f.ajaxSettings.traditional); if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
			d(this.name,
				this.value)
		}); else for (c in a) ma(c, a[c], b, d); return k.join("&").replace(Td, "+")
	}; f.fn.extend({
		serialize: function () { return f.param(this.serializeArray()) }, serializeArray: function () {
			return this.map(function () { var a = f.prop(this, "elements"); return a ? f.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !f(this).is(":disabled") && Vd.test(this.nodeName) && !Ud.test(a) && (this.checked || !Mb.test(a)) }).map(function (a, b) {
				var c = f(this).val(); return null == c ? null : f.isArray(c) ? f.map(c, function (a) {
					return {
						name: b.name,
						value: a.replace(Qc, "\r\n")
					}
				}) : { name: b.name, value: c.replace(Qc, "\r\n") }
			}).get()
		}
	}); f.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { var b; if (!(b = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X())) a: { try { b = new a.ActiveXObject("Microsoft.XMLHTTP"); break a } catch (c) { } b = void 0 } return b } : X; f.ajaxSettings.xhr = void 0 === a.ActiveXObject ? B : function () {
		return (this.url == y.location || 0 == this.url.indexOf("http") || !this.isLocal) && /^(get|post|head|put|delete|options)$/i.test(this.type) &&
			B() || B(1)
	}; var Wd = 0, Kb = {}, Lb = f.ajaxSettings.xhr(); if (a.ActiveXObject) f(a).on("unload", function () { for (var a in Kb) Kb[a](void 0, !0) }); v.cors = !!Lb && "withCredentials" in Lb; (Lb = v.ajax = !!Lb) && f.ajaxTransport(function (a) {
		if (!a.crossDomain || v.cors) {
			var b; return {
				send: function (c, k) {
					var d, n = a.xhr(), e = ++Wd; console.log("xhr.open async=" + a.async + " url=" + a.url); n.open(a.type, a.url, a.async, a.username, a.password); if (a.xhrFields) for (d in a.xhrFields) n[d] = a.xhrFields[d]; a.mimeType && n.overrideMimeType && n.overrideMimeType(a.mimeType);
					!a.crossDomain && !c["X-Requested-With"] && (c["X-Requested-With"] = "XMLHttpRequest"); for (d in c) void 0 !== c[d] && n.setRequestHeader(d, c[d] + ""); n.send(a.hasContent && a.data || null); b = function (c, d) { var r, j, h; if (b && (d || 4 === n.readyState)) if (delete Kb[e], b = void 0, n.onreadystatechange = f.noop, d) 4 !== n.readyState && n.abort(); else { h = {}; r = n.status; "string" === typeof n.responseText && (h.text = n.responseText); try { j = n.statusText } catch (q) { j = "" } !r && a.isLocal && !a.crossDomain ? r = h.text ? 200 : 404 : 1223 === r && (r = 204) } h && k(r, j, h, n.getAllResponseHeaders()) };
					a.async ? 4 === n.readyState ? setTimeout(b) : n.onreadystatechange = Kb[e] = b : b()
				}, abort: function () { b && b(void 0, !0) }
			}
		}
	}); f.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { f.globalEval(a); return a } } }); f.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1); a.crossDomain && (a.type = "GET", a.global = !1) }); f.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b,
			c = y.head || f("head")[0] || y.documentElement; return { send: function (k, d) { b = y.createElement("script"); b.async = !0; a.scriptCharset && (b.charset = a.scriptCharset); b.src = a.url; b.onload = b.onreadystatechange = function (a, c) { if (c || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || d(200, "success") }; c.insertBefore(b, c.firstChild) }, abort: function () { if (b) b.onload(void 0, !0) } }
		}
	}); var Rc = [], lc = /(=)\?(?=&|$)|\?\?/; f.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () { var a = Rc.pop() || f.expando + "_" + jc++; this[a] = !0; return a }
	}); f.ajaxPrefilter("json jsonp", function (b, c, k) {
		var d, n, e, r = !1 !== b.jsonp && (lc.test(b.url) ? "url" : "string" === typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && lc.test(b.data) && "data"); if (r || "jsonp" === b.dataTypes[0]) return d = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, r ? b[r] = b[r].replace(lc, "$1" + d) : !1 !== b.jsonp && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" +
			d), b.converters["script json"] = function () { e || f.error(d + " was not called"); return e[0] }, b.dataTypes[0] = "json", n = a[d], a[d] = function () { e = arguments }, k.always(function () { a[d] = n; b[d] && (b.jsonpCallback = c.jsonpCallback, Rc.push(d)); e && f.isFunction(n) && n(e[0]); e = n = void 0 }), "script"
	}); f.parseHTML = function (a, b, c) {
		if (!a || "string" !== typeof a) return null; "boolean" === typeof b && (c = b, b = !1); b = b || y; var k = xc.exec(a); c = !c && []; if (k) return [b.createElement(k[1])]; k = f.buildFragment([a], b, c); c && c.length && f(c).remove(); return f.merge([],
			k.childNodes)
	}; var Sc = f.fn.load; f.fn.load = function (a, b, c) { if ("string" !== typeof a && Sc) return Sc.apply(this, arguments); var k, d, n, e = this, r = a.indexOf(" "); 0 <= r && (k = a.slice(r, a.length), a = a.slice(0, r)); f.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (n = "POST"); 0 < e.length && f.ajax({ url: a, type: n, dataType: "html", data: b }).done(function (a) { d = arguments; e.html(k ? f("<div>").append(f.parseHTML(a)).find(k) : a) }).complete(c && function (a, b) { e.each(c, d || [a.responseText, b, a]) }); return this }; f.expr.filters.animated =
		function (a) { return f.grep(f.timers, function (b) { return a === b.elem }).length }; var Tc = a.document.documentElement; f.offset = {
			setOffset: function (a, b, c) {
				var k, d, n, e = f.css(a, "position"), r = f(a), j = {}; "static" === e && (a.style.position = "relative"); n = r.offset(); d = f.css(a, "top"); k = f.css(a, "left"); ("absolute" === e || "fixed" === e) && -1 < f.inArray("auto", [d, k]) ? (k = r.position(), d = k.top, k = k.left) : (d = parseFloat(d) || 0, k = parseFloat(k) || 0); f.isFunction(b) && (b = b.call(a, c, n)); null != b.top && (j.top = b.top - n.top + d); null != b.left && (j.left =
					b.left - n.left + k); "using" in b ? b.using.call(a, j) : r.css(j)
			}
		}; f.fn.extend({
			offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { f.offset.setOffset(this, a, b) }); var b, c, k = { top: 0, left: 0 }, d = (c = this[0]) && c.ownerDocument; if (d) { b = d.documentElement; if (!f.contains(b, c)) return k; typeof c.getBoundingClientRect !== ka && (k = c.getBoundingClientRect()); c = ca(d); return { top: k.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: k.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) } } }, position: function () {
				if (this[0]) {
					var a,
					b, c = { top: 0, left: 0 }, k = this[0]; "fixed" === f.css(k, "position") ? b = k.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), f.nodeName(a[0], "html") || (c = a.offset()), c.top += f.css(a[0], "borderTopWidth", !0), c.left += f.css(a[0], "borderLeftWidth", !0)); return { top: b.top - c.top - f.css(k, "marginTop", !0), left: b.left - c.left - f.css(k, "marginLeft", !0) }
				}
			}, offsetParent: function () {
				return this.map(function () {
					for (var a = this.offsetParent || Tc; a && !f.nodeName(a, "html") && "static" === f.css(a, "position");)a = a.offsetParent; return a ||
						Tc
				})
			}
		}); f.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); f.fn[a] = function (k) { return Ua(this, function (a, k, g) { var d = ca(a); if (void 0 === g) return d ? b in d ? d[b] : d.document.documentElement[k] : a[k]; d ? d.scrollTo(!c ? g : f(d).scrollLeft(), c ? g : f(d).scrollTop()) : a[k] = g }, a, k, arguments.length, null) } }); f.each(["top", "left"], function (a, b) { f.cssHooks[b] = fb(v.pixelPosition, function (a, c) { if (c) return c = Qa(a, b), sb.test(c) ? f(a).position()[b] + "px" : c }) }); f.each({ Height: "height", Width: "width" },
			function (a, b) { f.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, k) { f.fn[k] = function (k, d) { var n = arguments.length && (c || "boolean" !== typeof k), e = c || (!0 === k || !0 === d ? "margin" : "border"); return Ua(this, function (b, c, k) { return f.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === k ? f.css(b, c, e) : f.style(b, c, k, e) }, b, n ? k : void 0, n, null) } }) }); f.fn.size = function () { return this.length };
	f.fn.andSelf = f.fn.addBack; "function" === typeof define && define.amd && define("jquery", [], function () { return f }); var Xd = a.jQuery, Yd = a.$; f.noConflict = function (b) { a.$ === f && (a.$ = Yd); b && a.jQuery === f && (a.jQuery = Xd); return f }; typeof m === ka && (a.jQuery = a.$ = f); return f
});
(function (a) {
	function m(a) { try { return a ? new window.ActiveXObject("Microsoft.XMLHTTP") : new window.XMLHttpRequest } catch (h) { } } a.ajaxSettings.xhr = void 0 === window.ActiveXObject ? m : function () { return (this.url == document.location || 0 == this.url.indexOf("http") || !this.isLocal) && /^(get|post|head|put|delete|options)$/i.test(this.type) && m() || m(1) }; a.ajaxTransport("+script", function (a) {
		var h, e = document.head || jQuery("head")[0] || document.documentElement; return {
			send: function (j, t) {
				h = document.createElement("script"); a.scriptCharset &&
					(h.charset = a.scriptCharset); h.src = a.url; h.onload = h.onreadystatechange = function (a, e) { if (e || !h.readyState || /loaded|complete/.test(h.readyState)) h.onload = h.onreadystatechange = null, h.parentNode && h.parentNode.removeChild(h), h = null, e || t(200, "success") }; e.insertBefore(h, e.firstChild)
			}, abort: function () { if (h) h.onload(void 0, !0) }
		}
	}); a.extend(a.support, { iecors: !!window.XDomainRequest }); a.support.iecors ? a.ajaxTransport(function (a) {
		return {
			send: function (h, e) {
				var j = new window.XDomainRequest; j.onload = function () {
					e(200,
						"OK", { text: j.responseText }, { "Content-Type": j.contentType })
				}; a.xhrFields && (j.onerror = a.xhrFields.error, j.ontimeout = a.xhrFields.timeout); j.open(a.type, a.url); j.send(a.hasContent && a.data || null)
			}, abort: function () { xdr.abort() }
		}
	}) : (a.ajaxSetup({ accepts: { binary: "text/plain; charset=x-user-defined" }, responseFields: { binary: "response" } }), a.ajaxTransport("binary", function (a) {
		var h; return {
			send: function (e, j) {
				var t = a.xhr(); console.log("xhr.open binary async=" + a.async + " url=" + a.url); t.open(a.type, a.url, a.async);
				var m = !1; try { t.hasOwnProperty("responseType") && (t.responseType = "arraybuffer", m = !0) } catch (u) { } try { !m && t.overrideMimeType && t.overrideMimeType("text/plain; charset=x-user-defined") } catch (b) { } !a.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest"); try { for (var c in e) t.setRequestHeader(c, e[c]) } catch (d) { } t.send(a.hasContent && a.data || null); h = function () {
					var b = t.status, c = "", d = t.getAllResponseHeaders(), e = {}; try {
						if (h && 4 === t.readyState) {
							h = void 0; try {
								e.text = "string" === typeof t.responseText ?
									t.responseText : null
							} catch (m) { } try { e.binary = t.response } catch (s) { } try { c = t.statusText } catch (u) { c = "" } !b && a.isLocal && !a.crossDomain ? b = e.text ? 200 : 404 : 1223 === b && (b = 204); j(b, c, e, d)
						}
					} catch (V) { alert(V), j(-1, V) }
				}; a.async ? 4 === t.readyState ? setTimeout(h) : t.onreadystatechange = h : h()
			}, abort: function () { }
		}
	}))
})(jQuery);
(function (a, m, l, h) {
	function e(e, l) {
		function s(b) { a(u).each(function () { self.Jmol && (0 <= l.indexOf("mouseup") || 0 <= l.indexOf("touchend")) && Jmol._setMouseOwner(null); var d = a(this); this !== b.target && !d.has(b.target).length && d.triggerHandler(l, [b.target, b]) }) } l = l || e + h; var u = a(), b = e + "." + l + "-special-event"; a.event.special[l] = {
			setup: function () { u = u.add(this); 1 === u.length && a(m).bind(b, s) }, teardown: function () { self.Jmol && Jmol._setMouseOwner(null); u = u.not(this); 0 === u.length && a(m).unbind(b) }, add: function (a) {
				var b =
					a.handler; a.handler = function (a, c) { a.target = c; b.apply(this, arguments) }
			}
		}
	} a.map(l.split(" "), function (a) { e(a) }); e("focusin", "focus" + h); e("focusout", "blur" + h)
})(jQuery, document, "click mousemove mouseup touchmove touchend", "outjsmol"); "undefined" == typeof jQuery && alert("Note -- JSmoljQuery is required for JSmol, but it's not defined."); self.Jmol || (Jmol = {});
Jmol._version || (Jmol = function (a) {
	var m = function (a) { return { rear: a++, header: a++, main: a++, image: a++, front: a++, fileOpener: a++, coverImage: a++, dialog: a++, menu: a + 9E4, console: a + 91E3, consoleImage: a + 91001, monitorZIndex: a + 99999 } }, m = {
		_version: "$Date: 2022-06-24 05:54:49 -0500 (Fri, 24 Jun 2022) $", _alertNoBinary: !0, _allowedJmolSize: [25, 2048, 300], _allowKeyboardFocus: !0, _appletCssClass: "", _appletCssText: "", _fileCache: null, _jarFile: null, _j2sPath: null, _use: null, _j2sLoadMonitorOpacity: 90, _applets: {}, _asynchronous: !0,
		_ajaxQueue: [], _persistentMenu: !1, _getZOrders: m, _z: m(Jmol.z || 9E3), _debugCode: !0, _debugCore: !1, db: {
			_databasePrefixes: "$=:", _fileLoadScript: ";if (_loadScript = '' && defaultLoadScript == '' && _filetype == 'Pdb') { select protein or nucleic;cartoons Only;color structure; select * };", _nciLoadScript: ";n = ({molecule=1}.length < {molecule=2}.length ? 2 : 1); select molecule=n;display selected;center selected;", _pubChemLoadScript: "", _DirectDatabaseCalls: {
				"cactus.nci.nih.gov": null, ".x3dna.org": null, "rruff.geo.arizona.edu": null,
				".rcsb.org": null, "ftp.wwpdb.org": null, "pdbe.org": null, "materialsproject.org": null, ".ebi.ac.uk": null, "pubchem.ncbi.nlm.nih.gov": null, "www.nmrdb.org/tools/jmol/predict.php": null, $: "https://cactus.nci.nih.gov/chemical/structure/%FILENCI/file?format=sdf&get3d=True", $$: "https://cactus.nci.nih.gov/chemical/structure/%FILENCI/file?format=sdf", "=": "https://files.rcsb.org/download/%FILE.pdb", "*": "https://www.ebi.ac.uk/pdbe/entry-files/download/%FILE.cif", "==": "https://files.rcsb.org/ligands/download/%FILE.cif",
				":": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/%FILE/SDF?record_type=3d"
			}, _restQueryUrl: "http://www.rcsb.org/pdb/rest/search", _restQueryXml: "<orgPdbQuery><queryType>org.pdb.query.simple.AdvancedKeywordQuery</queryType><description>Text Search</description><keywords>QUERY</keywords></orgPdbQuery>", _restReportUrl: "http://www.pdb.org/pdb/rest/customReport?pdbids=IDLIST&customReportColumns=structureId,structureTitle"
		}, _debugAlert: !1, _document: a, _isXHTML: !1, _lastAppletID: null, _mousePageX: null,
		_mouseOwner: null, _serverUrl: "https://your.server.here/jsmol.php", _syncId: ("" + Math.random()).substring(3), _touching: !1, _XhtmlElement: null, _XhtmlAppendChild: !1
	}; a = a.location.href.toLowerCase(); m._debugCore = 0 <= a.indexOf("j2sdebugcore"); m._httpProto = 0 == a.indexOf("https") ? "https://" : "http://"; m._isFile = 0 == a.indexOf("file:"); m._isFile && $.ajaxSetup({ mimeType: "text/plain" }); m._ajaxTestSite = m._httpProto + "google.com"; a = m._isFile || 0 == a.indexOf("http://localhost") || 0 == a.indexOf("http://127."); m._tracker = !a &&
		"https://chemapps.stolaf.edu/jmol/JmolTracker.php?id=UA-45940799-1"; m._isChrome = 0 <= navigator.userAgent.toLowerCase().indexOf("chrome"); m._isSafari = !m._isChrome && 0 <= navigator.userAgent.toLowerCase().indexOf("safari"); m._isMsie = void 0 !== window.ActiveXObject; m._isEdge = 0 <= navigator.userAgent.indexOf("Edge/"); m._useDataURI = !m._isMsie && !m._isEdge; window.requestAnimationFrame || (window.requestAnimationFrame = window.setTimeout); for (var l in Jmol) m[l] = Jmol[l]; return m
}(document, Jmol));
(function (a, m) {
	a.__$ = m; m(document).ready(function () { a._document = null }); a.$ = function (a, c) { null == a && alert(c + arguments.callee.caller.toString()); return m(c ? "#" + a._id + "_" + c : a) }; a._$ = function (a) { return "string" == typeof a ? m("#" + a) : a }; a.$ajax = function (b) { a._ajaxCall = b.url; b.cache = "NO" != b.cache; b.url = a._fixProtocol(b.url); return m.ajax(b) }; a._fixProtocol = function (b) {
		0 <= b.indexOf("get3d=True") && (b = b.replace(/get3d\=True/, "get3d=true")); return 0 == b.indexOf("http://www.rcsb.org/pdb/files/") && 0 > b.indexOf("/ligand/") ?
			"http://files.rcsb.org/view/" + b.substring(30).replace(/\.gz/, "") : 0 == b.indexOf("http://") && ("https://" == a._httpProto || 0 < b.indexOf(".gov/") || 0 == b.indexOf("http://www.materialsproject")) ? "https" + b.substring(4) : b
	}; a._getNCIInfo = function (b, c) { return a._getFileData("https://cactus.nci.nih.gov/chemical/structure/" + b + "/" + ("name" == c ? "names" : c)) }; a.$appEvent = function (b, c, d, e) { b = a.$(b, c); b.off(d) && e && b.on(d, e) }; a.$resize = function (a) { return m(window).resize(a) }; a.$after = function (a, c) { return m(a).after(c) }; a.$append =
		function (a, c) { return m(a).append(c) }; a.$bind = function (a, c, d) { return d ? m(a).bind(c, d) : m(a).unbind(c) }; a.$closest = function (a, c) { return m(a).closest(c) }; a.$get = function (a, c) { return m(a).get(c) }; a.$documentOff = function (a, c) { return m(document).off(a, "#" + c) }; a.$documentOn = function (a, c, d) { return m(document).on(a, "#" + c, d) }; a.$getAncestorDiv = function (a, c) { return m("div." + c + ":has(#" + a + ")")[0] }; a.$supportsIECrossDomainScripting = function () { return m.support.iecors }; a.$attr = function (b, c, d) {
			return a._$(b).attr(c,
				d)
		}; a.$css = function (b, c) { return a._$(b).css(c) }; a.$find = function (b, c) { return a._$(b).find(c) }; a.$focus = function (b) { return a._$(b).focus() }; a.$html = function (b, c) { return a._$(b).html(c) }; a.$offset = function (b) { return a._$(b).offset() }; a.$windowOn = function (a, c) { return m(window).on(a, c) }; a.$prop = function (b, c, d) { var e = a._$(b); return 3 == arguments.length ? e.prop(c, d) : e.prop(c) }; a.$remove = function (b) { return a._$(b).remove() }; a.$scrollTo = function (b, c) { var d = a._$(b); return d.scrollTop(0 > c ? d[0].scrollHeight : c) };
	a.$setEnabled = function (b, c) { return a._$(b).attr("disabled", c ? null : "disabled") }; a.$getSize = function (b) { b = a._$(b); return [b.width(), b.height()] }; a.$setSize = function (b, c, d) { return a._$(b).width(c).height(d) }; a.$is = function (b, c) { return a._$(b).is(c) }; a.$setVisible = function (b, c) { var d = a._$(b); return c ? d.show() : d.hide() }; a.$submit = function (b) { return a._$(b).submit() }; a.$val = function (b, c) { var d = a._$(b); return 1 == arguments.length ? d.val() : d.val(c) }; a._clearVars = function () {
		delete jQuery; delete m; delete a; delete SwingController;
		delete J; delete JM; delete JS; delete JSV; delete JU; delete JV; delete java; delete javajs; delete Clazz; delete c$
	}; var l = document, h = window, e = {}; e.ua = navigator.userAgent.toLowerCase(); var j; a: { j = ["linux", "unix", "mac", "win"]; for (var t = j.length; t--;)if (-1 != e.ua.indexOf(j[t])) { j = j[t]; break a } j = "unknown" } e.os = j; e.browser = function () { for (var a = e.ua, c = "konqueror webkit omniweb opera webtv icab msie mozilla".split(" "), d = 0; d < c.length; d++)if (0 <= a.indexOf(c[d])) return c[d]; return "unknown" }; e.browserName = e.browser();
	e.browserVersion = parseFloat(e.ua.substring(e.ua.indexOf(e.browserName) + e.browserName.length + 1)); e.supportsXhr2 = function () { return m.support.cors || m.support.iecors }; e.allowDestroy = "msie" != e.browserName; e.allowHTML5 = "msie" != e.browserName || 0 > navigator.appVersion.indexOf("MSIE 8"); e.getDefaultLanguage = function () { return navigator.language || navigator.userLanguage || "en-US" }; e._webGLtest = 0; e.supportsWebGL = function () {
		if (!a.featureDetection._webGLtest) {
			var b; a.featureDetection._webGLtest = h.WebGLRenderingContext &&
				((b = l.createElement("canvas")).getContext("webgl") || b.getContext("experimental-webgl")) ? 1 : -1
		} return 0 < a.featureDetection._webGLtest
	}; e.supportsLocalization = function () { for (var a = l.getElementsByTagName("meta"), c = a.length; 0 <= --c;)if (0 <= a[c].outerHTML.toLowerCase().indexOf("utf-8")) return !0; return !1 }; e.supportsJava = function () {
		a.featureDetection._javaEnabled || (a.featureDetection._javaEnabled = a._isMsie ? navigator.javaEnabled() ? 1 : -1 : navigator.javaEnabled() && (!navigator.mimeTypes || navigator.mimeTypes["application/x-java-applet"]) ?
			1 : -1); return 0 < a.featureDetection._javaEnabled
	}; e.compliantBrowser = function () { var a = !!l.getElementById, c = e.os; if ("opera" == e.browserName && 7.54 >= e.browserVersion && "mac" == c || "webkit" == e.browserName && 125.12 > e.browserVersion || "msie" == e.browserName && "mac" == c || "konqueror" == e.browserName && 3.3 >= e.browserVersion) a = !1; return a }; e.isFullyCompliant = function () { return e.compliantBrowser() && e.supportsJava() }; e.useIEObject = "win" == e.os && "msie" == e.browserName && 5.5 <= e.browserVersion; e.useHtml4Object = "mozilla" == e.browserName &&
		5 <= e.browserVersion || "opera" == e.browserName && 8 <= e.browserVersion || "webkit" == e.browserName; e.hasFileReader = h.File && h.FileReader; a.featureDetection = e; a._ajax = function (b) { if (!b.async) return a.$ajax(b).responseText; a._ajaxQueue.push(b); 1 == a._ajaxQueue.length && a._ajaxDone() }; a._ajaxDone = function () { var b = a._ajaxQueue.shift(); b && a.$ajax(b) }; a._grabberOptions = [["$", "NCI(small molecules)"], [":", "PubChem(small molecules)"], ["=", "RCSB(macromolecules)"], ["*", "PDBe(macromolecules)"]]; a._getGrabberOptions = function (b) {
			if (0 ==
				a._grabberOptions.length) return ""; var c = '<input type="text" id="ID_query" onfocus="jQuery(this).select()" onkeypress="if(13==event.which){Jmol._applets[\'ID\']._search();return false}" size="32" value="" />', d = '<button id="ID_submit" onclick="Jmol._applets[\'ID\']._search()">Search</button></nobr>'; 1 == a._grabberOptions.length ? (c = "<nobr>" + c + '<span style="display:none">', d = "</span>" + d) : c += "<br /><nobr>"; for (var c = c + '<select id="ID_select">', e = 0; e < a._grabberOptions.length; e++)var j = a._grabberOptions[e],
					c = c + ('<option value="' + j[0] + '" ' + (0 == e ? "selected" : "") + ">" + j[1] + "</option>"); c = (c + "</select>" + d).replace(/ID/g, b._id); return "<br />" + c
		}; a._getScriptForDatabase = function (b) { return "$" == b ? a.db._nciLoadScript : ":" == b ? a.db._pubChemLoadScript : a.db._fileLoadScript }; a._setInfo = function (a, c, d) {
			var e = [], j = ""; if (0 == d.indexOf("ERROR")) j = d; else switch (c) {
				case "=": c = d.split("<dimStructure.structureId>"); e = ["<table>"]; for (d = 1; d < c.length; d++)e.push('<tr><td valign=top><a href="javascript:Jmol.search(' + a._id + ",'=" +
					c[d].substring(0, 4) + "')\">" + c[d].substring(0, 4) + "</a></td>"), e.push("<td>" + c[d].split("Title>")[1].split("</")[0] + "</td></tr>"); e.push("</table>"); j = c.length - 1 + " matches"; break; case "$": case ":": break; default: return
			}a._infoHeader = j; a._info = e.join(""); a._showInfo(!0)
		}; a._loadSuccess = function (b, c) { c && (a._ajaxDone(), c(b)) }; a._loadError = function (b) { a._ajaxDone(); a.say("Error connecting to server: " + a._ajaxCall); null != b && b() }; a._isDatabaseCall = function (b) {
			return 0 <= a.db._databasePrefixes.indexOf(b.substring(0,
				1))
		}; a._getDirectDatabaseCall = function (b, c) {
			if (c && !a.featureDetection.supportsXhr2()) return b; var d = 2, e = b.substring(0, d), j = a.db._DirectDatabaseCalls[e] || a.db._DirectDatabaseCalls[e = b.substring(0, --d)]; j && (":" == e ? (e = b.toLowerCase(), isNaN(parseInt(b.substring(1))) ? 0 == e.indexOf(":smiles:") ? (j += "?POST?smiles=" + b.substring(8), b = "smiles") : 0 == e.indexOf(":cid:") ? b = "cid/" + b.substring(5) : (0 == e.indexOf(":name:") ? b = b.substring(5) : 0 == e.indexOf(":cas:") && (b = b.substring(4)), b = "name/" + encodeURIComponent(b.substring(d))) :
				b = "cid/" + b.substring(1)) : b = encodeURIComponent(b.substring(d)), 0 <= b.indexOf(".mmtf") ? b = "https://mmtf.rcsb.org/v1.0/full/" + b.replace(/\.mmtf/, "") : 0 <= j.indexOf("FILENCI") ? (b = b.replace(/\%2F/g, "/"), b = j.replace(/\%FILENCI/, b)) : b = j.replace(/\%FILE/, b)); return b
		}; a._getRawDataFromServer = function (b, c, d, e, j, h) {
			b = "?call=getRawDataFromDatabase&database=" + b + (0 <= c.indexOf("?POST?") ? "?POST?" : "") + "&query=" + encodeURIComponent(c) + (j ? "&encoding=base64" : "") + (h ? "" : "&script=" + encodeURIComponent(a._getScriptForDatabase(b)));
			return a._contactServer(b, d, e)
		}; a._checkFileName = function (b, c, d) { a._isDatabaseCall(c) && (d && a._setQueryTerm(b, c), c = a._getDirectDatabaseCall(c, !0), a._isDatabaseCall(c) && (c = a._getDirectDatabaseCall(c, !1), d && (d[0] = !0))); return c }; a._checkCache = function (b, c, d) { if (b._cacheFiles && a._fileCache && !c.endsWith(".js")) { if (b = a._fileCache[c]) return System.out.println("using " + b.length + " bytes of cached data for " + c), d(b), null; d = function (b, c) { d(a._fileCache[b] = c) } } return d }; a.playAudio = function (b) {
			a.playAudio(null,
				b)
		}; a.playAudio = function (a, c) {
			var d = c.get ? function (a) { return c.get(a) } : null, e = c.put ? function (a, b) { return c.put(a, b) } : null, j = d ? d("audioFile") : c, h = d && d("audioPlayer"), l = document.createElement("audio"); e && e("audioElement", l); var t = null; h && (t = function (a) { h.processUpdate(a) }, h.myClip = { open: function () { t("open") }, start: function () { l.play(); t("start") }, loop: function (a) { l.loop = 0 != a }, stop: function () { l.pause() }, close: function () { t("close") }, setMicrosecondPosition: function (a) { l.currentTime = a / 1E6 } }); l.controls =
				"true"; l.src = j; d && d("loop") && (l.loop = "true"); t && (l.addEventListener("pause", function () { t("pause") }), l.addEventListener("play", function () { t("play") }), l.addEventListener("playing", function () { t("playing") }), l.addEventListener("ended", function () { t("ended") }), t("open"))
		}; a._loadFileData = function (b, c, d, e) {
			var j = []; c = a._checkFileName(b, c, j); d = a._checkCache(b, c, d); j[0] ? a._getRawDataFromServer("_", c, d, e) : (b = { type: "GET", dataType: "text", url: c, async: a._asynchronous, success: function (b) { a._loadSuccess(b, d) }, error: function () { a._loadError(e) } },
				a._checkAjaxPost(b), a._ajax(b))
		}; a._getInfoFromDatabase = function (b, c, d) {
			if ("====" == c) { var e = a.db._restQueryXml.replace(/QUERY/, d), e = { dataType: "text", type: "POST", contentType: "application/x-www-form-urlencoded", url: a.db._restQueryUrl, data: encodeURIComponent(e) + "&req=browser", success: function (e) { a._ajaxDone(); a._extractInfoFromRCSB(b, c, d, e) }, error: function () { a._loadError(null) }, async: a._asynchronous }; return a._ajax(e) } d = "?call=getInfoFromDatabase&database=" + c + "&query=" + encodeURIComponent(d); return a._contactServer(d,
				function (d) { a._setInfo(b, c, d) })
		}; a._extractInfoFromRCSB = function (b, c, d, e) { var j = e.length / 5; if (0 != j && 4 == d.length && 1 != j) { d = d.toUpperCase(); var h = e.indexOf(d); 0 < h && 0 <= "123456789".indexOf(d.substring(0, 1)) && (e = d + "," + e.substring(0, h) + e.substring(h + 5)); 50 < j && (e = e.substring(0, 250)); e = e.replace(/\n/g, ","); e = a._restReportUrl.replace(/IDLIST/, e); a._loadFileData(b, e, function (d) { a._setInfo(b, c, d) }) } }; a._checkAjaxPost = function (a) {
			var c = a.url.indexOf("?POST?"); 0 < c && (a.data = a.url.substring(c + 6), a.url = a.url.substring(0,
				c), a.type = "POST", a.contentType = "application/x-www-form-urlencoded")
		}; a._contactServer = function (b, c, d) { b = { dataType: "text", type: "GET", url: a._serverUrl + b, success: function (b) { a._loadSuccess(b, c) }, error: function () { a._loadError(d) }, async: c ? a._asynchronous : !1 }; a._checkAjaxPost(b); return a._ajax(b) }; a._setQueryTerm = function (b, c) {
			if (c && b._hasOptions && "http://" != c.substring(0, 7)) {
				if (a._isDatabaseCall(c)) {
					var d = c.substring(0, 1); c = c.substring(1); c.substring(0, 1) == d && 0 <= "=$".indexOf(d) && (c = c.substring(1)); var e =
						a._getElement(b, "select"); if (e && e.options) for (var j = 0; j < e.options.length; j++)e[j].value == d && (e[j].selected = !0)
				} a.$val(a.$(b, "query"), c)
			}
		}; a._search = function (b, c, d) { 1 < arguments.length || (c = null); a._setQueryTerm(b, c); c || (c = a.$val(a.$(b, "query"))); 0 == c.indexOf("!") ? b._script(c.substring(1)) : (c && (c = c.replace(/\"/g, "")), b._showInfo(!1), a._searchMol(b, c, d, !0)) }; a._searchMol = function (b, c, d, e) {
			var j; a._isDatabaseCall(c) ? (j = c.substring(0, 1), c = c.substring(1)) : j = b._hasOptions ? a.$val(a.$(b, "select")) : "$"; "=" ==
				j && 3 == c.length && (c = "=" + c); var h = j + c; if (c && !(0 > h.indexOf("?") && h == b._thisJmolModel)) { b._thisJmolModel = h; var l; e && null != b._viewSet && null != (l = a.View.__findView(b._viewSet, { chemID: h })) ? a.View.__setView(l, b, !1) : ("$" == j || ":" == j ? b._jmolFileType = "MOL" : "=" == j && (b._jmolFileType = "PDB"), b._searchDatabase(c, j, d)) }
		}; a._searchDatabase = function (b, c, d, e) { b._showInfo(!1); return 0 <= c.indexOf("?") ? (a._getInfoFromDatabase(b, d, c.split("?")[0]), !0) : a.db._DirectDatabaseCalls[d] ? (b._loadFile(d + c, e), !0) : !1 }; a._syncBinaryOK =
			"?"; a._canSyncBinary = function (b) {
				if (a._isAsync) return !0; if (self.VBArray) return a._syncBinaryOK = !1; if ("?" != a._syncBinaryOK) return a._syncBinaryOK; a._syncBinaryOK = !0; try { var c = new window.XMLHttpRequest; c.open("text", a._ajaxTestSite, !1); c.hasOwnProperty("responseType") ? c.responseType = "arraybuffer" : c.overrideMimeType && c.overrideMimeType("text/plain; charset=x-user-defined") } catch (d) {
					return System.out.println("JSmolCore.js: synchronous binary file transfer is requested but not available"), a._alertNoBinary &&
						!b && alert("JSmolCore.js: synchronous binary file transfer is requested but not available"), a._syncBinaryOK = !1
				} return !0
			}; a._binaryTypes = "mmtf .gz .bz2 .jpg .gif .png .zip .jmol .bin .smol .spartan .pmb .mrc .map .ccp4 .dn6 .delphi .omap .pse .dcd .lut .uk/pdbe/densities/".split(" "); a.isBinaryUrl = function (b) { for (var c = a._binaryTypes.length; 0 <= --c;)if (0 <= b.indexOf(a._binaryTypes[c])) return !0; return !1 }; a._getFileData = function (b, c, d) {
				var e = a.isBinaryUrl(b), j = 0 <= b.indexOf(".gz") && 0 <= b.indexOf("rcsb.org");
				j && (b = b.replace(/\.gz/, ""), e = !1); var j = e && !c && !a._canSyncBinary(j), h = 0 <= b.indexOf("?POST?"); 0 == b.indexOf("file:/") && 0 != b.indexOf("file:///") && (b = "file://" + b.substring(5)); var l = 0 > b.indexOf("://") || 0 == b.indexOf(document.location.protocol) && 0 <= b.indexOf(document.location.host), t = "https://" == a._httpProto && 0 == b.indexOf("http://"), m = a._isDirectCall(b); !m && 0 <= b.indexOf("?ALLOWSORIGIN?") && (m = !0, b = b.replace(/\?ALLOWSORIGIN\?/, "")); var s = !l && a.$supportsIECrossDomainScripting(), u = null; if (t || j || !l && !m || !c &&
					s) u = a._getRawDataFromServer("_", b, c, c, j, !0); else { b = b.replace(/file:\/\/\/\//, "file://"); var O = { dataType: e ? "binary" : "text", async: !!c }; h ? (O.type = "POST", O.url = b.split("?POST?")[0], O.data = b.split("?POST?")[1]) : (O.type = "GET", O.url = b); c && (O.success = function () { c(a._xhrReturn(O.xhr)) }, O.error = function () { c(O.xhr.statusText) }); O.xhr = a.$ajax(O); c || (u = a._xhrReturn(O.xhr)) } if (!d) return u; null == u && (u = "", e = !1); e && (e = a._canSyncBinary(!0)); return e ? a._strToBytes(u) : JU.SB.newS(u)
			}; a._xhrReturn = function (a) {
				return !a.responseText &&
					"" !== a.responseText || self.Clazz && Clazz.instanceOf(a.response, self.ArrayBuffer) ? a.response || a.statusText : a.responseText
			}; a._isDirectCall = function (b) { if (0 <= b.indexOf("?ALLOWSORIGIN?")) return !0; for (var c in a.db._DirectDatabaseCalls) if (0 <= c.indexOf(".") && 0 <= b.indexOf(c)) return !0; return !1 }; a._cleanFileData = function (a) { return 0 <= a.indexOf("\r") && 0 <= a.indexOf("\n") ? a.replace(/\r\n/g, "\n") : 0 <= a.indexOf("\r") ? a.replace(/\r/g, "\n") : a }; a._getFileType = function (a) {
				var c = a.substring(0, 1); if ("$" == c || ":" == c) return "MOL";
				if ("=" == c) return "=" == a.substring(1, 2) ? "LCIF" : "PDB"; a = a.split(".").pop().toUpperCase(); return a.substring(0, Math.min(a.length, 3))
			}; a._getZ = function (b, c) { return b && b._z && b._z[c] || a._z[c] }; a._incrZ = function (b, c) { return b && b._z && ++b._z[c] || ++a._z[c] }; a._hideLocalFileReader = function (b) { b._localReader && a.$setVisible(b._localReader, !1); b._readingLocal = !1; a.setCursor(b, 0) }; a.loadFileFromDialog = function (b) { a.loadFileAsynchronously(null, b, null, null) }; a.loadFileAsynchronously = function (b, c, d, e) {
				if (d && 0 != d.indexOf("?")) {
					var j =
						d; d = a._checkFileName(c, d); var h = function (h) { a._setData(b, d, j, h, e, c) }, h = a._checkCache(c, d, h); 0 <= d.indexOf("|") && (d = d.split("|")[0]); return null == h ? null : a._getFileData(d, h)
				} if (!a.featureDetection.hasFileReader) return b ? b.setData("Local file reading is not enabled in your browser", null, null, e, c) : alert("Local file reading is not enabled in your browser"); c._localReader || (h = '<div id="ID" style="z-index:' + a._getZ(c, "fileOpener") + ';position:absolute;background:#E0E0E0;left:10px;top:10px"><div style="margin:5px 5px 5px 5px;"><button id="ID_loadurl">URL</button><input type="file" id="ID_files" /><button id="ID_loadfile">load</button><button id="ID_cancel">cancel</button></div><div>',
					a.$after("#" + c._id + "_appletdiv", h.replace(/ID/g, c._id + "_localReader")), c._localReader = a.$(c, "localReader")); a.$appEvent(c, "localReader_loadurl", "click"); a.$appEvent(c, "localReader_loadurl", "click", function () { var b = prompt("Enter a URL"); b && (a._hideLocalFileReader(c, 0), a._setData(null, b, b, null, e, c)) }); a.$appEvent(c, "localReader_loadfile", "click"); a.$appEvent(c, "localReader_loadfile", "click", function () {
						var d = a.$(c, "localReader_files")[0].files[0], j = new FileReader; j.onloadend = function (j) {
							j.target.readyState ==
							FileReader.DONE && (a._hideLocalFileReader(c, 0), a._setData(b, d.name, d.name, j.target.result, e, c))
						}; try { j.readAsArrayBuffer(d) } catch (h) { alert("You must select a file first.") }
					}); a.$appEvent(c, "localReader_cancel", "click"); a.$appEvent(c, "localReader_cancel", "click", function () { a._hideLocalFileReader(c); b && b.setData("#CANCELED#", null, null, e, c) }); a.$setVisible(c._localReader, !0); c._readingLocal = !0
			}; a._setData = function (b, c, d, e, j, h) {
				e && (e = a._strToBytes(e)); null != e && (null == b || 0 <= c.indexOf(".jdx")) && a.Cache.put("cache://" +
					c, e); null == b ? h._applet.openFileAsyncSpecial(null == e ? c : "cache://" + c, 1) : b.setData(c, d, e, j)
			}; a.doAjax = function (b, c, d) { b = b.toString(); if (d) { if (0 != b.indexOf("http://") && 0 != b.indexOf("https://")) return a._saveFile(b, d); b = { async: !1, url: b, type: "POST", data: "string" == typeof data ? d : ";base64," + (JU || J.util).Base64.getBase64(d).toString(), processData: !1 }; return a.$ajax(b).responseText } c && (b += "?POST?" + c); return a._getFileData(b, null, !0) }; a._saveFile = function (b, c, d, e) {
				if (a._localFileSaveFunction && a._localFileSaveFunction(b,
					c)) return "OK"; b = b.substring(b.lastIndexOf("/") + 1); d || (d = 0 <= b.indexOf(".pdf") ? "application/pdf" : 0 <= b.indexOf(".png") ? "image/png" : 0 <= b.indexOf(".gif") ? "image/gif" : 0 <= b.indexOf(".jpg") ? "image/jpg" : ""); var j = "string" == typeof c; c = j && 0 <= c.indexOf(";base64,") ? c.split(";base64,")[1] : (JU || J.util).Base64.getBase64(j ? c.getBytes("UTF-8") : c).toString(); e || (e = "base64"); (j = a._serverUrl) && 0 <= j.indexOf("your.server") && (j = ""); a._useDataURI || !j ? (e = document.createElement("a"), e.href = "data:" + d + ";base64," + c, e.type = d ||
						"text/plain;charset=utf-8", e.download = b, e.target = "_blank", m("body").append(e), e.click(), e.remove()) : (a._formdiv || (a.$after("body", '<div id="__jsmolformdiv__" style="display:none">\t\t\t\t\t\t<form id="__jsmolform__" method="post" target="_blank" action="">\t\t\t\t\t\t<input name="call" value="saveFile"/>\t\t\t\t\t\t<input id="__jsmolmimetype__" name="mimetype" value=""/>\t\t\t\t\t\t<input id="__jsmolencoding__" name="encoding" value=""/>\t\t\t\t\t\t<input id="__jsmolfilename__" name="filename" value=""/>\t\t\t\t\t\t<textarea id="__jsmoldata__" name="data"></textarea>\t\t\t\t\t\t</form>\t\t\t\t\t\t</div>'),
							a._formdiv = "__jsmolform__"), a.$attr(a._formdiv, "action", j + "?" + (new Date).getMilliseconds()), a.$val("__jsmoldata__", c), a.$val("__jsmolfilename__", b), a.$val("__jsmolmimetype__", d), a.$val("__jsmolencoding__", e), a.$submit("__jsmolform__"), a.$val("__jsmoldata__", ""), a.$val("__jsmolfilename__", "")); return "OK"
			}; a._strToBytes = function (a) { if (Clazz.instanceOf(a, self.ArrayBuffer)) return Clazz.newByteArray(-1, a); for (var c = Clazz.newByteArray(a.length, 0), d = a.length; 0 <= --d;)c[d] = a.charCodeAt(d) & 255; return c }; a._setConsoleDiv =
				function (a) { self.Clazz && Clazz.setConsoleDiv(a) }; a._registerApplet = function (b, c) { return window[b] = a._applets[b] = a._applets.master = a._applets[b + "__" + a._syncId + "__"] = c }; a._readyCallback = function (b, c, d, e, j) { b = b.split("_object")[0]; var h = a._applets[b]; if (d = d.booleanValue ? d.booleanValue() : d) h._appletPanel = j || e, h._applet = e; a._track(h)._readyCallback(b, c, d) }; a._getWrapper = function (b, c) {
					var d; if (c) {
						var e = ""; if (b._coverImage) var e = ' onclick="Jmol.coverApplet(ID, false)" title="' + b._coverTitle + '"', j = '<image id="ID_coverclickgo" src="' +
							b._makeLiveImage + '" style="width:25px;height:25px;position:absolute;bottom:10px;left:10px;z-index:' + a._getZ(b, "coverImage") + ';opacity:0.5;"' + e + " />", e = '<div id="ID_coverdiv" style="background-color:red;z-index:' + a._getZ(b, "coverImage") + ';width:100%;height:100%;display:inline;position:absolute;top:0px;left:0px"><image id="ID_coverimage" src="' + b._coverImage + '" style="width:100%;height:100%"' + e + "/>" + j + "</div>"; j = b._isJava ? "" : '<image id="ID_waitimage" src="' + 'https://chemapps.stolaf.edu/jmol/jsmol' + '/img/cursor_wait.gif" style="display:none;position:absolute;bottom:10px;left:10px;z-index:' +
								a._getZ(b, "coverImage") + ';" />'; d = a._appletCssText.replace(/\'/g, '"'); var h = b._getSpinner && b._getSpinner(); b._spinner = h = !h || "none" == h ? "" : "background-image:url(" + h + "); background-repeat:no-repeat; background-position:center;"; d = h + (0 <= d.indexOf('style="') ? d.split('style="')[1] : '" ' + d); d = '...<div id="ID_appletinfotablediv" style="width:Wpx;height:Hpx;position:relative;font-size:14px;text-align:left">IMG WAIT......<div id="ID_appletdiv" style="z-index:' + a._getZ(b, "header") + ";width:100%;height:100%;position:absolute;top:0px;left:0px;" +
									d + ">"; var h = b._height, l = b._width; if ("string" !== typeof h || 0 > h.indexOf("%")) h += "px"; if ("string" !== typeof l || 0 > l.indexOf("%")) l += "px"; d = d.replace(/IMG/, e).replace(/WAIT/, j).replace(/Hpx/g, h).replace(/Wpx/g, l)
					} else d = '......</div>......<div id="ID_2dappletdiv" style="position:absolute;width:100%;height:100%;overflow:hidden;display:none"></div>......<div id="ID_infotablediv" style="width:100%;height:100%;position:absolute;top:0px;left:0px">.........<div id="ID_infoheaderdiv" style="height:20px;width:100%;background:yellow;display:none"><span id="ID_infoheaderspan"></span><span id="ID_infocheckboxspan" style="position:absolute;text-align:right;right:1px;"><a href="javascript:Jmol.showInfo(ID,false)">[x]</a></span></div>.........<div id="ID_infodiv" style="position:absolute;top:20px;bottom:0px;width:100%;height:100%;overflow:auto"></div>......</div>...</div>';
					return d.replace(/\.\.\./g, "").replace(/[\n\r]/g, "").replace(/ID/g, b._id)
				}; a._hideLoadingSpinner = function (b) { b._spinner && a.$css(a.$(b, "appletdiv"), { "background-image": "" }) }; a._documentWrite = function (b) { if (a._document) { if (a._isXHTML && !a._XhtmlElement) { var c = document.getElementsByTagName("script"); a._XhtmlElement = c.item(c.length - 1); a._XhtmlAppendChild = !1 } a._XhtmlElement ? a._domWrite(b) : a._document.write(b) } return b }; a._domWrite = function (b) {
					for (var c = [0]; c[0] < b.length;) {
						var d = a._getDomElement(b, c); if (!d) break;
						a._XhtmlAppendChild ? a._XhtmlElement.appendChild(d) : a._XhtmlElement.parentNode.insertBefore(d, _jmol.XhtmlElement)
					}
				}; a._getDomElement = function (a, c) { var d = document.createElement("span"); d.innerHTML = a; c[0] = a.length; return d }; a._setObject = function (b, c, d) {
					b._id = c; b.__Info = {}; d.z && d.zIndexBase && (a._z = a._getZOrders(d.zIndexBase)); for (var e in d) b.__Info[e] = d[e]; (b._z = d.z) || d.zIndexBase && (b._z = b.__Info.z = a._getZOrders(d.zIndexBase)); b._width = d.width; b._height = d.height; b._noscript = !b._isJava && d.noscript; b._console =
						d.console; b._cacheFiles = !!d.cacheFiles; b._viewSet = null == d.viewSet || b._isJava ? null : "Set" + d.viewSet; null != b._viewSet && (a.View.__init(b), b._currentView = null); !a._fileCache && b._cacheFiles && (a._fileCache = {}); b._console || (b._console = b._id + "_infodiv"); "none" == b._console && (b._console = null); b._color = d.color ? d.color.replace(/0x/, "#") : "#FFFFFF"; b._disableInitialConsole = d.disableInitialConsole; b._noMonitor = d.disableJ2SLoadMonitor; a._j2sPath && (d.j2sPath = a._j2sPath); b._j2sPath = d.j2sPath; b._coverImage = d.coverImage;
					b._makeLiveImage = d.makeLiveImage || d.j2sPath + "/img/play_make_live.jpg"; b._isCovered = !!b._coverImage; b._deferApplet = d.deferApplet || b._isCovered && b._isJava; b._deferUncover = d.deferUncover && !b._isJava; b._coverScript = d.coverScript; b._coverTitle = d.coverTitle; b._coverTitle || (b._coverTitle = b._deferApplet ? "activate 3D model" : "3D model is loading..."); b._containerWidth = b._width + (b._width == parseFloat(b._width) ? "px" : ""); b._containerHeight = b._height + (b._height == parseFloat(b._height) ? "px" : ""); b._info = ""; b._infoHeader =
						b._jmolType + ' "' + b._id + '"'; b._hasOptions = d.addSelectionOptions; b._defaultModel = d.defaultModel; b._readyScript = d.script ? d.script : ""; b._readyFunction = d.readyFunction; b._coverImage && !b._deferApplet && (b._readyScript += ";javascript " + c + "._displayCoverImage(false)"); b._src = d.src
				}; a._addDefaultInfo = function (b, c) {
					for (var d in c) "undefined" == typeof b[d] && (b[d] = c[d]); a._use && (b.use = a._use); 0 <= b.use.indexOf("SIGNED") && (0 > b.jarFile.indexOf("Signed") && (b.jarFile = b.jarFile.replace(/Applet/, "AppletSigned")), b.use =
						b.use.replace(/SIGNED/, "JAVA"), b.isSigned = !0)
				}; a._syncedApplets = []; a._syncedCommands = []; a._syncedReady = []; a._syncReady = !1; a._isJmolJSVSync = !1; a._setReady = function (b) { a._syncedReady[b] = 1; for (var c = 0, d = 0; d < a._syncedApplets.length; d++) { if (a._syncedApplets[d] == b._id) a._syncedApplets[d] = b, a._syncedReady[d] = 1; else if (!a._syncedReady[d]) continue; c++ } c == a._syncedApplets.length && a._setSyncReady() }; a._setDestroy = function (b) { a.featureDetection.allowDestroy && a.$windowOn("beforeunload", function () { a._destroy(b) }) };
	a._destroy = function (b) { try { b._appletPanel && b._appletPanel.destroy(); b._applet = null; a._unsetMouse(b._canvas); b._canvas = null; for (var c = 0, d = 0; d < a._syncedApplets.length; d++)a._syncedApplets[d] == b && (a._syncedApplets[d] = null), a._syncedApplets[d] && c++; 0 < c || a._clearVars() } catch (e) { } }; a._setSyncReady = function () { a._syncReady = !0; for (var b = "", c = 0; c < a._syncedApplets.length; c++)a._syncedCommands[c] && (b += "Jmol.script(Jmol._syncedApplets[" + c + "], Jmol._syncedCommands[" + c + "]);"); setTimeout(b, 50) }; a._mySyncCallback =
		function (b, c) { app = a._applets[b]; if (app._viewSet) a.View.updateFromSync(app, c); else { if (!a._syncReady || !a._isJmolJSVSync) return 1; for (var d = 0; d < a._syncedApplets.length; d++)0 <= c.indexOf(a._syncedApplets[d]._syncKeyword) && a._syncedApplets[d]._syncScript(c); return 0 } }; a._getElement = function (a, c) { return document.getElementById(a._id + "_" + c) || {} }; a._evalJSON = function (a, c) {
			a += ""; if (!a) return []; if ("{" != a.charAt(0)) return 0 <= a.indexOf(" | ") && (a = a.replace(/\ \|\ /g, "\n")), a; var d = (new Function("return " + a))();
			return !d ? null : c && void 0 != d[c] ? d[c] : d
		}; a._sortMessages = function (a) { function c(a, b) { return a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : 0 } if (!a || "object" != typeof a) return []; for (var d = [], e = a.length - 1; 0 <= e; e--)for (var j = 0, h = a[e].length; j < h; j++)d[d.length] = a[e][j]; if (0 != d.length) return d = d.sort(c) }; a._setMouseOwner = function (b, c) { null == b || c ? (a._mouseOwner = b) && b._applet && (a._lastAppletID = b._applet._id) : a._mouseOwner == b && (a._mouseOwner = null) }; a._jsGetMouseModifiers = function (a) {
			var c = 0; switch (a.button) {
				case 0: c = 16; break; case 1: c =
					8; break; case 2: c = 4
			}a.shiftKey && (c += 1); a.altKey && (c += 8); a.ctrlKey && (c += 2); return c
		}; a._jsGetXY = function (b, c) {
			if (!b.applet._ready || a._touching && 0 > c.type.indexOf("touch")) return !1; var d = a.$offset(b.id), e, j = c.originalEvent; c.pageX || (c.pageX = j.pageX); c.pageY || (c.pageY = j.pageY); a._mousePageX = c.pageX; a._mousePageY = c.pageY; j.targetTouches && j.targetTouches[0] ? (e = j.targetTouches[0].pageX - d.left, d = j.targetTouches[0].pageY - d.top) : j.changedTouches ? (e = j.changedTouches[0].pageX - d.left, d = j.changedTouches[0].pageY -
				d.top) : (e = c.pageX - d.left, d = c.pageY - d.top); return void 0 == e ? null : [Math.round(e), Math.round(d), a._jsGetMouseModifiers(c)]
		}; a.setCursor = function (b, c) { if (!b._isJava && !b._readingLocal) { var d; switch (c) { case 1: d = "crosshair"; break; case 3: d = "wait"; a.$setVisible(a.$(b, "waitimage"), !0); break; case 8: d = "ns-resize"; break; case 12: d = "grab"; break; case 13: d = "move"; break; default: a.$setVisible(a.$(b, "waitimage"), !1), d = "default" }b._canvas.style.cursor = d } }; a._gestureUpdate = function (b, c) {
			c.stopPropagation(); c.preventDefault();
			var d = c.originalEvent; switch (c.type) { case "touchstart": a._touching = !0; break; case "touchend": a._touching = !1 }if (!d.touches || 2 != d.touches.length) return !1; switch (c.type) { case "touchstart": b._touches = [[], []]; break; case "touchmove": var e = a.$offset(b.id), j = b._touches[0], h = b._touches[1]; j.push([d.touches[0].pageX - e.left, d.touches[0].pageY - e.top]); h.push([d.touches[1].pageX - e.left, d.touches[1].pageY - e.top]); d = j.length; 3 < d && (j.shift(), h.shift()); 2 <= d && b.applet._processGesture(b._touches) }return !0
		}; a._jsSetMouse =
			function (b) {
				var c = function (a) { return !a.target || 0 <= ("" + a.target.className).indexOf("swingjs-ui") }; a.$bind(b, "mousedown touchstart", function (d) {
					if (c(d)) return !0; a._allowKeyboardFocus && b.focus(); a._setMouseOwner(b, !0); d.stopPropagation(); var e = d.target["data-UI"]; (!e || !e.handleJSEvent(b, 501, d)) && d.preventDefault(); b.isDragging = !0; if ("touchstart" == d.type && a._gestureUpdate(b, d)) return !!e; a._setConsoleDiv(b.applet._console); var j = a._jsGetXY(b, d); j && (2 != d.button && a.Swing.hideMenus(b.applet), b.applet._processEvent(501,
						j)); return !!e
				}); a.$bind(b, "mouseup touchend", function (d) { if (c(d)) return !0; a._setMouseOwner(null); d.stopPropagation(); var e = d.target["data-UI"]; (!e || !e.handleJSEvent(b, 502, d)) && d.preventDefault(); b.isDragging = !1; if ("touchend" == d.type && a._gestureUpdate(b, d)) return !!e; (d = a._jsGetXY(b, d)) && b.applet._processEvent(502, d); return !!e }); a.$bind(b, "mousemove touchmove", function (d) {
					if (c(d)) return !0; a._allowKeyboardFocus && b.focus(); if (a._mouseOwner && a._mouseOwner != b && a._mouseOwner.isDragging) {
						if (!a._mouseOwner.mouseMove) return !0;
						a._mouseOwner.mouseMove(d); return !1
					} return a._drag(b, d)
				}); a.$bind(b, "keydown keyup", function (d) { if (c(d)) return !0; d.stopPropagation(); d.preventDefault(); var e = a._jsGetXY(b, d), j = "keydown" == d.type ? 401 : 402; b.applet._processKeyEvent && b.applet._processKeyEvent(j, e, d); return !0 }); a._drag = function (b, c) {
					c.stopPropagation(); c.preventDefault(); if ("touchmove" == c.type && a._gestureUpdate(b, c)) return !1; var e = a._jsGetXY(b, c); if (!e) return !1; b.isDragging || (e[2] = 0); var j = c.target["data-UI"]; b.isdragging && (!j || j.handleJSEvent(b,
						506, c)); b.applet._processEvent(b.isDragging ? 506 : 503, e); return !!j
				}; a.$bind(b, "DOMMouseScroll mousewheel", function (d) { if (c(d)) return !0; d.stopPropagation(); d.preventDefault(); b.isDragging = !1; var e = d.originalEvent, e = e.detail ? e.detail : ("mac" == a.featureDetection.os ? 1 : -1) * e.wheelDelta; d = a._jsGetMouseModifiers(d); b.applet._processEvent(507, [0 > e ? -1 : 1, 0, d]); return !1 }); a.$bind(b, "contextmenu", function () { return !1 }); a.$bind(b, "mouseout", function (d) {
					if (c(d)) return !0; a._mouseOwner && !a._mouseOwner.mouseMove && a._setMouseOwner(null);
					b.applet._appletPanel && b.applet._appletPanel.startHoverWatcher(!1); a._jsGetXY(b, d); return !1
				}); a.$bind(b, "mouseenter", function (d) { if (c(d)) return !0; b.applet._appletPanel && b.applet._appletPanel.startHoverWatcher(!0); if (0 === d.buttons || 0 === d.which) { b.isDragging = !1; d = a._jsGetXY(b, d); if (!d) return !1; b.applet._processEvent(504, d); b.applet._processEvent(502, d); return !1 } }); a.$bind(b, "mousemoveoutjsmol", function (d, e, j) { if (c(j)) return !0; if (b == a._mouseOwner && b.isDragging) return a._drag(b, j) }); b.applet._is2D && a.$resize(function () {
					b.applet &&
					b.applet._resize()
				}); a.$bind("body", "mouseup touchend", function (d) { if (c(d)) return !0; b.applet && (b.isDragging = !1); a._setMouseOwner(null) })
			}; a._jsUnsetMouse = function (b) { b.applet = null; a.$bind(b, "mousedown touchstart mousemove touchmove mouseup touchend DOMMouseScroll mousewheel contextmenu mouseout mouseenter", null); a._setMouseOwner(null) }; a.Swing = { count: 0, menuInitialized: 0, menuCounter: 0, htDialogs: {} }; var s = a.Swing; SwingController = s; s.setDraggable = function (b) {
				b = b.prototype; b.setContainer || (b.setContainer =
					function (b) { this.container = b; b.obj = this; this.ignoreMouse = this.isDragging = !1; var d = this; b.bind("mousedown touchstart", function (b) { if (d.ignoreMouse) return d.ignoreMouse = !1, !0; a._setMouseOwner(d, !0); d.isDragging = !0; d.pageX = b.pageX; d.pageY = b.pageY; return !1 }); b.bind("mousemove touchmove", function (b) { if (d.isDragging && a._mouseOwner == d) return d.mouseMove(b), !1 }); b.bind("mouseup touchend", function (b) { d.mouseUp(b); a._setMouseOwner(null) }) }, b.mouseUp = function (b) {
						if (this.isDragging && a._mouseOwner == this) return this.pageX0 +=
							b.pageX - this.pageX, this.pageY0 += b.pageY - this.pageY, this.isDragging = !1; a._setMouseOwner(null)
					}, b.setPosition = function () { if (null === a._mousePageX) { var b = a.$offset(this.applet._id + "_" + (this.applet._is2D ? "canvas2d" : "canvas")); a._mousePageX = b.left; a._mousePageY = b.top } this.pageX0 = a._mousePageX; this.pageY0 = a._mousePageY; this.container.css({ top: a._mousePageY + "px", left: a._mousePageX + "px" }) }, b.mouseMove = function (b) {
						if (this.isDragging && a._mouseOwner == this) {
							this.timestamp = System.currentTimeMillis(); var d = this.pageX0 +
								(b.pageX - this.pageX); b = this.pageY0 + (b.pageY - this.pageY); a._mousePageX = d; a._mousePageY = b; this.container.css({ top: b + "px", left: d + "px" })
						}
					}, b.dragBind = function (b) {
						this.applet._ignoreMouse = !b; this.container.unbind("mousemoveoutjsmol"); this.container.unbind("touchmoveoutjsmol"); this.container.unbind("mouseupoutjsmol"); this.container.unbind("touchendoutjsmol"); a._setMouseOwner(null); if (b) {
							var d = this; this.container.bind("mousemoveoutjsmol touchmoveoutjsmol", function (a, b, c) { d.mouseMove(c) }); this.container.bind("mouseupoutjsmol touchendoutjsmol",
								function (a, b, c) { d.mouseUp(c) })
						}
					})
			}; s.JSDialog = function () { }; s.setDraggable(s.JSDialog); s.getScreenDimensions = function (a) { a.width = m(window).width(); a.height = m(window).height() }; s.dispose = function (b) { a.$remove(b.id + "_mover"); delete s.htDialogs[b.id]; b.container.obj.dragBind(!1) }; s.register = function (a, c) { a.id = c + ++s.count; s.htDialogs[a.id] = a }; s.setDialog = function (b) {
				a._setMouseOwner(null); a.$remove(b.id); var c = b.id + "_mover", d = a._$(c), e; d[0] ? (d.html(b.html), e = d[0].jd) : (a.$after("body", "<div id='" + c + "' style='position:absolute;left:0px;top:0px;'>" +
					b.html + "</div>"), e = new s.JSDialog, d = a._$(c), b.container = d, e.applet = b.manager.vwr.html5Applet, e.setContainer(d), e.dialog = b, e.setPosition(), e.dragBind(!0), d[0].jd = e); a.$bind("#" + b.id + " .JButton", "mousedown touchstart", function () { e.ignoreMouse = !0 }); a.$bind("#" + b.id + " .JComboBox", "mousedown touchstart", function () { e.ignoreMouse = !0 }); a.$bind("#" + b.id + " .JCheckBox", "mousedown touchstart", function () { e.ignoreMouse = !0 }); a.$bind("#" + b.id + " .JTextField", "mousedown touchstart", function () { e.ignoreMouse = !0 }); a.$bind("#" +
						b.id + " .JTable", "mousedown touchstart", function () { e.ignoreMouse = !0 }); a.$bind("#" + b.id + " .JScrollPane", "mousedown touchstart", function () { e.ignoreMouse = !0 }); a.$bind("#" + b.id + " .JEditorPane", "mousedown touchstart", function () { e.ignoreMouse = !0 })
			}; s.setSelected = function (b) { a.$prop(b.id, "checked", !!b.selected) }; s.setSelectedIndex = function (b) { a.$prop(b.id, "selectedIndex", b.selectedIndex) }; s.setText = function (b) { a.$prop(b.id, "value", b.text) }; s.setVisible = function (b) { a.$setVisible(b.id, b._visible) }; s.setEnabled =
				function (b) { a.$setEnabled(b.id, b.enabled) }; s.click = function (b, c) { var d = s.htDialogs[b.id]; if (d) { var e = d.toString(); if (0 <= e.indexOf("JCheck")) d.selected = b.checked; else if (0 <= e.indexOf("JCombo")) d.selectedIndex = b.selectedIndex; else if (null != d.text && (d.text = b.value, c && 13 != (c.charCode || c.keyCode))) return } e = s.htDialogs[a.$getAncestorDiv(b.id, "JDialog").id]; e.manager.actionPerformed(d ? d.name : e.registryKey + "/" + b.id) }; s.setFront = function (b) {
					var c = b.manager.vwr.html5Applet; b.zIndex != a._getZ(c, "dialog") && (b.zIndex =
						a._incrZ(c, "dialog")); b.container && ((b.container[0] || b.container).style.zIndex = b.zIndex)
				}; s.hideMenus = function (a) { if (a = a._menus) for (var c in a) a[c]._visible && s.hideMenu(a[c]) }; s.windowClosing = function (b) { b = s.htDialogs[a.$getAncestorDiv(b.id, "JDialog").id]; b.registryKey ? b.manager.processWindowClosing(b.registryKey) : b.dispose() }; a._track = function (b) {
					if (a._tracker) {
						try {
							var c = '<iframe style="display:none" width="0" height="0" frameborder="0" tabindex="-1" src="' + (a._tracker + "&applet=" + b._jmolType + "&version=" +
								a._version + "&appver=" + a.___JmolVersion + "&url=" + encodeURIComponent(document.location.href)) + '"></iframe>'; a.$after("body", c)
						} catch (d) { } delete a._tracker
					} return b
				}; var u; a.getProfile = function (a) { if (self.Clazz && self.JSON) return u || Clazz._startProfiling(u = 0 == arguments.length || a), Clazz.getProfile() }; a._getInChIKey = function (a, c) { 0 <= c.indexOf("MOL=") && c.split("MOL=")[1].split('"') }; a._getAttr = function (a, c) { var d = a.indexOf(c + "="); return 0 <= d && 0 <= (d = a.indexOf('"', d)) ? a.substring(d + 1, a.indexOf('"', d + 1)) : null };
	a.User = { viewUpdatedCallback: null }; a.View = { count: 0, applets: {}, sets: {} }; (function (b) {
		b.resetView = function (b, d) { debugger; if (d) { if (d._viewSet) { var e = a.View.applets[d._viewSet]; for (b in e) b != d && a.View.resetView(b) } } else b && (b._reset(), a.View.updateView(b)) }; b.updateView = function (c, d) {
			if (null != c._viewSet) {
				d || (d = {}); d.chemID || (c._searchQuery = null); d.data || (d.data = "N/A"); d.type = c._viewType; if (null == (c._currentView = b.__findView(c._viewSet, d))) c._currentView = b.__createViewSet(c._viewSet, d.chemID, d.viewID ||
					d.chemID); c._currentView[d.type].data = d.data; c._currentView[d.type].smiles = c._getSmiles(); a.User.viewUpdatedCallback && a.User.viewUpdatedCallback(c, "updateView"); b.__setView(c._currentView, c, !1)
			}
		}; b.updateFromSync = function (c, d) {
			c._updateMsg = d; var e = a._getAttr(d, "sourceID") || a._getAttr(d, "file"); if (e) {
				var j = b.__findView(c._viewSet, { viewID: e }); if (null == j) return a.updateView(c, d); j != c._currentView && b.__setView(j, c, !0); var h = (e = a._getAttr(d, "atoms")) && 0 <= d.indexOf("selectionhalos ON") ? eval("[" + e + "]") :
					[]; setTimeout(function () { c._currentView == j && b.updateAtomPick(c, h) }, 10); a.User.viewUpdatedCallback && a.User.viewUpdatedCallback(c, "updateFromSync")
			}
		}; b.updateAtomPick = function (b, d) { var e = b._currentView; if (null != e) { for (var j in e) "info" != j && e[j].applet != b && e[j].applet._updateAtomPick(d); a.User.viewUpdatedCallback && a.User.viewUpdatedCallback(b, "updateAtomPick") } }; b.dumpViews = function (a) {
			var d = b.sets[a]; if (d) {
				var e = "View set " + a + ":\n"; a = b.applets[a]; for (var j in a) e += "\napplet " + a[j]._id + " currentView=" +
					(a[j]._currentView ? a[j]._currentView.info.viewID : null); for (j = d.length; 0 <= --j;) { a = d[j]; var e = e + ("\n\n<b>view=" + j + " viewID=" + a.info.viewID + " chemID=" + a.info.chemID + "</b>\n"), h, l; for (l in a) "info" != l && (e += "\nview=" + j + " type=" + l + " applet=" + ((h = a[l]).applet ? h.applet._id : null) + " SMILES=" + h.smiles + "\n atomMap=" + JSON.stringify(h.atomMap) + "\n data=\n" + h.data + "\n") } return e
			}
		}; b.__init = function (a) { var d = a._viewSet, e = b.applets; e[d] || (e[d] = {}); e[d][a._viewType] = a }; b.__findView = function (a, d) {
			var e = b.sets[a]; null ==
				e && (e = b.sets[a] = []); for (var j = e.length; 0 <= --j;) { var h = e[j]; if (d.viewID) { if (h.info.viewID == d.viewID) return h } else { if (null != d.chemID && d.chemID == h.info.chemID) return h; for (var l in h) if ("info" != l && (null != d.data && null != h[l].data ? d.data == h[l].data : d.type == l)) return h } } return null
		}; b.__createViewSet = function (c, d, e) { b.count++; d = { info: { chemID: d, viewID: e || "model_" + b.count } }; for (var j in a._applets) e = a._applets[j], e._viewSet == c && (d[e._viewType] = { applet: e, data: null }); b.sets[c].push(d); return d }; b.__setView =
			function (a, b, e) { for (var j in a) if ("info" != j) { var h = a[j], l = h.applet, t = e || null != l && "<modified>" == l._molData; if (!(null == l || l == b && !t)) { var m = null == h.data, s = null != l._currentView; l._currentView = a; if (!s || !(a[j].data == h.data && !m & !t)) if (l._loadModelFromView(a), m) break } } }
	})(a.View); a.Cache = { fileCache: {} }; a.Cache.get = function (b) { return a.Cache.fileCache[b] }; a.Cache.put = function (b, c) { a.Cache.fileCache[b] = c }; a.Cache.setDragDrop = function (b, c) {
		a.$appEvent(b, c, "dragover", function (a) {
			a = a.originalEvent; a.stopPropagation();
			a.preventDefault(); a.dataTransfer.dropEffect = "copy"
		}); a.$appEvent(b, c, "drop", function (d) {
			var e = d.originalEvent; e.stopPropagation(); e.preventDefault(); var j = e.dataTransfer.files[0]; if (null == j) try { j = "" + e.dataTransfer.getData("text"), (0 == j.indexOf("file:/") || 0 == j.indexOf("http:/") || 0 == j.indexOf("https:/")) && b._scriptLoad(j) } catch (h) { } else e = new FileReader, e.onloadend = function (e) {
				if (e.target.readyState == FileReader.DONE) {
					var h = "cache://DROP_" + j.name; e = Clazz.newByteArray(-1, e.target.result); if ("console_input" ==
						c) h = String.instantialize(e), a.$(b, c).val(0 > h.indexOf("\x00") ? h : e.length + " bytes"); else { h.endsWith(".spt") || b._appletPanel.cacheFileByName("cache://DROP_*", !1); "JSV" == b._viewType || h.endsWith(".jdx") ? a.Cache.put(h, e) : b._appletPanel.cachePut(h, e); e = a._jsGetXY(b._canvas, d); var l = [null]; e && (!b._appletPanel.setStatusDragDropped || b._appletPanel.setStatusDragDropped(0, e[0], e[1], h, l)) && b._appletPanel.openFileAsyncSpecialType(h, 1, l[0]) }
				}
			}, e.readAsArrayBuffer(j)
		})
	}
})(Jmol, jQuery); Jmol._debugCode = !1;
(function (a) {
	a._isAsync = !1; a._asyncCallbacks = {}; a._coreFiles = []; var m = !1, l = [], h = [], e = 0, j = [], t = [], s = function (b) { arguments.length || (b = !0); delete e; for (var d; 0 < h.length && "done" == (d = h[0])[4];)h.shift(); if (0 != h.length) if (!a._isAsync && !b) setTimeout(s, 10); else { d.push("done"); var j = "JSmol exec " + d[0]._id + " " + d[3] + " " + d[2]; self.System && System.out.println(j); self.console && console.log(j + " -- OK"); l.push(j); d[1](d[0], d[2]) } }, u = function (b) {
		m ? s() : (m = !0, LoadClazz(), b._noMonitor && (Clazz._LoaderProgressMonitor.showStatus =
			function () { }), LoadClazz = null, b.__Info.uncompressed && Clazz.loadClass(), Clazz._Loader.onGlobalLoaded = function () { Clazz._LoaderProgressMonitor.showStatus("Application loaded.", !0); if (!a._debugCode || !a.haveCore) a.haveCore = !0, s() }, Clazz._Loader.loadPackageClasspath("java", null, !0, s))
	}, b = function (a, b) { Clazz._Loader.loadClass(b, function () { s() }) }; a.showExecLog = function () { return l.join("\n") }; a._addExec = function (a) {
		a[1] || (a[1] = b); var d = "JSmol load " + a[0]._id + " " + a[3]; self.console && console.log(d + "..."); l.push(d);
		h.push(a)
	}; a._addCoreFile = function (b, d, e) { b = b.toLowerCase().split(".")[0]; if (!(0 <= j.join("").indexOf(b))) { j.push(b); j.sort(); a._coreFiles = [d + "/core/core" + j.join("") + ".z.js"]; if (e && (e = e.split(" "))) for (b = 0; b < e.length; b++)0 > t.join("").indexOf(e[b]) && t.push(d + "/core/core" + e[b] + ".z.js"); for (b = 0; b < t.length; b++)a._coreFiles.push(t[b]) } }; a._Canvas2D = function (b, d, e, j) {
		this._uniqueId = ("" + Math.random()).substring(3); this._id = b; this._is2D = !0; this._isJava = !1; this._jmolType = "Jmol._Canvas2D (" + e + ")"; this._isLayered =
			d._isLayered || !1; this._isSwing = d._isSwing || !1; this._isJSV = d._isJSV || !1; this._isAstex = d._isAstex || !1; this._platform = d._platform || ""; if (j) return this; window[b] = this; this._createCanvas(b, d); if (!a._document || this._deferApplet) return this; this._init(); return this
	}; a._setAppletParams = function (b, d, e, j) { for (var h in e) if (!b || 0 <= b.indexOf(";" + h.toLowerCase() + ";")) null == e[h] || "language" == h && !a.featureDetection.supportsLocalization() || (j ? d.put(h, !0 === e[h] ? Boolean.TRUE : !1 === e[h] ? Boolean.FALSE : e[h]) : d[h] = e[h]) };
	a._jsSetPrototype = function (b) {
		b._init = function () { this._setupJS(); this._showInfo(!0); this._disableInitialConsole && this._showInfo(!1) }; b._createCanvas = function (b, c, e) {
			a._setObject(this, b, c); e && (this._GLmol = e, this._GLmol.applet = this, this._GLmol.id = this._id); e = a._getWrapper(this, !0); this._deferApplet || (a._document ? (a._documentWrite(e), this._newCanvas(!1), e = "") : (this._deferApplet = !0, e += "<img width=0 height=0 src=. onerror=" + b + "._cover(false) >")); e += a._getWrapper(this, !1); c.addSelectionOptions && (e += a._getGrabberOptions(this));
			a._debugAlert && !a._document && alert(e); this._code = a._documentWrite(e)
		}; b._newCanvas = function (a) { this._is2D ? this._createCanvas2d(a) : this._GLmol.create() }; b._getHtml5Canvas = function () { return this._canvas }; b._getWidth = function () { return this._canvas.width }; b._getHeight = function () { return this._canvas.height }; b._getContentLayer = function () { return a.$(this, "contentLayer")[0] }; b._repaintNow = function () { a.repaint(this, !1) }; b._createCanvas2d = function () {
			var b = a.$(this, "appletdiv"); try {
				b[0].removeChild(this._canvas),
				this._canvas.frontLayer && b[0].removeChild(this._canvas.frontLayer), this._canvas.rearLayer && b[0].removeChild(this._canvas.rearLayer), this._canvas.contentLayer && b[0].removeChild(this._canvas.contentLayer), a._jsUnsetMouse(this._mouseInterface)
			} catch (c) { } var e = Math.round(b.width()), j = Math.round(b.height()), h = document.createElement("canvas"); h.tabIndex = 1; h.outline = "none"; h.applet = this; this._canvas = h; h.style.width = "100%"; h.style.height = "100%"; h.width = e; h.height = j; h.id = this._id + "_canvas2d"; b.append(h); a._$(h.id).css({
				"z-index": a._getZ(this,
					"main")
			}); if (this._isLayered) {
				var l = document.createElement("div"); h.contentLayer = l; l.id = this._id + "_contentLayer"; b.append(l); a._$(l.id).css({ zIndex: a._getZ(this, "image"), position: "absolute", left: "0px", top: "0px", width: (this._isSwing ? e : 0) + "px", height: (this._isSwing ? j : 0) + "px", overflow: "hidden" }); this._isSwing ? (b = document.createElement("div"), b.id = this._id + "_swingdiv", a._$(this._id + "_appletinfotablediv").append(b), a._$(b.id).css({
					zIndex: a._getZ(this, "rear"), position: "absolute", left: "0px", top: "0px", width: e +
						"px", height: j + "px", overflow: "hidden"
				}), this._mouseInterface = h.contentLayer, h.contentLayer.applet = this) : this._mouseInterface = this._getLayer("front", b, e, j, !1)
			} else this._mouseInterface = h; a._jsSetMouse(this._mouseInterface)
		}; b._getLayer = function (b, c, e, j, h) {
			var l = document.createElement("canvas"); this._canvas[b + "Layer"] = l; l.style.width = "100%"; l.style.height = "100%"; l.id = this._id + "_" + b + "Layer"; l.width = e; l.height = j; c.append(l); l.applet = this; a._$(l.id).css({
				background: h ? "rgb(0,0,0,1)" : "rgb(0,0,0,0.001)", "z-index": a._getZ(this,
					b), position: "absolute", left: "0px", top: "0px", overflow: "hidden"
			}); return l
		}; b._setupJS = function () { window["j2s.lib"] = { base: this._j2sPath + "/", alias: ".", console: this._console, monitorZIndex: a._getZ(this, "monitorZIndex") }; 0 == h.length && a._addExec([this, u, null, "loadClazz"]); this._addCoreFiles(); a._addExec([this, this.__startAppletJS, null, "start applet"]); this._isSigned = !0; this._ready = !1; this._applet = null; this._canScript = function () { return !0 }; this._savedOrientations = []; e && clearTimeout(e); e = setTimeout(s, 100) };
		b.__startAppletJS = function (b) {
			0 == a._version.indexOf("$Date: ") && (a._version = (a._version.substring(7) + " -").split(" -")[0] + " (JSmol/j2s)"); var c = Clazz._4Name("java.util.Hashtable").newInstance(); a._setAppletParams(b._availableParams, c, b.__Info, !0); c.put("appletReadyCallback", "Jmol._readyCallback"); c.put("applet", !0); c.put("name", b._id); c.put("syncId", a._syncId); a._isAsync && c.put("async", !0); b._color && c.put("bgcolor", b._color); b._startupScript && c.put("script", b._startupScript); a._syncedApplets.length &&
				c.put("synccallback", "Jmol._mySyncCallback"); c.put("signedApplet", "true"); c.put("platform", b._platform); b._is2D && c.put("display", b._id + "_canvas2d"); c.put("documentBase", document.location.href); var e = b._j2sPath + "/"; if (0 > e.indexOf("://")) { var j = document.location.href.split("#")[0].split("?")[0].split("/"); 0 == e.indexOf("/") ? j = [j[0], e.substring(1)] : j[j.length - 1] = e; e = j.join("/") } b._j2sFullPath = e.substring(0, e.length - 1); c.put("codePath", e); a._registerApplet(b._id, b); try { b._newApplet(c) } catch (h) {
					System.out.println((a._isAsync ?
						"normal async abort from " : "") + h); return
				} b._jsSetScreenDimensions(); s()
		}; b._restoreState || (b._restoreState = function () { }); b._jsSetScreenDimensions = function () { if (this._appletPanel) { var b = a._getElement(this, this._is2D ? "canvas2d" : "canvas"); this._appletPanel.setScreenDimension(b.width, b.height) } }; b._show = function (b) { a.$setVisible(a.$(this, "appletdiv"), b); b && a.repaint(this, !0) }; b._canScript = function () { return !0 }; b.equals = function (a) { return this == a }; b.clone = function () { return this }; b.hashCode = function () { return parseInt(this._uniqueId) };
		b._processGesture = function (a) { return this._appletPanel.processTwoPointGesture(a) }; b._processEvent = function (a, b) { this._appletPanel.processMouseEvent(a, b[0], b[1], b[2], System.currentTimeMillis()) }; b._processKeyEvent = function (a, b, c) { this._appletPanel.processKeyEvent({ getID: function () { return a }, getKeyCode: function () { return c.keyCode }, getModifiers: function () { return b[2] }, consume: function () { } }) }; b._resize = function () {
			var b = "__resizeTimeout_" + this._id; a[b] && clearTimeout(a[b]); var c = this; a[b] = setTimeout(function () {
				a.repaint(c,
					!0); a[b] = null
			}, 100)
		}; return b
	}; a.repaint = function (b, e) { if (b && b._appletPanel) { var j = a.$(b, "appletdiv"), h = Math.round(j.width()), j = Math.round(j.height()); if (b._is2D && (b._canvas.width != h || b._canvas.height != j)) b._newCanvas(!0), b._appletPanel.setDisplay(b._canvas); b._appletPanel.setScreenDimension(h, j); h = function () { b._appletPanel.paint ? b._appletPanel.paint(null) : b._appletPanel.update(null) }; e ? requestAnimationFrame(h) : h() } }; a.loadImage = function (b, e, j, h, l, t) {
		var m = "echo_" + e + j + (h ? "_" + h.length : ""), s = a.getHiddenCanvas(b.vwr.html5Applet,
			m, 0, 0, !1, !0); if (null == s) { if (null == t) { t = new Image; if (null == h) return t.onload = function () { a.loadImage(b, e, j, null, l, t) }, t.src = j, null; System.out.println("Jsmol.js Jmol.loadImage using data URI for " + m); t.src = "string" == typeof h ? h : "data:" + JU.Rdr.guessMimeTypeForBytes(h) + ";base64," + JU.Base64.getBase64(h) } var u = t.width, V = t.height; "webgl" == e && (u /= 2, V /= 2); s = a.getHiddenCanvas(b.vwr.html5Applet, m, u, V, !0, !1); s.imageWidth = u; s.imageHeight = V; s.id = m; s.image = t; a.setCanvasImage(s, u, V) } else System.out.println("Jsmol.js Jmol.loadImage reading cached image for " +
				m); return null == h ? l(s, j) : s
	}; a._canvasCache = {}; a.getHiddenCanvas = function (b, e, j, h, l, t) { e = b._id + "_" + e; b = a._canvasCache[e]; if (t) return b; if (l || !b || b.width != j || b.height != h) b = document.createElement("canvas"), b.width = b.style.width = j, b.height = b.style.height = h, b.id = e, a._canvasCache[e] = b; return b }; a.setCanvasImage = function (a, b, e) { a.buf32 = null; a.width = b; a.height = e; a.getContext("2d").drawImage(a.image, 0, 0, a.image.width, a.image.height, 0, 0, b, e) }; a.applyFunc = function (a, b) { return a(b) }
})(Jmol);
(function (a, m) {
	a._Applet = function (e, j, h) {
		window[e] = this; this._jmolType = "Jmol._Applet" + (j.isSigned ? " (signed)" : ""); this._viewType = "Jmol"; this._isJava = !0; this._syncKeyword = "Select:"; this._availableParams = ";progressbar;progresscolor;boxbgcolor;boxfgcolor;allowjavascript;boxmessage;\t\t\t;animframecallback;appletreadycallback;atommovedcallback;audiocallback;\t\t\t;clickcallback;dragdropcallback;echocallback;errorcallback;evalcallback;hovercallback;\t\t\t;imagecallback;loadstructcallback;measurecallback;messagecallback;minimizationcallback;modelkitcallback;pickcallback;\t\t\t;resizecallback;scriptcallback;selectcallback;servicecallback;structuremodifiedcallback;synccallback;\t\t\t;statusform;statustext;statustextarea;usecommandthread;syncid;appletid;startupscript;language;menufile;";
		if (h) return this; this._isSigned = j.isSigned; this._readyFunction = j.readyFunction; this._ready = !1; this._isJava = !0; this._isInfoVisible = !1; this._applet = null; this._memoryLimit = j.memoryLimit || 512; this._canScript = function () { return !0 }; this._savedOrientations = []; this._initialize = function (e, h) {
			var b = !1; a._jarFile && (h = a._jarFile); if (this._jarFile) {
				var c = this._jarFile; 0 <= c.indexOf("/") ? (alert("This web page URL is requesting that the applet used be " + c + ". This is a possible security risk, particularly if the applet is signed, because signed applets can read and write files on your local machine or network."),
					"yes" == prompt("Do you want to use applet " + c + "? ", "yes or no") ? (e = c.substring(0, c.lastIndexOf("/")), h = c.substring(c.lastIndexOf("/") + 1)) : b = !0) : h = c; this_isSigned = j.isSigned = 0 <= h.indexOf("Signed")
			} this._jarPath = j.jarPath = e || "."; this._jarFile = j.jarFile = "string" == typeof h ? h : (h ? "JmolAppletSigned" : "JmolApplet") + "0.jar"; b && alert("The web page URL was ignored. Continuing using " + this._jarFile + ' in directory "' + this._jarPath + '"'); void 0 == a.controls || a.controls._onloadResetForms()
		}; this._create(e, j); return this
	};
	var l = a._Applet, h = a._Applet.prototype; l._get = function (e, j, h) {
		h || (h = !1); j || (j = {}); a._addDefaultInfo(j, { color: "#FFFFFF", width: 300, height: 300, addSelectionOptions: !1, serverURL: "http://your.server.here/jsmol.php", defaultModel: "", script: null, src: null, readyFunction: null, use: "HTML5", jarPath: "java", jarFile: "JmolApplet0.jar", isSigned: !1, j2sPath: "j2s", coverImage: null, makeLiveImage: null, coverTitle: "", coverCommand: "", deferApplet: !1, deferUncover: !1, disableJ2SLoadMonitor: !1, disableInitialConsole: !0, debug: !1 }); a._debugAlert =
			j.debug; j.serverURL && (a._serverUrl = j.serverURL); for (var m = !1, u = null, b = j.use.toUpperCase().split("#")[0].split(" "), c = 0; c < b.length; c++) { switch (b[c]) { case "JAVA": m = !0; a.featureDetection.supportsJava() && (u = new l(e, j, h)); break; case "WEBGL": u = l._getCanvas(e, j, h, !0); break; case "HTML5": a.featureDetection.allowHTML5 ? u = l._getCanvas(e, j, h, !1) : b.push("JAVA") }if (null != u) break } null == u && (h || !m ? u = { _jmolType: "none" } : m && (u = new l(e, j))); return h ? u : a._registerApplet(e, u)
	}; l._getCanvas = function (e, j, h, m) {
		j._isLayered =
		!1; j._platform = "J.awtjs2d.Platform"; return m && a.featureDetection.supportsWebGL() ? (a._Canvas3D.prototype = a.GLmol.extendApplet(a._jsSetPrototype(new l(e, j, !0))), new a._Canvas3D(e, j, "Jmol", h)) : !m ? (a._Canvas2D.prototype = a._jsSetPrototype(new l(e, j, !0)), new a._Canvas2D(e, j, "Jmol", h)) : null
	}; l._noJavaMsg = "Either you do not have Java applets enabled in your web<br />browser or your browser is blocking this applet.<br />\t\t\tCheck the warning message from your browser and/or enable Java applets in<br />\t\t\tyour web browser preferences, or install the Java Runtime Environment from <a href='http://www.java.com'>www.java.com</a>";
	l._setCommonMethods = function (a) { a._showInfo = h._showInfo; a._search = h._search; a._getName = h._getName; a._readyCallback = h._readyCallback }; l._createApplet = function (e, j, h) {
		e._initialize(j.jarPath, j.jarFile); var s = e._jarFile; a._isFile && (s = s.replace(/0\.jar/, ".jar")); var u = 0 <= e._containerWidth.indexOf("px") ? e._containerWidth : "100%", b = 0 <= e._containerHeight.indexOf("px") ? e._containerHeight : "100%", u = ' style="width:' + u + ";height:" + b + '" ', b = "name='" + e._id + "_object' id='" + e._id + "_object' \n" + u + "\n"; h.codebase = e._jarPath;
		h.codePath = h.codebase + "/"; if (0 > h.codePath.indexOf("://")) { var c = m.location.href.split("#")[0].split("?")[0].split("/"); c[c.length - 1] = h.codePath; h.codePath = c.join("/") } h.archive = s; h.mayscript = "true"; h.java_arguments = "-Xmx" + Math.round(j.memoryLimit || e._memoryLimit) + "m"; h.permissions = e._isSigned ? "all-permissions" : "sandbox"; h.documentLocation = m.location.href; h.documentBase = m.location.href.split("#")[0].split("?")[0]; h.jarPath = j.jarPath; a._syncedApplets.length && (h.synccallback = "Jmol._mySyncCallback");
		e._startupScript && (h.script = e._startupScript); var c = "\n", d; for (d in h) h[d] && (c += "  <param name='" + d + "' value='" + h[d] + "' />\n"); c = a.featureDetection.useIEObject || a.featureDetection.useHtml4Object ? "<object " + b + (a.featureDetection.useIEObject ? " classid='clsid:8AD9C840-044E-11D1-B3E9-00805F499D93' codebase='http://java.sun.com/update/1.6.0/jinstall-6u22-windows-i586.cab'>" : " type='application/x-java-applet'>") + c + "<p style='background-color:yellow;" + u.split('"')[1] + ";text-align:center;vertical-align:middle;'>\n" +
			l._noJavaMsg + "</p></object>\n" : "<applet " + b + " code='" + h.code + "' codebase='" + e._jarPath + "' archive='" + s + "' mayscript='true'>\n" + c + "<table bgcolor='yellow'><tr><td align='center' valign='middle' " + u + ">\n" + l._noJavaMsg + "</td></tr></table></applet>\n"; e._deferApplet && (e._javaCode = c, c = ""); c = a._getWrapper(e, !0) + c + a._getWrapper(e, !1) + (j.addSelectionOptions ? a._getGrabberOptions(e) : ""); a._debugAlert && alert(c); e._code = a._documentWrite(c)
	}; h._newApplet = function (a) {
		this._is2D || a.put("script", (a.get("script") ||
			"") + ";set multipleBondSpacing 0.35;"); this._viewerOptions = a; return new J.appletjs.Jmol(a)
	}; h._addCoreFiles = function () { a._addCoreFile("jmol" + (a._debugCode ? "debug" : ""), this._j2sPath, this.__Info.preloadCore); a._debugCode && a._addCoreFile("jmoldebug", this._j2sPath, this.__Info.preloadCore); this._is2D || a._addExec([this, null, "J.export.JSExporter", "load JSExporter"]); a._debugCode && a._addExec([this, null, "J.appletjs.Jmol", "load Jmol"]) }; h._create = function (e, j) {
		a._setObject(this, e, j); var h = {
			syncId: a._syncId,
			progressbar: "true", progresscolor: "blue", boxbgcolor: this._color || "black", boxfgcolor: "white", boxmessage: "Downloading JmolApplet ...", script: this._color ? 'background "' + this._color + '"' : "", code: "JmolApplet.class"
		}; a._setAppletParams(this._availableParams, h, j); var m; j.inlineModel ? (m = j.inlineModel, m = m.replace(/\r|\n|\r\n/g, 0 <= m.indexOf("|") ? "\\/n" : "|").replace(/'/g, "&#39;"), a._debugAlert && alert("inline model:\n" + m)) : m = ""; h.loadInline = m; h.appletReadyCallback = "Jmol._readyCallback"; a._syncedApplets.length &&
			(h.synccallback = "Jmol._mySyncCallback"); h.java_arguments = "-Xmx" + Math.round(j.memoryLimit || this._memoryLimit) + "m"; this._initialize(j.jarPath, j.jarFile); l._createApplet(this, j, h)
	}; h._restoreState = function (e, j) {
		System.out.println("\n\nasynchronous restore state for " + e + " " + j); var h = this, l = h._applet && h._applet.viewer; switch (j) {
			case "setOptions": return function () { h.__startAppletJS(h) }; case "render": return function () { setTimeout(function () { l.refresh(2) }, 10) }; default: switch (e) { case "J.shape.Balls": case "J.shape.Sticks": case "J.shape.Frank": return null }if (l &&
				l.isScriptExecuting && l.isScriptExecuting()) { if (a._asyncCallbacks[e]) return System.out.println("...ignored"), 1; var m = l.getEvalContextAndHoldQueue(l.eval), b = m.pc - 1; m.asyncID = e; a._asyncCallbacks[e] = function (a) { m.pc = a; System.out.println("sc.asyncID=" + m.asyncID + " sc.pc = " + m.pc); l.eval.resumeEval(m) }; l.eval.pc = l.eval.pcEnd; System.out.println("setting resume for pc=" + m.pc + " " + e + " to " + a._asyncCallbacks[e] + "//"); return function () { System.out.println("resuming " + e + " " + a._asyncCallbacks[e]); a._asyncCallbacks[e](b) } } System.out.println(e +
					"?????????????????????" + j); return function () { setTimeout(function () { l.refresh(2) }, 10) }
		}
	}; h._notifyAudioEnded = function (a) { this._applet.notifyAudioEnded(a) }; h._readyCallback = function (e, j, h) {
		if (h) {
			a._setDestroy(this); this._ready = !0; e = this._readyScript; this._defaultModel ? a._search(this, this._defaultModel, e ? ";" + e : "") : e ? this._script(e) : this._src && this._script('load "' + this._src + '"'); this._showInfo(!0); this._showInfo(!1); a.Cache.setDragDrop(this, "appletdiv"); this._readyFunction && this._readyFunction(this);
			a._setReady(this); if ((e = this._2dapplet) && e._isEmbedded && e._ready && e.__Info.visible) this._show2d(!0), this._show2d(!1), this._show2d(!0); a._hideLoadingSpinner(this)
		}
	}; h._showInfo = function (e) {
		e && this._2dapplet && this._2dapplet._show(!1); a.$html(a.$(this, "infoheaderspan"), this._infoHeader); this._info && a.$html(a.$(this, "infodiv"), this._info); if (!this._isInfoVisible != !e) {
			this._isInfoVisible = e; if (this._isJava) { var j = e ? 2 : "100%"; a.$setSize(a.$(this, "appletdiv"), j, j) } a.$setVisible(a.$(this, "infotablediv"), e);
			a.$setVisible(a.$(this, "infoheaderdiv"), e); this._show(!e)
		}
	}; h._show2d = function (a) { this._2dapplet._show2d(a); this._2dapplet._isEmbedded && (this._showInfo(!1), this._show(!a), this._2dapplet.__showContainer(!0, !0)) }; h._getSpinner = function () { return this.__Info.appletLoadingImage || "https://chemapps.stolaf.edu/jmol/jsmol/j2s" + "/img/JSmol_spinner.gif" }; h._getAtomCorrelation = function (a, j) {
		var h = this._evaluate("{*}.count"); if (0 != h) {
			this._loadMolData(a, "atommap = compare({1.1} {2.1} 'MAP' " + (j ? "" : "'H'") + "); zap 2.1", !0); for (var l = this._evaluate("atommap"),
				m = [], b = [], c = 0; c < l.length; c++) { var d = l[c]; m[d[0] + 1] = d[1] - h + 1; b[d[1] - h + 1] = d[0] + 1 } return { fromJmol: m, toJmol: b }
		}
	}; h._show = function (e) { var j = !e ? 2 : "100%"; a.$setSize(a.$(this, "object"), j, j); this._isJava || a.$setVisible(a.$(this, "appletdiv"), e) }; h._clearConsole = function () { this._console == this._id + "_infodiv" && (this.info = ""); self.Clazz && (a._setConsoleDiv(this._console), Clazz.Console.clear()) }; h._addScript = function (a) {
		this._readyScript || (this.readyScript = ""); this._readyScript && (this._readyScript += ";"); this._readyScript +=
			a; return !0
	}; h._setCallback = function (a, j) { this._applet.setCallback(a, j) }; h._script = function (e) { if (!this._ready) return this._addScript(e); a._setConsoleDiv(this._console); a._hideLocalFileReader(this); this._applet.script(e) }; h._syncScript = function (a) { this._applet.syncScript(a) }; h._scriptCheck = function (a) { return this._ready && this._applet.scriptCheck(a) }; h._scriptWait = function (a, j) { var h = this._scriptWaitAsArray(a), l = ""; if (!j) for (var m = h.length; 0 <= --m;)for (var b = 0, c = h[m].length; b < c; b++)l += h[m][b] + "\n"; return l };
	h._scriptEcho = function (a) { a = this._scriptWaitAsArray(a); for (var h = "", l = a.length; 0 <= --l;)for (var m = a[l].length; 0 <= --m;)"scriptEcho" == a[l][m][1] && (h += a[l][m][3] + "\n"); return h.replace(/ \| /g, "\n") }; h._scriptMessage = function (a) { a = this._scriptWaitAsArray(a); for (var h = "", l = a.length; 0 <= --l;)for (var m = a[l].length; 0 <= --m;)"scriptStatus" == a[l][m][1] && (h += a[l][m][3] + "\n"); return h.replace(/ \| /g, "\n") }; h._scriptWaitOutput = function (a) { var h = ""; try { a && (h += this._applet.scriptWaitOutput(a)) } catch (l) { } return h };
	h._scriptWaitAsArray = function (e) { var h = ""; try { if (this._getStatus("scriptEcho,scriptMessage,scriptStatus,scriptError"), e && (h += this._applet.scriptWait(e), h = a._evalJSON(h, "jmolStatus"), "object" == typeof h)) return h } catch (l) { } return [[h]] }; h._getStatus = function (e) { return a._sortMessages(this._getPropertyAsArray("jmolStatus", e)) }; h._getPropertyAsArray = function (e, h) { return a._evalJSON(this._getPropertyAsJSON(e, h), e) }; h._getPropertyAsString = function (a, h) {
		void 0 == h && (h = ""); return this._applet.getPropertyAsString(a,
			h) + ""
	}; h._getPropertyAsJSON = function (a, h) { void 0 == h && (h = ""); try { return this._applet.getPropertyAsJSON(a, h) + "" } catch (l) { return "" } }; h._getPropertyAsJavaObject = function (a, h) { void 0 == h && (h = ""); return this._applet.getProperty(a, h) }; h._evaluate = function (a) { null != a || (a = ""); return this._getPropertyAsArray("variableInfo", a) }; h._evaluateDEPRECATED = function (a) {
		a = "" + this._getPropertyAsJavaObject("evaluate", a); var h = a.replace(/\-*\d+/, ""); if ("" == h && !isNaN(parseInt(a))) return parseInt(a); h = a.replace(/\-*\d*\.\d*/,
			""); return "" == h && !isNaN(parseFloat(a)) ? parseFloat(a) : a
	}; h._saveOrientation = function (a) { return this._savedOrientations[a] = this._getPropertyAsArray("orientationInfo", "info").moveTo }; h._restoreOrientation = function (a) { a = this._savedOrientations[a]; return !a || "" == a ? a.replace(/1\.0/, "0") : this._scriptWait(a) }; h._restoreOrientationDelayed = function (a, h) { 1 > arguments.length && (h = 1); var l = this._savedOrientations[a]; return !l || "" == l ? l.replace(/1\.0/, h) : this._scriptWait(l) }; h._resizeApplet = function (e) {
		function h(e,
			j) { var b = "" + e; return 0 == b.length ? j ? "" : a._allowedJmolSize[2] : b.indexOf("%") == b.length - 1 ? b : 1 >= (e = parseFloat(e)) && 0 < e ? 100 * e + "%" : (isNaN(e = Math.floor(e)) ? a._allowedJmolSize[2] : e < a._allowedJmolSize[0] ? a._allowedJmolSize[0] : e > a._allowedJmolSize[1] ? a._allowedJmolSize[1] : e) + (j ? j : "") } var l; "object" == typeof e && null != e ? (l = e[0] || e.width, e = e[1] || e.height) : l = e; l = [h(l, "px"), h(e, "px")]; e = a._getElement(this, "appletinfotablediv"); e.style.width = l[0]; e.style.height = l[1]; this._containerWidth = l[0]; this._containerHeight =
				l[1]; this._is2D && a.repaint(this, !0)
	}; h._search = function (e, h) { a._search(this, e, h) }; h._searchDatabase = function (e, h, l) { if (this._2dapplet && this._2dapplet._isEmbedded && !a.$(this, "appletdiv:visible")[0]) return this._2dapplet._searchDatabase(e, h, l); this._showInfo(!1); 0 <= e.indexOf("?") ? a._getInfoFromDatabase(this, h, e.split("?")[0]) : (l || (l = a._getScriptForDatabase(h)), e = h + e, this._currentView = null, this._searchQuery = e, this._loadFile(e, l, e)) }; h._loadFile = function (e, h, l) {
		this._showInfo(!1); h || (h = ""); this._thisJmolModel =
			"" + Math.random(); this._fileName = e; if (!this._scriptLoad(e, h)) { var m = this; a._loadFileData(this, e, function (a) { m.__loadModel(a, h, l) }, function () { m.__loadModel(null) }) }
	}; h._scriptLoad = function (a, h) { h || (h = ""); var l = this._isJava || !this._noscript; l && this._script("zap;set echo middle center;echo Retrieving data..."); if (!this._isSigned || null != this._viewSet) return !1; l ? this._script('load async "' + a + '";' + h) : this._applet.openFile(a); this._checkDeferred(""); return !0 }; h.__loadModel = function (e, h, l) {
		null != e && (null !=
			this._viewSet && (h || (h = ""), h += ";if ({*}.molecule.max > 1 || {*}.modelindex.max > 0){ delete molecule > 1 or modelindex > 0;x = getProperty('extractModel',{*});load inline @x};"), !h && this._noscript ? this._applet.loadInlineString(e, "", !1) : this._loadMolData(e, h, !1), null != this._viewSet && a.View.updateView(this, { chemID: l, data: e }))
	}; h._loadMolData = function (a, h, l) { h || (h = ""); l = l ? "append" : "model"; this._applet.scriptWait('load DATA "' + l + '"' + a + '\nEND "' + l + '" ;' + h) }; h._loadModelFromView = function (e) {
		this._currentView =
		e; var h = e.Jmol; null != h.data ? this.__loadModel(h.data, null, e.info.chemID) : null != e.info.chemID ? a._searchMol(this, e.info.chemID, null, !1) : (h = e.JME) && h.applet._show2d(!1, this)
	}; h._reset = function () { this._scriptWait("zap", !0) }; h._updateView = function () {
		null != this._viewSet && this._applet && (chemID = "" + this._getPropertyAsJavaObject("variableInfo", "script('show chemical inchiKey')"), chemID = 36 > chemID.length ? null : chemID.substring(36).split("\n")[0], a.View.updateView(this, {
			chemID: chemID, data: "" + this._getPropertyAsJavaObject("evaluate",
				"extractModel", "{visible}")
		}))
	}; h._atomPickedCallback = function (e, h) { if (!(0 > h)) { var l = [h + 1]; a.View.updateAtomPick(this, l); this._updateAtomPick(l) } }; h._updateAtomPick = function (a) { this._script(0 == a.length ? "select none" : "select on visible and (@" + a.join(",@") + ")") }; h._isDeferred = function () { return !this._canvas && this._cover && this._isCovered && this._deferApplet }; h._checkDeferred = function (a) { return this._isDeferred() ? (this._coverScript = a, this._cover(!1), !0) : !1 }; h._cover = function (e) {
		e || !this._deferApplet ? this._displayCoverImage(e) :
		(e = this._coverScript ? this._coverScript : "", this._coverScript = "", this._deferUncover && (e += ";refresh;javascript " + this._id + "._displayCoverImage(false)"), this._script(e, !0), this._deferUncover && "activate 3D model" == this._coverTitle && (a._getElement(this, "coverimage").title = "3D model is loading..."), this._isJava || this._newCanvas(!1), this._defaultModel && a._search(this, this._defaultModel), this._showInfo(!1), this._deferUncover || this._displayCoverImage(!1), this._isJava && a.$html(a.$(this, "appletdiv"), this._javaCode),
			this._init && this._init())
	}; h._displayCoverImage = function (e) { this._coverImage && this._isCovered != e && (this._isCovered = e, a._getElement(this, "coverdiv").style.display = e ? "block" : "none") }; h._getSmiles = function () { return this._evaluate("{visible}.find('SMILES')") }; h._getMol = function () { return this._evaluate("getProperty('ExtractModel',{visible})") }; h._getMol2D = function () { return this._evaluate("script('select visible;show chemical sdf')") }; a.jmolSmiles = function (a) { return a._getSmiles() }
})(Jmol, document);
(function (a) {
	var m = a.controls = { _hasResetForms: !1, _scripts: [""], _checkboxMasters: {}, _checkboxItems: {}, _actions: {}, _buttonCount: 0, _checkboxCount: 0, _radioGroupCount: 0, _radioCount: 0, _linkCount: 0, _cmdCount: 0, _menuCount: 0, _previousOnloadHandler: null, _control: null, _element: null, _appletCssClass: null, _appletCssText: "", _buttonCssClass: null, _buttonCssText: "", _checkboxCssClass: null, _checkboxCssText: "", _radioCssClass: null, _radioCssText: "", _linkCssClass: null, _linkCssText: "", _menuCssClass: null, _menuCssText: "" };
	m._addScript = function (a, h) { var e = m._scripts.length; m._scripts[e] = [a, h]; return e }; m._getIdForControl = function (a, h) { return "string" == typeof a ? a : !h || !a._canScript || a._canScript(h) ? a._id : null }; m._radio = function (a, h, e, j, t, s, u, b) {
		var c = m._getIdForControl(a, h); if (null == c) return null; ++m._radioCount; void 0 != s && null != s || (s = "jmolRadioGroup" + (m._radioGroupCount - 1)); if (!h) return ""; void 0 != u && null != u || (u = "jmolRadio" + (m._radioCount - 1)); void 0 != e && null != e || (e = h.substring(0, 32)); t || (t = ""); a = "</span>"; m._actions[u] =
			m._addScript(c, h); h = '<span id="span_' + u + '"' + (b ? ' title="' + b + '"' : "") + "><input name='" + s + "' id='" + u + "' type='radio' onclick='Jmol.controls._click(this);return true;' onmouseover='Jmol.controls._mouseOver(this);return true;' onmouseout='Jmol.controls._mouseOut()' " + (j ? "checked='true' " : "") + m._radioCssText + " />"; 0 <= e.toLowerCase().indexOf("<td>") && (h += a, a = ""); return h + ('<label for="' + u + '">' + e + "</label>" + a + t)
	}; m._scriptExecute = function (l, h) {
		var e = a._applets[h[0]], j = h[1]; if ("object" == typeof j) j[0](l, j,
			e); else "function" == typeof j ? j(e) : a.script(e, j)
	}; m.__checkScript = function (a, h) { var e = 0 <= h.value.indexOf("JSCONSOLE ") || "" === a._scriptCheck(h.value); h.style.color = e ? "black" : "red"; return e }; m.__getCmd = function (a, h) { if (h._cmds && h._cmds.length) { var e = h._cmds[h._cmdpt = (h._cmdpt + h._cmds.length + a) % h._cmds.length]; setTimeout(function () { h.value = e }, 10); h._cmdadd = 1; h._cmddir = a } }; m._commandKeyPress = function (l, h, e) {
		l = 13 == l ? 13 : window.event ? window.event.keyCode : l ? l.keyCode || l.which : 0; var j = document.getElementById(h),
			t = a._applets[e]; switch (l) { case 13: return h = j.value, m._scriptExecute(j, [e, h]), j._cmds || (j._cmds = [], j._cmddir = 0, j._cmdpt = -1, j._cmdadd = 0), h && 0 == j._cmdadd ? (++j._cmdpt, j._cmds.splice(j._cmdpt, 0, h), j._cmdadd = 0, j._cmddir = 0) : j._cmdadd = 0, j.value = "", !1; case 27: return setTimeout(function () { j.value = "" }, 20), !1; case 38: m.__getCmd(-1, j); break; case 40: m.__getCmd(1, j); break; default: j._cmdadd = 0 }setTimeout(function () { m.__checkScript(t, j) }, 20); return !0
	}; m._click = function (a, h) {
		m._element = a; 1 == arguments.length && (h = m._actions[a.id]);
		m._scriptExecute(a, m._scripts[h])
	}; m._menuSelected = function (a) { var h = a.value; if (void 0 != h) m._scriptExecute(a, m._scripts[h]); else { h = a.length; if ("number" == typeof h) for (var e = 0; e < h; ++e)if (a[e].selected) { m._click(a[e], a[e].value); return } alert("?Que? menu selected bug #8734") } }; m._cbNotifyMaster = function (a) {
		var h = !0, e = !0, j = !1, t, s; for (s in a.chkGroup) t = a.chkGroup[s], t.checked ? e = !1 : h = !1, t.indeterminate && (j = !0); t = a.chkMaster; h ? t.checked = !0 : e ? t.checked = !1 : j = !0; t.indeterminate = j; (a = m._checkboxItems[t.id]) &&
			(t = a.chkMaster) && m._cbNotifyMaster(m._checkboxMasters[t.id])
	}; m._cbNotifyGroup = function (a, h) { for (var e in a.chkGroup) { var j = a.chkGroup[e]; j.checked != h && (j.checked = h, m._cbClick(j)); m._checkboxMasters[j.id] && m._cbNotifyGroup(m._checkboxMasters[j.id], h) } }; m._cbSetCheckboxGroup = function (a, h, e) {
		var j = a; "number" == typeof j && (j = "jmolCheckbox" + j); (a = document.getElementById(j)) || alert("jmolSetCheckboxGroup: master checkbox not found: " + j); var t = m._checkboxMasters[j] = {}; t.chkMaster = a; t.chkGroup = {}; "string" ==
			typeof h ? (h = e, j = 1) : j = 0; for (a = j; a < h.length; a++)j = h[a], "number" == typeof j && (j = "jmolCheckbox" + j), (e = document.getElementById(j)) || alert("jmolSetCheckboxGroup: group checkbox not found: " + j), t.chkGroup[j] = e, m._checkboxItems[j] = t
	}; m._cbClick = function (a) { m._control = a; var h = m._actions[a.id][0], e = m._actions[a.id][1]; m._click(a, a.checked ? h : e); m._checkboxMasters[a.id] && m._cbNotifyGroup(m._checkboxMasters[a.id], a.checked); m._checkboxItems[a.id] && m._cbNotifyMaster(m._checkboxItems[a.id]) }; m._cbOver = function (a) {
		var h =
			m._actions[a.id][0], e = m._actions[a.id][1]; window.status = m._scripts[a.checked ? e : h]
	}; m._mouseOver = function (a, h) { 1 == arguments.length && (h = m._actions[a.id]); window.status = m._scripts[h] }; m._mouseOut = function () { window.status = " "; return !0 }; m._onloadResetForms = function () {
		m._hasResetForms || (m._hasResetForms = !0, m._previousOnloadHandler = window.onload, window.onload = function () {
			if (0 < m._buttonCount + m._checkboxCount + m._menuCount + m._radioCount + m._radioGroupCount) for (var a = document.forms, h = a.length; 0 <= --h;)a[h].reset();
			m._previousOnloadHandler && m._previousOnloadHandler()
		})
	}; m._getButton = function (l, h, e, j, t) {
		l = m._getIdForControl(l, h); if (null == l) return ""; void 0 != j && null != j || (j = "jmolButton" + m._buttonCount); void 0 != e && null != e || (e = h.substring(0, 32)); ++m._buttonCount; m._actions[j] = m._addScript(l, h); h = '<span id="span_' + j + '"' + (t ? ' title="' + t + '"' : "") + "><input type='button' name='" + j + "' id='" + j + "' value='" + e + "' onclick='Jmol.controls._click(this)' onmouseover='Jmol.controls._mouseOver(this);return true' onmouseout='Jmol.controls._mouseOut()' " +
			m._buttonCssText + " /></span>"; a._debugAlert && alert(h); return a._documentWrite(h)
	}; m._getCheckbox = function (l, h, e, j, t, s, u) {
		var b = m._getIdForControl(l, h); null != b && (b = m._getIdForControl(l, e)); if (null == b) return ""; void 0 != s && null != s || (s = "jmolCheckbox" + m._checkboxCount); ++m._checkboxCount; if (void 0 == h || null == h || void 0 == e || null == e) alert("jmolCheckbox requires two scripts"); else if (void 0 == j || null == j) alert("jmolCheckbox requires a label"); else return m._actions[s] = [m._addScript(b, h), m._addScript(b, e)], l = "</span>",
			t = '<span id="span_' + s + '"' + (u ? ' title="' + u + '"' : "") + "><input type='checkbox' name='" + s + "' id='" + s + "' onclick='Jmol.controls._cbClick(this)' onmouseover='Jmol.controls._cbOver(this);return true' onmouseout='Jmol.controls._mouseOut()' " + (t ? "checked='true' " : "") + m._checkboxCssText + " />", 0 <= j.toLowerCase().indexOf("<td>") && (t += l, l = ""), t += '<label for="' + s + '">' + j + "</label>" + l, a._debugAlert && alert(t), a._documentWrite(t)
	}; m._getCommandInput = function (l, h, e, j, t, s) {
		l = m._getIdForControl(l, "x"); if (null == l) return "";
		void 0 != j && null != j || (j = "jmolCmd" + m._cmdCount); void 0 != h && null != h || (h = "Execute"); void 0 != e && !isNaN(e) || (e = 60); void 0 != s || (s = "help"); ++m._cmdCount; h = '<span id="span_' + j + '"' + (t ? ' title="' + t + '"' : "") + "><input name='" + j + "' id='" + j + "' size='" + e + "' onkeydown='return Jmol.controls._commandKeyPress(event,\"" + j + '","' + l + "\")' value='" + s + "'/><input  type='button' name='" + j + "Btn' id='" + j + "Btn' value = '" + h + "' onclick='Jmol.controls._commandKeyPress(13,\"" + j + '","' + l + "\")' /></span>"; a._debugAlert && alert(h); return a._documentWrite(h)
	};
	m._getLink = function (l, h, e, j, t) { l = m._getIdForControl(l, h); if (null == l) return ""; void 0 != j && null != j || (j = "jmolLink" + m._linkCount); void 0 != e && null != e || (e = h.substring(0, 32)); ++m._linkCount; h = m._addScript(l, h); e = '<span id="span_' + j + '"' + (t ? ' title="' + t + '"' : "") + "><a name='" + j + "' id='" + j + "' href='javascript:Jmol.controls._click(null," + h + ");' onmouseover='Jmol.controls._mouseOver(null," + h + ");return true;' onmouseout='Jmol.controls._mouseOut()' " + m._linkCssText + ">" + e + "</a></span>"; a._debugAlert && alert(e); return a._documentWrite(e) };
	m._getMenu = function (l, h, e, j, t) {
		var s = m._getIdForControl(l, null); void 0 != j && null != j || (j = "jmolMenu" + m._menuCount); ++m._menuCount; s = typeof h; if (null != s && "object" == s && h.length) {
			var u = h.length; "number" != typeof e || 1 == e ? e = null : 0 > e && (e = u); e = '<span id="span_' + j + '"' + (t ? ' title="' + t + '"' : "") + "><select name='" + j + "' id='" + j + "' onChange='Jmol.controls._menuSelected(this)'" + (e ? " size='" + e + "' " : "") + m._menuCssText + ">"; for (j = 0; j < u; ++j) {
				var b = h[j], s = typeof b, c = null, d = t = null; "object" == s && null != b ? (c = b[0], t = b[1], d = b[2]) :
					c = t = b; s = m._getIdForControl(l, c); if (null == s) return ""; null == t && (t = c); "#optgroup" == c ? e += "<optgroup label='" + t + "'>" : "#optgroupEnd" == c ? e += "</optgroup>" : (s = m._addScript(s, c), e += "<option value='" + s + (d ? "' selected='true'>" : "'>") + t + "</option>")
			} e += "</select></span>"; a._debugAlert && alert(e); return a._documentWrite(e)
		}
	}; m._getRadio = function (l, h, e, j, t, s, u, b) {
		0 == m._radioGroupCount && ++m._radioGroupCount; s || (s = "jmolRadioGroup" + (m._radioGroupCount - 1)); l = m._radio(l, h, e, j, t, s, u ? u : s + "_" + m._radioCount, b ? b : 0); if (null ==
			l) return ""; a._debugAlert && alert(l); return a._documentWrite(l)
	}; m._getRadioGroup = function (l, h, e, j, t, s) {
		var u = typeof h; if ("object" != u || null == u || !h.length) alert("invalid arrayOfRadioButtons"); else {
			void 0 != e && null != e || (e = "&#xa0; "); var b = h.length; ++m._radioGroupCount; j || (j = "jmolRadioGroup" + (m._radioGroupCount - 1)); for (var c = "<span id='" + (t ? t : j) + "'>", d = 0; d < b; ++d) {
				d == b - 1 && (e = ""); var q = h[d], u = typeof q, K = null, c = "object" == u ? c + (K = m._radio(l, q[0], q[1], q[2], e, j, 3 < q.length ? q[3] : (t ? t : j) + "_" + d, 4 < q.length ? q[4] : 0,
					s)) : c + (K = m._radio(l, q, null, null, e, j, (t ? t : j) + "_" + d, s)); if (null == K) return ""
			} c += "</span>"; a._debugAlert && alert(c); return a._documentWrite(c)
		}
	}
})(Jmol);
(function (a) {
	var m = function (a) { a = "&" + a + "="; return decodeURI(("&" + document.location.search.substring(1) + a).split(a)[1].split("&")[0]) }; a._j2sPath = m("_J2S"); a._jarFile = m("_JAR"); a._use = m("_USE"); a.getVersion = function () { return a._jmolInfo.version }; a.getApplet = function (l, h, e) { return a._Applet._get(l, h, e) }; a.getJMEApplet = function (l, h, e, j) { return a._JMEApplet._get(l, h, e, j) }; a.getJSVApplet = function (l, h, e) { return a._JSVApplet._get(l, h, e) }; a.setCallback = function (a, h, e) { a._setCallback(h, e) }; a.loadFile = function (a,
		h, e) { a._loadFile(h, e) }; a.script = function (a, h) { a._checkDeferred(h) || a._script(h) }; a.scriptCheck = function (a, h) { return a && a._scriptCheck && a._ready && a._scriptCheck(h) }; a.scriptWait = function (a, h) { return a._scriptWait(h) }; a.scriptEcho = function (a, h) { return a._scriptEcho(h) }; a.scriptMessage = function (a, h) { return a._scriptMessage(h) }; a.scriptWaitOutput = function (a, h) { return a._scriptWait(h) }; a.scriptWaitAsArray = function (a, h) { return a._scriptWaitAsArray(h) }; a.search = function (a, h, e) { a._search(h, e) }; a.evaluateVar =
			function (a, h) { return a._evaluate(h) }; a.evaluate = function (a, h) { return a._evaluateDEPRECATED(h) }; a.getAppletHtml = function (l, h) { if (h) { var e = a._document; a._document = null; l = a.getApplet(l, h); a._document = e } return l._code }; a.getPropertyAsArray = function (a, h, e) { return a._getPropertyAsArray(h, e) }; a.getPropertyAsJavaObject = function (a, h, e) { return a._getPropertyAsJavaObject(h, e) }; a.getPropertyAsJSON = function (a, h, e) { return a._getPropertyAsJSON(h, e) }; a.getPropertyAsString = function (a, h, e) {
				return a._getPropertyAsString(h,
					e)
			}; a.getStatus = function (a, h) { return a._getStatus(h) }; a.resizeApplet = function (a, h) { return a._resizeApplet(h) }; a.restoreOrientation = function (a, h) { return a._restoreOrientation(h) }; a.restoreOrientationDelayed = function (a, h, e) { return a._restoreOrientationDelayed(h, e) }; a.saveOrientation = function (a, h) { return a._saveOrientation(h) }; a.say = function (a) { alert(a) }; a.clearConsole = function (a) { a._clearConsole() }; a.getInfo = function (a) { return a._info }; a.setInfo = function (a, h, e) { a._info = h; 2 < arguments.length && a._showInfo(e) };
	a.showInfo = function (a, h) { a._showInfo(h) }; a.show2d = function (a, h) { a._show2d(h) }; a.jmolBr = function () { return a._documentWrite("<br>") }; a.jmolButton = function (l, h, e, j, m) { return a.controls._getButton(l, h, e, j, m) }; a.jmolCheckbox = function (l, h, e, j, m, s, u) { return a.controls._getCheckbox(l, h, e, j, m, s, u) }; a.jmolCommandInput = function (l, h, e, j, m, s) { return a.controls._getCommandInput(l, h, e, j, m, s) }; a.jmolHtml = function (l) { return a._documentWrite(l) }; a.jmolLink = function (l, h, e, j, m) { return a.controls._getLink(l, h, e, j, m) };
	a.jmolMenu = function (l, h, e, j, m) { return a.controls._getMenu(l, h, e, j, m) }; a.jmolRadio = function (l, h, e, j, m, s, u, b) { return a.controls._getRadio(l, h, e, j, m, s, u, b) }; a.jmolRadioGroup = function (l, h, e, j, m, s) { return a.controls._getRadioGroup(l, h, e, j, m, s) }; a.setCheckboxGroup = function (l, h) { a.controls._cbSetCheckboxGroup(l, h, arguments) }; a.setDocument = function (l) { a._document = l }; a.setXHTML = function (l) {
		a._isXHTML = !0; a._XhtmlElement = null; a._XhtmlAppendChild = !1; l && (a._XhtmlElement = document.getElementById(l), a._XhtmlAppendChild =
			!0)
	}; a.setAppletCss = function (l, h) { null != l && (a._appletCssClass = l); a._appletCssText = h ? h + " " : l ? 'class="' + l + '" ' : "" }; a.setButtonCss = function (l, h) { null != l && (a.controls._buttonCssClass = l); a.controls._buttonCssText = h ? h + " " : l ? 'class="' + l + '" ' : "" }; a.setCheckboxCss = function (l, h) { null != l && (a.controls._checkboxCssClass = l); a.controls._checkboxCssText = h ? h + " " : l ? 'class="' + l + '" ' : "" }; a.setRadioCss = function (l, h) { null != l && (a.controls._radioCssClass = l); a.controls._radioCssText = h ? h + " " : l ? 'class="' + l + '" ' : "" }; a.setLinkCss =
		function (l, h) { null != l && (a.controls._linkCssClass = l); a.controls._linkCssText = h ? h + " " : l ? 'class="' + l + '" ' : "" }; a.setMenuCss = function (l, h) { null != l && (a.controls._menuCssClass = l); a.controls._menuCssText = h ? h + " " : l ? 'class="' + l + '" ' : "" }; a.setAppletSync = function (l, h, e) { a._syncedApplets = l; a._syncedCommands = h; a._syncedReady = {}; a._isJmolJSVSync = e }; a.setGrabberOptions = function (l) { a._grabberOptions = l }; a.setAppletHtml = function (l, h) { l._code && (a.$html(h, l._code), l._init && !l._deferApplet && l._init()) }; a.coverApplet = function (a,
			h) { a._cover && a._cover(h) }; a.setFileCaching = function (l, h) { l ? l._cacheFiles = h : a.fileCache = h ? {} : null }; a.resetView = function (l, h) { a.View.resetView(l, h) }; a.updateView = function (a, h, e) { a._updateView(h, e) }; a.getChemicalInfo = function (l, h, e) { h || (h = "name"); "string" != typeof l && (l = l._getSmiles()); return a._getNCIInfo(l, h, e) }; a.saveImage = function (l, h, e) {
				h = (h || "png").toLowerCase(); e || (e = l.id + "." + h.toLowerCase()); 0 > e.indexOf(".") && (e += "." + h); switch (l._viewType) {
					case "Jmol": return l._script('write PNGJ "' + e + '"'); case "JSV": if ("PDF" ==
						h) return l._script("write PDF"); break; case "JME": return l._script("print")
				}a._saveFile(e, l._canvas.toDataURL("image/png"))
			}
})(Jmol);
LoadClazz = function () {
	TypeError.prototype.printStackTrace = ReferenceError.prototype.printStackTrace = function () { console.log(this) }; c$ = null; window["j2s.clazzloaded"] || (window["j2s.clazzloaded"] = !1); window["j2s.clazzloaded"] || (window["j2s.clazzloaded"] = !0, window["j2s.object.native"] = !0, Clazz = { _isQuiet: !1, _debugging: !1 }, function (a, m) {
		try { a._debugging = 0 <= document.location.href.indexOf("j2sdebug") } catch (l) { } var h = ["j2s.clazzloaded", "j2s.object.native"]; a.setGlobal = function (a, b) { h.push(a); window[a] = b }; a.getGlobals =
			function () { return h.sort().join("\n") }; a.setConsoleDiv = function (a) { window["j2s.lib"] && (window["j2s.lib"].console = a) }; var e = null; a._startProfiling = function (a) { e = a && self.JSON ? {} : null }; NullObject = function () { }; a._supportsNativeObject = window["j2s.object.native"]; a._supportsNativeObject ? (a._O = function () { }, a._O.__CLASS_NAME__ = "Object", a._O.getClass = function () { return a._O }) : a._O = Object; a.Console = {}; a.dateToString = Date.prototype.toString; a._hashCode = 0; var j = a._O.prototype; j.equals = function (a) {
				return this ==
					a
			}; j.hashCode = function () { return this._$hashcode || (this._$hashcode = ++a._hashCode) }; j.getClass = function () { return a.getClass(this) }; j.clone = function () { return a.clone(this) }; a.clone = function (a) { var b = a instanceof Array ? Array(a.length) : new a.constructor, c; for (c in a) b[c] = a[c]; return b }; j.finalize = function () { }; j.notify = function () { }; j.notifyAll = function () { }; j.wait = function () { }; j.to$tring = Object.prototype.toString; j.toString = function () {
				return this.__CLASS_NAME__ ? "[" + this.__CLASS_NAME__ + " object]" : this.to$tring.apply(this,
					arguments)
			}; a._extendedObjectMethods = "equals hashCode getClass clone finalize notify notifyAll wait to$tring toString".split(" "); a.extendJO = function (b, c) { c && (b.__CLASS_NAME__ = b.prototype.__CLASS_NAME__ = c); if (a._supportsNativeObject) for (var d = 0; d < a._extendedObjectMethods.length; d++) { var e = a._extendedObjectMethods[d]; b.prototype[e] = a._O.prototype[e] } }; a.extractClassName = function (a) { a = a.substring(1, a.length - 1); return 0 <= a.indexOf("Array") ? "Array" : 0 <= a.indexOf("object ") ? a.substring(7) : a }; a.getClassName =
				function (b, c) {
					if (null == b) return "NullObject"; if (b instanceof a.CastedNull) return b.clazzName; switch (typeof b) {
						case "number": return "n"; case "boolean": return "b"; case "string": return "String"; case "function": if (b.__CLASS_NAME__) return c ? b.__CLASS_NAME__ : "Class"; var d = b.toString(), e = d.indexOf("function"); if (0 > e) return "[" == d.charAt(0) ? a.extractClassName(d) : d.replace(/[^a-zA-Z0-9]/g, ""); var e = e + 8, h = d.indexOf("(", e); if (0 > h) break; d = d.substring(e, h); if (0 <= d.indexOf("Array")) return "Array"; d = d.replace(/^\s+/,
							"").replace(/\s+$/, ""); return "anonymous" == d || "" == d ? "Function" : d; case "object": if (b.__CLASS_NAME__) return b.__CLASS_NAME__; if (!b.constructor) break; if (!b.constructor.__CLASS_NAME__) { if (b instanceof Number) return "Number"; if (b instanceof Boolean) return "Boolean"; if (b instanceof Array || b.BYTES_PER_ELEMENT) return "Array"; d = b.toString(); if ("[" == d.charAt(0)) return a.extractClassName(d) } return a.getClassName(b.constructor, !0)
					}return "Object"
				}; a.getClass = function (b) {
					if (!b) return a._O; if ("function" == typeof b) return b;
					if (b instanceof a.CastedNull) b = b.clazzName; else switch (typeof b) { case "string": return String; case "object": if (!b.__CLASS_NAME__) return b.constructor || a._O; b = b.__CLASS_NAME__; break; default: return b.constructor }return a.evalType(b, !0)
				}; var t = function (b, c) { for (var d = 0; d < a.innerFunctionNames.length; d++)if (c == a.innerFunctionNames[d] && a._innerFunctions[c] === b[c]) return !0; return !1 }, s = function () { }; a.inheritArgs = new s; a.inheritClass = function (b, c, d) {
					for (var e in c) "b$" != e && ("prototype" != e && "superClazz" != e &&
						"__CLASS_NAME__" != e && "implementz" != e && !t(c, e)) && (b[e] = c[e]); a.unloadedClasses[a.getClassName(b, !0)] || (b.prototype = d ? d : c !== Number ? new c(a.inheritArgs) : new Number); b.superClazz = c; b.prototype.__CLASS_NAME__ = b.__CLASS_NAME__
				}; a.implementOf = function (a, b) {
					if (2 <= arguments.length) {
						a.implementz || (a.implementz = []); var c = a.implementz; if (2 == arguments.length) if ("function" == typeof b) c.push(b), u(a, b); else { if (b instanceof Array) for (var d = 0; d < b.length; d++)c.push(b[d]), u(a, b[d]) } else for (d = 1; d < arguments.length; d++)c.push(arguments[d]),
							u(a, arguments[d])
					}
				}; var u = function (a, b) { for (var c in b) if ("b$" != c && "prototype" != c && "superClazz" != c && "__CLASS_NAME__" != c && "implementz" != c && ("function" != typeof b[c] || !t(b, c))) a[c] = a.prototype[c] = b[c] }; a.extendInterface = a.implementOf; a.equalsOrExtendsLevel = function (b, c) { if (b === c) return 0; if (b.implementz) for (var d = b.implementz, e = 0; e < d.length; e++) { var h = a.equalsOrExtendsLevel(d[e], c); if (0 <= h) return h + 1 } return -1 }; a.getInheritedLevel = function (b, c) {
					if (b === c) return 0; var d = "string" == typeof b; if (d && ("void" ==
						b || "unknown" == b)) return -1; var e = "string" == typeof c; if (e && ("void" == c || "unknown" == c)) return -1; if (b === (d ? "NullObject" : NullObject)) switch (c) { case "n": case "b": return -1; case Number: case Boolean: case NullObject: break; default: return 0 }d && (b = a.evalType(b)); e && (c = a.evalType(c)); if (!c || !b) return -1; d = 0; for (e = b; e !== c && 10 > d;) { if (e.implementz) for (var h = e.implementz, j = 0; j < h.length; j++) { var l = a.equalsOrExtendsLevel(h[j], c); if (0 <= l) return d + l + 1 } e = e.superClazz; if (!e) return c === Object || c === a._O ? d + 1.5 : -1; d++ } return d
				};
		a.instanceOf = function (b, c) { return null != b && c && (b == c || b instanceof c || 0 <= a.getInheritedLevel(a.getClassName(b), c)) }; a.superCall = function (b, c, d, e) {
			var h = null, j = -1, l = b[d]; if (l) if (l.claxxOwner) l.claxxOwner !== c && (h = l); else if (!l.stacks && (!l.lastClaxxRef || !l.lastClaxxRef.prototype[d] || !l.lastClaxxRef.prototype[d].stacks)) h = l; else {
				var m = l.stacks; m || (m = l.lastClaxxRef.prototype[d].stacks); for (j = m.length; 0 <= --j;)if (c === m[j]) { h = 0 < j ? m[--j].prototype[d] : m[0].prototype[d]["\\unknown"]; break } else if (0 < a.getInheritedLevel(c,
					m[j])) { h = m[j].prototype[d]; break }
			} if (h) return 0 == j && "construct" == d && (c = l.stacks) && (!c[0].superClazz && c[0].con$truct) && c[0].con$truct.apply(b, []), h.apply(b, e || []); "construct" != d && (a.alert(["j2slib", "no class found", e.typeString]), fb(b, c, d, a.getParamsType(e).typeString))
		}; a.superConstructor = function (b, c, d) { a.superCall(b, c, "construct", d); c.con$truct && c.con$truct.apply(b, []) }; a.CastedNull = function (b) {
			this.clazzName = b ? b instanceof String ? b : b instanceof Function ? a.getClassName(b, !0) : "" + b : "Object"; this.toString =
				function () { return null }; this.valueOf = function () { return null }
		}; a.castNullAs = function (b) { return new a.CastedNull(b) }; a._initializingException = !1; a._callingStackTraces = []; var b = function () { this.toString = function () { return "J2S MethodException" } }, c; try { null.hello() } catch (d) {
			if (j = function (a, b, c) { c || (c = "[^\\s]+"); var d = a.indexOf(b); a = a.substring(0, d) + c + a.substring(d + b.length); return RegExp("^" + a + "$") }, /Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
				var j = d.message.indexOf(":"), q = d.message.indexOf(":", j +
					2), K = d.message.substr(j + 1, q - j - 20); c = function (a) { return -1 != a.message.indexOf(K) }
			} else if (-1 != navigator.userAgent.toLowerCase().indexOf("webkit")) { var U = j(d.message, "hello"); c = function (a) { return U.test(a.message) } } else U = j(d.message, "$$o$$"), c = function (a) { return U.test(a.message) }
		} a.exceptionOf = function (b, d) {
			if (b.__CLASS_NAME__) return a.instanceOf(b, d); b.getMessage || (b.getMessage = function () { return "" + b + (b.stack ? "\n" + b.stack : "") }); b.printStackTrace || (b.printStackTrace = function () { }); if (d == Error) {
				if (0 >
					("" + b).indexOf("Error")) return !1; System.out.println(a.getStackTrace()); return !0
			} return d == Exception || d == Throwable || d == NullPointerException && c(b)
		}; a.getStackTrace = function (a) {
			a || (a = 25); var b = "\n", c = arguments.callee, d = 0 > a; d && (a = -a); try {
				for (var e = 0; e < a && (c = c.caller); e++) {
					var h = c.toString ? c.toString().substring(0, c.toString().indexOf("{")) : "<native method>", b = b + (e + " " + (c.exName ? (c.claxxOwner ? c.claxxOwner.__CLASS_NAME__ + "." : "") + c.exName + h.replace(/function /, "") : h) + "\n"); if (c == c.caller) {
						b += "<recursing>\n";
						break
					} if (d) for (var j = c.arguments, l = 0; l < j.length; l++) { var m = "" + j[l]; 60 < m.length && (m = m.substring(0, 60) + "..."); b += " args[" + l + "]=" + m.replace(/\s+/g, " ") + "\n" }
				}
			} catch (s) { } return b
		}; a.makeConstructor = function (b, c, d) { a.defineMethod(b, "construct", c, d); b.con$truct && (b.con$truct.index = b.con$truct.stacks.length) }; a.overrideConstructor = function (b, c, d) { a.overrideMethod(b, "construct", c, d); b.con$truct && (b.con$truct.index = b.con$truct.stacks.length) }; a.defineMethod = function (c, d, h, j) {
			h.exName = d; j = Ca(j); var l = c.prototype,
				m = l[d]; a._Loader._checkLoad && C(c, d, j); if (!m || m.claxxOwner === c && m.funParams == j) return h.funParams = j, h.claxxOwner = c, h.exClazz = c, l[d] = h; var s = null, q = m.stacks; q || (q = [], s = m, m.claxxOwner && (q[0] = s.claxxOwner)); if (!m.stacks || m.claxxReference !== c) {
					++O; m = function () {
						var c; a: {
							var d = arguments.callee.claxxReference, k = arguments.callee.methodName; c = arguments; fx = this[k]; var h = a.getParamsType(c); if (!fx) try { System.out.println(a.getStackTrace(5)) } catch (n) { } if (e) {
								var j = d.__CLASS_NAME__ + " " + k + " "; 0 > V.indexOf(j) && (V += j +
									"\n"); e[j] || (e[j] = 0); e[j]++
							} if (fx.lastParams == h.typeString && fx.lastClaxxRef === d) { if (h.hasCastedNull) { d = []; for (k = 0; k < c.length; k++)d[k] = c[k] instanceof a.CastedNull ? null : c[k] } else d = c; c = fx.lastMethod ? fx.lastMethod.apply(this, d) : null } else {
								fx.lastParams = h.typeString; fx.lastClaxxRef = d; j = fx.stacks; j || (j = d.prototype[k].stacks); for (var r = !1, l = j.length; 0 <= --l;)if (r || j[l] === d) {
									var m = j[l].prototype[k], z = h, r = c, s = fx, q = [], t = !0, E = void 0; for (E in m) if (92 == E.charCodeAt(0)) {
										var u = E.substring(1).split("\\"); u.length ==
											z.length && q.push(u); t = !1
									} else if (t && "funParams" == E && m.funParams) { E = m.funParams; u = E.substring(1).split("\\"); u.length == z.length && (q[0] = u); break } E = void 0; if (!(E = 0 == q.length)) {
										E = void 0; for (var E = [], N = q.length, u = 0; u < N; u++) { for (var x = [], xa = !0, C = q[u].length, B = 0; B < C; B++)if (x[B] = a.getInheritedLevel(z[B], q[u][B]), 0 > x[B]) { xa = !1; break } xa && (x[z.length] = u, E.push(x)) } if (0 == E.length) E = null; else { N = E[0]; for (u = 1; u < E.length; u++) { x = !0; for (B = 0; B < z.length; B++)if (N[B] < E[u][B]) { x = !1; break } x && (N = E[u]) } E = q[N[z.length]].join("\\") } E =
											!(q = E)
									} if (E) r = new b; else { m = t ? m : m["\\" + q]; t = null; if (z.hasCastedNull) { t = []; for (z = 0; z < r.length; z++)t[z] = r[z] instanceof a.CastedNull ? null : r[z] } else t = r; s.lastMethod = m; r = m.apply(this, t) } if (!(r instanceof b)) { c = r; break a } r = !0
								} "construct" != k && fb(this, d, k, h.typeString); c = void 0
							}
						} return c
					}; m.methodName = d; m.claxxReference = c; m = l[d] = m; d = []; for (l = 0; l < q.length; l++)d[l] = q[l]; m.stacks = d
				} q = m.stacks; 0 > rb(q, c) && q.push(c); s && (s.claxxOwner === c ? (m[s.funParams] = s, s.claxxOwner = null, s.funParams = null) : s.claxxOwner || (m["\\unknown"] =
					s)); h.exClazz = c; m[j] = h; return m
		}; duplicatedMethods = {}; var C = function (b, c, d) { var e = b.prototype[c]; if (e && (e.claxxOwner || e.claxxReference) === b) key = b.__CLASS_NAME__ + "." + c + d, (b = duplicatedMethods[key]) ? (c = "Warning! Duplicate method found for " + key, System.out.println(c), a.alert(c), duplicatedMethods[key] = b + 1) : duplicatedMethods[key] = 1 }; a.showDuplicates = function (a) { var b = "", c = duplicatedMethods, d = 0, e; for (e in c) 1 < c[e] && (b += c[e] + "\t" + e + "\n", d++); b = "Duplicates: " + d + "\n\n" + b; System.out.println(b); a || alert(b) };
		var rb = function (a, b) { if (a && b) for (var c = a.length; 0 <= --c;)if (a[c] === b) return c; return -1 }, Ya = function (a, b) { var c = rb(a, b); if (0 <= c) { for (var d = a.length - 1; c < d; c++)a[c] = a[c + 1]; a.length--; return !0 } }, Ca = function (a) { return a ? a.replace(/~([NABSO])/g, function (a, b) { switch (b) { case "N": return "n"; case "B": return "b"; case "S": return "String"; case "O": return "Object"; case "A": return "Array" }return "Unknown" }).replace(/\s+/g, "").replace(/^|,/g, "\\").replace(/\$/g, "org.eclipse.s") : "\\void" }; a.overrideMethod = function (b, c, d,
			e) { d.exName = c; e = Ca(e); a._Loader._checkLoad && C(b, c, e); d.funParams = e; d.claxxOwner = b; return b.prototype[c] = d }; var V = ""; a.getProfile = function () { var a = ""; if (e) { var a = [], b; for (b in e) { var c = "" + e[b]; a.push("        ".substring(c.length) + c + "\t" + b) } a = a.sort().reverse().join("\r\n"); e = {} } return a }; a.getParamsType = function (b) {
				var c = b.length; switch (c) {
					case 0: var d = ["void"]; d.typeString = "\\void"; return d; case 1: switch (typeof obj) {
						case "number": return d = ["n"], d.typeString = "\\n", d; case "boolean": return d = ["b"],
							d.typeString = "\\b", d
					}
				}d = []; d.hasCastedNull = !1; if (b) for (var e = 0; e < c; e++)d[e] = a.getClassName(b[e]), b[e] instanceof a.CastedNull && (d.hasCastedNull = !0); d.typeString = "\\" + d.join("\\"); return d
			}; var O = 0; a.allPackage = {}; a.allClasses = {}; a.lastPackageName = null; a.lastPackage = null; a.unloadedClasses = []; a.declarePackage = function (b) {
				if (a.lastPackageName == b) return a.lastPackage; if (b && b.length) {
					for (var c = b.split(/\./), d = a.allPackage, e = 0; e < c.length; e++)d[c[e]] || (d[c[e]] = {
						__PKG_NAME__: d.__PKG_NAME__ ? d.__PKG_NAME__ +
							"." + c[e] : c[e]
					}, 0 == e && a.setGlobal(c[e], d[c[e]])), d = d[c[e]]; a.lastPackageName = b; return a.lastPackage = d
				}
			}; a.evalType = function (b, c) {
				var d = b.lastIndexOf("."); if (-1 != d) { var e = b.substring(0, d), e = a.declarePackage(e), d = b.substring(d + 1); return e[d] } if (c) return window[b]; switch (b) {
					case "string": return String; case "number": return Number; case "object": return a._O; case "boolean": return Boolean; case "function": return Function; case "void": case "undefined": case "unknown": return b; case "NullObject": return NullObject;
					default: return window[b]
				}
			}; a.defineType = function (b, c, d, e) { var h = a.unloadedClasses[b]; h && (c = h); h = b.lastIndexOf("."); if (-1 != h) { var j = b.substring(0, h), j = a.declarePackage(j), h = b.substring(h + 1); if (j[h]) return j[h]; j[h] = c } else { if (window[b]) return window[b]; a.setGlobal(b, c) } a.decorateAsType(c, b, d, e); b = a._innerFunctions; c.defineMethod = b.defineMethod; c.defineStaticMethod = b.defineStaticMethod; c.makeConstructor = b.makeConstructor; return c }; var Da = !1; -1 != navigator.userAgent.indexOf("Safari") && (j = navigator.userAgent,
				q = j.indexOf("Version/"), -1 != q && (j = j.substring(q + 8), Da = 4 <= parseFloat(j))); a.instantialize = function (a, b) {
					if (!b || !(1 == b.length && b[0] && b[0] instanceof s)) {
						a instanceof Number && (a.valueOf = function () { return this }); if (Da) { for (var c = [], d = 0; d < b.length; d++)c[d] = b[d]; b = c } (c = a.construct) ? a.con$truct ? a.getClass().superClazz ? c.claxxOwner && c.claxxOwner === a.getClass() || c.stacks && c.stacks[c.stacks.length - 1] == a.getClass() ? c.apply(a, b) : (c.claxxOwner && !c.claxxOwner.superClazz && c.claxxOwner.con$truct ? c.claxxOwner.con$truct.apply(a,
							[]) : c.stacks && (1 == c.stacks.length && !c.stacks[0].superClazz) && c.stacks[0].con$truct.apply(a, []), c.apply(a, b), a.con$truct.apply(a, [])) : (a.con$truct.apply(a, []), c.apply(a, b)) : c.apply(a, b) : a.con$truct && a.con$truct.apply(a, [])
					}
				}; a.innerFunctionNames = "isInstance equals hashCode getName getCanonicalName getClassLoader getResource getResourceAsStream defineMethod defineStaticMethod makeConstructor".split(" "); a._innerFunctions = {
					isInstance: function (b) { return a.instanceOf(b, this) }, equals: function (a) {
						return this ===
							a
					}, hashCode: function () { return this.getName().hashCode() }, toString: function () { return "class " + this.getName() }, getName: function () { return a.getClassName(this, !0) }, getCanonicalName: function () { return this.__CLASS_NAME__ }, getClassLoader: function () {
						var b = this.__CLASS_NAME__, c = a._Loader.getClasspathFor(b), d = c.lastIndexOf(b.replace(/\./g, "/")), c = -1 != d ? c.substring(0, d) : a._Loader.getClasspathFor(b, !0), b = a._Loader.requireLoaderByBase(c); b.getResourceAsStream = a._innerFunctions.getResourceAsStream; b.getResource =
							a._innerFunctions.getResource; return b
					}, getResource: function (a) { return (a = this.getResourceAsStream(a)) ? a.url : null }, getResourceAsStream: function (b) {
						if (!b) return null; b = b.replace(/\\/g, "/"); var c = null, d = b, d = this.__CLASS_NAME__; 2 == arguments.length && 0 != b.indexOf("/") && (b = "/" + b); if (0 == b.indexOf("/")) if (2 == arguments.length ? (c = arguments[1]) || (c = a.binaryFolders[0]) : a._Loader && (c = a._Loader.getClasspathFor(d, !0)), c) { var c = c.replace(/\\/g, "/"), e = c.length, e = c.charAt(e - 1); "/" != e && (c += "/"); d = c + b.substring(1) } else d =
							b.substring(1); else {
								if (this.base) c = this.base; else if (a._Loader) if (c = a._Loader.getClasspathFor(d), e = c.lastIndexOf(d.replace(/\./g, "/")), -1 != e) c = c.substring(0, e); else if (e = -1, c.indexOf(".z.js") == c.length - 5 && -1 != (e = c.lastIndexOf("/"))) for (var c = c.substring(0, e + 1), e = d.split(/\./), h = 1; h < e.length; h++) { for (var j = "/", l = 0; l < h; l++)j += e[l] + "/"; if (j.length > c.length) break; if (c.indexOf(j) == c.length - j.length) { c = c.substring(0, c.length - j.length + 1); break } } else c = a._Loader.getClasspathFor(d, !0); else (e = a.binaryFolders) &&
									e.length && (c = e[0]); c || (c = "j2s/"); c = c.replace(/\\/g, "/"); e = c.length; e = c.charAt(e - 1); "/" != e && (c += "/"); this.base ? d = c + b : (e = d.lastIndexOf("."), d = -1 == e || this.base ? c + b : c + d.substring(0, e).replace(/\./g, "/") + "/" + b)
						} c = null; try { if (0 > d.indexOf(":/")) { var q = document.location.href.split("?")[0].split("/"); q[q.length - 1] = d; d = q.join("/") } c = new java.net.URL(d) } catch (s) { } q = null == c ? null : m._getFileData(d.toString()); if (!q || "error" == q || 0 == q.indexOf("[Exception")) return null; q = (new java.lang.String(q)).getBytes(); q = new java.io.BufferedInputStream(new java.io.ByteArrayInputStream(q));
						q.url = c; return q
					}, defineMethod: function (b, c, d) { a.defineMethod(this, b, c, d) }, defineStaticMethod: function (b, c, d) { a.defineMethod(this, b, c, d); this[b] = this.prototype[b] }, makeConstructor: function (b, c) { a.makeConstructor(this, b, c) }
				}; var Na = []; a.pu$h = function (a) { a || (a = self.c$); a && Na.push(a) }; a.p0p = function () { return Na.pop() }; a.decorateAsClass = function (b, c, d, e, h, j) {
					var l = null; c && (l = c.__PKG_NAME__, l || (l = c.__CLASS_NAME__)); var m = (l ? l + "." : "") + d; a._Loader._classPending[m] && (delete a._Loader._classPending[m], a._Loader._classCountOK++,
						a._Loader._classCountPending--); a._Loader && a._Loader._checkLoad && System.out.println("decorating class " + l + "." + d); (l = a.unloadedClasses[m]) && (b = l); db(b, c, d); j ? a.inheritClass(b, e, j) : e && a.inheritClass(b, e); h && a.implementOf(b, h); return b
				}; var db = function (b, c, d) {
					var e; c ? c.__PKG_NAME__ ? (e = c.__PKG_NAME__ + "." + d, c[d] = b, c === java.lang && a.setGlobal(d, b)) : (e = c.__CLASS_NAME__ + "." + d, c[d] = b) : (e = d, a.setGlobal(d, b)); a.extendJO(b, e); c = a.innerFunctionNames; for (d = 0; d < c.length; d++)b[c[d]] = a._innerFunctions[c[d]]; a._Loader &&
						a._Loader.updateNodeForFunctionDecoration(e)
				}; a.declareInterface = function (b, c, d) { var e = function () { }; db(e, b, c); d && a.implementOf(e, d); return e }; a.declareType = function (b, c, d, e, h) { return a.decorateAsClass(function () { a.instantialize(this, arguments) }, b, c, d, e, h) }; a.declareAnonymous = function (b, c, d, e, h) { return a.decorateAsClass(function () { a.prepareCallback(this, arguments); a.instantialize(this, arguments) }, b, c, d, e, h) }; a.decorateAsType = function (b, c, d, e, h, j) {
					a.extendJO(b, c); b.equals = a._innerFunctions.equals; b.getName =
						a._innerFunctions.getName; if (j) for (c = 0; c < a.innerFunctionNames.length; c++)j = a.innerFunctionNames[c], b[j] = a._innerFunctions[j]; h ? a.inheritClass(b, d, h) : d && a.inheritClass(b, d); e && a.implementOf(b, e); return b
				}; Number.prototype._numberToString = Number.prototype.toString; a.declarePackage("java.io"); a.declarePackage("java.lang.annotation"); a.declarePackage("java.lang.instrument"); a.declarePackage("java.lang.management"); a.declarePackage("java.lang.reflect"); a.declarePackage("java.lang.ref"); java.lang.ref.reflect =
					java.lang.reflect; a.declarePackage("java.util"); a.declarePackage("java.security"); a.declareInterface(java.io, "Closeable"); a.declareInterface(java.io, "DataInput"); a.declareInterface(java.io, "DataOutput"); a.declareInterface(java.io, "Externalizable"); a.declareInterface(java.io, "Flushable"); a.declareInterface(java.io, "Serializable"); a.declareInterface(java.lang, "Iterable"); a.declareInterface(java.lang, "CharSequence"); a.declareInterface(java.lang, "Cloneable"); a.declareInterface(java.lang, "Appendable");
		a.declareInterface(java.lang, "Comparable"); a.declareInterface(java.lang, "Runnable"); a.declareInterface(java.util, "Comparator"); java.lang.ClassLoader = { __CLASS_NAME__: "ClassLoader" }; var fb = function (b, c, d, e) { b = ""; e && (b = e.substring(1).replace(/\\/g, ",")); c = (d && "construct" != d ? "Method" : "Constructor") + " " + a.getClassName(c, !0) + "." + d + "(" + b + ") is not found!"; throw new java.lang.NoSuchMethodException(c); }; a.prepareCallback = function (b, c) {
			var d = c[0]; if (b && d && d !== window) {
				var e = a.getClassName(d, !0), h = {}; if (b.b$) for (var j in b.b$) h[j] =
					b.b$[j]; b.b$ = h; h[e] = d; for (e = a.getClass(d); e.superClazz;)e = e.superClazz, h[a.getClassName(e, !0)] = d; if (d = d.b$) for (j in d) h[j] = d[j]
			} for (h = 0; h < c.length - 1; h++)c[h] = c[h + 1]; 0 < c.length && c.length--
		}; a.innerTypeInstance = function (b, c, d) {
			b || (b = arguments.callee.caller); var e; if (d || c.$finals) if (e = new b(c, a.inheritArgs), d) if (c.f$) { var h = {}, j; for (j in c.f$) h[j] = c.f$[j]; for (j in d) h[j] = d[j]; e.f$ = h } else e.f$ = d; else c.f$ && (e.f$ = c.f$); else switch (arguments.length) {
				case 3: return new b(c); case 4: return c.__CLASS_NAME__ ==
					b.__CLASS_NAME__ && arguments[3] === a.inheritArgs ? c : new b(c, arguments[3]); case 5: return new b(c, arguments[3], arguments[4]); case 6: return new b(c, arguments[3], arguments[4], arguments[5]); case 7: return new b(c, arguments[3], arguments[4], arguments[5], arguments[6]); case 8: return new b(c, arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]); case 9: return new b(c, arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]); case 10: return new b(c, arguments[3], arguments[4], arguments[5],
						arguments[6], arguments[7], arguments[8], arguments[9]); default: e = new b(c, a.inheritArgs)
			}j = arguments.length - 3; for (h = Array(j); 0 <= --j;)h[j] = arguments[j + 3]; a.instantialize(e, h); return e
		}; a.cloneFinals = function () { for (var a = {}, b = arguments.length / 2; 0 <= --b;)a[arguments[b + b]] = arguments[b + b + 1]; return a }; a.isClassDefined = a.isDefinedClass = function (b) {
			if (!b) return !1; if (a.allClasses[b]) return !0; for (var c = b.split(/\./), d = null, e = 0; e < c.length; e++)if (!(d = d ? d[c[e]] : a.allPackage[c[0]])) return !1; return d && (a.allClasses[b] =
				!0)
		}; a.defineEnumConstant = function (a, b, c, d, e) { e = e ? new e : new a; e.$name = b; e.$ordinal = c; d && d.length && e.construct.apply(e, d); a[b] = e; a.prototype[b] = e; a["$ values"] || (a["$ values"] = [], a.values = function () { return this["$ values"] }); a["$ values"].push(e); return e }; a.floatToInt = function (a) { return isNaN(a) ? 0 : 0 > a ? Math.ceil(a) : Math.floor(a) }; a.floatToByte = a.floatToShort = a.floatToLong = a.floatToInt; a.doubleToByte = a.doubleToShort = a.doubleToLong = a.doubleToInt = a.floatToInt; a.floatToChar = function (a) {
			return String.fromCharCode(0 >
				a ? Math.ceil(a) : Math.floor(a))
		}; a.doubleToChar = a.floatToChar; var gb = function (a, b) { a || (a = 0); if ("object" == typeof a) var c = a; else for (var c = Array(a), d = 0; d < a; d++)c[d] = 0; c.BYTES_PER_ELEMENT = b >> 3; c._fake = !0; return c }, ta = function (a, b) { a || (a = 0); b || (b = this.length); if (this._fake) { var c = new this.constructor(b - a); System.arraycopy(this, a, c, 0, b - a); return c } return new this.constructor(this.buffer.slice(a * this.BYTES_PER_ELEMENT, b * this.BYTES_PER_ELEMENT)) }; !0 == (a.haveInt32 = !!(self.Int32Array && self.Int32Array != Array)) ?
			Int32Array.prototype.sort || (Int32Array.prototype.sort = Array.prototype.sort) : (Int32Array = function (a) { return gb(a, 32) }, Int32Array.prototype.sort = Array.prototype.sort, Int32Array.prototype.toString = function () { return "[object Int32Array]" }); Int32Array.prototype.slice || (Int32Array.prototype.slice = function () { return ta.apply(this, arguments) }); Int32Array.prototype.clone = function () { var a = this.slice(); a.BYTES_PER_ELEMENT = 4; return a }; !0 == (a.haveFloat64 = !!(self.Float64Array && self.Float64Array != Array)) ? Float64Array.prototype.sort ||
				(Float64Array.prototype.sort = Array.prototype.sort) : (Float64Array = function (a) { return gb(a, 64) }, Float64Array.prototype.sort = Array.prototype.sort, Float64Array.prototype.toString = function () { return "[object Float64Array]" }); Float64Array.prototype.slice || (Float64Array.prototype.slice = function () { return ta.apply(this, arguments) }); Float64Array.prototype.clone = function () { return this.slice() }; a.newArray = function (a, b, c, d) {
					if (-1 != a || 2 == arguments.length) return la(arguments, 0); a = b.slice(c, d); a.BYTES_PER_ELEMENT =
						b.BYTES_PER_ELEMENT; return a
				}; var la = function (a, b) {
					var c = a[0]; "string" == typeof c && (c = c.charCodeAt(0)); var d = a.length - 1, e = a[d]; if (1 < d) { for (var e = Array(d), h = 0; h < d; h++)e[h] = a[h + 1]; d = Array(c); for (h = 0; h < c; h++)d[h] = la(e, b); return d } 0 < b && 0 > c && (c = e); switch (b) {
						case 8: return d = new Int8Array(c), d.BYTES_PER_ELEMENT = 1, d; case 32: return d = new Int32Array(c), d.BYTES_PER_ELEMENT = 4, d; case 64: return d = new Float64Array(c), d.BYTES_PER_ELEMENT = 8, d; default: d = 0 > c ? e : Array(c); d.BYTES_PER_ELEMENT = 0; if (0 < c && null != e) for (h = c; 0 <=
							--h;)d[h] = e; return d
					}
				}; a.newByteArray = function () { return la(arguments, 8) }; a.newIntArray = function () { return la(arguments, 32) }; a.newFloatArray = function () { return la(arguments, 64) }; a.newDoubleArray = a.newFloatArray; a.newLongArray = a.newShortArray = a.newIntArray; a.newCharArray = a.newBooleanArray = a.newArray; !0 == (a.haveInt8 = !!self.Int8Array) ? (Int8Array.prototype.sort || (Int8Array.prototype.sort = Array.prototype.sort), Int8Array.prototype.slice || (Int8Array.prototype.slice = function () { return ta.apply(this, arguments) })) :
					a.newByteArray = a.newIntArray; Int8Array.prototype.clone = function () { var a = this.slice(); a.BYTES_PER_ELEMENT = 1; return a }; a.isAB = function (a) { return a && "object" == typeof a && 1 == a.BYTES_PER_ELEMENT }; a.isAI = function (a) { return a && "object" == typeof a && 4 == a.BYTES_PER_ELEMENT }; a.isAF = function (a) { return a && "object" == typeof a && 8 == a.BYTES_PER_ELEMENT }; a.isAS = function (a) { return a && "object" == typeof a && a.constructor == Array && ("string" == typeof a[0] || "undefined" == typeof a[0]) }; a.isAII = function (b) {
						return b && "object" == typeof b &&
							a.isAI(b[0])
					}; a.isAFF = function (b) { return b && "object" == typeof b && a.isAF(b[0]) }; a.isAFFF = function (b) { return b && "object" == typeof b && a.isAFF(b[0]) }; a.isASS = function (b) { return b && "object" == typeof b && a.isAS(b[0]) }; a.isAFloat = function (b) { return b && "object" == typeof b && b.constructor == Array && a.instanceOf(b[0], Float) }; a.isAP = function (b) { return b && "JU.P3" == a.getClassName(b[0]) }; a.defineStatics = function (a) {
						for (var b = arguments.length, c = (b - 1) / 2; 0 <= --c;) {
							var d = arguments[--b], e = arguments[--b]; a[e] = a.prototype[e] =
								d
						}
					}; a.prepareFields = function (a, b) { var c = []; if (a.con$truct) for (var d = a.con$truct.stacks, e = 0; e < d.length; e++)c[e] = d[e]; d = a.con$truct = function () { var a = arguments.callee.stacks; if (a) for (var b = 0; b < a.length; b++)a[b].apply(this, []) }; a.prototype.con$truct = d; c.push(b); a.con$truct.stacks = c; a.con$truct.index = 0 }; a.checkPrivateMethod = function () {
						me = arguments.callee.caller; caller = arguments.callee.caller.caller; var b = "\\" + a.getParamsType(arguments[0]).join("\\"); me.privateNote || (me.privateNote = "You are seeing this note because the method " +
							me.exName + b + " in class " + me.exClazz.__CLASS_NAME__ + " has a superclass method by the same name (possibly with the same parameters) that is private and  therefore might be called improperly from this class. If your  code does not run properly, or you want to make it run faster, change the name of this method to something else.", System.out.println(me.privateNote), alert(me.privateNote)); return null
					}; java.lang.Object = a._O; a._O.getName = a._innerFunctions.getName; java.lang.System = System = {
						props: null, $props: {},
						arraycopy: function (a, b, c, d, e) { if (a !== c || b > d) for (; 0 <= --e;)c[d++] = a[b++]; else { d += e; for (b += e; 0 <= --e;)a[--d] = a[--b] } }, currentTimeMillis: function () { return (new Date).getTime() }, gc: function () { }, getProperties: function () { return System.props }, getProperty: function (a, b) {
							if (System.props) return System.props.getProperty(a, b); var c = System.$props[a]; if ("undefined" != typeof c) return c; if (0 < a.indexOf(".")) {
								c = null; switch (a) {
									case "java.version": case "file.separator": case "path.separator": c = "/"; break; case "line.separator": c =
										0 <= navigator.userAgent.indexOf("Windows") ? "\r\n" : "\n"; break; case "os.name": case "os.version": c = navigator.userAgent
								}if (c) return System.$props[a] = c
							} return 1 == arguments.length ? null : null == b ? a : b
						}, getSecurityManager: function () { return null }, setProperties: function (a) { System.props = a }, lineSeparator: function () { return "\n" }, setProperty: function (a, b) { if (!System.props) return System.$props[a] = b; System.props.setProperty(a, b) }
					}; System.identityHashCode = function (b) { return null == b ? 0 : b._$hashcode || (b._$hashcode = ++a._hashCode) };
		System.out = new a._O; System.out.__CLASS_NAME__ = "java.io.PrintStream"; System.out.print = function () { }; System.out.printf = function () { }; System.out.println = function () { }; System.out.write = function () { }; System.out.flush = function () { }; System.err = new a._O; System.err.__CLASS_NAME__ = "java.io.PrintStream"; System.err.print = function () { }; System.err.printf = function () { }; System.err.println = function () { }; System.err.write = function () { }; System.err.flush = function () { }; a.popup = a.assert = a.log = a.error = window.alert; Thread = function () { };
		Thread.J2S_THREAD = Thread.prototype.J2S_THREAD = new Thread; Thread.currentThread = Thread.prototype.currentThread = function () { return this.J2S_THREAD }; a.innerFunctionNames = a.innerFunctionNames.concat("getSuperclass isAssignableFrom getConstructor getDeclaredMethod getDeclaredMethods getMethod getMethods getModifiers newInstance".split(" ")); a._innerFunctions.getSuperclass = function () { return this.superClazz }; a._innerFunctions.isAssignableFrom = function (b) { return 0 <= a.getInheritedLevel(b, this) }; a._innerFunctions.getConstructor =
			function () { return new java.lang.reflect.Constructor(this, [], [], java.lang.reflect.Modifier.PUBLIC) }; a._innerFunctions.getDeclaredMethods = a._innerFunctions.getMethods = function () {
				var a = [], b = this.prototype, c; for (c in b) "function" == typeof b[c] && !b[c].__CLASS_NAME__ && a.push(new java.lang.reflect.Method(this, c, [], java.lang.Void, [], java.lang.reflect.Modifier.PUBLIC)); b = this; for (c in b) "function" == typeof b[c] && !b[c].__CLASS_NAME__ && a.push(new java.lang.reflect.Method(this, c, [], java.lang.Void, [], java.lang.reflect.Modifier.PUBLIC |
					java.lang.reflect.Modifier.STATIC)); return a
			}; a._innerFunctions.getDeclaredMethod = a._innerFunctions.getMethod = function (a) {
				var b = this.prototype, c; for (c in b) if (a == c && "function" == typeof b[c] && !b[c].__CLASS_NAME__) return new java.lang.reflect.Method(this, c, [], java.lang.Void, [], java.lang.reflect.Modifier.PUBLIC); b = this; for (c in b) if (a == c && "function" == typeof b[c] && !b[c].__CLASS_NAME__) return new java.lang.reflect.Method(this, c, [], java.lang.Void, [], java.lang.reflect.Modifier.PUBLIC | java.lang.reflect.Modifier.STATIC);
				return null
			}; a._innerFunctions.getModifiers = function () { return java.lang.reflect.Modifier.PUBLIC }; a._innerFunctions.newInstance = function (a) { switch (null == a ? 0 : a.length) { case 0: return new this; case 1: return new this(a[0]); case 2: return new this(a[0], a[1]); case 3: return new this(a[0], a[1], a[2]); case 4: return new this(a[0], a[1], a[2], a[3]); default: for (var b = "new " + this.__CLASS_NAME__ + "(", c = 0; c < a.length; c++)b += (0 == c ? "" : ",") + "a[" + c + "]"; return eval(b + ")") } }; j = a.innerFunctionNames; for (q = 0; q < j.length; q++)a._O[j[q]] =
				a._innerFunctions[j[q]], Array[j[q]] = a._innerFunctions[j[q]]; a._Loader = a.ClazzLoader = function () { }; var x = function () { this.parents = []; this.musts = []; this.optionals = []; this.onLoaded = this.path = this.name = this.declaration = null; this.status = 0; this.random = 0.13412 }; (function (a, b) {
					b._checkLoad = m._checkLoad; b.updateNodeForFunctionDecoration = function (a) { (a = G(a)) && a.status == x.STATUS_KNOWN && window.setTimeout(function (a) { return function () { updateNode(a) } }(a), 1) }; x.prototype.toString = function () {
						return this.name || this.path ||
							"ClazzNode"
					}; x.STATUS_UNKNOWN = 0; x.STATUS_KNOWN = 1; x.STATUS_CONTENT_LOADED = 2; x.STATUS_MUSTS_LOADED = 3; x.STATUS_DECLARED = 4; x.STATUS_LOAD_COMPLETE = 5; var c = []; b.requireLoaderByBase = function (a) { for (var d = 0; d < c.length; d++)if (c[d].base == a) return c[d]; d = new b; d.base = a; c.push(d); return d }; var d = new x, e = {}, h = 0, j = 6, l = navigator.userAgent.toLowerCase(), q = -1 != l.indexOf("opera"), s = -1 != l.indexOf("msie") && !q, f = -1 != l.indexOf("gecko"); if (q && (j = 1, q = l.indexOf("opera/"), -1 != q)) {
						var t = 9; try { t = parseFloat(l.subString(q + 6)) } catch (u) { } 9.6 <=
							t && (j = 6)
					} var B; self.Clazz && a.isClassDefined ? isClassDefined = a.isClassDefined : (B = {}, isClassDefined = function (a) { return !0 == B[a] }); var C = function (a) { if (!a || 0 == a.length) return []; for (var b = null, c = 0; c < a.length; c++)if (a[c]) { if ("$" == a[c].charAt(0)) if ("." == a[c].charAt(1)) { if (!b) continue; var d = b.lastIndexOf("."); -1 != d && (b = b.substring(0, d), a[c] = b + a[c].substring(1)) } else a[c] = "org.eclipse.s" + a[c].substring(1); b = a[c] } return a }, H = [], D = {}, K = 0; b.loadPackageClasspath = function (a, c, d, e, f, h) {
						f || (f = 0); e || (e = null); h || (h =
							0); var j = d && D["@" + a]; if (0 == f && (d && !D["@java"] && 0 != a.indexOf("java") && null != window["java.registered"] && !D["@java"]) && (b.loadPackage("java", e ? function () { b.loadPackageClasspath(a, c, d, e, 1) } : null), e)) return; if (a instanceof Array) if (C(a), e) h < a.length ? b.loadPackageClasspath(a[h], c, d, function () { b.loadPackageClasspath(a, c, d, e, 1, h + 1) }, 1) : e(); else for (j = 0; j < a.length; j++)b.loadPackageClasspath(a[j], c, d, null); else {
								switch (a) {
									case "java.*": a = "java"; case "java": c && (f = "@net.sf.j2s.ajax", D[f] || (D[f] = c), f = "@net.sf.j2s",
										D[f] || (D[f] = c)); break; case "swt": a = "org.eclipse.swt"; break; case "ajax": a = "net.sf.j2s.ajax"; break; case "j2s": a = "net.sf.j2s"; break; default: a.lastIndexOf(".*") == a.length - 2 && (a = a.substring(0, a.length - 2))
								}c && (D["@" + a] = c); d && !j && !window[a + ".registered"] ? (K++, "java" == a && (a = "core"), b.loadClass(a + ".package", function () { 0 == --K && da() }, !0, !0, 1)) : e && e()
							}
					}; a.loadClass = function (c, d, e) { self.Class || (Class = a, Class.forName = a._4Name, JavaObject = a._O); return c && b.loadClass(c, d, !0, e, 1) }; b.loadClass = function (c, f, h, j, l) {
						l ||
						(l = 0); null == j && (j = !1); if ("boolean" == typeof f) return a.evalType(c); null != window["java.registered"] && !D["@java"] && b.loadPackage("java"); b.keepOnLoading = !0; if (!h && (K && c.lastIndexOf(".package") != c.length - 8 || 0 != c.indexOf("java.") && !isClassDefined(ea))) Ja.push([c, f]), System.out.println("loadclass-queuing" + c + ea + " " + isClassDefined(ea)); else if ((l = isClassDefined(c)) || L["@" + c]) { if (l && f && (h = G(c), !h || h.status >= x.STATUS_LOAD_COMPLETE)) j ? window.setTimeout(f, 25) : f() } else {
							var m = b.getClasspathFor(c); l = e[m]; if (!l) for (j =
								H.length; 0 <= --j;)if (H[j].path == m || H[j].name == c) { l = !0; break } if (l) { if (f && (l = G(c))) if (l.onLoaded) { if (f != l.onLoaded) { var r = l.onLoaded, q = f; l.onLoaded = function () { r(); q() } } } else l.onLoaded = f } else {
									l = a.unloadedClasses[c] && G(c) || new x; l.name = c; l.path = m; l.isPackage = m.lastIndexOf("package.js") == m.length - 10; Z(m, c, l); l.onLoaded = f; l.status = x.STATUS_KNOWN; c = !1; for (j = H.length; 0 <= --j;)if (H[j].status != x.STATUS_LOAD_COMPLETE) { c = !0; break } if (l.isPackage) { for (j = H.length; 0 <= --j && !H[j].isPackage;)H[j + 1] = H[j]; H[++j] = l } else c &&
										H.push(l); if (!c) { var s = !1; f && (s = ha, ha = !0); h && (f = null); Ha(d, l, !0); W(l, l.path, l.requiredBy, !1, f ? function () { ha = s; f() } : null) }
								}
						}
					}; b.loadPackage = function (a, c) { c || (c = null); window[a + ".registered"] = !1; b.loadPackageClasspath(a, b.J2SLibBase || (b.J2SLibBase = b.getJ2SLibBase() || "j2s/"), !0, c) }; b.jarClasspath = function (a, b) { b instanceof Array || (b = [b]); C(b); m._debugCore && (a = a.replace(/\.z\./, ".")); for (var c = b.length; 0 <= --c;)D["#" + b[c]] = a; D["$" + a] = b }; b.registerPackages = function (c, d) {
						for (var e = b.getClasspathFor(c + ".*",
							!0), f = 0; f < d.length; f++)window.Clazz && a.declarePackage(c + "." + d[f]), b.loadPackageClasspath(c + "." + d[f], e)
					}; b.getClasspathFor = function (c, d, e) {
						var f = D["#" + c]; if (!f || d || e) {
							var h, j; if (f) { if (c = c.replace(/\./g, "/"), 0 <= (j = f.lastIndexOf(c)) || 0 <= (j = c.lastIndexOf("/")) && 0 <= (j = f.lastIndexOf(c.substring(0, j)))) h = f.substring(0, j) } else { for (j = c.length + 2; 0 <= (j = c.lastIndexOf(".", j - 2)) && !(h = D["@" + c.substring(0, j)]);); d || (c = c.replace(/\./g, "/")) } null == h && (h = window.Clazz && a.binaryFolders && a.binaryFolders.length ? a.binaryFolders[0] :
								b.binaryFolders && b.binaryFolders.length ? b.binaryFolders[0] : "j2s"); f = (h.lastIndexOf("/") == h.length - 1 ? h : h + "/") + (d ? "" : c.lastIndexOf("/*") == c.length - 2 ? c.substring(0, j + 1) : c + (!e ? ".js" : "." != e.charAt(0) ? "." + e : e))
						} return f
					}; b.ignore = function () { var a = 1 == arguments.length && arguments[0] instanceof Array ? a = arguments[0] : null, b = a ? a.length : arguments.length; if (!a) for (var a = Array(b), c = 0; c < b; c++)a[c] = arguments[c]; C(a); for (c = 0; c < b; c++)L["@" + a[c]] = 1 }; b.onScriptLoading = function () { }; b.onScriptLoaded = function () { }; b.onScriptInitialized =
						function () { }; b.onScriptCompleted = function () { }; b.onClassUnloaded = function () { }; b.onGlobalLoaded = function () { }; b.keepOnLoading = !0; var R = {}, L = {}, U = function (c, d, e, f) { if (!f) try { eval(e + ";//# sourceURL=" + c) } catch (h) { if (a._isQuiet) return; c = "[Java2Script] The required class file \n\n" + c + (0 == e.indexOf("[Exception") && e.indexOf("data: no") ? "\nwas not found.\n" : "\ncould not be loaded. Script error: " + h.message + " \n\ndata:\n\n" + e) + "\n\n" + a.getStackTrace(); alert(c); a.alert(c); throw h; } b.onScriptLoaded(c, !1); sa(d) },
							V = function (a) { return function () { if ("interactive" != a.readyState) { try { a.parentNode && a.parentNode.removeChild(a) } catch (b) { } a = null } } }, X = function (a) { window["j2s.script.debugging"] || window.setTimeout(V(a), 1) }; a._4Name = function (c, d, e) { if (a.isClassDefined(c)) return a.evalType(c); d = m._isAsync && d ? d._restoreState(c, e) : null; if (1 == d) return null; if (b.setLoadingMode(d ? b.MODE_SCRIPT : "xhr.sync")) return b.loadClass(c, d, !1, !0, 1), null; b.loadClass(c); return a.evalType(c) }; a.currentPath = ""; var W = function (c, d, f, j, l) {
								a.currentPath =
								d; j && alert("WHY>>"); j = e[d]; e[d] = !0; Ya(H, d); I = !0; ra = !1; b._checkLoad && System.out.println("\t" + d + (f ? "\n -- required by " + f : "") + "  ajax=" + I + " async=" + ra); f = d; a._debugging && (d = d.replace(/\.z\.js/, ".js")); j || System.out.println("loadScript " + d); b.onScriptLoading(d); if (I && !ra) { var r = m._getFileData(d); try { U(d, f, r, j) } catch (q) { alert(q + " loading file " + d + " " + c.name + " " + a.getStackTrace()) } l && l() } else c = { dataType: "script", async: !0, type: "GET", url: d, success: ca(d, !1, l), error: ca(d, !0, l) }, h++, j ? setTimeout(c.success,
									0) : m.$ajax(c)
							}, ca = function (c, d, e) { a.getStackTrace(); return function () { f && this.timeoutHandle && (window.clearTimeout(this.timeoutHandle), this.timeoutHandle = null); 0 < h && h--; this.onerror = this.onload = null; d && alert("There was a problem loading " + c); b.onScriptLoaded(c, !0); var a = this, j; j = e ? function () { X(a); sa(c, e) } : function () { X(a); sa(c) }; 0 <= Y ? window.setTimeout(function () { sa(c, j) }, Y) : sa(c, j) } }, ha = !0, ga = !1, sa = function (c, f) {
								var l = R["@" + c]; if (l) {
									var m, r = D["$" + c]; if (r) for (var q = 0; q < r.length; q++) {
										var t = r[q]; if (t !=
											l.name && (m = G(t))) m.status < x.STATUS_CONTENT_LOADED && (m.status = x.STATUS_CONTENT_LOADED, updateNode(m)); else { m = new x; m.name = t; var u = D["#" + t]; u || (alert(t + " J2S error in tryToLoadNext"), error("Java2Script implementation error! Please report this bug!")); m.path = u; Z(m.path, t, m); m.status = x.STATUS_CONTENT_LOADED; Ha(d, m, !1); updateNode(m) }
									} if (l instanceof Array) for (q = 0; q < l.length; q++)l[q].status < x.STATUS_CONTENT_LOADED && (l[q].status = x.STATUS_CONTENT_LOADED, updateNode(l[q])); else if (l.status < x.STATUS_CONTENT_LOADED) {
										m =
										!1; r = document.getElementsByTagName("SCRIPT"); for (q = 0; q < r.length; q++)if (s) { if (r[q].onreadystatechange && r[q].onreadystatechange.path == l.path && "interactive" == r[q].readyState) { m = !0; break } } else if (r[q].onload && r[q].onload.path == l.path) { m = !0; break } m || (l.status = x.STATUS_CONTENT_LOADED, updateNode(l))
									} if (b.keepOnLoading) {
										q = !0; if (m = Ia(x.STATUS_KNOWN)) for (Q(m); h < j && (m = Ia(x.STATUS_KNOWN));)Q(m); else if (0 != H.length) m = H.shift(), !e[m.path] || 0 != H.length || !ha || m.musts.length || m.optionals.length ? (Ha(d, m, !0), W(m, m.path,
											m.requiredBy, !1)) : ha && (ha = !1); else if (m = F(x.STATUS_KNOWN)) for (Q(m); h < j && (m = F(x.STATUS_KNOWN));)Q(m); else q = !1; if (!(q || 0 < h)) {
												l = [Ia, F]; r = null; for (q = 0; 2 > q; q++)for (; m = l[q](x.STATUS_CONTENT_LOADED);)1 == q && r === m && (m.status = x.STATUS_LOAD_COMPLETE), updateNode(m), r = m; for (; !(la = [], !ma(d, c));); for (q = 0; 2 > q; q++)for (r = null; (m = l[q](x.STATUS_DECLARED)) && r !== m;)updateNode(r = m); r = []; for (q = 0; 2 > q; q++)for (; m = l[q](x.STATUS_DECLARED);)r.push(m), m.status = x.STATUS_LOAD_COMPLETE; if (r.length) {
													for (q = 0; q < r.length; q++)Ba(r[q]);
													for (q = 0; q < r.length; q++)if (l = r[q].onLoaded) r[q].onLoaded = null, l()
												} if (f) f(); else if (b._classCountPending) for (t in b._classPending) { if (m = G(t), System.out.println("class left pending " + t + " " + m), m) { updateNode(m); break } } else b._checkLoad && (System.out.println("I think I'm done: SAEM call count: " + O), a.showDuplicates(!0)); b.onGlobalLoaded()
											}
									}
								}
							}, la = [], ma = function (a, c) {
								var d = la, e = d.length; d.push(a); for (var f = e; 0 <= --f && !(d[f] === a && d[f].status >= x.STATUS_DECLARED);); if (0 <= f) {
									if (b._checkLoad) {
										var h; System.out.println("cycle found loading " +
											c + " for " + a)
									} for (; f < e; f++) { var j = d[f]; j.status = x.STATUS_LOAD_COMPLETE; Ba(j); for (h = 0; h < j.parents.length; h++)updateNode(j.parents[h]); j.parents = []; var k = j.onLoaded; b._checkLoad && (h = "cycle setting status to LOAD_COMPLETE for " + j.name + (k ? " firing " + k.toString() : ""), System.out.println(h)); k && (j.onLoaded = null, k()) } d.length = 0; return !0
								} j = [a.musts, a.optionals]; for (h = 0; 2 > h; h++) { k = j[h]; for (f = k.length; 0 <= --f;)if (k[f].status == x.STATUS_DECLARED && ma(k[f], c)) return !0 } d.length = e; return !1
							}; b._classCountPending = 0; b._classCountOK =
								0; b._classPending = {}; b.showPending = function () { var a = [], c; for (c in b._classPending) { var d = G(c); d ? (a.push(d), System.out.println(ta("", "", d, "", 0))) : alert("No node for " + c) } return a }; var ta = function (a, b, c, d, e) { b += "--" + c.name; a += b + "\n"; if (5 < e) return a + (d + " ...\n"); d += "\t"; a += d + "status: " + c.status + "\n"; if (c.parents && c.parents.length && c.parents[0] && c.parents[0].name) { a += d + "parents: " + c.parents.length + "\n"; for (var f = 0; f < c.parents.length; f++)a = ta(a, b, c.parents[f], d + "\t", e + 1); a += "\n" } return a }; updateNode = function (a) {
									if (!a.name ||
										a.status >= x.STATUS_LOAD_COMPLETE) Ba(a); else {
											var c = !0; if (a.musts.length && a.declaration) for (var d = a.musts.length, e = d; 0 <= --e;) {
												var f = a.musts[e]; f.requiredBy = a; if (f.status < x.STATUS_DECLARED && isClassDefined(f.name)) {
													var h = []; f.status = x.STATUS_LOAD_COMPLETE; Ba(f); if (f.declaration && f.declaration.clazzList) { for (var j = 0, k = f.declaration.clazzList, l = k.length; j < l; j++) { var m = G(k[j]); m && (m.status != x.STATUS_LOAD_COMPLETE && m !== f) && (m.status = f.status, m.declaration = null, Ba(m), m.onLoaded && h.push(m)) } f.declaration = null } f.onLoaded &&
														h.push(f); for (j = 0; j < h.length; j++)if (k = h[j].onLoaded) h[j].onLoaded = null, k()
												} else f.status == x.STATUS_CONTENT_LOADED && updateNode(f), f.status < x.STATUS_DECLARED && (c = !1); a.musts.length != d && (e = d = a.musts.length, c = !0)
											} if (c) {
												if (a.status < x.STATUS_DECLARED) {
													if (e = a.declaration) e(), e.executed = !0; b._checkLoad && b._classPending[a.name] && (delete b._classPending[a.name], b._classCountOK, b._classCountPending--); a.status = x.STATUS_DECLARED; B && (B[a.name] = !0); b.onScriptInitialized(a.path); if (a.declaration && a.declaration.clazzList) {
														j =
														0; k = a.declaration.clazzList; for (l = k.length; j < l; j++)if ((m = G(k[j])) && m.status != x.STATUS_DECLARED && m !== a) m.status = x.STATUS_DECLARED, B && (B[m.name] = !0), b.onScriptInitialized(m.path)
													}
												} c = x.STATUS_DECLARED; if (0 == a.optionals.length && 0 == a.musts.length || a.status > x.STATUS_KNOWN && !a.declaration || Sa(a.musts, x.STATUS_LOAD_COMPLETE) && Sa(a.optionals, x.STATUS_LOAD_COMPLETE)) {
													c = x.STATUS_LOAD_COMPLETE; if (!ua(a, c)) return !1; if (a.declaration && a.declaration.clazzList) {
														j = 0; k = a.declaration.clazzList; for (l = k.length; j < l; j++)if ((m =
															G(k[j])) && m.status != c && m !== a) if (m.declaration = null, !ua(m, c)) return !1
													}
												} if (a.parents && a.parents.length) { for (e = 0; e < a.parents.length; e++)j = a.parents[e], j.status < c && updateNode(j, j.name); c == x.STATUS_LOAD_COMPLETE && (a.parents = []) }
											}
									}
								}; var Sa = function (a, b) { for (var c = a.length; 0 <= --c;)if (a[c].status < b) return !1; return !0 }, ua = function (a, c) { a.status = c; b.onScriptCompleted(a.path); var d = a.onLoaded; if (d && (a.onLoaded = null, d(), !b.keepOnLoading)) return !1; Ba(a); return !0 }, wa = { "r0.13412": 1 }, za = function () {
									for (; ;) {
										var a = Math.random(),
										b = "r" + a; if (!wa[b]) return wa[b] = 1, d.random = a
									}
								}, G = function (a) { za(); return Ca(a, d) }, F = function (a) { za(); return Aa(d, a) }, Ia = function (a) { return pa(d, a) }, Ca = function (a, b) { var c; return b.name == a ? b : (c = $a(a, b.musts)) || (c = $a(a, b.optionals)) ? c : null }, $a = function (a, b) { for (var c = d.random, e = b.length; 0 <= --e;) { var f = b[e]; if (f.name == a || f.random != c && (f.random = c, f = Ca(a, f))) return f } return null }, ya = function (a, b) { return a.status == b && (b != x.STATUS_KNOWN || !e[a.path]) && (b == x.STATUS_DECLARED || !isClassDefined(a.name)) }, pa = function (a,
									b) { for (var c = a.musts.length; 0 <= --c;) { var d = a.musts[c]; if (ya(d, b) || (d = pa(d, b))) return d } return ya(a, b) ? a : null }, Aa = function (a, b) { var c; return (c = na(a.musts, b)) || (c = na(a.optionals, b)) || ya(c = a, b) ? c : null }, na = function (a, b) { if (a) for (var c = d.random, e = 0; e < a.length; e++) { var f = a[e]; if (ya(f, b) || f.random != c && (f.random = c, f = Aa(f, b))) return f } return null }, P = function (a, c, e, f) {
										if (c instanceof Array) { C(c); for (var h = 0; h < c.length; h++)P(a, c[h], e, f, c) } else {
											b._checkLoad && !b._classPending[c] && (b._classPending[c] = 1, 0 == b._classCountPending++ &&
												(b._classCountOK = 0), System.out.println("Loading class " + c)); h = R["#" + c]; h || (h = (h = G(c)) ? h : new x, h.name = c, h.path = D["#" + c] || "unknown", Z(h.path, c, h), h.status = x.STATUS_KNOWN, Ha(d, h, !1)); ia(h, a, !0); 5 == arguments.length && f && (f.status = h.status, f.clazzList = arguments[4]); if (h.declaration = f) h.status = x.STATUS_CONTENT_LOADED; ia(h, e, !1)
										}
									}, ia = function (a, b, c) {
										if (b && b.length) {
											C(b); for (var d = 0; d < b.length; d++) {
												var e = b[d]; if (e && !isClassDefined(e) && !L["@" + e]) {
													var f = G(e); f || (f = new x, f.name = e, f.status = x.STATUS_KNOWN); f.requiredBy =
														a; Ha(a, f, c)
												}
											}
										}
									}; window.Clazz ? a.load = P : b.load = P; var Z = function (a, b, c) { var d = "@" + a; if (a = R[d]) if (a instanceof Array) { for (var d = !1, e = 0; e < a.length; e++)if (a[e].name == b) { d = !0; break } d || a.push(c) } else R[d] = [a, c]; else R[d] = c; R["#" + b] = c }, Q = function (a) { var c = a.name; if (!isClassDefined(c) && !L["@" + c]) { var d = b.getClasspathFor(c); a.path = d; Z(d, c, a); if (!e[d]) return W(a, d, a.requiredBy, !1), !0 } return !1 }, ea = b.runtimeKeyClass = "java.lang.String", Ja = []; b.getJ2SLibBase = function () {
										var a = window["j2s.lib"]; return a ? a.base + ("." ==
											a.alias ? "" : (a.alias ? a.alias : a.version ? a.version : "1.0.0") + "/") : null
									}; var ra = !0, I = !1, Y = -1; b.MODE_SCRIPT = 4; b.MODE_XHR = 2; b.MODE_SYNC = 1; b.setLoadingMode = function (a, c) { var d = !0, e = !0; "string" == typeof a ? (a = a.toLowerCase(), 0 <= a.indexOf("script") ? e = !1 : a.indexOf("async"), d = !1) : a & b.MODE_SCRIPT ? e = !1 : d = !(a & b.MODE_SYNC); I = e; Y = (ra = d) && 0 <= c ? c : -1; return d }; var da = function () { if (!K && isClassDefined(ea)) { for (var a = Ja, c = 0; c < a.length; c++)b.loadClass(a[c][0], a[c][1]); Ja = [] } }; b.loadZJar = function (a, c) {
										var d = null, e = c instanceof
											Array; e ? c = c[c.length - 1] : d = c == ea ? da : null; b.jarClasspath(a, e ? c : [c]); b.loadClass(c, d, !0)
									}; var Da = {}, Na = [], Ha = function (a, b, c) { var e = !1; c ? (c = a.musts, b.requiredBy || (b.requiredBy = a)) : c = a.optionals; Da[b.name] || (Na.push(b), Da[b.name] = b); for (var f = 0; f < c.length; f++)if (c[f].name == b.name) { e = !0; break } e || (c.push(b), ha && (0 != b.name.indexOf("java") && 0 != b.name.indexOf("net.sf.j2s.ajax")) && (ga && (ha = !1), ga = !0)); a: { if (a.name && a != d && a != b) for (e = 0; e < b.parents.length; e++)if (b.parents[e].name == a.name) break a; b.parents.push(a) } },
										Ba = function (a) { var b = a.parents; if (b) for (var c = b.length; 0 <= --c;)Ya(b[c].musts, a) || Ya(b[c].optionals, a) }; a.binaryFolders = b.binaryFolders = [b.getJ2SLibBase()]
				})(a, a._Loader); a._LoaderProgressMonitor = {}; var W = a._LoaderProgressMonitor, H = null, ga = 0, L = null, ua = 0; W.DEFAULT_OPACITY = m && m._j2sLoadMonitorOpacity ? m._j2sLoadMonitorOpacity : 55; W.hideMonitor = function () { L.style.display = "none" }; W.showStatus = function (a, b) {
					if (!L) {
						var c = document.createElement("DIV"); c.id = "_Loader-status"; c.style.cssText = "position:absolute;bottom:4px;left:4px;padding:2px 8px;z-index:" +
							(window["j2s.lib"].monitorZIndex || 1E4) + ";background-color:#8e0000;color:yellow;font-family:Arial, sans-serif;font-size:10pt;white-space:nowrap;"; c.onmouseover = ub; L = c; document.body.appendChild(c); wa || (wa = !0)
					} jb(L); if (null == a) b ? ma() : W.hideMonitor(); else {
						L.appendChild(document.createTextNode("" + a)); "none" == L.style.display && (L.style.display = ""); kb(W.DEFAULT_OPACITY); var d, c = navigator.userAgent; d = document.body; var e = d.parentNode, h = e.clientHeight; d = d.scrollTop + d.offsetTop; var j = e.scrollTop + e.offsetTop,
							c = 0 > c.indexOf("Opera") && document.all ? 0 == h ? d : j : 0 > c.indexOf("Gecko") ? h == e.offsetHeight && h == e.scrollHeight ? d : j : d; ua != c && (ua = c, L.style.bottom = ua + 4 + "px"); b && ma()
					}
				}; var jb = function (a) { if (a) for (var b = a.childNodes.length; 0 <= --b;) { var c = a.childNodes[b]; if (c) { c.childNodes && c.childNodes.length && jb(c); try { a.removeChild(c) } catch (d) { } } } }, kb = function (a) { H && a == W.DEFAULT_OPACITY && (window.clearTimeout(H), H = null); ga = a; navigator.userAgent.toLowerCase(); L.style.filter = "Alpha(Opacity=" + a + ")"; L.style.opacity = a / 100 }, ub =
					function () { W.hideMonitor() }, wa = !1, ma = function () { "none" != L.style.display && (ga == W.DEFAULT_OPACITY ? (H = window.setTimeout(function () { ma() }, 750), ga -= 5) : 0 <= ga - 10 ? (kb(ga - 10), H = window.setTimeout(function () { ma() }, 40)) : L.style.display = "none") }, B = a.Console, X = System; B.maxTotalLines = 1E4; B.setMaxTotalLines = function (a) { B.maxTotalLines = 0 < a ? a : 999999 }; B.maxLatency = 40; B.setMaxLatency = function (a) { B.maxLatency = 0 < a ? a : 40 }; B.pinning = !1; B.enablePinning = function (a) { B.pinning = a }; B.linesCount = 0; B.metLineBreak = !1; B.createConsoleWindow =
						function () { var a = document.createElement("DIV"); a.style.cssText = "font-family:monospace, Arial, sans-serif;"; document.body.appendChild(a); return a }; var ca = String.fromCharCode(160), ca = ca + (ca + ca + ca); B.consoleOutput = function (a, b) {
							var c = window["j2s.lib"]; (c = c && c.console) && "string" == typeof c && (c = document.getElementById(c)); if (!c) return !1; if (B.linesCount > B.maxTotalLines) { for (var d = 0; d < B.linesCount - B.maxTotalLines; d++)c && 0 < c.childNodes.length && c.removeChild(c.childNodes[0]); B.linesCount = B.maxTotalLines } var e =
								!1; a = ("undefined" == typeof a ? "" : null == a ? "null" : "" + a).replace(/\t/g, ca); if (0 < a.length) switch (a.charAt(a.length - 1)) { case "\n": case "\r": a = 1 < a.length ? a.substring(0, a.length - ("\r" == a.charAt(a.length - 2) ? 2 : 1)) : "", e = !0 }var h = null; a = a.replace(/\t/g, ca); for (var h = a.split(/\r\n|\r|\n/g), d = 0, j = h.length - 1; d <= j; d++) {
									var l = null; if (B.metLineBreak || 0 == B.linesCount || 1 > c.childNodes.length) l = document.createElement("DIV"), c.appendChild(l), l.style.whiteSpace = "nowrap", B.linesCount++; else try {
										l = c.childNodes[c.childNodes.length -
										1]
									} catch (m) { l = document.createElement("DIV"), c.appendChild(l), l.style.whiteSpace = "nowrap", B.linesCount++ } var q = document.createElement("SPAN"); l.appendChild(q); q.style.whiteSpace = "nowrap"; b && (q.style.color = b); l = h[d]; 0 == l.length && (l = ca); q.appendChild(document.createTextNode(l)); B.pinning || (c.scrollTop += 100); B.metLineBreak = d != j || e
								} d = c.parentNode.className; !B.pinning && (d && -1 != d.indexOf("composite")) && (c.parentNode.scrollTop = c.parentNode.scrollHeight); B.lastOutputTime = (new Date).getTime()
						}; B.clear = function () {
							try {
								B.metLineBreak =
								!0; var a = window["j2s.lib"], b = a && a.console; if (b && (b = document.getElementById(b))) { for (var c = b.childNodes, d = c.length; 0 <= --d;)b.removeChild(c[d]); B.linesCount = 0 }
							} catch (e) { }
						}; a.alert = function (a) { B.consoleOutput(a + "\r\n") }; X.out.print = function (a) { B.consoleOutput(a) }; X.out.println = function (a) { B.consoleOutput("undefined" == typeof a ? "\r\n" : null == a ? "null\r\n" : a + "\r\n") }; X.out.write = function (a, b, c) { X.out.print(String.instantialize(a).substring(b, b + c)) }; X.err.__CLASS_NAME__ = "java.io.PrintStream"; X.err.print = function (a) {
							B.consoleOutput(a,
								"red")
						}; X.err.println = function (a) { B.consoleOutput("undefined" == typeof a ? "\r\n" : null == a ? "null\r\n" : a + "\r\n", "red") }; X.err.write = function (a, b, c) { X.err.print(String.instantialize(a).substring(b, b + c)) }
	}(Clazz, Jmol))
}; Jmol.___JmolDate = "$Date: 2023-07-05 08:40:43 -0500 (Wed, 05 Jul 2023) $"; Jmol.___fullJmolProperties = "src/org/jmol/viewer/Jmol.properties"; Jmol.___JmolVersion = "16.1.19";
/* 

Jmol2.js   (JSmol version)
author: Bob Hanson hansonr@stolaf.edu 5/24/2013 12:06:25 PM

Script replacement for legacy Jmol.js that uses JSmol instead.
Can be used to turn most legacy Jmol.js-based sites to JSmol.

BH 1/23/2018 11:09:40 AM adding jmolScript(..."all")
BH 1/16/2014 10:33:46 PM adding serverURL indication, more notes
BH 1/13/2014 11:14:12 AM incorrect default for missing jmolInitialize() (should be ".")
BH 1/8/2014 5:56:15 AM simplified instructions; removed option for self.Info
BH 11/12/2013 6:34:22 AM adds jmolAppletInline()
BH 9/23/2013 10:07:16 PM adds set of loadInline functions
BH 9/19/2013 7:09:41 AM  fixed jmolSetTarget() to accept "0" as a suffix; use of undefined --> null

Summary:

You should not have to change any of your HTML pages.
You are going to replace Jmol.js, wherever that is, with this file.
You are going to replace all your JAR file with the ones in this distribution.
You are going to add about 1000 files in the jsmol/j2s directory to your website. 
	Don't worry; only a few will be called. But you won't know which ones.
You will be able to switch from HTML5 to JAVA using ?_USE=SIGNED in the URL

Procedure:

1a) If you want to use HTML5, copy all jsmol/j2s/* files into a j2s subdirectory 
		in the directory that contains Jmol.js and your old Jmol jar files.

1b) If you are not using HTML5, change the "use" parameter below from "HTML5" to "JAVA" and save this file.
		Copy all the jsmol/java/* files into the directory containing your current JAR files. This adds
		four JNLP files as well and will replace all your JAR files.

2) Rename your current Jmol.js file Jmol_old.js in case you want to undo this.

3) Concatenate JSmol.min.js if you are not using jQuery (or JSmol.min.nojq.js if you are)
	 with this file to form a new file (Jmol.min.js first, then Jmol2.js) and replace your
	 current Jmol.js with it. Note that if you are using your own version of jQuery, it
	 must be version 1.9 or higher, and note that 2.0 or higher will not work with MSIE
	 used locally but accessing remote resources. See http://bugs.jquery.com/ticket/14876
	 
4) Try your page and see how it goes. You may still have some problems, because not all of the 
	 methods in the original Jmol.js are included here. Let me know if that's the case.

Note that if you are using Jmol.setDocument(0) along with jmolApplet() and then placing
the JSmol HTML code into your document yourself, then you may need to follow that
jQuery .html() or .innerHTML =   call with 
   
	  jmolApplet0._cover(false)

in order to start the applet.

Also, note that jmolApplet() now returns the actual object, not a string, so if you use that function,
then you must use jmolApplet(...)._code to get the actual HTML code for the applet. For example:

   document.getElementById("myDiv").innerHTML = jmolApplet([width,height], readyScript, 1)._code

not

   document.getElementById("myDiv").innerHTML = jmolApplet([width,height], readyScript, 1)

	   
If you wish to change the directories your j2s or JAR files and override the default settings
(old JAR file location; j2s directory in the directory of those JAR files) and thus override
your current settings in your HTML files, then you can to that three ways:

a) You can change the parameters below to override what your pages already use by uncommenting
	 one or the other of the jarPath and j2sPath definitions. This will override jmolInitialize
	 in ALL your HTML files. 
	 
b) You can change your jmolInitialization call in an individual HTML file. This sets both 
	 the JAR path and the j2s path (as [jarPath]/j2s) together.

c) You can add lines to an individual HTML file along the lines of:

		Jmol.Info.jarPath = "../../Jmol"
		Jmol.Info.j2sPath = "../../JSmol"

	 or whatever. This will override jmolInitialize in that specific HTML file only. 
 
Note that: 

 -- FireFox works great. You will be able to read binary files from your local machine
 -- Chrome can only read local files if started with the  --allow-file-access-from-files  flag
		and even then the files must be ASCII, not binary.
 -- MSIE and Safari cannot work with local pages

*/

Jmol.Info = {
	// uncomment one or more of these next lines only if you want to override jmolInitialize()
	//jarPath: "java", 
	//jarFile: "JmolAppletSigned0.jar", 
	//j2sPath: "j2s", 
	use: "HTML5", // could be JAVA or HTML5
	// the serverURL path is only used to load binary files in Safari, Chrome, and MSIE
	serverURL: "http://your.server.here/jsmol.php", // required for binary file loading (Spartan, .gz, .map, etc.)
	disableJ2SLoadMonitor: false,
	disableInitialConsole: true

}

////////// private functions /////////////

var _jmol = {
	appletCount: 0,
	applets: {},
	allowedJmolSize: [25, 2048, 300],   // min, max, default (pixels)
	codebase: ".",
	targetSuffix: 0,
	target: "jmolApplet0",
	buttonCount: 0,
	checkboxCount: 0,
	linkCount: 0,
	cmdCount: 0,
	menuCount: 0,
	radioCount: 0,
	radioGroupCount: 0,
	initialized: false,
	initChecked: false,
	archivePath: "JmolAppletSigned0.jar"
}

function _jmolApplet(size, inlineModel, script, nameSuffix) {
	nameSuffix == null && (nameSuffix = _jmol.appletCount);
	var id = "jmolApplet" + nameSuffix;
	jmolSetTarget(nameSuffix);
	++_jmol.appletCount;
	script || (script = "select *");
	inlineModel && (script = 'load DATA "inline"\n' + inlineModel + '\nEND "inline";' + script);
	var Info = {}
	for (var i in Jmol.Info)
		Info[i] = Jmol.Info[i]
	Info.jarFile || (Info.jarFile = _jmol.archivePath);
	Info.jarPath || (Info.jarPath = _jmol.codebase);
	Info.j2sPath || (Info.j2sPath = Info.jarPath + "/j2s");
	var sz = _jmolGetAppletSize(size);
	Info.width || (Info.width = sz[0]);
	Info.height || (Info.height = sz[1]);
	Info.script || (Info.script = script);
	Info.isSigned == null && (Info.isSigned = (Info.jarFile.indexOf("Signed") >= 0));
	for (var i in _jmol.params)
		if (_jmol.params[i] != "")
			Info[i] || (Info[i] = _jmol.params[i]);
	//  alert(JSON.stringify(Info).replace(/\,/g,"\n\n\n\n"))
	return _jmol.applets[id] = Jmol.getApplet(id, Info)
}

function _jmolGetJarFilename(fileNameOrFlag) {
	_jmol.archivePath =
		(typeof (fileNameOrFlag) == "string" ? fileNameOrFlag : (fileNameOrFlag ? "JmolAppletSigned" : "JmolApplet") + "0.jar");
}

////////////////////////////////////////////////////////////////
// Legacy Scripting API
////////////////////////////////////////////////////////////////

function jmolSetParameter(key, value) {
	Jmol.Info[key] = value;
}

function jmolSetXHTML(id) {
	Jmol.setXHTML(id);
}

function jmolSetTranslation(TF) {
	// n/a
}

function jmolInitialize(codebaseDirectory, fileNameOrUseSignedApplet) {
	if (_jmol.initialized)
		return;
	_jmol.initialized = true;
	if (_jmol.jmoljar) {
		var f = _jmol.jmoljar;
		if (f.indexOf("/") >= 0) {
			alert("This web page URL is requesting that the applet used be " + f + ". This is a possible security risk, particularly if the applet is signed, because signed applets can read and write files on your local machine or network.")
			var ok = prompt("Do you want to use applet " + f + "? ", "yes or no")
			if (ok == "yes") {
				codebaseDirectory = f.substring(0, f.lastIndexOf("/"));
				fileNameOrUseSignedApplet = f.substring(f.lastIndexOf("/") + 1);
			} else {
				_jmolGetJarFilename(fileNameOrUseSignedApplet);
				alert("The web page URL was ignored. Continuing using " + _jmol.archivePath + ' in directory "' + codebaseDirectory + '"');
			}
			
			fileNameOrUseSignedApplet = f;
		}
	}
	_jmol.codebase = codebaseDirectory;
	_jmolGetJarFilename(fileNameOrUseSignedApplet);
}

function jmolSetDocument(doc) {
	_jmol.currentDocument = Jmol._document = doc;
}

function jmolSetAppletColor(boxbgcolor, boxfgcolor, progresscolor) {
	Jmol.Info.color = boxbgcolor ? boxbgcolor : "black";
}

function jmolSetAppletWindow(w) {
	_jmol.appletWindow = w;
}

function jmolApplet(size, script, nameSuffix) {
	return _jmolApplet(size, null, script, nameSuffix);
}

function jmolAppletInline(size, inlineModel, script, nameSuffix) {
	return _jmolApplet(size, inlineModel, script, nameSuffix);
}



////////////////////////////////////////////////////////////////
// Basic controls
////////////////////////////////////////////////////////////////

function jmolButton(script, label, id, title) {
	return Jmol.jmolButton(_jmol.target, script, label, id, title);
}

function jmolCheckbox(scriptWhenChecked, scriptWhenUnchecked, labelHtml, isChecked, id, title) {
	return Jmol.jmolCheckbox(_jmol.target, scriptWhenChecked, scriptWhenUnchecked, labelHtml, isChecked, id, title)
}

function jmolRadioGroup(arrayOfRadioButtons, separatorHtml, groupName, id, title) {
	return Jmol.jmolRadioGroup(_jmol.target, arrayOfRadioButtons, separatorHtml, groupName, id, title)
}


function jmolRadio(script, labelHtml, isChecked, separatorHtml, groupName, id, title) {
	return Jmol.jmolRadio(_jmol.target, script, labelHtml, isChecked, separatorHtml, groupName, id, title)
}

function jmolLink(script, label, id, title) {
	return Jmol.jmolLink(_jmol.target, script, label, id, title)
}

function jmolCommandInput(label, size, id, title) {
	return Jmol.jmolCommandInput(_jmol.target, label, size, id, title);
}

function jmolMenu(arrayOfMenuItems, size, id, title) {
	return Jmol.jmolMenu(_jmol.target, arrayOfMenuItems, size, id, title);
}

function jmolHtml(html) {
	return Jmol._documentWrite(html);
}

function jmolBr() {
	return Jmol._documentWrite("<br />");
}

////////////////////////////////////////////////////////////////
// advanced scripting functions
////////////////////////////////////////////////////////////////

function jmolDebugAlert(enableAlerts) {
	// n/a
}


function jmolLoadInline(model, targetSuffix) {
	return jmolLoadInlineScript(model, null, targetSuffix, false)
}

function jmolLoadInlineArray(ModelArray, script, targetSuffix) {
	return jmolLoadInlineScript(ModelArray.join("\n"), script, targetSuffix, false)
}

function jmolAppendInlineArray(ModelArray, script, targetSuffix) {
	return jmolLoadInlineScript(ModelArray.join("\n"), script, targetSuffix, true)
}

function jmolAppendInlineScript(model, script, targetSuffix) {
	return jmolLoadInlineScript(model, script, targetSuffix, true)
}

function jmolLoadInlineScript(model, script, targetSuffix, isAppend) {
	Jmol.script(jmolFindTarget(targetSuffix),
		"load "
		+ (isAppend ? "APPEND " : "")
		+ "DATA 'mydata'\n" + model.replace(/\"/g, '\\"') + "\nEND 'mydata'\n")
}

function jmolSetTarget(targetSuffix) {
	targetSuffix == null || (_jmol.targetSuffix = targetSuffix);
	return _jmol.target = "jmolApplet" + _jmol.targetSuffix;
}

function jmolFindTarget(targetSuffix) {
	return _jmol.applets[jmolSetTarget(targetSuffix)];
}

function jmolScript(script, targetSuffix) {
	if (targetSuffix == "all") {
		for (var app in Jmol._applets) {
			var applet = (app.indexOf("__") >= 0 ? null : Jmol._applets[app]);
			if (applet) applet.script(script);
		}
	} else {
		Jmol.script(jmolFindTarget(targetSuffix), script)
	}
}

function jmolCheckBrowser(action, urlOrMessage, nowOrLater) {
	// unnecessary
}

////////////////////////////////////////////////////////////////
// Cascading Style Sheet Class support
////////////////////////////////////////////////////////////////

function jmolSetAppletCssClass(appletCssClass) {
	Jmol.setAppletCss(appletCssClass)
}

function jmolSetButtonCssClass(s) {
	Jmol.setButtonCss(s)
}

function jmolSetCheckboxCssClass(s) {
	Jmol.setCheckboxCss(s)
}

function jmolSetRadioCssClass(s) {
	Jmol.setRadioCss(s)
}

function jmolSetLinkCssClass(s) {
	Jmol.setLinkCss(s)
}

function jmolSetMenuCssClass(s) {
	Jmol.setMenuCss(s)
}

function jmolSetMemoryMb(nMb) {
	// n/a
}


function jmolSetCallback(callbackName, funcName) {
	//if(!self[funcName])alert(funcName + " is not defined yet in jmolSetCallback")
	Jmol.Info[callbackName] = funcName
	//document.title=("jmolSetCallback " + callbackName + "/" + funcName + " must be included in Info definition")
}

function jmolSetSyncId(n) {
	alert("jmolSetSyncId " + n + " must be included in Info definition")
}

function jmolSetLogLevel(n) {
	Jmol.script(_jmol.target, "set loglevel " + n)
}

function _jmolGetAppletSize(size, units) {
	var width, height;
	if ((typeof size) == "object" && size != null) {
		width = size[0]; height = size[1];
	} else {
		width = height = size;
	}
	return [_jmolFixDim(width, units), _jmolFixDim(height, units)];
}

function _jmolFixDim(x, units) {
	var sx = "" + x;
	return (sx.length == 0 ? (units ? "" : _jmol.allowedJmolSize[2])
		: sx.indexOf("%") == sx.length - 1 ? sx
			: (x = parseFloat(x)) <= 1 && x > 0 ? x * 100 + "%"
				: (isNaN(x = Math.floor(x)) ? _jmol.allowedJmolSize[2]
					: x < _jmol.allowedJmolSize[0] ? _jmol.allowedJmolSize[0]
						: x > _jmol.allowedJmolSize[1] ? _jmol.allowedJmolSize[1]
							: x) + (units ? units : ""));
}

//////////user property/status functions/////////

function jmolGetStatus(strStatus, targetSuffix) {
	return Jmol.getStatus(jmolFindTarget(targetSuffix), strStatus)
}

function jmolGetPropertyAsArray(sKey, sValue, targetSuffix) {
	return Jmol.getPropertyAsArray(jmolFindTarget(targetSuffix), sKey, sValue)
}

function jmolGetPropertyAsString(sKey, sValue, targetSuffix) {
	return Jmol.getPropertyAsString(jmolFindTarget(targetSuffix), sKey, sValue)
}

function jmolGetPropertyAsJSON(sKey, sValue, targetSuffix) {
	return Jmol.getPropertyAsJSON(jmolFindTarget(targetSuffix), sKey, sValue)
}

function jmolGetPropertyAsJavaObject(sKey, sValue, targetSuffix) {
	return Jmol.getPropertyAsJavaObject(jmolFindTarget(targetSuffix), sKey, sValue)
}

///////// synchronous scripting ////////

function jmolScriptWait(script, targetSuffix) {
	return Jmol.scriptWait(jmolFindTarget(targetSuffix), script)
}

function jmolScriptWaitOutput(script, targetSuffix) {
	return Jmol.scriptWaitOutput(jmolFindTarget(targetSuffix), script)
}

function jmolEvaluate(molecularMath, targetSuffix) {
	return Jmol.evaluate(jmolFindTarget(targetSuffix), molecularMath)
}

function jmolScriptEcho(script, targetSuffix) {
	return Jmol.scriptEcho(jmolFindTarget(targetSuffix), script)
}


function jmolScriptMessage(script, targetSuffix) {
	return Jmol.scriptMessage(jmolFindTarget(targetSuffix), script)
}


function jmolScriptWaitAsArray(script, targetSuffix) {
	return Jmol.scriptWait(jmolFindTarget(targetSuffix), script)
}



////////////   save/restore orientation   /////////////

function jmolSaveOrientation(id, targetSuffix) {
	return Jmol.saveOrientation(jmolFindTarget(targetSuffix), id)
}

function jmolRestoreOrientation(id, targetSuffix) {
	return Jmol.restoreOrientation(jmolFindTarget(targetSuffix), id)
}

function jmolRestoreOrientationDelayed(id, delay, targetSuffix) {
	return Jmol.restoreOrientationDelayed(jmolFindTarget(targetSuffix), id, delay)
}

function jmolResizeApplet(size, targetSuffix) {
	return Jmol.resizeApplet(jmolFindTarget(targetSuffix), size);
}


////////////  add parameter /////////////

function jmolAppletAddParam(appletCode, name, value) {
	alert("use Info to add a parameter: " + name + "/" + value)
}
