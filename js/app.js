(() => {
    var __webpack_modules__ = {
        144: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                const e = "undefined" != typeof window, t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), a = e && window.devicePixelRatio > 1, n = {
                    elements_selector: ".lazy",
                    container: t || e ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, s = e => Object.assign({}, n, e), l = function(e, t) {
                    let a;
                    const n = "LazyLoad::Initialized", s = new e(t);
                    try {
                        a = new CustomEvent(n, {
                            detail: {
                                instance: s
                            }
                        });
                    } catch (e) {
                        a = document.createEvent("CustomEvent"), a.initCustomEvent(n, !1, !1, {
                            instance: s
                        });
                    }
                    window.dispatchEvent(a);
                }, o = "src", r = "srcset", i = "sizes", d = "poster", c = "llOriginalAttrs", _ = "data", u = "loading", g = "loaded", b = "applied", h = "error", m = "native", p = "data-", f = "ll-status", v = (e, t) => e.getAttribute(p + t), E = e => v(e, f), I = (e, t) => ((e, t, a) => {
                    const n = p + t;
                    null !== a ? e.setAttribute(n, a) : e.removeAttribute(n);
                })(e, f, t), y = e => I(e, null), k = e => null === E(e), A = e => E(e) === m, L = [ u, g, b, h ], w = (e, t, a, n) => {
                    e && "function" == typeof e && (void 0 === n ? void 0 === a ? e(t) : e(t, a) : e(t, a, n));
                }, x = (t, a) => {
                    e && "" !== a && t.classList.add(a);
                }, C = (t, a) => {
                    e && "" !== a && t.classList.remove(a);
                }, O = e => e.llTempImage, M = (e, t) => {
                    if (!t) return;
                    const a = t._observer;
                    a && a.unobserve(e);
                }, z = (e, t) => {
                    e && (e.loadingCount += t);
                }, N = (e, t) => {
                    e && (e.toLoadCount = t);
                }, T = e => {
                    let t = [];
                    for (let a, n = 0; a = e.children[n]; n += 1) "SOURCE" === a.tagName && t.push(a);
                    return t;
                }, R = (e, t) => {
                    const a = e.parentNode;
                    a && "PICTURE" === a.tagName && T(a).forEach(t);
                }, G = (e, t) => {
                    T(e).forEach(t);
                }, D = [ o ], H = [ o, d ], V = [ o, r, i ], F = [ _ ], j = e => !!e[c], B = e => e[c], J = e => delete e[c], S = (e, t) => {
                    if (j(e)) return;
                    const a = {};
                    t.forEach((t => {
                        a[t] = e.getAttribute(t);
                    })), e[c] = a;
                }, P = (e, t) => {
                    if (!j(e)) return;
                    const a = B(e);
                    t.forEach((t => {
                        ((e, t, a) => {
                            a ? e.setAttribute(t, a) : e.removeAttribute(t);
                        })(e, t, a[t]);
                    }));
                }, U = (e, t, a) => {
                    x(e, t.class_applied), I(e, b), a && (t.unobserve_completed && M(e, t), w(t.callback_applied, e, a));
                }, $ = (e, t, a) => {
                    x(e, t.class_loading), I(e, u), a && (z(a, 1), w(t.callback_loading, e, a));
                }, q = (e, t, a) => {
                    a && e.setAttribute(t, a);
                }, K = (e, t) => {
                    q(e, i, v(e, t.data_sizes)), q(e, r, v(e, t.data_srcset)), q(e, o, v(e, t.data_src));
                }, Q = {
                    IMG: (e, t) => {
                        R(e, (e => {
                            S(e, V), K(e, t);
                        })), S(e, V), K(e, t);
                    },
                    IFRAME: (e, t) => {
                        S(e, D), q(e, o, v(e, t.data_src));
                    },
                    VIDEO: (e, t) => {
                        G(e, (e => {
                            S(e, D), q(e, o, v(e, t.data_src));
                        })), S(e, H), q(e, d, v(e, t.data_poster)), q(e, o, v(e, t.data_src)), e.load();
                    },
                    OBJECT: (e, t) => {
                        S(e, F), q(e, _, v(e, t.data_src));
                    }
                }, W = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], X = (e, t) => {
                    !t || (e => e.loadingCount > 0)(t) || (e => e.toLoadCount > 0)(t) || w(e.callback_finish, t);
                }, Y = (e, t, a) => {
                    e.addEventListener(t, a), e.llEvLisnrs[t] = a;
                }, Z = (e, t, a) => {
                    e.removeEventListener(t, a);
                }, ee = e => !!e.llEvLisnrs, te = e => {
                    if (!ee(e)) return;
                    const t = e.llEvLisnrs;
                    for (let a in t) {
                        const n = t[a];
                        Z(e, a, n);
                    }
                    delete e.llEvLisnrs;
                }, ae = (e, t, a) => {
                    (e => {
                        delete e.llTempImage;
                    })(e), z(a, -1), (e => {
                        e && (e.toLoadCount -= 1);
                    })(a), C(e, t.class_loading), t.unobserve_completed && M(e, a);
                }, ne = (e, t, a) => {
                    const n = O(e) || e;
                    ee(n) || ((e, t, a) => {
                        ee(e) || (e.llEvLisnrs = {});
                        const n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                        Y(e, n, t), Y(e, "error", a);
                    })(n, (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_loaded), I(t, g), w(a.callback_loaded, t, n), s || X(a, n);
                        })(0, e, t, a), te(n);
                    }), (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_error), I(t, h), w(a.callback_error, t, n), a.restore_on_error && P(t, V), 
                            s || X(a, n);
                        })(0, e, t, a), te(n);
                    }));
                }, se = (e, t, n) => {
                    (e => W.indexOf(e.tagName) > -1)(e) ? ((e, t, a) => {
                        ne(e, t, a), ((e, t, a) => {
                            const n = Q[e.tagName];
                            n && (n(e, t), $(e, t, a));
                        })(e, t, a);
                    })(e, t, n) : ((e, t, n) => {
                        (e => {
                            e.llTempImage = document.createElement("IMG");
                        })(e), ne(e, t, n), (e => {
                            j(e) || (e[c] = {
                                backgroundImage: e.style.backgroundImage
                            });
                        })(e), ((e, t, n) => {
                            const s = v(e, t.data_bg), l = v(e, t.data_bg_hidpi), r = a && l ? l : s;
                            r && (e.style.backgroundImage = `url("${r}")`, O(e).setAttribute(o, r), $(e, t, n));
                        })(e, t, n), ((e, t, n) => {
                            const s = v(e, t.data_bg_multi), l = v(e, t.data_bg_multi_hidpi), o = a && l ? l : s;
                            o && (e.style.backgroundImage = o, U(e, t, n));
                        })(e, t, n), ((e, t, a) => {
                            const n = v(e, t.data_bg_set);
                            if (!n) return;
                            let s = n.split("|").map((e => `image-set(${e})`));
                            e.style.backgroundImage = s.join(), U(e, t, a);
                        })(e, t, n);
                    })(e, t, n);
                }, le = e => {
                    e.removeAttribute(o), e.removeAttribute(r), e.removeAttribute(i);
                }, oe = e => {
                    R(e, (e => {
                        P(e, V);
                    })), P(e, V);
                }, re = {
                    IMG: oe,
                    IFRAME: e => {
                        P(e, D);
                    },
                    VIDEO: e => {
                        G(e, (e => {
                            P(e, D);
                        })), P(e, H), e.load();
                    },
                    OBJECT: e => {
                        P(e, F);
                    }
                }, ie = (e, t) => {
                    (e => {
                        const t = re[e.tagName];
                        t ? t(e) : (e => {
                            if (!j(e)) return;
                            const t = B(e);
                            e.style.backgroundImage = t.backgroundImage;
                        })(e);
                    })(e), ((e, t) => {
                        k(e) || A(e) || (C(e, t.class_entered), C(e, t.class_exited), C(e, t.class_applied), 
                        C(e, t.class_loading), C(e, t.class_loaded), C(e, t.class_error));
                    })(e, t), y(e), J(e);
                }, de = [ "IMG", "IFRAME", "VIDEO" ], ce = e => e.use_native && "loading" in HTMLImageElement.prototype, _e = (e, t, a) => {
                    e.forEach((e => (e => e.isIntersecting || e.intersectionRatio > 0)(e) ? ((e, t, a, n) => {
                        const s = (e => L.indexOf(E(e)) >= 0)(e);
                        I(e, "entered"), x(e, a.class_entered), C(e, a.class_exited), ((e, t, a) => {
                            t.unobserve_entered && M(e, a);
                        })(e, a, n), w(a.callback_enter, e, t, n), s || se(e, a, n);
                    })(e.target, e, t, a) : ((e, t, a, n) => {
                        k(e) || (x(e, a.class_exited), ((e, t, a, n) => {
                            a.cancel_on_exit && (e => E(e) === u)(e) && "IMG" === e.tagName && (te(e), (e => {
                                R(e, (e => {
                                    le(e);
                                })), le(e);
                            })(e), oe(e), C(e, a.class_loading), z(n, -1), y(e), w(a.callback_cancel, e, t, n));
                        })(e, t, a, n), w(a.callback_exit, e, t, n));
                    })(e.target, e, t, a)));
                }, ue = e => Array.prototype.slice.call(e), ge = e => e.container.querySelectorAll(e.elements_selector), be = e => (e => E(e) === h)(e), he = (e, t) => (e => ue(e).filter(k))(e || ge(t)), me = function(t, a) {
                    const n = s(t);
                    this._settings = n, this.loadingCount = 0, ((e, t) => {
                        ce(e) || (t._observer = new IntersectionObserver((a => {
                            _e(a, e, t);
                        }), (e => ({
                            root: e.container === document ? null : e.container,
                            rootMargin: e.thresholds || e.threshold + "px"
                        }))(e)));
                    })(n, this), ((t, a) => {
                        e && (a._onlineHandler = () => {
                            ((e, t) => {
                                var a;
                                (a = ge(e), ue(a).filter(be)).forEach((t => {
                                    C(t, e.class_error), y(t);
                                })), t.update();
                            })(t, a);
                        }, window.addEventListener("online", a._onlineHandler));
                    })(n, this), this.update(a);
                };
                return me.prototype = {
                    update: function(e) {
                        const a = this._settings, n = he(e, a);
                        var s, l;
                        N(this, n.length), t ? this.loadAll(n) : ce(a) ? ((e, t, a) => {
                            e.forEach((e => {
                                -1 !== de.indexOf(e.tagName) && ((e, t, a) => {
                                    e.setAttribute("loading", "lazy"), ne(e, t, a), ((e, t) => {
                                        const a = Q[e.tagName];
                                        a && a(e, t);
                                    })(e, t), I(e, m);
                                })(e, t, a);
                            })), N(a, 0);
                        })(n, a, this) : (l = n, (e => {
                            e.disconnect();
                        })(s = this._observer), ((e, t) => {
                            t.forEach((t => {
                                e.observe(t);
                            }));
                        })(s, l));
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), e && window.removeEventListener("online", this._onlineHandler), 
                        ge(this._settings).forEach((e => {
                            J(e);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(e) {
                        const t = this._settings;
                        he(e, t).forEach((e => {
                            M(e, this), se(e, t, this);
                        }));
                    },
                    restoreAll: function() {
                        const e = this._settings;
                        ge(e).forEach((t => {
                            ie(t, e);
                        }));
                    }
                }, me.load = (e, t) => {
                    const a = s(t);
                    se(e, a);
                }, me.resetStatus = e => {
                    y(e);
                }, e && ((e, t) => {
                    if (t) if (t.length) for (let a, n = 0; a = t[n]; n += 1) l(e, a); else l(e, t);
                })(me, window.lazyLoadOptions), me;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    lockPaddingElements.forEach((lockPaddingElement => {
                        lockPaddingElement.style.paddingRight = "";
                    }));
                    document.body.style.paddingRight = "";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = lockPaddingValue;
                }));
                document.body.style.paddingRight = lockPaddingValue;
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Прокинувся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Відкрив попап`);
                    } else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрив попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
            } else FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                    targetElement.hasAttribute("data-validate") ? formValidate.removeError(targetElement) : null;
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    targetElement.hasAttribute("data-validate") ? formValidate.validateInput(targetElement) : null;
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll("div.select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Error");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форму відправлено!`);
            }
            function formLogging(message) {
                FLS(`[Форми]: ${message}`);
            }
        }
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        function utils_makeElementsArray(el) {
            return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            const device = getDevice();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
            const isSafariBrowser = isSafari();
            const need3dFix = isSafariBrowser || isWebView && device.ios;
            return {
                isSafari: needPerspectiveFix || isSafariBrowser,
                needPerspectiveFix,
                need3dFix,
                isWebView
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        const toggleSlideClasses = (slideEl, condition, className) => {
            if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
        };
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
            } else activeSlide = slides[activeIndex];
            if (activeSlide) if (!gridEnabled) {
                nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
            }
            slides.forEach((slideEl => {
                toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
                toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
                toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
            }));
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        swiper.animating = false;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            if (swiper.destroyed) return;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasGrabCursor = swiper.params.grabCursor;
            const isGrabCursor = breakpointParams.grabCursor;
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor(); else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += Math.ceil(slides[i].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el); else if (res && res.length === 1) res = res[0];
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (swiper.enabled) {
                    update();
                    return;
                }
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) {
                            subEl.classList.remove(...(params.clickableClass || "").split(" "));
                            subEl.removeEventListener("click", onBulletClick);
                        }
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = utils_makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function initSliders() {
            if (document.querySelector(".swiper")) {
                new swiper_core_Swiper(".partners__slider", {
                    modules: [ Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".partners-pagination",
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 5,
                        renderBullet: function(index, className) {
                            var data = [ {
                                img: "img/icons/solutions.svg",
                                text: "Innovative Solutions"
                            }, {
                                img: "img/icons/customization.svg",
                                text: "Customization at Its Core"
                            }, {
                                img: "img/icons/expertise.svg",
                                text: "Expertise in AI and GPT"
                            }, {
                                img: "img/icons/global.svg",
                                text: "Global Reach, Local Touch"
                            }, {
                                img: "img/icons/support.svg",
                                text: "Dedicated Support"
                            } ];
                            return '<button class="' + className + ' partners-pagination">' + '<img src="' + data[index].img + '" alt="" />' + "<span>" + data[index].text + "</span>" + "</button>";
                        }
                    },
                    navigation: {
                        prevEl: ".partners-swiper-button-prev",
                        nextEl: ".partners-swiper-button-next"
                    },
                    breakpoints: {
                        320: {
                            pagination: {
                                el: ".partners-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 1
                            }
                        },
                        768: {
                            pagination: {
                                el: ".partners-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 3
                            }
                        },
                        1200: {
                            pagination: {
                                el: ".partners-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 5
                            }
                        }
                    }
                });
                new swiper_core_Swiper(".overview__slider", {
                    modules: [ Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".overview-pagination",
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 5,
                        renderBullet: function(index, className) {
                            var data = [ {
                                img: "img/icons/e-commerce.svg",
                                text: "E-commerce Solutions"
                            }, {
                                img: "img/icons/seo.svg",
                                text: "SEO Marketing Tools"
                            }, {
                                img: "img/icons/brand.svg",
                                text: "Brand Creator"
                            }, {
                                img: "img/icons/trading.svg",
                                text: "Algo Trading"
                            }, {
                                img: "img/icons/chatbots.svg",
                                text: "Chatbots"
                            } ];
                            return '<button class="' + className + ' overview-pagination">' + '<img src="' + data[index].img + '" alt="" />' + "<span>" + data[index].text + "</span>" + "</button>";
                        }
                    },
                    navigation: {
                        prevEl: ".overview-swiper-button-prev",
                        nextEl: ".overview-swiper-button-next"
                    },
                    breakpoints: {
                        320: {
                            pagination: {
                                el: ".overview-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 1
                            }
                        },
                        768: {
                            pagination: {
                                el: ".overview-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 3
                            }
                        },
                        1200: {
                            pagination: {
                                el: ".overview-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 5
                            }
                        }
                    },
                    on: {}
                });
                new swiper_core_Swiper(".why__slider", {
                    modules: [ Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".why-pagination",
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 5,
                        renderBullet: function(index, className) {
                            var data = [ {
                                img: "img/icons/environment.svg",
                                text: "Innovative Environment"
                            }, {
                                img: "img/icons/growth.svg",
                                text: "Growth and Learning"
                            }, {
                                img: "img/icons/culture.svg",
                                text: "Collaborative Culture"
                            }, {
                                img: "img/icons/opportunities.svg",
                                text: "Diverse Opportunities"
                            }, {
                                img: "img/icons/rewards.svg",
                                text: "Competitive Rewards"
                            } ];
                            return '<button class="' + className + ' why-pagination">' + '<img src="' + data[index].img + '" alt="" />' + "<span>" + data[index].text + "</span>" + "</button>";
                        }
                    },
                    navigation: {
                        prevEl: ".why-swiper-button-prev",
                        nextEl: ".why-swiper-button-next"
                    },
                    breakpoints: {
                        320: {
                            pagination: {
                                el: ".why-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 1
                            }
                        },
                        768: {
                            pagination: {
                                el: ".why-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 3
                            }
                        },
                        1200: {
                            pagination: {
                                el: ".why-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 5
                            }
                        }
                    },
                    on: {}
                });
                new swiper_core_Swiper(".studies__slider", {
                    modules: [ Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".studies-pagination",
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                        renderBullet: function(index, className) {
                            var data = [ {
                                svg: `<svg class="icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g clip-path="url(#clip0_51_36412)">\n                              <path class="background" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"/>\n                              <path class="inner" d="M54.3603 80.9333C49.3912 81.6446 44.4582 81.0312 39.8036 79.1961C38.8809 78.8302 37.8551 78.3508 36.886 77.8302C35.917 77.3096 34.9427 76.7116 34.0201 76.0673C33.0974 75.423 32.3757 74.8559 31.5149 74.0931C30.6541 73.3302 29.886 72.5673 29.1386 71.7374C26.2262 68.5054 24.0561 64.5415 22.8912 60.3147C21.7263 56.0879 21.5355 51.1394 22.5046 46.691C22.984 44.4797 23.7262 42.325 24.6644 40.3869C25.6025 38.4487 26.8654 36.4436 28.1644 34.8456C30.9943 31.3662 34.4324 28.691 38.4994 26.8095C42.5768 24.9229 47.1953 24.0621 51.7572 24.2735C56.319 24.4848 60.6644 25.7889 64.551 28.026C68.4376 30.2632 71.6283 33.2889 74.0304 36.8869C74.6541 37.8199 75.2211 38.7889 75.7366 39.7889C76.252 40.7889 76.6541 41.7013 77.0407 42.7425C77.4273 43.7838 77.7623 44.8714 78.0252 45.9642C78.1644 46.526 78.283 47.0931 78.386 47.6601C78.4891 48.2271 78.5716 48.7683 78.6232 49.2271C78.7572 50.3869 78.8242 51.5518 78.8293 52.7219C78.8293 54.1291 81.0252 54.1343 81.0201 52.7219C81.0098 47.825 79.8396 42.9797 77.5974 38.6291C75.3551 34.2786 72.2623 30.7838 68.4634 27.9745C64.6438 25.1498 60.1232 23.2374 55.4324 22.4745C50.7417 21.7116 45.4737 22.0157 40.7623 23.5776C36.051 25.1394 32.1128 27.6034 28.7417 30.9487C25.3706 34.2941 22.8036 38.4126 21.2778 42.9075C19.752 47.4023 19.3036 52.6652 20.0613 57.5621C20.819 62.459 22.6489 66.7632 25.4273 70.5982C28.1953 74.423 31.8087 77.624 35.9891 79.8353C40.3242 82.1291 45.185 83.3559 50.0922 83.3972C51.7159 83.4126 53.3345 83.2786 54.9427 83.0467C55.5304 82.9642 55.85 82.2168 55.7056 81.7013C55.5304 81.0724 54.9479 80.8508 54.3603 80.9384V80.9333Z" fill="currentColor"/>\n                              <path class="inner" d="M85.86 40.0568C88.2672 47.6702 88.1641 55.8506 85.5662 63.3455C83.3497 69.7475 79.293 75.4692 74.0043 79.7836C71.1538 82.1084 67.6847 84.1238 64.2569 85.4589C63.7053 85.6754 63.3239 86.196 63.494 86.8042C63.6383 87.33 64.2878 87.7836 64.8394 87.5671C71.6383 84.9176 77.5559 80.4537 81.9682 74.6393C86.3857 68.8197 89.0352 61.7733 89.6538 54.5053C90.0868 49.4486 89.5043 44.3042 87.9734 39.4692C87.793 38.9073 87.2105 38.5413 86.628 38.7063C86.0713 38.8609 85.6847 39.4898 85.8651 40.0517L85.86 40.0568Z" fill="currentColor"/>\n                              <path class="inner" d="M14.1692 62.1755C13.3961 59.4796 12.7775 56.7116 12.5095 53.9178C12.2775 51.4951 12.36 49.0466 12.6538 46.6291C13.1589 42.4951 14.5146 38.1497 16.4528 34.4229C18.4424 30.5879 20.9528 27.2941 24.1125 24.3559C27.2002 21.4848 30.7878 19.1446 34.7466 17.4538C34.8806 17.3971 35.0919 17.3095 35.3239 17.2167C35.5868 17.1136 35.8497 17.0105 36.1177 16.9075C36.6332 16.7167 37.1486 16.5363 37.6692 16.3662C38.7208 16.026 39.7878 15.727 40.8651 15.4796C43.0765 14.9693 45.0765 14.7013 47.3394 14.5982C47.9167 14.5724 48.494 14.5621 49.0713 14.5569C50.4785 14.5569 50.4837 12.3611 49.0713 12.3662C44.427 12.3765 39.7723 13.191 35.4218 14.8353C31.0713 16.4796 27.262 18.7528 23.8084 21.691C20.3548 24.6291 17.5249 28.0776 15.3084 31.9384C13.0919 35.7992 11.4888 40.1961 10.7414 44.66C10.3445 47.0363 10.128 49.459 10.1847 51.8662C10.262 54.8456 10.793 57.8301 11.5095 60.7167C11.6796 61.3972 11.86 62.0776 12.0507 62.7477C12.4373 64.1033 14.5507 63.526 14.1641 62.1652L14.1692 62.1755Z" fill="currentColor"/>\n                              <path class="inner" d="M16.6439 67.9025L18.1748 61.6809C18.3965 60.784 17.4635 60.0469 16.6439 60.4592L9.08206 64.2634C8.25216 64.6809 8.30371 65.8819 9.16453 66.2273L15.1955 68.6397C15.8037 68.8819 16.4893 68.5314 16.6439 67.8974V67.9025Z" fill="currentColor"/>\n                              <path class="inner" d="M83.2987 34.0001L81.7317 40.3764C81.5204 41.2321 82.4121 41.9382 83.1956 41.5413L90.9431 37.6393C91.7369 37.2372 91.6853 36.0929 90.8606 35.763L84.6802 33.2888C84.0977 33.0568 83.4431 33.3918 83.2936 34.0001H83.2987Z" fill="currentColor"/>\n                              <path class="inner" d="M37.5722 46.6961C34.5515 46.6961 32.0928 44.2373 32.0928 41.2167C32.0928 38.1961 34.5515 35.7373 37.5722 35.7373C40.5928 35.7373 43.0515 38.1961 43.0515 41.2167C43.0515 44.2373 40.5928 46.6961 37.5722 46.6961ZM37.5722 37.9332C35.7577 37.9332 34.2835 39.4074 34.2835 41.2218C34.2835 43.0363 35.7577 44.5105 37.5722 44.5105C39.3866 44.5105 40.8608 43.0363 40.8608 41.2218C40.8608 39.4074 39.3866 37.9332 37.5722 37.9332Z" fill="currentColor"/>\n                              <path class="inner" d="M67.1493 45.9695C64.1287 45.9695 61.6699 43.5107 61.6699 40.4901C61.6699 37.4695 64.1287 35.0107 67.1493 35.0107C70.1699 35.0107 72.6287 37.4695 72.6287 40.4901C72.6287 43.5107 70.1699 45.9695 67.1493 45.9695ZM67.1493 37.2015C65.3349 37.2015 63.8606 38.6757 63.8606 40.4901C63.8606 42.3046 65.3349 43.7788 67.1493 43.7788C68.9637 43.7788 70.438 42.3046 70.438 40.4901C70.438 38.6757 68.9637 37.2015 67.1493 37.2015Z" fill="currentColor"/>\n                              <path class="inner" d="M52.0868 50.3509C48.4116 50.3509 45.4219 47.3612 45.4219 43.6859C45.4219 40.0107 48.4116 37.021 52.0868 37.021C55.7621 37.021 58.7518 40.0107 58.7518 43.6859C58.7518 47.3612 55.7621 50.3509 52.0868 50.3509ZM52.0868 39.2117C49.6178 39.2117 47.6126 41.2169 47.6126 43.6859C47.6126 46.155 49.6178 48.1602 52.0868 48.1602C54.5559 48.1602 56.5611 46.155 56.5611 43.6859C56.5611 41.2169 54.5559 39.2117 52.0868 39.2117Z" fill="currentColor"/>\n                              <path class="inner" d="M76.6544 56.5569H61.5874V54.3661H74.3657C73.7987 51.16 70.7781 48.7063 67.1544 48.7063C63.7369 48.7063 60.809 50.8558 60.0358 53.928L57.9121 53.3919C58.9327 49.3404 62.7317 46.5156 67.1544 46.5156C72.3915 46.5156 76.6544 50.5311 76.6544 55.4641V56.562V56.5569Z" fill="currentColor"/>\n                              <path class="inner" d="M40.4635 56.5571H27.7109V55.4592C27.7109 50.5262 31.9738 46.5107 37.2109 46.5107C40.5048 46.5107 44.0305 48.4901 45.7883 51.32L43.9274 52.4747C42.7676 50.5984 40.0872 48.7015 37.2161 48.7015C33.5872 48.7015 30.5718 51.1551 30.0048 54.3613H40.4687V56.552L40.4635 56.5571Z" fill="currentColor"/>\n                              <path class="inner" d="M66.0566 65.5052H36.1133V64.4073C36.1133 56.6547 42.8298 50.3506 51.0875 50.3506C59.3452 50.3506 66.0617 56.6599 66.0617 64.4073V65.5052H66.0566ZM38.3556 63.3145H63.8092C63.2112 57.2836 57.7318 52.5413 51.0824 52.5413C44.4329 52.5413 38.9535 57.2836 38.3556 63.3145Z" fill="currentColor"/>\n                            </g>\n                            <defs>\n                              <clipPath id="clip0_51_36412">\n                                <rect width="100" height="100" fill="white"/>\n                              </clipPath>\n                            </defs>\n                          </svg>\n                          \n                        \n                        `,
                                text: "Challenge"
                            }, {
                                svg: `\n                            <svg class="icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g clip-path="url(#clip0_51_36615)">\n                            <path class="background" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n                            <path class="inner" d="M49.9746 72.7784C46.6395 72.7784 43.3045 72.7784 39.9694 72.7784C38.7117 72.7784 38.454 72.5413 38.2942 71.3145C37.7684 67.2939 36.6086 63.5052 34.0519 60.2681C33.2942 59.3093 32.5107 58.3712 31.7014 57.4588C29.088 54.5001 27.9797 51.0104 27.789 47.1135C27.4746 40.732 29.3251 35.1341 33.6395 30.4176C36.7529 27.0104 40.5777 24.7681 45.1086 23.7578C48.8457 22.9227 52.5674 22.9846 56.222 24.0928C62.5777 26.0207 67.2529 29.9949 70.1395 35.9949C72.222 40.3145 72.6241 44.866 71.9797 49.5774C71.5107 53.0104 69.8921 55.83 67.5777 58.2939C64.4746 61.598 62.588 65.4691 61.9024 69.9382C61.8251 70.4485 61.7323 70.9588 61.6756 71.4743C61.5622 72.4537 61.2117 72.7836 60.2323 72.7836C56.8148 72.7836 53.3973 72.7836 49.9797 72.7836L49.9746 72.7784ZM49.9797 70.7526C49.9797 70.7526 49.9797 70.7475 49.9797 70.7423C52.9437 70.7423 55.9024 70.7269 58.8663 70.7526C59.4437 70.7578 59.7117 70.6186 59.8045 70.0052C60.1292 67.83 60.6962 65.7166 61.5313 63.6753C62.588 61.1032 64.2684 58.9588 66.0983 56.9176C68.1653 54.6135 69.588 52.0258 69.99 48.9021C70.5725 44.3867 70.0622 40.0568 67.8715 36.0155C63.1808 27.3557 53.4282 23.3093 44.0777 26.1083C35.8303 28.5774 29.9282 36.5001 29.7736 45.1032C29.6859 49.9434 31.0983 54.1032 34.4694 57.6444C35.6808 58.9176 36.6705 60.4434 37.5725 61.964C38.9643 64.299 39.6602 66.9073 40.0777 69.5825C40.2632 70.7526 40.2529 70.7526 41.4024 70.7526C44.2581 70.7526 47.1189 70.7526 49.9746 70.7526H49.9797Z" fill="#3078F6"/>\n                            <path class="inner" d="M49.9849 77.8867C47.1911 77.8867 44.3973 77.8867 41.5983 77.8867C41.088 77.8867 40.5777 77.8043 40.4385 77.2682C40.3561 76.9383 40.4179 76.4331 40.6293 76.2012C40.8509 75.9589 41.3251 75.8507 41.686 75.8455C44.1705 75.8146 46.655 75.8249 49.1396 75.8197C52.0365 75.8197 54.9385 75.8197 57.8355 75.8197C58.1241 75.8197 58.4179 75.8094 58.7014 75.8455C59.3303 75.9228 59.6757 76.3043 59.6602 76.8558C59.6396 77.4434 59.253 77.8403 58.6138 77.8558C57.4952 77.8816 56.3767 77.8764 55.2581 77.8764C53.5004 77.8764 51.7375 77.8764 49.9798 77.8764L49.9849 77.8867Z" fill="#3078F6"/>\n                            <path class="inner" d="M50.0208 82.2267C47.8456 82.2267 45.6755 82.2215 43.5002 82.2267C42.9435 82.2267 42.5157 82.0617 42.3404 81.505C42.1239 80.8246 42.6136 80.2112 43.4023 80.2009C45.3249 80.1854 47.2528 80.1958 49.1755 80.1958C51.6394 80.1958 54.1033 80.2061 56.5672 80.2009C57.0775 80.2009 57.526 80.3659 57.6239 80.871C57.6858 81.2061 57.5724 81.6597 57.3662 81.9329C57.2115 82.139 56.7837 82.2164 56.4796 82.2215C54.325 82.2473 52.1755 82.2318 50.0208 82.2318V82.2267Z" fill="#3078F6"/>\n                            <path class="inner" d="M49.9641 86.5926C48.3095 86.5926 46.6549 86.5926 44.9951 86.5926C44.4538 86.5926 44.0105 86.4225 43.8456 85.8503C43.6445 85.1648 44.1239 84.5771 44.928 84.5617C46.2734 84.5359 47.6188 84.541 48.9641 84.5462C50.9693 84.5462 52.9796 84.5565 54.9847 84.5617C55.5054 84.5617 55.928 84.7163 56.1188 85.2421C56.3713 85.9276 55.8817 86.5771 55.0466 86.5874C53.3507 86.6132 51.6549 86.5926 49.9538 86.5977L49.9641 86.5926Z" fill="#3078F6"/>\n                            <path class="inner" d="M19.4227 46.7215C18.1598 46.7215 16.9021 46.7215 15.6392 46.7215C14.9588 46.7215 14.5361 46.3452 14.5258 45.7473C14.5103 45.1545 14.9227 44.7112 15.598 44.706C18.1598 44.6854 20.7217 44.6854 23.2835 44.6957C24.0155 44.6957 24.4227 45.1081 24.4176 45.7318C24.4176 46.3607 24.0155 46.7164 23.2629 46.7215C21.9794 46.7318 20.7011 46.7215 19.4176 46.7215H19.4227Z" fill="#3078F6"/>\n                            <path class="inner" d="M80.5618 44.6857C81.8453 44.6857 83.1288 44.6703 84.4123 44.6909C85.2216 44.7064 85.7113 45.4022 85.3556 46.0878C85.2113 46.361 84.8144 46.6754 84.5309 46.6806C81.8814 46.7321 79.2319 46.7321 76.5824 46.7167C75.9226 46.7167 75.5876 46.3095 75.5979 45.6909C75.6082 45.1136 76.0051 44.7167 76.6494 44.7064C77.9536 44.6857 79.2577 44.7012 80.5618 44.7012V44.6909V44.6857Z" fill="#3078F6"/>\n                            <path class="inner" d="M37.8346 22.8248C37.5717 23.1032 37.3398 23.4898 37.0047 23.665C36.5408 23.9021 36.113 23.6392 35.8553 23.2114C35.2934 22.2939 34.7522 21.366 34.2161 20.4382C33.4687 19.1496 32.7058 17.8764 32.0202 16.5568C31.8449 16.2217 31.7986 15.6753 31.9532 15.3506C32.2934 14.6444 33.2264 14.6908 33.6594 15.4073C34.6491 17.0568 35.5975 18.7217 36.5614 20.3867C36.8604 20.9021 37.1697 21.4176 37.4583 21.9434C37.5872 22.1753 37.6697 22.4279 37.8398 22.8248H37.8346Z" fill="#3078F6"/>\n                            <path class="inner" d="M20.0155 64.062C19.7578 63.8249 19.3764 63.6135 19.2217 63.2888C18.9898 62.8145 19.1805 62.3455 19.6496 62.062C20.4125 61.6032 21.1856 61.1651 21.9588 60.7218C23.4125 59.8867 24.8609 59.0413 26.3197 58.2218C27.1289 57.7681 27.9228 58.1393 27.9846 58.9743C28.0259 59.5156 27.6702 59.7991 27.263 60.0362C25.6496 60.964 24.031 61.8867 22.4176 62.8145C21.897 63.1135 21.3815 63.4279 20.8558 63.7166C20.6444 63.8352 20.4021 63.9073 20.0155 64.062Z" fill="#3078F6"/>\n                            <path class="inner" d="M68.3607 15.7318C68.1803 16.1545 68.0926 16.4329 67.9483 16.6751C66.7679 18.737 65.5823 20.7988 64.3865 22.8556C64.2627 23.0669 64.1287 23.2885 63.9535 23.4535C63.5978 23.7885 63.1854 23.8556 62.7679 23.5617C62.3813 23.2885 62.1597 22.9071 62.3401 22.438C62.4947 22.036 62.7215 21.6597 62.938 21.2834C64.0566 19.3298 65.1803 17.3762 66.3091 15.4226C66.572 14.9638 66.9947 14.6751 67.4947 14.9071C67.8401 15.0669 68.0823 15.4483 68.3555 15.7215L68.3607 15.7318Z" fill="#3078F6"/>\n                            <path class="inner" d="M27.9899 32.2061C27.9692 33.2525 27.1703 33.6907 26.4228 33.2732C25.16 32.567 23.9125 31.8299 22.6548 31.1082C21.7579 30.5927 20.861 30.0773 19.9692 29.5515C19.1703 29.0824 18.9589 28.5876 19.2785 28.0103C19.6084 27.4175 20.16 27.3196 20.9435 27.768C23.0826 28.9897 25.2167 30.2216 27.3301 31.4793C27.6496 31.6701 27.8507 32.0464 27.9899 32.201V32.2061Z" fill="#3078F6"/>\n                            <path class="inner" d="M79.7376 27.4796C80.3304 27.4744 80.6602 27.7321 80.8046 28.1909C80.9541 28.6703 80.8355 29.093 80.3716 29.3662C79.3355 29.9693 78.3046 30.5775 77.2685 31.1754C76.0365 31.8868 74.8046 32.6136 73.552 33.294C72.8097 33.6961 71.985 33.2115 72.0572 32.4022C72.0829 32.1033 72.3046 31.7064 72.552 31.5569C74.784 30.2218 77.0468 28.928 79.2994 27.6342C79.4541 27.5466 79.6448 27.5156 79.7376 27.4847V27.4796Z" fill="#3078F6"/>\n                            <path class="inner" d="M80.8607 62.7322C80.8504 63.7477 80.0978 64.2065 79.3556 63.8302C78.6185 63.4539 77.9123 63.0209 77.1958 62.6034C75.6906 61.7322 74.1906 60.8611 72.6855 59.99C72.2886 59.758 71.9844 59.4693 72.036 58.959C72.1236 58.1188 72.8453 57.7632 73.6442 58.2065C74.9793 58.9539 76.2989 59.7322 77.6236 60.5003C78.4999 61.0054 79.3968 61.49 80.2473 62.0363C80.5463 62.2271 80.7319 62.5827 80.8556 62.7322H80.8607Z" fill="#3078F6"/>\n                            <path class="inner" d="M51.0099 15.2836C51.0099 16.5258 51.015 17.7629 51.0099 19.0052C51.0047 19.732 50.6233 20.165 50.0099 20.165C49.4222 20.165 48.9893 19.7062 48.9893 19.0052C48.9789 16.4846 48.9738 13.9588 48.9893 11.4382C48.9944 10.531 49.5923 10.0619 50.3398 10.3145C50.8398 10.4846 51.0253 10.8609 51.0202 11.3712C51.0099 12.6753 51.0202 13.9743 51.0202 15.2784C51.0202 15.2784 51.0202 15.2784 51.015 15.2784L51.0099 15.2836Z" fill="#3078F6"/>\n                            <path class="inner" d="M42.3714 33.4384C43.8559 33.4538 45.624 34.191 47.3456 35.0724C48.0466 35.4281 48.7271 35.8301 49.3765 36.2631C49.8198 36.5569 50.1549 36.5569 50.6085 36.2631C52.3972 35.0879 54.2786 34.0776 56.3972 33.6343C57.1343 33.4796 57.691 33.1858 58.2374 32.6549C59.5724 31.3559 61.8765 31.5569 63.1343 32.9899C64.3405 34.3662 64.1652 36.5569 62.7992 37.8147C62.5106 38.0776 62.2889 38.5054 62.2116 38.8971C61.7631 41.1755 60.6961 43.1755 59.4642 45.1033C59.1704 45.5621 59.1549 45.8817 59.4539 46.325C60.6188 48.0466 61.6188 49.8817 62.0415 51.9281C62.258 52.9796 62.2889 54.1188 62.1394 55.1807C61.9023 56.9023 60.3456 58.0157 58.3765 58.0569C56.3662 58.0982 54.5673 57.3611 52.8301 56.4642C52.0209 56.0466 51.2425 55.5724 50.4745 55.0827C50.124 54.8559 49.8765 54.8559 49.526 55.0827C47.7734 56.2374 45.9487 57.2528 43.8765 57.7219C43.1343 57.8868 42.3611 58.0157 41.6033 58.0002C38.5673 57.9487 37.3765 55.6961 37.6755 53.2064C37.959 50.8714 38.9126 48.7837 40.2013 46.8662C40.7683 46.0209 40.8147 45.4229 40.2116 44.5724C39.1704 43.0982 38.4075 41.4538 37.9539 39.6961C37.7838 39.0363 37.6549 38.3559 37.6394 37.6755C37.5673 34.9899 39.1188 33.4538 42.3611 33.4384H42.3714ZM56.4642 45.727C56.3662 45.5672 56.2992 45.4178 56.1961 45.2941C54.4899 43.1446 52.5466 41.2322 50.4178 39.5054C50.1291 39.2683 49.8817 39.2631 49.593 39.5054C47.4487 41.2477 45.4848 43.1652 43.7734 45.3456C43.526 45.66 43.5621 45.8714 43.7889 46.1549C45.4899 48.2528 47.3714 50.1652 49.4745 51.8662C49.8456 52.1652 50.1188 52.1858 50.5054 51.8765C52.6085 50.1755 54.5106 48.2786 56.191 46.1652C56.2889 46.0363 56.3662 45.892 56.4642 45.7374V45.727ZM51.8869 53.5776C53.8765 54.7631 55.8456 55.9538 58.2271 56.0415C59.6033 56.093 60.3456 55.227 60.2734 53.8198C60.1755 51.8095 59.2734 50.0827 58.3147 48.3868C58.1652 48.1239 57.9848 47.8817 57.825 47.6394C55.8456 49.6239 53.9075 51.5569 51.8869 53.5827V53.5776ZM42.1188 47.593C41.6291 48.5054 41.1085 49.3868 40.6755 50.3095C40.1394 51.4538 39.691 52.6394 39.6858 53.9281C39.6858 55.2219 40.3044 55.8868 41.5827 55.9745C41.9281 56.0002 42.2838 55.9745 42.6291 55.9178C44.5724 55.6188 46.2683 54.7322 47.8972 53.691C47.9745 53.6394 48.0209 53.5363 48.0466 53.5002C46.0827 51.5415 44.1497 49.6136 42.1137 47.5827L42.1188 47.593ZM42.191 43.8198C42.3456 43.7064 42.4745 43.6446 42.5673 43.5466C44.3095 41.8147 46.0363 40.0672 47.7889 38.3456C48.1497 37.9951 48.0621 37.7889 47.6858 37.6033C46.4436 36.9951 45.2271 36.3198 43.9435 35.825C43.1961 35.5363 42.3301 35.4693 41.5157 35.4538C40.4796 35.4384 39.8198 36.0621 39.7889 37.093C39.7683 37.8868 39.8508 38.7116 40.0673 39.4693C40.5106 41.0209 41.2322 42.459 42.1961 43.8147L42.191 43.8198ZM57.5724 43.9745C58.7838 42.4229 59.5054 41.0002 59.9899 39.4435C60.16 38.8971 60.0724 38.6652 59.5209 38.5105C58.3301 38.1806 57.5673 37.3611 57.2167 36.1961C57.0518 35.6446 56.7683 35.5312 56.3147 35.7374C54.9796 36.3404 53.66 36.9693 52.3301 37.593C51.7992 37.8404 51.9487 38.0724 52.2941 38.4075C53.9642 40.0415 55.6137 41.6961 57.2528 43.3559C57.4075 43.5105 57.4642 43.7631 57.5724 43.9693V43.9745ZM61.8972 35.2116C61.9229 34.4538 61.3714 33.8714 60.5982 33.8559C59.7734 33.8353 59.1188 34.4435 59.093 35.258C59.0673 36.0209 59.7477 36.6394 60.6085 36.6497C61.2374 36.6549 61.8662 35.9538 61.8972 35.2167V35.2116Z" fill="#3078F6"/>\n                            <path class="inner" d="M49.9745 49.1496C48.0672 49.1289 46.5105 47.5722 46.5415 45.7114C46.5724 43.8094 48.1291 42.2578 49.9951 42.2681C51.9229 42.2784 53.4848 43.8557 53.4538 45.7578C53.4229 47.6547 51.8662 49.1702 49.9745 49.1496ZM51.3714 45.6805C51.3559 44.8867 50.7837 44.3197 49.9951 44.3197C49.2064 44.3197 48.6136 44.9434 48.6239 45.763C48.6343 46.5413 49.2322 47.1289 50.0054 47.1238C50.8044 47.1238 51.3868 46.5001 51.3714 45.6805Z" fill="#3078F6"/>\n                            </g>\n                            <defs>\n                            <clipPath id="clip0_51_36615">\n                            <rect width="100" height="100" fill="white"/>\n                            </clipPath>\n                            </defs>\n                            </svg>\n                            \n                            `,
                                text: "Solution"
                            }, {
                                svg: `\n                        <svg class="icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <g clip-path="url(#clip0_51_36635)">\n                        <path class="background" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n                        <path class="inner" d="M34.0048 34.995C35.5615 35.1754 37.0305 34.8558 38.4996 34.562C40.814 34.0929 43.1336 33.7785 45.4378 34.5156C46.4171 34.83 47.3501 35.2991 48.2883 35.7372C48.5872 35.8764 48.7934 35.9589 49.1182 35.763C52.3089 33.8403 55.6491 33.6599 59.0976 34.964C60.3553 35.4383 61.5924 35.9692 62.8604 36.4228C63.6646 36.7115 64.5048 36.928 65.4017 36.5774C65.3553 36.3764 65.314 36.2115 65.2728 36.0465C64.9068 34.4537 65.6646 32.9228 67.1852 32.3249C68.8656 31.6599 70.5615 31.0259 72.2677 30.4331C74.0254 29.8197 75.6955 30.696 76.3811 32.531C78.5512 38.3609 80.711 44.1908 82.8759 50.0156C83.1594 50.7785 83.4584 51.5414 83.7213 52.3146C84.3192 54.0671 83.5563 55.7372 81.8295 56.4125C80.247 57.0311 78.6543 57.6135 77.0615 58.196C75.2573 58.8558 73.6646 58.1857 72.8244 56.4434C72.7728 56.3403 72.7006 56.2424 72.5563 56.1445C72.6852 57.7269 72.6182 59.2475 71.5563 60.5207C70.4378 61.8609 69.0099 62.0671 67.412 61.5362C67.6491 65.263 64.3708 67.3609 61.2677 66.3403C61.3398 67.6754 61.0254 68.8764 60.1233 69.8713C59.211 70.8816 58.0357 71.3094 56.6336 71.361C56.8295 73.0517 56.3501 74.4847 54.9017 75.4434C53.4275 76.4228 51.9635 76.0568 50.5151 75.2063C49.5872 76.9486 48.3553 78.2527 46.2367 77.9486C44.2213 77.6599 43.0357 76.3197 42.3553 74.428C39.6285 75.3506 37.5718 74.5929 36.2831 71.9383C34.5769 72.928 32.8656 72.9692 31.2625 71.7785C29.7161 70.629 29.3347 69.0104 29.6852 67.1496C29.2419 67.1187 28.7986 67.129 28.3707 67.0465C25.4635 66.4898 23.979 63.4898 25.2883 60.83C25.6182 60.1599 25.9996 59.5104 26.3347 58.8403C26.4481 58.6187 26.4996 58.3713 26.6285 57.9743C26.3501 58.1187 26.2367 58.1599 26.1388 58.2269C25.247 58.8609 24.2831 59.0053 23.247 58.6754C21.6491 58.1651 20.0512 57.6651 18.4584 57.1393C16.4842 56.4898 15.6388 54.8455 16.2728 52.8661C18.0254 47.4073 19.7883 41.9537 21.546 36.495C21.9326 35.2991 22.3037 34.0981 22.7006 32.9073C23.3295 31.0104 24.979 30.1651 26.8862 30.7579C28.2986 31.196 29.6852 31.7012 31.1079 32.0981C32.6388 32.5259 33.7161 33.3455 33.9893 34.995H34.0048ZM48.2728 67.5259C48.278 67.4847 48.2883 67.4434 48.2934 67.4022C48.1439 67.3146 47.9945 67.2269 47.8501 67.129C47.3811 66.8094 47.2161 66.3764 47.5151 65.8764C47.7883 65.4125 48.2213 65.2991 48.7161 65.5259C48.9171 65.6187 49.1079 65.7269 49.3037 65.83C51.3862 66.9383 53.4635 68.0568 55.5615 69.1445C57.1182 69.9537 58.8708 69.2166 59.3347 67.5981C59.6749 66.4228 59.1903 65.2579 57.9996 64.5774C56.6388 63.8042 55.247 63.0826 53.8656 62.3403C53.1852 61.9743 52.4945 61.629 51.8244 61.2424C51.3398 60.964 51.1594 60.5259 51.4378 60.0053C51.7161 59.4847 52.1697 59.4125 52.6852 59.6341C52.845 59.7012 52.9996 59.7939 53.1543 59.8764C55.9326 61.3661 58.7161 62.8558 61.4893 64.3558C62.2058 64.7424 62.9481 64.8867 63.7213 64.6341C64.7573 64.2939 65.3914 63.5723 65.5202 62.4795C65.6594 61.3042 65.1903 60.397 64.1594 59.83C61.4738 58.3558 58.7728 56.9022 56.0769 55.4383C55.8656 55.3249 55.6388 55.2115 55.4635 55.0517C54.9532 54.5774 55.113 53.7475 55.7831 53.5723C56.0821 53.495 56.4841 53.5929 56.7677 53.7424C58.8553 54.8455 60.9223 55.9898 62.9996 57.1084C64.613 57.9795 66.2161 58.8609 67.8501 59.6857C69.1491 60.3352 70.1336 59.8713 70.5821 58.495C71.046 57.0671 70.68 55.7424 69.2677 54.7166C67.7728 53.6341 66.1903 52.6548 64.5718 51.763C62.3295 50.531 59.9481 49.5414 57.7677 48.2218C56.211 47.2785 54.7213 47.1702 53.0976 47.7012C51.4223 48.2475 49.778 48.9022 48.0924 49.4125C44.278 50.5671 41.4223 49.7063 39.2264 46.8455C38.8553 46.3609 38.7625 45.8867 39.1233 45.397C39.6285 44.7012 40.1079 43.9743 40.711 43.3661C42.7006 41.3609 44.7419 39.4022 46.7573 37.4228C46.845 37.3403 46.9068 37.2321 46.9893 37.1238C45.0409 36.0259 42.9996 35.7579 40.8656 36.0414C38.5769 36.3455 36.3398 37.0723 33.9842 36.9073C33.8553 36.897 33.6285 37.1341 33.5769 37.2939C31.8604 42.5774 30.1388 47.8609 28.4635 53.1599C28.2058 53.9692 28.1749 54.8506 28.0357 55.7012C29.5924 54.6032 31.1388 54.1548 32.8244 54.8764C34.4893 55.5929 35.3862 56.9692 35.6336 58.7475C39.0718 58.6238 40.0408 59.3506 41.1543 62.8764C42.613 62.5362 43.9532 62.8042 45.1079 63.7939C46.2625 64.7836 46.6749 66.0981 46.5924 67.5414H48.2883L48.2728 67.5259ZM40.9017 45.9228C41.0099 46.0671 41.0718 46.1599 41.1439 46.2424C42.747 48.0517 44.7573 48.4537 46.9893 47.8042C48.7213 47.2991 50.4068 46.6341 52.1233 46.0671C53.5615 45.5929 55.046 45.2166 56.5357 45.6702C57.4481 45.9434 58.278 46.495 59.1336 46.928C61.4945 48.1238 63.8656 49.2991 66.2006 50.5414C68.0151 51.5053 69.7831 52.5465 71.2419 54.031C71.4171 54.2063 71.6697 54.2991 71.8914 54.4331C71.8604 54.1754 71.8759 53.897 71.7883 53.6599C70.5872 50.3919 69.3707 47.129 68.1594 43.8661C67.479 42.031 66.7934 40.196 66.1182 38.3764C64.046 38.7063 63.2213 38.6084 61.2419 37.8094C60.3862 37.464 59.5254 37.1187 58.6697 36.7682C55.1491 35.3403 51.8037 35.7527 48.9017 38.1496C46.5099 40.1238 44.3604 42.3919 42.1182 44.5465C41.68 44.9692 41.3089 45.4692 40.9068 45.9331L40.9017 45.9228ZM73.2006 32.0929C73.0666 32.129 72.8295 32.1754 72.6079 32.2579C71.1182 32.8042 69.6285 33.3558 68.1439 33.9176C67.0976 34.3146 66.814 34.9331 67.2058 36.0001C69.6079 42.4898 72.0151 48.9847 74.4274 55.4743C74.8295 56.562 75.4429 56.8249 76.5563 56.4125C77.9842 55.8867 79.4068 55.3558 80.8347 54.8249C82.0615 54.3661 82.314 53.8146 81.8553 52.5774C80.4429 48.7733 79.0305 44.9692 77.6182 41.1702C76.6285 38.5053 75.6336 35.8403 74.6491 33.1702C74.412 32.531 74.0254 32.1135 73.1955 32.0981L73.2006 32.0929ZM17.912 53.8816C17.9017 54.6702 18.2367 55.1084 18.9738 55.3558C20.5409 55.8764 22.113 56.3919 23.6903 56.8867C24.6697 57.196 25.2883 56.8558 25.6182 55.8506C27.7573 49.2424 29.8862 42.6341 32.0151 36.0207C32.3604 34.9537 32.0305 34.3352 30.9635 33.9898C29.5151 33.5207 28.0666 33.0568 26.6182 32.5929C25.3295 32.1805 24.7986 32.4486 24.3811 33.7372C22.2883 40.2218 20.1903 46.7012 18.0976 53.1857C18.0099 53.4589 17.9481 53.7372 17.9068 53.8816H17.912ZM31.3244 68.3042C31.412 69.5207 32.0821 70.4073 33.2213 70.7218C34.3244 71.031 35.4532 70.5774 36.0357 69.5207C36.9945 67.7836 37.9223 66.0311 38.845 64.2733C39.5512 62.9228 39.1439 61.4486 37.9068 60.7888C36.6543 60.1238 35.2161 60.5981 34.4893 61.9383C33.5769 63.6238 32.6646 65.3146 31.7831 67.0156C31.5769 67.4176 31.479 67.8713 31.3295 68.3042H31.3244ZM29.0872 65.2682C30.0151 65.2785 30.8089 64.8558 31.2728 64.0207C32.0202 62.6702 32.7573 61.3146 33.4481 59.9331C34.0666 58.7063 33.5821 57.3609 32.345 56.6496C31.2934 56.0517 29.8089 56.4228 29.1594 57.5362C28.3501 58.928 27.5769 60.3403 26.8862 61.7939C26.1079 63.428 27.3037 65.2475 29.0872 65.263V65.2682ZM40.3811 72.964C41.2625 72.964 42.0099 72.6341 42.4481 71.8816C43.1903 70.6084 43.9017 69.3094 44.5357 67.9795C45.0872 66.83 44.5563 65.4537 43.4429 64.8558C42.3037 64.2424 40.8553 64.5878 40.1955 65.7115C39.4738 66.9434 38.778 68.2063 38.1749 69.5001C37.4068 71.1445 38.5872 72.9434 40.3811 72.964ZM46.6955 76.1445C47.4326 76.1702 47.9945 75.7991 48.3347 75.2063C48.912 74.2011 49.4378 73.1548 49.912 72.0929C50.1697 71.5104 50.1439 70.8919 49.68 70.3558C48.3914 68.8661 46.2213 69.0362 45.2006 70.7218C44.8811 71.2475 44.5924 71.7939 44.3244 72.3455C43.5615 73.928 44.9326 76.1084 46.6955 76.1393V76.1445ZM50.8347 68.7424C52.2625 70.2012 52.0821 71.8403 51.3811 73.5156C52.8501 74.5259 54.0924 74.3146 54.6646 72.9847C55.1079 71.9589 54.7316 70.8764 53.68 70.2785C52.7419 69.7424 51.7831 69.2527 50.8347 68.7424Z" fill="#3078F6"/>\n                        </g>\n                        <defs>\n                        <clipPath id="clip0_51_36635">\n                        <rect width="100" height="100" fill="white"/>\n                        </clipPath>\n                        </defs>\n                        </svg>\n                        \n                        `,
                                text: "Outcome"
                            } ];
                            return '<button class="' + className + ' studies-pagination">' + data[index].svg + "<span>" + data[index].text + "</span>" + "</button>";
                        }
                    },
                    navigation: {
                        prevEl: ".studies-swiper-button-prev",
                        nextEl: ".studies-swiper-button-next"
                    },
                    breakpoints: {
                        320: {
                            pagination: {
                                el: ".studies-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 1
                            }
                        },
                        992: {
                            pagination: {
                                el: ".studies-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 3
                            }
                        }
                    },
                    on: {}
                });
                new swiper_core_Swiper(".case-2__slider", {
                    modules: [ Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".case-2-pagination",
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                        renderBullet: function(index, className) {
                            var data = [ {
                                svg: `<svg class="icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g clip-path="url(#clip0_51_36412)">\n                              <path class="background" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"/>\n                              <path class="inner" d="M54.3603 80.9333C49.3912 81.6446 44.4582 81.0312 39.8036 79.1961C38.8809 78.8302 37.8551 78.3508 36.886 77.8302C35.917 77.3096 34.9427 76.7116 34.0201 76.0673C33.0974 75.423 32.3757 74.8559 31.5149 74.0931C30.6541 73.3302 29.886 72.5673 29.1386 71.7374C26.2262 68.5054 24.0561 64.5415 22.8912 60.3147C21.7263 56.0879 21.5355 51.1394 22.5046 46.691C22.984 44.4797 23.7262 42.325 24.6644 40.3869C25.6025 38.4487 26.8654 36.4436 28.1644 34.8456C30.9943 31.3662 34.4324 28.691 38.4994 26.8095C42.5768 24.9229 47.1953 24.0621 51.7572 24.2735C56.319 24.4848 60.6644 25.7889 64.551 28.026C68.4376 30.2632 71.6283 33.2889 74.0304 36.8869C74.6541 37.8199 75.2211 38.7889 75.7366 39.7889C76.252 40.7889 76.6541 41.7013 77.0407 42.7425C77.4273 43.7838 77.7623 44.8714 78.0252 45.9642C78.1644 46.526 78.283 47.0931 78.386 47.6601C78.4891 48.2271 78.5716 48.7683 78.6232 49.2271C78.7572 50.3869 78.8242 51.5518 78.8293 52.7219C78.8293 54.1291 81.0252 54.1343 81.0201 52.7219C81.0098 47.825 79.8396 42.9797 77.5974 38.6291C75.3551 34.2786 72.2623 30.7838 68.4634 27.9745C64.6438 25.1498 60.1232 23.2374 55.4324 22.4745C50.7417 21.7116 45.4737 22.0157 40.7623 23.5776C36.051 25.1394 32.1128 27.6034 28.7417 30.9487C25.3706 34.2941 22.8036 38.4126 21.2778 42.9075C19.752 47.4023 19.3036 52.6652 20.0613 57.5621C20.819 62.459 22.6489 66.7632 25.4273 70.5982C28.1953 74.423 31.8087 77.624 35.9891 79.8353C40.3242 82.1291 45.185 83.3559 50.0922 83.3972C51.7159 83.4126 53.3345 83.2786 54.9427 83.0467C55.5304 82.9642 55.85 82.2168 55.7056 81.7013C55.5304 81.0724 54.9479 80.8508 54.3603 80.9384V80.9333Z" fill="currentColor"/>\n                              <path class="inner" d="M85.86 40.0568C88.2672 47.6702 88.1641 55.8506 85.5662 63.3455C83.3497 69.7475 79.293 75.4692 74.0043 79.7836C71.1538 82.1084 67.6847 84.1238 64.2569 85.4589C63.7053 85.6754 63.3239 86.196 63.494 86.8042C63.6383 87.33 64.2878 87.7836 64.8394 87.5671C71.6383 84.9176 77.5559 80.4537 81.9682 74.6393C86.3857 68.8197 89.0352 61.7733 89.6538 54.5053C90.0868 49.4486 89.5043 44.3042 87.9734 39.4692C87.793 38.9073 87.2105 38.5413 86.628 38.7063C86.0713 38.8609 85.6847 39.4898 85.8651 40.0517L85.86 40.0568Z" fill="currentColor"/>\n                              <path class="inner" d="M14.1692 62.1755C13.3961 59.4796 12.7775 56.7116 12.5095 53.9178C12.2775 51.4951 12.36 49.0466 12.6538 46.6291C13.1589 42.4951 14.5146 38.1497 16.4528 34.4229C18.4424 30.5879 20.9528 27.2941 24.1125 24.3559C27.2002 21.4848 30.7878 19.1446 34.7466 17.4538C34.8806 17.3971 35.0919 17.3095 35.3239 17.2167C35.5868 17.1136 35.8497 17.0105 36.1177 16.9075C36.6332 16.7167 37.1486 16.5363 37.6692 16.3662C38.7208 16.026 39.7878 15.727 40.8651 15.4796C43.0765 14.9693 45.0765 14.7013 47.3394 14.5982C47.9167 14.5724 48.494 14.5621 49.0713 14.5569C50.4785 14.5569 50.4837 12.3611 49.0713 12.3662C44.427 12.3765 39.7723 13.191 35.4218 14.8353C31.0713 16.4796 27.262 18.7528 23.8084 21.691C20.3548 24.6291 17.5249 28.0776 15.3084 31.9384C13.0919 35.7992 11.4888 40.1961 10.7414 44.66C10.3445 47.0363 10.128 49.459 10.1847 51.8662C10.262 54.8456 10.793 57.8301 11.5095 60.7167C11.6796 61.3972 11.86 62.0776 12.0507 62.7477C12.4373 64.1033 14.5507 63.526 14.1641 62.1652L14.1692 62.1755Z" fill="currentColor"/>\n                              <path class="inner" d="M16.6439 67.9025L18.1748 61.6809C18.3965 60.784 17.4635 60.0469 16.6439 60.4592L9.08206 64.2634C8.25216 64.6809 8.30371 65.8819 9.16453 66.2273L15.1955 68.6397C15.8037 68.8819 16.4893 68.5314 16.6439 67.8974V67.9025Z" fill="currentColor"/>\n                              <path class="inner" d="M83.2987 34.0001L81.7317 40.3764C81.5204 41.2321 82.4121 41.9382 83.1956 41.5413L90.9431 37.6393C91.7369 37.2372 91.6853 36.0929 90.8606 35.763L84.6802 33.2888C84.0977 33.0568 83.4431 33.3918 83.2936 34.0001H83.2987Z" fill="currentColor"/>\n                              <path class="inner" d="M37.5722 46.6961C34.5515 46.6961 32.0928 44.2373 32.0928 41.2167C32.0928 38.1961 34.5515 35.7373 37.5722 35.7373C40.5928 35.7373 43.0515 38.1961 43.0515 41.2167C43.0515 44.2373 40.5928 46.6961 37.5722 46.6961ZM37.5722 37.9332C35.7577 37.9332 34.2835 39.4074 34.2835 41.2218C34.2835 43.0363 35.7577 44.5105 37.5722 44.5105C39.3866 44.5105 40.8608 43.0363 40.8608 41.2218C40.8608 39.4074 39.3866 37.9332 37.5722 37.9332Z" fill="currentColor"/>\n                              <path class="inner" d="M67.1493 45.9695C64.1287 45.9695 61.6699 43.5107 61.6699 40.4901C61.6699 37.4695 64.1287 35.0107 67.1493 35.0107C70.1699 35.0107 72.6287 37.4695 72.6287 40.4901C72.6287 43.5107 70.1699 45.9695 67.1493 45.9695ZM67.1493 37.2015C65.3349 37.2015 63.8606 38.6757 63.8606 40.4901C63.8606 42.3046 65.3349 43.7788 67.1493 43.7788C68.9637 43.7788 70.438 42.3046 70.438 40.4901C70.438 38.6757 68.9637 37.2015 67.1493 37.2015Z" fill="currentColor"/>\n                              <path class="inner" d="M52.0868 50.3509C48.4116 50.3509 45.4219 47.3612 45.4219 43.6859C45.4219 40.0107 48.4116 37.021 52.0868 37.021C55.7621 37.021 58.7518 40.0107 58.7518 43.6859C58.7518 47.3612 55.7621 50.3509 52.0868 50.3509ZM52.0868 39.2117C49.6178 39.2117 47.6126 41.2169 47.6126 43.6859C47.6126 46.155 49.6178 48.1602 52.0868 48.1602C54.5559 48.1602 56.5611 46.155 56.5611 43.6859C56.5611 41.2169 54.5559 39.2117 52.0868 39.2117Z" fill="currentColor"/>\n                              <path class="inner" d="M76.6544 56.5569H61.5874V54.3661H74.3657C73.7987 51.16 70.7781 48.7063 67.1544 48.7063C63.7369 48.7063 60.809 50.8558 60.0358 53.928L57.9121 53.3919C58.9327 49.3404 62.7317 46.5156 67.1544 46.5156C72.3915 46.5156 76.6544 50.5311 76.6544 55.4641V56.562V56.5569Z" fill="currentColor"/>\n                              <path class="inner" d="M40.4635 56.5571H27.7109V55.4592C27.7109 50.5262 31.9738 46.5107 37.2109 46.5107C40.5048 46.5107 44.0305 48.4901 45.7883 51.32L43.9274 52.4747C42.7676 50.5984 40.0872 48.7015 37.2161 48.7015C33.5872 48.7015 30.5718 51.1551 30.0048 54.3613H40.4687V56.552L40.4635 56.5571Z" fill="currentColor"/>\n                              <path class="inner" d="M66.0566 65.5052H36.1133V64.4073C36.1133 56.6547 42.8298 50.3506 51.0875 50.3506C59.3452 50.3506 66.0617 56.6599 66.0617 64.4073V65.5052H66.0566ZM38.3556 63.3145H63.8092C63.2112 57.2836 57.7318 52.5413 51.0824 52.5413C44.4329 52.5413 38.9535 57.2836 38.3556 63.3145Z" fill="currentColor"/>\n                            </g>\n                            <defs>\n                              <clipPath id="clip0_51_36412">\n                                <rect width="100" height="100" fill="white"/>\n                              </clipPath>\n                            </defs>\n                          </svg>\n                          \n                        \n                        `,
                                text: "Challenge"
                            }, {
                                svg: `\n                            <svg class="icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g clip-path="url(#clip0_51_36615)">\n                            <path class="background" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n                            <path class="inner" d="M49.9746 72.7784C46.6395 72.7784 43.3045 72.7784 39.9694 72.7784C38.7117 72.7784 38.454 72.5413 38.2942 71.3145C37.7684 67.2939 36.6086 63.5052 34.0519 60.2681C33.2942 59.3093 32.5107 58.3712 31.7014 57.4588C29.088 54.5001 27.9797 51.0104 27.789 47.1135C27.4746 40.732 29.3251 35.1341 33.6395 30.4176C36.7529 27.0104 40.5777 24.7681 45.1086 23.7578C48.8457 22.9227 52.5674 22.9846 56.222 24.0928C62.5777 26.0207 67.2529 29.9949 70.1395 35.9949C72.222 40.3145 72.6241 44.866 71.9797 49.5774C71.5107 53.0104 69.8921 55.83 67.5777 58.2939C64.4746 61.598 62.588 65.4691 61.9024 69.9382C61.8251 70.4485 61.7323 70.9588 61.6756 71.4743C61.5622 72.4537 61.2117 72.7836 60.2323 72.7836C56.8148 72.7836 53.3973 72.7836 49.9797 72.7836L49.9746 72.7784ZM49.9797 70.7526C49.9797 70.7526 49.9797 70.7475 49.9797 70.7423C52.9437 70.7423 55.9024 70.7269 58.8663 70.7526C59.4437 70.7578 59.7117 70.6186 59.8045 70.0052C60.1292 67.83 60.6962 65.7166 61.5313 63.6753C62.588 61.1032 64.2684 58.9588 66.0983 56.9176C68.1653 54.6135 69.588 52.0258 69.99 48.9021C70.5725 44.3867 70.0622 40.0568 67.8715 36.0155C63.1808 27.3557 53.4282 23.3093 44.0777 26.1083C35.8303 28.5774 29.9282 36.5001 29.7736 45.1032C29.6859 49.9434 31.0983 54.1032 34.4694 57.6444C35.6808 58.9176 36.6705 60.4434 37.5725 61.964C38.9643 64.299 39.6602 66.9073 40.0777 69.5825C40.2632 70.7526 40.2529 70.7526 41.4024 70.7526C44.2581 70.7526 47.1189 70.7526 49.9746 70.7526H49.9797Z" fill="#3078F6"/>\n                            <path class="inner" d="M49.9849 77.8867C47.1911 77.8867 44.3973 77.8867 41.5983 77.8867C41.088 77.8867 40.5777 77.8043 40.4385 77.2682C40.3561 76.9383 40.4179 76.4331 40.6293 76.2012C40.8509 75.9589 41.3251 75.8507 41.686 75.8455C44.1705 75.8146 46.655 75.8249 49.1396 75.8197C52.0365 75.8197 54.9385 75.8197 57.8355 75.8197C58.1241 75.8197 58.4179 75.8094 58.7014 75.8455C59.3303 75.9228 59.6757 76.3043 59.6602 76.8558C59.6396 77.4434 59.253 77.8403 58.6138 77.8558C57.4952 77.8816 56.3767 77.8764 55.2581 77.8764C53.5004 77.8764 51.7375 77.8764 49.9798 77.8764L49.9849 77.8867Z" fill="#3078F6"/>\n                            <path class="inner" d="M50.0208 82.2267C47.8456 82.2267 45.6755 82.2215 43.5002 82.2267C42.9435 82.2267 42.5157 82.0617 42.3404 81.505C42.1239 80.8246 42.6136 80.2112 43.4023 80.2009C45.3249 80.1854 47.2528 80.1958 49.1755 80.1958C51.6394 80.1958 54.1033 80.2061 56.5672 80.2009C57.0775 80.2009 57.526 80.3659 57.6239 80.871C57.6858 81.2061 57.5724 81.6597 57.3662 81.9329C57.2115 82.139 56.7837 82.2164 56.4796 82.2215C54.325 82.2473 52.1755 82.2318 50.0208 82.2318V82.2267Z" fill="#3078F6"/>\n                            <path class="inner" d="M49.9641 86.5926C48.3095 86.5926 46.6549 86.5926 44.9951 86.5926C44.4538 86.5926 44.0105 86.4225 43.8456 85.8503C43.6445 85.1648 44.1239 84.5771 44.928 84.5617C46.2734 84.5359 47.6188 84.541 48.9641 84.5462C50.9693 84.5462 52.9796 84.5565 54.9847 84.5617C55.5054 84.5617 55.928 84.7163 56.1188 85.2421C56.3713 85.9276 55.8817 86.5771 55.0466 86.5874C53.3507 86.6132 51.6549 86.5926 49.9538 86.5977L49.9641 86.5926Z" fill="#3078F6"/>\n                            <path class="inner" d="M19.4227 46.7215C18.1598 46.7215 16.9021 46.7215 15.6392 46.7215C14.9588 46.7215 14.5361 46.3452 14.5258 45.7473C14.5103 45.1545 14.9227 44.7112 15.598 44.706C18.1598 44.6854 20.7217 44.6854 23.2835 44.6957C24.0155 44.6957 24.4227 45.1081 24.4176 45.7318C24.4176 46.3607 24.0155 46.7164 23.2629 46.7215C21.9794 46.7318 20.7011 46.7215 19.4176 46.7215H19.4227Z" fill="#3078F6"/>\n                            <path class="inner" d="M80.5618 44.6857C81.8453 44.6857 83.1288 44.6703 84.4123 44.6909C85.2216 44.7064 85.7113 45.4022 85.3556 46.0878C85.2113 46.361 84.8144 46.6754 84.5309 46.6806C81.8814 46.7321 79.2319 46.7321 76.5824 46.7167C75.9226 46.7167 75.5876 46.3095 75.5979 45.6909C75.6082 45.1136 76.0051 44.7167 76.6494 44.7064C77.9536 44.6857 79.2577 44.7012 80.5618 44.7012V44.6909V44.6857Z" fill="#3078F6"/>\n                            <path class="inner" d="M37.8346 22.8248C37.5717 23.1032 37.3398 23.4898 37.0047 23.665C36.5408 23.9021 36.113 23.6392 35.8553 23.2114C35.2934 22.2939 34.7522 21.366 34.2161 20.4382C33.4687 19.1496 32.7058 17.8764 32.0202 16.5568C31.8449 16.2217 31.7986 15.6753 31.9532 15.3506C32.2934 14.6444 33.2264 14.6908 33.6594 15.4073C34.6491 17.0568 35.5975 18.7217 36.5614 20.3867C36.8604 20.9021 37.1697 21.4176 37.4583 21.9434C37.5872 22.1753 37.6697 22.4279 37.8398 22.8248H37.8346Z" fill="#3078F6"/>\n                            <path class="inner" d="M20.0155 64.062C19.7578 63.8249 19.3764 63.6135 19.2217 63.2888C18.9898 62.8145 19.1805 62.3455 19.6496 62.062C20.4125 61.6032 21.1856 61.1651 21.9588 60.7218C23.4125 59.8867 24.8609 59.0413 26.3197 58.2218C27.1289 57.7681 27.9228 58.1393 27.9846 58.9743C28.0259 59.5156 27.6702 59.7991 27.263 60.0362C25.6496 60.964 24.031 61.8867 22.4176 62.8145C21.897 63.1135 21.3815 63.4279 20.8558 63.7166C20.6444 63.8352 20.4021 63.9073 20.0155 64.062Z" fill="#3078F6"/>\n                            <path class="inner" d="M68.3607 15.7318C68.1803 16.1545 68.0926 16.4329 67.9483 16.6751C66.7679 18.737 65.5823 20.7988 64.3865 22.8556C64.2627 23.0669 64.1287 23.2885 63.9535 23.4535C63.5978 23.7885 63.1854 23.8556 62.7679 23.5617C62.3813 23.2885 62.1597 22.9071 62.3401 22.438C62.4947 22.036 62.7215 21.6597 62.938 21.2834C64.0566 19.3298 65.1803 17.3762 66.3091 15.4226C66.572 14.9638 66.9947 14.6751 67.4947 14.9071C67.8401 15.0669 68.0823 15.4483 68.3555 15.7215L68.3607 15.7318Z" fill="#3078F6"/>\n                            <path class="inner" d="M27.9899 32.2061C27.9692 33.2525 27.1703 33.6907 26.4228 33.2732C25.16 32.567 23.9125 31.8299 22.6548 31.1082C21.7579 30.5927 20.861 30.0773 19.9692 29.5515C19.1703 29.0824 18.9589 28.5876 19.2785 28.0103C19.6084 27.4175 20.16 27.3196 20.9435 27.768C23.0826 28.9897 25.2167 30.2216 27.3301 31.4793C27.6496 31.6701 27.8507 32.0464 27.9899 32.201V32.2061Z" fill="#3078F6"/>\n                            <path class="inner" d="M79.7376 27.4796C80.3304 27.4744 80.6602 27.7321 80.8046 28.1909C80.9541 28.6703 80.8355 29.093 80.3716 29.3662C79.3355 29.9693 78.3046 30.5775 77.2685 31.1754C76.0365 31.8868 74.8046 32.6136 73.552 33.294C72.8097 33.6961 71.985 33.2115 72.0572 32.4022C72.0829 32.1033 72.3046 31.7064 72.552 31.5569C74.784 30.2218 77.0468 28.928 79.2994 27.6342C79.4541 27.5466 79.6448 27.5156 79.7376 27.4847V27.4796Z" fill="#3078F6"/>\n                            <path class="inner" d="M80.8607 62.7322C80.8504 63.7477 80.0978 64.2065 79.3556 63.8302C78.6185 63.4539 77.9123 63.0209 77.1958 62.6034C75.6906 61.7322 74.1906 60.8611 72.6855 59.99C72.2886 59.758 71.9844 59.4693 72.036 58.959C72.1236 58.1188 72.8453 57.7632 73.6442 58.2065C74.9793 58.9539 76.2989 59.7322 77.6236 60.5003C78.4999 61.0054 79.3968 61.49 80.2473 62.0363C80.5463 62.2271 80.7319 62.5827 80.8556 62.7322H80.8607Z" fill="#3078F6"/>\n                            <path class="inner" d="M51.0099 15.2836C51.0099 16.5258 51.015 17.7629 51.0099 19.0052C51.0047 19.732 50.6233 20.165 50.0099 20.165C49.4222 20.165 48.9893 19.7062 48.9893 19.0052C48.9789 16.4846 48.9738 13.9588 48.9893 11.4382C48.9944 10.531 49.5923 10.0619 50.3398 10.3145C50.8398 10.4846 51.0253 10.8609 51.0202 11.3712C51.0099 12.6753 51.0202 13.9743 51.0202 15.2784C51.0202 15.2784 51.0202 15.2784 51.015 15.2784L51.0099 15.2836Z" fill="#3078F6"/>\n                            <path class="inner" d="M42.3714 33.4384C43.8559 33.4538 45.624 34.191 47.3456 35.0724C48.0466 35.4281 48.7271 35.8301 49.3765 36.2631C49.8198 36.5569 50.1549 36.5569 50.6085 36.2631C52.3972 35.0879 54.2786 34.0776 56.3972 33.6343C57.1343 33.4796 57.691 33.1858 58.2374 32.6549C59.5724 31.3559 61.8765 31.5569 63.1343 32.9899C64.3405 34.3662 64.1652 36.5569 62.7992 37.8147C62.5106 38.0776 62.2889 38.5054 62.2116 38.8971C61.7631 41.1755 60.6961 43.1755 59.4642 45.1033C59.1704 45.5621 59.1549 45.8817 59.4539 46.325C60.6188 48.0466 61.6188 49.8817 62.0415 51.9281C62.258 52.9796 62.2889 54.1188 62.1394 55.1807C61.9023 56.9023 60.3456 58.0157 58.3765 58.0569C56.3662 58.0982 54.5673 57.3611 52.8301 56.4642C52.0209 56.0466 51.2425 55.5724 50.4745 55.0827C50.124 54.8559 49.8765 54.8559 49.526 55.0827C47.7734 56.2374 45.9487 57.2528 43.8765 57.7219C43.1343 57.8868 42.3611 58.0157 41.6033 58.0002C38.5673 57.9487 37.3765 55.6961 37.6755 53.2064C37.959 50.8714 38.9126 48.7837 40.2013 46.8662C40.7683 46.0209 40.8147 45.4229 40.2116 44.5724C39.1704 43.0982 38.4075 41.4538 37.9539 39.6961C37.7838 39.0363 37.6549 38.3559 37.6394 37.6755C37.5673 34.9899 39.1188 33.4538 42.3611 33.4384H42.3714ZM56.4642 45.727C56.3662 45.5672 56.2992 45.4178 56.1961 45.2941C54.4899 43.1446 52.5466 41.2322 50.4178 39.5054C50.1291 39.2683 49.8817 39.2631 49.593 39.5054C47.4487 41.2477 45.4848 43.1652 43.7734 45.3456C43.526 45.66 43.5621 45.8714 43.7889 46.1549C45.4899 48.2528 47.3714 50.1652 49.4745 51.8662C49.8456 52.1652 50.1188 52.1858 50.5054 51.8765C52.6085 50.1755 54.5106 48.2786 56.191 46.1652C56.2889 46.0363 56.3662 45.892 56.4642 45.7374V45.727ZM51.8869 53.5776C53.8765 54.7631 55.8456 55.9538 58.2271 56.0415C59.6033 56.093 60.3456 55.227 60.2734 53.8198C60.1755 51.8095 59.2734 50.0827 58.3147 48.3868C58.1652 48.1239 57.9848 47.8817 57.825 47.6394C55.8456 49.6239 53.9075 51.5569 51.8869 53.5827V53.5776ZM42.1188 47.593C41.6291 48.5054 41.1085 49.3868 40.6755 50.3095C40.1394 51.4538 39.691 52.6394 39.6858 53.9281C39.6858 55.2219 40.3044 55.8868 41.5827 55.9745C41.9281 56.0002 42.2838 55.9745 42.6291 55.9178C44.5724 55.6188 46.2683 54.7322 47.8972 53.691C47.9745 53.6394 48.0209 53.5363 48.0466 53.5002C46.0827 51.5415 44.1497 49.6136 42.1137 47.5827L42.1188 47.593ZM42.191 43.8198C42.3456 43.7064 42.4745 43.6446 42.5673 43.5466C44.3095 41.8147 46.0363 40.0672 47.7889 38.3456C48.1497 37.9951 48.0621 37.7889 47.6858 37.6033C46.4436 36.9951 45.2271 36.3198 43.9435 35.825C43.1961 35.5363 42.3301 35.4693 41.5157 35.4538C40.4796 35.4384 39.8198 36.0621 39.7889 37.093C39.7683 37.8868 39.8508 38.7116 40.0673 39.4693C40.5106 41.0209 41.2322 42.459 42.1961 43.8147L42.191 43.8198ZM57.5724 43.9745C58.7838 42.4229 59.5054 41.0002 59.9899 39.4435C60.16 38.8971 60.0724 38.6652 59.5209 38.5105C58.3301 38.1806 57.5673 37.3611 57.2167 36.1961C57.0518 35.6446 56.7683 35.5312 56.3147 35.7374C54.9796 36.3404 53.66 36.9693 52.3301 37.593C51.7992 37.8404 51.9487 38.0724 52.2941 38.4075C53.9642 40.0415 55.6137 41.6961 57.2528 43.3559C57.4075 43.5105 57.4642 43.7631 57.5724 43.9693V43.9745ZM61.8972 35.2116C61.9229 34.4538 61.3714 33.8714 60.5982 33.8559C59.7734 33.8353 59.1188 34.4435 59.093 35.258C59.0673 36.0209 59.7477 36.6394 60.6085 36.6497C61.2374 36.6549 61.8662 35.9538 61.8972 35.2167V35.2116Z" fill="#3078F6"/>\n                            <path class="inner" d="M49.9745 49.1496C48.0672 49.1289 46.5105 47.5722 46.5415 45.7114C46.5724 43.8094 48.1291 42.2578 49.9951 42.2681C51.9229 42.2784 53.4848 43.8557 53.4538 45.7578C53.4229 47.6547 51.8662 49.1702 49.9745 49.1496ZM51.3714 45.6805C51.3559 44.8867 50.7837 44.3197 49.9951 44.3197C49.2064 44.3197 48.6136 44.9434 48.6239 45.763C48.6343 46.5413 49.2322 47.1289 50.0054 47.1238C50.8044 47.1238 51.3868 46.5001 51.3714 45.6805Z" fill="#3078F6"/>\n                            </g>\n                            <defs>\n                            <clipPath id="clip0_51_36615">\n                            <rect width="100" height="100" fill="white"/>\n                            </clipPath>\n                            </defs>\n                            </svg>\n                            \n                            `,
                                text: "Solution"
                            }, {
                                svg: `\n                        <svg class="icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <g clip-path="url(#clip0_51_36635)">\n                        <path class="background" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n                        <path class="inner" d="M34.0048 34.995C35.5615 35.1754 37.0305 34.8558 38.4996 34.562C40.814 34.0929 43.1336 33.7785 45.4378 34.5156C46.4171 34.83 47.3501 35.2991 48.2883 35.7372C48.5872 35.8764 48.7934 35.9589 49.1182 35.763C52.3089 33.8403 55.6491 33.6599 59.0976 34.964C60.3553 35.4383 61.5924 35.9692 62.8604 36.4228C63.6646 36.7115 64.5048 36.928 65.4017 36.5774C65.3553 36.3764 65.314 36.2115 65.2728 36.0465C64.9068 34.4537 65.6646 32.9228 67.1852 32.3249C68.8656 31.6599 70.5615 31.0259 72.2677 30.4331C74.0254 29.8197 75.6955 30.696 76.3811 32.531C78.5512 38.3609 80.711 44.1908 82.8759 50.0156C83.1594 50.7785 83.4584 51.5414 83.7213 52.3146C84.3192 54.0671 83.5563 55.7372 81.8295 56.4125C80.247 57.0311 78.6543 57.6135 77.0615 58.196C75.2573 58.8558 73.6646 58.1857 72.8244 56.4434C72.7728 56.3403 72.7006 56.2424 72.5563 56.1445C72.6852 57.7269 72.6182 59.2475 71.5563 60.5207C70.4378 61.8609 69.0099 62.0671 67.412 61.5362C67.6491 65.263 64.3708 67.3609 61.2677 66.3403C61.3398 67.6754 61.0254 68.8764 60.1233 69.8713C59.211 70.8816 58.0357 71.3094 56.6336 71.361C56.8295 73.0517 56.3501 74.4847 54.9017 75.4434C53.4275 76.4228 51.9635 76.0568 50.5151 75.2063C49.5872 76.9486 48.3553 78.2527 46.2367 77.9486C44.2213 77.6599 43.0357 76.3197 42.3553 74.428C39.6285 75.3506 37.5718 74.5929 36.2831 71.9383C34.5769 72.928 32.8656 72.9692 31.2625 71.7785C29.7161 70.629 29.3347 69.0104 29.6852 67.1496C29.2419 67.1187 28.7986 67.129 28.3707 67.0465C25.4635 66.4898 23.979 63.4898 25.2883 60.83C25.6182 60.1599 25.9996 59.5104 26.3347 58.8403C26.4481 58.6187 26.4996 58.3713 26.6285 57.9743C26.3501 58.1187 26.2367 58.1599 26.1388 58.2269C25.247 58.8609 24.2831 59.0053 23.247 58.6754C21.6491 58.1651 20.0512 57.6651 18.4584 57.1393C16.4842 56.4898 15.6388 54.8455 16.2728 52.8661C18.0254 47.4073 19.7883 41.9537 21.546 36.495C21.9326 35.2991 22.3037 34.0981 22.7006 32.9073C23.3295 31.0104 24.979 30.1651 26.8862 30.7579C28.2986 31.196 29.6852 31.7012 31.1079 32.0981C32.6388 32.5259 33.7161 33.3455 33.9893 34.995H34.0048ZM48.2728 67.5259C48.278 67.4847 48.2883 67.4434 48.2934 67.4022C48.1439 67.3146 47.9945 67.2269 47.8501 67.129C47.3811 66.8094 47.2161 66.3764 47.5151 65.8764C47.7883 65.4125 48.2213 65.2991 48.7161 65.5259C48.9171 65.6187 49.1079 65.7269 49.3037 65.83C51.3862 66.9383 53.4635 68.0568 55.5615 69.1445C57.1182 69.9537 58.8708 69.2166 59.3347 67.5981C59.6749 66.4228 59.1903 65.2579 57.9996 64.5774C56.6388 63.8042 55.247 63.0826 53.8656 62.3403C53.1852 61.9743 52.4945 61.629 51.8244 61.2424C51.3398 60.964 51.1594 60.5259 51.4378 60.0053C51.7161 59.4847 52.1697 59.4125 52.6852 59.6341C52.845 59.7012 52.9996 59.7939 53.1543 59.8764C55.9326 61.3661 58.7161 62.8558 61.4893 64.3558C62.2058 64.7424 62.9481 64.8867 63.7213 64.6341C64.7573 64.2939 65.3914 63.5723 65.5202 62.4795C65.6594 61.3042 65.1903 60.397 64.1594 59.83C61.4738 58.3558 58.7728 56.9022 56.0769 55.4383C55.8656 55.3249 55.6388 55.2115 55.4635 55.0517C54.9532 54.5774 55.113 53.7475 55.7831 53.5723C56.0821 53.495 56.4841 53.5929 56.7677 53.7424C58.8553 54.8455 60.9223 55.9898 62.9996 57.1084C64.613 57.9795 66.2161 58.8609 67.8501 59.6857C69.1491 60.3352 70.1336 59.8713 70.5821 58.495C71.046 57.0671 70.68 55.7424 69.2677 54.7166C67.7728 53.6341 66.1903 52.6548 64.5718 51.763C62.3295 50.531 59.9481 49.5414 57.7677 48.2218C56.211 47.2785 54.7213 47.1702 53.0976 47.7012C51.4223 48.2475 49.778 48.9022 48.0924 49.4125C44.278 50.5671 41.4223 49.7063 39.2264 46.8455C38.8553 46.3609 38.7625 45.8867 39.1233 45.397C39.6285 44.7012 40.1079 43.9743 40.711 43.3661C42.7006 41.3609 44.7419 39.4022 46.7573 37.4228C46.845 37.3403 46.9068 37.2321 46.9893 37.1238C45.0409 36.0259 42.9996 35.7579 40.8656 36.0414C38.5769 36.3455 36.3398 37.0723 33.9842 36.9073C33.8553 36.897 33.6285 37.1341 33.5769 37.2939C31.8604 42.5774 30.1388 47.8609 28.4635 53.1599C28.2058 53.9692 28.1749 54.8506 28.0357 55.7012C29.5924 54.6032 31.1388 54.1548 32.8244 54.8764C34.4893 55.5929 35.3862 56.9692 35.6336 58.7475C39.0718 58.6238 40.0408 59.3506 41.1543 62.8764C42.613 62.5362 43.9532 62.8042 45.1079 63.7939C46.2625 64.7836 46.6749 66.0981 46.5924 67.5414H48.2883L48.2728 67.5259ZM40.9017 45.9228C41.0099 46.0671 41.0718 46.1599 41.1439 46.2424C42.747 48.0517 44.7573 48.4537 46.9893 47.8042C48.7213 47.2991 50.4068 46.6341 52.1233 46.0671C53.5615 45.5929 55.046 45.2166 56.5357 45.6702C57.4481 45.9434 58.278 46.495 59.1336 46.928C61.4945 48.1238 63.8656 49.2991 66.2006 50.5414C68.0151 51.5053 69.7831 52.5465 71.2419 54.031C71.4171 54.2063 71.6697 54.2991 71.8914 54.4331C71.8604 54.1754 71.8759 53.897 71.7883 53.6599C70.5872 50.3919 69.3707 47.129 68.1594 43.8661C67.479 42.031 66.7934 40.196 66.1182 38.3764C64.046 38.7063 63.2213 38.6084 61.2419 37.8094C60.3862 37.464 59.5254 37.1187 58.6697 36.7682C55.1491 35.3403 51.8037 35.7527 48.9017 38.1496C46.5099 40.1238 44.3604 42.3919 42.1182 44.5465C41.68 44.9692 41.3089 45.4692 40.9068 45.9331L40.9017 45.9228ZM73.2006 32.0929C73.0666 32.129 72.8295 32.1754 72.6079 32.2579C71.1182 32.8042 69.6285 33.3558 68.1439 33.9176C67.0976 34.3146 66.814 34.9331 67.2058 36.0001C69.6079 42.4898 72.0151 48.9847 74.4274 55.4743C74.8295 56.562 75.4429 56.8249 76.5563 56.4125C77.9842 55.8867 79.4068 55.3558 80.8347 54.8249C82.0615 54.3661 82.314 53.8146 81.8553 52.5774C80.4429 48.7733 79.0305 44.9692 77.6182 41.1702C76.6285 38.5053 75.6336 35.8403 74.6491 33.1702C74.412 32.531 74.0254 32.1135 73.1955 32.0981L73.2006 32.0929ZM17.912 53.8816C17.9017 54.6702 18.2367 55.1084 18.9738 55.3558C20.5409 55.8764 22.113 56.3919 23.6903 56.8867C24.6697 57.196 25.2883 56.8558 25.6182 55.8506C27.7573 49.2424 29.8862 42.6341 32.0151 36.0207C32.3604 34.9537 32.0305 34.3352 30.9635 33.9898C29.5151 33.5207 28.0666 33.0568 26.6182 32.5929C25.3295 32.1805 24.7986 32.4486 24.3811 33.7372C22.2883 40.2218 20.1903 46.7012 18.0976 53.1857C18.0099 53.4589 17.9481 53.7372 17.9068 53.8816H17.912ZM31.3244 68.3042C31.412 69.5207 32.0821 70.4073 33.2213 70.7218C34.3244 71.031 35.4532 70.5774 36.0357 69.5207C36.9945 67.7836 37.9223 66.0311 38.845 64.2733C39.5512 62.9228 39.1439 61.4486 37.9068 60.7888C36.6543 60.1238 35.2161 60.5981 34.4893 61.9383C33.5769 63.6238 32.6646 65.3146 31.7831 67.0156C31.5769 67.4176 31.479 67.8713 31.3295 68.3042H31.3244ZM29.0872 65.2682C30.0151 65.2785 30.8089 64.8558 31.2728 64.0207C32.0202 62.6702 32.7573 61.3146 33.4481 59.9331C34.0666 58.7063 33.5821 57.3609 32.345 56.6496C31.2934 56.0517 29.8089 56.4228 29.1594 57.5362C28.3501 58.928 27.5769 60.3403 26.8862 61.7939C26.1079 63.428 27.3037 65.2475 29.0872 65.263V65.2682ZM40.3811 72.964C41.2625 72.964 42.0099 72.6341 42.4481 71.8816C43.1903 70.6084 43.9017 69.3094 44.5357 67.9795C45.0872 66.83 44.5563 65.4537 43.4429 64.8558C42.3037 64.2424 40.8553 64.5878 40.1955 65.7115C39.4738 66.9434 38.778 68.2063 38.1749 69.5001C37.4068 71.1445 38.5872 72.9434 40.3811 72.964ZM46.6955 76.1445C47.4326 76.1702 47.9945 75.7991 48.3347 75.2063C48.912 74.2011 49.4378 73.1548 49.912 72.0929C50.1697 71.5104 50.1439 70.8919 49.68 70.3558C48.3914 68.8661 46.2213 69.0362 45.2006 70.7218C44.8811 71.2475 44.5924 71.7939 44.3244 72.3455C43.5615 73.928 44.9326 76.1084 46.6955 76.1393V76.1445ZM50.8347 68.7424C52.2625 70.2012 52.0821 71.8403 51.3811 73.5156C52.8501 74.5259 54.0924 74.3146 54.6646 72.9847C55.1079 71.9589 54.7316 70.8764 53.68 70.2785C52.7419 69.7424 51.7831 69.2527 50.8347 68.7424Z" fill="#3078F6"/>\n                        </g>\n                        <defs>\n                        <clipPath id="clip0_51_36635">\n                        <rect width="100" height="100" fill="white"/>\n                        </clipPath>\n                        </defs>\n                        </svg>\n                        \n                        `,
                                text: "Outcome"
                            } ];
                            return '<button class="' + className + ' case-2-pagination">' + data[index].svg + "<span>" + data[index].text + "</span>" + "</button>";
                        }
                    },
                    navigation: {
                        prevEl: ".case-2-swiper-button-prev",
                        nextEl: ".case-2-swiper-button-next"
                    },
                    breakpoints: {
                        320: {
                            pagination: {
                                el: ".case-2-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 1
                            }
                        },
                        992: {
                            pagination: {
                                el: ".case-2-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 3
                            }
                        }
                    },
                    on: {}
                });
                new swiper_core_Swiper(".case-3__slider", {
                    modules: [ Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".case-3-pagination",
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                        renderBullet: function(index, className) {
                            var data = [ {
                                svg: `<svg class="icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g clip-path="url(#clip0_51_36412)">\n                              <path class="background" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"/>\n                              <path class="inner" d="M54.3603 80.9333C49.3912 81.6446 44.4582 81.0312 39.8036 79.1961C38.8809 78.8302 37.8551 78.3508 36.886 77.8302C35.917 77.3096 34.9427 76.7116 34.0201 76.0673C33.0974 75.423 32.3757 74.8559 31.5149 74.0931C30.6541 73.3302 29.886 72.5673 29.1386 71.7374C26.2262 68.5054 24.0561 64.5415 22.8912 60.3147C21.7263 56.0879 21.5355 51.1394 22.5046 46.691C22.984 44.4797 23.7262 42.325 24.6644 40.3869C25.6025 38.4487 26.8654 36.4436 28.1644 34.8456C30.9943 31.3662 34.4324 28.691 38.4994 26.8095C42.5768 24.9229 47.1953 24.0621 51.7572 24.2735C56.319 24.4848 60.6644 25.7889 64.551 28.026C68.4376 30.2632 71.6283 33.2889 74.0304 36.8869C74.6541 37.8199 75.2211 38.7889 75.7366 39.7889C76.252 40.7889 76.6541 41.7013 77.0407 42.7425C77.4273 43.7838 77.7623 44.8714 78.0252 45.9642C78.1644 46.526 78.283 47.0931 78.386 47.6601C78.4891 48.2271 78.5716 48.7683 78.6232 49.2271C78.7572 50.3869 78.8242 51.5518 78.8293 52.7219C78.8293 54.1291 81.0252 54.1343 81.0201 52.7219C81.0098 47.825 79.8396 42.9797 77.5974 38.6291C75.3551 34.2786 72.2623 30.7838 68.4634 27.9745C64.6438 25.1498 60.1232 23.2374 55.4324 22.4745C50.7417 21.7116 45.4737 22.0157 40.7623 23.5776C36.051 25.1394 32.1128 27.6034 28.7417 30.9487C25.3706 34.2941 22.8036 38.4126 21.2778 42.9075C19.752 47.4023 19.3036 52.6652 20.0613 57.5621C20.819 62.459 22.6489 66.7632 25.4273 70.5982C28.1953 74.423 31.8087 77.624 35.9891 79.8353C40.3242 82.1291 45.185 83.3559 50.0922 83.3972C51.7159 83.4126 53.3345 83.2786 54.9427 83.0467C55.5304 82.9642 55.85 82.2168 55.7056 81.7013C55.5304 81.0724 54.9479 80.8508 54.3603 80.9384V80.9333Z" fill="currentColor"/>\n                              <path class="inner" d="M85.86 40.0568C88.2672 47.6702 88.1641 55.8506 85.5662 63.3455C83.3497 69.7475 79.293 75.4692 74.0043 79.7836C71.1538 82.1084 67.6847 84.1238 64.2569 85.4589C63.7053 85.6754 63.3239 86.196 63.494 86.8042C63.6383 87.33 64.2878 87.7836 64.8394 87.5671C71.6383 84.9176 77.5559 80.4537 81.9682 74.6393C86.3857 68.8197 89.0352 61.7733 89.6538 54.5053C90.0868 49.4486 89.5043 44.3042 87.9734 39.4692C87.793 38.9073 87.2105 38.5413 86.628 38.7063C86.0713 38.8609 85.6847 39.4898 85.8651 40.0517L85.86 40.0568Z" fill="currentColor"/>\n                              <path class="inner" d="M14.1692 62.1755C13.3961 59.4796 12.7775 56.7116 12.5095 53.9178C12.2775 51.4951 12.36 49.0466 12.6538 46.6291C13.1589 42.4951 14.5146 38.1497 16.4528 34.4229C18.4424 30.5879 20.9528 27.2941 24.1125 24.3559C27.2002 21.4848 30.7878 19.1446 34.7466 17.4538C34.8806 17.3971 35.0919 17.3095 35.3239 17.2167C35.5868 17.1136 35.8497 17.0105 36.1177 16.9075C36.6332 16.7167 37.1486 16.5363 37.6692 16.3662C38.7208 16.026 39.7878 15.727 40.8651 15.4796C43.0765 14.9693 45.0765 14.7013 47.3394 14.5982C47.9167 14.5724 48.494 14.5621 49.0713 14.5569C50.4785 14.5569 50.4837 12.3611 49.0713 12.3662C44.427 12.3765 39.7723 13.191 35.4218 14.8353C31.0713 16.4796 27.262 18.7528 23.8084 21.691C20.3548 24.6291 17.5249 28.0776 15.3084 31.9384C13.0919 35.7992 11.4888 40.1961 10.7414 44.66C10.3445 47.0363 10.128 49.459 10.1847 51.8662C10.262 54.8456 10.793 57.8301 11.5095 60.7167C11.6796 61.3972 11.86 62.0776 12.0507 62.7477C12.4373 64.1033 14.5507 63.526 14.1641 62.1652L14.1692 62.1755Z" fill="currentColor"/>\n                              <path class="inner" d="M16.6439 67.9025L18.1748 61.6809C18.3965 60.784 17.4635 60.0469 16.6439 60.4592L9.08206 64.2634C8.25216 64.6809 8.30371 65.8819 9.16453 66.2273L15.1955 68.6397C15.8037 68.8819 16.4893 68.5314 16.6439 67.8974V67.9025Z" fill="currentColor"/>\n                              <path class="inner" d="M83.2987 34.0001L81.7317 40.3764C81.5204 41.2321 82.4121 41.9382 83.1956 41.5413L90.9431 37.6393C91.7369 37.2372 91.6853 36.0929 90.8606 35.763L84.6802 33.2888C84.0977 33.0568 83.4431 33.3918 83.2936 34.0001H83.2987Z" fill="currentColor"/>\n                              <path class="inner" d="M37.5722 46.6961C34.5515 46.6961 32.0928 44.2373 32.0928 41.2167C32.0928 38.1961 34.5515 35.7373 37.5722 35.7373C40.5928 35.7373 43.0515 38.1961 43.0515 41.2167C43.0515 44.2373 40.5928 46.6961 37.5722 46.6961ZM37.5722 37.9332C35.7577 37.9332 34.2835 39.4074 34.2835 41.2218C34.2835 43.0363 35.7577 44.5105 37.5722 44.5105C39.3866 44.5105 40.8608 43.0363 40.8608 41.2218C40.8608 39.4074 39.3866 37.9332 37.5722 37.9332Z" fill="currentColor"/>\n                              <path class="inner" d="M67.1493 45.9695C64.1287 45.9695 61.6699 43.5107 61.6699 40.4901C61.6699 37.4695 64.1287 35.0107 67.1493 35.0107C70.1699 35.0107 72.6287 37.4695 72.6287 40.4901C72.6287 43.5107 70.1699 45.9695 67.1493 45.9695ZM67.1493 37.2015C65.3349 37.2015 63.8606 38.6757 63.8606 40.4901C63.8606 42.3046 65.3349 43.7788 67.1493 43.7788C68.9637 43.7788 70.438 42.3046 70.438 40.4901C70.438 38.6757 68.9637 37.2015 67.1493 37.2015Z" fill="currentColor"/>\n                              <path class="inner" d="M52.0868 50.3509C48.4116 50.3509 45.4219 47.3612 45.4219 43.6859C45.4219 40.0107 48.4116 37.021 52.0868 37.021C55.7621 37.021 58.7518 40.0107 58.7518 43.6859C58.7518 47.3612 55.7621 50.3509 52.0868 50.3509ZM52.0868 39.2117C49.6178 39.2117 47.6126 41.2169 47.6126 43.6859C47.6126 46.155 49.6178 48.1602 52.0868 48.1602C54.5559 48.1602 56.5611 46.155 56.5611 43.6859C56.5611 41.2169 54.5559 39.2117 52.0868 39.2117Z" fill="currentColor"/>\n                              <path class="inner" d="M76.6544 56.5569H61.5874V54.3661H74.3657C73.7987 51.16 70.7781 48.7063 67.1544 48.7063C63.7369 48.7063 60.809 50.8558 60.0358 53.928L57.9121 53.3919C58.9327 49.3404 62.7317 46.5156 67.1544 46.5156C72.3915 46.5156 76.6544 50.5311 76.6544 55.4641V56.562V56.5569Z" fill="currentColor"/>\n                              <path class="inner" d="M40.4635 56.5571H27.7109V55.4592C27.7109 50.5262 31.9738 46.5107 37.2109 46.5107C40.5048 46.5107 44.0305 48.4901 45.7883 51.32L43.9274 52.4747C42.7676 50.5984 40.0872 48.7015 37.2161 48.7015C33.5872 48.7015 30.5718 51.1551 30.0048 54.3613H40.4687V56.552L40.4635 56.5571Z" fill="currentColor"/>\n                              <path class="inner" d="M66.0566 65.5052H36.1133V64.4073C36.1133 56.6547 42.8298 50.3506 51.0875 50.3506C59.3452 50.3506 66.0617 56.6599 66.0617 64.4073V65.5052H66.0566ZM38.3556 63.3145H63.8092C63.2112 57.2836 57.7318 52.5413 51.0824 52.5413C44.4329 52.5413 38.9535 57.2836 38.3556 63.3145Z" fill="currentColor"/>\n                            </g>\n                            <defs>\n                              <clipPath id="clip0_51_36412">\n                                <rect width="100" height="100" fill="white"/>\n                              </clipPath>\n                            </defs>\n                          </svg>\n                          \n                        \n                        `,
                                text: "Challenge"
                            }, {
                                svg: `\n                            <svg class="icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g clip-path="url(#clip0_51_36615)">\n                            <path class="background" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n                            <path class="inner" d="M49.9746 72.7784C46.6395 72.7784 43.3045 72.7784 39.9694 72.7784C38.7117 72.7784 38.454 72.5413 38.2942 71.3145C37.7684 67.2939 36.6086 63.5052 34.0519 60.2681C33.2942 59.3093 32.5107 58.3712 31.7014 57.4588C29.088 54.5001 27.9797 51.0104 27.789 47.1135C27.4746 40.732 29.3251 35.1341 33.6395 30.4176C36.7529 27.0104 40.5777 24.7681 45.1086 23.7578C48.8457 22.9227 52.5674 22.9846 56.222 24.0928C62.5777 26.0207 67.2529 29.9949 70.1395 35.9949C72.222 40.3145 72.6241 44.866 71.9797 49.5774C71.5107 53.0104 69.8921 55.83 67.5777 58.2939C64.4746 61.598 62.588 65.4691 61.9024 69.9382C61.8251 70.4485 61.7323 70.9588 61.6756 71.4743C61.5622 72.4537 61.2117 72.7836 60.2323 72.7836C56.8148 72.7836 53.3973 72.7836 49.9797 72.7836L49.9746 72.7784ZM49.9797 70.7526C49.9797 70.7526 49.9797 70.7475 49.9797 70.7423C52.9437 70.7423 55.9024 70.7269 58.8663 70.7526C59.4437 70.7578 59.7117 70.6186 59.8045 70.0052C60.1292 67.83 60.6962 65.7166 61.5313 63.6753C62.588 61.1032 64.2684 58.9588 66.0983 56.9176C68.1653 54.6135 69.588 52.0258 69.99 48.9021C70.5725 44.3867 70.0622 40.0568 67.8715 36.0155C63.1808 27.3557 53.4282 23.3093 44.0777 26.1083C35.8303 28.5774 29.9282 36.5001 29.7736 45.1032C29.6859 49.9434 31.0983 54.1032 34.4694 57.6444C35.6808 58.9176 36.6705 60.4434 37.5725 61.964C38.9643 64.299 39.6602 66.9073 40.0777 69.5825C40.2632 70.7526 40.2529 70.7526 41.4024 70.7526C44.2581 70.7526 47.1189 70.7526 49.9746 70.7526H49.9797Z" fill="#3078F6"/>\n                            <path class="inner" d="M49.9849 77.8867C47.1911 77.8867 44.3973 77.8867 41.5983 77.8867C41.088 77.8867 40.5777 77.8043 40.4385 77.2682C40.3561 76.9383 40.4179 76.4331 40.6293 76.2012C40.8509 75.9589 41.3251 75.8507 41.686 75.8455C44.1705 75.8146 46.655 75.8249 49.1396 75.8197C52.0365 75.8197 54.9385 75.8197 57.8355 75.8197C58.1241 75.8197 58.4179 75.8094 58.7014 75.8455C59.3303 75.9228 59.6757 76.3043 59.6602 76.8558C59.6396 77.4434 59.253 77.8403 58.6138 77.8558C57.4952 77.8816 56.3767 77.8764 55.2581 77.8764C53.5004 77.8764 51.7375 77.8764 49.9798 77.8764L49.9849 77.8867Z" fill="#3078F6"/>\n                            <path class="inner" d="M50.0208 82.2267C47.8456 82.2267 45.6755 82.2215 43.5002 82.2267C42.9435 82.2267 42.5157 82.0617 42.3404 81.505C42.1239 80.8246 42.6136 80.2112 43.4023 80.2009C45.3249 80.1854 47.2528 80.1958 49.1755 80.1958C51.6394 80.1958 54.1033 80.2061 56.5672 80.2009C57.0775 80.2009 57.526 80.3659 57.6239 80.871C57.6858 81.2061 57.5724 81.6597 57.3662 81.9329C57.2115 82.139 56.7837 82.2164 56.4796 82.2215C54.325 82.2473 52.1755 82.2318 50.0208 82.2318V82.2267Z" fill="#3078F6"/>\n                            <path class="inner" d="M49.9641 86.5926C48.3095 86.5926 46.6549 86.5926 44.9951 86.5926C44.4538 86.5926 44.0105 86.4225 43.8456 85.8503C43.6445 85.1648 44.1239 84.5771 44.928 84.5617C46.2734 84.5359 47.6188 84.541 48.9641 84.5462C50.9693 84.5462 52.9796 84.5565 54.9847 84.5617C55.5054 84.5617 55.928 84.7163 56.1188 85.2421C56.3713 85.9276 55.8817 86.5771 55.0466 86.5874C53.3507 86.6132 51.6549 86.5926 49.9538 86.5977L49.9641 86.5926Z" fill="#3078F6"/>\n                            <path class="inner" d="M19.4227 46.7215C18.1598 46.7215 16.9021 46.7215 15.6392 46.7215C14.9588 46.7215 14.5361 46.3452 14.5258 45.7473C14.5103 45.1545 14.9227 44.7112 15.598 44.706C18.1598 44.6854 20.7217 44.6854 23.2835 44.6957C24.0155 44.6957 24.4227 45.1081 24.4176 45.7318C24.4176 46.3607 24.0155 46.7164 23.2629 46.7215C21.9794 46.7318 20.7011 46.7215 19.4176 46.7215H19.4227Z" fill="#3078F6"/>\n                            <path class="inner" d="M80.5618 44.6857C81.8453 44.6857 83.1288 44.6703 84.4123 44.6909C85.2216 44.7064 85.7113 45.4022 85.3556 46.0878C85.2113 46.361 84.8144 46.6754 84.5309 46.6806C81.8814 46.7321 79.2319 46.7321 76.5824 46.7167C75.9226 46.7167 75.5876 46.3095 75.5979 45.6909C75.6082 45.1136 76.0051 44.7167 76.6494 44.7064C77.9536 44.6857 79.2577 44.7012 80.5618 44.7012V44.6909V44.6857Z" fill="#3078F6"/>\n                            <path class="inner" d="M37.8346 22.8248C37.5717 23.1032 37.3398 23.4898 37.0047 23.665C36.5408 23.9021 36.113 23.6392 35.8553 23.2114C35.2934 22.2939 34.7522 21.366 34.2161 20.4382C33.4687 19.1496 32.7058 17.8764 32.0202 16.5568C31.8449 16.2217 31.7986 15.6753 31.9532 15.3506C32.2934 14.6444 33.2264 14.6908 33.6594 15.4073C34.6491 17.0568 35.5975 18.7217 36.5614 20.3867C36.8604 20.9021 37.1697 21.4176 37.4583 21.9434C37.5872 22.1753 37.6697 22.4279 37.8398 22.8248H37.8346Z" fill="#3078F6"/>\n                            <path class="inner" d="M20.0155 64.062C19.7578 63.8249 19.3764 63.6135 19.2217 63.2888C18.9898 62.8145 19.1805 62.3455 19.6496 62.062C20.4125 61.6032 21.1856 61.1651 21.9588 60.7218C23.4125 59.8867 24.8609 59.0413 26.3197 58.2218C27.1289 57.7681 27.9228 58.1393 27.9846 58.9743C28.0259 59.5156 27.6702 59.7991 27.263 60.0362C25.6496 60.964 24.031 61.8867 22.4176 62.8145C21.897 63.1135 21.3815 63.4279 20.8558 63.7166C20.6444 63.8352 20.4021 63.9073 20.0155 64.062Z" fill="#3078F6"/>\n                            <path class="inner" d="M68.3607 15.7318C68.1803 16.1545 68.0926 16.4329 67.9483 16.6751C66.7679 18.737 65.5823 20.7988 64.3865 22.8556C64.2627 23.0669 64.1287 23.2885 63.9535 23.4535C63.5978 23.7885 63.1854 23.8556 62.7679 23.5617C62.3813 23.2885 62.1597 22.9071 62.3401 22.438C62.4947 22.036 62.7215 21.6597 62.938 21.2834C64.0566 19.3298 65.1803 17.3762 66.3091 15.4226C66.572 14.9638 66.9947 14.6751 67.4947 14.9071C67.8401 15.0669 68.0823 15.4483 68.3555 15.7215L68.3607 15.7318Z" fill="#3078F6"/>\n                            <path class="inner" d="M27.9899 32.2061C27.9692 33.2525 27.1703 33.6907 26.4228 33.2732C25.16 32.567 23.9125 31.8299 22.6548 31.1082C21.7579 30.5927 20.861 30.0773 19.9692 29.5515C19.1703 29.0824 18.9589 28.5876 19.2785 28.0103C19.6084 27.4175 20.16 27.3196 20.9435 27.768C23.0826 28.9897 25.2167 30.2216 27.3301 31.4793C27.6496 31.6701 27.8507 32.0464 27.9899 32.201V32.2061Z" fill="#3078F6"/>\n                            <path class="inner" d="M79.7376 27.4796C80.3304 27.4744 80.6602 27.7321 80.8046 28.1909C80.9541 28.6703 80.8355 29.093 80.3716 29.3662C79.3355 29.9693 78.3046 30.5775 77.2685 31.1754C76.0365 31.8868 74.8046 32.6136 73.552 33.294C72.8097 33.6961 71.985 33.2115 72.0572 32.4022C72.0829 32.1033 72.3046 31.7064 72.552 31.5569C74.784 30.2218 77.0468 28.928 79.2994 27.6342C79.4541 27.5466 79.6448 27.5156 79.7376 27.4847V27.4796Z" fill="#3078F6"/>\n                            <path class="inner" d="M80.8607 62.7322C80.8504 63.7477 80.0978 64.2065 79.3556 63.8302C78.6185 63.4539 77.9123 63.0209 77.1958 62.6034C75.6906 61.7322 74.1906 60.8611 72.6855 59.99C72.2886 59.758 71.9844 59.4693 72.036 58.959C72.1236 58.1188 72.8453 57.7632 73.6442 58.2065C74.9793 58.9539 76.2989 59.7322 77.6236 60.5003C78.4999 61.0054 79.3968 61.49 80.2473 62.0363C80.5463 62.2271 80.7319 62.5827 80.8556 62.7322H80.8607Z" fill="#3078F6"/>\n                            <path class="inner" d="M51.0099 15.2836C51.0099 16.5258 51.015 17.7629 51.0099 19.0052C51.0047 19.732 50.6233 20.165 50.0099 20.165C49.4222 20.165 48.9893 19.7062 48.9893 19.0052C48.9789 16.4846 48.9738 13.9588 48.9893 11.4382C48.9944 10.531 49.5923 10.0619 50.3398 10.3145C50.8398 10.4846 51.0253 10.8609 51.0202 11.3712C51.0099 12.6753 51.0202 13.9743 51.0202 15.2784C51.0202 15.2784 51.0202 15.2784 51.015 15.2784L51.0099 15.2836Z" fill="#3078F6"/>\n                            <path class="inner" d="M42.3714 33.4384C43.8559 33.4538 45.624 34.191 47.3456 35.0724C48.0466 35.4281 48.7271 35.8301 49.3765 36.2631C49.8198 36.5569 50.1549 36.5569 50.6085 36.2631C52.3972 35.0879 54.2786 34.0776 56.3972 33.6343C57.1343 33.4796 57.691 33.1858 58.2374 32.6549C59.5724 31.3559 61.8765 31.5569 63.1343 32.9899C64.3405 34.3662 64.1652 36.5569 62.7992 37.8147C62.5106 38.0776 62.2889 38.5054 62.2116 38.8971C61.7631 41.1755 60.6961 43.1755 59.4642 45.1033C59.1704 45.5621 59.1549 45.8817 59.4539 46.325C60.6188 48.0466 61.6188 49.8817 62.0415 51.9281C62.258 52.9796 62.2889 54.1188 62.1394 55.1807C61.9023 56.9023 60.3456 58.0157 58.3765 58.0569C56.3662 58.0982 54.5673 57.3611 52.8301 56.4642C52.0209 56.0466 51.2425 55.5724 50.4745 55.0827C50.124 54.8559 49.8765 54.8559 49.526 55.0827C47.7734 56.2374 45.9487 57.2528 43.8765 57.7219C43.1343 57.8868 42.3611 58.0157 41.6033 58.0002C38.5673 57.9487 37.3765 55.6961 37.6755 53.2064C37.959 50.8714 38.9126 48.7837 40.2013 46.8662C40.7683 46.0209 40.8147 45.4229 40.2116 44.5724C39.1704 43.0982 38.4075 41.4538 37.9539 39.6961C37.7838 39.0363 37.6549 38.3559 37.6394 37.6755C37.5673 34.9899 39.1188 33.4538 42.3611 33.4384H42.3714ZM56.4642 45.727C56.3662 45.5672 56.2992 45.4178 56.1961 45.2941C54.4899 43.1446 52.5466 41.2322 50.4178 39.5054C50.1291 39.2683 49.8817 39.2631 49.593 39.5054C47.4487 41.2477 45.4848 43.1652 43.7734 45.3456C43.526 45.66 43.5621 45.8714 43.7889 46.1549C45.4899 48.2528 47.3714 50.1652 49.4745 51.8662C49.8456 52.1652 50.1188 52.1858 50.5054 51.8765C52.6085 50.1755 54.5106 48.2786 56.191 46.1652C56.2889 46.0363 56.3662 45.892 56.4642 45.7374V45.727ZM51.8869 53.5776C53.8765 54.7631 55.8456 55.9538 58.2271 56.0415C59.6033 56.093 60.3456 55.227 60.2734 53.8198C60.1755 51.8095 59.2734 50.0827 58.3147 48.3868C58.1652 48.1239 57.9848 47.8817 57.825 47.6394C55.8456 49.6239 53.9075 51.5569 51.8869 53.5827V53.5776ZM42.1188 47.593C41.6291 48.5054 41.1085 49.3868 40.6755 50.3095C40.1394 51.4538 39.691 52.6394 39.6858 53.9281C39.6858 55.2219 40.3044 55.8868 41.5827 55.9745C41.9281 56.0002 42.2838 55.9745 42.6291 55.9178C44.5724 55.6188 46.2683 54.7322 47.8972 53.691C47.9745 53.6394 48.0209 53.5363 48.0466 53.5002C46.0827 51.5415 44.1497 49.6136 42.1137 47.5827L42.1188 47.593ZM42.191 43.8198C42.3456 43.7064 42.4745 43.6446 42.5673 43.5466C44.3095 41.8147 46.0363 40.0672 47.7889 38.3456C48.1497 37.9951 48.0621 37.7889 47.6858 37.6033C46.4436 36.9951 45.2271 36.3198 43.9435 35.825C43.1961 35.5363 42.3301 35.4693 41.5157 35.4538C40.4796 35.4384 39.8198 36.0621 39.7889 37.093C39.7683 37.8868 39.8508 38.7116 40.0673 39.4693C40.5106 41.0209 41.2322 42.459 42.1961 43.8147L42.191 43.8198ZM57.5724 43.9745C58.7838 42.4229 59.5054 41.0002 59.9899 39.4435C60.16 38.8971 60.0724 38.6652 59.5209 38.5105C58.3301 38.1806 57.5673 37.3611 57.2167 36.1961C57.0518 35.6446 56.7683 35.5312 56.3147 35.7374C54.9796 36.3404 53.66 36.9693 52.3301 37.593C51.7992 37.8404 51.9487 38.0724 52.2941 38.4075C53.9642 40.0415 55.6137 41.6961 57.2528 43.3559C57.4075 43.5105 57.4642 43.7631 57.5724 43.9693V43.9745ZM61.8972 35.2116C61.9229 34.4538 61.3714 33.8714 60.5982 33.8559C59.7734 33.8353 59.1188 34.4435 59.093 35.258C59.0673 36.0209 59.7477 36.6394 60.6085 36.6497C61.2374 36.6549 61.8662 35.9538 61.8972 35.2167V35.2116Z" fill="#3078F6"/>\n                            <path class="inner" d="M49.9745 49.1496C48.0672 49.1289 46.5105 47.5722 46.5415 45.7114C46.5724 43.8094 48.1291 42.2578 49.9951 42.2681C51.9229 42.2784 53.4848 43.8557 53.4538 45.7578C53.4229 47.6547 51.8662 49.1702 49.9745 49.1496ZM51.3714 45.6805C51.3559 44.8867 50.7837 44.3197 49.9951 44.3197C49.2064 44.3197 48.6136 44.9434 48.6239 45.763C48.6343 46.5413 49.2322 47.1289 50.0054 47.1238C50.8044 47.1238 51.3868 46.5001 51.3714 45.6805Z" fill="#3078F6"/>\n                            </g>\n                            <defs>\n                            <clipPath id="clip0_51_36615">\n                            <rect width="100" height="100" fill="white"/>\n                            </clipPath>\n                            </defs>\n                            </svg>\n                            \n                            `,
                                text: "Solution"
                            }, {
                                svg: `\n                        <svg class="icon" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <g clip-path="url(#clip0_51_36635)">\n                        <path class="background" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n                        <path class="inner" d="M34.0048 34.995C35.5615 35.1754 37.0305 34.8558 38.4996 34.562C40.814 34.0929 43.1336 33.7785 45.4378 34.5156C46.4171 34.83 47.3501 35.2991 48.2883 35.7372C48.5872 35.8764 48.7934 35.9589 49.1182 35.763C52.3089 33.8403 55.6491 33.6599 59.0976 34.964C60.3553 35.4383 61.5924 35.9692 62.8604 36.4228C63.6646 36.7115 64.5048 36.928 65.4017 36.5774C65.3553 36.3764 65.314 36.2115 65.2728 36.0465C64.9068 34.4537 65.6646 32.9228 67.1852 32.3249C68.8656 31.6599 70.5615 31.0259 72.2677 30.4331C74.0254 29.8197 75.6955 30.696 76.3811 32.531C78.5512 38.3609 80.711 44.1908 82.8759 50.0156C83.1594 50.7785 83.4584 51.5414 83.7213 52.3146C84.3192 54.0671 83.5563 55.7372 81.8295 56.4125C80.247 57.0311 78.6543 57.6135 77.0615 58.196C75.2573 58.8558 73.6646 58.1857 72.8244 56.4434C72.7728 56.3403 72.7006 56.2424 72.5563 56.1445C72.6852 57.7269 72.6182 59.2475 71.5563 60.5207C70.4378 61.8609 69.0099 62.0671 67.412 61.5362C67.6491 65.263 64.3708 67.3609 61.2677 66.3403C61.3398 67.6754 61.0254 68.8764 60.1233 69.8713C59.211 70.8816 58.0357 71.3094 56.6336 71.361C56.8295 73.0517 56.3501 74.4847 54.9017 75.4434C53.4275 76.4228 51.9635 76.0568 50.5151 75.2063C49.5872 76.9486 48.3553 78.2527 46.2367 77.9486C44.2213 77.6599 43.0357 76.3197 42.3553 74.428C39.6285 75.3506 37.5718 74.5929 36.2831 71.9383C34.5769 72.928 32.8656 72.9692 31.2625 71.7785C29.7161 70.629 29.3347 69.0104 29.6852 67.1496C29.2419 67.1187 28.7986 67.129 28.3707 67.0465C25.4635 66.4898 23.979 63.4898 25.2883 60.83C25.6182 60.1599 25.9996 59.5104 26.3347 58.8403C26.4481 58.6187 26.4996 58.3713 26.6285 57.9743C26.3501 58.1187 26.2367 58.1599 26.1388 58.2269C25.247 58.8609 24.2831 59.0053 23.247 58.6754C21.6491 58.1651 20.0512 57.6651 18.4584 57.1393C16.4842 56.4898 15.6388 54.8455 16.2728 52.8661C18.0254 47.4073 19.7883 41.9537 21.546 36.495C21.9326 35.2991 22.3037 34.0981 22.7006 32.9073C23.3295 31.0104 24.979 30.1651 26.8862 30.7579C28.2986 31.196 29.6852 31.7012 31.1079 32.0981C32.6388 32.5259 33.7161 33.3455 33.9893 34.995H34.0048ZM48.2728 67.5259C48.278 67.4847 48.2883 67.4434 48.2934 67.4022C48.1439 67.3146 47.9945 67.2269 47.8501 67.129C47.3811 66.8094 47.2161 66.3764 47.5151 65.8764C47.7883 65.4125 48.2213 65.2991 48.7161 65.5259C48.9171 65.6187 49.1079 65.7269 49.3037 65.83C51.3862 66.9383 53.4635 68.0568 55.5615 69.1445C57.1182 69.9537 58.8708 69.2166 59.3347 67.5981C59.6749 66.4228 59.1903 65.2579 57.9996 64.5774C56.6388 63.8042 55.247 63.0826 53.8656 62.3403C53.1852 61.9743 52.4945 61.629 51.8244 61.2424C51.3398 60.964 51.1594 60.5259 51.4378 60.0053C51.7161 59.4847 52.1697 59.4125 52.6852 59.6341C52.845 59.7012 52.9996 59.7939 53.1543 59.8764C55.9326 61.3661 58.7161 62.8558 61.4893 64.3558C62.2058 64.7424 62.9481 64.8867 63.7213 64.6341C64.7573 64.2939 65.3914 63.5723 65.5202 62.4795C65.6594 61.3042 65.1903 60.397 64.1594 59.83C61.4738 58.3558 58.7728 56.9022 56.0769 55.4383C55.8656 55.3249 55.6388 55.2115 55.4635 55.0517C54.9532 54.5774 55.113 53.7475 55.7831 53.5723C56.0821 53.495 56.4841 53.5929 56.7677 53.7424C58.8553 54.8455 60.9223 55.9898 62.9996 57.1084C64.613 57.9795 66.2161 58.8609 67.8501 59.6857C69.1491 60.3352 70.1336 59.8713 70.5821 58.495C71.046 57.0671 70.68 55.7424 69.2677 54.7166C67.7728 53.6341 66.1903 52.6548 64.5718 51.763C62.3295 50.531 59.9481 49.5414 57.7677 48.2218C56.211 47.2785 54.7213 47.1702 53.0976 47.7012C51.4223 48.2475 49.778 48.9022 48.0924 49.4125C44.278 50.5671 41.4223 49.7063 39.2264 46.8455C38.8553 46.3609 38.7625 45.8867 39.1233 45.397C39.6285 44.7012 40.1079 43.9743 40.711 43.3661C42.7006 41.3609 44.7419 39.4022 46.7573 37.4228C46.845 37.3403 46.9068 37.2321 46.9893 37.1238C45.0409 36.0259 42.9996 35.7579 40.8656 36.0414C38.5769 36.3455 36.3398 37.0723 33.9842 36.9073C33.8553 36.897 33.6285 37.1341 33.5769 37.2939C31.8604 42.5774 30.1388 47.8609 28.4635 53.1599C28.2058 53.9692 28.1749 54.8506 28.0357 55.7012C29.5924 54.6032 31.1388 54.1548 32.8244 54.8764C34.4893 55.5929 35.3862 56.9692 35.6336 58.7475C39.0718 58.6238 40.0408 59.3506 41.1543 62.8764C42.613 62.5362 43.9532 62.8042 45.1079 63.7939C46.2625 64.7836 46.6749 66.0981 46.5924 67.5414H48.2883L48.2728 67.5259ZM40.9017 45.9228C41.0099 46.0671 41.0718 46.1599 41.1439 46.2424C42.747 48.0517 44.7573 48.4537 46.9893 47.8042C48.7213 47.2991 50.4068 46.6341 52.1233 46.0671C53.5615 45.5929 55.046 45.2166 56.5357 45.6702C57.4481 45.9434 58.278 46.495 59.1336 46.928C61.4945 48.1238 63.8656 49.2991 66.2006 50.5414C68.0151 51.5053 69.7831 52.5465 71.2419 54.031C71.4171 54.2063 71.6697 54.2991 71.8914 54.4331C71.8604 54.1754 71.8759 53.897 71.7883 53.6599C70.5872 50.3919 69.3707 47.129 68.1594 43.8661C67.479 42.031 66.7934 40.196 66.1182 38.3764C64.046 38.7063 63.2213 38.6084 61.2419 37.8094C60.3862 37.464 59.5254 37.1187 58.6697 36.7682C55.1491 35.3403 51.8037 35.7527 48.9017 38.1496C46.5099 40.1238 44.3604 42.3919 42.1182 44.5465C41.68 44.9692 41.3089 45.4692 40.9068 45.9331L40.9017 45.9228ZM73.2006 32.0929C73.0666 32.129 72.8295 32.1754 72.6079 32.2579C71.1182 32.8042 69.6285 33.3558 68.1439 33.9176C67.0976 34.3146 66.814 34.9331 67.2058 36.0001C69.6079 42.4898 72.0151 48.9847 74.4274 55.4743C74.8295 56.562 75.4429 56.8249 76.5563 56.4125C77.9842 55.8867 79.4068 55.3558 80.8347 54.8249C82.0615 54.3661 82.314 53.8146 81.8553 52.5774C80.4429 48.7733 79.0305 44.9692 77.6182 41.1702C76.6285 38.5053 75.6336 35.8403 74.6491 33.1702C74.412 32.531 74.0254 32.1135 73.1955 32.0981L73.2006 32.0929ZM17.912 53.8816C17.9017 54.6702 18.2367 55.1084 18.9738 55.3558C20.5409 55.8764 22.113 56.3919 23.6903 56.8867C24.6697 57.196 25.2883 56.8558 25.6182 55.8506C27.7573 49.2424 29.8862 42.6341 32.0151 36.0207C32.3604 34.9537 32.0305 34.3352 30.9635 33.9898C29.5151 33.5207 28.0666 33.0568 26.6182 32.5929C25.3295 32.1805 24.7986 32.4486 24.3811 33.7372C22.2883 40.2218 20.1903 46.7012 18.0976 53.1857C18.0099 53.4589 17.9481 53.7372 17.9068 53.8816H17.912ZM31.3244 68.3042C31.412 69.5207 32.0821 70.4073 33.2213 70.7218C34.3244 71.031 35.4532 70.5774 36.0357 69.5207C36.9945 67.7836 37.9223 66.0311 38.845 64.2733C39.5512 62.9228 39.1439 61.4486 37.9068 60.7888C36.6543 60.1238 35.2161 60.5981 34.4893 61.9383C33.5769 63.6238 32.6646 65.3146 31.7831 67.0156C31.5769 67.4176 31.479 67.8713 31.3295 68.3042H31.3244ZM29.0872 65.2682C30.0151 65.2785 30.8089 64.8558 31.2728 64.0207C32.0202 62.6702 32.7573 61.3146 33.4481 59.9331C34.0666 58.7063 33.5821 57.3609 32.345 56.6496C31.2934 56.0517 29.8089 56.4228 29.1594 57.5362C28.3501 58.928 27.5769 60.3403 26.8862 61.7939C26.1079 63.428 27.3037 65.2475 29.0872 65.263V65.2682ZM40.3811 72.964C41.2625 72.964 42.0099 72.6341 42.4481 71.8816C43.1903 70.6084 43.9017 69.3094 44.5357 67.9795C45.0872 66.83 44.5563 65.4537 43.4429 64.8558C42.3037 64.2424 40.8553 64.5878 40.1955 65.7115C39.4738 66.9434 38.778 68.2063 38.1749 69.5001C37.4068 71.1445 38.5872 72.9434 40.3811 72.964ZM46.6955 76.1445C47.4326 76.1702 47.9945 75.7991 48.3347 75.2063C48.912 74.2011 49.4378 73.1548 49.912 72.0929C50.1697 71.5104 50.1439 70.8919 49.68 70.3558C48.3914 68.8661 46.2213 69.0362 45.2006 70.7218C44.8811 71.2475 44.5924 71.7939 44.3244 72.3455C43.5615 73.928 44.9326 76.1084 46.6955 76.1393V76.1445ZM50.8347 68.7424C52.2625 70.2012 52.0821 71.8403 51.3811 73.5156C52.8501 74.5259 54.0924 74.3146 54.6646 72.9847C55.1079 71.9589 54.7316 70.8764 53.68 70.2785C52.7419 69.7424 51.7831 69.2527 50.8347 68.7424Z" fill="#3078F6"/>\n                        </g>\n                        <defs>\n                        <clipPath id="clip0_51_36635">\n                        <rect width="100" height="100" fill="white"/>\n                        </clipPath>\n                        </defs>\n                        </svg>\n                        \n                        `,
                                text: "Outcome"
                            } ];
                            return '<button class="' + className + ' case-3-pagination">' + data[index].svg + "<span>" + data[index].text + "</span>" + "</button>";
                        }
                    },
                    navigation: {
                        prevEl: ".case-3-swiper-button-prev",
                        nextEl: ".case-3-swiper-button-next"
                    },
                    breakpoints: {
                        320: {
                            pagination: {
                                el: ".case-3-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 1
                            }
                        },
                        992: {
                            pagination: {
                                el: ".case-3-pagination",
                                dynamicBullets: true,
                                dynamicMainBullets: 3
                            }
                        }
                    },
                    on: {}
                });
                new swiper_core_Swiper(".news__slider", {
                    modules: [ Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".news-swiper-pagination",
                        clickable: true
                    },
                    navigation: {
                        prevEl: ".news-swiper-button-prev",
                        nextEl: ".news-swiper-button-next"
                    },
                    on: {}
                });
                new swiper_core_Swiper(".mission__slider", {
                    modules: [ Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".mission-swiper-pagination",
                        clickable: true
                    },
                    navigation: {
                        prevEl: ".mission-swiper-button-prev",
                        nextEl: ".mission-swiper-button-next"
                    },
                    on: {}
                });
            }
        }
        initSliders();
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        var lazyload_min = __webpack_require__(144);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        if (flsModules.fullpage) {
                            const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                            const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                            if (fullpageSectionId !== null) {
                                flsModules.fullpage.switchingSection(fullpageSectionId);
                                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                            }
                        } else gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        window["FLS"] = true;
        menuInit();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
        pageNavigation();
    })();
})();