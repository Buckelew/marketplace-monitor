const nt = require('./nt')
const it = {
  "vw": "onMutateVw",
  "vh": "onMutateVh",
  "showSearchFilters": "onMutateShowSearchFilters",
  "navLocation": "onMutateNavLocation",
  "resizeEvent": "onMutateResizeEvent",
  "favesCount": "onMutateFavesCount",
  "banishedCount": "onMutateBanishedCount",
  "subareaAbbr": "onMutateSubareaAbbr",
  "geoLocationCrumb": "onMutateGeoLocationCrumb",
  "breadcrumbLocation": "onMutateBreadcrumbLocation",
  "geoLocation": "onMutateGeoLocation",
  "category": "onMutateCategory",
  "section": "onMutateSection",
  "categoryList": "onMutateCategoryList",
  "href": "onMutateHref",
  "item": "onMutateItem",
  "parent": "onMutateParent",
  "attachedToDoc": "onMutateAttachedToDoc",
  "label": "onMutateLabel",
  "value": "onMutateValue",
  "text": "onMutateText",
  "vStat": "onMutateVStat",
  "title": "onMutateTitle",
  "sizeToContent": "onMutateSizeToContent",
  "mode": "onMutateMode",
  "opened": "onMutateOpened",
  "header": "onMutateHeader",
  "footer": "onMutateFooter",
  "active": "onMutateActive",
  "viewMode": "onMutateViewMode",
  "sortMode": "onMutateSortMode",
  "filter": "onMutateFilter",
  "overflowState": "onMutateOverflowState",
  "sectionAbbr": "onMutateSectionAbbr",
  "sortModeList": "onMutateSortModeList",
  "viewModeList": "onMutateViewModeList",
  "filtersMutated": "onMutateFiltersMutated",
  "placeholder": "onMutatePlaceholder",
  "hasInitialFilters": "onMutateHasInitialFilters",
  "pageDate": "onMutatePageDate",
  "galleyCardsPerRow": "onMutateGalleyCardsPerRow",
  "contentBox": "onMutateContentBox",
  "retrieving": "onMutateRetrieving",
  "categoryAbbr": "onMutateCategoryAbbr",
  "retrievingFullResults": "onMutateRetrievingFullResults",
  "mapMessage1": "onMutateMapMessage1"
}

const W = {get: () => ''}


function dt(t, ...e) {
  const a = []
    , n = [];
  const i = class extends t {
      constructor(t) {
          super(t = t || {}),
          function(t, e) {
              a.forEach(((a,i)=>{
                  e.hasOwnProperty(a) && (t[n[i]] = e[a])
              }
              ))
          }(this, t)
      }
  }
    , r = i.prototype;
  return e.forEach((function(t) {
      let e;
      Array.isArray(t) ? (e = t[1],
      t = t[0]) : e = `_${t}`,
      a.push(t),
      n.push(e),
      Object.defineProperty(r, t, {
          enumerable: !0,
          get() {
              return this[e]
          },
          set(a) {
              this.bdMutate(t, e, a)
          }
      })
  }
  )),
  i.watchables = a.concat(t.watchables || []),
  i
}

function V(t, e) {
  if (!t)
      return e === t;
  if (t instanceof Object) {
      const a = t.constructor.eql || K.get(t.constructor);
      if (a)
          return a(t, e)
  }
  if (e instanceof Object) {
      const a = t.constructor.eql || K.get(e.constructor);
      if (a)
          return a(e, t)
  }
  return t === e
}

function rt(t, e, a, n) {
  const i = t[a];
  if (V(i, n))
      return !1;
  {
      let r, s;
      if ("symbol" != typeof e)
          if (r = nt[e],
          r)
              s = it[e];
          else {
              const t = e.substring(0, 1).toUpperCase() + e.substring(1);
              r = nt[e] = `onMutateBefore${t}`,
              s = it[e] = `onMutate${t}`
          }
      return (!r || !t[r] || (n = t[r](n, i)) !== Y) && (t.hasOwnProperty(a) ? t[a] = n : Object.defineProperty(t, a, {
          writable: !0,
          value: n
      }),
      s && t[s] && t[s](n, i),
      [e, n, i])
  }
}

