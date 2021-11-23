/**
 * SystemJS 4.0.2
 * MANUAL PATCH: remove script.crossOrigin = "anonymous"
 * MANUAL PATCH: add conditionally apply, n.System=n.System||new u
 */
!(function () {
  var e = 'undefined' != typeof self,
    n = e ? self : global;
  var t;
  if ('undefined' != typeof document) {
    var e = document.querySelector('base[href]');
    e && (t = e.href);
  }
  if (!t && 'undefined' != typeof location) {
    var e = (t = location.href.split('#')[0].split('?')[0]).lastIndexOf('/');
    -1 !== e && (t = t.slice(0, e + 1));
  }
  var r = /\\/g,
    o = 'undefined' != typeof Symbol,
    i = o && Symbol.toStringTag,
    c = o ? Symbol() : '@';
  function u() {
    this[c] = {};
  }
  var s = u.prototype;
  var l;
  (s.import = function (e, n) {
    var t = this;
    return Promise.resolve(t.resolve(e, n)).then(function (e) {
      var n = (function e(n, t, r) {
        var o = n[c][t];
        if (o) return o;
        var u = [],
          s = Object.create(null);
        i && Object.defineProperty(s, i, { value: 'Module' });
        var l = Promise.resolve()
          .then(function () {
            return n.instantiate(t, r);
          })
          .then(function (e) {
            if (!e) throw Error('Module ' + t + ' did not instantiate');
            var r = e[1](
              function (e, n) {
                o.h = !0;
                var t = !1;
                if ('object' != typeof e) (e in s && s[e] === n) || ((s[e] = n), (t = !0));
                else
                  for (var n in e) {
                    var r = e[n];
                    (n in s && s[n] === r) || ((s[n] = r), (t = !0));
                  }
                if (t) for (var e = 0; e < u.length; e++) u[e](s);
                return n;
              },
              2 === e[1].length
                ? {
                    import: function (e) {
                      return n.import(e, t);
                    },
                    meta: n.createContext(t),
                  }
                : void 0,
            );
            return (o.e = r.execute || function () {}), [e[0], r.setters || []];
          });
        var f = l.then(function (r) {
          return Promise.all(
            r[0].map(function (o, i) {
              var c = r[1][i];
              return Promise.resolve(n.resolve(o, t)).then(function (r) {
                var o = e(n, r, t);
                return Promise.resolve(o.I).then(function () {
                  return c && (o.i.push(c), (!o.h && o.I) || c(o.n)), o;
                });
              });
            }),
          ).then(function (e) {
            o.d = e;
          });
        });
        return (
          f.catch(function (e) {
            (o.e = null), (o.er = e);
          }),
          (o = n[c][t] = { id: t, i: u, n: s, I: l, L: f, h: !1, d: void 0, e: void 0, er: void 0, E: void 0, C: void 0 })
        );
      })(t, e);
      return (
        n.C ||
        (function (e, n) {
          return (n.C = (function e(n, t, r) {
            if (!r[t.id])
              return (
                (r[t.id] = !0),
                Promise.resolve(t.L).then(function () {
                  return Promise.all(
                    t.d.map(function (t) {
                      return e(n, t, r);
                    }),
                  );
                })
              );
          })(e, n, {})
            .then(function () {
              return (function e(n, t, r) {
                if (r[t.id]) return;
                if (((r[t.id] = !0), !t.e)) {
                  if (t.er) throw t.er;
                  return t.E ? t.E : void 0;
                }
                var o;
                return (
                  t.d.forEach(function (t) {
                    {
                      var i = e(n, t, r);
                      i && (o = o || []).push(i);
                    }
                  }),
                  o ? Promise.all(o).then(i) : i()
                );
                function i() {
                  try {
                    var e = t.e.call(f);
                    if (e)
                      return (
                        (e = e.then(function () {
                          (t.C = t.n), (t.E = null);
                        })),
                        (t.E = t.E || e)
                      );
                    t.C = t.n;
                  } catch (e) {
                    throw ((t.er = e), e);
                  } finally {
                    (t.L = t.I = void 0), (t.e = null);
                  }
                }
              })(e, n, {});
            })
            .then(function () {
              return n.n;
            }));
        })(t, n)
      );
    });
  }),
    (s.createContext = function (e) {
      return { url: e };
    }),
    (s.register = function (e, n) {
      l = [e, n];
    }),
    (s.getRegister = function () {
      var e = l;
      return (l = void 0), e;
    });
  var f = Object.freeze(Object.create(null));
  n.System = n.System || new u();
  var d = s.register;
  (s.register = function (e, n) {
    d.call(this, e, n);
  }),
    (s.instantiate = function (e, n) {
      var t = this;
      return '.json' === e.substr(-5)
        ? fetch(e)
            .then(function (e) {
              return e.text();
            })
            .then(function (e) {
              return [
                [],
                function (n) {
                  return {
                    execute: function () {
                      n('default', JSON.parse(e));
                    },
                  };
                },
              ];
            })
        : new Promise(function (r, o) {
            var i;
            function c(n) {
              n.filename === e && (i = n.error);
            }
            window.addEventListener('error', c);
            var u = document.createElement('script');
            (u.charset = 'utf-8'),
              (u.async = !0),
              u.addEventListener('error', function () {
                window.removeEventListener('error', c), o(Error('Error loading ' + e + (n ? ' from ' + n : '')));
              }),
              u.addEventListener('load', function () {
                window.removeEventListener('error', c), document.head.removeChild(u), i ? o(i) : r(t.getRegister());
              }),
              (u.src = e),
              document.head.appendChild(u);
          });
    }),
    e &&
      'function' == typeof importScripts &&
      (s.instantiate = function (e) {
        var n = this;
        return new Promise(function (t, r) {
          try {
            importScripts(e);
          } catch (e) {
            r(e);
          }
          t(n.getRegister());
        });
      }),
    (s.resolve = function (e, n) {
      var o = (function (e, n) {
        if ((-1 !== e.indexOf('\\') && (e = e.replace(r, '/')), '/' === e[0] && '/' === e[1])) return n.slice(0, n.indexOf(':') + 1) + e;
        if (('.' === e[0] && ('/' === e[1] || ('.' === e[1] && ('/' === e[2] || (2 === e.length && (e += '/')))) || (1 === e.length && (e += '/')))) || '/' === e[0]) {
          var t = n.slice(0, n.indexOf(':') + 1);
          var r;
          if (
            ((r = '/' === n[t.length + 1] ? ('file:' !== t ? (r = n.slice(t.length + 2)).slice(r.indexOf('/') + 1) : n.slice(8)) : n.slice(t.length + ('/' === n[t.length]))),
            '/' === e[0])
          )
            return n.slice(0, n.length - r.length - 1) + e;
          var o = r.slice(0, r.lastIndexOf('/') + 1) + e,
            i = [];
          var c = -1;
          for (var e = 0; e < o.length; e++)
            -1 !== c
              ? '/' === o[e] && (i.push(o.slice(c, e + 1)), (c = -1))
              : '.' === o[e]
              ? '.' !== o[e + 1] || ('/' !== o[e + 2] && e + 2 !== o.length)
                ? '/' === o[e + 1] || e + 1 === o.length
                  ? (e += 1)
                  : (c = e)
                : (i.pop(), (e += 2))
              : (c = e);
          return -1 !== c && i.push(o.slice(c)), n.slice(0, n.length - r.length) + i.join('');
        }
      })(e, n || t);
      if (!o) {
        if (-1 !== e.indexOf(':')) return Promise.resolve(e);
        throw Error('Cannot resolve "' + e + (n ? '" from ' + n : '"'));
      }
      return Promise.resolve(o);
    });
})();
