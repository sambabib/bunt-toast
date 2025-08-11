import { defineComponent as p, ref as r, onMounted as c, onBeforeUnmount as m, createElementBlock as d, createCommentVNode as f, openBlock as g, normalizeClass as u, createElementVNode as l, toDisplayString as v } from "vue";
const y = p({
  name: "VueToast",
  props: {
    message: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: "success"
    },
    duration: {
      type: Number,
      default: 3e3
    },
    position: {
      type: String,
      default: "bottom-right"
    },
    theme: {
      type: String,
      default: "auto"
    }
  },
  emits: ["hide"],
  setup(e, { emit: n }) {
    const t = r(!0), o = r(!1), s = r(!1);
    let i = null;
    const a = () => {
      n("hide");
    };
    return c(() => {
      setTimeout(() => {
        o.value = !0;
      }, 10), i = setTimeout(() => {
        s.value = !0, setTimeout(() => {
          t.value = !1, a();
        }, 350);
      }, e.duration);
    }), m(() => {
      i && clearTimeout(i);
    }), {
      show: t,
      isVisible: o,
      exiting: s,
      onAfterLeave: a
    };
  }
}), h = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, s] of n)
    t[o] = s;
  return t;
}, V = { class: "toast-content" };
function b(e, n, t, o, s, i) {
  return e.show ? (g(), d("div", {
    key: 0,
    class: u(["toast-container", e.position, e.type, e.theme, e.isVisible ? "visible" : ""])
  }, [
    l("div", {
      class: u(["toast-outer", e.type, e.exiting ? "exit" : ""])
    }, [
      l("div", V, v(e.message), 1)
    ], 2)
  ], 2)) : f("", !0);
}
const _ = /* @__PURE__ */ h(y, [["render", b], ["__scopeId", "data-v-a2ab348f"]]);
export {
  _ as V
};
//# sourceMappingURL=Toast-Duto2AB9.js.map