function m(t) {
  return 0 === t ? "0" : t ? `${t}` : ""
}

function U(t) {
  return class extends (t || class {
  }
  ) {
      bdNotify(t) {
          const e = F.get(this);
          if (!e)
              return;
          let a;
          t instanceof Event ? a = e[t.type] : t.type ? (a = e[t.type],
          t.target = this) : t.name ? (console.warn("event.name is deprecated; use event.type"),
          a = e[t.name],
          t.type = t.name,
          t.target = this) : (a = e[t],
          t = {
              type: t,
              name: t,
              target: this
          }),
          a && a.slice().forEach((e=>e.proc(t))),
          (a = e[H]) && a.slice().forEach((e=>e.proc(t)))
      }
      get isBdEventHub() {
          return !0
      }
      advise(t, e) {
          if (e) {
              if (Array.isArray(t))
                  return t.map((t=>this.advise(t, e)));
              {
                  let a = F.get(this);
                  a || F.set(this, a = {});
                  const n = l(e, a[t] || (a[t] = []));
                  return this.own && this.own(n),
                  n
              }
          }
          {
              const e = t;
              return Reflect.ownKeys(e).map((t=>this.advise(t, e[t])))
          }
      }
      destroyAdvise(t) {
          const e = F.get(this);
          if (e)
              if (t) {
                  const a = e[t];
                  a && (a.forEach((t=>t.destroy())),
                  delete e[t])
              } else
                  Reflect.ownKeys(e).forEach((t=>{
                      e[t].forEach((t=>t.destroy()))
                  }
                  )),
                  F.delete(this)
      }
  }
}

