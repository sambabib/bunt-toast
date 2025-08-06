import xe, { useState as H, useRef as vr, useEffect as dr } from "react";
var ee = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function pr() {
  if (Oe) return W;
  Oe = 1;
  var A = xe, T = Symbol.for("react.element"), x = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, w = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(R, c, E) {
    var f, g = {}, b = null, j = null;
    E !== void 0 && (b = "" + E), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (j = c.ref);
    for (f in c) m.call(c, f) && !h.hasOwnProperty(f) && (g[f] = c[f]);
    if (R && R.defaultProps) for (f in c = R.defaultProps, c) g[f] === void 0 && (g[f] = c[f]);
    return { $$typeof: T, type: R, key: b, ref: j, props: g, _owner: w.current };
  }
  return W.Fragment = x, W.jsx = C, W.jsxs = C, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function _r() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var A = xe, T = Symbol.for("react.element"), x = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), R = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), q = Symbol.iterator, $ = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[$];
      return typeof r == "function" ? r : null;
    }
    var k = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var De = !1, Fe = !1, Ae = !1, $e = !1, Ie = !1, re;
    re = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === h || Ie || e === w || e === E || e === f || $e || e === j || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === g || e.$$typeof === C || e.$$typeof === R || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case x:
          return "Portal";
        case h:
          return "Profiler";
        case w:
          return "StrictMode";
        case E:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return te(r) + ".Consumer";
          case C:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return We(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case b: {
            var i = e, s = i._payload, o = i._init;
            try {
              return y(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, I = 0, ne, ae, oe, ie, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ye() {
      {
        if (I === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function qe() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ne
            }),
            info: O({}, e, {
              value: ae
            }),
            warn: O({}, e, {
              value: oe
            }),
            error: O({}, e, {
              value: ie
            }),
            group: O({}, e, {
              value: se
            }),
            groupCollapsed: O({}, e, {
              value: ue
            }),
            groupEnd: O({}, e, {
              value: le
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = k.ReactCurrentDispatcher, J;
    function V(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var K = !1, M;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ve();
    }
    function fe(e, r) {
      if (!e || K)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (p) {
              n = p;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var a = p.stack.split(`
`), d = n.stack.split(`
`), u = a.length - 1, l = d.length - 1; u >= 1 && l >= 0 && a[u] !== d[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== d[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== d[l]) {
                    var _ = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, _), _;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        K = !1, B.current = s, qe(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", S = F ? V(F) : "";
      return typeof e == "function" && M.set(e, S), S;
    }
    function Me(e, r, t) {
      return fe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ue(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case E:
          return V("Suspense");
        case f:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Me(e.render);
          case g:
            return U(e.type, r, t);
          case b: {
            var n = e, i = n._payload, s = n._init;
            try {
              return U(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ve = {}, de = k.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, i) {
      {
        var s = Function.call.bind(L);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (N(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), N(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, N(i), v("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Be = Array.isArray;
    function z(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ke(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), pe(e);
    }
    var ge = k.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, he;
    function Ge(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: T,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, d = null;
        t !== void 0 && (_e(t), a = "" + t), Xe(r) && (_e(r.key), a = "" + r.key), Ge(r) && (d = r.ref, Ze(r, i));
        for (s in r)
          L.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, l), d && He(o, l);
        }
        return er(e, a, d, i, n, ge.current, o);
      }
    }
    var G = k.ReactCurrentOwner, Re = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    function me() {
      {
        if (G.current) {
          var e = y(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Ee = {};
    function nr(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + y(e._owner.type) + "."), D(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && ye(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Z(o.value) && ye(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = y(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var we = {};
    function Ce(e, r, t, n, i, s) {
      {
        var o = Le(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = tr();
          d ? a += d : a += me();
          var u;
          e === null ? u = "null" : z(e) ? u = "array" : e !== void 0 && e.$$typeof === T ? (u = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = rr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (z(_)) {
                for (var F = 0; F < _.length; F++)
                  Te(_[F], e);
                Object.freeze && Object.freeze(_);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(_, e);
        }
        if (L.call(r, "key")) {
          var S = y(e), p = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Q = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[S + Q]) {
            var cr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, S, cr, S), we[S + Q] = !0;
          }
        }
        return e === m ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    Y.Fragment = m, Y.jsx = ur, Y.jsxs = lr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ee.exports = pr() : ee.exports = _r();
var Pe = ee.exports;
const gr = "_toastContainer_1wrqi_20", br = "_topRight_1wrqi_45", hr = "_topLeft_1wrqi_50", Rr = "_bottomRight_1wrqi_55", mr = "_bottomLeft_1wrqi_60", Er = "_toastContent_1wrqi_65", yr = "_visible_1wrqi_111", Tr = "_exit_1wrqi_117", wr = "_success_1wrqi_145", Cr = "_error_1wrqi_153", Or = "_info_1wrqi_161", Sr = "_light_1wrqi_170", Pr = "_dark_1wrqi_178", P = {
  toastContainer: gr,
  topRight: br,
  topLeft: hr,
  bottomRight: Rr,
  bottomLeft: mr,
  toastContent: Er,
  visible: yr,
  exit: Tr,
  success: wr,
  error: Cr,
  info: Or,
  light: Sr,
  dark: Pr
}, jr = ({
  message: A,
  type: T = "success",
  duration: x = 3e3,
  position: m = "bottom-right",
  theme: w = "auto",
  onHide: h
}) => {
  const [C, R] = H(!1), [c, E] = H(!1), [f, g] = H(!0), b = vr(null);
  if (dr(() => {
    const $ = setTimeout(() => {
      R(!0);
    }, 10);
    return b.current = setTimeout(() => {
      E(!0), setTimeout(() => {
        g(!1), h == null || h();
      }, 350);
    }, x), () => {
      b.current && clearTimeout(b.current), clearTimeout($);
    };
  }, [x, h]), !f) return null;
  const j = m.replace(/-([a-z])/g, ($) => $[1].toUpperCase()), q = w !== "auto" ? P[w] : "";
  return /* @__PURE__ */ Pe.jsx(
    "div",
    {
      className: `${P.toastContainer} ${P[j]} ${C ? P.visible : ""} ${q}`,
      children: /* @__PURE__ */ Pe.jsx("div", { className: `${P.toastContent} ${P[T]} ${c ? P.exit : ""}`, children: A })
    }
  );
};
export {
  jr as R
};
//# sourceMappingURL=Toast-CeHbBvUu.js.map
