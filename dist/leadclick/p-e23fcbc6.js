let e,
  t,
  n = !1;
const l = 'undefined' != typeof window ? window : {},
  s = l.document || { head: {} },
  o = {
    t: 0,
    l: '',
    jmp: e => e(),
    raf: e => requestAnimationFrame(e),
    ael: (e, t, n, l) => e.addEventListener(t, n, l),
    rel: (e, t, n, l) => e.removeEventListener(t, n, l),
    ce: (e, t) => new CustomEvent(e, t),
  },
  r = e => Promise.resolve(e),
  i = (() => {
    try {
      return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replace;
    } catch (e) {}
    return !1;
  })(),
  c = new WeakMap(),
  u = e => 'sc-' + e.o,
  a = {},
  f = e => 'object' == (e = typeof e) || 'function' === e,
  $ = (e, t, ...n) => {
    let l = null,
      s = !1,
      o = !1,
      r = [];
    const i = t => {
      for (let n = 0; n < t.length; n++)
        (l = t[n]),
          Array.isArray(l)
            ? i(l)
            : null != l && 'boolean' != typeof l && ((s = 'function' != typeof e && !f(l)) && (l += ''), s && o ? (r[r.length - 1].i += l) : r.push(s ? h(null, l) : l), (o = s));
    };
    if ((i(n), t)) {
      const e = t.className || t.class;
      e &&
        (t.class =
          'object' != typeof e
            ? e
            : Object.keys(e)
                .filter(t => e[t])
                .join(' '));
    }
    const c = h(e, null);
    return (c.u = t), r.length > 0 && (c.$ = r), c;
  },
  h = (e, t) => ({ t: 0, h: e, i: t, p: null, $: null, u: null }),
  y = {},
  d = (e, t, n, s, r, i) => {
    if (n !== s) {
      let c = N(e, t),
        u = t.toLowerCase();
      if ('class' === t) {
        const t = e.classList,
          l = m(n),
          o = m(s);
        t.remove(...l.filter(e => e && !o.includes(e))), t.add(...o.filter(e => e && !l.includes(e)));
      } else if ('style' === t) {
        for (const t in n) (s && null != s[t]) || (t.includes('-') ? e.style.removeProperty(t) : (e.style[t] = ''));
        for (const t in s) (n && s[t] === n[t]) || (t.includes('-') ? e.style.setProperty(t, s[t]) : (e.style[t] = s[t]));
      } else if (c || 'o' !== t[0] || 'n' !== t[1]) {
        const l = f(s);
        if ((c || (l && null !== s)) && !r)
          try {
            if (e.tagName.includes('-')) e[t] = s;
            else {
              let l = null == s ? '' : s;
              'list' === t ? (c = !1) : (null != n && e[t] == l) || (e[t] = l);
            }
          } catch (e) {}
        null == s || !1 === s ? (!1 === s && '' !== e.getAttribute(t)) || e.removeAttribute(t) : (!c || 4 & i || r) && !l && e.setAttribute(t, (s = !0 === s ? '' : s));
      } else (t = '-' === t[2] ? t.slice(3) : N(l, u) ? u.slice(2) : u[2] + t.slice(3)), n && o.rel(e, t, n, !1), s && o.ael(e, t, s, !1);
    }
  },
  p = /\s/,
  m = e => (e ? e.split(p) : []),
  w = (e, t, n, l) => {
    const s = 11 === t.p.nodeType && t.p.host ? t.p.host : t.p,
      o = (e && e.u) || a,
      r = t.u || a;
    for (l in o) l in r || d(s, l, o[l], void 0, n, t.t);
    for (l in r) d(s, l, o[l], r[l], n, t.t);
  },
  b = (t, n, l) => {
    let o,
      r,
      i = n.$[l],
      c = 0;
    if (null !== i.i) o = i.p = s.createTextNode(i.i);
    else if (((o = i.p = s.createElement(i.h)), w(null, i, !1), null != e && o['s-si'] !== e && o.classList.add((o['s-si'] = e)), i.$))
      for (c = 0; c < i.$.length; ++c) (r = b(t, i, c)), r && o.appendChild(r);
    return o;
  },
  S = (e, n, l, s, o, r) => {
    let i,
      c = e;
    for (c.shadowRoot && c.tagName === t && (c = c.shadowRoot); o <= r; ++o) s[o] && ((i = b(null, l, o)), i && ((s[o].p = i), c.insertBefore(i, n)));
  },
  g = (e, t, n, l) => {
    for (; t <= n; ++t) (l = e[t]) && l.p.remove();
  },
  j = (e, t) => e.h === t.h,
  v = (e, t) => {
    const n = (t.p = e.p),
      l = e.$,
      s = t.$,
      o = t.i;
    null === o
      ? (w(e, t, !1),
        null !== l && null !== s
          ? ((e, t, n, l) => {
              let s,
                o = 0,
                r = 0,
                i = t.length - 1,
                c = t[0],
                u = t[i],
                a = l.length - 1,
                f = l[0],
                $ = l[a];
              for (; o <= i && r <= a; )
                null == c
                  ? (c = t[++o])
                  : null == u
                  ? (u = t[--i])
                  : null == f
                  ? (f = l[++r])
                  : null == $
                  ? ($ = l[--a])
                  : j(c, f)
                  ? (v(c, f), (c = t[++o]), (f = l[++r]))
                  : j(u, $)
                  ? (v(u, $), (u = t[--i]), ($ = l[--a]))
                  : j(c, $)
                  ? (v(c, $), e.insertBefore(c.p, u.p.nextSibling), (c = t[++o]), ($ = l[--a]))
                  : j(u, f)
                  ? (v(u, f), e.insertBefore(u.p, c.p), (u = t[--i]), (f = l[++r]))
                  : ((s = b(t && t[r], n, r)), (f = l[++r]), s && c.p.parentNode.insertBefore(s, c.p));
              o > i ? S(e, null == l[a + 1] ? null : l[a + 1].p, n, l, r, a) : r > a && g(t, o, i);
            })(n, l, t, s)
          : null !== s
          ? (null !== e.i && (n.textContent = ''), S(n, null, t, s, 0, s.length - 1))
          : null !== l && g(l, 0, l.length - 1))
      : e.i !== o && (n.data = o);
  },
  M = (e, t) => {
    t && !e.m && t['s-p'] && t['s-p'].push(new Promise(t => (e.m = t)));
  },
  k = (e, t) => {
    if (((e.t |= 16), !(4 & e.t))) return M(e, e.S), X(() => C(e, t));
    e.t |= 512;
  },
  C = (e, t) => {
    const n = e.g;
    return L(void 0, () => O(e, n, t));
  },
  O = async (e, t, n) => {
    const l = e.j,
      o = l['s-rc'];
    n &&
      (e => {
        const t = e.v,
          n = e.j,
          l = t.t,
          o = ((e, t) => {
            let n = u(t),
              l = B.get(n);
            if (((e = 11 === e.nodeType ? e : s), l))
              if ('string' == typeof l) {
                let t,
                  o = c.get((e = e.head || e));
                o || c.set(e, (o = new Set())), o.has(n) || ((t = s.createElement('style')), (t.innerHTML = l), e.insertBefore(t, e.querySelector('link')), o && o.add(n));
              } else e.adoptedStyleSheets.includes(l) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, l]);
            return n;
          })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
        10 & l && ((n['s-sc'] = o), n.classList.add(o + '-h'));
      })(e);
    P(e, t), o && (o.map(e => e()), (l['s-rc'] = void 0));
    {
      const t = l['s-p'],
        n = () => x(e);
      0 === t.length ? n() : (Promise.all(t).then(n), (e.t |= 4), (t.length = 0));
    }
  },
  P = (n, l) => {
    try {
      (l = l.render()),
        (n.t &= -17),
        (n.t |= 2),
        ((n, l) => {
          const s = n.j,
            o = n.M || h(null, null),
            r = (e => e && e.h === y)(l) ? l : $(null, null, l);
          (t = s.tagName), (r.h = null), (r.t |= 4), (n.M = r), (r.p = o.p = s.shadowRoot || s), (e = s['s-sc']), v(o, r);
        })(n, l);
    } catch (e) {
      V(e, n.j);
    }
    return null;
  },
  x = e => {
    const t = e.j,
      n = e.S;
    64 & e.t || ((e.t |= 64), R(t), e.k(t), n || E()), e.m && (e.m(), (e.m = void 0)), 512 & e.t && Q(() => k(e, !1)), (e.t &= -517);
  },
  E = () => {
    R(s.documentElement),
      Q(() =>
        (e => {
          const t = o.ce('appload', { detail: { namespace: 'leadclick' } });
          return e.dispatchEvent(t), t;
        })(l),
      );
  },
  L = (e, t) => (e && e.then ? e.then(t) : t()),
  R = e => e.classList.add('hydrated'),
  T = (e, t, n) => {
    if (t.C) {
      const l = Object.entries(t.C),
        s = e.prototype;
      if (
        (l.map(([e, [l]]) => {
          (31 & l || (2 & n && 32 & l)) &&
            Object.defineProperty(s, e, {
              get() {
                return ((e, t) => W(this).O.get(t))(0, e);
              },
              set(n) {
                ((e, t, n, l) => {
                  const s = W(e),
                    o = s.O.get(t),
                    r = s.t,
                    i = s.g;
                  (n = ((e, t) => (null == e || f(e) ? e : 2 & t ? parseFloat(e) : 1 & t ? e + '' : e))(n, l.C[t][0])),
                    (8 & r && void 0 !== o) || n === o || (s.O.set(t, n), i && 2 == (18 & r) && k(s, !1));
                })(this, e, n, t);
              },
              configurable: !0,
              enumerable: !0,
            });
        }),
        1 & n)
      ) {
        const t = new Map();
        (s.attributeChangedCallback = function (e, n, l) {
          o.jmp(() => {
            const n = t.get(e);
            if (this.hasOwnProperty(n)) (l = this[n]), delete this[n];
            else if (s.hasOwnProperty(n) && 'number' == typeof this[n] && this[n] == l) return;
            this[n] = (null !== l || 'boolean' != typeof this[n]) && l;
          });
        }),
          (e.observedAttributes = l
            .filter(([e, t]) => 15 & t[0])
            .map(([e, n]) => {
              const l = n[1] || e;
              return t.set(l, e), l;
            }));
      }
    }
    return e;
  },
  U = (e, t = {}) => {
    const n = [],
      r = t.exclude || [],
      c = l.customElements,
      a = s.head,
      f = a.querySelector('meta[charset]'),
      $ = s.createElement('style'),
      h = [];
    let y,
      d = !0;
    Object.assign(o, t),
      (o.l = new URL(t.resourcesUrl || './', s.baseURI).href),
      e.map(e => {
        e[1].map(t => {
          const l = { t: t[0], o: t[1], C: t[2], P: t[3] };
          l.C = t[2];
          const s = l.o,
            a = class extends HTMLElement {
              constructor(e) {
                super(e), H((e = this), l), 1 & l.t && e.attachShadow({ mode: 'open' });
              }
              connectedCallback() {
                y && (clearTimeout(y), (y = null)),
                  d
                    ? h.push(this)
                    : o.jmp(() =>
                        (e => {
                          if (0 == (1 & o.t)) {
                            const t = W(e),
                              n = t.v,
                              l = () => {};
                            if (!(1 & t.t)) {
                              t.t |= 1;
                              {
                                let n = e;
                                for (; (n = n.parentNode || n.host); )
                                  if (n['s-p']) {
                                    M(t, (t.S = n));
                                    break;
                                  }
                              }
                              n.C &&
                                Object.entries(n.C).map(([t, [n]]) => {
                                  if (31 & n && e.hasOwnProperty(t)) {
                                    const n = e[t];
                                    delete e[t], (e[t] = n);
                                  }
                                }),
                                (async (e, t, n, l, s) => {
                                  if (0 == (32 & t.t)) {
                                    {
                                      if (((t.t |= 32), (s = z(n)).then)) {
                                        const e = () => {};
                                        (s = await s), e();
                                      }
                                      s.isProxied || (T(s, n, 2), (s.isProxied = !0));
                                      const e = () => {};
                                      t.t |= 8;
                                      try {
                                        new s(t);
                                      } catch (e) {
                                        V(e);
                                      }
                                      (t.t &= -9), e();
                                    }
                                    if (s.style) {
                                      let e = s.style;
                                      const t = u(n);
                                      if (!B.has(t)) {
                                        const l = () => {};
                                        ((e, t, n) => {
                                          let l = B.get(e);
                                          i && n ? ((l = l || new CSSStyleSheet()), l.replace(t)) : (l = t), B.set(e, l);
                                        })(t, e, !!(1 & n.t)),
                                          l();
                                      }
                                    }
                                  }
                                  const o = t.S,
                                    r = () => k(t, !0);
                                  o && o['s-rc'] ? o['s-rc'].push(r) : r();
                                })(0, t, n);
                            }
                            l();
                          }
                        })(this),
                      );
              }
              disconnectedCallback() {
                o.jmp(() => {});
              }
              componentOnReady() {
                return W(this).L;
              }
            };
          (l.R = e[0]), r.includes(s) || c.get(s) || (n.push(s), c.define(s, T(a, l, 1)));
        });
      }),
      ($.innerHTML = n + '{visibility:hidden}.hydrated{visibility:inherit}'),
      $.setAttribute('data-styles', ''),
      a.insertBefore($, f ? f.nextSibling : a.firstChild),
      (d = !1),
      h.length ? h.map(e => e.connectedCallback()) : o.jmp(() => (y = setTimeout(E, 30)));
  },
  A = e => {
    const t = new URL(e, o.l);
    return t.origin !== l.location.origin ? t.href : t.pathname;
  },
  F = new WeakMap(),
  W = e => F.get(e),
  q = (e, t) => F.set((t.g = e), t),
  H = (e, t) => {
    const n = { t: 0, j: e, v: t, O: new Map() };
    return (n.L = new Promise(e => (n.k = e))), (e['s-p'] = []), (e['s-rc'] = []), F.set(e, n);
  },
  N = (e, t) => t in e,
  V = (e, t) => (0, console.error)(e, t),
  _ = new Map(),
  z = e => {
    const t = e.o.replace(/-/g, '_'),
      n = e.R,
      l = _.get(n);
    return l ? l[t] : import(`./${n}.entry.js`).then(e => (_.set(n, e), e[t]), V);
  },
  B = new Map(),
  D = [],
  G = [],
  I = (e, t) => l => {
    e.push(l), n || ((n = !0), t && 4 & o.t ? Q(K) : o.raf(K));
  },
  J = e => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (e) {
        V(e);
      }
    e.length = 0;
  },
  K = () => {
    J(D), J(G), (n = D.length > 0) && o.raf(K);
  },
  Q = e => r().then(e),
  X = I(G, !0);
export { U as b, A as g, $ as h, r as p, q as r };