function ht(t) {
  return class extends (t || class {
  }
  ) {
      bdMutateNotify(t, e, a) {
          const n = W.get(this);
          if (n)
              if (Array.isArray(t)) {
                  let i = !1;
                  if (t.forEach((r=>{
                      if (r) {
                          i = !0;
                          const s = lt(n, r[0]);
                          s && (e = r[1],
                          a = r[2],
                          s.slice().forEach((n=>n.proc(e, a, this, t))))
                      }
                  }
                  )),
                  i) {
                      const e = lt(n, H);
                      e && e.slice().forEach((e=>e.proc(this, a, this, t)))
                  }
              } else {
                  let i = lt(n, t);
                  i && i.slice().forEach((n=>n.proc(e, a, this, t))),
                  i = lt(n, H),
                  i && i.slice().forEach((n=>n.proc(e, a, this, t)))
              }
      }
      bdMutate(t, e, a) {
          if (arguments.length > 3) {
              let t = 0;
              const e = [];
              let a = !1;
              for (; t < arguments.length; ) {
                  const n = rt(this, arguments[t++], arguments[t++], arguments[t++]);
                  a = a || n,
                  e.push(n)
              }
              return !!a && (this.bdMutateNotify(e),
              e)
          }
          {
              const n = rt(this, t, e, a);
              return !!n && (this.bdMutateNotify(...n),
              n)
          }
      }
      get isBdWatchHub() {
          return !0
      }
      watch(...t) {
          let e = !1;
          if (!0 === t[0] && (e = !0,
          t.shift()),
          1 === arguments.length) {
              const e = t[0];
              return Reflect.ownKeys(e).map((t=>this.watch(t, e[t])))
          }
          if (t[0][q]) {
              let e;
              if (2 === arguments.length)
                  if ("object" == typeof t[1]) {
                      const a = t[1];
                      Reflect.ownKeys(a).map((t=>a[t] = st(this, a[t]))),
                      e = at(t[0], a)
                  } else
                      e = at(t[0], H, st(this, t[1]));
              else
                  e = at(t[0], t[1], st(this, t[2]));
              return this.own && this.own(e),
              e
          }
          if (Array.isArray(t[0]))
              return t[0].map((e=>this.watch(e, st(this, t[1]))));
          const a = t[0]
            , n = l(st(this, t[1]), ot(this, a));
          return this.own && this.own(n),
          e && n.proc(this[a], void 0, this, a),
          n
      }
      pauseWatch(...t) {
          if ("function" == typeof t.last) {
              const e = t.pop();
              this.pauseWatch(...t);
              let a = 0;
              try {
                  e()
              } catch (t) {
                  a = t
              }
              return this.unpauseWatch(...t),
              a
          }
          return t.forEach((t=>{
              const e = ot(this, t);
              e._pause ? ++e._pause : e._pause = 1
          }
          )),
          0
      }
      unpauseWatch(...t) {
          t.forEach((t=>{
              const e = ot(this, t);
              e._pause && --e._pause
          }
          ))
      }
      pauseOnceWatch(...t) {
          t.forEach((t=>{
              ot(this, t)._pauseOnce = !0
          }
          ))
      }
      unpauseAll(...t) {
          t.forEach((t=>{
              const e = ot(this, t);
              e._pause = e._pauseOnce = 0
          }
          ))
      }
      destroyWatch(t) {
          const e = W.get(this);
          function a(t) {
              if (t)
                  for (; t.length; )
                      t.shift().destroy()
          }
          e && (t ? (a(e[t]),
          delete e[t]) : (Reflect.ownKeys(e).forEach((t=>a(e[t]))),
          W.delete(this)))
      }
      getWatchableRef(t, e) {
          const a = new tt(this,t,e);
          return this.own && this.own(a),
          a
      }
      defineWatchable(t, e, a) {
          2 === arguments.length && (a = e,
          e = void 0),
          e || (e = `_${t}`),
          Object.defineProperty(this, t, {
              enumerable: !0,
              get() {
                  return this[e]
              },
              set(a) {
                  this.bdMutate(t, e, a)
              }
          }),
          this[t] = a
      }
  }
}
const ut = ht();
class At extends (U(ut)) {
  constructor(t={}) {
      if (super(),
      this.constructor.noKwargs || (this.kwargs = t),
      t.id && Object.defineProperty(this, "id", {
          value: `${t.id}`,
          enumerable: !0
      }),
      t.className && (Array.isArray(t.className) ? this.addClassName(...t.className) : this.addClassName(t.className)),
      void 0 !== t.tabIndex && (this.tabIndex = t.tabIndex),
      t.title && (this.title = t.title),
      (t.disabled || void 0 !== t.enabled && !t.enabled) && (this.disabled = !0),
      void 0 !== t.visible && (this.visible = t.visible),
      t.elements && ("function" == typeof t.elements ? this.bdElements = t.elements : this.bdElements = ()=>t.elements),
      t.postRender && (this.postRender = t.postRender),
      t.mix && Reflect.ownKeys(t.mix).forEach((e=>this[e] = t.mix[e])),
      t.callbacks) {
          const e = this.constructor.events;
          Reflect.ownKeys(t.callbacks).forEach((a=>{
              -1 !== e.indexOf(a) ? this.advise(a, t.callbacks[a]) : this.watch(a, t.callbacks[a])
          }
          ))
      }
  }
  destroy() {
      if (!this.destroyed) {
          this.destroyed = "in-prog",
          this.unrender();
          const t = wt.get(this);
          t && (h(t),
          wt.delete(this)),
          this.destroyWatch(),
          this.destroyAdvise(),
          delete this.kwargs,
          this.destroyed = !0
      }
  }
  render(t) {
      if (!this.bdDom) {
          const e = this.bdDom = this._dom = {}
            , a = this.bdElements();
          vt(a);
          const n = e.root = this.constructor.renderElements(this, a);
          if (Array.isArray(n)) {
              n.forEach((t=>kt.set(t, this)));
              const t = n[0].getAttribute("class") || "";
              t && this.addClassName(t);
              const e = bt(this);
              (e || t) && e !== t && n.forEach((t=>t.setAttribute("class", e)))
          } else {
              kt.set(n, this),
              this.id && (n.id = this.id);
              const t = n.getAttribute("class");
              t && this.addClassName(t);
              const e = bt(this);
              (e || t) && e !== t && n.setAttribute("class", e),
              this.bdDom.tabIndexNode ? void 0 === this.bdTabIndex ? this.bdTabIndex = this.bdDom.tabIndexNode.tabIndex : this.bdDom.tabIndexNode.tabIndex = this.bdTabIndex : void 0 !== this.bdTabIndex && (this.bdDom.root.tabIndex = this.bdTabIndex),
              void 0 !== this.bdTitle && ((this.bdDom.titleNode || this.bdDom.root).title = this.bdTitle),
              this[this.bdDisabled ? "addClassName" : "removeClassName"]("bd-disabled"),
              this.visible || (this._hiddenDisplayStyle = n.style.display,
              n.style.display = "none")
          }
          this.ownWhileRendered(this.postRender()),
          t && t.call(this),
          this.bdMutateNotify("rendered", !0, !1)
      }
      return this.bdDom.root
  }
  postRender() {}
  bdElements() {
      return new B("div",{})
  }
  unrender() {
      if (this.rendered) {
          this.bdParent && this.bdParent.delChild(this, !0),
          this.children && this.children.slice().forEach((t=>{
              t.destroy()
          }
          )),
          delete this.children;
          const t = this.bdDom.root;
          Array.isArray(t) ? t.forEach((t=>{
              kt.delete(t),
              t.parentNode && t.parentNode.removeChild(t)
          }
          )) : (kt.delete(t),
          t.parentNode && t.parentNode.removeChild(t)),
          h(this.bdDom.handles),
          delete this.bdDom,
          delete this._dom,
          delete this._hiddenDisplayStyle,
          this.bdAttachToDoc(!1),
          this.bdMutateNotify("rendered", !1, !0)
      }
  }
  get rendered() {
      return !(!this.bdDom || !this.bdDom.root)
  }
  own(...t) {
      let e = wt.get(this);
      e || wt.set(this, e = []),
      _t(e, ...t)
  }
  ownWhileRendered(...t) {
      _t(this.bdDom.handles || (this.bdDom.handles = []), ...t)
  }
  get parent() {
      return this.bdParent
  }
  bdAdopt(t, e) {
      if (t.bdParent)
          throw new Error("unexpected");
      const a = this.children || (this.children = []);
      void 0 !== e ? a.splice(e, 0, t) : a.push(t),
      t.bdMutate("parent", "bdParent", this),
      t.bdAttachToDoc(this.bdAttachedToDoc)
  }
  bdAttachToDoc(t) {
      return !!this.bdMutate("attachedToDoc", "bdAttachedToDoc", !!t) && (t && this.resize && this.resize(),
      this.children && this.children.forEach((e=>e.bdAttachToDoc(t))),
      !0)
  }
  get attachedToDoc() {
      return !!this.bdAttachedToDoc
  }
  insChild(...t) {
      if (!this.rendered)
          throw new Error("parent component must be rendered before explicitly inserting a child");
      const e = this.children || (this.children = []);
      let a, {src: n, attachPoint: i, position: r} = Tt(t);
      if (/before|after|replace|only|first|last/.test(i) || "number" == typeof i)
          r = i,
          i = 0;
      else if (void 0 === r)
          r = "last";
      else if (!/before|after|replace|only|first|last/.test(r) && "number" != typeof r)
          throw new Error("unexpected");
      if ("number" == typeof r && (r !== Math.floor(r) || r < 0 || e.length < r))
          throw new Error("unexpected");
      n instanceof At ? (a = n,
      a.parent && a.parent.delChild(a, !0),
      a.render()) : (n.isComponentType || (n = new B(At,{
          elements: n
      })),
      a = this.constructor.renderElements(this, n));
      const s = (t,e,a)=>{
          const n = t.bdDom.root;
          let i;
          if (Array.isArray(n)) {
              const t = n[0];
              i = A(t, e, a),
              n.slice(1).reduce(((t,e)=>(A(e, t, "after"),
              e)), t)
          } else
              i = A(n, e, a);
          return i
      }
      ;
      if (!i && a.bdParentAttachPoint && (i = a.bdParentAttachPoint),
      i instanceof At) {
          const t = (t=>e.indexOf(t))(i);
          if (-1 === t)
              throw new Error("unexpected");
          let n = i.bdDom.root;
          switch (r) {
          case "before":
          case "replace":
              Array.isArray(n) && (n = n[0]),
              s(a, n, "before"),
              this.bdAdopt(a, t),
              "replace" === r && this.delChild(i);
              break;
          case "after":
              Array.isArray(n) && (n = n[n.length - 1]),
              s(a, n, "after"),
              this.bdAdopt(a, t + 1);
              break;
          default:
              throw new Error("unexpected")
          }
          return a
      }
      if ("string" == typeof i ? i = this[i] || mt.getElementById(i) : i || (i = this.bdChildrenAttachPoint || this.bdDom.root),
      !(i instanceof window.Element))
          throw new Error("unexpected");
      if (i === this.bdChildrenAttachPoint || i === this.bdDom.root) {
          switch (0 === r ? r = "first" : r === e.length && (r = "last"),
          r) {
          case "only":
              e.slice().forEach((t=>this.delChild(t))),
              s(a, i, "last"),
              this.bdAdopt(a);
              break;
          case "first":
              s(a, i, "first"),
              this.bdAdopt(a, 0);
              break;
          case "last":
              s(a, i, "last"),
              this.bdAdopt(a, this.children.length);
              break;
          case "before":
          case "after":
          case "replace":
              throw new Error("unexpected");
          default:
              {
                  let t = e[r].bdDom.root;
                  Array.isArray(t) && (t = t[0]),
                  s(a, t, "before"),
                  this.bdAdopt(a, r);
                  break
              }
          }
          return a
      }
      return Ct(s(a, i, r)),
      this.bdAdopt(a),
      a
  }
  delChild(t, e) {
      const a = this.children ? this.children.indexOf(t) : -1;
      if (-1 !== a) {
          const n = t.bdDom && t.bdDom.root
            , i = t=>{
              t.parentNode && t.parentNode.removeChild(t)
          }
          ;
          return Array.isArray(n) ? n.forEach(i) : i(n),
          t.bdMutate("parent", "bdParent", null),
          t.bdAttachToDoc(!1),
          this.children.splice(a, 1),
          e ? "unrender" === e && t.unrender() : (t.destroy(),
          t = !1),
          t
      }
      return !1
  }
  delChildren(t) {
      return this.children && this.children.slice().map((e=>this.delChild(e, t)))
  }
  reorderChildren(t) {
      if (!this.children || !this.children.length)
          return !1;
      if (this.children.length !== t.length)
          return !1;
      if (!t.every((t=>t.parent === this)))
          return !1;
      const e = Array.isArray(t[0].bdDom.root) ? t[0].bdDom.root[0].parentNode : t[0].bdDom.root.parentNode
        , a = e.childNodes;
      let n = 0;
      const i = [];
      return t.forEach((t=>{
          i.push(t);
          const r = t.bdDom.root;
          n < a.length ? Array.isArray(r) ? r.forEach((t=>e.insertBefore(t, a[n++]))) : e.insertBefore(r, a[n++]) : Array.isArray(r) ? r.forEach((t=>e.appentChild(t))) : e.appentChild(r)
      }
      )),
      i.forEach(((t,e)=>this.children[e] = t)),
      !0
  }
  get staticClassName() {
      return this.kwargs.hasOwnProperty("staticClassName") ? this.kwargs.staticClassName : this.constructor.className || ""
  }
  get className() {
      if (this.rendered) {
          let t = this.bdDom.root;
          Array.isArray(t) && (t = t[0]);
          let e = t.className;
          const a = this.staticClassName;
          return a && a.split(" ").forEach((t=>e = e.replace(t, ""))),
          pt(e)
      }
      return this.bdClassName || ""
  }
  set className(t) {
      t = pt(t),
      this.bdClassName ? t ? t !== this.bdClassName && this.bdSetClassName(t, this.bdClassName) : this.bdSetClassName("", this.bdClassName) : this.bdSetClassName(t, "")
  }
  containsClassName(t) {
      return -1 !== ` ${this.bdClassName || ""} `.indexOf(` ${pt(t)} `)
  }
  addClassName(...t) {
      const e = this.bdClassName || "";
      return this.bdSetClassName(gt(t).reduce(((t,e)=>ft(e).test(t) ? t : `${t + e} `), ` ${e} `).trim(), e),
      this
  }
  removeClassName(...t) {
      const e = this.bdClassName || "";
      return this.bdSetClassName(gt(t).reduce(((t,e)=>t.replace(ft(e, "g"), " ")), ` ${e} `).trim(), e),
      this
  }
  toggleClassName(...t) {
      const e = this.bdClassName || "";
      return this.bdSetClassName(gt(t).reduce(((t,e)=>ft(e).test(t) ? t.replace(ft(e, "g"), " ") : `${t + e} `), ` ${e} `).trim(), e),
      this
  }
  twiddleClassName(t, e) {
      t ? this.containsClassName(e) || this.addClassName(e) : this.containsClassName(e) && this.removeClassName(e)
  }
  get classList() {
      if (!this._classList) {
          const t = this;
          this._classList = {
              get: ()=>t.className,
              set: e=>t.className = e,
              add: (...e)=>t.addClassName(...e),
              ins: (...e)=>t.addClassName(...e),
              remove: (...e)=>t.removeClassName(...e),
              del: (...e)=>t.removeClassName(...e),
              toggle: (...e)=>t.toggleClassName(...e),
              contains: (...e)=>t.containsClassName(...e),
              has: (...e)=>t.containsClassName(...e)
          }
      }
      return this._classList
  }
  bdSetClassName(t, e) {
      if (t !== e) {
          if (this.bdClassName = t,
          this.rendered) {
              const t = this.bdDom.root
                , e = bt(this);
              Array.isArray(t) ? t.forEach((t=>t.setAttribute("class", e))) : t.setAttribute("class", e)
          }
          this.bdMutateNotify("className", t, e);
          const a = !e || -1 === e.indexOf("bd-hidden")
            , n = !t || -1 === t.indexOf("bd-hidden");
          a !== n && this.bdMutateNotify("visible", n, a)
      }
  }
  bdOnFocus() {
      this.bdDom && !Array.isArray(this.bdDom.root) && this.addClassName("bd-focused"),
      this.bdMutate("hasFocus", "bdHasFocus", !0)
  }
  bdOnBlur() {
      this.removeClassName("bd-focused"),
      this.bdMutate("hasFocus", "bdHasFocus", !1)
  }
  get hasFocus() {
      return !!this.bdHasFocus
  }
  focus() {
      if (this.bdDom) {
          const t = this.bdDom.root;
          (this.bdDom.tabIndexNode || (Array.isArray(t) ? t[0] : t)).focus()
      }
  }
  setItem(...t) {
      let e = this.bdData || {}
        , a = 0;
      const n = t.length - 2;
      for (; a < n; )
          e = e[t[a]] || (e[t[a]] = {}),
          a++;
      e[t[a]] = t[a + 1]
  }
  getItem(...t) {
      let e = this.bdData;
      for (let a = 0, n = t.length; void 0 !== e && a < n; )
          e = e[t[a++]];
      return e
  }
  removeItem(...t) {
      let e = this.bdData;
      for (const a = t.length - 1; void 0 !== e && 0 < a; )
          e = e[t[0]++];
      if (e) {
          const a = e[t[0]];
          return delete e[t[0]],
          a
      }
  }
  getAttr(t) {
      return function(t, e) {
          return e in t.constructor.prototype ? t[e] : t.getAttribute(e)
      }(this.bdDom.root, t)
  }
  setAttr(t, e) {
      return p(this.bdDom.root, t, e)
  }
  getStyle(t) {
      return function(t, e) {
          g !== t && (f = u.getComputedStyle(g = t));
          const a = f[e];
          return "string" == typeof a && /px$/.test(a) ? parseFloat(a) : a
      }(this.bdDom.root, t)
  }
  getStyles(...t) {
      return y(this.bdDom.root, t)
  }
  setStyle(t, e) {
      return v(this.bdDom.root, t, e)
  }
  getPosit() {
      return M(this.bdDom.root)
  }
  setPosit(t) {
      w(this.bdDom.root, t)
  }
  get posit() {
      return this.bdDom && M(this.bdDom.root)
  }
  set posit(t) {
      this.bdDom && w(this.bdDom.root, t)
  }
  get uid() {
      return this.bdUid || (this.bdUid = Symbol("component-instance-uid"))
  }
  get tabIndex() {
      return this.rendered ? this.bdTabIndex = (this.bdDom.tabIndexNode || this.bdDom.root).tabIndex : this.bdTabIndex
  }
  set tabIndex(t) {
      t || 0 === t || (t = ""),
      t !== this.bdTabIndex && (this.rendered && ((this.bdDom.tabIndexNode || this.bdDom.root).tabIndex = t),
      this.bdMutate("tabIndex", "bdTabIndex", t))
  }
  get enabled() {
      return !this.bdDisabled
  }
  set enabled(t) {
      this.disabled = !t
  }
  get disabled() {
      return !!this.bdDisabled
  }
  set disabled(t) {
      t = !!t,
      this.bdDisabled !== t && (this.bdDisabled = t,
      this.bdMutateNotify([["disabled", t, !t], ["enabled", !t, t]]),
      this[t ? "addClassName" : "removeClassName"]("bd-disabled"))
  }
  get visible() {
      return !this.containsClassName("bd-hidden")
  }
  set visible(t) {
      if ((t = !!t) !== !this.containsClassName("bd-hidden")) {
          if (t) {
              this.removeClassName("bd-hidden");
              const t = this.bdDom && this.bdDom.root;
              void 0 !== this._hiddenDisplayStyle && (t && (t.style.display = this._hiddenDisplayStyle),
              delete this._hiddenDisplayStyle),
              this.resize && this.resize()
          } else {
              this.addClassName("bd-hidden");
              const t = this.bdDom && this.bdDom.root;
              t && (this._hiddenDisplayStyle = t.style.display,
              t.style.display = "none")
          }
          this.bdMutateNotify("visible", t, !t)
      }
  }
  get title() {
      return this.rendered ? (this.bdDom.titleNode || this.bdDom.root).title : this.bdTitle
  }
  set title(t) {
      t = m(t),
      this.bdMutate("title", "bdTitle", t) && this.rendered && ((this.bdDom.titleNode || this.bdDom.root).title = t)
  }
  static get(t) {
      return kt.get(t)
  }
  static renderElements(t, e) {
      if (Array.isArray(e))
          return e.map((e=>At.renderElements(t, e)));
      if (e instanceof B) {
          const {type: a, ctorProps: n, ppFuncs: i, children: r} = e;
          let s;
          if (e.isComponentType) {
              const e = s = new a(n);
              if (e.render(),
              i && Mt(i, t, e),
              r) {
                  const e = At.renderElements(t, r);
                  Array.isArray(e) ? e.forEach((t=>s.insChild(t))) : s.insChild(e)
              }
          } else {
              const e = s = S(a, n);
              if ("tabIndex"in n && !1 !== n.tabIndex && (t.bdDom.tabIndexNode = e),
              i && Mt(i, t, e),
              r) {
                  const a = At.renderElements(t, r);
                  Array.isArray(a) ? a.forEach(((a,n)=>yt(t, e, a, r[n].isComponentType))) : yt(t, e, a, r.isComponentType)
              }
          }
          return s
      }
      return mt.createTextNode(e)
  }
}

At.watchables = ["rendered", "parent", "attachedToDoc", "className", "hasFocus", "tabIndex", "enabled", "visible", "title"],
At.events = [],
At.withWatchables = (...t)=>dt(At, ...t),
At.iconClassName = "icon-",
At.getAllTopLevelNodes = ()=>[...kt.keys()],
At.getAllComponents = ()=>[...kt.values()];

module.exports = At;