import{_ as t}from"./_rollupPluginBabelHelpers-e36f2efa.js";import {F as e} from"./additional.js";
const i = {
    easeInOutCubic: function(t, n, e, u) {
        return (t /= u / 2) < 1 ? e / 2 * t * t * t + n : e / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(t, n, e, u) {
        const a = t / u;
        return e * a * a ** 3 + n
    },
    easeOutQuart: function(t, n, e, u) {
        const a = t / u - 1;
        return -e * (a * a ** 3 - 1) + n
    },
    easeInOutQuart: function(t, n, e, u) {
        let a = t / (u / 2);
        return a < 1 ? e / 2 * a ** 4 + n : (a -= 2, -e / 2 * (a * a ** 3 - 2) + n)
    },
    easeInOutBack: function(t, n, e, u, a) {
        let r = null == a ? 1.70158 : a,
            s = t / (u / 2);
        return r = 1.525 * r + 1, s < 1 ? e / 2 * (s * s * (r * s - r) + n) : (s -= 2, e / 2 * (s * s * (r * s + r) + 2) + n)
    },
    easeOutElastic: function(t, n, e, u, a = 700) {
        if (!t || !e) return n;
        const r = t / u;
        if (1 === r) return n + e;
        const s = e,
            c = u * (1 - Math.min(a, 999) / 1e3),
            i = s < Math.abs(e) ? c / 4 : c / (2 * Math.PI) * Math.asin(e / s);
        return s * 2 ** (-10 * r) * Math.sin((r * u - i) * (2 * Math.PI) / c) + e + n
    }
};


// Timing
const n = {
    humanizeDuration: (e, n = !1) => n ? e : Math.round(Math.random() * e / 2) + e,
    sleep: e => new Promise(n => {
        const r = performance.now();
        requestAnimationFrame((function t(o) {
            o - r >= e ? n() : requestAnimationFrame(t)
        }))
    }),
    delay: (e, n) => {
        let r = !1;
        const t = performance.now();
        return requestAnimationFrame((function o(a) {
            a - t >= n && !r ? e() : r || requestAnimationFrame(o)
        })), () => {
            r = !0
        }
    },
    onInterval: (e, n) => {
        let r = !1,
            t = performance.now();
        return requestAnimationFrame((function o(a) {
            a - t >= n && (t = a, e()), r || requestAnimationFrame(o)
        })), () => {
            r = !0
        }
    }
};

// Number
const r = {
    clamp: function(n, t, r) {
        return Math.max(Math.min(n, r), t)
    },
    lerp: function(n, t, r) {
        return n * (1 - r) + t * r
    }
};


void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
    return "number" == typeof t && isFinite(t) && Math.floor(t) === t
}), void 0 === Math.sign && (Math.sign = function(t) {
    return t < 0 ? -1 : t > 0 ? 1 : +t
}), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
    get: function() {
        return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
    }
}), void 0 === Object.assign && (Object.assign = function(t) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
    for (var e = Object(t), i = 1; i < arguments.length; i++) {
        var n = arguments[i];
        if (null != n)
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
});

function a() {}
Object.assign(a.prototype, {
    addEventListener: function(t, e) {
        void 0 === this._listeners && (this._listeners = {});
        var i = this._listeners;
        void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
    },
    hasEventListener: function(t, e) {
        if (void 0 === this._listeners) return !1;
        var i = this._listeners;
        return void 0 !== i[t] && -1 !== i[t].indexOf(e)
    },
    removeEventListener: function(t, e) {
        if (void 0 !== this._listeners) {
            var i = this._listeners[t];
            if (void 0 !== i) {
                var n = i.indexOf(e); - 1 !== n && i.splice(n, 1)
            }
        }
    },
    dispatchEvent: function(t) {
        if (void 0 !== this._listeners) {
            var e = this._listeners[t.type];
            if (void 0 !== e) {
                t.target = this;
                for (var i = e.slice(0), n = 0, r = i.length; n < r; n++) i[n].call(this, t)
            }
        }
    }
});
for (var o = [], s = 0; s < 256; s++) o[s] = (s < 16 ? "0" : "") + s.toString(16);
var c, h = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function() {
        var t = 4294967295 * Math.random() | 0,
            e = 4294967295 * Math.random() | 0,
            i = 4294967295 * Math.random() | 0,
            n = 4294967295 * Math.random() | 0;
        return (o[255 & t] + o[t >> 8 & 255] + o[t >> 16 & 255] + o[t >> 24 & 255] + "-" + o[255 & e] + o[e >> 8 & 255] + "-" + o[e >> 16 & 15 | 64] + o[e >> 24 & 255] + "-" + o[63 & i | 128] + o[i >> 8 & 255] + "-" + o[i >> 16 & 255] + o[i >> 24 & 255] + o[255 & n] + o[n >> 8 & 255] + o[n >> 16 & 255] + o[n >> 24 & 255]).toUpperCase()
    },
    clamp: function(t, e, i) {
        return Math.max(e, Math.min(i, t))
    },
    euclideanModulo: function(t, e) {
        return (t % e + e) % e
    },
    mapLinear: function(t, e, i, n, r) {
        return n + (t - e) * (r - n) / (i - e)
    },
    lerp: function(t, e, i) {
        return (1 - i) * t + i * e
    },
    smoothstep: function(t, e, i) {
        return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
    },
    smootherstep: function(t, e, i) {
        return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
    },
    randInt: function(t, e) {
        return t + Math.floor(Math.random() * (e - t + 1))
    },
    randFloat: function(t, e) {
        return t + Math.random() * (e - t)
    },
    randFloatSpread: function(t) {
        return t * (.5 - Math.random())
    },
    degToRad: function(t) {
        return t * h.DEG2RAD
    },
    radToDeg: function(t) {
        return t * h.RAD2DEG
    },
    isPowerOfTwo: function(t) {
        return 0 == (t & t - 1) && 0 !== t
    },
    ceilPowerOfTwo: function(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
    },
    floorPowerOfTwo: function(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
    },
    setQuaternionFromProperEuler: function(t, e, i, n, r) {
        var a = Math.cos,
            o = Math.sin,
            s = a(i / 2),
            c = o(i / 2),
            h = a((e + n) / 2),
            l = o((e + n) / 2),
            u = a((e - n) / 2),
            d = o((e - n) / 2),
            p = a((n - e) / 2),
            f = o((n - e) / 2);
        switch (r) {
            case "XYX":
                t.set(s * l, c * u, c * d, s * h);
                break;
            case "YZY":
                t.set(c * d, s * l, c * u, s * h);
                break;
            case "ZXZ":
                t.set(c * u, c * d, s * l, s * h);
                break;
            case "XZX":
                t.set(s * l, c * f, c * p, s * h);
                break;
            case "YXY":
                t.set(c * p, s * l, c * f, s * h);
                break;
            case "ZYZ":
                t.set(c * f, c * p, s * l, s * h);
                break;
            default:
                console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
        }
    }
};

function l(t, e) {
    this.x = t || 0, this.y = e || 0
}

function u() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
}
Object.defineProperties(l.prototype, {
    width: {
        get: function() {
            return this.x
        },
        set: function(t) {
            this.x = t
        }
    },
    height: {
        get: function() {
            return this.y
        },
        set: function(t) {
            this.y = t
        }
    }
}), Object.assign(l.prototype, {
    isVector2: !0,
    set: function(t, e) {
        return this.x = t, this.y = e, this
    },
    setScalar: function(t) {
        return this.x = t, this.y = t, this
    },
    setX: function(t) {
        return this.x = t, this
    },
    setY: function(t) {
        return this.y = t, this
    },
    setComponent: function(t, e) {
        switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
        }
        return this
    },
    getComponent: function(t) {
        switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
        }
    },
    clone: function() {
        return new this.constructor(this.x, this.y)
    },
    copy: function(t) {
        return this.x = t.x, this.y = t.y, this
    },
    add: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
    },
    addScalar: function(t) {
        return this.x += t, this.y += t, this
    },
    addVectors: function(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this
    },
    addScaledVector: function(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this
    },
    sub: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
    },
    subScalar: function(t) {
        return this.x -= t, this.y -= t, this
    },
    subVectors: function(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this
    },
    multiply: function(t) {
        return this.x *= t.x, this.y *= t.y, this
    },
    multiplyScalar: function(t) {
        return this.x *= t, this.y *= t, this
    },
    divide: function(t) {
        return this.x /= t.x, this.y /= t.y, this
    },
    divideScalar: function(t) {
        return this.multiplyScalar(1 / t)
    },
    applyMatrix3: function(t) {
        var e = this.x,
            i = this.y,
            n = t.elements;
        return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
    },
    min: function(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
    },
    max: function(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
    },
    clamp: function(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
    },
    clampScalar: function(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
    },
    clampLength: function(t, e) {
        var i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    },
    round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    },
    roundToZero: function() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    },
    negate: function() {
        return this.x = -this.x, this.y = -this.y, this
    },
    dot: function(t) {
        return this.x * t.x + this.y * t.y
    },
    cross: function(t) {
        return this.x * t.y - this.y * t.x
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    manhattanLength: function() {
        return Math.abs(this.x) + Math.abs(this.y)
    },
    normalize: function() {
        return this.divideScalar(this.length() || 1)
    },
    angle: function() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    },
    distanceTo: function(t) {
        return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
        var e = this.x - t.x,
            i = this.y - t.y;
        return e * e + i * i
    },
    manhattanDistanceTo: function(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    },
    setLength: function(t) {
        return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
    },
    lerpVectors: function(t, e, i) {
        return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    equals: function(t) {
        return t.x === this.x && t.y === this.y
    },
    fromArray: function(t, e) {
        return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
    },
    toArray: function(t, e) {
        return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
    },
    fromBufferAttribute: function(t, e, i) {
        return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
    },
    rotateAround: function(t, e) {
        var i = Math.cos(e),
            n = Math.sin(e),
            r = this.x - t.x,
            a = this.y - t.y;
        return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this
    },
    random: function() {
        return this.x = Math.random(), this.y = Math.random(), this
    }
}), Object.assign(u.prototype, {
    isMatrix3: !0,
    set: function(t, e, i, n, r, a, o, s, c) {
        var h = this.elements;
        return h[0] = t, h[1] = n, h[2] = o, h[3] = e, h[4] = r, h[5] = s, h[6] = i, h[7] = a, h[8] = c, this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    },
    clone: function() {
        return (new this.constructor).fromArray(this.elements)
    },
    copy: function(t) {
        var e = this.elements,
            i = t.elements;
        return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
    },
    extractBasis: function(t, e, i) {
        return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
    },
    setFromMatrix4: function(t) {
        var e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    },
    multiply: function(t) {
        return this.multiplyMatrices(this, t)
    },
    premultiply: function(t) {
        return this.multiplyMatrices(t, this)
    },
    multiplyMatrices: function(t, e) {
        var i = t.elements,
            n = e.elements,
            r = this.elements,
            a = i[0],
            o = i[3],
            s = i[6],
            c = i[1],
            h = i[4],
            l = i[7],
            u = i[2],
            d = i[5],
            p = i[8],
            f = n[0],
            m = n[3],
            g = n[6],
            v = n[1],
            y = n[4],
            x = n[7],
            b = n[2],
            _ = n[5],
            w = n[8];
        return r[0] = a * f + o * v + s * b, r[3] = a * m + o * y + s * _, r[6] = a * g + o * x + s * w, r[1] = c * f + h * v + l * b, r[4] = c * m + h * y + l * _, r[7] = c * g + h * x + l * w, r[2] = u * f + d * v + p * b, r[5] = u * m + d * y + p * _, r[8] = u * g + d * x + p * w, this
    },
    multiplyScalar: function(t) {
        var e = this.elements;
        return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
    },
    determinant: function() {
        var t = this.elements,
            e = t[0],
            i = t[1],
            n = t[2],
            r = t[3],
            a = t[4],
            o = t[5],
            s = t[6],
            c = t[7],
            h = t[8];
        return e * a * h - e * o * c - i * r * h + i * o * s + n * r * c - n * a * s
    },
    getInverse: function(t, e) {
        void 0 !== e && console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
        var i = t.elements,
            n = this.elements,
            r = i[0],
            a = i[1],
            o = i[2],
            s = i[3],
            c = i[4],
            h = i[5],
            l = i[6],
            u = i[7],
            d = i[8],
            p = d * c - h * u,
            f = h * l - d * s,
            m = u * s - c * l,
            g = r * p + a * f + o * m;
        if (0 === g) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var v = 1 / g;
        return n[0] = p * v, n[1] = (o * u - d * a) * v, n[2] = (h * a - o * c) * v, n[3] = f * v, n[4] = (d * r - o * l) * v, n[5] = (o * s - h * r) * v, n[6] = m * v, n[7] = (a * l - u * r) * v, n[8] = (c * r - a * s) * v, this
    },
    transpose: function() {
        var t, e = this.elements;
        return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
    },
    getNormalMatrix: function(t) {
        return this.setFromMatrix4(t).getInverse(this).transpose()
    },
    transposeIntoArray: function(t) {
        var e = this.elements;
        return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
    },
    setUvTransform: function(t, e, i, n, r, a, o) {
        var s = Math.cos(r),
            c = Math.sin(r);
        this.set(i * s, i * c, -i * (s * a + c * o) + a + t, -n * c, n * s, -n * (-c * a + s * o) + o + e, 0, 0, 1)
    },
    scale: function(t, e) {
        var i = this.elements;
        return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
    },
    rotate: function(t) {
        var e = Math.cos(t),
            i = Math.sin(t),
            n = this.elements,
            r = n[0],
            a = n[3],
            o = n[6],
            s = n[1],
            c = n[4],
            h = n[7];
        return n[0] = e * r + i * s, n[3] = e * a + i * c, n[6] = e * o + i * h, n[1] = -i * r + e * s, n[4] = -i * a + e * c, n[7] = -i * o + e * h, this
    },
    translate: function(t, e) {
        var i = this.elements;
        return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
    },
    equals: function(t) {
        for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
            if (e[n] !== i[n]) return !1;
        return !0
    },
    fromArray: function(t, e) {
        void 0 === e && (e = 0);
        for (var i = 0; i < 9; i++) this.elements[i] = t[i + e];
        return this
    },
    toArray: function(t, e) {
        void 0 === t && (t = []), void 0 === e && (e = 0);
        var i = this.elements;
        return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
    }
});
var d = {
        getDataURL: function(t) {
            var e;
            if ("undefined" == typeof HTMLCanvasElement) return t.src;
            if (t instanceof HTMLCanvasElement) e = t;
            else {
                void 0 === c && (c = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), c.width = t.width, c.height = t.height;
                var i = c.getContext("2d");
                t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = c
            }
            return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
        }
    },
    p = 0;

function f(t, e, i, n, r, a, o, s, c, d) {
    Object.defineProperty(this, "id", {
        value: p++
    }), this.uuid = h.generateUUID(), this.name = "", this.image = void 0 !== t ? t : f.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : f.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : 1001, this.wrapT = void 0 !== n ? n : 1001, this.magFilter = void 0 !== r ? r : 1006, this.minFilter = void 0 !== a ? a : 1008, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : 1023, this.internalFormat = null, this.type = void 0 !== s ? s : 1009, this.offset = new l(0, 0), this.repeat = new l(1, 1), this.center = new l(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new u, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== d ? d : 3e3, this.version = 0, this.onUpdate = null
}

function m(t, e, i, n) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
}

function g(t, e, i) {
    this.width = t, this.height = e, this.scissor = new m(0, 0, t, e), this.scissorTest = !1, this.viewport = new m(0, 0, t, e), i = i || {}, this.texture = new f(void 0, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : 1006, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
}

function v(t, e, i) {
    g.call(this, t, e, i), this.samples = 4
}

function y(t, e, i, n) {
    this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
}
f.DEFAULT_IMAGE = void 0, f.DEFAULT_MAPPING = 300, f.prototype = Object.assign(Object.create(a.prototype), {
    constructor: f,
    isTexture: !0,
    updateMatrix: function() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
    },
    toJSON: function(t) {
        var e = void 0 === t || "string" == typeof t;
        if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
        var i = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        if (void 0 !== this.image) {
            var n = this.image;
            if (void 0 === n.uuid && (n.uuid = h.generateUUID()), !e && void 0 === t.images[n.uuid]) {
                var r;
                if (Array.isArray(n)) {
                    r = [];
                    for (var a = 0, o = n.length; a < o; a++) r.push(d.getDataURL(n[a]))
                } else r = d.getDataURL(n);
                t.images[n.uuid] = {
                    uuid: n.uuid,
                    url: r
                }
            }
            i.image = n.uuid
        }
        return e || (t.textures[this.uuid] = i), i
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    },
    transformUv: function(t) {
        if (300 !== this.mapping) return t;
        if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
            case 1e3:
                t.x = t.x - Math.floor(t.x);
                break;
            case 1001:
                t.x = t.x < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
        }
        if (t.y < 0 || t.y > 1) switch (this.wrapT) {
            case 1e3:
                t.y = t.y - Math.floor(t.y);
                break;
            case 1001:
                t.y = t.y < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
        }
        return this.flipY && (t.y = 1 - t.y), t
    }
}), Object.defineProperty(f.prototype, "needsUpdate", {
    set: function(t) {
        !0 === t && this.version++
    }
}), Object.defineProperties(m.prototype, {
    width: {
        get: function() {
            return this.z
        },
        set: function(t) {
            this.z = t
        }
    },
    height: {
        get: function() {
            return this.w
        },
        set: function(t) {
            this.w = t
        }
    }
}), Object.assign(m.prototype, {
    isVector4: !0,
    set: function(t, e, i, n) {
        return this.x = t, this.y = e, this.z = i, this.w = n, this
    },
    setScalar: function(t) {
        return this.x = t, this.y = t, this.z = t, this.w = t, this
    },
    setX: function(t) {
        return this.x = t, this
    },
    setY: function(t) {
        return this.y = t, this
    },
    setZ: function(t) {
        return this.z = t, this
    },
    setW: function(t) {
        return this.w = t, this
    },
    setComponent: function(t, e) {
        switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
        }
        return this
    },
    getComponent: function(t) {
        switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
        }
    },
    clone: function() {
        return new this.constructor(this.x, this.y, this.z, this.w)
    },
    copy: function(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
    },
    add: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
    },
    addScalar: function(t) {
        return this.x += t, this.y += t, this.z += t, this.w += t, this
    },
    addVectors: function(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
    },
    addScaledVector: function(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
    },
    sub: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
    },
    subScalar: function(t) {
        return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
    },
    subVectors: function(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
    },
    multiplyScalar: function(t) {
        return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
    },
    applyMatrix4: function(t) {
        var e = this.x,
            i = this.y,
            n = this.z,
            r = this.w,
            a = t.elements;
        return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r, this
    },
    divideScalar: function(t) {
        return this.multiplyScalar(1 / t)
    },
    setAxisAngleFromQuaternion: function(t) {
        this.w = 2 * Math.acos(t.w);
        var e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
    },
    setAxisAngleFromRotationMatrix: function(t) {
        var e, i, n, r, a = t.elements,
            o = a[0],
            s = a[4],
            c = a[8],
            h = a[1],
            l = a[5],
            u = a[9],
            d = a[2],
            p = a[6],
            f = a[10];
        if (Math.abs(s - h) < .01 && Math.abs(c - d) < .01 && Math.abs(u - p) < .01) {
            if (Math.abs(s + h) < .1 && Math.abs(c + d) < .1 && Math.abs(u + p) < .1 && Math.abs(o + l + f - 3) < .1) return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            var m = (o + 1) / 2,
                g = (l + 1) / 2,
                v = (f + 1) / 2,
                y = (s + h) / 4,
                x = (c + d) / 4,
                b = (u + p) / 4;
            return m > g && m > v ? m < .01 ? (i = 0, n = .707106781, r = .707106781) : (n = y / (i = Math.sqrt(m)), r = x / i) : g > v ? g < .01 ? (i = .707106781, n = 0, r = .707106781) : (i = y / (n = Math.sqrt(g)), r = b / n) : v < .01 ? (i = .707106781, n = .707106781, r = 0) : (i = x / (r = Math.sqrt(v)), n = b / r), this.set(i, n, r, e), this
        }
        var _ = Math.sqrt((p - u) * (p - u) + (c - d) * (c - d) + (h - s) * (h - s));
        return Math.abs(_) < .001 && (_ = 1), this.x = (p - u) / _, this.y = (c - d) / _, this.z = (h - s) / _, this.w = Math.acos((o + l + f - 1) / 2), this
    },
    min: function(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
    },
    max: function(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
    },
    clamp: function(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
    },
    clampScalar: function(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
    },
    clampLength: function(t, e) {
        var i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    },
    round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    },
    roundToZero: function() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    },
    negate: function() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    },
    dot: function(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    manhattanLength: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
        return this.divideScalar(this.length() || 1)
    },
    setLength: function(t) {
        return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
    },
    lerpVectors: function(t, e, i) {
        return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    equals: function(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    },
    fromArray: function(t, e) {
        return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
    },
    toArray: function(t, e) {
        return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
    },
    fromBufferAttribute: function(t, e, i) {
        return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
    },
    random: function() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
    }
}), g.prototype = Object.assign(Object.create(a.prototype), {
    constructor: g,
    isWebGLRenderTarget: !0,
    setSize: function(t, e) {
        this.width === t && this.height === e || (this.width = t, this.height = e, this.texture.image.width = t, this.texture.image.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}), v.prototype = Object.assign(Object.create(g.prototype), {
    constructor: v,
    isWebGLMultisampleRenderTarget: !0,
    copy: function(t) {
        return g.prototype.copy.call(this, t), this.samples = t.samples, this
    }
}), Object.assign(y, {
    slerp: function(t, e, i, n) {
        return i.copy(t).slerp(e, n)
    },
    slerpFlat: function(t, e, i, n, r, a, o) {
        var s = i[n + 0],
            c = i[n + 1],
            h = i[n + 2],
            l = i[n + 3],
            u = r[a + 0],
            d = r[a + 1],
            p = r[a + 2],
            f = r[a + 3];
        if (l !== f || s !== u || c !== d || h !== p) {
            var m = 1 - o,
                g = s * u + c * d + h * p + l * f,
                v = g >= 0 ? 1 : -1,
                y = 1 - g * g;
            if (y > Number.EPSILON) {
                var x = Math.sqrt(y),
                    b = Math.atan2(x, g * v);
                m = Math.sin(m * b) / x, o = Math.sin(o * b) / x
            }
            var _ = o * v;
            if (s = s * m + u * _, c = c * m + d * _, h = h * m + p * _, l = l * m + f * _, m === 1 - o) {
                var w = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                s *= w, c *= w, h *= w, l *= w
            }
        }
        t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = l
    },
    multiplyQuaternionsFlat: function(t, e, i, n, r, a) {
        var o = i[n],
            s = i[n + 1],
            c = i[n + 2],
            h = i[n + 3],
            l = r[a],
            u = r[a + 1],
            d = r[a + 2],
            p = r[a + 3];
        return t[e] = o * p + h * l + s * d - c * u, t[e + 1] = s * p + h * u + c * l - o * d, t[e + 2] = c * p + h * d + o * u - s * l, t[e + 3] = h * p - o * l - s * u - c * d, t
    }
}), Object.defineProperties(y.prototype, {
    x: {
        get: function() {
            return this._x
        },
        set: function(t) {
            this._x = t, this._onChangeCallback()
        }
    },
    y: {
        get: function() {
            return this._y
        },
        set: function(t) {
            this._y = t, this._onChangeCallback()
        }
    },
    z: {
        get: function() {
            return this._z
        },
        set: function(t) {
            this._z = t, this._onChangeCallback()
        }
    },
    w: {
        get: function() {
            return this._w
        },
        set: function(t) {
            this._w = t, this._onChangeCallback()
        }
    }
}), Object.assign(y.prototype, {
    isQuaternion: !0,
    set: function(t, e, i, n) {
        return this._x = t, this._y = e, this._z = i, this._w = n, this._onChangeCallback(), this
    },
    clone: function() {
        return new this.constructor(this._x, this._y, this._z, this._w)
    },
    copy: function(t) {
        return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
    },
    setFromEuler: function(t, e) {
        if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        var i = t._x,
            n = t._y,
            r = t._z,
            a = t.order,
            o = Math.cos,
            s = Math.sin,
            c = o(i / 2),
            h = o(n / 2),
            l = o(r / 2),
            u = s(i / 2),
            d = s(n / 2),
            p = s(r / 2);
        switch (a) {
            case "XYZ":
                this._x = u * h * l + c * d * p, this._y = c * d * l - u * h * p, this._z = c * h * p + u * d * l, this._w = c * h * l - u * d * p;
                break;
            case "YXZ":
                this._x = u * h * l + c * d * p, this._y = c * d * l - u * h * p, this._z = c * h * p - u * d * l, this._w = c * h * l + u * d * p;
                break;
            case "ZXY":
                this._x = u * h * l - c * d * p, this._y = c * d * l + u * h * p, this._z = c * h * p + u * d * l, this._w = c * h * l - u * d * p;
                break;
            case "ZYX":
                this._x = u * h * l - c * d * p, this._y = c * d * l + u * h * p, this._z = c * h * p - u * d * l, this._w = c * h * l + u * d * p;
                break;
            case "YZX":
                this._x = u * h * l + c * d * p, this._y = c * d * l + u * h * p, this._z = c * h * p - u * d * l, this._w = c * h * l - u * d * p;
                break;
            case "XZY":
                this._x = u * h * l - c * d * p, this._y = c * d * l - u * h * p, this._z = c * h * p + u * d * l, this._w = c * h * l + u * d * p;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
        }
        return !1 !== e && this._onChangeCallback(), this
    },
    setFromAxisAngle: function(t, e) {
        var i = e / 2,
            n = Math.sin(i);
        return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this._onChangeCallback(), this
    },
    setFromRotationMatrix: function(t) {
        var e, i = t.elements,
            n = i[0],
            r = i[4],
            a = i[8],
            o = i[1],
            s = i[5],
            c = i[9],
            h = i[2],
            l = i[6],
            u = i[10],
            d = n + s + u;
        return d > 0 ? (e = .5 / Math.sqrt(d + 1), this._w = .25 / e, this._x = (l - c) * e, this._y = (a - h) * e, this._z = (o - r) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u), this._w = (l - c) / e, this._x = .25 * e, this._y = (r + o) / e, this._z = (a + h) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (a - h) / e, this._x = (r + o) / e, this._y = .25 * e, this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s), this._w = (o - r) / e, this._x = (a + h) / e, this._y = (c + l) / e, this._z = .25 * e), this._onChangeCallback(), this
    },
    setFromUnitVectors: function(t, e) {
        var i = t.dot(e) + 1;
        return i < 1e-6 ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize()
    },
    angleTo: function(t) {
        return 2 * Math.acos(Math.abs(h.clamp(this.dot(t), -1, 1)))
    },
    rotateTowards: function(t, e) {
        var i = this.angleTo(t);
        if (0 === i) return this;
        var n = Math.min(1, e / i);
        return this.slerp(t, n), this
    },
    inverse: function() {
        return this.conjugate()
    },
    conjugate: function() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
    },
    dot: function(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    },
    lengthSq: function() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
        var t = this.length();
        return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
    },
    multiply: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
    },
    premultiply: function(t) {
        return this.multiplyQuaternions(t, this)
    },
    multiplyQuaternions: function(t, e) {
        var i = t._x,
            n = t._y,
            r = t._z,
            a = t._w,
            o = e._x,
            s = e._y,
            c = e._z,
            h = e._w;
        return this._x = i * h + a * o + n * c - r * s, this._y = n * h + a * s + r * o - i * c, this._z = r * h + a * c + i * s - n * o, this._w = a * h - i * o - n * s - r * c, this._onChangeCallback(), this
    },
    slerp: function(t, e) {
        if (0 === e) return this;
        if (1 === e) return this.copy(t);
        var i = this._x,
            n = this._y,
            r = this._z,
            a = this._w,
            o = a * t._w + i * t._x + n * t._y + r * t._z;
        if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
        var s = 1 - o * o;
        if (s <= Number.EPSILON) {
            var c = 1 - e;
            return this._w = c * a + e * this._w, this._x = c * i + e * this._x, this._y = c * n + e * this._y, this._z = c * r + e * this._z, this.normalize(), this._onChangeCallback(), this
        }
        var h = Math.sqrt(s),
            l = Math.atan2(h, o),
            u = Math.sin((1 - e) * l) / h,
            d = Math.sin(e * l) / h;
        return this._w = a * u + this._w * d, this._x = i * u + this._x * d, this._y = n * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this
    },
    equals: function(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    },
    fromArray: function(t, e) {
        return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
    },
    toArray: function(t, e) {
        return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
    },
    fromBufferAttribute: function(t, e) {
        return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
    },
    _onChange: function(t) {
        return this._onChangeCallback = t, this
    },
    _onChangeCallback: function() {}
});
var x = new _,
    b = new y;

function _(t, e, i) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0
}
Object.assign(_.prototype, {
    isVector3: !0,
    set: function(t, e, i) {
        return this.x = t, this.y = e, this.z = i, this
    },
    setScalar: function(t) {
        return this.x = t, this.y = t, this.z = t, this
    },
    setX: function(t) {
        return this.x = t, this
    },
    setY: function(t) {
        return this.y = t, this
    },
    setZ: function(t) {
        return this.z = t, this
    },
    setComponent: function(t, e) {
        switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
        }
        return this
    },
    getComponent: function(t) {
        switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
        }
    },
    clone: function() {
        return new this.constructor(this.x, this.y, this.z)
    },
    copy: function(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this
    },
    add: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
    },
    addScalar: function(t) {
        return this.x += t, this.y += t, this.z += t, this
    },
    addVectors: function(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
    },
    addScaledVector: function(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
    },
    sub: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
    },
    subScalar: function(t) {
        return this.x -= t, this.y -= t, this.z -= t, this
    },
    subVectors: function(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
    },
    multiply: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
    },
    multiplyScalar: function(t) {
        return this.x *= t, this.y *= t, this.z *= t, this
    },
    multiplyVectors: function(t, e) {
        return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
    },
    applyEuler: function(t) {
        return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(b.setFromEuler(t))
    },
    applyAxisAngle: function(t, e) {
        return this.applyQuaternion(b.setFromAxisAngle(t, e))
    },
    applyMatrix3: function(t) {
        var e = this.x,
            i = this.y,
            n = this.z,
            r = t.elements;
        return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
    },
    applyNormalMatrix: function(t) {
        return this.applyMatrix3(t).normalize()
    },
    applyMatrix4: function(t) {
        var e = this.x,
            i = this.y,
            n = this.z,
            r = t.elements,
            a = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
        return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * a, this
    },
    applyQuaternion: function(t) {
        var e = this.x,
            i = this.y,
            n = this.z,
            r = t.x,
            a = t.y,
            o = t.z,
            s = t.w,
            c = s * e + a * n - o * i,
            h = s * i + o * e - r * n,
            l = s * n + r * i - a * e,
            u = -r * e - a * i - o * n;
        return this.x = c * s + u * -r + h * -o - l * -a, this.y = h * s + u * -a + l * -r - c * -o, this.z = l * s + u * -o + c * -a - h * -r, this
    },
    project: function(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
    },
    unproject: function(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
    },
    transformDirection: function(t) {
        var e = this.x,
            i = this.y,
            n = this.z,
            r = t.elements;
        return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
    },
    divide: function(t) {
        return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
    },
    divideScalar: function(t) {
        return this.multiplyScalar(1 / t)
    },
    min: function(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
    },
    max: function(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
    },
    clamp: function(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
    },
    clampScalar: function(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
    },
    clampLength: function(t, e) {
        var i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    },
    round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    },
    roundToZero: function() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    },
    negate: function() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    },
    dot: function(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    manhattanLength: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
        return this.divideScalar(this.length() || 1)
    },
    setLength: function(t) {
        return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
    },
    lerpVectors: function(t, e, i) {
        return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    cross: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
    },
    crossVectors: function(t, e) {
        var i = t.x,
            n = t.y,
            r = t.z,
            a = e.x,
            o = e.y,
            s = e.z;
        return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this
    },
    projectOnVector: function(t) {
        var e = t.lengthSq();
        if (0 === e) return this.set(0, 0, 0);
        var i = t.dot(this) / e;
        return this.copy(t).multiplyScalar(i)
    },
    projectOnPlane: function(t) {
        return x.copy(this).projectOnVector(t), this.sub(x)
    },
    reflect: function(t) {
        return this.sub(x.copy(t).multiplyScalar(2 * this.dot(t)))
    },
    angleTo: function(t) {
        var e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (0 === e) return Math.PI / 2;
        var i = this.dot(t) / e;
        return Math.acos(h.clamp(i, -1, 1))
    },
    distanceTo: function(t) {
        return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
        var e = this.x - t.x,
            i = this.y - t.y,
            n = this.z - t.z;
        return e * e + i * i + n * n
    },
    manhattanDistanceTo: function(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    },
    setFromSpherical: function(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
    },
    setFromSphericalCoords: function(t, e, i) {
        var n = Math.sin(e) * t;
        return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this
    },
    setFromCylindrical: function(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
    },
    setFromCylindricalCoords: function(t, e, i) {
        return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
    },
    setFromMatrixPosition: function(t) {
        var e = t.elements;
        return this.x = e[12], this.y = e[13], this.z = e[14], this
    },
    setFromMatrixScale: function(t) {
        var e = this.setFromMatrixColumn(t, 0).length(),
            i = this.setFromMatrixColumn(t, 1).length(),
            n = this.setFromMatrixColumn(t, 2).length();
        return this.x = e, this.y = i, this.z = n, this
    },
    setFromMatrixColumn: function(t, e) {
        return this.fromArray(t.elements, 4 * e)
    },
    setFromMatrix3Column: function(t, e) {
        return this.fromArray(t.elements, 3 * e)
    },
    equals: function(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z
    },
    fromArray: function(t, e) {
        return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
    },
    toArray: function(t, e) {
        return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
    },
    fromBufferAttribute: function(t, e, i) {
        return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
    },
    random: function() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
    }
});
var w = new _,
    M = new R,
    S = new _(0, 0, 0),
    T = new _(1, 1, 1),
    E = new _,
    A = new _,
    L = new _;

function R() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
}
Object.assign(R.prototype, {
    isMatrix4: !0,
    set: function(t, e, i, n, r, a, o, s, c, h, l, u, d, p, f, m) {
        var g = this.elements;
        return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = h, g[10] = l, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    clone: function() {
        return (new R).fromArray(this.elements)
    },
    copy: function(t) {
        var e = this.elements,
            i = t.elements;
        return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
    },
    copyPosition: function(t) {
        var e = this.elements,
            i = t.elements;
        return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
    },
    extractBasis: function(t, e, i) {
        return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
    },
    makeBasis: function(t, e, i) {
        return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
    },
    extractRotation: function(t) {
        var e = this.elements,
            i = t.elements,
            n = 1 / w.setFromMatrixColumn(t, 0).length(),
            r = 1 / w.setFromMatrixColumn(t, 1).length(),
            a = 1 / w.setFromMatrixColumn(t, 2).length();
        return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * a, e[9] = i[9] * a, e[10] = i[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    },
    makeRotationFromEuler: function(t) {
        t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var e = this.elements,
            i = t.x,
            n = t.y,
            r = t.z,
            a = Math.cos(i),
            o = Math.sin(i),
            s = Math.cos(n),
            c = Math.sin(n),
            h = Math.cos(r),
            l = Math.sin(r);
        if ("XYZ" === t.order) {
            var u = a * h,
                d = a * l,
                p = o * h,
                f = o * l;
            e[0] = s * h, e[4] = -s * l, e[8] = c, e[1] = d + p * c, e[5] = u - f * c, e[9] = -o * s, e[2] = f - u * c, e[6] = p + d * c, e[10] = a * s
        } else if ("YXZ" === t.order) {
            var m = s * h,
                g = s * l,
                v = c * h,
                y = c * l;
            e[0] = m + y * o, e[4] = v * o - g, e[8] = a * c, e[1] = a * l, e[5] = a * h, e[9] = -o, e[2] = g * o - v, e[6] = y + m * o, e[10] = a * s
        } else if ("ZXY" === t.order) {
            m = s * h, g = s * l, v = c * h, y = c * l;
            e[0] = m - y * o, e[4] = -a * l, e[8] = v + g * o, e[1] = g + v * o, e[5] = a * h, e[9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s
        } else if ("ZYX" === t.order) {
            u = a * h, d = a * l, p = o * h, f = o * l;
            e[0] = s * h, e[4] = p * c - d, e[8] = u * c + f, e[1] = s * l, e[5] = f * c + u, e[9] = d * c - p, e[2] = -c, e[6] = o * s, e[10] = a * s
        } else if ("YZX" === t.order) {
            var x = a * s,
                b = a * c,
                _ = o * s,
                w = o * c;
            e[0] = s * h, e[4] = w - x * l, e[8] = _ * l + b, e[1] = l, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = b * l + _, e[10] = x - w * l
        } else if ("XZY" === t.order) {
            x = a * s, b = a * c, _ = o * s, w = o * c;
            e[0] = s * h, e[4] = -l, e[8] = c * h, e[1] = x * l + w, e[5] = a * h, e[9] = b * l - _, e[2] = _ * l - b, e[6] = o * h, e[10] = w * l + x
        }
        return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    },
    makeRotationFromQuaternion: function(t) {
        return this.compose(S, t, T)
    },
    lookAt: function(t, e, i) {
        var n = this.elements;
        return L.subVectors(t, e), 0 === L.lengthSq() && (L.z = 1), L.normalize(), E.crossVectors(i, L), 0 === E.lengthSq() && (1 === Math.abs(i.z) ? L.x += 1e-4 : L.z += 1e-4, L.normalize(), E.crossVectors(i, L)), E.normalize(), A.crossVectors(L, E), n[0] = E.x, n[4] = A.x, n[8] = L.x, n[1] = E.y, n[5] = A.y, n[9] = L.y, n[2] = E.z, n[6] = A.z, n[10] = L.z, this
    },
    multiply: function(t, e) {
        return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
    },
    premultiply: function(t) {
        return this.multiplyMatrices(t, this)
    },
    multiplyMatrices: function(t, e) {
        var i = t.elements,
            n = e.elements,
            r = this.elements,
            a = i[0],
            o = i[4],
            s = i[8],
            c = i[12],
            h = i[1],
            l = i[5],
            u = i[9],
            d = i[13],
            p = i[2],
            f = i[6],
            m = i[10],
            g = i[14],
            v = i[3],
            y = i[7],
            x = i[11],
            b = i[15],
            _ = n[0],
            w = n[4],
            M = n[8],
            S = n[12],
            T = n[1],
            E = n[5],
            A = n[9],
            L = n[13],
            R = n[2],
            P = n[6],
            C = n[10],
            O = n[14],
            I = n[3],
            D = n[7],
            N = n[11],
            z = n[15];
        return r[0] = a * _ + o * T + s * R + c * I, r[4] = a * w + o * E + s * P + c * D, r[8] = a * M + o * A + s * C + c * N, r[12] = a * S + o * L + s * O + c * z, r[1] = h * _ + l * T + u * R + d * I, r[5] = h * w + l * E + u * P + d * D, r[9] = h * M + l * A + u * C + d * N, r[13] = h * S + l * L + u * O + d * z, r[2] = p * _ + f * T + m * R + g * I, r[6] = p * w + f * E + m * P + g * D, r[10] = p * M + f * A + m * C + g * N, r[14] = p * S + f * L + m * O + g * z, r[3] = v * _ + y * T + x * R + b * I, r[7] = v * w + y * E + x * P + b * D, r[11] = v * M + y * A + x * C + b * N, r[15] = v * S + y * L + x * O + b * z, this
    },
    multiplyScalar: function(t) {
        var e = this.elements;
        return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
    },
    determinant: function() {
        var t = this.elements,
            e = t[0],
            i = t[4],
            n = t[8],
            r = t[12],
            a = t[1],
            o = t[5],
            s = t[9],
            c = t[13],
            h = t[2],
            l = t[6],
            u = t[10],
            d = t[14];
        return t[3] * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * d - i * s * d) + t[7] * (+e * s * d - e * c * u + r * a * u - n * a * d + n * c * h - r * s * h) + t[11] * (+e * c * l - e * o * d - r * a * l + i * a * d + r * o * h - i * c * h) + t[15] * (-n * o * h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h)
    },
    transpose: function() {
        var t, e = this.elements;
        return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
    },
    setPosition: function(t, e, i) {
        var n = this.elements;
        return t.isVector3 ? (n[12] = t.x, n[13] = t.y, n[14] = t.z) : (n[12] = t, n[13] = e, n[14] = i), this
    },
    getInverse: function(t, e) {
        void 0 !== e && console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
        var i = this.elements,
            n = t.elements,
            r = n[0],
            a = n[1],
            o = n[2],
            s = n[3],
            c = n[4],
            h = n[5],
            l = n[6],
            u = n[7],
            d = n[8],
            p = n[9],
            f = n[10],
            m = n[11],
            g = n[12],
            v = n[13],
            y = n[14],
            x = n[15],
            b = p * y * u - v * f * u + v * l * m - h * y * m - p * l * x + h * f * x,
            _ = g * f * u - d * y * u - g * l * m + c * y * m + d * l * x - c * f * x,
            w = d * v * u - g * p * u + g * h * m - c * v * m - d * h * x + c * p * x,
            M = g * p * l - d * v * l - g * h * f + c * v * f + d * h * y - c * p * y,
            S = r * b + a * _ + o * w + s * M;
        if (0 === S) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var T = 1 / S;
        return i[0] = b * T, i[1] = (v * f * s - p * y * s - v * o * m + a * y * m + p * o * x - a * f * x) * T, i[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * T, i[3] = (p * l * s - h * f * s - p * o * u + a * f * u + h * o * m - a * l * m) * T, i[4] = _ * T, i[5] = (d * y * s - g * f * s + g * o * m - r * y * m - d * o * x + r * f * x) * T, i[6] = (g * l * s - c * y * s - g * o * u + r * y * u + c * o * x - r * l * x) * T, i[7] = (c * f * s - d * l * s + d * o * u - r * f * u - c * o * m + r * l * m) * T, i[8] = w * T, i[9] = (g * p * s - d * v * s - g * a * m + r * v * m + d * a * x - r * p * x) * T, i[10] = (c * v * s - g * h * s + g * a * u - r * v * u - c * a * x + r * h * x) * T, i[11] = (d * h * s - c * p * s - d * a * u + r * p * u + c * a * m - r * h * m) * T, i[12] = M * T, i[13] = (d * v * o - g * p * o + g * a * f - r * v * f - d * a * y + r * p * y) * T, i[14] = (g * h * o - c * v * o - g * a * l + r * v * l + c * a * y - r * h * y) * T, i[15] = (c * p * o - d * h * o + d * a * l - r * p * l - c * a * f + r * h * f) * T, this
    },
    scale: function(t) {
        var e = this.elements,
            i = t.x,
            n = t.y,
            r = t.z;
        return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
    },
    getMaxScaleOnAxis: function() {
        var t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, i, n))
    },
    makeTranslation: function(t, e, i) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
    },
    makeRotationX: function(t) {
        var e = Math.cos(t),
            i = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function(t) {
        var e = Math.cos(t),
            i = Math.sin(t);
        return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function(t) {
        var e = Math.cos(t),
            i = Math.sin(t);
        return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function(t, e) {
        var i = Math.cos(e),
            n = Math.sin(e),
            r = 1 - i,
            a = t.x,
            o = t.y,
            s = t.z,
            c = r * a,
            h = r * o;
        return this.set(c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h * s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1), this
    },
    makeScale: function(t, e, i) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
    },
    makeShear: function(t, e, i) {
        return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
    },
    compose: function(t, e, i) {
        var n = this.elements,
            r = e._x,
            a = e._y,
            o = e._z,
            s = e._w,
            c = r + r,
            h = a + a,
            l = o + o,
            u = r * c,
            d = r * h,
            p = r * l,
            f = a * h,
            m = a * l,
            g = o * l,
            v = s * c,
            y = s * h,
            x = s * l,
            b = i.x,
            _ = i.y,
            w = i.z;
        return n[0] = (1 - (f + g)) * b, n[1] = (d + x) * b, n[2] = (p - y) * b, n[3] = 0, n[4] = (d - x) * _, n[5] = (1 - (u + g)) * _, n[6] = (m + v) * _, n[7] = 0, n[8] = (p + y) * w, n[9] = (m - v) * w, n[10] = (1 - (u + f)) * w, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
    },
    decompose: function(t, e, i) {
        var n = this.elements,
            r = w.set(n[0], n[1], n[2]).length(),
            a = w.set(n[4], n[5], n[6]).length(),
            o = w.set(n[8], n[9], n[10]).length();
        this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], M.copy(this);
        var s = 1 / r,
            c = 1 / a,
            h = 1 / o;
        return M.elements[0] *= s, M.elements[1] *= s, M.elements[2] *= s, M.elements[4] *= c, M.elements[5] *= c, M.elements[6] *= c, M.elements[8] *= h, M.elements[9] *= h, M.elements[10] *= h, e.setFromRotationMatrix(M), i.x = r, i.y = a, i.z = o, this
    },
    makePerspective: function(t, e, i, n, r, a) {
        void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        var o = this.elements,
            s = 2 * r / (e - t),
            c = 2 * r / (i - n),
            h = (e + t) / (e - t),
            l = (i + n) / (i - n),
            u = -(a + r) / (a - r),
            d = -2 * a * r / (a - r);
        return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
    },
    makeOrthographic: function(t, e, i, n, r, a) {
        var o = this.elements,
            s = 1 / (e - t),
            c = 1 / (i - n),
            h = 1 / (a - r),
            l = (e + t) * s,
            u = (i + n) * c,
            d = (a + r) * h;
        return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
    },
    equals: function(t) {
        for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
            if (e[n] !== i[n]) return !1;
        return !0
    },
    fromArray: function(t, e) {
        void 0 === e && (e = 0);
        for (var i = 0; i < 16; i++) this.elements[i] = t[i + e];
        return this
    },
    toArray: function(t, e) {
        void 0 === t && (t = []), void 0 === e && (e = 0);
        var i = this.elements;
        return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
    }
});
var P = new R,
    C = new y;

function O(t, e, i, n) {
    this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || O.DefaultOrder
}

function I() {
    this.mask = 1
}
O.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], O.DefaultOrder = "XYZ", Object.defineProperties(O.prototype, {
    x: {
        get: function() {
            return this._x
        },
        set: function(t) {
            this._x = t, this._onChangeCallback()
        }
    },
    y: {
        get: function() {
            return this._y
        },
        set: function(t) {
            this._y = t, this._onChangeCallback()
        }
    },
    z: {
        get: function() {
            return this._z
        },
        set: function(t) {
            this._z = t, this._onChangeCallback()
        }
    },
    order: {
        get: function() {
            return this._order
        },
        set: function(t) {
            this._order = t, this._onChangeCallback()
        }
    }
}), Object.assign(O.prototype, {
    isEuler: !0,
    set: function(t, e, i, n) {
        return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this._onChangeCallback(), this
    },
    clone: function() {
        return new this.constructor(this._x, this._y, this._z, this._order)
    },
    copy: function(t) {
        return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
    },
    setFromRotationMatrix: function(t, e, i) {
        var n = h.clamp,
            r = t.elements,
            a = r[0],
            o = r[4],
            s = r[8],
            c = r[1],
            l = r[5],
            u = r[9],
            d = r[2],
            p = r[6],
            f = r[10];
        switch (e = e || this._order) {
            case "XYZ":
                this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, l), this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-n(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(s, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, a), this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .9999999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, a));
                break;
            case "ZYX":
                this._y = Math.asin(-n(d, -1, 1)), Math.abs(d) < .9999999 ? (this._x = Math.atan2(p, f), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, l));
                break;
            case "YZX":
                this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, a)) : (this._x = 0, this._y = Math.atan2(s, f));
                break;
            case "XZY":
                this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, f), this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
        }
        return this._order = e, !1 !== i && this._onChangeCallback(), this
    },
    setFromQuaternion: function(t, e, i) {
        return P.makeRotationFromQuaternion(t), this.setFromRotationMatrix(P, e, i)
    },
    setFromVector3: function(t, e) {
        return this.set(t.x, t.y, t.z, e || this._order)
    },
    reorder: function(t) {
        return C.setFromEuler(this), this.setFromQuaternion(C, t)
    },
    equals: function(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    },
    fromArray: function(t) {
        return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
    },
    toArray: function(t, e) {
        return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
    },
    toVector3: function(t) {
        return t ? t.set(this._x, this._y, this._z) : new _(this._x, this._y, this._z)
    },
    _onChange: function(t) {
        return this._onChangeCallback = t, this
    },
    _onChangeCallback: function() {}
}), Object.assign(I.prototype, {
    set: function(t) {
        this.mask = 1 << t | 0
    },
    enable: function(t) {
        this.mask |= 1 << t | 0
    },
    enableAll: function() {
        this.mask = -1
    },
    toggle: function(t) {
        this.mask ^= 1 << t | 0
    },
    disable: function(t) {
        this.mask &= ~(1 << t | 0)
    },
    disableAll: function() {
        this.mask = 0
    },
    test: function(t) {
        return 0 != (this.mask & t.mask)
    }
});
var D = 0,
    N = new _,
    z = new y,
    U = new R,
    F = new _,
    B = new _,
    G = new _,
    H = new y,
    k = new _(1, 0, 0),
    V = new _(0, 1, 0),
    j = new _(0, 0, 1),
    W = {
        type: "added"
    },
    q = {
        type: "removed"
    };

function X() {
    Object.defineProperty(this, "id", {
        value: D++
    }), this.uuid = h.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = X.DefaultUp.clone();
    var t = new _,
        e = new O,
        i = new y,
        n = new _(1, 1, 1);
    e._onChange((function() {
        i.setFromEuler(e, !1)
    })), i._onChange((function() {
        e.setFromQuaternion(i, void 0, !1)
    })), Object.defineProperties(this, {
        position: {
            configurable: !0,
            enumerable: !0,
            value: t
        },
        rotation: {
            configurable: !0,
            enumerable: !0,
            value: e
        },
        quaternion: {
            configurable: !0,
            enumerable: !0,
            value: i
        },
        scale: {
            configurable: !0,
            enumerable: !0,
            value: n
        },
        modelViewMatrix: {
            value: new R
        },
        normalMatrix: {
            value: new u
        }
    }), this.matrix = new R, this.matrixWorld = new R, this.matrixAutoUpdate = X.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new I, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
}

function Y() {
    X.call(this), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
    }))
}
X.DefaultUp = new _(0, 1, 0), X.DefaultMatrixAutoUpdate = !0, X.prototype = Object.assign(Object.create(a.prototype), {
    constructor: X,
    isObject3D: !0,
    onBeforeRender: function() {},
    onAfterRender: function() {},
    applyMatrix4: function(t) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    applyQuaternion: function(t) {
        return this.quaternion.premultiply(t), this
    },
    setRotationFromAxisAngle: function(t, e) {
        this.quaternion.setFromAxisAngle(t, e)
    },
    setRotationFromEuler: function(t) {
        this.quaternion.setFromEuler(t, !0)
    },
    setRotationFromMatrix: function(t) {
        this.quaternion.setFromRotationMatrix(t)
    },
    setRotationFromQuaternion: function(t) {
        this.quaternion.copy(t)
    },
    rotateOnAxis: function(t, e) {
        return z.setFromAxisAngle(t, e), this.quaternion.multiply(z), this
    },
    rotateOnWorldAxis: function(t, e) {
        return z.setFromAxisAngle(t, e), this.quaternion.premultiply(z), this
    },
    rotateX: function(t) {
        return this.rotateOnAxis(k, t)
    },
    rotateY: function(t) {
        return this.rotateOnAxis(V, t)
    },
    rotateZ: function(t) {
        return this.rotateOnAxis(j, t)
    },
    translateOnAxis: function(t, e) {
        return N.copy(t).applyQuaternion(this.quaternion), this.position.add(N.multiplyScalar(e)), this
    },
    translateX: function(t) {
        return this.translateOnAxis(k, t)
    },
    translateY: function(t) {
        return this.translateOnAxis(V, t)
    },
    translateZ: function(t) {
        return this.translateOnAxis(j, t)
    },
    localToWorld: function(t) {
        return t.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function(t) {
        return t.applyMatrix4(U.getInverse(this.matrixWorld))
    },
    lookAt: function(t, e, i) {
        t.isVector3 ? F.copy(t) : F.set(t, e, i);
        var n = this.parent;
        this.updateWorldMatrix(!0, !1), B.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? U.lookAt(B, F, this.up) : U.lookAt(F, B, this.up), this.quaternion.setFromRotationMatrix(U), n && (U.extractRotation(n.matrixWorld), z.setFromRotationMatrix(U), this.quaternion.premultiply(z.inverse()))
    },
    add: function(t) {
        if (arguments.length > 1) {
            for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
            return this
        }
        return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(W)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
    },
    remove: function(t) {
        if (arguments.length > 1) {
            for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
            return this
        }
        var i = this.children.indexOf(t);
        return -1 !== i && (t.parent = null, this.children.splice(i, 1), t.dispatchEvent(q)), this
    },
    attach: function(t) {
        return this.updateWorldMatrix(!0, !1), U.getInverse(this.matrixWorld), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), U.multiply(t.parent.matrixWorld)), t.applyMatrix4(U), t.updateWorldMatrix(!1, !1), this.add(t), this
    },
    getObjectById: function(t) {
        return this.getObjectByProperty("id", t)
    },
    getObjectByName: function(t) {
        return this.getObjectByProperty("name", t)
    },
    getObjectByProperty: function(t, e) {
        if (this[t] === e) return this;
        for (var i = 0, n = this.children.length; i < n; i++) {
            var r = this.children[i].getObjectByProperty(t, e);
            if (void 0 !== r) return r
        }
    },
    getWorldPosition: function(t) {
        return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new _), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function(t) {
        return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new y), this.updateMatrixWorld(!0), this.matrixWorld.decompose(B, t, G), t
    },
    getWorldScale: function(t) {
        return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new _), this.updateMatrixWorld(!0), this.matrixWorld.decompose(B, H, t), t
    },
    getWorldDirection: function(t) {
        void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new _), this.updateMatrixWorld(!0);
        var e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize()
    },
    raycast: function() {},
    traverse: function(t) {
        t(this);
        for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t)
    },
    traverseVisible: function(t) {
        if (!1 !== this.visible) {
            t(this);
            for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
        }
    },
    traverseAncestors: function(t) {
        var e = this.parent;
        null !== e && (t(e), e.traverseAncestors(t))
    },
    updateMatrix: function() {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
        for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
    },
    updateWorldMatrix: function(t, e) {
        var i = this.parent;
        if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
            for (var n = this.children, r = 0, a = n.length; r < a; r++) n[r].updateWorldMatrix(!1, !0)
    },
    toJSON: function(t) {
        var e = void 0 === t || "string" == typeof t,
            i = {};
        e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {}
        }, i.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        var n = {};

        function r(e, i) {
            return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
        }
        if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
            n.geometry = r(t.geometries, this.geometry);
            var a = this.geometry.parameters;
            if (void 0 !== a && void 0 !== a.shapes) {
                var o = a.shapes;
                if (Array.isArray(o))
                    for (var s = 0, c = o.length; s < c; s++) {
                        var h = o[s];
                        r(t.shapes, h)
                    } else r(t.shapes, o)
            }
        }
        if (void 0 !== this.material)
            if (Array.isArray(this.material)) {
                var l = [];
                for (s = 0, c = this.material.length; s < c; s++) l.push(r(t.materials, this.material[s]));
                n.material = l
            } else n.material = r(t.materials, this.material);
        if (this.children.length > 0) {
            n.children = [];
            for (s = 0; s < this.children.length; s++) n.children.push(this.children[s].toJSON(t).object)
        }
        if (e) {
            var u = m(t.geometries),
                d = m(t.materials),
                p = m(t.textures),
                f = m(t.images);
            o = m(t.shapes);
            u.length > 0 && (i.geometries = u), d.length > 0 && (i.materials = d), p.length > 0 && (i.textures = p), f.length > 0 && (i.images = f), o.length > 0 && (i.shapes = o)
        }
        return i.object = n, i;

        function m(t) {
            var e = [];
            for (var i in t) {
                var n = t[i];
                delete n.metadata, e.push(n)
            }
            return e
        }
    },
    clone: function(t) {
        return (new this.constructor).copy(this, t)
    },
    copy: function(t, e) {
        if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
            for (var i = 0; i < t.children.length; i++) {
                var n = t.children[i];
                this.add(n.clone())
            }
        return this
    }
}), Y.prototype = Object.assign(Object.create(X.prototype), {
    constructor: Y,
    isScene: !0,
    copy: function(t, e) {
        return X.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
    },
    toJSON: function(t) {
        var e = X.prototype.toJSON.call(this, t);
        return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
});
var Z = [new _, new _, new _, new _, new _, new _, new _, new _],
    J = new _,
    Q = new ct,
    K = new _,
    $ = new _,
    tt = new _,
    et = new _,
    it = new _,
    nt = new _,
    rt = new _,
    at = new _,
    ot = new _,
    st = new _;

function ct(t, e) {
    this.min = void 0 !== t ? t : new _(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new _(-1 / 0, -1 / 0, -1 / 0)
}

function ht(t, e, i, n, r) {
    var a, o;
    for (a = 0, o = t.length - 3; a <= o; a += 3) {
        st.fromArray(t, a);
        var s = r.x * Math.abs(st.x) + r.y * Math.abs(st.y) + r.z * Math.abs(st.z),
            c = e.dot(st),
            h = i.dot(st),
            l = n.dot(st);
        if (Math.max(-Math.max(c, h, l), Math.min(c, h, l)) > s) return !1
    }
    return !0
}
Object.assign(ct.prototype, {
    isBox3: !0,
    set: function(t, e) {
        return this.min.copy(t), this.max.copy(e), this
    },
    setFromArray: function(t) {
        for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
            var h = t[s],
                l = t[s + 1],
                u = t[s + 2];
            h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
        }
        return this.min.set(e, i, n), this.max.set(r, a, o), this
    },
    setFromBufferAttribute: function(t) {
        for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
            var h = t.getX(s),
                l = t.getY(s),
                u = t.getZ(s);
            h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
        }
        return this.min.set(e, i, n), this.max.set(r, a, o), this
    },
    setFromPoints: function(t) {
        this.makeEmpty();
        for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
        return this
    },
    setFromCenterAndSize: function(t, e) {
        var i = J.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
    },
    setFromObject: function(t) {
        return this.makeEmpty(), this.expandByObject(t)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    getCenter: function(t) {
        return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new _), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(t) {
        return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new _), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    },
    expandByPoint: function(t) {
        return this.min.min(t), this.max.max(t), this
    },
    expandByVector: function(t) {
        return this.min.sub(t), this.max.add(t), this
    },
    expandByScalar: function(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this
    },
    expandByObject: function(t) {
        t.updateWorldMatrix(!1, !1);
        var e = t.geometry;
        void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Q.copy(e.boundingBox), Q.applyMatrix4(t.matrixWorld), this.union(Q));
        for (var i = t.children, n = 0, r = i.length; n < r; n++) this.expandByObject(i[n]);
        return this
    },
    containsPoint: function(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
    },
    containsBox: function(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    },
    getParameter: function(t, e) {
        return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new _), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    },
    intersectsBox: function(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
    },
    intersectsSphere: function(t) {
        return this.clampPoint(t.center, J), J.distanceToSquared(t.center) <= t.radius * t.radius
    },
    intersectsPlane: function(t) {
        var e, i;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
    },
    intersectsTriangle: function(t) {
        if (this.isEmpty()) return !1;
        this.getCenter(rt), at.subVectors(this.max, rt), K.subVectors(t.a, rt), $.subVectors(t.b, rt), tt.subVectors(t.c, rt), et.subVectors($, K), it.subVectors(tt, $), nt.subVectors(K, tt);
        var e = [0, -et.z, et.y, 0, -it.z, it.y, 0, -nt.z, nt.y, et.z, 0, -et.x, it.z, 0, -it.x, nt.z, 0, -nt.x, -et.y, et.x, 0, -it.y, it.x, 0, -nt.y, nt.x, 0];
        return !!ht(e, K, $, tt, at) && (!!ht(e = [1, 0, 0, 0, 1, 0, 0, 0, 1], K, $, tt, at) && (ot.crossVectors(et, it), ht(e = [ot.x, ot.y, ot.z], K, $, tt, at)))
    },
    clampPoint: function(t, e) {
        return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new _), e.copy(t).clamp(this.min, this.max)
    },
    distanceToPoint: function(t) {
        return J.copy(t).clamp(this.min, this.max).sub(t).length()
    },
    getBoundingSphere: function(t) {
        return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(J).length(), t
    },
    intersect: function(t) {
        return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
    },
    union: function(t) {
        return this.min.min(t.min), this.max.max(t.max), this
    },
    applyMatrix4: function(t) {
        return this.isEmpty() ? this : (Z[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Z[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Z[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Z[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Z[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Z[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Z[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Z[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Z), this)
    },
    translate: function(t) {
        return this.min.add(t), this.max.add(t), this
    },
    equals: function(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
    }
});
var lt = new ct;

function ut(t, e) {
    this.center = void 0 !== t ? t : new _, this.radius = void 0 !== e ? e : -1
}
Object.assign(ut.prototype, {
    set: function(t, e) {
        return this.center.copy(t), this.radius = e, this
    },
    setFromPoints: function(t, e) {
        var i = this.center;
        void 0 !== e ? i.copy(e) : lt.setFromPoints(t).getCenter(i);
        for (var n = 0, r = 0, a = t.length; r < a; r++) n = Math.max(n, i.distanceToSquared(t[r]));
        return this.radius = Math.sqrt(n), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.center.copy(t.center), this.radius = t.radius, this
    },
    isEmpty: function() {
        return this.radius < 0
    },
    makeEmpty: function() {
        return this.center.set(0, 0, 0), this.radius = -1, this
    },
    containsPoint: function(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(t) {
        return t.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(t) {
        var e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e
    },
    intersectsBox: function(t) {
        return t.intersectsSphere(this)
    },
    intersectsPlane: function(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    },
    clampPoint: function(t, e) {
        var i = this.center.distanceToSquared(t);
        return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new _), e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
    },
    getBoundingBox: function(t) {
        return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new ct), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
    },
    applyMatrix4: function(t) {
        return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
    },
    translate: function(t) {
        return this.center.add(t), this
    },
    equals: function(t) {
        return t.center.equals(this.center) && t.radius === this.radius
    }
});
var dt = new _,
    pt = new _,
    ft = new _,
    mt = new _,
    gt = new _,
    vt = new _,
    yt = new _;

function xt(t, e) {
    this.origin = void 0 !== t ? t : new _, this.direction = void 0 !== e ? e : new _(0, 0, -1)
}
Object.assign(xt.prototype, {
    set: function(t, e) {
        return this.origin.copy(t), this.direction.copy(e), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.origin.copy(t.origin), this.direction.copy(t.direction), this
    },
    at: function(t, e) {
        return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new _), e.copy(this.direction).multiplyScalar(t).add(this.origin)
    },
    lookAt: function(t) {
        return this.direction.copy(t).sub(this.origin).normalize(), this
    },
    recast: function(t) {
        return this.origin.copy(this.at(t, dt)), this
    },
    closestPointToPoint: function(t, e) {
        void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new _), e.subVectors(t, this.origin);
        var i = e.dot(this.direction);
        return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
    },
    distanceToPoint: function(t) {
        return Math.sqrt(this.distanceSqToPoint(t))
    },
    distanceSqToPoint: function(t) {
        var e = dt.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (dt.copy(this.direction).multiplyScalar(e).add(this.origin), dt.distanceToSquared(t))
    },
    distanceSqToSegment: function(t, e, i, n) {
        pt.copy(t).add(e).multiplyScalar(.5), ft.copy(e).sub(t).normalize(), mt.copy(this.origin).sub(pt);
        var r, a, o, s, c = .5 * t.distanceTo(e),
            h = -this.direction.dot(ft),
            l = mt.dot(this.direction),
            u = -mt.dot(ft),
            d = mt.lengthSq(),
            p = Math.abs(1 - h * h);
        if (p > 0)
            if (a = h * l - u, s = c * p, (r = h * u - l) >= 0)
                if (a >= -s)
                    if (a <= s) {
                        var f = 1 / p;
                        o = (r *= f) * (r + h * (a *= f) + 2 * l) + a * (h * r + a + 2 * u) + d
                    } else a = c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + d;
        else a = -c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + d;
        else a <= -s ? o = -(r = Math.max(0, -(-h * c + l))) * r + (a = r > 0 ? -c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + d : a <= s ? (r = 0, o = (a = Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + d) : o = -(r = Math.max(0, -(h * c + l))) * r + (a = r > 0 ? c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + d;
        else a = h > 0 ? -c : c, o = -(r = Math.max(0, -(h * a + l))) * r + a * (a + 2 * u) + d;
        return i && i.copy(this.direction).multiplyScalar(r).add(this.origin), n && n.copy(ft).multiplyScalar(a).add(pt), o
    },
    intersectSphere: function(t, e) {
        dt.subVectors(t.center, this.origin);
        var i = dt.dot(this.direction),
            n = dt.dot(dt) - i * i,
            r = t.radius * t.radius;
        if (n > r) return null;
        var a = Math.sqrt(r - n),
            o = i - a,
            s = i + a;
        return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e)
    },
    intersectsSphere: function(t) {
        return this.distanceSqToPoint(t.center) <= t.radius * t.radius
    },
    distanceToPlane: function(t) {
        var e = t.normal.dot(this.direction);
        if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
        var i = -(this.origin.dot(t.normal) + t.constant) / e;
        return i >= 0 ? i : null
    },
    intersectPlane: function(t, e) {
        var i = this.distanceToPlane(t);
        return null === i ? null : this.at(i, e)
    },
    intersectsPlane: function(t) {
        var e = t.distanceToPoint(this.origin);
        return 0 === e || t.normal.dot(this.direction) * e < 0
    },
    intersectBox: function(t, e) {
        var i, n, r, a, o, s, c = 1 / this.direction.x,
            h = 1 / this.direction.y,
            l = 1 / this.direction.z,
            u = this.origin;
        return c >= 0 ? (i = (t.min.x - u.x) * c, n = (t.max.x - u.x) * c) : (i = (t.max.x - u.x) * c, n = (t.min.x - u.x) * c), h >= 0 ? (r = (t.min.y - u.y) * h, a = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), i > a || r > n ? null : ((r > i || i != i) && (i = r), (a < n || n != n) && (n = a), l >= 0 ? (o = (t.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l, s = (t.min.z - u.z) * l), i > s || o > n ? null : ((o > i || i != i) && (i = o), (s < n || n != n) && (n = s), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
    },
    intersectsBox: function(t) {
        return null !== this.intersectBox(t, dt)
    },
    intersectTriangle: function(t, e, i, n, r) {
        gt.subVectors(e, t), vt.subVectors(i, t), yt.crossVectors(gt, vt);
        var a, o = this.direction.dot(yt);
        if (o > 0) {
            if (n) return null;
            a = 1
        } else {
            if (!(o < 0)) return null;
            a = -1, o = -o
        }
        mt.subVectors(this.origin, t);
        var s = a * this.direction.dot(vt.crossVectors(mt, vt));
        if (s < 0) return null;
        var c = a * this.direction.dot(gt.cross(mt));
        if (c < 0) return null;
        if (s + c > o) return null;
        var h = -a * mt.dot(yt);
        return h < 0 ? null : this.at(h / o, r)
    },
    applyMatrix4: function(t) {
        return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    },
    equals: function(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }
});
var bt = new _,
    _t = new _,
    wt = new u;

function Mt(t, e) {
    this.normal = void 0 !== t ? t : new _(1, 0, 0), this.constant = void 0 !== e ? e : 0
}
Object.assign(Mt.prototype, {
    isPlane: !0,
    set: function(t, e) {
        return this.normal.copy(t), this.constant = e, this
    },
    setComponents: function(t, e, i, n) {
        return this.normal.set(t, e, i), this.constant = n, this
    },
    setFromNormalAndCoplanarPoint: function(t, e) {
        return this.normal.copy(t), this.constant = -e.dot(this.normal), this
    },
    setFromCoplanarPoints: function(t, e, i) {
        var n = bt.subVectors(i, e).cross(_t.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(n, t), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.normal.copy(t.normal), this.constant = t.constant, this
    },
    normalize: function() {
        var t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t), this.constant *= t, this
    },
    negate: function() {
        return this.constant *= -1, this.normal.negate(), this
    },
    distanceToPoint: function(t) {
        return this.normal.dot(t) + this.constant
    },
    distanceToSphere: function(t) {
        return this.distanceToPoint(t.center) - t.radius
    },
    projectPoint: function(t, e) {
        return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new _), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
    },
    intersectLine: function(t, e) {
        void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new _);
        var i = t.delta(bt),
            n = this.normal.dot(i);
        if (0 === n) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
        var r = -(t.start.dot(this.normal) + this.constant) / n;
        return r < 0 || r > 1 ? void 0 : e.copy(i).multiplyScalar(r).add(t.start)
    },
    intersectsLine: function(t) {
        var e = this.distanceToPoint(t.start),
            i = this.distanceToPoint(t.end);
        return e < 0 && i > 0 || i < 0 && e > 0
    },
    intersectsBox: function(t) {
        return t.intersectsPlane(this)
    },
    intersectsSphere: function(t) {
        return t.intersectsPlane(this)
    },
    coplanarPoint: function(t) {
        return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new _), t.copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function(t, e) {
        var i = e || wt.getNormalMatrix(t),
            n = this.coplanarPoint(bt).applyMatrix4(t),
            r = this.normal.applyMatrix3(i).normalize();
        return this.constant = -n.dot(r), this
    },
    translate: function(t) {
        return this.constant -= t.dot(this.normal), this
    },
    equals: function(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant
    }
});
var St = new _,
    Tt = new _,
    Et = new _,
    At = new _,
    Lt = new _,
    Rt = new _,
    Pt = new _,
    Ct = new _,
    Ot = new _,
    It = new _;

function Dt(t, e, i) {
    this.a = void 0 !== t ? t : new _, this.b = void 0 !== e ? e : new _, this.c = void 0 !== i ? i : new _
}
Object.assign(Dt, {
    getNormal: function(t, e, i, n) {
        void 0 === n && (console.warn("THREE.Triangle: .getNormal() target is now required"), n = new _), n.subVectors(i, e), St.subVectors(t, e), n.cross(St);
        var r = n.lengthSq();
        return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
    },
    getBarycoord: function(t, e, i, n, r) {
        St.subVectors(n, e), Tt.subVectors(i, e), Et.subVectors(t, e);
        var a = St.dot(St),
            o = St.dot(Tt),
            s = St.dot(Et),
            c = Tt.dot(Tt),
            h = Tt.dot(Et),
            l = a * c - o * o;
        if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new _), 0 === l) return r.set(-2, -1, -1);
        var u = 1 / l,
            d = (c * s - o * h) * u,
            p = (a * h - o * s) * u;
        return r.set(1 - d - p, p, d)
    },
    containsPoint: function(t, e, i, n) {
        return Dt.getBarycoord(t, e, i, n, At), At.x >= 0 && At.y >= 0 && At.x + At.y <= 1
    },
    getUV: function(t, e, i, n, r, a, o, s) {
        return this.getBarycoord(t, e, i, n, At), s.set(0, 0), s.addScaledVector(r, At.x), s.addScaledVector(a, At.y), s.addScaledVector(o, At.z), s
    },
    isFrontFacing: function(t, e, i, n) {
        return St.subVectors(i, e), Tt.subVectors(t, e), St.cross(Tt).dot(n) < 0
    }
}), Object.assign(Dt.prototype, {
    set: function(t, e, i) {
        return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
    },
    setFromPointsAndIndices: function(t, e, i, n) {
        return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
    },
    getArea: function() {
        return St.subVectors(this.c, this.b), Tt.subVectors(this.a, this.b), .5 * St.cross(Tt).length()
    },
    getMidpoint: function(t) {
        return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new _), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    getNormal: function(t) {
        return Dt.getNormal(this.a, this.b, this.c, t)
    },
    getPlane: function(t) {
        return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Mt), t.setFromCoplanarPoints(this.a, this.b, this.c)
    },
    getBarycoord: function(t, e) {
        return Dt.getBarycoord(t, this.a, this.b, this.c, e)
    },
    getUV: function(t, e, i, n, r) {
        return Dt.getUV(t, this.a, this.b, this.c, e, i, n, r)
    },
    containsPoint: function(t) {
        return Dt.containsPoint(t, this.a, this.b, this.c)
    },
    isFrontFacing: function(t) {
        return Dt.isFrontFacing(this.a, this.b, this.c, t)
    },
    intersectsBox: function(t) {
        return t.intersectsTriangle(this)
    },
    closestPointToPoint: function(t, e) {
        void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new _);
        var i, n, r = this.a,
            a = this.b,
            o = this.c;
        Lt.subVectors(a, r), Rt.subVectors(o, r), Ct.subVectors(t, r);
        var s = Lt.dot(Ct),
            c = Rt.dot(Ct);
        if (s <= 0 && c <= 0) return e.copy(r);
        Ot.subVectors(t, a);
        var h = Lt.dot(Ot),
            l = Rt.dot(Ot);
        if (h >= 0 && l <= h) return e.copy(a);
        var u = s * l - h * c;
        if (u <= 0 && s >= 0 && h <= 0) return i = s / (s - h), e.copy(r).addScaledVector(Lt, i);
        It.subVectors(t, o);
        var d = Lt.dot(It),
            p = Rt.dot(It);
        if (p >= 0 && d <= p) return e.copy(o);
        var f = d * c - s * p;
        if (f <= 0 && c >= 0 && p <= 0) return n = c / (c - p), e.copy(r).addScaledVector(Rt, n);
        var m = h * p - d * l;
        if (m <= 0 && l - h >= 0 && d - p >= 0) return Pt.subVectors(o, a), n = (l - h) / (l - h + (d - p)), e.copy(a).addScaledVector(Pt, n);
        var g = 1 / (m + f + u);
        return i = f * g, n = u * g, e.copy(r).addScaledVector(Lt, i).addScaledVector(Rt, n)
    },
    equals: function(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
});
var Nt = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    },
    zt = {
        h: 0,
        s: 0,
        l: 0
    },
    Ut = {
        h: 0,
        s: 0,
        l: 0
    };

function Ft(t, e, i) {
    return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
}

function Bt(t, e, i) {
    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
}

function Gt(t) {
    return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
}

function Ht(t) {
    return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
}

function kt(t, e, i, n, r, a) {
    this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new _, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new Ft, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
}
Object.assign(Ft.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set: function(t) {
        return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
    },
    setScalar: function(t) {
        return this.r = t, this.g = t, this.b = t, this
    },
    setHex: function(t) {
       
        return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
    },
    setRGB: function(t, e, i) {
        return this.r = t, this.g = e, this.b = i, this
    },
    setHSL: function(t, e, i) {
        if (t = h.euclideanModulo(t, 1), e = h.clamp(e, 0, 1), i = h.clamp(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
        else {
            var n = i <= .5 ? i * (1 + e) : i + e - i * e,
                r = 2 * i - n;
            this.r = Bt(r, n, t + 1 / 3), this.g = Bt(r, n, t), this.b = Bt(r, n, t - 1 / 3)
        }
        return this
    },
    setStyle: function(t) {
        function e(e) {
            void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
        }
        var i;
        if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
            var n, r = i[1],
                a = i[2];
            switch (r) {
                case "rgb":
                case "rgba":
                    if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
                    if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
                    break;
                case "hsl":
                case "hsla":
                    if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                        var o = parseFloat(n[1]) / 360,
                            s = parseInt(n[2], 10) / 100,
                            c = parseInt(n[3], 10) / 100;
                        return e(n[5]), this.setHSL(o, s, c)
                    }
            }
        } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
            var h = i[1],
                l = h.length;
            if (3 === l) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this;
            if (6 === l) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this
        }
        return t && t.length > 0 ? this.setColorName(t) : this
    },
    setColorName: function(t) {
        var e = Nt[t]; 
        return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this
    },
    clone: function() {
        return new this.constructor(this.r, this.g, this.b)
    },
    copy: function(t) {
        return this.r = t.r, this.g = t.g, this.b = t.b, this
    },
    copyGammaToLinear: function(t, e) {
        return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
    },
    copyLinearToGamma: function(t, e) {
        void 0 === e && (e = 2);
        var i = e > 0 ? 1 / e : 1;
        return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
    },
    convertGammaToLinear: function(t) {
        return this.copyGammaToLinear(this, t), this
    },
    convertLinearToGamma: function(t) {
        return this.copyLinearToGamma(this, t), this
    },
    copySRGBToLinear: function(t) {
        return this.r = Gt(t.r), this.g = Gt(t.g), this.b = Gt(t.b), this
    },
    copyLinearToSRGB: function(t) {
        return this.r = Ht(t.r), this.g = Ht(t.g), this.b = Ht(t.b), this
    },
    convertSRGBToLinear: function() {
        return this.copySRGBToLinear(this), this
    },
    convertLinearToSRGB: function() {
        return this.copyLinearToSRGB(this), this
    },
    getHex: function() { 
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },
    getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function(t) {
        void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
            h: 0,
            s: 0,
            l: 0
        });
        var e, i, n = this.r,
            r = this.g,
            a = this.b,
            o = Math.max(n, r, a),
            s = Math.min(n, r, a),
            c = (s + o) / 2;
        if (s === o) e = 0, i = 0;
        else {
            var h = o - s;
            switch (i = c <= .5 ? h / (o + s) : h / (2 - o - s), o) {
                case n:
                    e = (r - a) / h + (r < a ? 6 : 0);
                    break;
                case r:
                    e = (a - n) / h + 2;
                    break;
                case a:
                    e = (n - r) / h + 4
            }
            e /= 6
        }
        return t.h = e, t.s = i, t.l = c, t
    },
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function(t, e, i) {
        return this.getHSL(zt), zt.h += t, zt.s += e, zt.l += i, this.setHSL(zt.h, zt.s, zt.l), this
    },
    add: function(t) {
        return this.r += t.r, this.g += t.g, this.b += t.b, this
    },
    addColors: function(t, e) {
        return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
    },
    addScalar: function(t) {
        return this.r += t, this.g += t, this.b += t, this
    },
    sub: function(t) {
        return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
    },
    multiply: function(t) {
        return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
    },
    multiplyScalar: function(t) {
        return this.r *= t, this.g *= t, this.b *= t, this
    },
    lerp: function(t, e) {
        return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
    },
    lerpHSL: function(t, e) {
        this.getHSL(zt), t.getHSL(Ut);
        var i = h.lerp(zt.h, Ut.h, e),
            n = h.lerp(zt.s, Ut.s, e),
            r = h.lerp(zt.l, Ut.l, e);
        return this.setHSL(i, n, r), this
    },
    equals: function(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b
    },
    fromArray: function(t, e) {
        return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
    },
    toArray: function(t, e) {
        return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
    },
    toJSON: function() {
        return this.getHex()
    }
}), Ft.NAMES = Nt, Object.assign(kt.prototype, {
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
        for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
        for (e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
        return this
    }
});
var Vt = 0;

function jt() {
    Object.defineProperty(this, "id", {
        value: Vt++
    }), this.uuid = h.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
}

function Wt(t) {
    jt.call(this), this.type = "MeshBasicMaterial", this.color = new Ft(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t)
}
jt.prototype = Object.assign(Object.create(a.prototype), {
    constructor: jt,
    isMaterial: !0,
    onBeforeCompile: function() {},
    setValues: function(t) {
        if (void 0 !== t)
            for (var e in t) {
                var i = t[e];
                if (void 0 !== i)
                    if ("shading" !== e) {
                        var n = this[e];
                        void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                    } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
                else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
            }
    },
    toJSON: function(t) {
        var e = void 0 === t || "string" == typeof t;
        e && (t = {
            textures: {},
            images: {}
        });
        var i = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        }; 

        function n(t) {
            var e = [];
            for (var i in t) {
                var n = t[i];
                delete n.metadata, e.push(n)
            }
            return e
        }
        if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.sheen && this.sheen.isColor && (i.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, i.reflectivity = this.reflectivity, i.refractionRatio = this.refractionRatio, void 0 !== this.combine && (i.combine = this.combine), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i.blending = this.blending), !0 === this.flatShading && (i.flatShading = this.flatShading), 0 !== this.side && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (i.morphTargets = !0), !0 === this.morphNormals && (i.morphNormals = !0), !0 === this.skinning && (i.skinning = !0), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e) {
            var r = n(t.textures),
                a = n(t.images);
            r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a)
        }
        return i
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
        var e = t.clippingPlanes,
            i = null;
        if (null !== e) {
            var n = e.length;
            i = new Array(n);
            for (var r = 0; r !== n; ++r) i[r] = e[r].clone()
        }
        return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}), Object.defineProperty(jt.prototype, "needsUpdate", {
    set: function(t) {
        !0 === t && this.version++
    }
}), Wt.prototype = Object.create(jt.prototype), Wt.prototype.constructor = Wt, Wt.prototype.isMeshBasicMaterial = !0, Wt.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
};
var qt = new _;

function Xt(t, e, i) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.usage = 35044, this.updateRange = {
        offset: 0,
        count: -1
    }, this.version = 0
}

function Yt(t, e, i) {
    Xt.call(this, new Int8Array(t), e, i)
}

function Zt(t, e, i) {
    Xt.call(this, new Uint8Array(t), e, i)
}

function Jt(t, e, i) {
    Xt.call(this, new Uint8ClampedArray(t), e, i)
}

function Qt(t, e, i) {
    Xt.call(this, new Int16Array(t), e, i)
}

function Kt(t, e, i) {
    Xt.call(this, new Uint16Array(t), e, i)
}

function $t(t, e, i) {
    Xt.call(this, new Int32Array(t), e, i)
}

function te(t, e, i) {
    Xt.call(this, new Uint32Array(t), e, i)
}

function ee(t, e, i) {
    Xt.call(this, new Float32Array(t), e, i)
}

function ie(t, e, i) {
    Xt.call(this, new Float64Array(t), e, i)
}

function ne() {
    this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
}

function re(t) {
    if (0 === t.length) return -1 / 0;
    for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]);
    return e
}
Object.defineProperty(Xt.prototype, "needsUpdate", {
    set: function(t) {
        !0 === t && this.version++
    }
}), Object.assign(Xt.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function() {},
    setUsage: function(t) {
        return this.usage = t, this
    },
    copy: function(t) {
        return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
    },
    copyAt: function(t, e, i) {
        t *= this.itemSize, i *= e.itemSize;
        for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
        return this
    },
    copyArray: function(t) {
        return this.array.set(t), this
    },
    copyColorsArray: function(t) {
        for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
            var a = t[n];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new Ft), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
        }
        return this
    },
    copyVector2sArray: function(t) {
        for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
            var a = t[n];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), a = new l), e[i++] = a.x, e[i++] = a.y
        }
        return this
    },
    copyVector3sArray: function(t) {
        for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
            var a = t[n];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), a = new _), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z
        }
        return this
    },
    copyVector4sArray: function(t) {
        for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
            var a = t[n];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), a = new m), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w
        }
        return this
    },
    applyMatrix3: function(t) {
        for (var e = 0, i = this.count; e < i; e++) qt.x = this.getX(e), qt.y = this.getY(e), qt.z = this.getZ(e), qt.applyMatrix3(t), this.setXYZ(e, qt.x, qt.y, qt.z);
        return this
    },
    applyMatrix4: function(t) {
        for (var e = 0, i = this.count; e < i; e++) qt.x = this.getX(e), qt.y = this.getY(e), qt.z = this.getZ(e), qt.applyMatrix4(t), this.setXYZ(e, qt.x, qt.y, qt.z);
        return this
    },
    applyNormalMatrix: function(t) {
        for (var e = 0, i = this.count; e < i; e++) qt.x = this.getX(e), qt.y = this.getY(e), qt.z = this.getZ(e), qt.applyNormalMatrix(t), this.setXYZ(e, qt.x, qt.y, qt.z);
        return this
    },
    transformDirection: function(t) {
        for (var e = 0, i = this.count; e < i; e++) qt.x = this.getX(e), qt.y = this.getY(e), qt.z = this.getZ(e), qt.transformDirection(t), this.setXYZ(e, qt.x, qt.y, qt.z);
        return this
    },
    set: function(t, e) {
        return void 0 === e && (e = 0), this.array.set(t, e), this
    },
    getX: function(t) {
        return this.array[t * this.itemSize]
    },
    setX: function(t, e) {
        return this.array[t * this.itemSize] = e, this
    },
    getY: function(t) {
        return this.array[t * this.itemSize + 1]
    },
    setY: function(t, e) {
        return this.array[t * this.itemSize + 1] = e, this
    },
    getZ: function(t) {
        return this.array[t * this.itemSize + 2]
    },
    setZ: function(t, e) {
        return this.array[t * this.itemSize + 2] = e, this
    },
    getW: function(t) {
        return this.array[t * this.itemSize + 3]
    },
    setW: function(t, e) {
        return this.array[t * this.itemSize + 3] = e, this
    },
    setXY: function(t, e, i) {
        return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
    },
    setXYZ: function(t, e, i, n) {
        return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
    },
    setXYZW: function(t, e, i, n, r) {
        return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
    },
    onUpload: function(t) {
        return this.onUploadCallback = t, this
    },
    clone: function() {
        return new this.constructor(this.array, this.itemSize).copy(this)
    },
    toJSON: function() {
        return {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
        }
    }
}), Yt.prototype = Object.create(Xt.prototype), Yt.prototype.constructor = Yt, Zt.prototype = Object.create(Xt.prototype), Zt.prototype.constructor = Zt, Jt.prototype = Object.create(Xt.prototype), Jt.prototype.constructor = Jt, Qt.prototype = Object.create(Xt.prototype), Qt.prototype.constructor = Qt, Kt.prototype = Object.create(Xt.prototype), Kt.prototype.constructor = Kt, $t.prototype = Object.create(Xt.prototype), $t.prototype.constructor = $t, te.prototype = Object.create(Xt.prototype), te.prototype.constructor = te, ee.prototype = Object.create(Xt.prototype), ee.prototype.constructor = ee, ie.prototype = Object.create(Xt.prototype), ie.prototype.constructor = ie, Object.assign(ne.prototype, {
    computeGroups: function(t) {
        for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
            var o = r[a];
            o.materialIndex !== n && (n = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), e = {
                start: 3 * a,
                materialIndex: n
            })
        }
        void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), this.groups = i
    },
    fromGeometry: function(t) {
        var e, i = t.faces,
            n = t.vertices,
            r = t.faceVertexUvs,
            a = r[0] && r[0].length > 0,
            o = r[1] && r[1].length > 0,
            s = t.morphTargets,
            c = s.length;
        if (c > 0) {
            e = [];
            for (var h = 0; h < c; h++) e[h] = {
                name: s[h].name,
                data: []
            };
            this.morphTargets.position = e
        }
        var u, d = t.morphNormals,
            p = d.length;
        if (p > 0) {
            u = [];
            for (h = 0; h < p; h++) u[h] = {
                name: d[h].name,
                data: []
            };
            this.morphTargets.normal = u
        }
        var f = t.skinIndices,
            m = t.skinWeights,
            g = f.length === n.length,
            v = m.length === n.length;
        n.length > 0 && 0 === i.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
        for (h = 0; h < i.length; h++) {
            var y = i[h];
            this.vertices.push(n[y.a], n[y.b], n[y.c]);
            var x = y.vertexNormals;
            if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
            else {
                var b = y.normal;
                this.normals.push(b, b, b)
            }
            var _, w = y.vertexColors;
            if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
            else {
                var M = y.color;
                this.colors.push(M, M, M)
            }
            if (!0 === a) void 0 !== (_ = r[0][h]) ? this.uvs.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new l, new l, new l));
            if (!0 === o) void 0 !== (_ = r[1][h]) ? this.uvs2.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new l, new l, new l));
            for (var S = 0; S < c; S++) {
                var T = s[S].vertices;
                e[S].data.push(T[y.a], T[y.b], T[y.c])
            }
            for (S = 0; S < p; S++) {
                var E = d[S].vertexNormals[h];
                u[S].data.push(E.a, E.b, E.c)
            }
            g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
        }
        return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
    }
});
var ae = 1,
    oe = new R,
    se = new X,
    ce = new _,
    he = new ct,
    le = new ct,
    ue = new _;

function de() {
    Object.defineProperty(this, "id", {
        value: ae += 2
    }), this.uuid = h.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
        start: 0,
        count: 1 / 0
    }, this.userData = {}
}
de.prototype = Object.assign(Object.create(a.prototype), {
    constructor: de,
    isBufferGeometry: !0,
    getIndex: function() {
        return this.index
    },
    setIndex: function(t) {
        Array.isArray(t) ? this.index = new(re(t) > 65535 ? te : Kt)(t, 1) : this.index = t
    },
    getAttribute: function(t) {
        return this.attributes[t]
    },
    setAttribute: function(t, e) {
        return this.attributes[t] = e, this
    },
    deleteAttribute: function(t) {
        return delete this.attributes[t], this
    },
    addGroup: function(t, e, i) {
        this.groups.push({
            start: t,
            count: e,
            materialIndex: void 0 !== i ? i : 0
        })
    },
    clearGroups: function() {
        this.groups = []
    },
    setDrawRange: function(t, e) {
        this.drawRange.start = t, this.drawRange.count = e
    },
    applyMatrix4: function(t) {
        var e = this.attributes.position;
        void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
        var i = this.attributes.normal;
        if (void 0 !== i) {
            var n = (new u).getNormalMatrix(t);
            i.applyNormalMatrix(n), i.needsUpdate = !0
        }
        var r = this.attributes.tangent;
        return void 0 !== r && (r.transformDirection(t), r.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
    },
    rotateX: function(t) {
        return oe.makeRotationX(t), this.applyMatrix4(oe), this
    },
    rotateY: function(t) {
        return oe.makeRotationY(t), this.applyMatrix4(oe), this
    },
    rotateZ: function(t) {
        return oe.makeRotationZ(t), this.applyMatrix4(oe), this
    },
    translate: function(t, e, i) {
        return oe.makeTranslation(t, e, i), this.applyMatrix4(oe), this
    },
    scale: function(t, e, i) {
        return oe.makeScale(t, e, i), this.applyMatrix4(oe), this
    },
    lookAt: function(t) {
        return se.lookAt(t), se.updateMatrix(), this.applyMatrix4(se.matrix), this
    },
    center: function() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(ce).negate(), this.translate(ce.x, ce.y, ce.z), this
    },
    setFromObject: function(t) {
        var e = t.geometry;
        if (t.isPoints || t.isLine) {
            var i = new ee(3 * e.vertices.length, 3),
                n = new ee(3 * e.colors.length, 3);
            if (this.setAttribute("position", i.copyVector3sArray(e.vertices)), this.setAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                var r = new ee(e.lineDistances.length, 1);
                this.setAttribute("lineDistance", r.copyArray(e.lineDistances))
            }
            null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
        } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
        return this
    },
    setFromPoints: function(t) {
        for (var e = [], i = 0, n = t.length; i < n; i++) {
            var r = t[i];
            e.push(r.x, r.y, r.z || 0)
        }
        return this.setAttribute("position", new ee(e, 3)), this
    },
    updateFromObject: function(t) {
        var e, i = t.geometry;
        if (t.isMesh) {
            var n = i.__directGeometry;
            if (!0 === i.elementsNeedUpdate && (n = void 0, i.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(i);
            n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n
        }
        return !0 === i.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(i.vertices), e.needsUpdate = !0), i.verticesNeedUpdate = !1), !0 === i.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(i.normals), e.needsUpdate = !0), i.normalsNeedUpdate = !1), !0 === i.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(i.colors), e.needsUpdate = !0), i.colorsNeedUpdate = !1), i.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(i.uvs), e.needsUpdate = !0), i.uvsNeedUpdate = !1), i.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(i.lineDistances), e.needsUpdate = !0), i.lineDistancesNeedUpdate = !1), i.groupsNeedUpdate && (i.computeGroups(t.geometry), this.groups = i.groups, i.groupsNeedUpdate = !1), this
    },
    fromGeometry: function(t) {
        return t.__directGeometry = (new ne).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
    },
    fromDirectGeometry: function(t) {
        var e = new Float32Array(3 * t.vertices.length);
        if (this.setAttribute("position", new Xt(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
            var i = new Float32Array(3 * t.normals.length);
            this.setAttribute("normal", new Xt(i, 3).copyVector3sArray(t.normals))
        }
        if (t.colors.length > 0) {
            var n = new Float32Array(3 * t.colors.length);
            this.setAttribute("color", new Xt(n, 3).copyColorsArray(t.colors))
        }
        if (t.uvs.length > 0) {
            var r = new Float32Array(2 * t.uvs.length);
            this.setAttribute("uv", new Xt(r, 2).copyVector2sArray(t.uvs))
        }
        if (t.uvs2.length > 0) {
            var a = new Float32Array(2 * t.uvs2.length);
            this.setAttribute("uv2", new Xt(a, 2).copyVector2sArray(t.uvs2))
        }
        for (var o in this.groups = t.groups, t.morphTargets) {
            for (var s = [], c = t.morphTargets[o], h = 0, l = c.length; h < l; h++) {
                var u = c[h],
                    d = new ee(3 * u.data.length, 3);
                d.name = u.name, s.push(d.copyVector3sArray(u.data))
            }
            this.morphAttributes[o] = s
        }
        if (t.skinIndices.length > 0) {
            var p = new ee(4 * t.skinIndices.length, 4);
            this.setAttribute("skinIndex", p.copyVector4sArray(t.skinIndices))
        }
        if (t.skinWeights.length > 0) {
            var f = new ee(4 * t.skinWeights.length, 4);
            this.setAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
        }
        return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new ct);
        var t = this.attributes.position,
            e = this.morphAttributes.position;
        if (void 0 !== t) {
            if (this.boundingBox.setFromBufferAttribute(t), e)
                for (var i = 0, n = e.length; i < n; i++) {
                    var r = e[i];
                    he.setFromBufferAttribute(r), this.morphTargetsRelative ? (ue.addVectors(this.boundingBox.min, he.min), this.boundingBox.expandByPoint(ue), ue.addVectors(this.boundingBox.max, he.max), this.boundingBox.expandByPoint(ue)) : (this.boundingBox.expandByPoint(he.min), this.boundingBox.expandByPoint(he.max))
                }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new ut);
        var t = this.attributes.position,
            e = this.morphAttributes.position;
        if (t) {
            var i = this.boundingSphere.center;
            if (he.setFromBufferAttribute(t), e)
                for (var n = 0, r = e.length; n < r; n++) {
                    var a = e[n];
                    le.setFromBufferAttribute(a), this.morphTargetsRelative ? (ue.addVectors(he.min, le.min), he.expandByPoint(ue), ue.addVectors(he.max, le.max), he.expandByPoint(ue)) : (he.expandByPoint(le.min), he.expandByPoint(le.max))
                }
            he.getCenter(i);
            var o = 0;
            for (n = 0, r = t.count; n < r; n++) ue.fromBufferAttribute(t, n), o = Math.max(o, i.distanceToSquared(ue));
            if (e)
                for (n = 0, r = e.length; n < r; n++) {
                    a = e[n];
                    for (var s = this.morphTargetsRelative, c = 0, h = a.count; c < h; c++) ue.fromBufferAttribute(a, c), s && (ce.fromBufferAttribute(t, c), ue.add(ce)), o = Math.max(o, i.distanceToSquared(ue))
                }
            this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    },
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
        var t = this.index,
            e = this.attributes;
        if (e.position) {
            var i = e.position.array;
            if (void 0 === e.normal) this.setAttribute("normal", new Xt(new Float32Array(i.length), 3));
            else
                for (var n = e.normal.array, r = 0, a = n.length; r < a; r++) n[r] = 0;
            var o, s, c, h = e.normal.array,
                l = new _,
                u = new _,
                d = new _,
                p = new _,
                f = new _;
            if (t) {
                var m = t.array;
                for (r = 0, a = t.count; r < a; r += 3) o = 3 * m[r + 0], s = 3 * m[r + 1], c = 3 * m[r + 2], l.fromArray(i, o), u.fromArray(i, s), d.fromArray(i, c), p.subVectors(d, u), f.subVectors(l, u), p.cross(f), h[o] += p.x, h[o + 1] += p.y, h[o + 2] += p.z, h[s] += p.x, h[s + 1] += p.y, h[s + 2] += p.z, h[c] += p.x, h[c + 1] += p.y, h[c + 2] += p.z
            } else
                for (r = 0, a = i.length; r < a; r += 9) l.fromArray(i, r), u.fromArray(i, r + 3), d.fromArray(i, r + 6), p.subVectors(d, u), f.subVectors(l, u), p.cross(f), h[r] = p.x, h[r + 1] = p.y, h[r + 2] = p.z, h[r + 3] = p.x, h[r + 4] = p.y, h[r + 5] = p.z, h[r + 6] = p.x, h[r + 7] = p.y, h[r + 8] = p.z;
            this.normalizeNormals(), e.normal.needsUpdate = !0
        }
    },
    merge: function(t, e) {
        if (t && t.isBufferGeometry) {
            void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            var i = this.attributes;
            for (var n in i)
                if (void 0 !== t.attributes[n])
                    for (var r = i[n].array, a = t.attributes[n], o = a.array, s = a.itemSize * e, c = Math.min(o.length, r.length - s), h = 0, l = s; h < c; h++, l++) r[l] = o[h];
            return this
        }
        console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
    },
    normalizeNormals: function() {
        for (var t = this.attributes.normal, e = 0, i = t.count; e < i; e++) ue.x = t.getX(e), ue.y = t.getY(e), ue.z = t.getZ(e), ue.normalize(), t.setXYZ(e, ue.x, ue.y, ue.z)
    },
    toNonIndexed: function() {
        function t(t, e) {
            for (var i = t.array, n = t.itemSize, r = new i.constructor(e.length * n), a = 0, o = 0, s = 0, c = e.length; s < c; s++) {
                a = e[s] * n;
                for (var h = 0; h < n; h++) r[o++] = i[a++]
            }
            return new Xt(r, n)
        }
        if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
        var e = new de,
            i = this.index.array,
            n = this.attributes;
        for (var r in n) {
            var a = t(n[r], i);
            e.setAttribute(r, a)
        }
        var o = this.morphAttributes;
        for (r in o) {
            for (var s = [], c = o[r], h = 0, l = c.length; h < l; h++) {
                a = t(c[h], i);
                s.push(a)
            }
            e.morphAttributes[r] = s
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        for (var u = this.groups, d = (h = 0, u.length); h < d; h++) {
            var p = u[h];
            e.addGroup(p.start, p.count, p.materialIndex)
        }
        return e
    },
    toJSON: function() {
        var t = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
            var e = this.parameters;
            for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
            return t
        }
        t.data = {
            attributes: {}
        };
        var n = this.index;
        null !== n && (t.data.index = {
            type: n.array.constructor.name,
            array: Array.prototype.slice.call(n.array)
        });
        var r = this.attributes;
        for (var i in r) {
            var a = (d = r[i]).toJSON();
            "" !== d.name && (a.name = d.name), t.data.attributes[i] = a
        }
        var o = {},
            s = !1;
        for (var i in this.morphAttributes) {
            for (var c = this.morphAttributes[i], h = [], l = 0, u = c.length; l < u; l++) {
                var d;
                a = (d = c[l]).toJSON();
                "" !== d.name && (a.name = d.name), h.push(a)
            }
            h.length > 0 && (o[i] = h, s = !0)
        }
        s && (t.data.morphAttributes = o, t.data.morphTargetsRelative = this.morphTargetsRelative);
        var p = this.groups;
        p.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(p)));
        var f = this.boundingSphere;
        return null !== f && (t.data.boundingSphere = {
            center: f.center.toArray(),
            radius: f.radius
        }), t
    },
    clone: function() {
        return (new de).copy(this)
    },
    copy: function(t) {
        var e, i, n;
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
        var r = t.index;
        null !== r && this.setIndex(r.clone());
        var a = t.attributes;
        for (e in a) {
            var o = a[e];
            this.setAttribute(e, o.clone())
        }
        var s = t.morphAttributes;
        for (e in s) {
            var c = [],
                h = s[e];
            for (i = 0, n = h.length; i < n; i++) c.push(h[i].clone());
            this.morphAttributes[e] = c
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        var l = t.groups;
        for (i = 0, n = l.length; i < n; i++) {
            var u = l[i];
            this.addGroup(u.start, u.count, u.materialIndex)
        }
        var d = t.boundingBox;
        null !== d && (this.boundingBox = d.clone());
        var p = t.boundingSphere;
        return null !== p && (this.boundingSphere = p.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
});
var pe = new R,
    fe = new xt,
    me = new ut,
    ge = new _,
    ve = new _,
    ye = new _,
    xe = new _,
    be = new _,
    _e = new _,
    we = new _,
    Me = new _,
    Se = new _,
    Te = new l,
    Ee = new l,
    Ae = new l,
    Le = new _,
    Re = new _;

function Pe(t, e) {
    X.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new de, this.material = void 0 !== e ? e : new Wt, this.updateMorphTargets()
}

function Ce(t, e, i, n, r, a, o, s) {
    if (null === (1 === e.side ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a, o, 2 !== e.side, s))) return null;
    Re.copy(s), Re.applyMatrix4(t.matrixWorld);
    var c = i.ray.origin.distanceTo(Re);
    return c < i.near || c > i.far ? null : {
        distance: c,
        point: Re.clone(),
        object: t
    }
}

function Oe(t, e, i, n, r, a, o, s, c, h, u, d) {
    ge.fromBufferAttribute(r, h), ve.fromBufferAttribute(r, u), ye.fromBufferAttribute(r, d);
    var p = t.morphTargetInfluences;
    if (e.morphTargets && a && p) {
        we.set(0, 0, 0), Me.set(0, 0, 0), Se.set(0, 0, 0);
        for (var f = 0, m = a.length; f < m; f++) {
            var g = p[f],
                v = a[f];
            0 !== g && (xe.fromBufferAttribute(v, h), be.fromBufferAttribute(v, u), _e.fromBufferAttribute(v, d), o ? (we.addScaledVector(xe, g), Me.addScaledVector(be, g), Se.addScaledVector(_e, g)) : (we.addScaledVector(xe.sub(ge), g), Me.addScaledVector(be.sub(ve), g), Se.addScaledVector(_e.sub(ye), g)))
        }
        ge.add(we), ve.add(Me), ye.add(Se)
    }
    t.isSkinnedMesh && (t.boneTransform(h, ge), t.boneTransform(u, ve), t.boneTransform(d, ye));
    var y = Ce(t, e, i, n, ge, ve, ye, Le);
    if (y) {
        s && (Te.fromBufferAttribute(s, h), Ee.fromBufferAttribute(s, u), Ae.fromBufferAttribute(s, d), y.uv = Dt.getUV(Le, ge, ve, ye, Te, Ee, Ae, new l)), c && (Te.fromBufferAttribute(c, h), Ee.fromBufferAttribute(c, u), Ae.fromBufferAttribute(c, d), y.uv2 = Dt.getUV(Le, ge, ve, ye, Te, Ee, Ae, new l));
        var x = new kt(h, u, d);
        Dt.getNormal(ge, ve, ye, x.normal), y.face = x
    }
    return y
}
Pe.prototype = Object.assign(Object.create(X.prototype), {
    constructor: Pe,
    isMesh: !0,
    copy: function(t) {
        return X.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
    },
    updateMorphTargets: function() {
        var t, e, i, n = this.geometry;
        if (n.isBufferGeometry) {
            var r = n.morphAttributes,
                a = Object.keys(r);
            if (a.length > 0) {
                var o = r[a[0]];
                if (void 0 !== o)
                    for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
            }
        } else {
            var s = n.morphTargets;
            void 0 !== s && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    },
    raycast: function(t, e) {
        var i, n = this.geometry,
            r = this.material,
            a = this.matrixWorld;
        if (void 0 !== r && (null === n.boundingSphere && n.computeBoundingSphere(), me.copy(n.boundingSphere), me.applyMatrix4(a), !1 !== t.ray.intersectsSphere(me) && (pe.getInverse(a), fe.copy(t.ray).applyMatrix4(pe), null === n.boundingBox || !1 !== fe.intersectsBox(n.boundingBox))))
            if (n.isBufferGeometry) {
                var o, s, c, h, u, d, p, f, m, g = n.index,
                    v = n.attributes.position,
                    y = n.morphAttributes.position,
                    x = n.morphTargetsRelative,
                    b = n.attributes.uv,
                    _ = n.attributes.uv2,
                    w = n.groups,
                    M = n.drawRange;
                if (null !== g)
                    if (Array.isArray(r))
                        for (h = 0, d = w.length; h < d; h++)
                            for (m = r[(f = w[h]).materialIndex], u = Math.max(f.start, M.start), p = Math.min(f.start + f.count, M.start + M.count); u < p; u += 3) o = g.getX(u), s = g.getX(u + 1), c = g.getX(u + 2), (i = Oe(this, m, t, fe, v, y, x, b, _, o, s, c)) && (i.faceIndex = Math.floor(u / 3), i.face.materialIndex = f.materialIndex, e.push(i));
                    else
                        for (h = Math.max(0, M.start), d = Math.min(g.count, M.start + M.count); h < d; h += 3) o = g.getX(h), s = g.getX(h + 1), c = g.getX(h + 2), (i = Oe(this, r, t, fe, v, y, x, b, _, o, s, c)) && (i.faceIndex = Math.floor(h / 3), e.push(i));
                else if (void 0 !== v)
                    if (Array.isArray(r))
                        for (h = 0, d = w.length; h < d; h++)
                            for (m = r[(f = w[h]).materialIndex], u = Math.max(f.start, M.start), p = Math.min(f.start + f.count, M.start + M.count); u < p; u += 3)(i = Oe(this, m, t, fe, v, y, x, b, _, o = u, s = u + 1, c = u + 2)) && (i.faceIndex = Math.floor(u / 3), i.face.materialIndex = f.materialIndex, e.push(i));
                    else
                        for (h = Math.max(0, M.start), d = Math.min(v.count, M.start + M.count); h < d; h += 3)(i = Oe(this, r, t, fe, v, y, x, b, _, o = h, s = h + 1, c = h + 2)) && (i.faceIndex = Math.floor(h / 3), e.push(i))
            } else if (n.isGeometry) {
            var S, T, E, A, L = Array.isArray(r),
                R = n.vertices,
                P = n.faces,
                C = n.faceVertexUvs[0];
            C.length > 0 && (A = C);
            for (var O = 0, I = P.length; O < I; O++) {
                var D = P[O],
                    N = L ? r[D.materialIndex] : r;
                if (void 0 !== N && (S = R[D.a], T = R[D.b], E = R[D.c], i = Ce(this, N, t, fe, S, T, E, Le))) {
                    if (A && A[O]) {
                        var z = A[O];
                        Te.copy(z[0]), Ee.copy(z[1]), Ae.copy(z[2]), i.uv = Dt.getUV(Le, S, T, E, Te, Ee, Ae, new l)
                    }
                    i.face = D, i.faceIndex = O, e.push(i)
                }
            }
        }
    },
    clone: function() {
        return new this.constructor(this.geometry, this.material).copy(this)
    }
});
var Ie = 0,
    De = new R,
    Ne = new X,
    ze = new _;

function Ue() {
    Object.defineProperty(this, "id", {
        value: Ie += 2
    }), this.uuid = h.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
        []
    ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
}
Ue.prototype = Object.assign(Object.create(a.prototype), {
    constructor: Ue,
    isGeometry: !0,
    applyMatrix4: function(t) {
        for (var e = (new u).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
            this.vertices[i].applyMatrix4(t)
        }
        for (i = 0, n = this.faces.length; i < n; i++) {
            var r = this.faces[i];
            r.normal.applyMatrix3(e).normalize();
            for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3(e).normalize()
        }
        return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
    },
    rotateX: function(t) {
        return De.makeRotationX(t), this.applyMatrix4(De), this
    },
    rotateY: function(t) {
        return De.makeRotationY(t), this.applyMatrix4(De), this
    },
    rotateZ: function(t) {
        return De.makeRotationZ(t), this.applyMatrix4(De), this
    },
    translate: function(t, e, i) {
        return De.makeTranslation(t, e, i), this.applyMatrix4(De), this
    },
    scale: function(t, e, i) {
        return De.makeScale(t, e, i), this.applyMatrix4(De), this
    },
    lookAt: function(t) {
        return Ne.lookAt(t), Ne.updateMatrix(), this.applyMatrix4(Ne.matrix), this
    },
    fromBufferGeometry: function(t) {
        var e = this,
            i = null !== t.index ? t.index.array : void 0,
            n = t.attributes;
        if (void 0 === n.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
        var r = n.position.array,
            a = void 0 !== n.normal ? n.normal.array : void 0,
            o = void 0 !== n.color ? n.color.array : void 0,
            s = void 0 !== n.uv ? n.uv.array : void 0,
            c = void 0 !== n.uv2 ? n.uv2.array : void 0;
        void 0 !== c && (this.faceVertexUvs[1] = []);
        for (var h = 0; h < r.length; h += 3) e.vertices.push((new _).fromArray(r, h)), void 0 !== o && e.colors.push((new Ft).fromArray(o, h));

        function u(t, i, n, r) {
            var h = void 0 === o ? [] : [e.colors[t].clone(), e.colors[i].clone(), e.colors[n].clone()],
                u = new kt(t, i, n, void 0 === a ? [] : [(new _).fromArray(a, 3 * t), (new _).fromArray(a, 3 * i), (new _).fromArray(a, 3 * n)], h, r);
            e.faces.push(u), void 0 !== s && e.faceVertexUvs[0].push([(new l).fromArray(s, 2 * t), (new l).fromArray(s, 2 * i), (new l).fromArray(s, 2 * n)]), void 0 !== c && e.faceVertexUvs[1].push([(new l).fromArray(c, 2 * t), (new l).fromArray(c, 2 * i), (new l).fromArray(c, 2 * n)])
        }
        var d = t.groups;
        if (d.length > 0)
            for (h = 0; h < d.length; h++)
                for (var p = d[h], f = p.start, m = f, g = f + p.count; m < g; m += 3) void 0 !== i ? u(i[m], i[m + 1], i[m + 2], p.materialIndex) : u(m, m + 1, m + 2, p.materialIndex);
        else if (void 0 !== i)
            for (h = 0; h < i.length; h += 3) u(i[h], i[h + 1], i[h + 2]);
        else
            for (h = 0; h < r.length / 3; h += 3) u(h, h + 1, h + 2);
        return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
    },
    center: function() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(ze).negate(), this.translate(ze.x, ze.y, ze.z), this
    },
    normalize: function() {
        this.computeBoundingSphere();
        var t = this.boundingSphere.center,
            e = this.boundingSphere.radius,
            i = 0 === e ? 1 : 1 / e,
            n = new R;
        return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix4(n), this
    },
    computeFaceNormals: function() {
        for (var t = new _, e = new _, i = 0, n = this.faces.length; i < n; i++) {
            var r = this.faces[i],
                a = this.vertices[r.a],
                o = this.vertices[r.b],
                s = this.vertices[r.c];
            t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), r.normal.copy(t)
        }
    },
    computeVertexNormals: function(t) {
        var e, i, n, r, a, o;
        for (void 0 === t && (t = !0), o = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) o[e] = new _;
        if (t) {
            var s, c, h, l = new _,
                u = new _;
            for (n = 0, r = this.faces.length; n < r; n++) a = this.faces[n], s = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], l.subVectors(h, c), u.subVectors(s, c), l.cross(u), o[a.a].add(l), o[a.b].add(l), o[a.c].add(l)
        } else
            for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) o[(a = this.faces[n]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
        for (e = 0, i = this.vertices.length; e < i; e++) o[e].normalize();
        for (n = 0, r = this.faces.length; n < r; n++) {
            var d = (a = this.faces[n]).vertexNormals;
            3 === d.length ? (d[0].copy(o[a.a]), d[1].copy(o[a.b]), d[2].copy(o[a.c])) : (d[0] = o[a.a].clone(), d[1] = o[a.b].clone(), d[2] = o[a.c].clone())
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeFlatVertexNormals: function() {
        var t, e, i;
        for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
            var n = (i = this.faces[t]).vertexNormals;
            3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeMorphNormals: function() {
        var t, e, i, n, r;
        for (i = 0, n = this.faces.length; i < n; i++)
            for ((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
        var a = new Ue;
        for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
            if (!this.morphNormals[t]) {
                this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                var o = this.morphNormals[t].faceNormals,
                    s = this.morphNormals[t].vertexNormals;
                for (i = 0, n = this.faces.length; i < n; i++) c = new _, h = {
                    a: new _,
                    b: new _,
                    c: new _
                }, o.push(c), s.push(h)
            }
            var c, h, l = this.morphNormals[t];
            for (a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], c = l.faceNormals[i], h = l.vertexNormals[i], c.copy(r.normal), h.a.copy(r.vertexNormals[0]), h.b.copy(r.vertexNormals[1]), h.c.copy(r.vertexNormals[2])
        }
        for (i = 0, n = this.faces.length; i < n; i++)(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new ct), this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new ut), this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(t, e, i) {
        if (t && t.isGeometry) {
            var n, r = this.vertices.length,
                a = this.vertices,
                o = t.vertices,
                s = this.faces,
                c = t.faces,
                h = this.colors,
                l = t.colors;
            void 0 === i && (i = 0), void 0 !== e && (n = (new u).getNormalMatrix(e));
            for (var d = 0, p = o.length; d < p; d++) {
                var f = o[d].clone();
                void 0 !== e && f.applyMatrix4(e), a.push(f)
            }
            for (d = 0, p = l.length; d < p; d++) h.push(l[d].clone());
            for (d = 0, p = c.length; d < p; d++) {
                var m, g, v, y = c[d],
                    x = y.vertexNormals,
                    b = y.vertexColors;
                (m = new kt(y.a + r, y.b + r, y.c + r)).normal.copy(y.normal), void 0 !== n && m.normal.applyMatrix3(n).normalize();
                for (var _ = 0, w = x.length; _ < w; _++) g = x[_].clone(), void 0 !== n && g.applyMatrix3(n).normalize(), m.vertexNormals.push(g);
                m.color.copy(y.color);
                for (_ = 0, w = b.length; _ < w; _++) v = b[_], m.vertexColors.push(v.clone());
                m.materialIndex = y.materialIndex + i, s.push(m)
            }
            for (d = 0, p = t.faceVertexUvs.length; d < p; d++) {
                var M = t.faceVertexUvs[d];
                void 0 === this.faceVertexUvs[d] && (this.faceVertexUvs[d] = []);
                for (_ = 0, w = M.length; _ < w; _++) {
                    for (var S = M[_], T = [], E = 0, A = S.length; E < A; E++) T.push(S[E].clone());
                    this.faceVertexUvs[d].push(T)
                }
            }
        } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
    },
    mergeMesh: function(t) {
        t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
    },
    mergeVertices: function() {
        var t, e, i, n, r, a, o, s, c = {},
            h = [],
            l = [],
            u = Math.pow(10, 4);
        for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], void 0 === c[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (c[e] = i, h.push(this.vertices[i]), l[i] = h.length - 1) : l[i] = l[c[e]];
        var d = [];
        for (i = 0, n = this.faces.length; i < n; i++) {
            (r = this.faces[i]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
            for (var p = 0; p < 3; p++)
                if (a[p] === a[(p + 1) % 3]) {
                    d.push(i);
                    break
                }
        }
        for (i = d.length - 1; i >= 0; i--) {
            var f = d[i];
            for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
        }
        var m = this.vertices.length - h.length;
        return this.vertices = h, m
    },
    setFromPoints: function(t) {
        this.vertices = [];
        for (var e = 0, i = t.length; e < i; e++) {
            var n = t[e];
            this.vertices.push(new _(n.x, n.y, n.z || 0))
        }
        return this
    },
    sortFacesByMaterialIndex: function() {
        for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
        t.sort((function(t, e) {
            return t.materialIndex - e.materialIndex
        }));
        var n, r, a = this.faceVertexUvs[0],
            o = this.faceVertexUvs[1];
        a && a.length === e && (n = []), o && o.length === e && (r = []);
        for (i = 0; i < e; i++) {
            var s = t[i]._id;
            n && n.push(a[s]), r && r.push(o[s])
        }
        n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r)
    },
    toJSON: function() {
        var t = {
            metadata: {
                version: 4.5,
                type: "Geometry",
                generator: "Geometry.toJSON"
            }
        };
        if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
            var e = this.parameters;
            for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
            return t
        }
        for (var n = [], r = 0; r < this.vertices.length; r++) {
            var a = this.vertices[r];
            n.push(a.x, a.y, a.z)
        }
        var o = [],
            s = [],
            c = {},
            h = [],
            l = {},
            u = [],
            d = {};
        for (r = 0; r < this.faces.length; r++) {
            var p = this.faces[r],
                f = void 0 !== this.faceVertexUvs[0][r],
                m = p.normal.length() > 0,
                g = p.vertexNormals.length > 0,
                v = 1 !== p.color.r || 1 !== p.color.g || 1 !== p.color.b,
                y = p.vertexColors.length > 0,
                x = 0;
            if (x = M(x, 0, 0), x = M(x, 1, !0), x = M(x, 2, !1), x = M(x, 3, f), x = M(x, 4, m), x = M(x, 5, g), x = M(x, 6, v), x = M(x, 7, y), o.push(x), o.push(p.a, p.b, p.c), o.push(p.materialIndex), f) {
                var b = this.faceVertexUvs[0][r];
                o.push(E(b[0]), E(b[1]), E(b[2]))
            }
            if (m && o.push(S(p.normal)), g) {
                var _ = p.vertexNormals;
                o.push(S(_[0]), S(_[1]), S(_[2]))
            }
            if (v && o.push(T(p.color)), y) {
                var w = p.vertexColors;
                o.push(T(w[0]), T(w[1]), T(w[2]))
            }
        }

        function M(t, e, i) {
            return i ? t | 1 << e : t & ~(1 << e)
        }

        function S(t) {
            var e = t.x.toString() + t.y.toString() + t.z.toString();
            return void 0 !== c[e] ? c[e] : (c[e] = s.length / 3, s.push(t.x, t.y, t.z), c[e])
        }

        function T(t) {
            var e = t.r.toString() + t.g.toString() + t.b.toString();
            return void 0 !== l[e] ? l[e] : (l[e] = h.length, h.push(t.getHex()), l[e])
        }

        function E(t) {
            var e = t.x.toString() + t.y.toString();
            return void 0 !== d[e] ? d[e] : (d[e] = u.length / 2, u.push(t.x, t.y), d[e])
        }
        return t.data = {}, t.data.vertices = n, t.data.normals = s, h.length > 0 && (t.data.colors = h), u.length > 0 && (t.data.uvs = [u]), t.data.faces = o, t
    },
    clone: function() {
        return (new Ue).copy(this)
    },
    copy: function(t) {
        var e, i, n, r, a, o;
        this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
        var s = t.vertices;
        for (e = 0, i = s.length; e < i; e++) this.vertices.push(s[e].clone());
        var c = t.colors;
        for (e = 0, i = c.length; e < i; e++) this.colors.push(c[e].clone());
        var h = t.faces;
        for (e = 0, i = h.length; e < i; e++) this.faces.push(h[e].clone());
        for (e = 0, i = t.faceVertexUvs.length; e < i; e++) {
            var l = t.faceVertexUvs[e];
            for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = l.length; n < r; n++) {
                var u = l[n],
                    d = [];
                for (a = 0, o = u.length; a < o; a++) {
                    var p = u[a];
                    d.push(p.clone())
                }
                this.faceVertexUvs[e].push(d)
            }
        }
        var f = t.morphTargets;
        for (e = 0, i = f.length; e < i; e++) {
            var m = {};
            if (m.name = f[e].name, void 0 !== f[e].vertices)
                for (m.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++) m.vertices.push(f[e].vertices[n].clone());
            if (void 0 !== f[e].normals)
                for (m.normals = [], n = 0, r = f[e].normals.length; n < r; n++) m.normals.push(f[e].normals[n].clone());
            this.morphTargets.push(m)
        }
        var g = t.morphNormals;
        for (e = 0, i = g.length; e < i; e++) {
            var v = {};
            if (void 0 !== g[e].vertexNormals)
                for (v.vertexNormals = [], n = 0, r = g[e].vertexNormals.length; n < r; n++) {
                    var y = g[e].vertexNormals[n],
                        x = {};
                    x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), v.vertexNormals.push(x)
                }
            if (void 0 !== g[e].faceNormals)
                for (v.faceNormals = [], n = 0, r = g[e].faceNormals.length; n < r; n++) v.faceNormals.push(g[e].faceNormals[n].clone());
            this.morphNormals.push(v)
        }
        var b = t.skinWeights;
        for (e = 0, i = b.length; e < i; e++) this.skinWeights.push(b[e].clone());
        var _ = t.skinIndices;
        for (e = 0, i = _.length; e < i; e++) this.skinIndices.push(_[e].clone());
        var w = t.lineDistances;
        for (e = 0, i = w.length; e < i; e++) this.lineDistances.push(w[e]);
        var M = t.boundingBox;
        null !== M && (this.boundingBox = M.clone());
        var S = t.boundingSphere;
        return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
});
class Fe extends de {
    constructor(t, e, i, n, r, a) {
        super(), this.type = "BoxBufferGeometry", this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        };
        var o = this;
        t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
        var s = [],
            c = [],
            h = [],
            l = [],
            u = 0,
            d = 0;

        function p(t, e, i, n, r, a, p, f, m, g, v) {
            var y, x, b = a / m,
                w = p / g,
                M = a / 2,
                S = p / 2,
                T = f / 2,
                E = m + 1,
                A = g + 1,
                L = 0,
                R = 0,
                P = new _;
            for (x = 0; x < A; x++) {
                var C = x * w - S;
                for (y = 0; y < E; y++) {
                    var O = y * b - M;
                    P[t] = O * n, P[e] = C * r, P[i] = T, c.push(P.x, P.y, P.z), P[t] = 0, P[e] = 0, P[i] = f > 0 ? 1 : -1, h.push(P.x, P.y, P.z), l.push(y / m), l.push(1 - x / g), L += 1
                }
            }
            for (x = 0; x < g; x++)
                for (y = 0; y < m; y++) {
                    var I = u + y + E * x,
                        D = u + y + E * (x + 1),
                        N = u + (y + 1) + E * (x + 1),
                        z = u + (y + 1) + E * x;
                    s.push(I, D, z), s.push(D, N, z), R += 6
                }
            o.addGroup(d, R, v), d += R, u += L
        }
        p("z", "y", "x", -1, -1, i, e, t, a, r, 0), p("z", "y", "x", 1, -1, i, e, -t, a, r, 1), p("x", "z", "y", 1, 1, t, i, e, n, a, 2), p("x", "z", "y", 1, -1, t, i, -e, n, a, 3), p("x", "y", "z", 1, -1, t, e, i, n, r, 4), p("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(s), this.setAttribute("position", new ee(c, 3)), this.setAttribute("normal", new ee(h, 3)), this.setAttribute("uv", new ee(l, 2))
    }
}

function Be(t) {
    var e = {};
    for (var i in t)
        for (var n in e[i] = {}, t[i]) {
            var r = t[i][n];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
        }
    return e
}

function Ge(t) {
    for (var e = {}, i = 0; i < t.length; i++) {
        var n = Be(t[i]);
        for (var r in n) e[r] = n[r]
    }
    return e
}
var He = {
    clone: Be,
    merge: Ge
};

function ke(t) {
    jt.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
}

function Ve() {
    X.call(this), this.type = "Camera", this.matrixWorldInverse = new R, this.projectionMatrix = new R, this.projectionMatrixInverse = new R
}

function je(t, e, i, n) {
    Ve.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
}
ke.prototype = Object.create(jt.prototype), ke.prototype.constructor = ke, ke.prototype.isShaderMaterial = !0, ke.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Be(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
}, ke.prototype.toJSON = function(t) {
    var e = jt.prototype.toJSON.call(this, t);
    for (var i in e.uniforms = {}, this.uniforms) {
        var n = this.uniforms[i].value;
        n && n.isTexture ? e.uniforms[i] = {
            type: "t",
            value: n.toJSON(t).uuid
        } : n && n.isColor ? e.uniforms[i] = {
            type: "c",
            value: n.getHex()
        } : n && n.isVector2 ? e.uniforms[i] = {
            type: "v2",
            value: n.toArray()
        } : n && n.isVector3 ? e.uniforms[i] = {
            type: "v3",
            value: n.toArray()
        } : n && n.isVector4 ? e.uniforms[i] = {
            type: "v4",
            value: n.toArray()
        } : n && n.isMatrix3 ? e.uniforms[i] = {
            type: "m3",
            value: n.toArray()
        } : n && n.isMatrix4 ? e.uniforms[i] = {
            type: "m4",
            value: n.toArray()
        } : e.uniforms[i] = {
            value: n
        }
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
    var r = {};
    for (var a in this.extensions) !0 === this.extensions[a] && (r[a] = !0);
    return Object.keys(r).length > 0 && (e.extensions = r), e
}, Ve.prototype = Object.assign(Object.create(X.prototype), {
    constructor: Ve,
    isCamera: !0,
    copy: function(t, e) {
        return X.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
    },
    getWorldDirection: function(t) {
        void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new _), this.updateMatrixWorld(!0);
        var e = this.matrixWorld.elements;
        return t.set(-e[8], -e[9], -e[10]).normalize()
    },
    updateMatrixWorld: function(t) {
        X.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
    },
    updateWorldMatrix: function(t, e) {
        X.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.getInverse(this.matrixWorld)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
}), je.prototype = Object.assign(Object.create(Ve.prototype), {
    constructor: je,
    isPerspectiveCamera: !0,
    copy: function(t, e) {
        return Ve.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
    },
    setFocalLength: function(t) {
        var e = .5 * this.getFilmHeight() / t;
        this.fov = 2 * h.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
    },
    getFocalLength: function() {
        var t = Math.tan(.5 * h.DEG2RAD * this.fov);
        return .5 * this.getFilmHeight() / t
    },
    getEffectiveFOV: function() {
        return 2 * h.RAD2DEG * Math.atan(Math.tan(.5 * h.DEG2RAD * this.fov) / this.zoom)
    },
    getFilmWidth: function() {
        return this.filmGauge * Math.min(this.aspect, 1)
    },
    getFilmHeight: function() {
        return this.filmGauge / Math.max(this.aspect, 1)
    },
    setViewOffset: function(t, e, i, n, r, a) {
        this.aspect = t / e, null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
        var t = this.near,
            e = t * Math.tan(.5 * h.DEG2RAD * this.fov) / this.zoom,
            i = 2 * e,
            n = this.aspect * i,
            r = -.5 * n,
            a = this.view;
        if (null !== this.view && this.view.enabled) {
            var o = a.fullWidth,
                s = a.fullHeight;
            r += a.offsetX * n / o, e -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s
        }
        var c = this.filmOffset;
        0 !== c && (r += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
    },
    toJSON: function(t) {
        var e = X.prototype.toJSON.call(this, t);
        return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
    }
});

function We(t, e, i, n) {
    X.call(this), this.type = "CubeCamera";
    var r = new je(90, 1, t, e);
    r.up.set(0, -1, 0), r.lookAt(new _(1, 0, 0)), this.add(r);
    var a = new je(90, 1, t, e);
    a.up.set(0, -1, 0), a.lookAt(new _(-1, 0, 0)), this.add(a);
    var o = new je(90, 1, t, e);
    o.up.set(0, 0, 1), o.lookAt(new _(0, 1, 0)), this.add(o);
    var s = new je(90, 1, t, e);
    s.up.set(0, 0, -1), s.lookAt(new _(0, -1, 0)), this.add(s);
    var c = new je(90, 1, t, e);
    c.up.set(0, -1, 0), c.lookAt(new _(0, 0, 1)), this.add(c);
    var h = new je(90, 1, t, e);
    h.up.set(0, -1, 0), h.lookAt(new _(0, 0, -1)), this.add(h), n = n || {
        format: 1022,
        magFilter: 1006,
        minFilter: 1006
    }, this.renderTarget = new qe(i, n), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
        null === this.parent && this.updateMatrixWorld();
        var i = t.getRenderTarget(),
            n = this.renderTarget,
            l = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, r), t.setRenderTarget(n, 1), t.render(e, a), t.setRenderTarget(n, 2), t.render(e, o), t.setRenderTarget(n, 3), t.render(e, s), t.setRenderTarget(n, 4), t.render(e, c), n.texture.generateMipmaps = l, t.setRenderTarget(n, 5), t.render(e, h), t.setRenderTarget(i)
    }, this.clear = function(t, e, i, n) {
        for (var r = t.getRenderTarget(), a = this.renderTarget, o = 0; o < 6; o++) t.setRenderTarget(a, o), t.clear(e, i, n);
        t.setRenderTarget(r)
    }
}

function qe(t, e, i) {
    Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = i), g.call(this, t, t, e)
}

function Xe(t, e, i, n, r, a, o, s, c, h, l, u) {
    f.call(this, null, a, o, s, c, h, n, r, l, u), this.image = {
        data: t || null,
        width: e || 1,
        height: i || 1
    }, this.magFilter = void 0 !== c ? c : 1003, this.minFilter = void 0 !== h ? h : 1003, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
}
We.prototype = Object.create(X.prototype), We.prototype.constructor = We, qe.prototype = Object.create(g.prototype), qe.prototype.constructor = qe, qe.prototype.isWebGLCubeRenderTarget = !0, qe.prototype.fromEquirectangularTexture = function(t, e) {
    this.texture.type = e.type, this.texture.format = e.format, this.texture.encoding = e.encoding;
    var i = new Y,
        n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: ["varying vec3 vWorldDirection;", "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {", "\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );", "}", "void main() {", "\tvWorldDirection = transformDirection( position, modelMatrix );", "\t#include <begin_vertex>", "\t#include <project_vertex>", "}"].join("\n"),
            fragmentShader: ["uniform sampler2D tEquirect;", "varying vec3 vWorldDirection;", "#define RECIPROCAL_PI 0.31830988618", "#define RECIPROCAL_PI2 0.15915494", "void main() {", "\tvec3 direction = normalize( vWorldDirection );", "\tvec2 sampleUV;", "\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;", "\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "\tgl_FragColor = texture2D( tEquirect, sampleUV );", "}"].join("\n")
        },
        r = new ke({
            type: "CubemapFromEquirect",
            uniforms: Be(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: 1,
            blending: 0
        });
    r.uniforms.tEquirect.value = e;
    var a = new Pe(new Fe(5, 5, 5), r);
    i.add(a);
    var o = new We(1, 10, 1);
    return o.renderTarget = this, o.renderTarget.texture.name = "CubeCameraTexture", o.update(t, i), a.geometry.dispose(), a.material.dispose(), this
}, Xe.prototype = Object.create(f.prototype), Xe.prototype.constructor = Xe, Xe.prototype.isDataTexture = !0;
var Ye = new ut,
    Ze = new _;

function Je(t, e, i, n, r, a) {
    this.planes = [void 0 !== t ? t : new Mt, void 0 !== e ? e : new Mt, void 0 !== i ? i : new Mt, void 0 !== n ? n : new Mt, void 0 !== r ? r : new Mt, void 0 !== a ? a : new Mt]
}
Object.assign(Je.prototype, {
    set: function(t, e, i, n, r, a) {
        var o = this.planes;
        return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
        return this
    },
    setFromProjectionMatrix: function(t) {
        var e = this.planes,
            i = t.elements,
            n = i[0],
            r = i[1],
            a = i[2],
            o = i[3],
            s = i[4],
            c = i[5],
            h = i[6],
            l = i[7],
            u = i[8],
            d = i[9],
            p = i[10],
            f = i[11],
            m = i[12],
            g = i[13],
            v = i[14],
            y = i[15];
        return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(), e[1].setComponents(o + n, l + s, f + u, y + m).normalize(), e[2].setComponents(o + r, l + c, f + d, y + g).normalize(), e[3].setComponents(o - r, l - c, f - d, y - g).normalize(), e[4].setComponents(o - a, l - h, f - p, y - v).normalize(), e[5].setComponents(o + a, l + h, f + p, y + v).normalize(), this
    },
    intersectsObject: function(t) {
        var e = t.geometry;
        return null === e.boundingSphere && e.computeBoundingSphere(), Ye.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Ye)
    },
    intersectsSprite: function(t) {
        return Ye.center.set(0, 0, 0), Ye.radius = .7071067811865476, Ye.applyMatrix4(t.matrixWorld), this.intersectsSphere(Ye)
    },
    intersectsSphere: function(t) {
        for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
            if (e[r].distanceToPoint(i) < n) return !1
        }
        return !0
    },
    intersectsBox: function(t) {
        for (var e = this.planes, i = 0; i < 6; i++) {
            var n = e[i];
            if (Ze.x = n.normal.x > 0 ? t.max.x : t.min.x, Ze.y = n.normal.y > 0 ? t.max.y : t.min.y, Ze.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(Ze) < 0) return !1
        }
        return !0
    },
    containsPoint: function(t) {
        for (var e = this.planes, i = 0; i < 6; i++)
            if (e[i].distanceToPoint(t) < 0) return !1;
        return !0
    }
});
var Qe = {
    common: {
        diffuse: {
            value: new Ft(15658734)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        uvTransform: {
            value: new u
        },
        uv2Transform: {
            value: new u
        },
        alphaMap: {
            value: null
        }
    },
    specularmap: {
        specularMap: {
            value: null
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        refractionRatio: {
            value: .98
        },
        maxMipLevel: {
            value: 0
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalScale: {
            value: new l(1, 1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new Ft(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotShadowMap: {
            value: []
        },
        spotShadowMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        }
    },
    points: {
        diffuse: {
            value: new Ft(15658734)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        uvTransform: {
            value: new u
        }
    },
    sprite: {
        diffuse: {
            value: new Ft(15658734)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new l(.5, .5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        uvTransform: {
            value: new u
        }
    }
};

function Ke() {
    var t = null,
        e = !1,
        i = null;

    function n(r, a) {
        !1 !== e && (i(r, a), t.requestAnimationFrame(n))
    }
    return {
        start: function() {
            !0 !== e && null !== i && (t.requestAnimationFrame(n), e = !0)
        },
        stop: function() {
            e = !1
        },
        setAnimationLoop: function(t) {
            i = t
        },
        setContext: function(e) {
            t = e
        }
    }
}

function $e(t, e) {
    var i = e.isWebGL2,
        n = new WeakMap;
    return {
        get: function(t) {
            return t.isInterleavedBufferAttribute && (t = t.data), n.get(t)
        },
        remove: function(e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            var i = n.get(e);
            i && (t.deleteBuffer(i.buffer), n.delete(e))
        },
        update: function(e, r) {
            e.isInterleavedBufferAttribute && (e = e.data);
            var a = n.get(e);
            void 0 === a ? n.set(e, function(e, i) {
                var n = e.array,
                    r = e.usage,
                    a = t.createBuffer();
                t.bindBuffer(i, a), t.bufferData(i, n, r), e.onUploadCallback();
                var o = 5126;
                return n instanceof Float32Array ? o = 5126 : n instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : n instanceof Uint16Array ? o = 5123 : n instanceof Int16Array ? o = 5122 : n instanceof Uint32Array ? o = 5125 : n instanceof Int32Array ? o = 5124 : n instanceof Int8Array ? o = 5120 : n instanceof Uint8Array && (o = 5121), {
                    buffer: a,
                    type: o,
                    bytesPerElement: n.BYTES_PER_ELEMENT,
                    version: e.version
                }
            }(e, r)) : a.version < e.version && (! function(e, n, r) {
                var a = n.array,
                    o = n.updateRange;
                t.bindBuffer(r, e), -1 === o.count ? t.bufferSubData(r, 0, a) : (i ? t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1)
            }(a.buffer, e, r), a.version = e.version)
        }
    }
}

function ti(t, e, i, n) {
    Ue.call(this), this.type = "PlaneGeometry", this.parameters = {
        width: t,
        height: e,
        widthSegments: i,
        heightSegments: n
    }, this.fromBufferGeometry(new ei(t, e, i, n)), this.mergeVertices()
}

function ei(t, e, i, n) {
    de.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
        width: t,
        height: e,
        widthSegments: i,
        heightSegments: n
    };
    var r, a, o = (t = t || 1) / 2,
        s = (e = e || 1) / 2,
        c = Math.floor(i) || 1,
        h = Math.floor(n) || 1,
        l = c + 1,
        u = h + 1,
        d = t / c,
        p = e / h,
        f = [],
        m = [],
        g = [],
        v = [];
    for (a = 0; a < u; a++) {
        var y = a * p - s;
        for (r = 0; r < l; r++) {
            var x = r * d - o;
            m.push(x, -y, 0), g.push(0, 0, 1), v.push(r / c), v.push(1 - a / h)
        }
    }
    for (a = 0; a < h; a++)
        for (r = 0; r < c; r++) {
            var b = r + l * a,
                _ = r + l * (a + 1),
                w = r + 1 + l * (a + 1),
                M = r + 1 + l * a;
            f.push(b, _, M), f.push(_, w, M)
        }
    this.setIndex(f), this.setAttribute("position", new ee(m, 3)), this.setAttribute("normal", new ee(g, 3)), this.setAttribute("uv", new ee(v, 2))
}
ti.prototype = Object.create(Ue.prototype), ti.prototype.constructor = ti, ei.prototype = Object.create(de.prototype), ei.prototype.constructor = ei;
var ii = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
        normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
        uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
        uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
    },
    ni = {
        basic: {
            uniforms: Ge([Qe.common, Qe.specularmap, Qe.envmap, Qe.aomap, Qe.lightmap, Qe.fog]),
            vertexShader: ii.meshbasic_vert,
            fragmentShader: ii.meshbasic_frag
        },
        lambert: {
            uniforms: Ge([Qe.common, Qe.specularmap, Qe.envmap, Qe.aomap, Qe.lightmap, Qe.emissivemap, Qe.fog, Qe.lights, {
                emissive: {
                    value: new Ft(0)
                }
            }]),
            vertexShader: ii.meshlambert_vert,
            fragmentShader: ii.meshlambert_frag
        },
        phong: {
            uniforms: Ge([Qe.common, Qe.specularmap, Qe.envmap, Qe.aomap, Qe.lightmap, Qe.emissivemap, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, Qe.fog, Qe.lights, {
                emissive: {
                    value: new Ft(0)
                },
                specular: {
                    value: new Ft(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: ii.meshphong_vert,
            fragmentShader: ii.meshphong_frag
        },
        standard: {
            uniforms: Ge([Qe.common, Qe.envmap, Qe.aomap, Qe.lightmap, Qe.emissivemap, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, Qe.roughnessmap, Qe.metalnessmap, Qe.fog, Qe.lights, {
                emissive: {
                    value: new Ft(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: ii.meshphysical_vert,
            fragmentShader: ii.meshphysical_frag
        },
        toon: {
            uniforms: Ge([Qe.common, Qe.specularmap, Qe.aomap, Qe.lightmap, Qe.emissivemap, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, Qe.gradientmap, Qe.fog, Qe.lights, {
                emissive: {
                    value: new Ft(0)
                },
                specular: {
                    value: new Ft(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: ii.meshtoon_vert,
            fragmentShader: ii.meshtoon_frag
        },
        matcap: {
            uniforms: Ge([Qe.common, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, Qe.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: ii.meshmatcap_vert,
            fragmentShader: ii.meshmatcap_frag
        },
        points: {
            uniforms: Ge([Qe.points, Qe.fog]),
            vertexShader: ii.points_vert,
            fragmentShader: ii.points_frag
        },
        dashed: {
            uniforms: Ge([Qe.common, Qe.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: ii.linedashed_vert,
            fragmentShader: ii.linedashed_frag
        },
        depth: {
            uniforms: Ge([Qe.common, Qe.displacementmap]),
            vertexShader: ii.depth_vert,
            fragmentShader: ii.depth_frag
        },
        normal: {
            uniforms: Ge([Qe.common, Qe.bumpmap, Qe.normalmap, Qe.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: ii.normal_vert,
            fragmentShader: ii.normal_frag
        },
        sprite: {
            uniforms: Ge([Qe.sprite, Qe.fog]),
            vertexShader: ii.sprite_vert,
            fragmentShader: ii.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new u
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: ii.background_vert,
            fragmentShader: ii.background_frag
        },
        cube: {
            uniforms: Ge([Qe.envmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: ii.cube_vert,
            fragmentShader: ii.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: ii.equirect_vert,
            fragmentShader: ii.equirect_frag
        },
        distanceRGBA: {
            uniforms: Ge([Qe.common, Qe.displacementmap, {
                referencePosition: {
                    value: new _
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: ii.distanceRGBA_vert,
            fragmentShader: ii.distanceRGBA_frag
        },
        shadow: {
            uniforms: Ge([Qe.lights, Qe.fog, {
                color: {
                    value: new Ft(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: ii.shadow_vert,
            fragmentShader: ii.shadow_frag
        }
    };

function ri(t, e, i, n) {
    var r, a, o = new Ft(0),
        s = 0,
        c = null,
        h = 0,
        l = null;

    function u(t, i) {
        e.buffers.color.setClear(t.r, t.g, t.b, i, n)
    }
    return {
        getClearColor: function() {
            return o
        },
        setClearColor: function(t, e) {
            o.set(t), u(o, s = void 0 !== e ? e : 1)
        },
        getClearAlpha: function() {
            return s
        },
        setClearAlpha: function(t) {
            u(o, s = t)
        },
        render: function(e, n, d, p) {
            var f = n.background,
                m = t.xr,
                g = m.getSession && m.getSession();
            if (g && "additive" === g.environmentBlendMode && (f = null), null === f ? u(o, s) : f && f.isColor && (u(f, 1), p = !0), (t.autoClear || p) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), f && (f.isCubeTexture || f.isWebGLCubeRenderTarget || 306 === f.mapping)) {
                void 0 === a && ((a = new Pe(new Fe(1, 1, 1), new ke({
                    type: "BackgroundCubeMaterial",
                    uniforms: Be(ni.cube.uniforms),
                    vertexShader: ni.cube.vertexShader,
                    fragmentShader: ni.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))).geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function(t, e, i) {
                    this.matrixWorld.copyPosition(i.matrixWorld)
                }, Object.defineProperty(a.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value
                    }
                }), i.update(a));
                var v = f.isWebGLCubeRenderTarget ? f.texture : f;
                a.material.uniforms.envMap.value = v, a.material.uniforms.flipEnvMap.value = v.isCubeTexture ? -1 : 1, c === f && h === v.version && l === t.toneMapping || (a.material.needsUpdate = !0, c = f, h = v.version, l = t.toneMapping), e.unshift(a, a.geometry, a.material, 0, 0, null)
            } else f && f.isTexture && (void 0 === r && ((r = new Pe(new ei(2, 2), new ke({
                type: "BackgroundMaterial",
                uniforms: Be(ni.background.uniforms),
                vertexShader: ni.background.vertexShader,
                fragmentShader: ni.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            }))).geometry.deleteAttribute("normal"), Object.defineProperty(r.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value
                }
            }), i.update(r)), r.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), r.material.uniforms.uvTransform.value.copy(f.matrix), c === f && h === f.version && l === t.toneMapping || (r.material.needsUpdate = !0, c = f, h = f.version, l = t.toneMapping), e.unshift(r, r.geometry, r.material, 0, 0, null))
        }
    }
}

function ai(t, e, i, n) {
    var r, a = n.isWebGL2;
    this.setMode = function(t) {
        r = t
    }, this.render = function(e, n) {
        t.drawArrays(r, e, n), i.update(n, r)
    }, this.renderInstances = function(n, o, s, c) {
        if (0 !== c) {
            var h, l;
            if (a) h = t, l = "drawArraysInstanced";
            else if (l = "drawArraysInstancedANGLE", null === (h = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[l](r, o, s, c), i.update(s, r, c)
        }
    }
}

function oi(t, e, i) {
    var n;

    function r(e) {
        if ("highp" === e) {
            if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            e = "mediump"
        }
        return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }
    var a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext,
        o = void 0 !== i.precision ? i.precision : "highp",
        s = r(o);
    s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
    var c = !0 === i.logarithmicDepthBuffer,
        h = t.getParameter(34930),
        l = t.getParameter(35660),
        u = t.getParameter(3379),
        d = t.getParameter(34076),
        p = t.getParameter(34921),
        f = t.getParameter(36347),
        m = t.getParameter(36348),
        g = t.getParameter(36349),
        v = l > 0,
        y = a || !!e.get("OES_texture_float");
    return {
        isWebGL2: a,
        getMaxAnisotropy: function() {
            if (void 0 !== n) return n;
            var i = e.get("EXT_texture_filter_anisotropic");
            return n = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        },
        getMaxPrecision: r,
        precision: o,
        logarithmicDepthBuffer: c,
        maxTextures: h,
        maxVertexTextures: l,
        maxTextureSize: u,
        maxCubemapSize: d,
        maxAttributes: p,
        maxVertexUniforms: f,
        maxVaryings: m,
        maxFragmentUniforms: g,
        vertexTextures: v,
        floatFragmentTextures: y,
        floatVertexTextures: v && y,
        maxSamples: a ? t.getParameter(36183) : 0
    }
}

function si() {
    var t = this,
        e = null,
        i = 0,
        n = !1,
        r = !1,
        a = new Mt,
        o = new u,
        s = {
            value: null,
            needsUpdate: !1
        };

    function c() {
        s.value !== e && (s.value = e, s.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0
    }

    function h(e, i, n, r) {
        var c = null !== e ? e.length : 0,
            h = null;
        if (0 !== c) {
            if (h = s.value, !0 !== r || null === h) {
                var l = n + 4 * c,
                    u = i.matrixWorldInverse;
                o.getNormalMatrix(u), (null === h || h.length < l) && (h = new Float32Array(l));
                for (var d = 0, p = n; d !== c; ++d, p += 4) a.copy(e[d]).applyMatrix4(u, o), a.normal.toArray(h, p), h[p + 3] = a.constant
            }
            s.value = h, s.needsUpdate = !0
        }
        return t.numPlanes = c, t.numIntersection = 0, h
    }
    this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, r, a) {
        var o = 0 !== t.length || r || 0 !== i || n;
        return n = r, e = h(t, a, 0), i = t.length, o
    }, this.beginShadows = function() {
        r = !0, h(null)
    }, this.endShadows = function() {
        r = !1, c()
    }, this.setState = function(t, a, o, l, u, d) {
        if (!n || null === t || 0 === t.length || r && !o) r ? h(null) : c();
        else {
            var p = r ? 0 : i,
                f = 4 * p,
                m = u.clippingState || null;
            s.value = m, m = h(t, l, f, d);
            for (var g = 0; g !== f; ++g) m[g] = e[g];
            u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += p
        }
    }
}

function ci(t) {
    var e = {};
    return {
        get: function(i) {
            if (void 0 !== e[i]) return e[i];
            var n;
            switch (i) {
                case "WEBGL_depth_texture":
                    n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    n = t.getExtension(i)
            }
            return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), e[i] = n, n
        }
    }
}

function hi(t, e, i) {
    var n = new WeakMap,
        r = new WeakMap;

    function a(t) {
        var o = t.target,
            s = n.get(o);
        for (var c in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[c]);
        o.removeEventListener("dispose", a), n.delete(o);
        var h = r.get(s);
        h && (e.remove(h), r.delete(s)), i.memory.geometries--
    }

    function o(t) {
        var i = [],
            n = t.index,
            a = t.attributes.position,
            o = 0;
        if (null !== n) {
            var s = n.array;
            o = n.version;
            for (var c = 0, h = s.length; c < h; c += 3) {
                var l = s[c + 0],
                    u = s[c + 1],
                    d = s[c + 2];
                i.push(l, u, u, d, d, l)
            }
        } else {
            s = a.array;
            o = a.version;
            for (c = 0, h = s.length / 3 - 1; c < h; c += 3) {
                l = c + 0, u = c + 1, d = c + 2;
                i.push(l, u, u, d, d, l)
            }
        }
        var p = new(re(i) > 65535 ? te : Kt)(i, 1);
        p.version = o, e.update(p, 34963);
        var f = r.get(t);
        f && e.remove(f), r.set(t, p)
    }
    return {
        get: function(t, e) {
            var r = n.get(e);
            return r || (e.addEventListener("dispose", a), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new de).setFromObject(t)), r = e._bufferGeometry), n.set(e, r), i.memory.geometries++, r)
        },
        update: function(t) {
            var i = t.index,
                n = t.attributes;
            for (var r in null !== i && e.update(i, 34963), n) e.update(n[r], 34962);
            var a = t.morphAttributes;
            for (var r in a)
                for (var o = a[r], s = 0, c = o.length; s < c; s++) e.update(o[s], 34962)
        },
        getWireframeAttribute: function(t) {
            var e = r.get(t);
            if (e) {
                var i = t.index;
                null !== i && e.version < i.version && o(t)
            } else o(t);
            return r.get(t)
        }
    }
}

function li(t, e, i, n) {
    var r, a, o, s = n.isWebGL2;
    this.setMode = function(t) {
        r = t
    }, this.setIndex = function(t) {
        a = t.type, o = t.bytesPerElement
    }, this.render = function(e, n) {
        t.drawElements(r, n, a, e * o), i.update(n, r)
    }, this.renderInstances = function(n, c, h, l) {
        if (0 !== l) {
            var u, d;
            if (s) u = t, d = "drawElementsInstanced";
            else if (d = "drawElementsInstancedANGLE", null === (u = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            u[d](r, h, a, c * o, l), i.update(h, r, l)
        }
    }
}

function ui(t) {
    var e = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    return {
        memory: {
            geometries: 0,
            textures: 0
        },
        render: e,
        programs: null,
        autoReset: !0,
        reset: function() {
            e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
        },
        update: function(t, i, n) {
            switch (n = n || 1, e.calls++, i) {
                case 4:
                    e.triangles += n * (t / 3);
                    break;
                case 1:
                    e.lines += n * (t / 2);
                    break;
                case 3:
                    e.lines += n * (t - 1);
                    break;
                case 2:
                    e.lines += n * t;
                    break;
                case 0:
                    e.points += n * t;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", i)
            }
        }
    }
}

function di(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1])
}

function pi(t) {
    var e = {},
        i = new Float32Array(8);
    return {
        update: function(n, r, a, o) {
            var s = n.morphTargetInfluences,
                c = void 0 === s ? 0 : s.length,
                h = e[r.id];
            if (void 0 === h) {
                h = [];
                for (var l = 0; l < c; l++) h[l] = [l, 0];
                e[r.id] = h
            }
            var u = a.morphTargets && r.morphAttributes.position,
                d = a.morphNormals && r.morphAttributes.normal;
            for (l = 0; l < c; l++) {
                0 !== (f = h[l])[1] && (u && r.deleteAttribute("morphTarget" + l), d && r.deleteAttribute("morphNormal" + l))
            }
            for (l = 0; l < c; l++) {
                (f = h[l])[0] = l, f[1] = s[l]
            }
            h.sort(di);
            var p = 0;
            for (l = 0; l < 8; l++) {
                var f;
                if (f = h[l]) {
                    var m = f[0],
                        g = f[1];
                    if (g) {
                        u && r.setAttribute("morphTarget" + l, u[m]), d && r.setAttribute("morphNormal" + l, d[m]), i[l] = g, p += g;
                        continue
                    }
                }
                i[l] = 0
            }
            var v = r.morphTargetsRelative ? 1 : 1 - p;
            o.getUniforms().setValue(t, "morphTargetBaseInfluence", v), o.getUniforms().setValue(t, "morphTargetInfluences", i)
        }
    }
}

function fi(t, e, i, n) {
    var r = new WeakMap;
    return {
        update: function(t) {
            var a = n.render.frame,
                o = t.geometry,
                s = e.get(t, o);
            return r.get(s) !== a && (o.isGeometry && s.updateFromObject(t), e.update(s), r.set(s, a)), t.isInstancedMesh && i.update(t.instanceMatrix, 34962), s
        },
        dispose: function() {
            r = new WeakMap
        }
    }
}

function mi(t, e, i, n, r, a, o, s, c, h) {
    t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, o = void 0 !== o ? o : 1022, f.call(this, t, e, i, n, r, a, o, s, c, h), this.flipY = !1
}

function gi(t, e, i, n) {
    f.call(this, null), this.image = {
        data: t || null,
        width: e || 1,
        height: i || 1,
        depth: n || 1
    }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
}

function vi(t, e, i, n) {
    f.call(this, null), this.image = {
        data: t || null,
        width: e || 1,
        height: i || 1,
        depth: n || 1
    }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
}
ni.physical = {
    uniforms: Ge([ni.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatNormalScale: {
            value: new l(1, 1)
        },
        clearcoatNormalMap: {
            value: null
        },
        sheen: {
            value: new Ft(0)
        },
        transparency: {
            value: 0
        }
    }]),
    vertexShader: ii.meshphysical_vert,
    fragmentShader: ii.meshphysical_frag
}, mi.prototype = Object.create(f.prototype), mi.prototype.constructor = mi, mi.prototype.isCubeTexture = !0, Object.defineProperty(mi.prototype, "images", {
    get: function() {
        return this.image
    },
    set: function(t) {
        this.image = t
    }
}), gi.prototype = Object.create(f.prototype), gi.prototype.constructor = gi, gi.prototype.isDataTexture2DArray = !0, vi.prototype = Object.create(f.prototype), vi.prototype.constructor = vi, vi.prototype.isDataTexture3D = !0;
var yi = new f,
    xi = new gi,
    bi = new vi,
    _i = new mi,
    wi = [],
    Mi = [],
    Si = new Float32Array(16),
    Ti = new Float32Array(9),
    Ei = new Float32Array(4);

function Ai(t, e, i) {
    var n = t[0];
    if (n <= 0 || n > 0) return t;
    var r = e * i,
        a = wi[r];
    if (void 0 === a && (a = new Float32Array(r), wi[r] = a), 0 !== e) {
        n.toArray(a, 0);
        for (var o = 1, s = 0; o !== e; ++o) s += i, t[o].toArray(a, s)
    }
    return a
}

function Li(t, e) {
    if (t.length !== e.length) return !1;
    for (var i = 0, n = t.length; i < n; i++)
        if (t[i] !== e[i]) return !1;
    return !0
}

function Ri(t, e) {
    for (var i = 0, n = e.length; i < n; i++) t[i] = e[i]
}

function Pi(t, e) {
    var i = Mi[e];
    void 0 === i && (i = new Int32Array(e), Mi[e] = i);
    for (var n = 0; n !== e; ++n) i[n] = t.allocateTextureUnit();
    return i
}

function Ci(t, e) {
    var i = this.cache;
    i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e)
}

function Oi(t, e) {
    var i = this.cache;
    if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
    else {
        if (Li(i, e)) return;
        t.uniform2fv(this.addr, e), Ri(i, e)
    }
}

function Ii(t, e) {
    var i = this.cache;
    if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
    else if (void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
    else {
        if (Li(i, e)) return;
        t.uniform3fv(this.addr, e), Ri(i, e)
    }
}

function Di(t, e) {
    var i = this.cache;
    if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
    else {
        if (Li(i, e)) return;
        t.uniform4fv(this.addr, e), Ri(i, e)
    }
}

function Ni(t, e) {
    var i = this.cache,
        n = e.elements;
    if (void 0 === n) {
        if (Li(i, e)) return;
        t.uniformMatrix2fv(this.addr, !1, e), Ri(i, e)
    } else {
        if (Li(i, n)) return;
        Ei.set(n), t.uniformMatrix2fv(this.addr, !1, Ei), Ri(i, n)
    }
}

function zi(t, e) {
    var i = this.cache,
        n = e.elements;
    if (void 0 === n) {
        if (Li(i, e)) return;
        t.uniformMatrix3fv(this.addr, !1, e), Ri(i, e)
    } else {
        if (Li(i, n)) return;
        Ti.set(n), t.uniformMatrix3fv(this.addr, !1, Ti), Ri(i, n)
    }
}

function Ui(t, e) {
    var i = this.cache,
        n = e.elements;
    if (void 0 === n) {
        if (Li(i, e)) return;
        t.uniformMatrix4fv(this.addr, !1, e), Ri(i, e)
    } else {
        if (Li(i, n)) return;
        Si.set(n), t.uniformMatrix4fv(this.addr, !1, Si), Ri(i, n)
    }
}

function Fi(t, e, i) {
    var n = this.cache,
        r = i.allocateTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.safeSetTexture2D(e || yi, r)
}

function Bi(t, e, i) {
    var n = this.cache,
        r = i.allocateTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(e || xi, r)
}

function Gi(t, e, i) {
    var n = this.cache,
        r = i.allocateTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(e || bi, r)
}

function Hi(t, e, i) {
    var n = this.cache,
        r = i.allocateTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.safeSetTextureCube(e || _i, r)
}

function ki(t, e) {
    var i = this.cache;
    i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e)
}

function Vi(t, e) {
    var i = this.cache;
    Li(i, e) || (t.uniform2iv(this.addr, e), Ri(i, e))
}

function ji(t, e) {
    var i = this.cache;
    Li(i, e) || (t.uniform3iv(this.addr, e), Ri(i, e))
}

function Wi(t, e) {
    var i = this.cache;
    Li(i, e) || (t.uniform4iv(this.addr, e), Ri(i, e))
}

function qi(t, e) {
    var i = this.cache;
    i[0] !== e && (t.uniform1ui(this.addr, e), i[0] = e)
}

function Xi(t, e) {
    t.uniform1fv(this.addr, e)
}

function Yi(t, e) {
    t.uniform1iv(this.addr, e)
}

function Zi(t, e) {
    t.uniform2iv(this.addr, e)
}

function Ji(t, e) {
    t.uniform3iv(this.addr, e)
}

function Qi(t, e) {
    t.uniform4iv(this.addr, e)
}

function Ki(t, e) {
    var i = Ai(e, this.size, 2);
    t.uniform2fv(this.addr, i)
}

function $i(t, e) {
    var i = Ai(e, this.size, 3);
    t.uniform3fv(this.addr, i)
}

function tn(t, e) {
    var i = Ai(e, this.size, 4);
    t.uniform4fv(this.addr, i)
}

function en(t, e) {
    var i = Ai(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, i)
}

function nn(t, e) {
    var i = Ai(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, i)
}

function rn(t, e) {
    var i = Ai(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, i)
}

function an(t, e, i) {
    var n = e.length,
        r = Pi(i, n);
    t.uniform1iv(this.addr, r);
    for (var a = 0; a !== n; ++a) i.safeSetTexture2D(e[a] || yi, r[a])
}

function on(t, e, i) {
    var n = e.length,
        r = Pi(i, n);
    t.uniform1iv(this.addr, r);
    for (var a = 0; a !== n; ++a) i.safeSetTextureCube(e[a] || _i, r[a])
}

function sn(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.setValue = function(t) {
        switch (t) {
            case 5126:
                return Ci;
            case 35664:
                return Oi;
            case 35665:
                return Ii;
            case 35666:
                return Di;
            case 35674:
                return Ni;
            case 35675:
                return zi;
            case 35676:
                return Ui;
            case 5124:
            case 35670:
                return ki;
            case 35667:
            case 35671:
                return Vi;
            case 35668:
            case 35672:
                return ji;
            case 35669:
            case 35673:
                return Wi;
            case 5125:
                return qi;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return Fi;
            case 35679:
            case 36299:
            case 36307:
                return Gi;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return Hi;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return Bi
        }
    }(e.type)
}

function cn(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) {
        switch (t) {
            case 5126:
                return Xi;
            case 35664:
                return Ki;
            case 35665:
                return $i;
            case 35666:
                return tn;
            case 35674:
                return en;
            case 35675:
                return nn;
            case 35676:
                return rn;
            case 5124:
            case 35670:
                return Yi;
            case 35667:
            case 35671:
                return Zi;
            case 35668:
            case 35672:
                return Ji;
            case 35669:
            case 35673:
                return Qi;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return an;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return on
        }
    }(e.type)
}

function hn(t) {
    this.id = t, this.seq = [], this.map = {}
}
cn.prototype.updateCache = function(t) {
    var e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Ri(e, t)
}, hn.prototype.setValue = function(t, e, i) {
    for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) {
        var o = n[r];
        o.setValue(t, e[o.id], i)
    }
};
var ln = /([\w\d_]+)(\])?(\[|\.)?/g;

function un(t, e) {
    t.seq.push(e), t.map[e.id] = e
}

function dn(t, e, i) {
    var n = t.name,
        r = n.length;
    for (ln.lastIndex = 0;;) {
        var a = ln.exec(n),
            o = ln.lastIndex,
            s = a[1],
            c = "]" === a[2],
            h = a[3];
        if (c && (s |= 0), void 0 === h || "[" === h && o + 2 === r) {
            un(i, void 0 === h ? new sn(s, t, e) : new cn(s, t, e));
            break
        }
        var l = i.map[s];
        void 0 === l && un(i, l = new hn(s)), i = l
    }
}

function pn(t, e) {
    this.seq = [], this.map = {};
    for (var i = t.getProgramParameter(e, 35718), n = 0; n < i; ++n) {
        var r = t.getActiveUniform(e, n);
        dn(r, t.getUniformLocation(e, r.name), this)
    }
}

function fn(t, e, i) {
    var n = t.createShader(e);
    return t.shaderSource(n, i), t.compileShader(n), n
}
pn.prototype.setValue = function(t, e, i, n) {
    var r = this.map[e];
    void 0 !== r && r.setValue(t, i, n)
}, pn.prototype.setOptional = function(t, e, i) {
    var n = e[i];
    void 0 !== n && this.setValue(t, i, n)
}, pn.upload = function(t, e, i, n) {
    for (var r = 0, a = e.length; r !== a; ++r) {
        var o = e[r],
            s = i[o.id];
        !1 !== s.needsUpdate && o.setValue(t, s.value, n)
    }
}, pn.seqWithValue = function(t, e) {
    for (var i = [], n = 0, r = t.length; n !== r; ++n) {
        var a = t[n];
        a.id in e && i.push(a)
    }
    return i
};
var mn = 0;

function gn(t) {
    switch (t) {
        case 3e3:
            return ["Linear", "( value )"];
        case 3001:
            return ["sRGB", "( value )"];
        case 3002:
            return ["RGBE", "( value )"];
        case 3004:
            return ["RGBM", "( value, 7.0 )"];
        case 3005:
            return ["RGBM", "( value, 16.0 )"];
        case 3006:
            return ["RGBD", "( value, 256.0 )"];
        case 3007:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        case 3003:
            return ["LogLuv", "( value )"];
        default:
            throw new Error("unsupported encoding: " + t)
    }
}

function vn(t, e, i) {
    var n = t.getShaderParameter(e, 35713),
        r = t.getShaderInfoLog(e).trim();
    return n && "" === r ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + i + "\n" + r + function(t) {
        for (var e = t.split("\n"), i = 0; i < e.length; i++) e[i] = i + 1 + ": " + e[i];
        return e.join("\n")
    }(t.getShaderSource(e))
}

function yn(t, e) {
    var i = gn(e);
    return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
}

function xn(t, e) {
    var i;
    switch (e) {
        case 1:
            i = "Linear";
            break;
        case 2:
            i = "Reinhard";
            break;
        case 3:
            i = "Uncharted2";
            break;
        case 4:
            i = "OptimizedCineon";
            break;
        case 5:
            i = "ACESFilmic";
            break;
        default:
            throw new Error("unsupported toneMapping: " + e)
    }
    return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
}

function bn(t) {
    return "" !== t
}

function _n(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}

function wn(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
var Mn = /^[ \t]*#include +<([\w\d./]+)>/gm;

function Sn(t) {
    return t.replace(Mn, Tn)
}

function Tn(t, e) {
    var i = ii[e];
    if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
    return Sn(i)
}
var En = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    An = /#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;

function Ln(t) {
    return t.replace(An, Pn).replace(En, Rn)
}

function Rn(t, e, i, n) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Pn(t, e, i, n)
}

function Pn(t, e, i, n) {
    for (var r = "", a = parseInt(e); a < parseInt(i); a++) r += n.replace(/\[ i \]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
    return r
}

function Cn(t) {
    var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
}

function On(t, e, i) {
    var n, r, a, o, s, c = t.getContext(),
        h = i.defines,
        l = i.vertexShader,
        u = i.fragmentShader,
        d = function(t) {
            var e = "SHADOWMAP_TYPE_BASIC";
            return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
        }(i),
        p = function(t) {
            var e = "ENVMAP_TYPE_CUBE";
            if (t.envMap) switch (t.envMapMode) {
                case 301:
                case 302:
                    e = "ENVMAP_TYPE_CUBE";
                    break;
                case 306:
                case 307:
                    e = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case 303:
                case 304:
                    e = "ENVMAP_TYPE_EQUIREC";
                    break;
                case 305:
                    e = "ENVMAP_TYPE_SPHERE"
            }
            return e
        }(i),
        f = function(t) {
            var e = "ENVMAP_MODE_REFLECTION";
            if (t.envMap) switch (t.envMapMode) {
                case 302:
                case 304:
                    e = "ENVMAP_MODE_REFRACTION"
            }
            return e
        }(i),
        m = function(t) {
            var e = "ENVMAP_BLENDING_NONE";
            if (t.envMap) switch (t.combine) {
                case 0:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    e = "ENVMAP_BLENDING_ADD"
            }
            return e
        }(i),
        g = t.gammaFactor > 0 ? t.gammaFactor : 1,
        v = i.isWebGL2 ? "" : function(t) {
            return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(bn).join("\n")
        }(i),
        y = function(t) {
            var e = [];
            for (var i in t) {
                var n = t[i];
                !1 !== n && e.push("#define " + i + " " + n)
            }
            return e.join("\n")
        }(h),
        x = c.createProgram();
    if (i.isRawShaderMaterial ? ((n = [y].filter(bn).join("\n")).length > 0 && (n += "\n"), (r = [v, y].filter(bn).join("\n")).length > 0 && (r += "\n")) : (n = [Cn(i), "#define SHADER_NAME " + i.shaderName, y, i.instancing ? "#define USE_INSTANCING" : "", i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + i.maxBones, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + f : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.useVertexTexture ? "#define BONE_TEXTURE" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + d : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(bn).join("\n"), r = [v, Cn(i), "#define SHADER_NAME " + i.shaderName, y, i.alphaTest ? "#define ALPHATEST " + i.alphaTest + (i.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + g, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.matcap ? "#define USE_MATCAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + p : "", i.envMap ? "#define " + f : "", i.envMap ? "#define " + m : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.sheen ? "#define USE_SHEEN" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + d : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (i.extensionShaderTextureLOD || i.envMap) && i.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== i.toneMapping ? "#define TONE_MAPPING" : "", 0 !== i.toneMapping ? ii.tonemapping_pars_fragment : "", 0 !== i.toneMapping ? xn("toneMapping", i.toneMapping) : "", i.dithering ? "#define DITHERING" : "", i.outputEncoding || i.mapEncoding || i.matcapEncoding || i.envMapEncoding || i.emissiveMapEncoding || i.lightMapEncoding ? ii.encodings_pars_fragment : "", i.mapEncoding ? yn("mapTexelToLinear", i.mapEncoding) : "", i.matcapEncoding ? yn("matcapTexelToLinear", i.matcapEncoding) : "", i.envMapEncoding ? yn("envMapTexelToLinear", i.envMapEncoding) : "", i.emissiveMapEncoding ? yn("emissiveMapTexelToLinear", i.emissiveMapEncoding) : "", i.lightMapEncoding ? yn("lightMapTexelToLinear", i.lightMapEncoding) : "", i.outputEncoding ? (a = "linearToOutputTexel", o = i.outputEncoding, s = gn(o), "vec4 " + a + "( vec4 value ) { return LinearTo" + s[0] + s[1] + "; }") : "", i.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(bn).join("\n")), l = wn(l = _n(l = Sn(l), i), i), u = wn(u = _n(u = Sn(u), i), i), l = Ln(l), u = Ln(u), i.isWebGL2 && !i.isRawShaderMaterial) {
        var b = !1,
            _ = /^\s*#version\s+300\s+es\s*\n/;
        i.isShaderMaterial && null !== l.match(_) && null !== u.match(_) && (b = !0, l = l.replace(_, ""), u = u.replace(_, "")), n = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + n, r = ["#version 300 es\n", "#define varying in", b ? "" : "out highp vec4 pc_fragColor;", b ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + r
    }
    var w, M, S = r + u,
        T = fn(c, 35633, n + l),
        E = fn(c, 35632, S);
    if (c.attachShader(x, T), c.attachShader(x, E), void 0 !== i.index0AttributeName ? c.bindAttribLocation(x, 0, i.index0AttributeName) : !0 === i.morphTargets && c.bindAttribLocation(x, 0, "position"), c.linkProgram(x), t.debug.checkShaderErrors) {
        var A = c.getProgramInfoLog(x).trim(),
            L = c.getShaderInfoLog(T).trim(),
            R = c.getShaderInfoLog(E).trim(),
            P = !0,
            C = !0;
        if (!1 === c.getProgramParameter(x, 35714)) {
            P = !1;
            var O = vn(c, T, "vertex"),
                I = vn(c, E, "fragment");
            console.error("THREE.WebGLProgram: shader error: ", c.getError(), "35715", c.getProgramParameter(x, 35715), "gl.getProgramInfoLog", A, O, I)
        } else "" !== A ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", A) : "" !== L && "" !== R || (C = !1);
        C && (this.diagnostics = {
            runnable: P,
            programLog: A,
            vertexShader: {
                log: L,
                prefix: n
            },
            fragmentShader: {
                log: R,
                prefix: r
            }
        })
    }
    return c.deleteShader(T), c.deleteShader(E), this.getUniforms = function() {
        return void 0 === w && (w = new pn(c, x)), w
    }, this.getAttributes = function() {
        return void 0 === M && (M = function(t, e) {
            for (var i = {}, n = t.getProgramParameter(e, 35721), r = 0; r < n; r++) {
                var a = t.getActiveAttrib(e, r).name;
                i[a] = t.getAttribLocation(e, a)
            }
            return i
        }(c, x)), M
    }, this.destroy = function() {
        c.deleteProgram(x), this.program = void 0
    }, this.name = i.shaderName, this.id = mn++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = T, this.fragmentShader = E, this
}

function In(t, e, i) {
    var n = [],
        r = i.isWebGL2,
        a = i.logarithmicDepthBuffer,
        o = i.floatVertexTextures,
        s = i.precision,
        c = i.maxVertexUniforms,
        h = i.vertexTextures,
        l = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        },
        u = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen"];

    function d(t) {
        var e;
        return t ? t.isTexture ? e = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = 3e3, e
    }
    this.getParameters = function(n, u, p, f, m, g, v) {
        var y = f.fog,
            x = n.isMeshStandardMaterial ? f.environment : null,
            b = n.envMap || x,
            _ = l[n.type],
            w = v.isSkinnedMesh ? function(t) {
                var e = t.skeleton.bones;
                if (o) return 1024;
                var i = c,
                    n = Math.floor((i - 20) / 4),
                    r = Math.min(n, e.length);
                return r < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + r + "."), 0) : r
            }(v) : 0;
        null !== n.precision && (s = i.getMaxPrecision(n.precision)) !== n.precision && console.warn("THREE.WebGLProgram.getParameters:", n.precision, "not supported, using", s, "instead.");
        var M = function(t, e) {
            var i;
            if (e) {
                var n = ni[e];
                i = {
                    name: t.type,
                    uniforms: He.clone(n.uniforms),
                    vertexShader: n.vertexShader,
                    fragmentShader: n.fragmentShader
                }
            } else i = {
                name: t.type,
                uniforms: t.uniforms,
                vertexShader: t.vertexShader,
                fragmentShader: t.fragmentShader
            };
            return i
        }(n, _);
        n.onBeforeCompile(M, t);
        var S = t.getRenderTarget();
        return {
            isWebGL2: r,
            shaderID: _,
            shaderName: M.name,
            uniforms: M.uniforms,
            vertexShader: M.vertexShader,
            fragmentShader: M.fragmentShader,
            defines: n.defines,
            isRawShaderMaterial: n.isRawShaderMaterial,
            isShaderMaterial: n.isShaderMaterial,
            precision: s,
            instancing: !0 === v.isInstancedMesh,
            supportsVertexTextures: h,
            outputEncoding: null !== S ? d(S.texture) : t.outputEncoding,
            map: !!n.map,
            mapEncoding: d(n.map),
            matcap: !!n.matcap,
            matcapEncoding: d(n.matcap),
            envMap: !!b,
            envMapMode: b && b.mapping,
            envMapEncoding: d(b),
            envMapCubeUV: !!b && (306 === b.mapping || 307 === b.mapping),
            lightMap: !!n.lightMap,
            lightMapEncoding: d(n.lightMap),
            aoMap: !!n.aoMap,
            emissiveMap: !!n.emissiveMap,
            emissiveMapEncoding: d(n.emissiveMap),
            bumpMap: !!n.bumpMap,
            normalMap: !!n.normalMap,
            objectSpaceNormalMap: 1 === n.normalMapType,
            tangentSpaceNormalMap: 0 === n.normalMapType,
            clearcoatMap: !!n.clearcoatMap,
            clearcoatRoughnessMap: !!n.clearcoatRoughnessMap,
            clearcoatNormalMap: !!n.clearcoatNormalMap,
            displacementMap: !!n.displacementMap,
            roughnessMap: !!n.roughnessMap,
            metalnessMap: !!n.metalnessMap,
            specularMap: !!n.specularMap,
            alphaMap: !!n.alphaMap,
            gradientMap: !!n.gradientMap,
            sheen: !!n.sheen,
            combine: n.combine,
            vertexTangents: n.normalMap && n.vertexTangents,
            vertexColors: n.vertexColors,
            vertexUvs: !!(n.map || n.bumpMap || n.normalMap || n.specularMap || n.alphaMap || n.emissiveMap || n.roughnessMap || n.metalnessMap || n.clearcoatMap || n.clearcoatRoughnessMap || n.clearcoatNormalMap || n.displacementMap),
            uvsVertexOnly: !(n.map || n.bumpMap || n.normalMap || n.specularMap || n.alphaMap || n.emissiveMap || n.roughnessMap || n.metalnessMap || n.clearcoatNormalMap || !n.displacementMap),
            fog: !!y,
            useFog: n.fog,
            fogExp2: y && y.isFogExp2,
            flatShading: n.flatShading,
            sizeAttenuation: n.sizeAttenuation,
            logarithmicDepthBuffer: a,
            skinning: n.skinning && w > 0,
            maxBones: w,
            useVertexTexture: o,
            morphTargets: n.morphTargets,
            morphNormals: n.morphNormals,
            maxMorphTargets: t.maxMorphTargets,
            maxMorphNormals: t.maxMorphNormals,
            numDirLights: u.directional.length,
            numPointLights: u.point.length,
            numSpotLights: u.spot.length,
            numRectAreaLights: u.rectArea.length,
            numHemiLights: u.hemi.length,
            numDirLightShadows: u.directionalShadowMap.length,
            numPointLightShadows: u.pointShadowMap.length,
            numSpotLightShadows: u.spotShadowMap.length,
            numClippingPlanes: m,
            numClipIntersection: g,
            dithering: n.dithering,
            shadowMapEnabled: t.shadowMap.enabled && p.length > 0,
            shadowMapType: t.shadowMap.type,
            toneMapping: n.toneMapped ? t.toneMapping : 0,
            physicallyCorrectLights: t.physicallyCorrectLights,
            premultipliedAlpha: n.premultipliedAlpha,
            alphaTest: n.alphaTest,
            doubleSided: 2 === n.side,
            flipSided: 1 === n.side,
            depthPacking: void 0 !== n.depthPacking && n.depthPacking,
            index0AttributeName: n.index0AttributeName,
            extensionDerivatives: n.extensions && n.extensions.derivatives,
            extensionFragDepth: n.extensions && n.extensions.fragDepth,
            extensionDrawBuffers: n.extensions && n.extensions.drawBuffers,
            extensionShaderTextureLOD: n.extensions && n.extensions.shaderTextureLOD,
            rendererExtensionFragDepth: r || null !== e.get("EXT_frag_depth"),
            rendererExtensionDrawBuffers: r || null !== e.get("WEBGL_draw_buffers"),
            rendererExtensionShaderTextureLod: r || null !== e.get("EXT_shader_texture_lod"),
            onBeforeCompile: n.onBeforeCompile
        }
    }, this.getProgramCacheKey = function(e) {
        var i = [];
        if (e.shaderID ? i.push(e.shaderID) : (i.push(e.fragmentShader), i.push(e.vertexShader)), void 0 !== e.defines)
            for (var n in e.defines) i.push(n), i.push(e.defines[n]);
        if (void 0 === e.isRawShaderMaterial) {
            for (var r = 0; r < u.length; r++) i.push(e[u[r]]);
            i.push(t.outputEncoding), i.push(t.gammaFactor)
        }
        return i.push(e.onBeforeCompile.toString()), i.join()
    }, this.acquireProgram = function(e, i) {
        for (var r, a = 0, o = n.length; a < o; a++) {
            var s = n[a];
            if (s.cacheKey === i) {
                ++(r = s).usedTimes;
                break
            }
        }
        return void 0 === r && (r = new On(t, i, e), n.push(r)), r
    }, this.releaseProgram = function(t) {
        if (0 == --t.usedTimes) {
            var e = n.indexOf(t);
            n[e] = n[n.length - 1], n.pop(), t.destroy()
        }
    }, this.programs = n
}

function Dn() {
    var t = new WeakMap;
    return {
        get: function(e) {
            var i = t.get(e);
            return void 0 === i && (i = {}, t.set(e, i)), i
        },
        remove: function(e) {
            t.delete(e)
        },
        update: function(e, i, n) {
            t.get(e)[i] = n
        },
        dispose: function() {
            t = new WeakMap
        }
    }
}

function Nn(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
}

function zn(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
}

function Un() {
    var t = [],
        e = 0,
        i = [],
        n = [],
        r = {
            id: -1
        };

    function a(i, n, a, o, s, c) {
        var h = t[e];
        return void 0 === h ? (h = {
            id: i.id,
            object: i,
            geometry: n,
            material: a,
            program: a.program || r,
            groupOrder: o,
            renderOrder: i.renderOrder,
            z: s,
            group: c
        }, t[e] = h) : (h.id = i.id, h.object = i, h.geometry = n, h.material = a, h.program = a.program || r, h.groupOrder = o, h.renderOrder = i.renderOrder, h.z = s, h.group = c), e++, h
    }
    return {
        opaque: i,
        transparent: n,
        init: function() {
            e = 0, i.length = 0, n.length = 0
        },
        push: function(t, e, r, o, s, c) {
            var h = a(t, e, r, o, s, c);
            (!0 === r.transparent ? n : i).push(h)
        },
        unshift: function(t, e, r, o, s, c) {
            var h = a(t, e, r, o, s, c);
            (!0 === r.transparent ? n : i).unshift(h)
        },
        finish: function() {
            for (var i = e, n = t.length; i < n; i++) {
                var r = t[i];
                if (null === r.id) break;
                r.id = null, r.object = null, r.geometry = null, r.material = null, r.program = null, r.group = null
            }
        },
        sort: function(t, e) {
            i.length > 1 && i.sort(t || Nn), n.length > 1 && n.sort(e || zn)
        }
    }
}

function Fn() {
    var t = new WeakMap;

    function e(i) {
        var n = i.target;
        n.removeEventListener("dispose", e), t.delete(n)
    }
    return {
        get: function(i, n) {
            var r, a = t.get(i);
            return void 0 === a ? (r = new Un, t.set(i, new WeakMap), t.get(i).set(n, r), i.addEventListener("dispose", e)) : void 0 === (r = a.get(n)) && (r = new Un, a.set(n, r)), r
        },
        dispose: function() {
            t = new WeakMap
        }
    }
}

function Bn() {
    var t = {};
    return {
        get: function(e) {
            if (void 0 !== t[e.id]) return t[e.id];
            var i;
            switch (e.type) {
                case "DirectionalLight":
                    i = {
                        direction: new _,
                        color: new Ft
                    };
                    break;
                case "SpotLight":
                    i = {
                        position: new _,
                        direction: new _,
                        color: new Ft,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    i = {
                        position: new _,
                        color: new Ft,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    i = {
                        direction: new _,
                        skyColor: new Ft,
                        groundColor: new Ft
                    };
                    break;
                case "RectAreaLight":
                    i = {
                        color: new Ft,
                        position: new _,
                        halfWidth: new _,
                        halfHeight: new _
                    }
            }
            return t[e.id] = i, i
        }
    }
}
var Gn = 0;

function Hn(t, e) {
    return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
}

function kn() {
    for (var t, e = new Bn, i = (t = {}, {
            get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                var i;
                switch (e.type) {
                    case "DirectionalLight":
                    case "SpotLight":
                        i = {
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new l
                        };
                        break;
                    case "PointLight":
                        i = {
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new l,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        }
                }
                return t[e.id] = i, i
            }
        }), n = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        }, r = 0; r < 9; r++) n.probe.push(new _);
    var a = new _,
        o = new R,
        s = new R;
    return {
        setup: function(t, r, c) {
            for (var h = 0, l = 0, u = 0, d = 0; d < 9; d++) n.probe[d].set(0, 0, 0);
            var p = 0,
                f = 0,
                m = 0,
                g = 0,
                v = 0,
                y = 0,
                x = 0,
                b = 0,
                _ = c.matrixWorldInverse;
            t.sort(Hn), d = 0;
            for (var w = t.length; d < w; d++) {
                var M = t[d],
                    S = M.color,
                    T = M.intensity,
                    E = M.distance,
                    A = M.shadow && M.shadow.map ? M.shadow.map.texture : null;
                if (M.isAmbientLight) h += S.r * T, l += S.g * T, u += S.b * T;
                else if (M.isLightProbe)
                    for (var L = 0; L < 9; L++) n.probe[L].addScaledVector(M.sh.coefficients[L], T);
                else if (M.isDirectionalLight) {
                    if ((C = e.get(M)).color.copy(M.color).multiplyScalar(M.intensity), C.direction.setFromMatrixPosition(M.matrixWorld), a.setFromMatrixPosition(M.target.matrixWorld), C.direction.sub(a), C.direction.transformDirection(_), M.castShadow) {
                        var R = M.shadow;
                        (P = i.get(M)).shadowBias = R.bias, P.shadowRadius = R.radius, P.shadowMapSize = R.mapSize, n.directionalShadow[p] = P, n.directionalShadowMap[p] = A, n.directionalShadowMatrix[p] = M.shadow.matrix, y++
                    }
                    n.directional[p] = C, p++
                } else if (M.isSpotLight) {
                    if ((C = e.get(M)).position.setFromMatrixPosition(M.matrixWorld), C.position.applyMatrix4(_), C.color.copy(S).multiplyScalar(T), C.distance = E, C.direction.setFromMatrixPosition(M.matrixWorld), a.setFromMatrixPosition(M.target.matrixWorld), C.direction.sub(a), C.direction.transformDirection(_), C.coneCos = Math.cos(M.angle), C.penumbraCos = Math.cos(M.angle * (1 - M.penumbra)), C.decay = M.decay, M.castShadow) {
                        R = M.shadow;
                        (P = i.get(M)).shadowBias = R.bias, P.shadowRadius = R.radius, P.shadowMapSize = R.mapSize, n.spotShadow[m] = P, n.spotShadowMap[m] = A, n.spotShadowMatrix[m] = M.shadow.matrix, b++
                    }
                    n.spot[m] = C, m++
                } else if (M.isRectAreaLight) {
                    (C = e.get(M)).color.copy(S).multiplyScalar(T), C.position.setFromMatrixPosition(M.matrixWorld), C.position.applyMatrix4(_), s.identity(), o.copy(M.matrixWorld), o.premultiply(_), s.extractRotation(o), C.halfWidth.set(.5 * M.width, 0, 0), C.halfHeight.set(0, .5 * M.height, 0), C.halfWidth.applyMatrix4(s), C.halfHeight.applyMatrix4(s), n.rectArea[g] = C, g++
                } else if (M.isPointLight) {
                    if ((C = e.get(M)).position.setFromMatrixPosition(M.matrixWorld), C.position.applyMatrix4(_), C.color.copy(M.color).multiplyScalar(M.intensity), C.distance = M.distance, C.decay = M.decay, M.castShadow) {
                        var P;
                        R = M.shadow;
                        (P = i.get(M)).shadowBias = R.bias, P.shadowRadius = R.radius, P.shadowMapSize = R.mapSize, P.shadowCameraNear = R.camera.near, P.shadowCameraFar = R.camera.far, n.pointShadow[f] = P, n.pointShadowMap[f] = A, n.pointShadowMatrix[f] = M.shadow.matrix, x++
                    }
                    n.point[f] = C, f++
                } else if (M.isHemisphereLight) {
                    var C;
                    (C = e.get(M)).direction.setFromMatrixPosition(M.matrixWorld), C.direction.transformDirection(_), C.direction.normalize(), C.skyColor.copy(M.color).multiplyScalar(T), C.groundColor.copy(M.groundColor).multiplyScalar(T), n.hemi[v] = C, v++
                }
            }
            n.ambient[0] = h, n.ambient[1] = l, n.ambient[2] = u;
            var O = n.hash;
            O.directionalLength === p && O.pointLength === f && O.spotLength === m && O.rectAreaLength === g && O.hemiLength === v && O.numDirectionalShadows === y && O.numPointShadows === x && O.numSpotShadows === b || (n.directional.length = p, n.spot.length = m, n.rectArea.length = g, n.point.length = f, n.hemi.length = v, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = x, n.pointShadowMap.length = x, n.spotShadow.length = b, n.spotShadowMap.length = b, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = x, n.spotShadowMatrix.length = b, O.directionalLength = p, O.pointLength = f, O.spotLength = m, O.rectAreaLength = g, O.hemiLength = v, O.numDirectionalShadows = y, O.numPointShadows = x, O.numSpotShadows = b, n.version = Gn++)
        },
        state: n
    }
}

function Vn() {
    var t = new kn,
        e = [],
        i = [];
    return {
        init: function() {
            e.length = 0, i.length = 0
        },
        state: {
            lightsArray: e,
            shadowsArray: i,
            lights: t
        },
        setupLights: function(n) {
            t.setup(e, i, n)
        },
        pushLight: function(t) {
            e.push(t)
        },
        pushShadow: function(t) {
            i.push(t)
        }
    }
}

function jn() {
    var t = new WeakMap;

    function e(i) {
        var n = i.target;
        n.removeEventListener("dispose", e), t.delete(n)
    }
    return {
        get: function(i, n) {
            var r;
            return !1 === t.has(i) ? (r = new Vn, t.set(i, new WeakMap), t.get(i).set(n, r), i.addEventListener("dispose", e)) : !1 === t.get(i).has(n) ? (r = new Vn, t.get(i).set(n, r)) : r = t.get(i).get(n), r
        },
        dispose: function() {
            t = new WeakMap
        }
    }
}

function Wn(t) {
    jt.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t)
}

function qn(t) {
    jt.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new _, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t)
}
Wn.prototype = Object.create(jt.prototype), Wn.prototype.constructor = Wn, Wn.prototype.isMeshDepthMaterial = !0, Wn.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
}, qn.prototype = Object.create(jt.prototype), qn.prototype.constructor = qn, qn.prototype.isMeshDistanceMaterial = !0, qn.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
};

function Xn(t, e, i) {
    var n = new Je,
        r = new l,
        a = new l,
        o = new m,
        s = [],
        c = [],
        h = {},
        u = {
            0: 1,
            1: 0,
            2: 2
        },
        d = new ke({
            defines: {
                SAMPLE_RATE: .25,
                HALF_SAMPLE_RATE: 1 / 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new l
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        }),
        p = d.clone();
    p.defines.HORIZONAL_PASS = 1;
    var f = new de;
    f.setAttribute("position", new Xt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    var v = new Pe(f, d),
        y = this;

    function x(i, n) {
        var r = e.update(v);
        d.uniforms.shadow_pass.value = i.map.texture, d.uniforms.resolution.value = i.mapSize, d.uniforms.radius.value = i.radius, t.setRenderTarget(i.mapPass), t.clear(), t.renderBufferDirect(n, null, r, d, v, null), p.uniforms.shadow_pass.value = i.mapPass.texture, p.uniforms.resolution.value = i.mapSize, p.uniforms.radius.value = i.radius, t.setRenderTarget(i.map), t.clear(), t.renderBufferDirect(n, null, r, p, v, null)
    }

    function b(t, e, i) {
        var n = t << 0 | e << 1 | i << 2,
            r = s[n];
        return void 0 === r && (r = new Wn({
            depthPacking: 3201,
            morphTargets: t,
            skinning: e
        }), s[n] = r), r
    }

    function _(t, e, i) {
        var n = t << 0 | e << 1 | i << 2,
            r = c[n];
        return void 0 === r && (r = new qn({
            morphTargets: t,
            skinning: e
        }), c[n] = r), r
    }

    function w(e, i, n, r, a, o, s) {
        var c = null,
            l = b,
            d = e.customDepthMaterial;
        if (!0 === r.isPointLight && (l = _, d = e.customDistanceMaterial), void 0 === d) {
            var p = !1;
            !0 === n.morphTargets && (p = i.morphAttributes && i.morphAttributes.position && i.morphAttributes.position.length > 0);
            var f = !1;
            !0 === e.isSkinnedMesh && (!0 === n.skinning ? f = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e)), c = l(p, f, !0 === e.isInstancedMesh)
        } else c = d;
        if (t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
            var m = c.uuid,
                g = n.uuid,
                v = h[m];
            void 0 === v && (v = {}, h[m] = v);
            var y = v[g];
            void 0 === y && (y = c.clone(), v[g] = y), c = y
        }
        return c.visible = n.visible, c.wireframe = n.wireframe, c.side = 3 === s ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : u[n.side], c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, !0 === r.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(r.matrixWorld), c.nearDistance = a, c.farDistance = o), c
    }

    function M(i, r, a, o, s) {
        if (!1 !== i.visible) {
            if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && (i.castShadow || i.receiveShadow && 3 === s) && (!i.frustumCulled || n.intersectsObject(i))) {
                i.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, i.matrixWorld);
                var c = e.update(i),
                    h = i.material;
                if (Array.isArray(h))
                    for (var l = c.groups, u = 0, d = l.length; u < d; u++) {
                        var p = l[u],
                            f = h[p.materialIndex];
                        if (f && f.visible) {
                            var m = w(i, c, f, o, a.near, a.far, s);
                            t.renderBufferDirect(a, null, c, m, i, p)
                        }
                    } else if (h.visible) {
                        m = w(i, c, h, o, a.near, a.far, s);
                        t.renderBufferDirect(a, null, c, m, i, null)
                    }
            }
            for (var g = i.children, v = 0, y = g.length; v < y; v++) M(g[v], r, a, o, s)
        }
    }
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, s, c) {
        if (!1 !== y.enabled && (!1 !== y.autoUpdate || !1 !== y.needsUpdate) && 0 !== e.length) {
            var h = t.getRenderTarget(),
                l = t.getActiveCubeFace(),
                u = t.getActiveMipmapLevel(),
                d = t.state;
            d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
            for (var p = 0, f = e.length; p < f; p++) {
                var m = e[p],
                    v = m.shadow;
                if (void 0 !== v) {
                    r.copy(v.mapSize);
                    var b = v.getFrameExtents();
                    if (r.multiply(b), a.copy(v.mapSize), (r.x > i || r.y > i) && (r.x > i && (a.x = Math.floor(i / b.x), r.x = a.x * b.x, v.mapSize.x = a.x), r.y > i && (a.y = Math.floor(i / b.y), r.y = a.y * b.y, v.mapSize.y = a.y)), null === v.map && !v.isPointLightShadow && 3 === this.type) {
                        var _ = {
                            minFilter: 1006,
                            magFilter: 1006,
                            format: 1023
                        };
                        v.map = new g(r.x, r.y, _), v.map.texture.name = m.name + ".shadowMap", v.mapPass = new g(r.x, r.y, _), v.camera.updateProjectionMatrix()
                    }
                    if (null === v.map) {
                        _ = {
                            minFilter: 1003,
                            magFilter: 1003,
                            format: 1023
                        };
                        v.map = new g(r.x, r.y, _), v.map.texture.name = m.name + ".shadowMap", v.camera.updateProjectionMatrix()
                    }
                    t.setRenderTarget(v.map), t.clear();
                    for (var w = v.getViewportCount(), S = 0; S < w; S++) {
                        var T = v.getViewport(S);
                        o.set(a.x * T.x, a.y * T.y, a.x * T.z, a.y * T.w), d.viewport(o), v.updateMatrices(m, S), n = v.getFrustum(), M(s, c, v.camera, m, this.type)
                    }
                    v.isPointLightShadow || 3 !== this.type || x(v, c)
                } else console.warn("THREE.WebGLShadowMap:", m, "has no shadow.")
            }
            y.needsUpdate = !1, t.setRenderTarget(h, l, u)
        }
    }
}

function Yn(t, e, i) {
    var n = i.isWebGL2;
    var r = new function() {
            var e = !1,
                i = new m,
                n = null,
                r = new m(0, 0, 0, 0);
            return {
                setMask: function(i) {
                    n === i || e || (t.colorMask(i, i, i, i), n = i)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e, n, a, o, s) {
                    !0 === s && (e *= o, n *= o, a *= o), i.set(e, n, a, o), !1 === r.equals(i) && (t.clearColor(e, n, a, o), r.copy(i))
                },
                reset: function() {
                    e = !1, n = null, r.set(-1, 0, 0, 0)
                }
            }
        },
        a = new function() {
            var e = !1,
                i = null,
                n = null,
                r = null;
            return {
                setTest: function(t) {
                    t ? B(2929) : G(2929)
                },
                setMask: function(n) {
                    i === n || e || (t.depthMask(n), i = n)
                },
                setFunc: function(e) {
                    if (n !== e) {
                        if (e) switch (e) {
                            case 0:
                                t.depthFunc(512);
                                break;
                            case 1:
                                t.depthFunc(519);
                                break;
                            case 2:
                                t.depthFunc(513);
                                break;
                            case 3:
                                t.depthFunc(515);
                                break;
                            case 4:
                                t.depthFunc(514);
                                break;
                            case 5:
                                t.depthFunc(518);
                                break;
                            case 6:
                                t.depthFunc(516);
                                break;
                            case 7:
                                t.depthFunc(517);
                                break;
                            default:
                                t.depthFunc(515)
                        } else t.depthFunc(515);
                        n = e
                    }
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    r !== e && (t.clearDepth(e), r = e)
                },
                reset: function() {
                    e = !1, i = null, n = null, r = null
                }
            }
        },
        o = new function() {
            var e = !1,
                i = null,
                n = null,
                r = null,
                a = null,
                o = null,
                s = null,
                c = null,
                h = null;
            return {
                setTest: function(t) {
                    e || (t ? B(2960) : G(2960))
                },
                setMask: function(n) {
                    i === n || e || (t.stencilMask(n), i = n)
                },
                setFunc: function(e, i, o) {
                    n === e && r === i && a === o || (t.stencilFunc(e, i, o), n = e, r = i, a = o)
                },
                setOp: function(e, i, n) {
                    o === e && s === i && c === n || (t.stencilOp(e, i, n), o = e, s = i, c = n)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    h !== e && (t.clearStencil(e), h = e)
                },
                reset: function() {
                    e = !1, i = null, n = null, r = null, a = null, o = null, s = null, c = null, h = null
                }
            }
        },
        s = t.getParameter(34921),
        c = new Uint8Array(s),
        h = new Uint8Array(s),
        l = new Uint8Array(s),
        u = {},
        d = null,
        p = null,
        f = null,
        g = null,
        v = null,
        y = null,
        x = null,
        b = null,
        _ = null,
        w = !1,
        M = null,
        S = null,
        T = null,
        E = null,
        A = null,
        L = t.getParameter(35661),
        R = !1,
        P = 0,
        C = t.getParameter(7938); - 1 !== C.indexOf("WebGL") ? (P = parseFloat(/^WebGL\ ([0-9])/.exec(C)[1]), R = P >= 1) : -1 !== C.indexOf("OpenGL ES") && (P = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(C)[1]), R = P >= 2);
    var O = null,
        I = {},
        D = new m,
        N = new m;

    function z(e, i, n) {
        var r = new Uint8Array(4),
            a = t.createTexture();
        t.bindTexture(e, a), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
        for (var o = 0; o < n; o++) t.texImage2D(i + o, 0, 6408, 1, 1, 0, 6408, 5121, r);
        return a
    }
    var U = {};

    function F(i, r) {
        (c[i] = 1, 0 === h[i] && (t.enableVertexAttribArray(i), h[i] = 1), l[i] !== r) && ((n ? t : e.get("ANGLE_instanced_arrays"))[n ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), l[i] = r)
    }

    function B(e) {
        !0 !== u[e] && (t.enable(e), u[e] = !0)
    }

    function G(e) {
        !1 !== u[e] && (t.disable(e), u[e] = !1)
    }
    U[3553] = z(3553, 3553, 1), U[34067] = z(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), B(2929), a.setFunc(3), W(!1), q(1), B(2884), j(0);
    var H = {
        100: 32774,
        101: 32778,
        102: 32779
    };
    if (n) H[103] = 32775, H[104] = 32776;
    else {
        var k = e.get("EXT_blend_minmax");
        null !== k && (H[103] = k.MIN_EXT, H[104] = k.MAX_EXT)
    }
    var V = {
        200: 0,
        201: 1,
        202: 768,
        204: 770,
        210: 776,
        208: 774,
        206: 772,
        203: 769,
        205: 771,
        209: 775,
        207: 773
    };

    function j(e, i, n, r, a, o, s, c) {
        if (0 !== e) {
            if (p || (B(3042), p = !0), 5 === e) a = a || i, o = o || n, s = s || r, i === g && a === x || (t.blendEquationSeparate(H[i], H[a]), g = i, x = a), n === v && r === y && o === b && s === _ || (t.blendFuncSeparate(V[n], V[r], V[o], V[s]), v = n, y = r, b = o, _ = s), f = e, w = null;
            else if (e !== f || c !== w) {
                if (100 === g && 100 === x || (t.blendEquation(32774), g = 100, x = 100), c) switch (e) {
                    case 1:
                        t.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case 2:
                        t.blendFunc(1, 1);
                        break;
                    case 3:
                        t.blendFuncSeparate(0, 0, 769, 771);
                        break;
                    case 4:
                        t.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", e)
                } else switch (e) {
                    case 1:
                        t.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case 2:
                        t.blendFunc(770, 1);
                        break;
                    case 3:
                        t.blendFunc(0, 769);
                        break;
                    case 4:
                        t.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", e)
                }
                v = null, y = null, b = null, _ = null, f = e, w = c
            }
        } else p && (G(3042), p = !1)
    }

    function W(e) {
        M !== e && (e ? t.frontFace(2304) : t.frontFace(2305), M = e)
    }

    function q(e) {
        0 !== e ? (B(2884), e !== S && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : G(2884), S = e
    }

    function X(e, i, n) {
        e ? (B(32823), E === i && A === n || (t.polygonOffset(i, n), E = i, A = n)) : G(32823)
    }

    function Y(e) {
        void 0 === e && (e = 33984 + L - 1), O !== e && (t.activeTexture(e), O = e)
    }
    return {
        buffers: {
            color: r,
            depth: a,
            stencil: o
        },
        initAttributes: function() {
            for (var t = 0, e = c.length; t < e; t++) c[t] = 0
        },
        enableAttribute: function(t) {
            F(t, 0)
        },
        enableAttributeAndDivisor: F,
        disableUnusedAttributes: function() {
            for (var e = 0, i = h.length; e !== i; ++e) h[e] !== c[e] && (t.disableVertexAttribArray(e), h[e] = 0)
        },
        vertexAttribPointer: function(e, i, r, a, o, s) {
            !0 !== n || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, i, r, a, o, s) : t.vertexAttribIPointer(e, i, r, a, o, s)
        },
        enable: B,
        disable: G,
        useProgram: function(e) {
            return d !== e && (t.useProgram(e), d = e, !0)
        },
        setBlending: j,
        setMaterial: function(t, e) {
            2 === t.side ? G(2884) : B(2884);
            var i = 1 === t.side;
            e && (i = !i), W(i), 1 === t.blending && !1 === t.transparent ? j(0) : j(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), r.setMask(t.colorWrite);
            var n = t.stencilWrite;
            o.setTest(n), n && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), X(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
        },
        setFlipSided: W,
        setCullFace: q,
        setLineWidth: function(e) {
            e !== T && (R && t.lineWidth(e), T = e)
        },
        setPolygonOffset: X,
        setScissorTest: function(t) {
            t ? B(3089) : G(3089)
        },
        activeTexture: Y,
        bindTexture: function(e, i) {
            null === O && Y();
            var n = I[O];
            void 0 === n && (n = {
                type: void 0,
                texture: void 0
            }, I[O] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || U[e]), n.type = e, n.texture = i)
        },
        unbindTexture: function() {
            var e = I[O];
            void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
        },
        compressedTexImage2D: function() {
            try {
                t.compressedTexImage2D.apply(t, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        },
        texImage2D: function() {
            try {
                t.texImage2D.apply(t, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        },
        texImage3D: function() {
            try {
                t.texImage3D.apply(t, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        },
        scissor: function(e) {
            !1 === D.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), D.copy(e))
        },
        viewport: function(e) {
            !1 === N.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), N.copy(e))
        },
        reset: function() {
            for (var e = 0; e < h.length; e++) 1 === h[e] && (t.disableVertexAttribArray(e), h[e] = 0);
            u = {}, O = null, I = {}, d = null, f = null, M = null, S = null, r.reset(), a.reset(), o.reset()
        }
    }
}

function Zn(t, e, i, n, r, a, o) {
    var s, c = r.isWebGL2,
        l = r.maxTextures,
        u = r.maxCubemapSize,
        d = r.maxTextureSize,
        p = r.maxSamples,
        f = new WeakMap,
        m = !1;
    try {
        m = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
    } catch (t) {}

    function g(t, e) {
        return m ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
    }

    function v(t, e, i, n) {
        var r = 1;
        if ((t.width > n || t.height > n) && (r = n / Math.max(t.width, t.height)), r < 1 || !0 === e) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                var a = e ? h.floorPowerOfTwo : Math.floor,
                    o = a(r * t.width),
                    c = a(r * t.height);
                void 0 === s && (s = g(o, c));
                var l = i ? g(o, c) : s;
                return l.width = o, l.height = c, l.getContext("2d").drawImage(t, 0, 0, o, c), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + o + "x" + c + ")."), l
            }
            return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
        }
        return t
    }

    function y(t) {
        return h.isPowerOfTwo(t.width) && h.isPowerOfTwo(t.height)
    }

    function x(t, e) {
        return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter
    }

    function b(e, i, r, a) {
        t.generateMipmap(e), n.get(i).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E
    }

    function _(i, n, r) {
        if (!1 === c) return n;
        if (null !== i) {
            if (void 0 !== t[i]) return t[i];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i + "'")
        }
        var a = n;
        return 6403 === n && (5126 === r && (a = 33326), 5131 === r && (a = 33325), 5121 === r && (a = 33321)), 6407 === n && (5126 === r && (a = 34837), 5131 === r && (a = 34843), 5121 === r && (a = 32849)), 6408 === n && (5126 === r && (a = 34836), 5131 === r && (a = 34842), 5121 === r && (a = 32856)), 33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || e.get("EXT_color_buffer_float"), a
    }

    function w(t) {
        return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729
    }

    function M(e) {
        var i = e.target;
        i.removeEventListener("dispose", M),
            function(e) {
                var i = n.get(e);
                if (void 0 === i.__webglInit) return;
                t.deleteTexture(i.__webglTexture), n.remove(e)
            }(i), i.isVideoTexture && f.delete(i), o.memory.textures--
    }

    function S(e) {
        var i = e.target;
        i.removeEventListener("dispose", S),
            function(e) {
                var i = n.get(e),
                    r = n.get(e.texture);
                if (!e) return;
                void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLCubeRenderTarget)
                    for (var a = 0; a < 6; a++) t.deleteFramebuffer(i.__webglFramebuffer[a]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[a]);
                else t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer), i.__webglMultisampledFramebuffer && t.deleteFramebuffer(i.__webglMultisampledFramebuffer), i.__webglColorRenderbuffer && t.deleteRenderbuffer(i.__webglColorRenderbuffer), i.__webglDepthRenderbuffer && t.deleteRenderbuffer(i.__webglDepthRenderbuffer);
                n.remove(e.texture), n.remove(e)
            }(i), o.memory.textures--
    }
    var T = 0;

    function E(t, e) {
        var r = n.get(t);
        if (t.isVideoTexture && function(t) {
                var e = o.render.frame;
                f.get(t) !== e && (f.set(t, e), t.update())
            }(t), t.version > 0 && r.__version !== t.version) {
            var a = t.image;
            if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else {
                if (!1 !== a.complete) return void I(r, t, e);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
            }
        }
        i.activeTexture(33984 + e), i.bindTexture(3553, r.__webglTexture)
    }

    function A(e, r) {
        if (6 === e.image.length) {
            var o = n.get(e);
            if (e.version > 0 && o.__version !== e.version) {
                O(o, e), i.activeTexture(33984 + r), i.bindTexture(34067, o.__webglTexture), t.pixelStorei(37440, e.flipY);
                for (var s = e && (e.isCompressedTexture || e.image[0].isCompressedTexture), h = e.image[0] && e.image[0].isDataTexture, l = [], d = 0; d < 6; d++) l[d] = s || h ? h ? e.image[d].image : e.image[d] : v(e.image[d], !1, !0, u);
                var p, f = l[0],
                    m = y(f) || c,
                    g = a.convert(e.format),
                    w = a.convert(e.type),
                    M = _(e.internalFormat, g, w);
                if (C(34067, e, m), s) {
                    for (d = 0; d < 6; d++) {
                        p = l[d].mipmaps;
                        for (var S = 0; S < p.length; S++) {
                            var T = p[S];
                            1023 !== e.format && 1022 !== e.format ? null !== g ? i.compressedTexImage2D(34069 + d, S, M, T.width, T.height, 0, T.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(34069 + d, S, M, T.width, T.height, 0, g, w, T.data)
                        }
                    }
                    o.__maxMipLevel = p.length - 1
                } else {
                    p = e.mipmaps;
                    for (d = 0; d < 6; d++)
                        if (h) {
                            i.texImage2D(34069 + d, 0, M, l[d].width, l[d].height, 0, g, w, l[d].data);
                            for (S = 0; S < p.length; S++) {
                                var E = (T = p[S]).image[d].image;
                                i.texImage2D(34069 + d, S + 1, M, E.width, E.height, 0, g, w, E.data)
                            }
                        } else {
                            i.texImage2D(34069 + d, 0, M, g, w, l[d]);
                            for (S = 0; S < p.length; S++) {
                                T = p[S];
                                i.texImage2D(34069 + d, S + 1, M, g, w, T.image[d])
                            }
                        }
                    o.__maxMipLevel = p.length
                }
                x(e, m) && b(34067, e, f.width, f.height), o.__version = e.version, e.onUpdate && e.onUpdate(e)
            } else i.activeTexture(33984 + r), i.bindTexture(34067, o.__webglTexture)
        }
    }

    function L(t, e) {
        i.activeTexture(33984 + e), i.bindTexture(34067, n.get(t).__webglTexture)
    }
    var R = {
            1e3: 10497,
            1001: 33071,
            1002: 33648
        },
        P = {
            1003: 9728,
            1004: 9984,
            1005: 9986,
            1006: 9729,
            1007: 9985,
            1008: 9987
        };

    function C(i, a, o) {
        o ? (t.texParameteri(i, 10242, R[a.wrapS]), t.texParameteri(i, 10243, R[a.wrapT]), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, R[a.wrapR]), t.texParameteri(i, 10240, P[a.magFilter]), t.texParameteri(i, 10241, P[a.minFilter])) : (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, 33071), 1001 === a.wrapS && 1001 === a.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(i, 10240, w(a.magFilter)), t.texParameteri(i, 10241, w(a.minFilter)), 1003 !== a.minFilter && 1006 !== a.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
        var s = e.get("EXT_texture_filter_anisotropic");
        if (s) {
            if (1015 === a.type && null === e.get("OES_texture_float_linear")) return;
            if (1016 === a.type && null === (c || e.get("OES_texture_half_float_linear"))) return;
            (a.anisotropy > 1 || n.get(a).__currentAnisotropy) && (t.texParameterf(i, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), n.get(a).__currentAnisotropy = a.anisotropy)
        }
    }

    function O(e, i) {
        void 0 === e.__webglInit && (e.__webglInit = !0, i.addEventListener("dispose", M), e.__webglTexture = t.createTexture(), o.memory.textures++)
    }

    function I(e, n, r) {
        var o = 3553;
        n.isDataTexture2DArray && (o = 35866), n.isDataTexture3D && (o = 32879), O(e, n), i.activeTexture(33984 + r), i.bindTexture(o, e.__webglTexture), t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment);
        var s = function(t) {
                return !c && (1001 !== t.wrapS || 1001 !== t.wrapT || 1003 !== t.minFilter && 1006 !== t.minFilter)
            }(n) && !1 === y(n.image),
            h = v(n.image, s, !1, d),
            l = y(h) || c,
            u = a.convert(n.format),
            p = a.convert(n.type),
            f = _(n.internalFormat, u, p);
        C(o, n, l);
        var m, g = n.mipmaps;
        if (n.isDepthTexture) f = 6402, c ? f = 1015 === n.type ? 36012 : 1014 === n.type ? 33190 : 1020 === n.type ? 35056 : 33189 : 1015 === n.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 1026 === n.format && 6402 === f && 1012 !== n.type && 1014 !== n.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = 1012, p = a.convert(n.type)), 1027 === n.format && 6402 === f && (f = 34041, 1020 !== n.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = 1020, p = a.convert(n.type))), i.texImage2D(3553, 0, f, h.width, h.height, 0, u, p, null);
        else if (n.isDataTexture)
            if (g.length > 0 && l) {
                for (var w = 0, M = g.length; w < M; w++) m = g[w], i.texImage2D(3553, w, f, m.width, m.height, 0, u, p, m.data);
                n.generateMipmaps = !1, e.__maxMipLevel = g.length - 1
            } else i.texImage2D(3553, 0, f, h.width, h.height, 0, u, p, h.data), e.__maxMipLevel = 0;
        else if (n.isCompressedTexture) {
            for (w = 0, M = g.length; w < M; w++) m = g[w], 1023 !== n.format && 1022 !== n.format ? null !== u ? i.compressedTexImage2D(3553, w, f, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(3553, w, f, m.width, m.height, 0, u, p, m.data);
            e.__maxMipLevel = g.length - 1
        } else if (n.isDataTexture2DArray) i.texImage3D(35866, 0, f, h.width, h.height, h.depth, 0, u, p, h.data), e.__maxMipLevel = 0;
        else if (n.isDataTexture3D) i.texImage3D(32879, 0, f, h.width, h.height, h.depth, 0, u, p, h.data), e.__maxMipLevel = 0;
        else if (g.length > 0 && l) {
            for (w = 0, M = g.length; w < M; w++) m = g[w], i.texImage2D(3553, w, f, u, p, m);
            n.generateMipmaps = !1, e.__maxMipLevel = g.length - 1
        } else i.texImage2D(3553, 0, f, u, p, h), e.__maxMipLevel = 0;
        x(n, l) && b(o, n, h.width, h.height), e.__version = n.version, n.onUpdate && n.onUpdate(n)
    }

    function D(e, r, o, s) {
        var c = a.convert(r.texture.format),
            h = a.convert(r.texture.type),
            l = _(r.texture.internalFormat, c, h);
        i.texImage2D(s, 0, l, r.width, r.height, 0, c, h, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null)
    }

    function N(e, i, n) {
        if (t.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer) {
            var r = 33189;
            if (n) {
                var o = i.depthTexture;
                o && o.isDepthTexture && (1015 === o.type ? r = 36012 : 1014 === o.type && (r = 33190));
                var s = U(i);
                t.renderbufferStorageMultisample(36161, s, r, i.width, i.height)
            } else t.renderbufferStorage(36161, r, i.width, i.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e)
        } else if (i.depthBuffer && i.stencilBuffer) {
            if (n) {
                s = U(i);
                t.renderbufferStorageMultisample(36161, s, 35056, i.width, i.height)
            } else t.renderbufferStorage(36161, 34041, i.width, i.height);
            t.framebufferRenderbuffer(36160, 33306, 36161, e)
        } else {
            var c = a.convert(i.texture.format),
                h = a.convert(i.texture.type);
            r = _(i.texture.internalFormat, c, h);
            if (n) {
                s = U(i);
                t.renderbufferStorageMultisample(36161, s, r, i.width, i.height)
            } else t.renderbufferStorage(36161, r, i.width, i.height)
        }
        t.bindRenderbuffer(36161, null)
    }

    function z(e) {
        var i = n.get(e),
            r = !0 === e.isWebGLCubeRenderTarget;
        if (e.depthTexture) {
            if (r) throw new Error("target.depthTexture not supported in Cube render targets");
            ! function(e, i) {
                if (i && i.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                if (t.bindFramebuffer(36160, e), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), E(i.depthTexture, 0);
                var r = n.get(i.depthTexture).__webglTexture;
                if (1026 === i.depthTexture.format) t.framebufferTexture2D(36160, 36096, 3553, r, 0);
                else {
                    if (1027 !== i.depthTexture.format) throw new Error("Unknown depthTexture format");
                    t.framebufferTexture2D(36160, 33306, 3553, r, 0)
                }
            }(i.__webglFramebuffer, e)
        } else if (r) {
            i.__webglDepthbuffer = [];
            for (var a = 0; a < 6; a++) t.bindFramebuffer(36160, i.__webglFramebuffer[a]), i.__webglDepthbuffer[a] = t.createRenderbuffer(), N(i.__webglDepthbuffer[a], e, !1)
        } else t.bindFramebuffer(36160, i.__webglFramebuffer), i.__webglDepthbuffer = t.createRenderbuffer(), N(i.__webglDepthbuffer, e, !1);
        t.bindFramebuffer(36160, null)
    }

    function U(t) {
        return c && t.isWebGLMultisampleRenderTarget ? Math.min(p, t.samples) : 0
    }
    var F = !1,
        B = !1;
    this.allocateTextureUnit = function() {
        var t = T;
        return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), T += 1, t
    }, this.resetTextureUnits = function() {
        T = 0
    }, this.setTexture2D = E, this.setTexture2DArray = function(t, e) {
        var r = n.get(t);
        t.version > 0 && r.__version !== t.version ? I(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(35866, r.__webglTexture))
    }, this.setTexture3D = function(t, e) {
        var r = n.get(t);
        t.version > 0 && r.__version !== t.version ? I(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(32879, r.__webglTexture))
    }, this.setTextureCube = A, this.setTextureCubeDynamic = L, this.setupRenderTarget = function(e) {
        var r = n.get(e),
            s = n.get(e.texture);
        e.addEventListener("dispose", S), s.__webglTexture = t.createTexture(), o.memory.textures++;
        var h = !0 === e.isWebGLCubeRenderTarget,
            l = !0 === e.isWebGLMultisampleRenderTarget,
            u = y(e) || c;
        if (!c || 1022 !== e.texture.format || 1015 !== e.texture.type && 1016 !== e.texture.type || (e.texture.format = 1023, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), h) {
            r.__webglFramebuffer = [];
            for (var d = 0; d < 6; d++) r.__webglFramebuffer[d] = t.createFramebuffer()
        } else if (r.__webglFramebuffer = t.createFramebuffer(), l)
            if (c) {
                r.__webglMultisampledFramebuffer = t.createFramebuffer(), r.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, r.__webglColorRenderbuffer);
                var p = a.convert(e.texture.format),
                    f = a.convert(e.texture.type),
                    m = _(e.texture.internalFormat, p, f),
                    g = U(e);
                t.renderbufferStorageMultisample(36161, g, m, e.width, e.height), t.bindFramebuffer(36160, r.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, r.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (r.__webglDepthRenderbuffer = t.createRenderbuffer(), N(r.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null)
            } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        if (h) {
            i.bindTexture(34067, s.__webglTexture), C(34067, e.texture, u);
            for (d = 0; d < 6; d++) D(r.__webglFramebuffer[d], e, 36064, 34069 + d);
            x(e.texture, u) && b(34067, e.texture, e.width, e.height), i.bindTexture(34067, null)
        } else i.bindTexture(3553, s.__webglTexture), C(3553, e.texture, u), D(r.__webglFramebuffer, e, 36064, 3553), x(e.texture, u) && b(3553, e.texture, e.width, e.height), i.bindTexture(3553, null);
        e.depthBuffer && z(e)
    }, this.updateRenderTargetMipmap = function(t) {
        var e = t.texture;
        if (x(e, y(t) || c)) {
            var r = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                a = n.get(e).__webglTexture;
            i.bindTexture(r, a), b(r, e, t.width, t.height), i.bindTexture(r, null)
        }
    }, this.updateMultisampleRenderTarget = function(e) {
        if (e.isWebGLMultisampleRenderTarget)
            if (c) {
                var i = n.get(e);
                t.bindFramebuffer(36008, i.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, i.__webglFramebuffer);
                var r = e.width,
                    a = e.height,
                    o = 16384;
                e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024), t.blitFramebuffer(0, 0, r, a, 0, 0, r, a, o, 9728), t.bindFramebuffer(36160, i.__webglMultisampledFramebuffer)
            } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
    }, this.safeSetTexture2D = function(t, e) {
        t && t.isWebGLRenderTarget && (!1 === F && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), F = !0), t = t.texture), E(t, e)
    }, this.safeSetTextureCube = function(t, e) {
        t && t.isWebGLCubeRenderTarget && (!1 === B && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), B = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? A(t, e) : L(t, e)
    }
}

function Jn(t, e, i) {
    var n = i.isWebGL2;
    return {
        convert: function(t) {
            var i;
            if (1009 === t) return 5121;
            if (1017 === t) return 32819;
            if (1018 === t) return 32820;
            if (1019 === t) return 33635;
            if (1010 === t) return 5120;
            if (1011 === t) return 5122;
            if (1012 === t) return 5123;
            if (1013 === t) return 5124;
            if (1014 === t) return 5125;
            if (1015 === t) return 5126;
            if (1016 === t) return n ? 5131 : null !== (i = e.get("OES_texture_half_float")) ? i.HALF_FLOAT_OES : null;
            if (1021 === t) return 6406;
            if (1022 === t) return 6407;
            if (1023 === t) return 6408;
            if (1024 === t) return 6409;
            if (1025 === t) return 6410;
            if (1026 === t) return 6402;
            if (1027 === t) return 34041;
            if (1028 === t) return 6403;
            if (1029 === t) return 36244;
            if (1030 === t) return 33319;
            if (1031 === t) return 33320;
            if (1032 === t) return 36248;
            if (1033 === t) return 36249;
            if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
                if (null === (i = e.get("WEBGL_compressed_texture_s3tc"))) return null;
                if (33776 === t) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (33777 === t) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (33778 === t) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (33779 === t) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
                if (null === (i = e.get("WEBGL_compressed_texture_pvrtc"))) return null;
                if (35840 === t) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (35841 === t) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (35842 === t) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (35843 === t) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (36196 === t) return null !== (i = e.get("WEBGL_compressed_texture_etc1")) ? i.COMPRESSED_RGB_ETC1_WEBGL : null;
            if ((37492 === t || 37496 === t) && null !== (i = e.get("WEBGL_compressed_texture_etc"))) {
                if (37492 === t) return i.COMPRESSED_RGB8_ETC2;
                if (37496 === t) return i.COMPRESSED_RGBA8_ETC2_EAC
            }
            return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? null !== (i = e.get("WEBGL_compressed_texture_astc")) ? t : null : 36492 === t ? null !== (i = e.get("EXT_texture_compression_bptc")) ? t : null : 1020 === t ? n ? 34042 : null !== (i = e.get("WEBGL_depth_texture")) ? i.UNSIGNED_INT_24_8_WEBGL : null : void 0
        }
    }
}

function Qn(t) {
    je.call(this), this.cameras = t || []
}

function Kn() {
    X.call(this), this.type = "Group"
}

function $n() {
    this._targetRay = null, this._grip = null
}

function tr(t, e) {
    var i = this,
        n = null,
        r = 1,
        a = null,
        o = "local-floor",
        s = null,
        c = [],
        h = new Map,
        l = new je;
    l.layers.enable(1), l.viewport = new m;
    var u = new je;
    u.layers.enable(2), u.viewport = new m;
    var d = [l, u],
        p = new Qn;
    p.layers.enable(1), p.layers.enable(2);
    var f = null,
        g = null;

    function v(t) {
        var e = h.get(t.inputSource);
        e && e.dispatchEvent({
            type: t.type
        })
    }

    function y() {
        h.forEach((function(t, e) {
            t.disconnect(e)
        })), h.clear(), t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), E.stop(), i.isPresenting = !1, i.dispatchEvent({
            type: "sessionend"
        })
    }

    function x(t) {
        a = t, E.setContext(n), E.start(), i.isPresenting = !0, i.dispatchEvent({
            type: "sessionstart"
        })
    }

    function b(t) {
        for (var e = n.inputSources, i = 0; i < c.length; i++) h.set(e[i], c[i]);
        for (i = 0; i < t.removed.length; i++) {
            var r = t.removed[i];
            (a = h.get(r)) && (a.dispatchEvent({
                type: "disconnected",
                data: r
            }), h.delete(r))
        }
        for (i = 0; i < t.added.length; i++) {
            var a;
            r = t.added[i];
            (a = h.get(r)) && a.dispatchEvent({
                type: "connected",
                data: r
            })
        }
    }
    this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
        var e = c[t];
        return void 0 === e && (e = new $n, c[t] = e), e.getTargetRaySpace()
    }, this.getControllerGrip = function(t) {
        var e = c[t];
        return void 0 === e && (e = new $n, c[t] = e), e.getGripSpace()
    }, this.setFramebufferScaleFactor = function(t) {
        r = t, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
    }, this.setReferenceSpaceType = function(t) {
        o = t, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
    }, this.getReferenceSpace = function() {
        return a
    }, this.getSession = function() {
        return n
    }, this.setSession = function(t) {
        if (null !== (n = t)) {
            n.addEventListener("select", v), n.addEventListener("selectstart", v), n.addEventListener("selectend", v), n.addEventListener("squeeze", v), n.addEventListener("squeezestart", v), n.addEventListener("squeezeend", v), n.addEventListener("end", y);
            var i = e.getContextAttributes(),
                a = {
                    antialias: i.antialias,
                    alpha: i.alpha,
                    depth: i.depth,
                    stencil: i.stencil,
                    framebufferScaleFactor: r
                },
                s = new XRWebGLLayer(n, e, a);
            n.updateRenderState({
                baseLayer: s
            }), n.requestReferenceSpace(o).then(x), n.addEventListener("inputsourceschange", b)
        }
    };
    var w = new _,
        M = new _;

    function S(t, e) {
        null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld)
    }
    this.getCamera = function(t) {
        p.near = u.near = l.near = t.near, p.far = u.far = l.far = t.far, f === p.near && g === p.far || (n.updateRenderState({
            depthNear: p.near,
            depthFar: p.far
        }), f = p.near, g = p.far);
        var e = t.parent,
            i = p.cameras;
        S(p, e);
        for (var r = 0; r < i.length; r++) S(i[r], e);
        t.matrixWorld.copy(p.matrixWorld);
        for (var a = t.children, o = (r = 0, a.length); r < o; r++) a[r].updateMatrixWorld(!0);
        return 2 === i.length ? function(t, e, i) {
            w.setFromMatrixPosition(e.matrixWorld), M.setFromMatrixPosition(i.matrixWorld);
            var n = w.distanceTo(M),
                r = e.projectionMatrix.elements,
                a = i.projectionMatrix.elements,
                o = r[14] / (r[10] - 1),
                s = r[14] / (r[10] + 1),
                c = (r[9] + 1) / r[5],
                h = (r[9] - 1) / r[5],
                l = (r[8] - 1) / r[0],
                u = (a[8] + 1) / a[0],
                d = o * l,
                p = o * u,
                f = n / (-l + u),
                m = f * -l;
            e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.getInverse(t.matrixWorld);
            var g = o + f,
                v = s + f,
                y = d - m,
                x = p + (n - m),
                b = c * s / v * g,
                _ = h * s / v * g;
            t.projectionMatrix.makePerspective(y, x, b, _, g, v)
        }(p, l, u) : p.projectionMatrix.copy(l.projectionMatrix), p
    };
    var T = null;
    var E = new Ke;
    E.setAnimationLoop((function(e, i) {
        if (null !== (s = i.getViewerPose(a))) {
            var r = s.views,
                o = n.renderState.baseLayer;
            t.setFramebuffer(o.framebuffer);
            var h = !1;
            r.length !== p.cameras.length && (p.cameras.length = 0, h = !0);
            for (var l = 0; l < r.length; l++) {
                var u = r[l],
                    f = o.getViewport(u),
                    m = d[l];
                m.matrix.fromArray(u.transform.matrix), m.projectionMatrix.fromArray(u.projectionMatrix), m.viewport.set(f.x, f.y, f.width, f.height), 0 === l && p.matrix.copy(m.matrix), !0 === h && p.cameras.push(m)
            }
        }
        var g = n.inputSources;
        for (l = 0; l < c.length; l++) {
            var v = c[l],
                y = g[l];
            v.update(y, i, a)
        }
        T && T(e, i)
    })), this.setAnimationLoop = function(t) {
        T = t
    }, this.dispose = function() {}
}

function er(t) {
    var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        i = void 0 !== t.context ? t.context : null,
        n = void 0 !== t.alpha && t.alpha,
        r = void 0 === t.depth || t.depth,
        a = void 0 === t.stencil || t.stencil,
        o = void 0 !== t.antialias && t.antialias,
        s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
        c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
        u = void 0 !== t.powerPreference ? t.powerPreference : "default",
        d = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat,
        p = null,
        f = null;
    this.domElement = e, this.debug = {
        checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
    var g, v, y, x, b, w, M, S, T, E, A, L, P, C, O, I, D, N, z = this,
        U = !1,
        F = null,
        B = 0,
        G = 0,
        H = null,
        k = null,
        V = -1,
        j = {
            geometry: null,
            program: null,
            wireframe: !1
        },
        W = null,
        q = null,
        X = new m,
        Z = new m,
        J = null,
        Q = e.width,
        K = e.height,
        $ = 1,
        tt = null,
        et = null,
        it = new m(0, 0, Q, K),
        nt = new m(0, 0, Q, K),
        rt = !1,
        at = new Je,
        ot = new si,
        st = !1,
        ct = !1,
        ht = new R,
        lt = new _;

    function ut() {
        return null === H ? $ : 1
    }
    try {
        var dt = {
            alpha: n,
            depth: r,
            stencil: a,
            antialias: o,
            premultipliedAlpha: s,
            preserveDrawingBuffer: c,
            powerPreference: u,
            failIfMajorPerformanceCaveat: d,
            xrCompatible: !0
        };
        if (e.addEventListener("webglcontextlost", gt, !1), e.addEventListener("webglcontextrestored", vt, !1), null === (g = i || e.getContext("webgl", dt) || e.getContext("experimental-webgl", dt))) throw null !== e.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        void 0 === g.getShaderPrecisionFormat && (g.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        })
    } catch (t) {
        throw console.error("THREE.WebGLRenderer: " + t.message), t
    }

    function pt() {
        v = new ci(g), !1 === (y = new oi(g, v, t)).isWebGL2 && (v.get("WEBGL_depth_texture"), v.get("OES_texture_float"), v.get("OES_texture_half_float"), v.get("OES_texture_half_float_linear"), v.get("OES_standard_derivatives"), v.get("OES_element_index_uint"), v.get("ANGLE_instanced_arrays")), v.get("OES_texture_float_linear"), N = new Jn(g, v, y), (x = new Yn(g, v, y)).scissor(Z.copy(nt).multiplyScalar($).floor()), x.viewport(X.copy(it).multiplyScalar($).floor()), b = new ui(g), w = new Dn, M = new Zn(g, v, x, w, y, N, b), S = new $e(g, y), T = new hi(g, S, b), E = new fi(g, T, S, b), O = new pi(g), A = new In(z, v, y), L = new Fn, P = new jn, C = new ri(z, x, E, s), I = new ai(g, v, b, y), D = new li(g, v, b, y), b.programs = A.programs, z.capabilities = y, z.extensions = v, z.properties = w, z.renderLists = L, z.state = x, z.info = b
    }
    pt();
    var ft = new tr(z, g);
    this.xr = ft;
    var mt = new Xn(z, E, y.maxTextureSize);

    function gt(t) {
        t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), U = !0
    }

    function vt() {
        console.log("THREE.WebGLRenderer: Context Restored."), U = !1, pt()
    }

    function yt(t) {
        var e = t.target;
        e.removeEventListener("dispose", yt),
            function(t) {
                xt(t), w.remove(t)
            }(e)
    }

    function xt(t) {
        var e = w.get(t).program;
        t.program = void 0, void 0 !== e && A.releaseProgram(e)
    }
    this.shadowMap = mt, this.getContext = function() {
        return g
    }, this.getContextAttributes = function() {
        return g.getContextAttributes()
    }, this.forceContextLoss = function() {
        var t = v.get("WEBGL_lose_context");
        t && t.loseContext()
    }, this.forceContextRestore = function() {
        var t = v.get("WEBGL_lose_context");
        t && t.restoreContext()
    }, this.getPixelRatio = function() {
        return $
    }, this.setPixelRatio = function(t) {
        void 0 !== t && ($ = t, this.setSize(Q, K, !1))
    }, this.getSize = function(t) {
        return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new l), t.set(Q, K)
    }, this.setSize = function(t, i, n) {
        ft.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (Q = t, K = i, e.width = Math.floor(t * $), e.height = Math.floor(i * $), !1 !== n && (e.style.width = t + "px", e.style.height = i + "px"), this.setViewport(0, 0, t, i))
    }, this.getDrawingBufferSize = function(t) {
        return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new l), t.set(Q * $, K * $).floor()
    }, this.setDrawingBufferSize = function(t, i, n) {
        Q = t, K = i, $ = n, e.width = Math.floor(t * n), e.height = Math.floor(i * n), this.setViewport(0, 0, t, i)
    }, this.getCurrentViewport = function(t) {
        return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new m), t.copy(X)
    }, this.getViewport = function(t) {
        return t.copy(it)
    }, this.setViewport = function(t, e, i, n) {
        t.isVector4 ? it.set(t.x, t.y, t.z, t.w) : it.set(t, e, i, n), x.viewport(X.copy(it).multiplyScalar($).floor())
    }, this.getScissor = function(t) {
        return t.copy(nt)
    }, this.setScissor = function(t, e, i, n) {
        t.isVector4 ? nt.set(t.x, t.y, t.z, t.w) : nt.set(t, e, i, n), x.scissor(Z.copy(nt).multiplyScalar($).floor())
    }, this.getScissorTest = function() {
        return rt
    }, this.setScissorTest = function(t) {
        x.setScissorTest(rt = t)
    }, this.setOpaqueSort = function(t) {
        tt = t
    }, this.setTransparentSort = function(t) {
        et = t
    }, this.getClearColor = function() {
        return C.getClearColor()
    }, this.setClearColor = function() {
        C.setClearColor.apply(C, arguments)
    }, this.getClearAlpha = function() {
        return C.getClearAlpha()
    }, this.setClearAlpha = function() {
        C.setClearAlpha.apply(C, arguments)
    }, this.clear = function(t, e, i) {
        var n = 0;
        (void 0 === t || t) && (n |= 16384), (void 0 === e || e) && (n |= 256), (void 0 === i || i) && (n |= 1024), g.clear(n)
    }, this.clearColor = function() {
        this.clear(!0, !1, !1)
    }, this.clearDepth = function() {
        this.clear(!1, !0, !1)
    }, this.clearStencil = function() {
        this.clear(!1, !1, !0)
    }, this.dispose = function() {
        e.removeEventListener("webglcontextlost", gt, !1), e.removeEventListener("webglcontextrestored", vt, !1), L.dispose(), P.dispose(), w.dispose(), E.dispose(), ft.dispose(), wt.stop()
    }, this.renderBufferImmediate = function(t, e) {
        x.initAttributes();
        var i = w.get(t);
        t.hasPositions && !i.position && (i.position = g.createBuffer()), t.hasNormals && !i.normal && (i.normal = g.createBuffer()), t.hasUvs && !i.uv && (i.uv = g.createBuffer()), t.hasColors && !i.color && (i.color = g.createBuffer());
        var n = e.getAttributes();
        t.hasPositions && (g.bindBuffer(34962, i.position), g.bufferData(34962, t.positionArray, 35048), x.enableAttribute(n.position), g.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)), t.hasNormals && (g.bindBuffer(34962, i.normal), g.bufferData(34962, t.normalArray, 35048), x.enableAttribute(n.normal), g.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (g.bindBuffer(34962, i.uv), g.bufferData(34962, t.uvArray, 35048), x.enableAttribute(n.uv), g.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)), t.hasColors && (g.bindBuffer(34962, i.color), g.bufferData(34962, t.colorArray, 35048), x.enableAttribute(n.color), g.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)), x.disableUnusedAttributes(), g.drawArrays(4, 0, t.count), t.count = 0
    };
    var bt = new Y;
    this.renderBufferDirect = function(t, e, i, n, r, a) {
        null === e && (e = bt);
        var o = r.isMesh && r.matrixWorld.determinant() < 0,
            s = At(t, e, n, r);
        x.setMaterial(n, o);
        var c = !1;
        j.geometry === i.id && j.program === s.id && j.wireframe === (!0 === n.wireframe) || (j.geometry = i.id, j.program = s.id, j.wireframe = !0 === n.wireframe, c = !0), (n.morphTargets || n.morphNormals) && (O.update(r, i, n, s), c = !0), !0 === r.isInstancedMesh && (c = !0);
        var h = i.index,
            l = i.attributes.position;
        if (null === h) {
            if (void 0 === l || 0 === l.count) return
        } else if (0 === h.count) return;
        var u, d = 1;
        !0 === n.wireframe && (h = T.getWireframeAttribute(i), d = 2);
        var p = I;
        null !== h && (u = S.get(h), (p = D).setIndex(u)), c && (! function(t, e, i, n) {
            if (!1 === y.isWebGL2 && (t.isInstancedMesh || e.isInstancedBufferGeometry) && null === v.get("ANGLE_instanced_arrays")) return;
            x.initAttributes();
            var r = e.attributes,
                a = n.getAttributes(),
                o = i.defaultAttributeValues;
            for (var s in a) {
                var c = a[s];
                if (c >= 0) {
                    var h = r[s];
                    if (void 0 !== h) {
                        var l = h.normalized,
                            u = h.itemSize;
                        if (void 0 === (w = S.get(h))) continue;
                        var d = w.buffer,
                            p = w.type,
                            f = w.bytesPerElement;
                        if (h.isInterleavedBufferAttribute) {
                            var m = h.data,
                                b = m.stride,
                                _ = h.offset;
                            m && m.isInstancedInterleavedBuffer ? (x.enableAttributeAndDivisor(c, m.meshPerAttribute), void 0 === e.maxInstancedCount && (e.maxInstancedCount = m.meshPerAttribute * m.count)) : x.enableAttribute(c), g.bindBuffer(34962, d), x.vertexAttribPointer(c, u, p, l, b * f, _ * f)
                        } else h.isInstancedBufferAttribute ? (x.enableAttributeAndDivisor(c, h.meshPerAttribute), void 0 === e.maxInstancedCount && (e.maxInstancedCount = h.meshPerAttribute * h.count)) : x.enableAttribute(c), g.bindBuffer(34962, d), x.vertexAttribPointer(c, u, p, l, 0, 0)
                    } else if ("instanceMatrix" === s) {
                        var w;
                        if (void 0 === (w = S.get(t.instanceMatrix))) continue;
                        d = w.buffer, p = w.type;
                        x.enableAttributeAndDivisor(c + 0, 1), x.enableAttributeAndDivisor(c + 1, 1), x.enableAttributeAndDivisor(c + 2, 1), x.enableAttributeAndDivisor(c + 3, 1), g.bindBuffer(34962, d), g.vertexAttribPointer(c + 0, 4, p, !1, 64, 0), g.vertexAttribPointer(c + 1, 4, p, !1, 64, 16), g.vertexAttribPointer(c + 2, 4, p, !1, 64, 32), g.vertexAttribPointer(c + 3, 4, p, !1, 64, 48)
                    } else if (void 0 !== o) {
                        var M = o[s];
                        if (void 0 !== M) switch (M.length) {
                            case 2:
                                g.vertexAttrib2fv(c, M);
                                break;
                            case 3:
                                g.vertexAttrib3fv(c, M);
                                break;
                            case 4:
                                g.vertexAttrib4fv(c, M);
                                break;
                            default:
                                g.vertexAttrib1fv(c, M)
                        }
                    }
                }
            }
            x.disableUnusedAttributes()
        }(r, i, n, s), null !== h && g.bindBuffer(34963, u.buffer));
        var f = null !== h ? h.count : l.count,
            m = i.drawRange.start * d,
            b = i.drawRange.count * d,
            _ = null !== a ? a.start * d : 0,
            w = null !== a ? a.count * d : 1 / 0,
            M = Math.max(m, _),
            E = Math.min(f, m + b, _ + w) - 1,
            A = Math.max(0, E - M + 1);
        if (0 !== A) {
            if (r.isMesh) !0 === n.wireframe ? (x.setLineWidth(n.wireframeLinewidth * ut()), p.setMode(1)) : p.setMode(4);
            else if (r.isLine) {
                var L = n.linewidth;
                void 0 === L && (L = 1), x.setLineWidth(L * ut()), r.isLineSegments ? p.setMode(1) : r.isLineLoop ? p.setMode(2) : p.setMode(3)
            } else r.isPoints ? p.setMode(0) : r.isSprite && p.setMode(4);
            r.isInstancedMesh ? p.renderInstances(i, M, A, r.count) : i.isInstancedBufferGeometry ? p.renderInstances(i, M, A, i.maxInstancedCount) : p.render(M, A)
        }
    }, this.compile = function(t, e) {
        (f = P.get(t, e)).init(), t.traverse((function(t) {
            t.isLight && (f.pushLight(t), t.castShadow && f.pushShadow(t))
        })), f.setupLights(e);
        var i = {};
        t.traverse((function(e) {
            if (e.material)
                if (Array.isArray(e.material))
                    for (var n = 0; n < e.material.length; n++) e.material[n].uuid in i == !1 && (Et(e.material[n], t, e), i[e.material[n].uuid] = !0);
                else e.material.uuid in i == !1 && (Et(e.material, t, e), i[e.material.uuid] = !0)
        }))
    };
    var _t = null;
    var wt = new Ke;

    function Mt(t, e, i, n) {
        if (!1 !== t.visible) {
            if (t.layers.test(e.layers))
                if (t.isGroup) i = t.renderOrder;
                else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
            else if (t.isLight) f.pushLight(t), t.castShadow && f.pushShadow(t);
            else if (t.isSprite) {
                if (!t.frustumCulled || at.intersectsSprite(t)) {
                    n && lt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ht);
                    var r = E.update(t);
                    (a = t.material).visible && p.push(t, r, a, i, lt.z, null)
                }
            } else if (t.isImmediateRenderObject) n && lt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ht), p.push(t, null, t.material, i, lt.z, null);
            else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== b.render.frame && (t.skeleton.update(), t.skeleton.frame = b.render.frame), !t.frustumCulled || at.intersectsObject(t))) {
                n && lt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ht);
                r = E.update(t);
                var a = t.material;
                if (Array.isArray(a))
                    for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                        var h = o[s],
                            l = a[h.materialIndex];
                        l && l.visible && p.push(t, r, l, i, lt.z, h)
                    } else a.visible && p.push(t, r, a, i, lt.z, null)
            }
            var u = t.children;
            for (s = 0, c = u.length; s < c; s++) Mt(u[s], e, i, n)
        }
    }

    function St(t, e, i, n) {
        for (var r = 0, a = t.length; r < a; r++) {
            var o = t[r],
                s = o.object,
                c = o.geometry,
                h = void 0 === n ? o.material : n,
                l = o.group;
            if (i.isArrayCamera) {
                q = i;
                for (var u = i.cameras, d = 0, p = u.length; d < p; d++) {
                    var m = u[d];
                    s.layers.test(m.layers) && (x.viewport(X.copy(m.viewport)), f.setupLights(m), Tt(s, e, m, c, h, l))
                }
            } else q = null, Tt(s, e, i, c, h, l)
        }
    }

    function Tt(t, e, i, n, r, a) {
        if (t.onBeforeRender(z, e, i, n, r, a), f = P.get(e, q || i), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
            var o = At(i, e, r, t);
            x.setMaterial(r), j.geometry = null, j.program = null, j.wireframe = !1,
                function(t, e) {
                    t.render((function(t) {
                        z.renderBufferImmediate(t, e)
                    }))
                }(t, o)
        } else z.renderBufferDirect(i, e, n, r, t, a);
        t.onAfterRender(z, e, i, n, r, a), f = P.get(e, q || i)
    }

    function Et(t, e, i) {
        var n = w.get(t),
            r = f.state.lights,
            a = f.state.shadowsArray,
            o = r.state.version,
            s = A.getParameters(t, r.state, a, e, ot.numPlanes, ot.numIntersection, i),
            c = A.getProgramCacheKey(s),
            h = n.program,
            l = !0;
        if (void 0 === h) t.addEventListener("dispose", yt);
        else if (h.cacheKey !== c) xt(t);
        else if (n.lightsStateVersion !== o) n.lightsStateVersion = o, l = !1;
        else {
            if (void 0 !== s.shaderID) return;
            l = !1
        }
        l && (h = A.acquireProgram(s, c), n.program = h, n.uniforms = s.uniforms, n.outputEncoding = s.outputEncoding, t.program = h);
        var u = h.getAttributes();
        if (t.morphTargets) {
            t.numSupportedMorphTargets = 0;
            for (var d = 0; d < z.maxMorphTargets; d++) u["morphTarget" + d] >= 0 && t.numSupportedMorphTargets++
        }
        if (t.morphNormals) {
            t.numSupportedMorphNormals = 0;
            for (d = 0; d < z.maxMorphNormals; d++) u["morphNormal" + d] >= 0 && t.numSupportedMorphNormals++
        }
        var p = n.uniforms;
        (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = ot.numPlanes, n.numIntersection = ot.numIntersection, p.clippingPlanes = ot.uniform), n.environment = t.isMeshStandardMaterial ? e.environment : null, n.fog = e.fog, n.needsLights = function(t) {
            return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
        }(t), n.lightsStateVersion = o, n.needsLights && (p.ambientLightColor.value = r.state.ambient, p.lightProbe.value = r.state.probe, p.directionalLights.value = r.state.directional, p.directionalLightShadows.value = r.state.directionalShadow, p.spotLights.value = r.state.spot, p.spotLightShadows.value = r.state.spotShadow, p.rectAreaLights.value = r.state.rectArea, p.pointLights.value = r.state.point, p.pointLightShadows.value = r.state.pointShadow, p.hemisphereLights.value = r.state.hemi, p.directionalShadowMap.value = r.state.directionalShadowMap, p.directionalShadowMatrix.value = r.state.directionalShadowMatrix, p.spotShadowMap.value = r.state.spotShadowMap, p.spotShadowMatrix.value = r.state.spotShadowMatrix, p.pointShadowMap.value = r.state.pointShadowMap, p.pointShadowMatrix.value = r.state.pointShadowMatrix);
        var m = n.program.getUniforms(),
            g = pn.seqWithValue(m.seq, p);
        n.uniformsList = g
    }

    function At(t, e, i, n) {
        M.resetTextureUnits();
        var r = e.fog,
            a = i.isMeshStandardMaterial ? e.environment : null,
            o = null === H ? z.outputEncoding : H.texture.encoding,
            s = w.get(i),
            c = f.state.lights;
        if (st && (ct || t !== W)) {
            var l = t === W && i.id === V;
            ot.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, s, l)
        }
        i.version === s.__version ? void 0 === s.program ? Et(i, e, n) : i.fog && s.fog !== r ? Et(i, e, n) : s.environment !== a ? Et(i, e, n) : s.needsLights && s.lightsStateVersion !== c.state.version ? Et(i, e, n) : void 0 === s.numClippingPlanes || s.numClippingPlanes === ot.numPlanes && s.numIntersection === ot.numIntersection ? s.outputEncoding !== o && Et(i, e, n) : Et(i, e, n) : (Et(i, e, n), s.__version = i.version);
        var u, d, p = !1,
            m = !1,
            v = !1,
            b = s.program,
            _ = b.getUniforms(),
            S = s.uniforms;
        if (x.useProgram(b.program) && (p = !0, m = !0, v = !0), i.id !== V && (V = i.id, m = !0), p || W !== t) {
            if (_.setValue(g, "projectionMatrix", t.projectionMatrix), y.logarithmicDepthBuffer && _.setValue(g, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), W !== t && (W = t, m = !0, v = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                var T = _.map.cameraPosition;
                void 0 !== T && T.setValue(g, lt.setFromMatrixPosition(t.matrixWorld))
            }(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && _.setValue(g, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && _.setValue(g, "viewMatrix", t.matrixWorldInverse)
        }
        if (i.skinning) {
            _.setOptional(g, n, "bindMatrix"), _.setOptional(g, n, "bindMatrixInverse");
            var E = n.skeleton;
            if (E) {
                var A = E.bones;
                if (y.floatVertexTextures) {
                    if (void 0 === E.boneTexture) {
                        var L = Math.sqrt(4 * A.length);
                        L = h.ceilPowerOfTwo(L), L = Math.max(L, 4);
                        var R = new Float32Array(L * L * 4);
                        R.set(E.boneMatrices);
                        var P = new Xe(R, L, L, 1023, 1015);
                        E.boneMatrices = R, E.boneTexture = P, E.boneTextureSize = L
                    }
                    _.setValue(g, "boneTexture", E.boneTexture, M), _.setValue(g, "boneTextureSize", E.boneTextureSize)
                } else _.setOptional(g, E, "boneMatrices")
            }
        }
        return (m || s.receiveShadow !== n.receiveShadow) && (s.receiveShadow = n.receiveShadow, _.setValue(g, "receiveShadow", n.receiveShadow)), m && (_.setValue(g, "toneMappingExposure", z.toneMappingExposure), _.setValue(g, "toneMappingWhitePoint", z.toneMappingWhitePoint), s.needsLights && (d = v, (u = S).ambientLightColor.needsUpdate = d, u.lightProbe.needsUpdate = d, u.directionalLights.needsUpdate = d, u.directionalLightShadows.needsUpdate = d, u.pointLights.needsUpdate = d, u.pointLightShadows.needsUpdate = d, u.spotLights.needsUpdate = d, u.spotLightShadows.needsUpdate = d, u.rectAreaLights.needsUpdate = d, u.hemisphereLights.needsUpdate = d), r && i.fog && function(t, e) {
            t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
        }(S, r), i.isMeshBasicMaterial ? Lt(S, i) : i.isMeshLambertMaterial ? (Lt(S, i), function(t, e) {
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
        }(S, i)) : i.isMeshToonMaterial ? (Lt(S, i), function(t, e) {
            t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.gradientMap && (t.gradientMap.value = e.gradientMap);
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
            e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
            e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
            e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(S, i)) : i.isMeshPhongMaterial ? (Lt(S, i), function(t, e) {
            t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
            e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
            e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
            e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(S, i)) : i.isMeshStandardMaterial ? (Lt(S, i, a), i.isMeshPhysicalMaterial ? function(t, e, i) {
            Rt(t, e, i), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
            e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
            e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
            e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate());
            t.transparency.value = e.transparency
        }(S, i, a) : Rt(S, i, a)) : i.isMeshMatcapMaterial ? (Lt(S, i), function(t, e) {
            e.matcap && (t.matcap.value = e.matcap);
            e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
            e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
            e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(S, i)) : i.isMeshDepthMaterial ? (Lt(S, i), function(t, e) {
            e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(S, i)) : i.isMeshDistanceMaterial ? (Lt(S, i), function(t, e) {
            e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
            t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
        }(S, i)) : i.isMeshNormalMaterial ? (Lt(S, i), function(t, e) {
            e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
            e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
            e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }(S, i)) : i.isLineBasicMaterial ? (function(t, e) {
            t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
        }(S, i), i.isLineDashedMaterial && function(t, e) {
            t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
        }(S, i)) : i.isPointsMaterial ? function(t, e) {
            t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * $, t.scale.value = .5 * K, e.map && (t.map.value = e.map);
            e.alphaMap && (t.alphaMap.value = e.alphaMap);
            var i;
            e.map ? i = e.map : e.alphaMap && (i = e.alphaMap);
            void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
        }(S, i) : i.isSpriteMaterial ? function(t, e) {
            t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
            e.alphaMap && (t.alphaMap.value = e.alphaMap);
            var i;
            e.map ? i = e.map : e.alphaMap && (i = e.alphaMap);
            void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
        }(S, i) : i.isShadowMaterial && (S.color.value.copy(i.color), S.opacity.value = i.opacity), void 0 !== S.ltc_1 && (S.ltc_1.value = Qe.LTC_1), void 0 !== S.ltc_2 && (S.ltc_2.value = Qe.LTC_2), pn.upload(g, s.uniformsList, S, M), i.isShaderMaterial && (i.uniformsNeedUpdate = !1)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (pn.upload(g, s.uniformsList, S, M), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && _.setValue(g, "center", n.center), _.setValue(g, "modelViewMatrix", n.modelViewMatrix), _.setValue(g, "normalMatrix", n.normalMatrix), _.setValue(g, "modelMatrix", n.matrixWorld), b
    }

    function Lt(t, e, i) {
        t.opacity.value = e.opacity, e.color && t.diffuse.value.copy(e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap);
        var n, r, a = e.envMap || i;
        a && (t.envMap.value = a, t.flipEnvMap.value = a.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = w.get(a).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix)), e.aoMap ? r = e.aoMap : e.lightMap && (r = e.lightMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), t.uv2Transform.value.copy(r.matrix))
    }

    function Rt(t, e, i) {
        t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), (e.envMap || i) && (t.envMapIntensity.value = e.envMapIntensity)
    }
    wt.setAnimationLoop((function(t) {
        ft.isPresenting || _t && _t(t)
    })), "undefined" != typeof window && wt.setContext(window), this.setAnimationLoop = function(t) {
        _t = t, ft.setAnimationLoop(t), wt.start()
    }, this.render = function(t, e) {
        var i, n;
        if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), i = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), n = arguments[3]), e && e.isCamera) {
            if (!U) {
                j.geometry = null, j.program = null, j.wireframe = !1, V = -1, W = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), ft.enabled && ft.isPresenting && (e = ft.getCamera(e)), t.onBeforeRender(z, t, e, i || H), (f = P.get(t, e)).init(), ht.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), at.setFromProjectionMatrix(ht), ct = this.localClippingEnabled, st = ot.init(this.clippingPlanes, ct, e), (p = L.get(t, e)).init(), Mt(t, e, 0, z.sortObjects), p.finish(), !0 === z.sortObjects && p.sort(tt, et), st && ot.beginShadows();
                var r = f.state.shadowsArray;
                mt.render(r, t, e), f.setupLights(e), st && ot.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== i && this.setRenderTarget(i), C.render(p, t, e, n);
                var a = p.opaque,
                    o = p.transparent;
                if (t.overrideMaterial) {
                    var s = t.overrideMaterial;
                    a.length && St(a, t, e, s), o.length && St(o, t, e, s)
                } else a.length && St(a, t, e), o.length && St(o, t, e);
                t.onAfterRender(z, t, e), null !== H && (M.updateRenderTargetMipmap(H), M.updateMultisampleRenderTarget(H)), x.buffers.depth.setTest(!0), x.buffers.depth.setMask(!0), x.buffers.color.setMask(!0), x.setPolygonOffset(!1), p = null, f = null
            }
        } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
    }, this.setFramebuffer = function(t) {
        F !== t && null === H && g.bindFramebuffer(36160, t), F = t
    }, this.getActiveCubeFace = function() {
        return B
    }, this.getActiveMipmapLevel = function() {
        return G
    }, this.getRenderTarget = function() {
        return H
    }, this.setRenderTarget = function(t, e, i) {
        H = t, B = e, G = i, t && void 0 === w.get(t).__webglFramebuffer && M.setupRenderTarget(t);
        var n = F,
            r = !1;
        if (t) {
            var a = w.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget ? (n = a[e || 0], r = !0) : n = t.isWebGLMultisampleRenderTarget ? w.get(t).__webglMultisampledFramebuffer : a, X.copy(t.viewport), Z.copy(t.scissor), J = t.scissorTest
        } else X.copy(it).multiplyScalar($).floor(), Z.copy(nt).multiplyScalar($).floor(), J = rt;
        if (k !== n && (g.bindFramebuffer(36160, n), k = n), x.viewport(X), x.scissor(Z), x.setScissorTest(J), r) {
            var o = w.get(t.texture);
            g.framebufferTexture2D(36160, 36064, 34069 + (e || 0), o.__webglTexture, i || 0)
        }
    }, this.readRenderTargetPixels = function(t, e, i, n, r, a, o) {
        if (t && t.isWebGLRenderTarget) {
            var s = w.get(t).__webglFramebuffer;
            if (t.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s) {
                var c = !1;
                s !== k && (g.bindFramebuffer(36160, s), c = !0);
                try {
                    var h = t.texture,
                        l = h.format,
                        u = h.type;
                    if (1023 !== l && N.convert(l) !== g.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    if (!(1009 === u || N.convert(u) === g.getParameter(35738) || 1015 === u && (y.isWebGL2 || v.get("OES_texture_float") || v.get("WEBGL_color_buffer_float")) || 1016 === u && (y.isWebGL2 ? v.get("EXT_color_buffer_float") : v.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    36053 === g.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && g.readPixels(e, i, n, r, N.convert(l), N.convert(u), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    c && g.bindFramebuffer(36160, k)
                }
            }
        } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
    }, this.copyFramebufferToTexture = function(t, e, i) {
        void 0 === i && (i = 0);
        var n = Math.pow(2, -i),
            r = Math.floor(e.image.width * n),
            a = Math.floor(e.image.height * n),
            o = N.convert(e.format);
        M.setTexture2D(e, 0), g.copyTexImage2D(3553, i, o, t.x, t.y, r, a, 0), x.unbindTexture()
    }, this.copyTextureToTexture = function(t, e, i, n) {
        void 0 === n && (n = 0);
        var r = e.image.width,
            a = e.image.height,
            o = N.convert(i.format),
            s = N.convert(i.type);
        M.setTexture2D(i, 0), e.isDataTexture ? g.texSubImage2D(3553, n, t.x, t.y, r, a, o, s, e.image.data) : e.isCompressedTexture ? g.compressedTexSubImage2D(3553, n, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, o, e.mipmaps[0].data) : g.texSubImage2D(3553, n, t.x, t.y, o, s, e.image), 0 === n && i.generateMipmaps && g.generateMipmap(3553), x.unbindTexture()
    }, this.initTexture = function(t) {
        M.setTexture2D(t, 0), x.unbindTexture()
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
    }))
}

function ir(t, e) {
    this.name = "", this.color = new Ft(t), this.density = void 0 !== e ? e : 25e-5
}

function nr(t, e, i) {
    this.name = "", this.color = new Ft(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
}

function rr(t, e) {
    this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = 35044, this.updateRange = {
        offset: 0,
        count: -1
    }, this.version = 0
}
Qn.prototype = Object.assign(Object.create(je.prototype), {
    constructor: Qn,
    isArrayCamera: !0
}), Kn.prototype = Object.assign(Object.create(X.prototype), {
    constructor: Kn,
    isGroup: !0
}), Object.assign($n.prototype, {
    constructor: $n,
    getTargetRaySpace: function() {
        return null === this._targetRay && (this._targetRay = new Kn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay
    },
    getGripSpace: function() {
        return null === this._grip && (this._grip = new Kn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip
    },
    dispatchEvent: function(t) {
        return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), this
    },
    disconnect: function(t) {
        return this.dispatchEvent({
            type: "disconnected",
            data: t
        }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), this
    },
    update: function(t, e, i) {
        var n = null,
            r = null,
            a = this._targetRay,
            o = this._grip;
        return t && (null !== a && null !== (n = e.getPose(t.targetRaySpace, i)) && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale)), null !== o && t.gripSpace && null !== (r = e.getPose(t.gripSpace, i)) && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale))), null !== a && (a.visible = null !== n), null !== o && (o.visible = null !== r), this
    }
}), Object.assign(tr.prototype, a.prototype), Object.assign(ir.prototype, {
    isFogExp2: !0,
    clone: function() {
        return new ir(this.color, this.density)
    },
    toJSON: function() {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }
}), Object.assign(nr.prototype, {
    isFog: !0,
    clone: function() {
        return new nr(this.color, this.near, this.far)
    },
    toJSON: function() {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }
}), Object.defineProperty(rr.prototype, "needsUpdate", {
    set: function(t) {
        !0 === t && this.version++
    }
}), Object.assign(rr.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function() {},
    setUsage: function(t) {
        return this.usage = t, this
    },
    copy: function(t) {
        return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
    },
    copyAt: function(t, e, i) {
        t *= this.stride, i *= e.stride;
        for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
        return this
    },
    set: function(t, e) {
        return void 0 === e && (e = 0), this.array.set(t, e), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    onUpload: function(t) {
        return this.onUploadCallback = t, this
    }
});
var ar, or = new _;

function sr(t, e, i, n) {
    this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
}

function cr(t) {
    jt.call(this), this.type = "SpriteMaterial", this.color = new Ft(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t)
}
Object.defineProperties(sr.prototype, {
    count: {
        get: function() {
            return this.data.count
        }
    },
    array: {
        get: function() {
            return this.data.array
        }
    }
}), Object.assign(sr.prototype, {
    isInterleavedBufferAttribute: !0,
    applyMatrix4: function(t) {
        for (var e = 0, i = this.data.count; e < i; e++) or.x = this.getX(e), or.y = this.getY(e), or.z = this.getZ(e), or.applyMatrix4(t), this.setXYZ(e, or.x, or.y, or.z);
        return this
    },
    setX: function(t, e) {
        return this.data.array[t * this.data.stride + this.offset] = e, this
    },
    setY: function(t, e) {
        return this.data.array[t * this.data.stride + this.offset + 1] = e, this
    },
    setZ: function(t, e) {
        return this.data.array[t * this.data.stride + this.offset + 2] = e, this
    },
    setW: function(t, e) {
        return this.data.array[t * this.data.stride + this.offset + 3] = e, this
    },
    getX: function(t) {
        return this.data.array[t * this.data.stride + this.offset]
    },
    getY: function(t) {
        return this.data.array[t * this.data.stride + this.offset + 1]
    },
    getZ: function(t) {
        return this.data.array[t * this.data.stride + this.offset + 2]
    },
    getW: function(t) {
        return this.data.array[t * this.data.stride + this.offset + 3]
    },
    setXY: function(t, e, i) {
        return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
    },
    setXYZ: function(t, e, i, n) {
        return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
    },
    setXYZW: function(t, e, i, n, r) {
        return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
    }
}), cr.prototype = Object.create(jt.prototype), cr.prototype.constructor = cr, cr.prototype.isSpriteMaterial = !0, cr.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
};
var hr = new _,
    lr = new _,
    ur = new _,
    dr = new l,
    pr = new l,
    fr = new R,
    mr = new _,
    gr = new _,
    vr = new _,
    yr = new l,
    xr = new l,
    br = new l;

function _r(t) {
    if (X.call(this), this.type = "Sprite", void 0 === ar) {
        ar = new de;
        var e = new rr(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
        ar.setIndex([0, 1, 2, 0, 2, 3]), ar.setAttribute("position", new sr(e, 3, 0, !1)), ar.setAttribute("uv", new sr(e, 2, 3, !1))
    }
    this.geometry = ar, this.material = void 0 !== t ? t : new cr, this.center = new l(.5, .5)
}

function wr(t, e, i, n, r, a) {
    dr.subVectors(t, i).addScalar(.5).multiply(n), void 0 !== r ? (pr.x = a * dr.x - r * dr.y, pr.y = r * dr.x + a * dr.y) : pr.copy(dr), t.copy(e), t.x += pr.x, t.y += pr.y, t.applyMatrix4(fr)
}
_r.prototype = Object.assign(Object.create(X.prototype), {
    constructor: _r,
    isSprite: !0,
    raycast: function(t, e) {
        null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), lr.setFromMatrixScale(this.matrixWorld), fr.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), ur.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && lr.multiplyScalar(-ur.z);
        var i, n, r = this.material.rotation;
        0 !== r && (n = Math.cos(r), i = Math.sin(r));
        var a = this.center;
        wr(mr.set(-.5, -.5, 0), ur, a, lr, i, n), wr(gr.set(.5, -.5, 0), ur, a, lr, i, n), wr(vr.set(.5, .5, 0), ur, a, lr, i, n), yr.set(0, 0), xr.set(1, 0), br.set(1, 1);
        var o = t.ray.intersectTriangle(mr, gr, vr, !1, hr);
        if (null !== o || (wr(gr.set(-.5, .5, 0), ur, a, lr, i, n), xr.set(0, 1), null !== (o = t.ray.intersectTriangle(mr, vr, gr, !1, hr)))) {
            var s = t.ray.origin.distanceTo(hr);
            s < t.near || s > t.far || e.push({
                distance: s,
                point: hr.clone(),
                uv: Dt.getUV(hr, mr, gr, vr, yr, xr, br, new l),
                face: null,
                object: this
            })
        }
    },
    clone: function() {
        return new this.constructor(this.material).copy(this)
    },
    copy: function(t) {
        return X.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
    }
});
var Mr, Sr, Tr, Er, Ar, Lr = new _,
    Rr = new _;

function Pr() {
    X.call(this), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
        levels: {
            enumerable: !0,
            value: []
        }
    }), this.autoUpdate = !0
}

function Cr(t, e) {
    t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), Pe.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new R, this.bindMatrixInverse = new R
}
Pr.prototype = Object.assign(Object.create(X.prototype), {
    constructor: Pr,
    isLOD: !0,
    copy: function(t) {
        X.prototype.copy.call(this, t, !1);
        for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
            var r = e[i];
            this.addLevel(r.object.clone(), r.distance)
        }
        return this.autoUpdate = t.autoUpdate, this
    },
    addLevel: function(t, e) {
        void 0 === e && (e = 0), e = Math.abs(e);
        for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
        return i.splice(n, 0, {
            distance: e,
            object: t
        }), this.add(t), this
    },
    getCurrentLevel: function() {
        return this._currentLevel
    },
    getObjectForDistance: function(t) {
        var e = this.levels;
        if (e.length > 0) {
            for (var i = 1, n = e.length; i < n && !(t < e[i].distance); i++);
            return e[i - 1].object
        }
        return null
    },
    raycast: function(t, e) {
        if (this.levels.length > 0) {
            Lr.setFromMatrixPosition(this.matrixWorld);
            var i = t.ray.origin.distanceTo(Lr);
            this.getObjectForDistance(i).raycast(t, e)
        }
    },
    update: function(t) {
        var e = this.levels;
        if (e.length > 1) {
            Lr.setFromMatrixPosition(t.matrixWorld), Rr.setFromMatrixPosition(this.matrixWorld);
            var i = Lr.distanceTo(Rr) / t.zoom;
            e[0].object.visible = !0;
            for (var n = 1, r = e.length; n < r && i >= e[n].distance; n++) e[n - 1].object.visible = !1, e[n].object.visible = !0;
            for (this._currentLevel = n - 1; n < r; n++) e[n].object.visible = !1
        }
    },
    toJSON: function(t) {
        var e = X.prototype.toJSON.call(this, t);
        !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
        for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
            var a = i[n];
            e.object.levels.push({
                object: a.object.uuid,
                distance: a.distance
            })
        }
        return e
    }
}), Cr.prototype = Object.assign(Object.create(Pe.prototype), {
    constructor: Cr,
    isSkinnedMesh: !0,
    bind: function(t, e) {
        this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
    },
    pose: function() {
        this.skeleton.pose()
    },
    normalizeSkinWeights: function() {
        for (var t = new m, e = this.geometry.attributes.skinWeight, i = 0, n = e.count; i < n; i++) {
            t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.w = e.getW(i);
            var r = 1 / t.manhattanLength();
            r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w)
        }
    },
    updateMatrixWorld: function(t) {
        Pe.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    },
    clone: function() {
        return new this.constructor(this.geometry, this.material).copy(this)
    },
    boneTransform: (Mr = new _, Sr = new m, Tr = new m, Er = new _, Ar = new R, function(t, e) {
        var i = this.skeleton,
            n = this.geometry;
        Sr.fromBufferAttribute(n.attributes.skinIndex, t), Tr.fromBufferAttribute(n.attributes.skinWeight, t), Mr.fromBufferAttribute(n.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
        for (var r = 0; r < 4; r++) {
            var a = Tr.getComponent(r);
            if (0 !== a) {
                var o = Sr.getComponent(r);
                Ar.multiplyMatrices(i.bones[o].matrixWorld, i.boneInverses[o]), e.addScaledVector(Er.copy(Mr).applyMatrix4(Ar), a)
            }
        }
        return e.applyMatrix4(this.bindMatrixInverse)
    })
});
var Or = new R,
    Ir = new R;

function Dr(t, e) {
    if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), this.frame = -1, void 0 === e) this.calculateInverses();
    else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
    else {
        console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
        for (var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new R)
    }
}

function Nr() {
    X.call(this), this.type = "Bone"
}
Object.assign(Dr.prototype, {
    calculateInverses: function() {
        this.boneInverses = [];
        for (var t = 0, e = this.bones.length; t < e; t++) {
            var i = new R;
            this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
        }
    },
    pose: function() {
        var t, e, i;
        for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
        for (e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
    },
    update: function() {
        for (var t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, a = t.length; r < a; r++) {
            var o = t[r] ? t[r].matrixWorld : Ir;
            Or.multiplyMatrices(o, e[r]), Or.toArray(i, 16 * r)
        }
        void 0 !== n && (n.needsUpdate = !0)
    },
    clone: function() {
        return new Dr(this.bones, this.boneInverses)
    },
    getBoneByName: function(t) {
        for (var e = 0, i = this.bones.length; e < i; e++) {
            var n = this.bones[e];
            if (n.name === t) return n
        }
    },
    dispose: function() {
        this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = void 0)
    }
}), Nr.prototype = Object.assign(Object.create(X.prototype), {
    constructor: Nr,
    isBone: !0
});
var zr = new R,
    Ur = new R,
    Fr = [],
    Br = new Pe;

function Gr(t, e, i) {
    Pe.call(this, t, e), this.instanceMatrix = new Xt(new Float32Array(16 * i), 16), this.count = i, this.frustumCulled = !1
}

function Hr(t) {
    jt.call(this), this.type = "LineBasicMaterial", this.color = new Ft(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(t)
}
Gr.prototype = Object.assign(Object.create(Pe.prototype), {
    constructor: Gr,
    isInstancedMesh: !0,
    getMatrixAt: function(t, e) {
        e.fromArray(this.instanceMatrix.array, 16 * t)
    },
    raycast: function(t, e) {
        var i = this.matrixWorld,
            n = this.count;
        if (Br.geometry = this.geometry, Br.material = this.material, void 0 !== Br.material)
            for (var r = 0; r < n; r++) {
                this.getMatrixAt(r, zr), Ur.multiplyMatrices(i, zr), Br.matrixWorld = Ur, Br.raycast(t, Fr);
                for (var a = 0, o = Fr.length; a < o; a++) {
                    var s = Fr[a];
                    s.instanceId = r, s.object = this, e.push(s)
                }
                Fr.length = 0
            }
    },
    setMatrixAt: function(t, e) {
        e.toArray(this.instanceMatrix.array, 16 * t)
    },
    updateMorphTargets: function() {}
}), Hr.prototype = Object.create(jt.prototype), Hr.prototype.constructor = Hr, Hr.prototype.isLineBasicMaterial = !0, Hr.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
};
var kr = new _,
    Vr = new _,
    jr = new R,
    Wr = new xt,
    qr = new ut;

function Xr(t, e, i) {
    1 === i && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), X.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new de, this.material = void 0 !== e ? e : new Hr
}
Xr.prototype = Object.assign(Object.create(X.prototype), {
    constructor: Xr,
    isLine: !0,
    computeLineDistances: function() {
        var t = this.geometry;
        if (t.isBufferGeometry)
            if (null === t.index) {
                for (var e = t.attributes.position, i = [0], n = 1, r = e.count; n < r; n++) kr.fromBufferAttribute(e, n - 1), Vr.fromBufferAttribute(e, n), i[n] = i[n - 1], i[n] += kr.distanceTo(Vr);
                t.setAttribute("lineDistance", new ee(i, 1))
            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else if (t.isGeometry) {
            var a = t.vertices;
            (i = t.lineDistances)[0] = 0;
            for (n = 1, r = a.length; n < r; n++) i[n] = i[n - 1], i[n] += a[n - 1].distanceTo(a[n])
        }
        return this
    },
    raycast: function(t, e) {
        var i = this.geometry,
            n = this.matrixWorld,
            r = t.params.Line.threshold;
        if (null === i.boundingSphere && i.computeBoundingSphere(), qr.copy(i.boundingSphere), qr.applyMatrix4(n), qr.radius += r, !1 !== t.ray.intersectsSphere(qr)) {
            jr.getInverse(n), Wr.copy(t.ray).applyMatrix4(jr);
            var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                o = a * a,
                s = new _,
                c = new _,
                h = new _,
                l = new _,
                u = this && this.isLineSegments ? 2 : 1;
            if (i.isBufferGeometry) {
                var d = i.index,
                    p = i.attributes.position.array;
                if (null !== d)
                    for (var f = d.array, m = 0, g = f.length - 1; m < g; m += u) {
                        var v = f[m],
                            y = f[m + 1];
                        if (s.fromArray(p, 3 * v), c.fromArray(p, 3 * y), !(Wr.distanceSqToSegment(s, c, l, h) > o)) l.applyMatrix4(this.matrixWorld), (w = t.ray.origin.distanceTo(l)) < t.near || w > t.far || e.push({
                            distance: w,
                            point: h.clone().applyMatrix4(this.matrixWorld),
                            index: m,
                            face: null,
                            faceIndex: null,
                            object: this
                        })
                    } else
                        for (m = 0, g = p.length / 3 - 1; m < g; m += u) {
                            if (s.fromArray(p, 3 * m), c.fromArray(p, 3 * m + 3), !(Wr.distanceSqToSegment(s, c, l, h) > o)) l.applyMatrix4(this.matrixWorld), (w = t.ray.origin.distanceTo(l)) < t.near || w > t.far || e.push({
                                distance: w,
                                point: h.clone().applyMatrix4(this.matrixWorld),
                                index: m,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        }
            } else if (i.isGeometry) {
                var x = i.vertices,
                    b = x.length;
                for (m = 0; m < b - 1; m += u) {
                    var w;
                    if (!(Wr.distanceSqToSegment(x[m], x[m + 1], l, h) > o)) l.applyMatrix4(this.matrixWorld), (w = t.ray.origin.distanceTo(l)) < t.near || w > t.far || e.push({
                        distance: w,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: m,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            }
        }
    },
    clone: function() {
        return new this.constructor(this.geometry, this.material).copy(this)
    }
});
var Yr = new _,
    Zr = new _;

function Jr(t, e) {
    Xr.call(this, t, e), this.type = "LineSegments"
}

function Qr(t, e) {
    Xr.call(this, t, e), this.type = "LineLoop"
}

function Kr(t) {
    jt.call(this), this.type = "PointsMaterial", this.color = new Ft(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t)
}
Jr.prototype = Object.assign(Object.create(Xr.prototype), {
    constructor: Jr,
    isLineSegments: !0,
    computeLineDistances: function() {
        var t = this.geometry;
        if (t.isBufferGeometry)
            if (null === t.index) {
                for (var e = t.attributes.position, i = [], n = 0, r = e.count; n < r; n += 2) Yr.fromBufferAttribute(e, n), Zr.fromBufferAttribute(e, n + 1), i[n] = 0 === n ? 0 : i[n - 1], i[n + 1] = i[n] + Yr.distanceTo(Zr);
                t.setAttribute("lineDistance", new ee(i, 1))
            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else if (t.isGeometry) {
            var a = t.vertices;
            for (i = t.lineDistances, n = 0, r = a.length; n < r; n += 2) Yr.copy(a[n]), Zr.copy(a[n + 1]), i[n] = 0 === n ? 0 : i[n - 1], i[n + 1] = i[n] + Yr.distanceTo(Zr)
        }
        return this
    }
}), Qr.prototype = Object.assign(Object.create(Xr.prototype), {
    constructor: Qr,
    isLineLoop: !0
}), Kr.prototype = Object.create(jt.prototype), Kr.prototype.constructor = Kr, Kr.prototype.isPointsMaterial = !0, Kr.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
};
var $r = new R,
    ta = new xt,
    ea = new ut,
    ia = new _;

function na(t, e) {
    X.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new de, this.material = void 0 !== e ? e : new Kr, this.updateMorphTargets()
}

function ra(t, e, i, n, r, a, o) {
    var s = ta.distanceSqToPoint(t);
    if (s < i) {
        var c = new _;
        ta.closestPointToPoint(t, c), c.applyMatrix4(n);
        var h = r.ray.origin.distanceTo(c);
        if (h < r.near || h > r.far) return;
        a.push({
            distance: h,
            distanceToRay: Math.sqrt(s),
            point: c,
            index: e,
            face: null,
            object: o
        })
    }
}

function aa(t, e, i, n, r, a, o, s, c) {
    f.call(this, t, e, i, n, r, a, o, s, c), this.format = void 0 !== o ? o : 1022, this.minFilter = void 0 !== a ? a : 1006, this.magFilter = void 0 !== r ? r : 1006, this.generateMipmaps = !1
}

function oa(t, e, i, n, r, a, o, s, c, h, l, u) {
    f.call(this, null, a, o, s, c, h, n, r, l, u), this.image = {
        width: e,
        height: i
    }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
}

function sa(t, e, i, n, r, a, o, s, c) {
    f.call(this, t, e, i, n, r, a, o, s, c), this.needsUpdate = !0
}

function ca(t, e, i, n, r, a, o, s, c, h) {
    if (1026 !== (h = void 0 !== h ? h : 1026) && 1027 !== h) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    void 0 === i && 1026 === h && (i = 1012), void 0 === i && 1027 === h && (i = 1020), f.call(this, null, n, r, a, o, s, h, i, c), this.image = {
        width: t,
        height: e
    }, this.magFilter = void 0 !== o ? o : 1003, this.minFilter = void 0 !== s ? s : 1003, this.flipY = !1, this.generateMipmaps = !1
}

function ha(t) {
    de.call(this), this.type = "WireframeGeometry";
    var e, i, n, r, a, o, s, c, h, l, u = [],
        d = [0, 0],
        p = {},
        f = ["a", "b", "c"];
    if (t && t.isGeometry) {
        var m = t.faces;
        for (e = 0, n = m.length; e < n; e++) {
            var g = m[e];
            for (i = 0; i < 3; i++) s = g[f[i]], c = g[f[(i + 1) % 3]], d[0] = Math.min(s, c), d[1] = Math.max(s, c), void 0 === p[h = d[0] + "," + d[1]] && (p[h] = {
                index1: d[0],
                index2: d[1]
            })
        }
        for (h in p) o = p[h], l = t.vertices[o.index1], u.push(l.x, l.y, l.z), l = t.vertices[o.index2], u.push(l.x, l.y, l.z)
    } else if (t && t.isBufferGeometry) {
        var v, y, x, b, w, M, S;
        if (l = new _, null !== t.index) {
            for (v = t.attributes.position, y = t.index, 0 === (x = t.groups).length && (x = [{
                    start: 0,
                    count: y.count,
                    materialIndex: 0
                }]), r = 0, a = x.length; r < a; ++r)
                for (e = w = (b = x[r]).start, n = w + b.count; e < n; e += 3)
                    for (i = 0; i < 3; i++) s = y.getX(e + i), c = y.getX(e + (i + 1) % 3), d[0] = Math.min(s, c), d[1] = Math.max(s, c), void 0 === p[h = d[0] + "," + d[1]] && (p[h] = {
                        index1: d[0],
                        index2: d[1]
                    });
            for (h in p) o = p[h], l.fromBufferAttribute(v, o.index1), u.push(l.x, l.y, l.z), l.fromBufferAttribute(v, o.index2), u.push(l.x, l.y, l.z)
        } else
            for (e = 0, n = (v = t.attributes.position).count / 3; e < n; e++)
                for (i = 0; i < 3; i++) M = 3 * e + i, l.fromBufferAttribute(v, M), u.push(l.x, l.y, l.z), S = 3 * e + (i + 1) % 3, l.fromBufferAttribute(v, S), u.push(l.x, l.y, l.z)
    }
    this.setAttribute("position", new ee(u, 3))
}

function la(t, e, i) {
    Ue.call(this), this.type = "ParametricGeometry", this.parameters = {
        func: t,
        slices: e,
        stacks: i
    }, this.fromBufferGeometry(new ua(t, e, i)), this.mergeVertices()
}

function ua(t, e, i) {
    de.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
        func: t,
        slices: e,
        stacks: i
    };
    var n, r, a = [],
        o = [],
        s = [],
        c = [],
        h = new _,
        l = new _,
        u = new _,
        d = new _,
        p = new _;
    t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    var f = e + 1;
    for (n = 0; n <= i; n++) {
        var m = n / i;
        for (r = 0; r <= e; r++) {
            var g = r / e;
            t(g, m, l), o.push(l.x, l.y, l.z), g - 1e-5 >= 0 ? (t(g - 1e-5, m, u), d.subVectors(l, u)) : (t(g + 1e-5, m, u), d.subVectors(u, l)), m - 1e-5 >= 0 ? (t(g, m - 1e-5, u), p.subVectors(l, u)) : (t(g, m + 1e-5, u), p.subVectors(u, l)), h.crossVectors(d, p).normalize(), s.push(h.x, h.y, h.z), c.push(g, m)
        }
    }
    for (n = 0; n < i; n++)
        for (r = 0; r < e; r++) {
            var v = n * f + r,
                y = n * f + r + 1,
                x = (n + 1) * f + r + 1,
                b = (n + 1) * f + r;
            a.push(v, y, b), a.push(y, x, b)
        }
    this.setIndex(a), this.setAttribute("position", new ee(o, 3)), this.setAttribute("normal", new ee(s, 3)), this.setAttribute("uv", new ee(c, 2))
}

function da(t, e, i, n) {
    Ue.call(this), this.type = "PolyhedronGeometry", this.parameters = {
        vertices: t,
        indices: e,
        radius: i,
        detail: n
    }, this.fromBufferGeometry(new pa(t, e, i, n)), this.mergeVertices()
}

function pa(t, e, i, n) {
    de.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
        vertices: t,
        indices: e,
        radius: i,
        detail: n
    }, i = i || 1;
    var r = [],
        a = [];

    function o(t, e, i, n) {
        var r, a, o = Math.pow(2, n),
            c = [];
        for (r = 0; r <= o; r++) {
            c[r] = [];
            var h = t.clone().lerp(i, r / o),
                l = e.clone().lerp(i, r / o),
                u = o - r;
            for (a = 0; a <= u; a++) c[r][a] = 0 === a && r === o ? h : h.clone().lerp(l, a / u)
        }
        for (r = 0; r < o; r++)
            for (a = 0; a < 2 * (o - r) - 1; a++) {
                var d = Math.floor(a / 2);
                a % 2 == 0 ? (s(c[r][d + 1]), s(c[r + 1][d]), s(c[r][d])) : (s(c[r][d + 1]), s(c[r + 1][d + 1]), s(c[r + 1][d]))
            }
    }

    function s(t) {
        r.push(t.x, t.y, t.z)
    }

    function c(e, i) {
        var n = 3 * e;
        i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
    }

    function h(t, e, i, n) {
        n < 0 && 1 === t.x && (a[e] = t.x - 1), 0 === i.x && 0 === i.z && (a[e] = n / 2 / Math.PI + .5)
    }

    function u(t) {
        return Math.atan2(t.z, -t.x)
    }

    function d(t) {
        return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
    }! function(t) {
        for (var i = new _, n = new _, r = new _, a = 0; a < e.length; a += 3) c(e[a + 0], i), c(e[a + 1], n), c(e[a + 2], r), o(i, n, r, t)
    }(n = n || 0),
    function(t) {
        for (var e = new _, i = 0; i < r.length; i += 3) e.x = r[i + 0], e.y = r[i + 1], e.z = r[i + 2], e.normalize().multiplyScalar(t), r[i + 0] = e.x, r[i + 1] = e.y, r[i + 2] = e.z
    }(i),
    function() {
        for (var t = new _, e = 0; e < r.length; e += 3) {
            t.x = r[e + 0], t.y = r[e + 1], t.z = r[e + 2];
            var i = u(t) / 2 / Math.PI + .5,
                n = d(t) / Math.PI + .5;
            a.push(i, 1 - n)
        }(function() {
            for (var t = new _, e = new _, i = new _, n = new _, o = new l, s = new l, c = new l, d = 0, p = 0; d < r.length; d += 9, p += 6) {
                t.set(r[d + 0], r[d + 1], r[d + 2]), e.set(r[d + 3], r[d + 4], r[d + 5]), i.set(r[d + 6], r[d + 7], r[d + 8]), o.set(a[p + 0], a[p + 1]), s.set(a[p + 2], a[p + 3]), c.set(a[p + 4], a[p + 5]), n.copy(t).add(e).add(i).divideScalar(3);
                var f = u(n);
                h(o, p + 0, t, f), h(s, p + 2, e, f), h(c, p + 4, i, f)
            }
        })(),
        function() {
            for (var t = 0; t < a.length; t += 6) {
                var e = a[t + 0],
                    i = a[t + 2],
                    n = a[t + 4],
                    r = Math.max(e, i, n),
                    o = Math.min(e, i, n);
                r > .9 && o < .1 && (e < .2 && (a[t + 0] += 1), i < .2 && (a[t + 2] += 1), n < .2 && (a[t + 4] += 1))
            }
        }()
    }(), this.setAttribute("position", new ee(r, 3)), this.setAttribute("normal", new ee(r.slice(), 3)), this.setAttribute("uv", new ee(a, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
}

function fa(t, e) {
    Ue.call(this), this.type = "TetrahedronGeometry", this.parameters = {
        radius: t,
        detail: e
    }, this.fromBufferGeometry(new ma(t, e)), this.mergeVertices()
}

function ma(t, e) {
    pa.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
        radius: t,
        detail: e
    }
}

function ga(t, e) {
    Ue.call(this), this.type = "OctahedronGeometry", this.parameters = {
        radius: t,
        detail: e
    }, this.fromBufferGeometry(new va(t, e)), this.mergeVertices()
}

function va(t, e) {
    pa.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
        radius: t,
        detail: e
    }
}

function ya(t, e) {
    Ue.call(this), this.type = "IcosahedronGeometry", this.parameters = {
        radius: t,
        detail: e
    }, this.fromBufferGeometry(new xa(t, e)), this.mergeVertices()
}

function xa(t, e) {
    var i = (1 + Math.sqrt(5)) / 2,
        n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
    pa.call(this, n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
        radius: t,
        detail: e
    }
}

function ba(t, e) {
    Ue.call(this), this.type = "DodecahedronGeometry", this.parameters = {
        radius: t,
        detail: e
    }, this.fromBufferGeometry(new _a(t, e)), this.mergeVertices()
}

function _a(t, e) {
    var i = (1 + Math.sqrt(5)) / 2,
        n = 1 / i,
        r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n];
    pa.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
        radius: t,
        detail: e
    }
}

function wa(t, e, i, n, r, a) {
    Ue.call(this), this.type = "TubeGeometry", this.parameters = {
        path: t,
        tubularSegments: e,
        radius: i,
        radialSegments: n,
        closed: r
    }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
    var o = new Ma(t, e, i, n, r);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
}

function Ma(t, e, i, n, r) {
    de.call(this), this.type = "TubeBufferGeometry", this.parameters = {
        path: t,
        tubularSegments: e,
        radius: i,
        radialSegments: n,
        closed: r
    }, e = e || 64, i = i || 1, n = n || 8, r = r || !1;
    var a = t.computeFrenetFrames(e, r);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    var o, s, c = new _,
        h = new _,
        u = new l,
        d = new _,
        p = [],
        f = [],
        m = [],
        g = [];

    function v(r) {
        d = t.getPointAt(r / e, d);
        var o = a.normals[r],
            l = a.binormals[r];
        for (s = 0; s <= n; s++) {
            var u = s / n * Math.PI * 2,
                m = Math.sin(u),
                g = -Math.cos(u);
            h.x = g * o.x + m * l.x, h.y = g * o.y + m * l.y, h.z = g * o.z + m * l.z, h.normalize(), f.push(h.x, h.y, h.z), c.x = d.x + i * h.x, c.y = d.y + i * h.y, c.z = d.z + i * h.z, p.push(c.x, c.y, c.z)
        }
    }! function() {
        for (o = 0; o < e; o++) v(o);
        v(!1 === r ? e : 0),
            function() {
                for (o = 0; o <= e; o++)
                    for (s = 0; s <= n; s++) u.x = o / e, u.y = s / n, m.push(u.x, u.y)
            }(),
            function() {
                for (s = 1; s <= e; s++)
                    for (o = 1; o <= n; o++) {
                        var t = (n + 1) * (s - 1) + (o - 1),
                            i = (n + 1) * s + (o - 1),
                            r = (n + 1) * s + o,
                            a = (n + 1) * (s - 1) + o;
                        g.push(t, i, a), g.push(i, r, a)
                    }
            }()
    }(), this.setIndex(g), this.setAttribute("position", new ee(p, 3)), this.setAttribute("normal", new ee(f, 3)), this.setAttribute("uv", new ee(m, 2))
}

function Sa(t, e, i, n, r, a, o) {
    Ue.call(this), this.type = "TorusKnotGeometry", this.parameters = {
        radius: t,
        tube: e,
        tubularSegments: i,
        radialSegments: n,
        p: r,
        q: a
    }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Ta(t, e, i, n, r, a)), this.mergeVertices()
}

function Ta(t, e, i, n, r, a) {
    de.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
        radius: t,
        tube: e,
        tubularSegments: i,
        radialSegments: n,
        p: r,
        q: a
    }, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, a = a || 3;
    var o, s, c = [],
        h = [],
        l = [],
        u = [],
        d = new _,
        p = new _,
        f = new _,
        m = new _,
        g = new _,
        v = new _,
        y = new _;
    for (o = 0; o <= i; ++o) {
        var x = o / i * r * Math.PI * 2;
        for (L(x, r, a, t, f), L(x + .01, r, a, t, m), v.subVectors(m, f), y.addVectors(m, f), g.crossVectors(v, y), y.crossVectors(g, v), g.normalize(), y.normalize(), s = 0; s <= n; ++s) {
            var b = s / n * Math.PI * 2,
                w = -e * Math.cos(b),
                M = e * Math.sin(b);
            d.x = f.x + (w * y.x + M * g.x), d.y = f.y + (w * y.y + M * g.y), d.z = f.z + (w * y.z + M * g.z), h.push(d.x, d.y, d.z), p.subVectors(d, f).normalize(), l.push(p.x, p.y, p.z), u.push(o / i), u.push(s / n)
        }
    }
    for (s = 1; s <= i; s++)
        for (o = 1; o <= n; o++) {
            var S = (n + 1) * (s - 1) + (o - 1),
                T = (n + 1) * s + (o - 1),
                E = (n + 1) * s + o,
                A = (n + 1) * (s - 1) + o;
            c.push(S, T, A), c.push(T, E, A)
        }

    function L(t, e, i, n, r) {
        var a = Math.cos(t),
            o = Math.sin(t),
            s = i / e * t,
            c = Math.cos(s);
        r.x = n * (2 + c) * .5 * a, r.y = n * (2 + c) * o * .5, r.z = n * Math.sin(s) * .5
    }
    this.setIndex(c), this.setAttribute("position", new ee(h, 3)), this.setAttribute("normal", new ee(l, 3)), this.setAttribute("uv", new ee(u, 2))
}

function Ea(t, e, i, n, r) {
    Ue.call(this), this.type = "TorusGeometry", this.parameters = {
        radius: t,
        tube: e,
        radialSegments: i,
        tubularSegments: n,
        arc: r
    }, this.fromBufferGeometry(new Aa(t, e, i, n, r)), this.mergeVertices()
}

function Aa(t, e, i, n, r) {
    de.call(this), this.type = "TorusBufferGeometry", this.parameters = {
        radius: t,
        tube: e,
        radialSegments: i,
        tubularSegments: n,
        arc: r
    }, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
    var a, o, s = [],
        c = [],
        h = [],
        l = [],
        u = new _,
        d = new _,
        p = new _;
    for (a = 0; a <= i; a++)
        for (o = 0; o <= n; o++) {
            var f = o / n * r,
                m = a / i * Math.PI * 2;
            d.x = (t + e * Math.cos(m)) * Math.cos(f), d.y = (t + e * Math.cos(m)) * Math.sin(f), d.z = e * Math.sin(m), c.push(d.x, d.y, d.z), u.x = t * Math.cos(f), u.y = t * Math.sin(f), p.subVectors(d, u).normalize(), h.push(p.x, p.y, p.z), l.push(o / n), l.push(a / i)
        }
    for (a = 1; a <= i; a++)
        for (o = 1; o <= n; o++) {
            var g = (n + 1) * a + o - 1,
                v = (n + 1) * (a - 1) + o - 1,
                y = (n + 1) * (a - 1) + o,
                x = (n + 1) * a + o;
            s.push(g, v, x), s.push(v, y, x)
        }
    this.setIndex(s), this.setAttribute("position", new ee(c, 3)), this.setAttribute("normal", new ee(h, 3)), this.setAttribute("uv", new ee(l, 2))
}
na.prototype = Object.assign(Object.create(X.prototype), {
    constructor: na,
    isPoints: !0,
    raycast: function(t, e) {
        var i = this.geometry,
            n = this.matrixWorld,
            r = t.params.Points.threshold;
        if (null === i.boundingSphere && i.computeBoundingSphere(), ea.copy(i.boundingSphere), ea.applyMatrix4(n), ea.radius += r, !1 !== t.ray.intersectsSphere(ea)) {
            $r.getInverse(n), ta.copy(t.ray).applyMatrix4($r);
            var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                o = a * a;
            if (i.isBufferGeometry) {
                var s = i.index,
                    c = i.attributes.position.array;
                if (null !== s)
                    for (var h = s.array, l = 0, u = h.length; l < u; l++) {
                        var d = h[l];
                        ia.fromArray(c, 3 * d), ra(ia, d, o, n, t, e, this)
                    } else {
                        l = 0;
                        for (var p = c.length / 3; l < p; l++) ia.fromArray(c, 3 * l), ra(ia, l, o, n, t, e, this)
                    }
            } else {
                var f = i.vertices;
                for (l = 0, p = f.length; l < p; l++) ra(f[l], l, o, n, t, e, this)
            }
        }
    },
    updateMorphTargets: function() {
        var t, e, i, n = this.geometry;
        if (n.isBufferGeometry) {
            var r = n.morphAttributes,
                a = Object.keys(r);
            if (a.length > 0) {
                var o = r[a[0]];
                if (void 0 !== o)
                    for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
            }
        } else {
            var s = n.morphTargets;
            void 0 !== s && s.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    },
    clone: function() {
        return new this.constructor(this.geometry, this.material).copy(this)
    }
}), aa.prototype = Object.assign(Object.create(f.prototype), {
    constructor: aa,
    isVideoTexture: !0,
    update: function() {
        var t = this.image;
        t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
}), oa.prototype = Object.create(f.prototype), oa.prototype.constructor = oa, oa.prototype.isCompressedTexture = !0, sa.prototype = Object.create(f.prototype), sa.prototype.constructor = sa, sa.prototype.isCanvasTexture = !0, ca.prototype = Object.create(f.prototype), ca.prototype.constructor = ca, ca.prototype.isDepthTexture = !0, ha.prototype = Object.create(de.prototype), ha.prototype.constructor = ha, la.prototype = Object.create(Ue.prototype), la.prototype.constructor = la, ua.prototype = Object.create(de.prototype), ua.prototype.constructor = ua, da.prototype = Object.create(Ue.prototype), da.prototype.constructor = da, pa.prototype = Object.create(de.prototype), pa.prototype.constructor = pa, fa.prototype = Object.create(Ue.prototype), fa.prototype.constructor = fa, ma.prototype = Object.create(pa.prototype), ma.prototype.constructor = ma, ga.prototype = Object.create(Ue.prototype), ga.prototype.constructor = ga, va.prototype = Object.create(pa.prototype), va.prototype.constructor = va, ya.prototype = Object.create(Ue.prototype), ya.prototype.constructor = ya, xa.prototype = Object.create(pa.prototype), xa.prototype.constructor = xa, ba.prototype = Object.create(Ue.prototype), ba.prototype.constructor = ba, _a.prototype = Object.create(pa.prototype), _a.prototype.constructor = _a, wa.prototype = Object.create(Ue.prototype), wa.prototype.constructor = wa, Ma.prototype = Object.create(de.prototype), Ma.prototype.constructor = Ma, Ma.prototype.toJSON = function() {
    var t = de.prototype.toJSON.call(this);
    return t.path = this.parameters.path.toJSON(), t
}, Sa.prototype = Object.create(Ue.prototype), Sa.prototype.constructor = Sa, Ta.prototype = Object.create(de.prototype), Ta.prototype.constructor = Ta, Ea.prototype = Object.create(Ue.prototype), Ea.prototype.constructor = Ea, Aa.prototype = Object.create(de.prototype), Aa.prototype.constructor = Aa;
var La = function(t, e, i) {
    i = i || 2;
    var n, r, a, o, s, c, h, l = e && e.length,
        u = l ? e[0] * i : t.length,
        d = Ra(t, 0, u, i, !0),
        p = [];
    if (!d || d.next === d.prev) return p;
    if (l && (d = function(t, e, i, n) {
            var r, a, o, s, c, h = [];
            for (r = 0, a = e.length; r < a; r++) o = e[r] * n, s = r < a - 1 ? e[r + 1] * n : t.length, (c = Ra(t, o, s, n, !1)) === c.next && (c.steiner = !0), h.push(Ga(c));
            for (h.sort(za), r = 0; r < h.length; r++) Ua(h[r], i), i = Pa(i, i.next);
            return i
        }(t, e, d, i)), t.length > 80 * i) {
        n = a = t[0], r = o = t[1];
        for (var f = i; f < u; f += i)(s = t[f]) < n && (n = s), (c = t[f + 1]) < r && (r = c), s > a && (a = s), c > o && (o = c);
        h = 0 !== (h = Math.max(a - n, o - r)) ? 1 / h : 0
    }
    return Ca(d, p, i, n, r, h), p
};

function Ra(t, e, i, n, r) {
    var a, o;
    if (r === function(t, e, i, n) {
            for (var r = 0, a = e, o = i - n; a < i; a += n) r += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a;
            return r
        }(t, e, i, n) > 0)
        for (a = e; a < i; a += n) o = Ja(a, t[a], t[a + 1], o);
    else
        for (a = i - n; a >= e; a -= n) o = Ja(a, t[a], t[a + 1], o);
    return o && ja(o, o.next) && (Qa(o), o = o.next), o
}

function Pa(t, e) {
    if (!t) return t;
    e || (e = t);
    var i, n = t;
    do {
        if (i = !1, n.steiner || !ja(n, n.next) && 0 !== Va(n.prev, n, n.next)) n = n.next;
        else {
            if (Qa(n), (n = e = n.prev) === n.next) break;
            i = !0
        }
    } while (i || n !== e);
    return e
}

function Ca(t, e, i, n, r, a, o) {
    if (t) {
        !o && a && function(t, e, i, n) {
            var r = t;
            do {
                null === r.z && (r.z = Ba(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
            } while (r !== t);
            r.prevZ.nextZ = null, r.prevZ = null,
                function(t) {
                    var e, i, n, r, a, o, s, c, h = 1;
                    do {
                        for (i = t, t = null, a = null, o = 0; i;) {
                            for (o++, n = i, s = 0, e = 0; e < h && (s++, n = n.nextZ); e++);
                            for (c = h; s > 0 || c > 0 && n;) 0 !== s && (0 === c || !n || i.z <= n.z) ? (r = i, i = i.nextZ, s--) : (r = n, n = n.nextZ, c--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                            i = n
                        }
                        a.nextZ = null, h *= 2
                    } while (o > 1)
                }(r)
        }(t, n, r, a);
        for (var s, c, h = t; t.prev !== t.next;)
            if (s = t.prev, c = t.next, a ? Ia(t, n, r, a) : Oa(t)) e.push(s.i / i), e.push(t.i / i), e.push(c.i / i), Qa(t), t = c.next, h = c.next;
            else if ((t = c) === h) {
            o ? 1 === o ? Ca(t = Da(Pa(t), e, i), e, i, n, r, a, 2) : 2 === o && Na(t, e, i, n, r, a) : Ca(Pa(t), e, i, n, r, a, 1);
            break
        }
    }
}

function Oa(t) {
    var e = t.prev,
        i = t,
        n = t.next;
    if (Va(e, i, n) >= 0) return !1;
    for (var r = t.next.next; r !== t.prev;) {
        if (Ha(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && Va(r.prev, r, r.next) >= 0) return !1;
        r = r.next
    }
    return !0
}

function Ia(t, e, i, n) {
    var r = t.prev,
        a = t,
        o = t.next;
    if (Va(r, a, o) >= 0) return !1;
    for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, c = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, h = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, l = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = Ba(s, c, e, i, n), d = Ba(h, l, e, i, n), p = t.prevZ, f = t.nextZ; p && p.z >= u && f && f.z <= d;) {
        if (p !== t.prev && p !== t.next && Ha(r.x, r.y, a.x, a.y, o.x, o.y, p.x, p.y) && Va(p.prev, p, p.next) >= 0) return !1;
        if (p = p.prevZ, f !== t.prev && f !== t.next && Ha(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && Va(f.prev, f, f.next) >= 0) return !1;
        f = f.nextZ
    }
    for (; p && p.z >= u;) {
        if (p !== t.prev && p !== t.next && Ha(r.x, r.y, a.x, a.y, o.x, o.y, p.x, p.y) && Va(p.prev, p, p.next) >= 0) return !1;
        p = p.prevZ
    }
    for (; f && f.z <= d;) {
        if (f !== t.prev && f !== t.next && Ha(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && Va(f.prev, f, f.next) >= 0) return !1;
        f = f.nextZ
    }
    return !0
}

function Da(t, e, i) {
    var n = t;
    do {
        var r = n.prev,
            a = n.next.next;
        !ja(r, a) && Wa(r, n, n.next, a) && Ya(r, a) && Ya(a, r) && (e.push(r.i / i), e.push(n.i / i), e.push(a.i / i), Qa(n), Qa(n.next), n = t = a), n = n.next
    } while (n !== t);
    return Pa(n)
}

function Na(t, e, i, n, r, a) {
    var o = t;
    do {
        for (var s = o.next.next; s !== o.prev;) {
            if (o.i !== s.i && ka(o, s)) {
                var c = Za(o, s);
                return o = Pa(o, o.next), c = Pa(c, c.next), Ca(o, e, i, n, r, a), void Ca(c, e, i, n, r, a)
            }
            s = s.next
        }
        o = o.next
    } while (o !== t)
}

function za(t, e) {
    return t.x - e.x
}

function Ua(t, e) {
    if (e = function(t, e) {
            var i, n = e,
                r = t.x,
                a = t.y,
                o = -1 / 0;
            do {
                if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
                    var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (s <= r && s > o) {
                        if (o = s, s === r) {
                            if (a === n.y) return n;
                            if (a === n.next.y) return n.next
                        }
                        i = n.x < n.next.x ? n : n.next
                    }
                }
                n = n.next
            } while (n !== e);
            if (!i) return null;
            if (r === o) return i;
            var c, h = i,
                l = i.x,
                u = i.y,
                d = 1 / 0;
            n = i;
            do {
                r >= n.x && n.x >= l && r !== n.x && Ha(a < u ? r : o, a, l, u, a < u ? o : r, a, n.x, n.y) && (c = Math.abs(a - n.y) / (r - n.x), Ya(n, t) && (c < d || c === d && (n.x > i.x || n.x === i.x && Fa(i, n))) && (i = n, d = c)), n = n.next
            } while (n !== h);
            return i
        }(t, e)) {
        var i = Za(e, t);
        Pa(e, e.next), Pa(i, i.next)
    }
}

function Fa(t, e) {
    return Va(t.prev, t, e.prev) < 0 && Va(e.next, t, t.next) < 0
}

function Ba(t, e, i, n, r) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
}

function Ga(t) {
    var e = t,
        i = t;
    do {
        (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
    } while (e !== t);
    return i
}

function Ha(t, e, i, n, r, a, o, s) {
    return (r - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (n - s) - (i - o) * (e - s) >= 0 && (i - o) * (a - s) - (r - o) * (n - s) >= 0
}

function ka(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
        var i = t;
        do {
            if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Wa(i, i.next, t, e)) return !0;
            i = i.next
        } while (i !== t);
        return !1
    }(t, e) && (Ya(t, e) && Ya(e, t) && function(t, e) {
        var i = t,
            n = !1,
            r = (t.x + e.x) / 2,
            a = (t.y + e.y) / 2;
        do {
            i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
        } while (i !== t);
        return n
    }(t, e) && (Va(t.prev, t, e.prev) || Va(t, e.prev, e)) || ja(t, e) && Va(t.prev, t, t.next) > 0 && Va(e.prev, e, e.next) > 0)
}

function Va(t, e, i) {
    return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
}

function ja(t, e) {
    return t.x === e.x && t.y === e.y
}

function Wa(t, e, i, n) {
    var r = Xa(Va(t, e, i)),
        a = Xa(Va(t, e, n)),
        o = Xa(Va(i, n, t)),
        s = Xa(Va(i, n, e));
    return r !== a && o !== s || (!(0 !== r || !qa(t, i, e)) || (!(0 !== a || !qa(t, n, e)) || (!(0 !== o || !qa(i, t, n)) || !(0 !== s || !qa(i, e, n)))))
}

function qa(t, e, i) {
    return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y)
}

function Xa(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0
}

function Ya(t, e) {
    return Va(t.prev, t, t.next) < 0 ? Va(t, e, t.next) >= 0 && Va(t, t.prev, e) >= 0 : Va(t, e, t.prev) < 0 || Va(t, t.next, e) < 0
}

function Za(t, e) {
    var i = new Ka(t.i, t.x, t.y),
        n = new Ka(e.i, e.x, e.y),
        r = t.next,
        a = e.prev;
    return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, a.next = n, n.prev = a, n
}

function Ja(t, e, i, n) {
    var r = new Ka(t, e, i);
    return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
}

function Qa(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
}

function Ka(t, e, i) {
    this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
}
var $a = {
    area: function(t) {
        for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
        return .5 * i
    },
    isClockWise: function(t) {
        return $a.area(t) < 0
    },
    triangulateShape: function(t, e) {
        var i = [],
            n = [],
            r = [];
        to(t), eo(i, t);
        var a = t.length;
        e.forEach(to);
        for (var o = 0; o < e.length; o++) n.push(a), a += e[o].length, eo(i, e[o]);
        var s = La(i, n);
        for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
        return r
    }
};

function to(t) {
    var e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop()
}

function eo(t, e) {
    for (var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y)
}

function io(t, e) {
    Ue.call(this), this.type = "ExtrudeGeometry", this.parameters = {
        shapes: t,
        options: e
    }, this.fromBufferGeometry(new no(t, e)), this.mergeVertices()
}

function no(t, e) {
    de.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
        shapes: t,
        options: e
    }, t = Array.isArray(t) ? t : [t];
    for (var i = this, n = [], r = [], a = 0, o = t.length; a < o; a++) {
        s(t[a])
    }

    function s(t) {
        var a = [],
            o = void 0 !== e.curveSegments ? e.curveSegments : 12,
            s = void 0 !== e.steps ? e.steps : 1,
            c = void 0 !== e.depth ? e.depth : 100,
            h = void 0 === e.bevelEnabled || e.bevelEnabled,
            u = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            d = void 0 !== e.bevelSize ? e.bevelSize : u - 2,
            p = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
            f = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
            m = e.extrudePath,
            g = void 0 !== e.UVGenerator ? e.UVGenerator : ro;
        void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = e.amount);
        var v, y, x, b, w, M, S, T, E = !1;
        m && (v = m.getSpacedPoints(s), E = !0, h = !1, y = m.computeFrenetFrames(s, !1), x = new _, b = new _, w = new _), h || (f = 0, u = 0, d = 0, p = 0);
        var A = t.extractPoints(o),
            L = A.shape,
            R = A.holes;
        if (!$a.isClockWise(L))
            for (L = L.reverse(), S = 0, T = R.length; S < T; S++) M = R[S], $a.isClockWise(M) && (R[S] = M.reverse());
        var P = $a.triangulateShape(L, R),
            C = L;
        for (S = 0, T = R.length; S < T; S++) M = R[S], L = L.concat(M);

        function O(t, e, i) {
            return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t)
        }
        var I, D, N, z, U, F, B = L.length,
            G = P.length;

        function H(t, e, i) {
            var n, r, a, o = t.x - e.x,
                s = t.y - e.y,
                c = i.x - t.x,
                h = i.y - t.y,
                u = o * o + s * s,
                d = o * h - s * c;
            if (Math.abs(d) > Number.EPSILON) {
                var p = Math.sqrt(u),
                    f = Math.sqrt(c * c + h * h),
                    m = e.x - s / p,
                    g = e.y + o / p,
                    v = ((i.x - h / f - m) * h - (i.y + c / f - g) * c) / (o * h - s * c),
                    y = (n = m + o * v - t.x) * n + (r = g + s * v - t.y) * r;
                if (y <= 2) return new l(n, r);
                a = Math.sqrt(y / 2)
            } else {
                var x = !1;
                o > Number.EPSILON ? c > Number.EPSILON && (x = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (x = !0) : Math.sign(s) === Math.sign(h) && (x = !0), x ? (n = -s, r = o, a = Math.sqrt(u)) : (n = o, r = s, a = Math.sqrt(u / 2))
            }
            return new l(n / a, r / a)
        }
        for (var k = [], V = 0, j = C.length, W = j - 1, q = V + 1; V < j; V++, W++, q++) W === j && (W = 0), q === j && (q = 0), k[V] = H(C[V], C[W], C[q]);
        var X, Y, Z = [],
            J = k.concat();
        for (S = 0, T = R.length; S < T; S++) {
            for (M = R[S], X = [], V = 0, W = (j = M.length) - 1, q = V + 1; V < j; V++, W++, q++) W === j && (W = 0), q === j && (q = 0), X[V] = H(M[V], M[W], M[q]);
            Z.push(X), J = J.concat(X)
        }
        for (I = 0; I < f; I++) {
            for (N = I / f, z = u * Math.cos(N * Math.PI / 2), D = d * Math.sin(N * Math.PI / 2) + p, V = 0, j = C.length; V < j; V++) K((U = O(C[V], k[V], D)).x, U.y, -z);
            for (S = 0, T = R.length; S < T; S++)
                for (M = R[S], X = Z[S], V = 0, j = M.length; V < j; V++) K((U = O(M[V], X[V], D)).x, U.y, -z)
        }
        for (D = d + p, V = 0; V < B; V++) U = h ? O(L[V], J[V], D) : L[V], E ? (b.copy(y.normals[0]).multiplyScalar(U.x), x.copy(y.binormals[0]).multiplyScalar(U.y), w.copy(v[0]).add(b).add(x), K(w.x, w.y, w.z)) : K(U.x, U.y, 0);
        for (Y = 1; Y <= s; Y++)
            for (V = 0; V < B; V++) U = h ? O(L[V], J[V], D) : L[V], E ? (b.copy(y.normals[Y]).multiplyScalar(U.x), x.copy(y.binormals[Y]).multiplyScalar(U.y), w.copy(v[Y]).add(b).add(x), K(w.x, w.y, w.z)) : K(U.x, U.y, c / s * Y);
        for (I = f - 1; I >= 0; I--) {
            for (N = I / f, z = u * Math.cos(N * Math.PI / 2), D = d * Math.sin(N * Math.PI / 2) + p, V = 0, j = C.length; V < j; V++) K((U = O(C[V], k[V], D)).x, U.y, c + z);
            for (S = 0, T = R.length; S < T; S++)
                for (M = R[S], X = Z[S], V = 0, j = M.length; V < j; V++) U = O(M[V], X[V], D), E ? K(U.x, U.y + v[s - 1].y, v[s - 1].x + z) : K(U.x, U.y, c + z)
        }

        function Q(t, e) {
            var i, n;
            for (V = t.length; --V >= 0;) {
                i = V, (n = V - 1) < 0 && (n = t.length - 1);
                var r = 0,
                    a = s + 2 * f;
                for (r = 0; r < a; r++) {
                    var o = B * r,
                        c = B * (r + 1);
                    tt(e + i + o, e + n + o, e + n + c, e + i + c)
                }
            }
        }

        function K(t, e, i) {
            a.push(t), a.push(e), a.push(i)
        }

        function $(t, e, r) {
            et(t), et(e), et(r);
            var a = n.length / 3,
                o = g.generateTopUV(i, n, a - 3, a - 2, a - 1);
            it(o[0]), it(o[1]), it(o[2])
        }

        function tt(t, e, r, a) {
            et(t), et(e), et(a), et(e), et(r), et(a);
            var o = n.length / 3,
                s = g.generateSideWallUV(i, n, o - 6, o - 3, o - 2, o - 1);
            it(s[0]), it(s[1]), it(s[3]), it(s[1]), it(s[2]), it(s[3])
        }

        function et(t) {
            n.push(a[3 * t + 0]), n.push(a[3 * t + 1]), n.push(a[3 * t + 2])
        }

        function it(t) {
            r.push(t.x), r.push(t.y)
        }! function() {
            var t = n.length / 3;
            if (h) {
                var e = 0,
                    r = B * e;
                for (V = 0; V < G; V++) $((F = P[V])[2] + r, F[1] + r, F[0] + r);
                for (r = B * (e = s + 2 * f), V = 0; V < G; V++) $((F = P[V])[0] + r, F[1] + r, F[2] + r)
            } else {
                for (V = 0; V < G; V++) $((F = P[V])[2], F[1], F[0]);
                for (V = 0; V < G; V++) $((F = P[V])[0] + B * s, F[1] + B * s, F[2] + B * s)
            }
            i.addGroup(t, n.length / 3 - t, 0)
        }(),
        function() {
            var t = n.length / 3,
                e = 0;
            for (Q(C, e), e += C.length, S = 0, T = R.length; S < T; S++) Q(M = R[S], e), e += M.length;
            i.addGroup(t, n.length / 3 - t, 1)
        }()
    }
    this.setAttribute("position", new ee(n, 3)), this.setAttribute("uv", new ee(r, 2)), this.computeVertexNormals()
}
io.prototype = Object.create(Ue.prototype), io.prototype.constructor = io, io.prototype.toJSON = function() {
    var t = Ue.prototype.toJSON.call(this);
    return ao(this.parameters.shapes, this.parameters.options, t)
}, no.prototype = Object.create(de.prototype), no.prototype.constructor = no, no.prototype.toJSON = function() {
    var t = de.prototype.toJSON.call(this);
    return ao(this.parameters.shapes, this.parameters.options, t)
};
var ro = {
    generateTopUV: function(t, e, i, n, r) {
        var a = e[3 * i],
            o = e[3 * i + 1],
            s = e[3 * n],
            c = e[3 * n + 1],
            h = e[3 * r],
            u = e[3 * r + 1];
        return [new l(a, o), new l(s, c), new l(h, u)]
    },
    generateSideWallUV: function(t, e, i, n, r, a) {
        var o = e[3 * i],
            s = e[3 * i + 1],
            c = e[3 * i + 2],
            h = e[3 * n],
            u = e[3 * n + 1],
            d = e[3 * n + 2],
            p = e[3 * r],
            f = e[3 * r + 1],
            m = e[3 * r + 2],
            g = e[3 * a],
            v = e[3 * a + 1],
            y = e[3 * a + 2];
        return Math.abs(s - u) < .01 ? [new l(o, 1 - c), new l(h, 1 - d), new l(p, 1 - m), new l(g, 1 - y)] : [new l(s, 1 - c), new l(u, 1 - d), new l(f, 1 - m), new l(v, 1 - y)]
    }
};

function ao(t, e, i) {
    if (i.shapes = [], Array.isArray(t))
        for (var n = 0, r = t.length; n < r; n++) {
            var a = t[n];
            i.shapes.push(a.uuid)
        } else i.shapes.push(t.uuid);
    return void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()), i
}

function oo(t, e) {
    Ue.call(this), this.type = "TextGeometry", this.parameters = {
        text: t,
        parameters: e
    }, this.fromBufferGeometry(new so(t, e)), this.mergeVertices()
}

function so(t, e) {
    var i = (e = e || {}).font;
    if (!i || !i.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new Ue;
    var n = i.generateShapes(t, e.size);
    e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), no.call(this, n, e), this.type = "TextBufferGeometry"
}

function co(t, e, i, n, r, a, o) {
    Ue.call(this), this.type = "SphereGeometry", this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: i,
        phiStart: n,
        phiLength: r,
        thetaStart: a,
        thetaLength: o
    }, this.fromBufferGeometry(new ho(t, e, i, n, r, a, o)), this.mergeVertices()
}

function ho(t, e, i, n, r, a, o) {
    de.call(this), this.type = "SphereBufferGeometry", this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: i,
        phiStart: n,
        phiLength: r,
        thetaStart: a,
        thetaLength: o
    }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : Math.PI;
    var s, c, h = Math.min(a + o, Math.PI),
        l = 0,
        u = [],
        d = new _,
        p = new _,
        f = [],
        m = [],
        g = [],
        v = [];
    for (c = 0; c <= i; c++) {
        var y = [],
            x = c / i,
            b = 0;
        for (0 == c && 0 == a ? b = .5 / e : c == i && h == Math.PI && (b = -.5 / e), s = 0; s <= e; s++) {
            var w = s / e;
            d.x = -t * Math.cos(n + w * r) * Math.sin(a + x * o), d.y = t * Math.cos(a + x * o), d.z = t * Math.sin(n + w * r) * Math.sin(a + x * o), m.push(d.x, d.y, d.z), p.copy(d).normalize(), g.push(p.x, p.y, p.z), v.push(w + b, 1 - x), y.push(l++)
        }
        u.push(y)
    }
    for (c = 0; c < i; c++)
        for (s = 0; s < e; s++) {
            var M = u[c][s + 1],
                S = u[c][s],
                T = u[c + 1][s],
                E = u[c + 1][s + 1];
            (0 !== c || a > 0) && f.push(M, S, E), (c !== i - 1 || h < Math.PI) && f.push(S, T, E)
        }
    this.setIndex(f), this.setAttribute("position", new ee(m, 3)), this.setAttribute("normal", new ee(g, 3)), this.setAttribute("uv", new ee(v, 2))
}

function lo(t, e, i, n, r, a) {
    Ue.call(this), this.type = "RingGeometry", this.parameters = {
        innerRadius: t,
        outerRadius: e,
        thetaSegments: i,
        phiSegments: n,
        thetaStart: r,
        thetaLength: a
    }, this.fromBufferGeometry(new uo(t, e, i, n, r, a)), this.mergeVertices()
}

function uo(t, e, i, n, r, a) {
    de.call(this), this.type = "RingBufferGeometry", this.parameters = {
        innerRadius: t,
        outerRadius: e,
        thetaSegments: i,
        phiSegments: n,
        thetaStart: r,
        thetaLength: a
    }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8;
    var o, s, c, h = [],
        u = [],
        d = [],
        p = [],
        f = t,
        m = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1),
        g = new _,
        v = new l;
    for (s = 0; s <= n; s++) {
        for (c = 0; c <= i; c++) o = r + c / i * a, g.x = f * Math.cos(o), g.y = f * Math.sin(o), u.push(g.x, g.y, g.z), d.push(0, 0, 1), v.x = (g.x / e + 1) / 2, v.y = (g.y / e + 1) / 2, p.push(v.x, v.y);
        f += m
    }
    for (s = 0; s < n; s++) {
        var y = s * (i + 1);
        for (c = 0; c < i; c++) {
            var x = o = c + y,
                b = o + i + 1,
                w = o + i + 2,
                M = o + 1;
            h.push(x, b, M), h.push(b, w, M)
        }
    }
    this.setIndex(h), this.setAttribute("position", new ee(u, 3)), this.setAttribute("normal", new ee(d, 3)), this.setAttribute("uv", new ee(p, 2))
}

function po(t, e, i, n) {
    Ue.call(this), this.type = "LatheGeometry", this.parameters = {
        points: t,
        segments: e,
        phiStart: i,
        phiLength: n
    }, this.fromBufferGeometry(new fo(t, e, i, n)), this.mergeVertices()
}

function fo(t, e, i, n) {
    de.call(this), this.type = "LatheBufferGeometry", this.parameters = {
        points: t,
        segments: e,
        phiStart: i,
        phiLength: n
    }, e = Math.floor(e) || 12, i = i || 0, n = n || 2 * Math.PI, n = h.clamp(n, 0, 2 * Math.PI);
    var r, a, o, s = [],
        c = [],
        u = [],
        d = 1 / e,
        p = new _,
        f = new l;
    for (a = 0; a <= e; a++) {
        var m = i + a * d * n,
            g = Math.sin(m),
            v = Math.cos(m);
        for (o = 0; o <= t.length - 1; o++) p.x = t[o].x * g, p.y = t[o].y, p.z = t[o].x * v, c.push(p.x, p.y, p.z), f.x = a / e, f.y = o / (t.length - 1), u.push(f.x, f.y)
    }
    for (a = 0; a < e; a++)
        for (o = 0; o < t.length - 1; o++) {
            var y = r = o + a * t.length,
                x = r + t.length,
                b = r + t.length + 1,
                w = r + 1;
            s.push(y, x, w), s.push(x, b, w)
        }
    if (this.setIndex(s), this.setAttribute("position", new ee(c, 3)), this.setAttribute("uv", new ee(u, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
        var M = this.attributes.normal.array,
            S = new _,
            T = new _,
            E = new _;
        for (r = e * t.length * 3, a = 0, o = 0; a < t.length; a++, o += 3) S.x = M[o + 0], S.y = M[o + 1], S.z = M[o + 2], T.x = M[r + o + 0], T.y = M[r + o + 1], T.z = M[r + o + 2], E.addVectors(S, T).normalize(), M[o + 0] = M[r + o + 0] = E.x, M[o + 1] = M[r + o + 1] = E.y, M[o + 2] = M[r + o + 2] = E.z
    }
}

function mo(t, e) {
    Ue.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
        shapes: t,
        curveSegments: e
    }, this.fromBufferGeometry(new go(t, e)), this.mergeVertices()
}

function go(t, e) {
    de.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
        shapes: t,
        curveSegments: e
    }, e = e || 12;
    var i = [],
        n = [],
        r = [],
        a = [],
        o = 0,
        s = 0;
    if (!1 === Array.isArray(t)) h(t);
    else
        for (var c = 0; c < t.length; c++) h(t[c]), this.addGroup(o, s, c), o += s, s = 0;

    function h(t) {
        var o, c, h, l = n.length / 3,
            u = t.extractPoints(e),
            d = u.shape,
            p = u.holes;
        for (!1 === $a.isClockWise(d) && (d = d.reverse()), o = 0, c = p.length; o < c; o++) h = p[o], !0 === $a.isClockWise(h) && (p[o] = h.reverse());
        var f = $a.triangulateShape(d, p);
        for (o = 0, c = p.length; o < c; o++) h = p[o], d = d.concat(h);
        for (o = 0, c = d.length; o < c; o++) {
            var m = d[o];
            n.push(m.x, m.y, 0), r.push(0, 0, 1), a.push(m.x, m.y)
        }
        for (o = 0, c = f.length; o < c; o++) {
            var g = f[o],
                v = g[0] + l,
                y = g[1] + l,
                x = g[2] + l;
            i.push(v, y, x), s += 3
        }
    }
    this.setIndex(i), this.setAttribute("position", new ee(n, 3)), this.setAttribute("normal", new ee(r, 3)), this.setAttribute("uv", new ee(a, 2))
}

function vo(t, e) {
    if (e.shapes = [], Array.isArray(t))
        for (var i = 0, n = t.length; i < n; i++) {
            var r = t[i];
            e.shapes.push(r.uuid)
        } else e.shapes.push(t.uuid);
    return e
}

function yo(t, e) {
    de.call(this), this.type = "EdgesGeometry", this.parameters = {
        thresholdAngle: e
    }, e = void 0 !== e ? e : 1;
    var i, n, r, a, o = [],
        s = Math.cos(h.DEG2RAD * e),
        c = [0, 0],
        l = {},
        u = ["a", "b", "c"];
    t.isBufferGeometry ? (a = new Ue).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
    for (var d = a.vertices, p = a.faces, f = 0, m = p.length; f < m; f++)
        for (var g = p[f], v = 0; v < 3; v++) i = g[u[v]], n = g[u[(v + 1) % 3]], c[0] = Math.min(i, n), c[1] = Math.max(i, n), void 0 === l[r = c[0] + "," + c[1]] ? l[r] = {
            index1: c[0],
            index2: c[1],
            face1: f,
            face2: void 0
        } : l[r].face2 = f;
    for (r in l) {
        var y = l[r];
        if (void 0 === y.face2 || p[y.face1].normal.dot(p[y.face2].normal) <= s) {
            var x = d[y.index1];
            o.push(x.x, x.y, x.z), x = d[y.index2], o.push(x.x, x.y, x.z)
        }
    }
    this.setAttribute("position", new ee(o, 3))
}

function xo(t, e, i, n, r, a, o, s) {
    Ue.call(this), this.type = "CylinderGeometry", this.parameters = {
        radiusTop: t,
        radiusBottom: e,
        height: i,
        radialSegments: n,
        heightSegments: r,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
    }, this.fromBufferGeometry(new bo(t, e, i, n, r, a, o, s)), this.mergeVertices()
}

function bo(t, e, i, n, r, a, o, s) {
    de.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
        radiusTop: t,
        radiusBottom: e,
        height: i,
        radialSegments: n,
        heightSegments: r,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
    };
    var c = this;
    t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, i = i || 1, n = Math.floor(n) || 8, r = Math.floor(r) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
    var h = [],
        u = [],
        d = [],
        p = [],
        f = 0,
        m = [],
        g = i / 2,
        v = 0;

    function y(i) {
        var r, a, m, y = new l,
            x = new _,
            b = 0,
            w = !0 === i ? t : e,
            M = !0 === i ? 1 : -1;
        for (a = f, r = 1; r <= n; r++) u.push(0, g * M, 0), d.push(0, M, 0), p.push(.5, .5), f++;
        for (m = f, r = 0; r <= n; r++) {
            var S = r / n * s + o,
                T = Math.cos(S),
                E = Math.sin(S);
            x.x = w * E, x.y = g * M, x.z = w * T, u.push(x.x, x.y, x.z), d.push(0, M, 0), y.x = .5 * T + .5, y.y = .5 * E * M + .5, p.push(y.x, y.y), f++
        }
        for (r = 0; r < n; r++) {
            var A = a + r,
                L = m + r;
            !0 === i ? h.push(L, L + 1, A) : h.push(L + 1, L, A), b += 3
        }
        c.addGroup(v, b, !0 === i ? 1 : 2), v += b
    }! function() {
        var a, l, y = new _,
            x = new _,
            b = 0,
            w = (e - t) / i;
        for (l = 0; l <= r; l++) {
            var M = [],
                S = l / r,
                T = S * (e - t) + t;
            for (a = 0; a <= n; a++) {
                var E = a / n,
                    A = E * s + o,
                    L = Math.sin(A),
                    R = Math.cos(A);
                x.x = T * L, x.y = -S * i + g, x.z = T * R, u.push(x.x, x.y, x.z), y.set(L, w, R).normalize(), d.push(y.x, y.y, y.z), p.push(E, 1 - S), M.push(f++)
            }
            m.push(M)
        }
        for (a = 0; a < n; a++)
            for (l = 0; l < r; l++) {
                var P = m[l][a],
                    C = m[l + 1][a],
                    O = m[l + 1][a + 1],
                    I = m[l][a + 1];
                h.push(P, C, I), h.push(C, O, I), b += 6
            }
        c.addGroup(v, b, 0), v += b
    }(), !1 === a && (t > 0 && y(!0), e > 0 && y(!1)), this.setIndex(h), this.setAttribute("position", new ee(u, 3)), this.setAttribute("normal", new ee(d, 3)), this.setAttribute("uv", new ee(p, 2))
}

function _o(t, e, i, n, r, a, o) {
    xo.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = {
        radius: t,
        height: e,
        radialSegments: i,
        heightSegments: n,
        openEnded: r,
        thetaStart: a,
        thetaLength: o
    }
}

function wo(t, e, i, n, r, a, o) {
    bo.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
        radius: t,
        height: e,
        radialSegments: i,
        heightSegments: n,
        openEnded: r,
        thetaStart: a,
        thetaLength: o
    }
}

function Mo(t, e, i, n) { 
    Ue.call(this), this.type = "CircleGeometry", this.parameters = {
        radius: t,
        segments: e,
        thetaStart: i,
        thetaLength: n
    }, this.fromBufferGeometry(new So(t, e, i, n)), this.mergeVertices()
}

function So(t, e, i, n) {
    de.call(this), this.type = "CircleBufferGeometry", this.parameters = {
        radius: t,
        segments: e,
        thetaStart: i,
        thetaLength: n
    }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI;
    var r, a, o = [],
        s = [],
        c = [],
        h = [],
        u = new _,
        d = new l;
    for (s.push(0, 0, 0), c.push(0, 0, 1), h.push(.5, .5), a = 0, r = 3; a <= e; a++, r += 3) {
        var p = i + a / e * n;
        u.x = t * Math.cos(p), u.y = t * Math.sin(p), s.push(u.x, u.y, u.z), c.push(0, 0, 1), d.x = (s[r] / t + 1) / 2, d.y = (s[r + 1] / t + 1) / 2, h.push(d.x, d.y)
    }
    for (r = 1; r <= e; r++) o.push(r, r + 1, 0);
    this.setIndex(o), this.setAttribute("position", new ee(s, 3)), this.setAttribute("normal", new ee(c, 3)), this.setAttribute("uv", new ee(h, 2))
}
oo.prototype = Object.create(Ue.prototype), oo.prototype.constructor = oo, so.prototype = Object.create(no.prototype), so.prototype.constructor = so, co.prototype = Object.create(Ue.prototype), co.prototype.constructor = co, ho.prototype = Object.create(de.prototype), ho.prototype.constructor = ho, lo.prototype = Object.create(Ue.prototype), lo.prototype.constructor = lo, uo.prototype = Object.create(de.prototype), uo.prototype.constructor = uo, po.prototype = Object.create(Ue.prototype), po.prototype.constructor = po, fo.prototype = Object.create(de.prototype), fo.prototype.constructor = fo, mo.prototype = Object.create(Ue.prototype), mo.prototype.constructor = mo, mo.prototype.toJSON = function() {
    var t = Ue.prototype.toJSON.call(this);
    return vo(this.parameters.shapes, t)
}, go.prototype = Object.create(de.prototype), go.prototype.constructor = go, go.prototype.toJSON = function() {
    var t = de.prototype.toJSON.call(this);
    return vo(this.parameters.shapes, t)
}, yo.prototype = Object.create(de.prototype), yo.prototype.constructor = yo, xo.prototype = Object.create(Ue.prototype), xo.prototype.constructor = xo, bo.prototype = Object.create(de.prototype), bo.prototype.constructor = bo, _o.prototype = Object.create(xo.prototype), _o.prototype.constructor = _o, wo.prototype = Object.create(bo.prototype), wo.prototype.constructor = wo, Mo.prototype = Object.create(Ue.prototype), Mo.prototype.constructor = Mo, So.prototype = Object.create(de.prototype), So.prototype.constructor = So;
var To = Object.freeze({
    __proto__: null,
    WireframeGeometry: ha,
    ParametricGeometry: la,
    ParametricBufferGeometry: ua,
    TetrahedronGeometry: fa,
    TetrahedronBufferGeometry: ma,
    OctahedronGeometry: ga,
    OctahedronBufferGeometry: va,
    IcosahedronGeometry: ya,
    IcosahedronBufferGeometry: xa,
    DodecahedronGeometry: ba,
    DodecahedronBufferGeometry: _a,
    PolyhedronGeometry: da,
    PolyhedronBufferGeometry: pa,
    TubeGeometry: wa,
    TubeBufferGeometry: Ma,
    TorusKnotGeometry: Sa,
    TorusKnotBufferGeometry: Ta,
    TorusGeometry: Ea,
    TorusBufferGeometry: Aa,
    TextGeometry: oo,
    TextBufferGeometry: so,
    SphereGeometry: co,
    SphereBufferGeometry: ho,
    RingGeometry: lo,
    RingBufferGeometry: uo,
    PlaneGeometry: ti,
    PlaneBufferGeometry: ei,
    LatheGeometry: po,
    LatheBufferGeometry: fo,
    ShapeGeometry: mo,
    ShapeBufferGeometry: go,
    ExtrudeGeometry: io,
    ExtrudeBufferGeometry: no,
    EdgesGeometry: yo,
    ConeGeometry: _o,
    ConeBufferGeometry: wo,
    CylinderGeometry: xo,
    CylinderBufferGeometry: bo,
    CircleGeometry: Mo,
    CircleBufferGeometry: So,
    BoxGeometry: class extends Ue {
        constructor(t, e, i, n, r, a) {
            super(), this.type = "BoxGeometry", this.parameters = {
                width: t,
                height: e,
                depth: i,
                widthSegments: n,
                heightSegments: r,
                depthSegments: a
            }, this.fromBufferGeometry(new Fe(t, e, i, n, r, a)), this.mergeVertices()
        }
    },
    BoxBufferGeometry: Fe
});

function Eo(t) {
    jt.call(this), this.type = "ShadowMaterial", this.color = new Ft(0), this.transparent = !0, this.setValues(t)
}

function Ao(t) {
    ke.call(this, t), this.type = "RawShaderMaterial"
}

function Lo(t) {
    jt.call(this), this.defines = {
        STANDARD: ""
    }, this.type = "MeshStandardMaterial", this.color = new Ft(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ft(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new l(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.vertexTangents = !1, this.setValues(t)
}

function Ro(t) {
    Lo.call(this), this.defines = {
        STANDARD: "",
        PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new l(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, this.sheen = null, this.transparency = 0, this.setValues(t)
}

function Po(t) {
    jt.call(this), this.type = "MeshPhongMaterial", this.color = new Ft(16777215), this.specular = new Ft(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ft(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new l(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
}

function Co(t) {
    jt.call(this), this.defines = {
        TOON: ""
    }, this.type = "MeshToonMaterial", this.color = new Ft(16777215), this.specular = new Ft(1118481), this.shininess = 30, this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ft(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new l(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
}

function Oo(t) {
    jt.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new l(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
}

function Io(t) {
    jt.call(this), this.type = "MeshLambertMaterial", this.color = new Ft(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ft(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
}

function Do(t) {
    jt.call(this), this.defines = {
        MATCAP: ""
    }, this.type = "MeshMatcapMaterial", this.color = new Ft(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new l(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
}

function No(t) {
    Hr.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
}
Eo.prototype = Object.create(jt.prototype), Eo.prototype.constructor = Eo, Eo.prototype.isShadowMaterial = !0, Eo.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.color.copy(t.color), this
}, Ao.prototype = Object.create(ke.prototype), Ao.prototype.constructor = Ao, Ao.prototype.isRawShaderMaterial = !0, Lo.prototype = Object.create(jt.prototype), Lo.prototype.constructor = Lo, Lo.prototype.isMeshStandardMaterial = !0, Lo.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.defines = {
        STANDARD: ""
    }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.vertexTangents = t.vertexTangents, this
}, Ro.prototype = Object.create(Lo.prototype), Ro.prototype.constructor = Ro, Ro.prototype.isMeshPhysicalMaterial = !0, Ro.prototype.copy = function(t) {
    return Lo.prototype.copy.call(this, t), this.defines = {
        STANDARD: "",
        PHYSICAL: ""
    }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new Ft).copy(t.sheen) : this.sheen = null, this.transparency = t.transparency, this
}, Po.prototype = Object.create(jt.prototype), Po.prototype.constructor = Po, Po.prototype.isMeshPhongMaterial = !0, Po.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
}, Co.prototype = Object.create(jt.prototype), Co.prototype.constructor = Co, Co.prototype.isMeshToonMaterial = !0, Co.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
}, Oo.prototype = Object.create(jt.prototype), Oo.prototype.constructor = Oo, Oo.prototype.isMeshNormalMaterial = !0, Oo.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
}, Io.prototype = Object.create(jt.prototype), Io.prototype.constructor = Io, Io.prototype.isMeshLambertMaterial = !0, Io.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
}, Do.prototype = Object.create(jt.prototype), Do.prototype.constructor = Do, Do.prototype.isMeshMatcapMaterial = !0, Do.prototype.copy = function(t) {
    return jt.prototype.copy.call(this, t), this.defines = {
        MATCAP: ""
    }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
}, No.prototype = Object.create(Hr.prototype), No.prototype.constructor = No, No.prototype.isLineDashedMaterial = !0, No.prototype.copy = function(t) {
    return Hr.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
};
var zo = Object.freeze({
        __proto__: null,
        ShadowMaterial: Eo,
        SpriteMaterial: cr,
        RawShaderMaterial: Ao,
        ShaderMaterial: ke,
        PointsMaterial: Kr,
        MeshPhysicalMaterial: Ro,
        MeshStandardMaterial: Lo,
        MeshPhongMaterial: Po,
        MeshToonMaterial: Co,
        MeshNormalMaterial: Oo,
        MeshLambertMaterial: Io,
        MeshDepthMaterial: Wn,
        MeshDistanceMaterial: qn,
        MeshBasicMaterial: Wt,
        MeshMatcapMaterial: Do,
        LineDashedMaterial: No,
        LineBasicMaterial: Hr,
        Material: jt
    }),
    Uo = {
        arraySlice: function(t, e, i) {
            return Uo.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
        },
        convertArray: function(t, e, i) {
            return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
            for (var e = t.length, i = new Array(e), n = 0; n !== e; ++n) i[n] = n;
            return i.sort((function(e, i) {
                return t[e] - t[i]
            })), i
        },
        sortedArray: function(t, e, i) {
            for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
                for (var s = i[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c];
            return r
        },
        flattenJSON: function(t, e, i, n) {
            for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++];
            if (void 0 !== a) {
                var o = a[n];
                if (void 0 !== o)
                    if (Array.isArray(o))
                        do {
                            void 0 !== (o = a[n]) && (e.push(a.time), i.push.apply(i, o)), a = t[r++]
                        } while (void 0 !== a);
                    else if (void 0 !== o.toArray)
                    do {
                        void 0 !== (o = a[n]) && (e.push(a.time), o.toArray(i, i.length)), a = t[r++]
                    } while (void 0 !== a);
                else
                    do {
                        void 0 !== (o = a[n]) && (e.push(a.time), i.push(o)), a = t[r++]
                    } while (void 0 !== a)
            }
        },
        subclip: function(t, e, i, n, r) {
            r = r || 30;
            var a = t.clone();
            a.name = e;
            for (var o = [], s = 0; s < a.tracks.length; ++s) {
                for (var c = a.tracks[s], h = c.getValueSize(), l = [], u = [], d = 0; d < c.times.length; ++d) {
                    var p = c.times[d] * r;
                    if (!(p < i || p >= n)) {
                        l.push(c.times[d]);
                        for (var f = 0; f < h; ++f) u.push(c.values[d * h + f])
                    }
                }
                0 !== l.length && (c.times = Uo.convertArray(l, c.times.constructor), c.values = Uo.convertArray(u, c.values.constructor), o.push(c))
            }
            a.tracks = o;
            var m = 1 / 0;
            for (s = 0; s < a.tracks.length; ++s) m > a.tracks[s].times[0] && (m = a.tracks[s].times[0]);
            for (s = 0; s < a.tracks.length; ++s) a.tracks[s].shift(-1 * m);
            return a.resetDuration(), a
        },
        makeClipAdditive: function(t, e, i, n) {
            void 0 === e && (e = 0), void 0 === i && (i = t), (void 0 === n || n <= 0) && (n = 30);
            for (var r = t.tracks.length, a = e / n, o = 0; o < r; ++o) {
                var s = i.tracks[o],
                    c = s.ValueTypeName;
                if ("bool" !== c && "string" !== c) {
                    var h = t.tracks.find((function(t) {
                        return t.name === s.name && t.ValueTypeName === c
                    }));
                    if (void 0 !== h) {
                        var l, u = s.getValueSize(),
                            d = s.times.length - 1;
                        if (a <= s.times[0]) l = Uo.arraySlice(s.values, 0, s.valueSize);
                        else if (a >= s.times[d]) {
                            var p = d * u;
                            l = Uo.arraySlice(s.values, p)
                        } else {
                            var f = s.createInterpolant();
                            f.evaluate(a), l = f.resultBuffer
                        }
                        if ("quaternion" === c) new y(l[0], l[1], l[2], l[3]).normalize().conjugate().toArray(l);
                        for (var m = h.times.length, g = 0; g < m; ++g) {
                            var v = g * u;
                            if ("quaternion" === c) y.multiplyQuaternionsFlat(h.values, v, l, 0, h.values, v);
                            else
                                for (var x = 0; x < u; ++x) h.values[v + x] -= l[x]
                        }
                    }
                }
            }
            return t.blendMode = 2501, t
        }
    };

function Fo(t, e, i, n) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
}

function Bo(t, e, i, n) {
    Fo.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
}

function Go(t, e, i, n) {
    Fo.call(this, t, e, i, n)
}

function Ho(t, e, i, n) {
    Fo.call(this, t, e, i, n)
}

function ko(t, e, i, n) {
    if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = Uo.convertArray(e, this.TimeBufferType), this.values = Uo.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
}

function Vo(t, e, i) {
    ko.call(this, t, e, i)
}

function jo(t, e, i, n) {
    ko.call(this, t, e, i, n)
}

function Wo(t, e, i, n) {
    ko.call(this, t, e, i, n)
}

function qo(t, e, i, n) {
    Fo.call(this, t, e, i, n)
}

function Xo(t, e, i, n) {
    ko.call(this, t, e, i, n)
}

function Yo(t, e, i, n) {
    ko.call(this, t, e, i, n)
}

function Zo(t, e, i, n) {
    ko.call(this, t, e, i, n)
}

function Jo(t, e, i, n) {
    this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.blendMode = void 0 !== n ? n : 2500, this.uuid = h.generateUUID(), this.duration < 0 && this.resetDuration()
}

function Qo(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    var e = function(t) {
        switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return Wo;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return Zo;
            case "color":
                return jo;
            case "quaternion":
                return Xo;
            case "bool":
            case "boolean":
                return Vo;
            case "string":
                return Yo
        }
        throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
    }(t.type);
    if (void 0 === t.times) {
        var i = [],
            n = [];
        Uo.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
    }
    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
}
Object.assign(Fo.prototype, {
    evaluate: function(t) {
        var e = this.parameterPositions,
            i = this._cachedIndex,
            n = e[i],
            r = e[i - 1];
        t: {
            e: {
                var a;i: {
                    n: if (!(t < n)) {
                        for (var o = i + 2;;) {
                            if (void 0 === n) {
                                if (t < r) break n;
                                return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
                            }
                            if (i === o) break;
                            if (r = n, t < (n = e[++i])) break e
                        }
                        a = e.length;
                        break i
                    }if (t >= r) break t;
                    var s = e[1];t < s && (i = 2, r = s);
                    for (o = i - 2;;) {
                        if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                        if (i === o) break;
                        if (n = r, t >= (r = e[--i - 1])) break e
                    }
                    a = i,
                    i = 0
                }
                for (; i < a;) {
                    var c = i + a >>> 1;
                    t < e[c] ? a = c : i = c + 1
                }
                if (n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                if (void 0 === n) return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, r, t)
            }
            this._cachedIndex = i,
            this.intervalChanged_(i, r, n)
        }
        return this.interpolate_(i, r, t, n)
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function() {
        return this.settings || this.DefaultSettings_
    },
    copySampleValue_: function(t) {
        for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a) e[a] = i[r + a];
        return e
    },
    interpolate_: function() {
        throw new Error("call to abstract method")
    },
    intervalChanged_: function() {}
}), Object.assign(Fo.prototype, {
    beforeStart_: Fo.prototype.copySampleValue_,
    afterEnd_: Fo.prototype.copySampleValue_
}), Bo.prototype = Object.assign(Object.create(Fo.prototype), {
    constructor: Bo,
    DefaultSettings_: {
        endingStart: 2400,
        endingEnd: 2400
    },
    intervalChanged_: function(t, e, i) {
        var n = this.parameterPositions,
            r = t - 2,
            a = t + 1,
            o = n[r],
            s = n[a];
        if (void 0 === o) switch (this.getSettings_().endingStart) {
            case 2401:
                r = t, o = 2 * e - i;
                break;
            case 2402:
                o = e + n[r = n.length - 2] - n[r + 1];
                break;
            default:
                r = t, o = i
        }
        if (void 0 === s) switch (this.getSettings_().endingEnd) {
            case 2401:
                a = t, s = 2 * i - e;
                break;
            case 2402:
                a = 1, s = i + n[1] - n[0];
                break;
            default:
                a = t - 1, s = e
        }
        var c = .5 * (i - e),
            h = this.valueSize;
        this._weightPrev = c / (e - o), this._weightNext = c / (s - i), this._offsetPrev = r * h, this._offsetNext = a * h
    },
    interpolate_: function(t, e, i, n) {
        for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (i - e) / (n - e), f = p * p, m = f * p, g = -u * m + 2 * u * f - u * p, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f, b = 0; b !== o; ++b) r[b] = g * a[h + b] + v * a[c + b] + y * a[s + b] + x * a[l + b];
        return r
    }
}), Go.prototype = Object.assign(Object.create(Fo.prototype), {
    constructor: Go,
    interpolate_: function(t, e, i, n) {
        for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (i - e) / (n - e), l = 1 - h, u = 0; u !== o; ++u) r[u] = a[c + u] * l + a[s + u] * h;
        return r
    }
}), Ho.prototype = Object.assign(Object.create(Fo.prototype), {
    constructor: Ho,
    interpolate_: function(t) {
        return this.copySampleValue_(t - 1)
    }
}), Object.assign(ko, {
    toJSON: function(t) {
        var e, i = t.constructor;
        if (void 0 !== i.toJSON) e = i.toJSON(t);
        else {
            e = {
                name: t.name,
                times: Uo.convertArray(t.times, Array),
                values: Uo.convertArray(t.values, Array)
            };
            var n = t.getInterpolation();
            n !== t.DefaultInterpolation && (e.interpolation = n)
        }
        return e.type = t.ValueTypeName, e
    }
}), Object.assign(ko.prototype, {
    constructor: ko,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodDiscrete: function(t) {
        return new Ho(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodLinear: function(t) {
        return new Go(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodSmooth: function(t) {
        return new Bo(this.times, this.values, this.getValueSize(), t)
    },
    setInterpolation: function(t) {
        var e;
        switch (t) {
            case 2300:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case 2301:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case 2302:
                e = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === e) {
            var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (t === this.DefaultInterpolation) throw new Error(i);
                this.setInterpolation(this.DefaultInterpolation)
            }
            return console.warn("THREE.KeyframeTrack:", i), this
        }
        return this.createInterpolant = e, this
    },
    getInterpolation: function() {
        switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return 2300;
            case this.InterpolantFactoryMethodLinear:
                return 2301;
            case this.InterpolantFactoryMethodSmooth:
                return 2302
        }
    },
    getValueSize: function() {
        return this.values.length / this.times.length
    },
    shift: function(t) {
        if (0 !== t)
            for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
        return this
    },
    scale: function(t) {
        if (1 !== t)
            for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
        return this
    },
    trim: function(t, e) {
        for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r;
        for (; - 1 !== a && i[a] > e;) --a;
        if (++a, 0 !== r || a !== n) {
            r >= a && (r = (a = Math.max(a, 1)) - 1);
            var o = this.getValueSize();
            this.times = Uo.arraySlice(i, r, a), this.values = Uo.arraySlice(this.values, r * o, a * o)
        }
        return this
    },
    validate: function() {
        var t = !0,
            e = this.getValueSize();
        e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
        var i = this.times,
            n = this.values,
            r = i.length;
        0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
        for (var a = null, o = 0; o !== r; o++) {
            var s = i[o];
            if ("number" == typeof s && isNaN(s)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), t = !1;
                break
            }
            if (null !== a && a > s) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), t = !1;
                break
            }
            a = s
        }
        if (void 0 !== n && Uo.isTypedArray(n)) {
            o = 0;
            for (var c = n.length; o !== c; ++o) {
                var h = n[o];
                if (isNaN(h)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, h), t = !1;
                    break
                }
            }
        }
        return t
    },
    optimize: function() {
        for (var t = Uo.arraySlice(this.times), e = Uo.arraySlice(this.values), i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) {
            var s = !1,
                c = t[o];
            if (c !== t[o + 1] && (1 !== o || c !== c[0]))
                if (n) s = !0;
                else
                    for (var h = o * i, l = h - i, u = h + i, d = 0; d !== i; ++d) {
                        var p = e[h + d];
                        if (p !== e[l + d] || p !== e[u + d]) {
                            s = !0;
                            break
                        }
                    }
            if (s) {
                if (o !== r) {
                    t[r] = t[o];
                    var f = o * i,
                        m = r * i;
                    for (d = 0; d !== i; ++d) e[m + d] = e[f + d]
                }++r
            }
        }
        if (a > 0) {
            t[r] = t[a];
            for (f = a * i, m = r * i, d = 0; d !== i; ++d) e[m + d] = e[f + d];
            ++r
        }
        return r !== t.length ? (this.times = Uo.arraySlice(t, 0, r), this.values = Uo.arraySlice(e, 0, r * i)) : (this.times = t, this.values = e), this
    },
    clone: function() {
        var t = Uo.arraySlice(this.times, 0),
            e = Uo.arraySlice(this.values, 0),
            i = new(0, this.constructor)(this.name, t, e);
        return i.createInterpolant = this.createInterpolant, i
    }
}), Vo.prototype = Object.assign(Object.create(ko.prototype), {
    constructor: Vo,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
}), jo.prototype = Object.assign(Object.create(ko.prototype), {
    constructor: jo,
    ValueTypeName: "color"
}), Wo.prototype = Object.assign(Object.create(ko.prototype), {
    constructor: Wo,
    ValueTypeName: "number"
}), qo.prototype = Object.assign(Object.create(Fo.prototype), {
    constructor: qo,
    interpolate_: function(t, e, i, n) {
        for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (i - e) / (n - e), h = s + o; s !== h; s += 4) y.slerpFlat(r, 0, a, s - o, a, s, c);
        return r
    }
}), Xo.prototype = Object.assign(Object.create(ko.prototype), {
    constructor: Xo,
    ValueTypeName: "quaternion",
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodLinear: function(t) {
        return new qo(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodSmooth: void 0
}), Yo.prototype = Object.assign(Object.create(ko.prototype), {
    constructor: Yo,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
}), Zo.prototype = Object.assign(Object.create(ko.prototype), {
    constructor: Zo,
    ValueTypeName: "vector"
}), Object.assign(Jo, {
    parse: function(t) {
        for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) e.push(Qo(i[r]).scale(n));
        return new Jo(t.name, t.duration, e, t.blendMode)
    },
    toJSON: function(t) {
        for (var e = [], i = t.tracks, n = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid,
                blendMode: t.blendMode
            }, r = 0, a = i.length; r !== a; ++r) e.push(ko.toJSON(i[r]));
        return n
    },
    CreateFromMorphTargetSequence: function(t, e, i, n) {
        for (var r = e.length, a = [], o = 0; o < r; o++) {
            var s = [],
                c = [];
            s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
            var h = Uo.getKeyframeOrder(s);
            s = Uo.sortedArray(s, 1, h), c = Uo.sortedArray(c, 1, h), n || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new Wo(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / i))
        }
        return new Jo(t, -1, a)
    },
    findByName: function(t, e) {
        var i = t;
        if (!Array.isArray(t)) {
            var n = t;
            i = n.geometry && n.geometry.animations || n.animations
        }
        for (var r = 0; r < i.length; r++)
            if (i[r].name === e) return i[r];
        return null
    },
    CreateClipsFromMorphTargetSequences: function(t, e, i) {
        for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
            var s = t[a],
                c = s.name.match(r);
            if (c && c.length > 1) {
                var h = n[u = c[1]];
                h || (n[u] = h = []), h.push(s)
            }
        }
        var l = [];
        for (var u in n) l.push(Jo.CreateFromMorphTargetSequence(u, n[u], e, i));
        return l
    },
    parseAnimation: function(t, e) {
        if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
        for (var i = function(t, e, i, n, r) {
                if (0 !== i.length) {
                    var a = [],
                        o = [];
                    Uo.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new t(e, a, o))
                }
            }, n = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.blendMode, c = t.hierarchy || [], h = 0; h < c.length; h++) {
            var l = c[h].keys;
            if (l && 0 !== l.length)
                if (l[0].morphTargets) {
                    for (var u = {}, d = 0; d < l.length; d++)
                        if (l[d].morphTargets)
                            for (var p = 0; p < l[d].morphTargets.length; p++) u[l[d].morphTargets[p]] = -1;
                    for (var f in u) {
                        var m = [],
                            g = [];
                        for (p = 0; p !== l[d].morphTargets.length; ++p) {
                            var v = l[d];
                            m.push(v.time), g.push(v.morphTarget === f ? 1 : 0)
                        }
                        n.push(new Wo(".morphTargetInfluence[" + f + "]", m, g))
                    }
                    a = u.length * (o || 1)
                } else {
                    var y = ".bones[" + e[h].name + "]";
                    i(Zo, y + ".position", l, "pos", n), i(Xo, y + ".quaternion", l, "rot", n), i(Zo, y + ".scale", l, "scl", n)
                }
        }
        return 0 === n.length ? null : new Jo(r, a, n, s)
    }
}), Object.assign(Jo.prototype, {
    resetDuration: function() {
        for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
            var n = this.tracks[e];
            t = Math.max(t, n.times[n.times.length - 1])
        }
        return this.duration = t, this
    },
    trim: function() {
        for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
        return this
    },
    validate: function() {
        for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
        return t
    },
    optimize: function() {
        for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
        return this
    },
    clone: function() {
        for (var t = [], e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
        return new Jo(this.name, this.duration, t, this.blendMode)
    }
});
var Ko = {
    enabled: !1,
    files: {},
    add: function(t, e) {
        !1 !== this.enabled && (this.files[t] = e)
    },
    get: function(t) {
        if (!1 !== this.enabled) return this.files[t]
    },
    remove: function(t) {
        delete this.files[t]
    },
    clear: function() {
        this.files = {}
    }
};

function $o(t, e, i) {
    var n = this,
        r = !1,
        a = 0,
        o = 0,
        s = void 0,
        c = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
        o++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, o), r = !0
    }, this.itemEnd = function(t) {
        a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad && n.onLoad())
    }, this.itemError = function(t) {
        void 0 !== n.onError && n.onError(t)
    }, this.resolveURL = function(t) {
        return s ? s(t) : t
    }, this.setURLModifier = function(t) {
        return s = t, this
    }, this.addHandler = function(t, e) {
        return c.push(t, e), this
    }, this.removeHandler = function(t) {
        var e = c.indexOf(t);
        return -1 !== e && c.splice(e, 2), this
    }, this.getHandler = function(t) {
        for (var e = 0, i = c.length; e < i; e += 2) {
            var n = c[e],
                r = c[e + 1];
            if (n.global && (n.lastIndex = 0), n.test(t)) return r
        }
        return null
    }
}
var ts = new $o;

function es(t) {
    this.manager = void 0 !== t ? t : ts, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = ""
}
Object.assign(es.prototype, {
    load: function() {},
    loadAsync: function(t, e) {
        var i = this;
        return new Promise((function(n, r) {
            i.load(t, n, e, r)
        }))
    },
    parse: function() {},
    setCrossOrigin: function(t) {
        return this.crossOrigin = t, this
    },
    setPath: function(t) {
        return this.path = t, this
    },
    setResourcePath: function(t) {
        return this.resourcePath = t, this
    }
});
var is = {};

function ns(t) {
    es.call(this, t)
}

function rs(t) {
    es.call(this, t)
}

function as(t) {
    es.call(this, t)
}

function os(t) {
    es.call(this, t)
}

function ss(t) {
    es.call(this, t)
}

function cs(t) {
    es.call(this, t)
}

function hs(t) {
    es.call(this, t)
}

function ls() {
    this.type = "Curve", this.arcLengthDivisions = 200
}

function us(t, e, i, n, r, a, o, s) {
    ls.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
}

function ds(t, e, i, n, r, a) {
    us.call(this, t, e, i, i, n, r, a), this.type = "ArcCurve"
}

function ps() {
    var t = 0,
        e = 0,
        i = 0,
        n = 0;

    function r(r, a, o, s) {
        t = r, e = o, i = -3 * r + 3 * a - 2 * o - s, n = 2 * r - 2 * a + o + s
    }
    return {
        initCatmullRom: function(t, e, i, n, a) {
            r(e, i, a * (i - t), a * (n - e))
        },
        initNonuniformCatmullRom: function(t, e, i, n, a, o, s) {
            var c = (e - t) / a - (i - t) / (a + o) + (i - e) / o,
                h = (i - e) / o - (n - e) / (o + s) + (n - i) / s;
            r(e, i, c *= o, h *= o)
        },
        calc: function(r) {
            var a = r * r;
            return t + e * r + i * a + n * (a * r)
        }
    }
}
ns.prototype = Object.assign(Object.create(es.prototype), {
    constructor: ns,
    load: function(t, e, i, n) {
        void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        var r = this,
            a = Ko.get(t);
        if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
            e && e(a), r.manager.itemEnd(t)
        }), 0), a;
        if (void 0 === is[t]) {
            var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
            if (o) {
                var s = o[1],
                    c = !!o[2],
                    h = o[3];
                h = decodeURIComponent(h), c && (h = atob(h));
                try {
                    var l, u = (this.responseType || "").toLowerCase();
                    switch (u) {
                        case "arraybuffer":
                        case "blob":
                            for (var d = new Uint8Array(h.length), p = 0; p < h.length; p++) d[p] = h.charCodeAt(p);
                            l = "blob" === u ? new Blob([d.buffer], {
                                type: s
                            }) : d.buffer;
                            break;
                        case "document":
                            var f = new DOMParser;
                            l = f.parseFromString(h, s);
                            break;
                        case "json":
                            l = JSON.parse(h);
                            break;
                        default:
                            l = h
                    }
                    setTimeout((function() {
                        e && e(l), r.manager.itemEnd(t)
                    }), 0)
                } catch (e) {
                    setTimeout((function() {
                        n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
                    }), 0)
                }
            } else {
                is[t] = [], is[t].push({
                    onLoad: e,
                    onProgress: i,
                    onError: n
                });
                var m = new XMLHttpRequest;
                for (var g in m.open("GET", t, !0), m.addEventListener("load", (function(e) {
                        var i = this.response,
                            n = is[t];
                        if (delete is[t], 200 === this.status || 0 === this.status) {
                            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), Ko.add(t, i);
                            for (var a = 0, o = n.length; a < o; a++) {
                                (s = n[a]).onLoad && s.onLoad(i)
                            }
                            r.manager.itemEnd(t)
                        } else {
                            for (a = 0, o = n.length; a < o; a++) {
                                var s;
                                (s = n[a]).onError && s.onError(e)
                            }
                            r.manager.itemError(t), r.manager.itemEnd(t)
                        }
                    }), !1), m.addEventListener("progress", (function(e) {
                        for (var i = is[t], n = 0, r = i.length; n < r; n++) {
                            var a = i[n];
                            a.onProgress && a.onProgress(e)
                        }
                    }), !1), m.addEventListener("error", (function(e) {
                        var i = is[t];
                        delete is[t];
                        for (var n = 0, a = i.length; n < a; n++) {
                            var o = i[n];
                            o.onError && o.onError(e)
                        }
                        r.manager.itemError(t), r.manager.itemEnd(t)
                    }), !1), m.addEventListener("abort", (function(e) {
                        var i = is[t];
                        delete is[t];
                        for (var n = 0, a = i.length; n < a; n++) {
                            var o = i[n];
                            o.onError && o.onError(e)
                        }
                        r.manager.itemError(t), r.manager.itemEnd(t)
                    }), !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(g, this.requestHeader[g]);
                m.send(null)
            }
            return r.manager.itemStart(t), m
        }
        is[t].push({
            onLoad: e,
            onProgress: i,
            onError: n
        })
    },
    setResponseType: function(t) {
        return this.responseType = t, this
    },
    setWithCredentials: function(t) {
        return this.withCredentials = t, this
    },
    setMimeType: function(t) {
        return this.mimeType = t, this
    },
    setRequestHeader: function(t) {
        return this.requestHeader = t, this
    }
}), rs.prototype = Object.assign(Object.create(es.prototype), {
    constructor: rs,
    load: function(t, e, i, n) {
        var r = this,
            a = new ns(r.manager);
        a.setPath(r.path), a.load(t, (function(t) {
            e(r.parse(JSON.parse(t)))
        }), i, n)
    },
    parse: function(t) {
        for (var e = [], i = 0; i < t.length; i++) {
            var n = Jo.parse(t[i]);
            e.push(n)
        }
        return e
    }
}), as.prototype = Object.assign(Object.create(es.prototype), {
    constructor: as,
    load: function(t, e, i, n) {
        var r = this,
            a = [],
            o = new oa;
        o.image = a;
        var s = new ns(this.manager);

        function c(c) {
            s.load(t[c], (function(t) {
                var i = r.parse(t, !0);
                a[c] = {
                    width: i.width,
                    height: i.height,
                    format: i.format,
                    mipmaps: i.mipmaps
                }, 6 === (h += 1) && (1 === i.mipmapCount && (o.minFilter = 1006), o.format = i.format, o.needsUpdate = !0, e && e(o))
            }), i, n)
        }
        if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
            for (var h = 0, l = 0, u = t.length; l < u; ++l) c(l);
        else s.load(t, (function(t) {
            var i = r.parse(t, !0);
            if (i.isCubemap)
                for (var n = i.mipmaps.length / i.mipmapCount, s = 0; s < n; s++) {
                    a[s] = {
                        mipmaps: []
                    };
                    for (var c = 0; c < i.mipmapCount; c++) a[s].mipmaps.push(i.mipmaps[s * i.mipmapCount + c]), a[s].format = i.format, a[s].width = i.width, a[s].height = i.height
                } else o.image.width = i.width, o.image.height = i.height, o.mipmaps = i.mipmaps;
            1 === i.mipmapCount && (o.minFilter = 1006), o.format = i.format, o.needsUpdate = !0, e && e(o)
        }), i, n);
        return o
    }
}), os.prototype = Object.assign(Object.create(es.prototype), {
    constructor: os,
    load: function(t, e, i, n) {
        var r = this,
            a = new Xe,
            o = new ns(this.manager);
        return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(t, (function(t) {
            var i = r.parse(t);
            i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width, a.image.height = i.height, a.image.data = i.data), a.wrapS = void 0 !== i.wrapS ? i.wrapS : 1001, a.wrapT = void 0 !== i.wrapT ? i.wrapT : 1001, a.magFilter = void 0 !== i.magFilter ? i.magFilter : 1006, a.minFilter = void 0 !== i.minFilter ? i.minFilter : 1006, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps, a.minFilter = 1008), 1 === i.mipmapCount && (a.minFilter = 1006), a.needsUpdate = !0, e && e(a, i))
        }), i, n), a
    }
}), ss.prototype = Object.assign(Object.create(es.prototype), {
    constructor: ss,
    load: function(t, e, i, n) {
        void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        var r = this,
            a = Ko.get(t);
        if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
            e && e(a), r.manager.itemEnd(t)
        }), 0), a;
        var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

        function s() {
            o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), Ko.add(t, this), e && e(this), r.manager.itemEnd(t)
        }

        function c(e) {
            o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
        }
        return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o
    }
}), cs.prototype = Object.assign(Object.create(es.prototype), {
    constructor: cs,
    load: function(t, e, i, n) {
        var r = new mi,
            a = new ss(this.manager);
        a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
        var o = 0;

        function s(i) {
            a.load(t[i], (function(t) {
                r.images[i] = t, 6 === ++o && (r.needsUpdate = !0, e && e(r))
            }), void 0, n)
        }
        for (var c = 0; c < t.length; ++c) s(c);
        return r
    }
}), hs.prototype = Object.assign(Object.create(es.prototype), {
    constructor: hs,
    load: function(t, e, i, n) {
        var r = new f,
            a = new ss(this.manager);
        return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, (function(i) {
            r.image = i;
            var n = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
            r.format = n ? 1022 : 1023, r.needsUpdate = !0, void 0 !== e && e(r)
        }), i, n), r
    }
}), Object.assign(ls.prototype, {
    getPoint: function() {
        return console.warn("THREE.Curve: .getPoint() not implemented."), null
    },
    getPointAt: function(t, e) {
        var i = this.getUtoTmapping(t);
        return this.getPoint(i, e)
    },
    getPoints: function(t) {
        void 0 === t && (t = 5);
        for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
        return e
    },
    getSpacedPoints: function(t) {
        void 0 === t && (t = 5);
        for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
        return e
    },
    getLength: function() {
        var t = this.getLengths();
        return t[t.length - 1]
    },
    getLengths: function(t) {
        if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        var e, i, n = [],
            r = this.getPoint(0),
            a = 0;
        for (n.push(0), i = 1; i <= t; i++) a += (e = this.getPoint(i / t)).distanceTo(r), n.push(a), r = e;
        return this.cacheArcLengths = n, n
    },
    updateArcLengths: function() {
        this.needsUpdate = !0, this.getLengths()
    },
    getUtoTmapping: function(t, e) {
        var i, n = this.getLengths(),
            r = 0,
            a = n.length;
        i = e || t * n[a - 1];
        for (var o, s = 0, c = a - 1; s <= c;)
            if ((o = n[r = Math.floor(s + (c - s) / 2)] - i) < 0) s = r + 1;
            else {
                if (!(o > 0)) {
                    c = r;
                    break
                }
                c = r - 1
            }
        if (n[r = c] === i) return r / (a - 1);
        var h = n[r];
        return (r + (i - h) / (n[r + 1] - h)) / (a - 1)
    },
    getTangent: function(t, e) {
        var i = t - 1e-4,
            n = t + 1e-4;
        i < 0 && (i = 0), n > 1 && (n = 1);
        var r = this.getPoint(i),
            a = this.getPoint(n),
            o = e || (r.isVector2 ? new l : new _);
        return o.copy(a).sub(r).normalize(), o
    },
    getTangentAt: function(t, e) {
        var i = this.getUtoTmapping(t);
        return this.getTangent(i, e)
    },
    computeFrenetFrames: function(t, e) {
        var i, n, r, a = new _,
            o = [],
            s = [],
            c = [],
            l = new _,
            u = new R;
        for (i = 0; i <= t; i++) n = i / t, o[i] = this.getTangentAt(n, new _), o[i].normalize();
        s[0] = new _, c[0] = new _;
        var d = Number.MAX_VALUE,
            p = Math.abs(o[0].x),
            f = Math.abs(o[0].y),
            m = Math.abs(o[0].z);
        for (p <= d && (d = p, a.set(1, 0, 0)), f <= d && (d = f, a.set(0, 1, 0)), m <= d && a.set(0, 0, 1), l.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], l), c[0].crossVectors(o[0], s[0]), i = 1; i <= t; i++) s[i] = s[i - 1].clone(), c[i] = c[i - 1].clone(), l.crossVectors(o[i - 1], o[i]), l.length() > Number.EPSILON && (l.normalize(), r = Math.acos(h.clamp(o[i - 1].dot(o[i]), -1, 1)), s[i].applyMatrix4(u.makeRotationAxis(l, r))), c[i].crossVectors(o[i], s[i]);
        if (!0 === e)
            for (r = Math.acos(h.clamp(s[0].dot(s[t]), -1, 1)), r /= t, o[0].dot(l.crossVectors(s[0], s[t])) > 0 && (r = -r), i = 1; i <= t; i++) s[i].applyMatrix4(u.makeRotationAxis(o[i], r * i)), c[i].crossVectors(o[i], s[i]);
        return {
            tangents: o,
            normals: s,
            binormals: c
        }
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions, this
    },
    toJSON: function() {
        var t = {
            metadata: {
                version: 4.5,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
    },
    fromJSON: function(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions, this
    }
}), us.prototype = Object.create(ls.prototype), us.prototype.constructor = us, us.prototype.isEllipseCurve = !0, us.prototype.getPoint = function(t, e) {
    for (var i = e || new l, n = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += n;
    for (; r > n;) r -= n;
    r < Number.EPSILON && (r = a ? 0 : n), !0 !== this.aClockwise || a || (r === n ? r = -n : r -= n);
    var o = this.aStartAngle + t * r,
        s = this.aX + this.xRadius * Math.cos(o),
        c = this.aY + this.yRadius * Math.sin(o);
    if (0 !== this.aRotation) {
        var h = Math.cos(this.aRotation),
            u = Math.sin(this.aRotation),
            d = s - this.aX,
            p = c - this.aY;
        s = d * h - p * u + this.aX, c = d * u + p * h + this.aY
    }
    return i.set(s, c)
}, us.prototype.copy = function(t) {
    return ls.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
}, us.prototype.toJSON = function() {
    var t = ls.prototype.toJSON.call(this);
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
}, us.prototype.fromJSON = function(t) {
    return ls.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
}, ds.prototype = Object.create(us.prototype), ds.prototype.constructor = ds, ds.prototype.isArcCurve = !0;
var fs = new _,
    ms = new ps,
    gs = new ps,
    vs = new ps;

function ys(t, e, i, n) {
    ls.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = i || "centripetal", this.tension = n || .5
}

function xs(t, e, i, n, r) {
    var a = .5 * (n - e),
        o = .5 * (r - i),
        s = t * t;
    return (2 * i - 2 * n + a + o) * (t * s) + (-3 * i + 3 * n - 2 * a - o) * s + a * t + i
}

function bs(t, e, i, n) {
    return function(t, e) {
        var i = 1 - t;
        return i * i * e
    }(t, e) + function(t, e) {
        return 2 * (1 - t) * t * e
    }(t, i) + function(t, e) {
        return t * t * e
    }(t, n)
}

function _s(t, e, i, n, r) {
    return function(t, e) {
        var i = 1 - t;
        return i * i * i * e
    }(t, e) + function(t, e) {
        var i = 1 - t;
        return 3 * i * i * t * e
    }(t, i) + function(t, e) {
        return 3 * (1 - t) * t * t * e
    }(t, n) + function(t, e) {
        return t * t * t * e
    }(t, r)
}

function ws(t, e, i, n) {
    ls.call(this), this.type = "CubicBezierCurve", this.v0 = t || new l, this.v1 = e || new l, this.v2 = i || new l, this.v3 = n || new l
}

function Ms(t, e, i, n) {
    ls.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new _, this.v1 = e || new _, this.v2 = i || new _, this.v3 = n || new _
}

function Ss(t, e) {
    ls.call(this), this.type = "LineCurve", this.v1 = t || new l, this.v2 = e || new l
}

function Ts(t, e) {
    ls.call(this), this.type = "LineCurve3", this.v1 = t || new _, this.v2 = e || new _
}

function Es(t, e, i) {
    ls.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new l, this.v1 = e || new l, this.v2 = i || new l
}

function As(t, e, i) {
    ls.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new _, this.v1 = e || new _, this.v2 = i || new _
}

function Ls(t) {
    ls.call(this), this.type = "SplineCurve", this.points = t || []
}
ys.prototype = Object.create(ls.prototype), ys.prototype.constructor = ys, ys.prototype.isCatmullRomCurve3 = !0, ys.prototype.getPoint = function(t, e) {
    var i, n, r, a, o = e || new _,
        s = this.points,
        c = s.length,
        h = (c - (this.closed ? 0 : 1)) * t,
        l = Math.floor(h),
        u = h - l;
    if (this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / c) + 1) * c : 0 === u && l === c - 1 && (l = c - 2, u = 1), this.closed || l > 0 ? i = s[(l - 1) % c] : (fs.subVectors(s[0], s[1]).add(s[0]), i = fs), n = s[l % c], r = s[(l + 1) % c], this.closed || l + 2 < c ? a = s[(l + 2) % c] : (fs.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), a = fs), "centripetal" === this.curveType || "chordal" === this.curveType) {
        var d = "chordal" === this.curveType ? .5 : .25,
            p = Math.pow(i.distanceToSquared(n), d),
            f = Math.pow(n.distanceToSquared(r), d),
            m = Math.pow(r.distanceToSquared(a), d);
        f < 1e-4 && (f = 1), p < 1e-4 && (p = f), m < 1e-4 && (m = f), ms.initNonuniformCatmullRom(i.x, n.x, r.x, a.x, p, f, m), gs.initNonuniformCatmullRom(i.y, n.y, r.y, a.y, p, f, m), vs.initNonuniformCatmullRom(i.z, n.z, r.z, a.z, p, f, m)
    } else "catmullrom" === this.curveType && (ms.initCatmullRom(i.x, n.x, r.x, a.x, this.tension), gs.initCatmullRom(i.y, n.y, r.y, a.y, this.tension), vs.initCatmullRom(i.z, n.z, r.z, a.z, this.tension));
    return o.set(ms.calc(u), gs.calc(u), vs.calc(u)), o
}, ys.prototype.copy = function(t) {
    ls.prototype.copy.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; e < i; e++) {
        var n = t.points[e];
        this.points.push(n.clone())
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
}, ys.prototype.toJSON = function() {
    var t = ls.prototype.toJSON.call(this);
    t.points = [];
    for (var e = 0, i = this.points.length; e < i; e++) {
        var n = this.points[e];
        t.points.push(n.toArray())
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
}, ys.prototype.fromJSON = function(t) {
    ls.prototype.fromJSON.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; e < i; e++) {
        var n = t.points[e];
        this.points.push((new _).fromArray(n))
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
}, ws.prototype = Object.create(ls.prototype), ws.prototype.constructor = ws, ws.prototype.isCubicBezierCurve = !0, ws.prototype.getPoint = function(t, e) {
    var i = e || new l,
        n = this.v0,
        r = this.v1,
        a = this.v2,
        o = this.v3;
    return i.set(_s(t, n.x, r.x, a.x, o.x), _s(t, n.y, r.y, a.y, o.y)), i
}, ws.prototype.copy = function(t) {
    return ls.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
}, ws.prototype.toJSON = function() {
    var t = ls.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
}, ws.prototype.fromJSON = function(t) {
    return ls.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
}, Ms.prototype = Object.create(ls.prototype), Ms.prototype.constructor = Ms, Ms.prototype.isCubicBezierCurve3 = !0, Ms.prototype.getPoint = function(t, e) {
    var i = e || new _,
        n = this.v0,
        r = this.v1,
        a = this.v2,
        o = this.v3;
    return i.set(_s(t, n.x, r.x, a.x, o.x), _s(t, n.y, r.y, a.y, o.y), _s(t, n.z, r.z, a.z, o.z)), i
}, Ms.prototype.copy = function(t) {
    return ls.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
}, Ms.prototype.toJSON = function() {
    var t = ls.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
}, Ms.prototype.fromJSON = function(t) {
    return ls.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
}, Ss.prototype = Object.create(ls.prototype), Ss.prototype.constructor = Ss, Ss.prototype.isLineCurve = !0, Ss.prototype.getPoint = function(t, e) {
    var i = e || new l;
    return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
}, Ss.prototype.getPointAt = function(t, e) {
    return this.getPoint(t, e)
}, Ss.prototype.getTangent = function(t, e) {
    return (e || new l).copy(this.v2).sub(this.v1).normalize()
}, Ss.prototype.copy = function(t) {
    return ls.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
}, Ss.prototype.toJSON = function() {
    var t = ls.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
}, Ss.prototype.fromJSON = function(t) {
    return ls.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
}, Ts.prototype = Object.create(ls.prototype), Ts.prototype.constructor = Ts, Ts.prototype.isLineCurve3 = !0, Ts.prototype.getPoint = function(t, e) {
    var i = e || new _;
    return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
}, Ts.prototype.getPointAt = function(t, e) {
    return this.getPoint(t, e)
}, Ts.prototype.copy = function(t) {
    return ls.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
}, Ts.prototype.toJSON = function() {
    var t = ls.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
}, Ts.prototype.fromJSON = function(t) {
    return ls.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
}, Es.prototype = Object.create(ls.prototype), Es.prototype.constructor = Es, Es.prototype.isQuadraticBezierCurve = !0, Es.prototype.getPoint = function(t, e) {
    var i = e || new l,
        n = this.v0,
        r = this.v1,
        a = this.v2;
    return i.set(bs(t, n.x, r.x, a.x), bs(t, n.y, r.y, a.y)), i
}, Es.prototype.copy = function(t) {
    return ls.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
}, Es.prototype.toJSON = function() {
    var t = ls.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
}, Es.prototype.fromJSON = function(t) {
    return ls.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
}, As.prototype = Object.create(ls.prototype), As.prototype.constructor = As, As.prototype.isQuadraticBezierCurve3 = !0, As.prototype.getPoint = function(t, e) {
    var i = e || new _,
        n = this.v0,
        r = this.v1,
        a = this.v2;
    return i.set(bs(t, n.x, r.x, a.x), bs(t, n.y, r.y, a.y), bs(t, n.z, r.z, a.z)), i
}, As.prototype.copy = function(t) {
    return ls.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
}, As.prototype.toJSON = function() {
    var t = ls.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
}, As.prototype.fromJSON = function(t) {
    return ls.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
}, Ls.prototype = Object.create(ls.prototype), Ls.prototype.constructor = Ls, Ls.prototype.isSplineCurve = !0, Ls.prototype.getPoint = function(t, e) {
    var i = e || new l,
        n = this.points,
        r = (n.length - 1) * t,
        a = Math.floor(r),
        o = r - a,
        s = n[0 === a ? a : a - 1],
        c = n[a],
        h = n[a > n.length - 2 ? n.length - 1 : a + 1],
        u = n[a > n.length - 3 ? n.length - 1 : a + 2];
    return i.set(xs(o, s.x, c.x, h.x, u.x), xs(o, s.y, c.y, h.y, u.y)), i
}, Ls.prototype.copy = function(t) {
    ls.prototype.copy.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; e < i; e++) {
        var n = t.points[e];
        this.points.push(n.clone())
    }
    return this
}, Ls.prototype.toJSON = function() {
    var t = ls.prototype.toJSON.call(this);
    t.points = [];
    for (var e = 0, i = this.points.length; e < i; e++) {
        var n = this.points[e];
        t.points.push(n.toArray())
    }
    return t
}, Ls.prototype.fromJSON = function(t) {
    ls.prototype.fromJSON.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; e < i; e++) {
        var n = t.points[e];
        this.points.push((new l).fromArray(n))
    }
    return this
};
var Rs = Object.freeze({
    __proto__: null,
    ArcCurve: ds,
    CatmullRomCurve3: ys,
    CubicBezierCurve: ws,
    CubicBezierCurve3: Ms,
    EllipseCurve: us,
    LineCurve: Ss,
    LineCurve3: Ts,
    QuadraticBezierCurve: Es,
    QuadraticBezierCurve3: As,
    SplineCurve: Ls
});

function Ps() {
    ls.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
}

function Cs(t) {
    Ps.call(this), this.type = "Path", this.currentPoint = new l, t && this.setFromPoints(t)
}

function Os(t) {
    Cs.call(this, t), this.uuid = h.generateUUID(), this.type = "Shape", this.holes = []
}

function Is(t, e) {
    X.call(this), this.type = "Light", this.color = new Ft("#00000000"), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
}

function Ds(t, e, i) {
    Is.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(X.DefaultUp), this.updateMatrix(), this.groundColor = new Ft(e)
}

function Ns(t) {
    this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new l(512, 512), this.map = null, this.mapPass = null, this.matrix = new R, this._frustum = new Je, this._frameExtents = new l(1, 1), this._viewportCount = 1, this._viewports = [new m(0, 0, 1, 1)]
}

function zs() {
    Ns.call(this, new je(50, 1, .5, 500))
}

function Us(t, e, i, n, r, a) {
    Is.call(this, t, e), this.type = "SpotLight", this.position.copy(X.DefaultUp), this.updateMatrix(), this.target = new X, Object.defineProperty(this, "power", {
        get: function() {
            return this.intensity * Math.PI
        },
        set: function(t) {
            this.intensity = t / Math.PI
        }
    }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new zs
}

function Fs() {
    Ns.call(this, new je(90, 1, .5, 500)), this._frameExtents = new l(4, 2), this._viewportCount = 6, this._viewports = [new m(2, 1, 1, 1), new m(0, 1, 1, 1), new m(3, 1, 1, 1), new m(1, 1, 1, 1), new m(3, 0, 1, 1), new m(1, 0, 1, 1)], this._cubeDirections = [new _(1, 0, 0), new _(-1, 0, 0), new _(0, 0, 1), new _(0, 0, -1), new _(0, 1, 0), new _(0, -1, 0)], this._cubeUps = [new _(0, 1, 0), new _(0, 1, 0), new _(0, 1, 0), new _(0, 1, 0), new _(0, 0, 1), new _(0, 0, -1)]
}

function Bs(t, e, i, n) {
    Is.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
        get: function() {
            return 4 * this.intensity * Math.PI
        },
        set: function(t) {
            this.intensity = t / (4 * Math.PI)
        }
    }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new Fs
}

function Gs(t, e, i, n, r, a) {
    Ve.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== t ? t : -1, this.right = void 0 !== e ? e : 1, this.top = void 0 !== i ? i : 1, this.bottom = void 0 !== n ? n : -1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
}

function Hs() {
    Ns.call(this, new Gs(-5, 5, 5, -5, .5, 500))
}

function ks(t, e) {
    Is.call(this, t, e), this.type = "DirectionalLight", this.position.copy(X.DefaultUp), this.updateMatrix(), this.target = new X, this.shadow = new Hs
}

function Vs(t, e) {
    Is.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
}

function js(t, e, i, n) {
    Is.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
}

function Ws() {
    this.coefficients = [];
    for (var t = 0; t < 9; t++) this.coefficients.push(new _)
}

function qs(t, e) {
    Is.call(this, void 0, e), this.type = "LightProbe", this.sh = void 0 !== t ? t : new Ws
}

function Xs(t) {
    es.call(this, t), this.textures = {}
}
Ps.prototype = Object.assign(Object.create(ls.prototype), {
    constructor: Ps,
    add: function(t) {
        this.curves.push(t)
    },
    closePath: function() {
        var t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
        t.equals(e) || this.curves.push(new Ss(e, t))
    },
    getPoint: function(t) {
        for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
            if (i[n] >= e) {
                var r = i[n] - e,
                    a = this.curves[n],
                    o = a.getLength(),
                    s = 0 === o ? 0 : 1 - r / o;
                return a.getPointAt(s)
            }
            n++
        }
        return null
    },
    getLength: function() {
        var t = this.getCurveLengths();
        return t[t.length - 1]
    },
    updateArcLengths: function() {
        this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
    },
    getCurveLengths: function() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
        return this.cacheLengths = t, t
    },
    getSpacedPoints: function(t) {
        void 0 === t && (t = 40);
        for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
        return this.autoClose && e.push(e[0]), e
    },
    getPoints: function(t) {
        t = t || 12;
        for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
            for (var a = r[n], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
                var h = s[c];
                e && e.equals(h) || (i.push(h), e = h)
            }
        return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
    },
    copy: function(t) {
        ls.prototype.copy.call(this, t), this.curves = [];
        for (var e = 0, i = t.curves.length; e < i; e++) {
            var n = t.curves[e];
            this.curves.push(n.clone())
        }
        return this.autoClose = t.autoClose, this
    },
    toJSON: function() {
        var t = ls.prototype.toJSON.call(this);
        t.autoClose = this.autoClose, t.curves = [];
        for (var e = 0, i = this.curves.length; e < i; e++) {
            var n = this.curves[e];
            t.curves.push(n.toJSON())
        }
        return t
    },
    fromJSON: function(t) {
        ls.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
        for (var e = 0, i = t.curves.length; e < i; e++) {
            var n = t.curves[e];
            this.curves.push((new Rs[n.type]).fromJSON(n))
        }
        return this
    }
}), Cs.prototype = Object.assign(Object.create(Ps.prototype), {
    constructor: Cs,
    setFromPoints: function(t) {
        this.moveTo(t[0].x, t[0].y);
        for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y);
        return this
    },
    moveTo: function(t, e) {
        return this.currentPoint.set(t, e), this
    },
    lineTo: function(t, e) {
        var i = new Ss(this.currentPoint.clone(), new l(t, e));
        return this.curves.push(i), this.currentPoint.set(t, e), this
    },
    quadraticCurveTo: function(t, e, i, n) {
        var r = new Es(this.currentPoint.clone(), new l(t, e), new l(i, n));
        return this.curves.push(r), this.currentPoint.set(i, n), this
    },
    bezierCurveTo: function(t, e, i, n, r, a) {
        var o = new ws(this.currentPoint.clone(), new l(t, e), new l(i, n), new l(r, a));
        return this.curves.push(o), this.currentPoint.set(r, a), this
    },
    splineThru: function(t) {
        var e = new Ls([this.currentPoint.clone()].concat(t));
        return this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this
    },
    arc: function(t, e, i, n, r, a) {
        var o = this.currentPoint.x,
            s = this.currentPoint.y;
        return this.absarc(t + o, e + s, i, n, r, a), this
    },
    absarc: function(t, e, i, n, r, a) {
        return this.absellipse(t, e, i, i, n, r, a), this
    },
    ellipse: function(t, e, i, n, r, a, o, s) {
        var c = this.currentPoint.x,
            h = this.currentPoint.y;
        return this.absellipse(t + c, e + h, i, n, r, a, o, s), this
    },
    absellipse: function(t, e, i, n, r, a, o, s) {
        var c = new us(t, e, i, n, r, a, o, s);
        if (this.curves.length > 0) {
            var h = c.getPoint(0);
            h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
        }
        this.curves.push(c);
        var l = c.getPoint(1);
        return this.currentPoint.copy(l), this
    },
    copy: function(t) {
        return Ps.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
    },
    toJSON: function() {
        var t = Ps.prototype.toJSON.call(this);
        return t.currentPoint = this.currentPoint.toArray(), t
    },
    fromJSON: function(t) {
        return Ps.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
    }
}), Os.prototype = Object.assign(Object.create(Cs.prototype), {
    constructor: Os,
    getPointsHoles: function(t) {
        for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
        return e
    },
    extractPoints: function(t) {
        return {
            shape: this.getPoints(t),
            holes: this.getPointsHoles(t)
        }
    },
    copy: function(t) {
        Cs.prototype.copy.call(this, t), this.holes = [];
        for (var e = 0, i = t.holes.length; e < i; e++) {
            var n = t.holes[e];
            this.holes.push(n.clone())
        }
        return this
    },
    toJSON: function() {
        var t = Cs.prototype.toJSON.call(this);
        t.uuid = this.uuid, t.holes = [];
        for (var e = 0, i = this.holes.length; e < i; e++) {
            var n = this.holes[e];
            t.holes.push(n.toJSON())
        }
        return t
    },
    fromJSON: function(t) {
        Cs.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
        for (var e = 0, i = t.holes.length; e < i; e++) {
            var n = t.holes[e];
            this.holes.push((new Cs).fromJSON(n))
        }
        return this
    }
}), Is.prototype = Object.assign(Object.create(X.prototype), {
    constructor: Is,
    isLight: !0,
    copy: function(t) {
        return X.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
    },
    toJSON: function(t) {
        var e = X.prototype.toJSON.call(this, t);
        return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
    }
}), Ds.prototype = Object.assign(Object.create(Is.prototype), {
    constructor: Ds,
    isHemisphereLight: !0,
    copy: function(t) {
        return Is.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
    }
}), Object.assign(Ns.prototype, {
    _projScreenMatrix: new R,
    _lightPositionWorld: new _,
    _lookTarget: new _,
    getViewportCount: function() {
        return this._viewportCount
    },
    getFrustum: function() {
        return this._frustum
    },
    updateMatrices: function(t) {
        var e = this.camera,
            i = this.matrix,
            n = this._projScreenMatrix,
            r = this._lookTarget,
            a = this._lightPositionWorld;
        a.setFromMatrixPosition(t.matrixWorld), e.position.copy(a), r.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(r), e.updateMatrixWorld(), n.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(n), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(e.projectionMatrix), i.multiply(e.matrixWorldInverse)
    },
    getViewport: function(t) {
        return this._viewports[t]
    },
    getFrameExtents: function() {
        return this._frameExtents
    },
    copy: function(t) {
        return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    toJSON: function() {
        var t = {};
        return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
    }
}), zs.prototype = Object.assign(Object.create(Ns.prototype), {
    constructor: zs,
    isSpotLightShadow: !0,
    updateMatrices: function(t) {
        var e = this.camera,
            i = 2 * h.RAD2DEG * t.angle,
            n = this.mapSize.width / this.mapSize.height,
            r = t.distance || e.far;
        i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix()), Ns.prototype.updateMatrices.call(this, t)
    }
}), Us.prototype = Object.assign(Object.create(Is.prototype), {
    constructor: Us,
    isSpotLight: !0,
    copy: function(t) {
        return Is.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
}), Fs.prototype = Object.assign(Object.create(Ns.prototype), {
    constructor: Fs,
    isPointLightShadow: !0,
    updateMatrices: function(t, e) {
        void 0 === e && (e = 0);
        var i = this.camera,
            n = this.matrix,
            r = this._lightPositionWorld,
            a = this._lookTarget,
            o = this._projScreenMatrix;
        r.setFromMatrixPosition(t.matrixWorld), i.position.copy(r), a.copy(i.position), a.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(a), i.updateMatrixWorld(), n.makeTranslation(-r.x, -r.y, -r.z), o.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(o)
    }
}), Bs.prototype = Object.assign(Object.create(Is.prototype), {
    constructor: Bs,
    isPointLight: !0,
    copy: function(t) {
        return Is.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
    }
}), Gs.prototype = Object.assign(Object.create(Ve.prototype), {
    constructor: Gs,
    isOrthographicCamera: !0,
    copy: function(t, e) {
        return Ve.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
    },
    setViewOffset: function(t, e, i, n, r, a) {
        null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
        var t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            i = (this.right + this.left) / 2,
            n = (this.top + this.bottom) / 2,
            r = i - t,
            a = i + t,
            o = n + e,
            s = n - e;
        if (null !== this.view && this.view.enabled) {
            var c = (this.right - this.left) / this.view.fullWidth / this.zoom,
                h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            a = (r += c * this.view.offsetX) + c * this.view.width, s = (o -= h * this.view.offsetY) - h * this.view.height
        }
        this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
    },
    toJSON: function(t) {
        var e = X.prototype.toJSON.call(this, t);
        return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
    }
}), Hs.prototype = Object.assign(Object.create(Ns.prototype), {
    constructor: Hs,
    isDirectionalLightShadow: !0,
    updateMatrices: function(t) {
        Ns.prototype.updateMatrices.call(this, t)
    }
}), ks.prototype = Object.assign(Object.create(Is.prototype), {
    constructor: ks,
    isDirectionalLight: !0,
    copy: function(t) {
        return Is.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
}), Vs.prototype = Object.assign(Object.create(Is.prototype), {
    constructor: Vs,
    isAmbientLight: !0
}), js.prototype = Object.assign(Object.create(Is.prototype), {
    constructor: js,
    isRectAreaLight: !0,
    copy: function(t) {
        return Is.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
    },
    toJSON: function(t) {
        var e = Is.prototype.toJSON.call(this, t);
        return e.object.width = this.width, e.object.height = this.height, e
    }
}), Object.assign(Ws.prototype, {
    isSphericalHarmonics3: !0,
    set: function(t) {
        for (var e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
        return this
    },
    zero: function() {
        for (var t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
        return this
    },
    getAt: function(t, e) {
        var i = t.x,
            n = t.y,
            r = t.z,
            a = this.coefficients;
        return e.copy(a[0]).multiplyScalar(.282095), e.addScaledVector(a[1], .488603 * n), e.addScaledVector(a[2], .488603 * r), e.addScaledVector(a[3], .488603 * i), e.addScaledVector(a[4], i * n * 1.092548), e.addScaledVector(a[5], n * r * 1.092548), e.addScaledVector(a[6], .315392 * (3 * r * r - 1)), e.addScaledVector(a[7], i * r * 1.092548), e.addScaledVector(a[8], .546274 * (i * i - n * n)), e
    },
    getIrradianceAt: function(t, e) {
        var i = t.x,
            n = t.y,
            r = t.z,
            a = this.coefficients;
        return e.copy(a[0]).multiplyScalar(.886227), e.addScaledVector(a[1], 1.023328 * n), e.addScaledVector(a[2], 1.023328 * r), e.addScaledVector(a[3], 1.023328 * i), e.addScaledVector(a[4], .858086 * i * n), e.addScaledVector(a[5], .858086 * n * r), e.addScaledVector(a[6], .743125 * r * r - .247708), e.addScaledVector(a[7], .858086 * i * r), e.addScaledVector(a[8], .429043 * (i * i - n * n)), e
    },
    add: function(t) {
        for (var e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
        return this
    },
    addScaledSH: function(t, e) {
        for (var i = 0; i < 9; i++) this.coefficients[i].addScaledVector(t.coefficients[i], e);
        return this
    },
    scale: function(t) {
        for (var e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
        return this
    },
    lerp: function(t, e) {
        for (var i = 0; i < 9; i++) this.coefficients[i].lerp(t.coefficients[i], e);
        return this
    },
    equals: function(t) {
        for (var e = 0; e < 9; e++)
            if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
        return !0
    },
    copy: function(t) {
        return this.set(t.coefficients)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    fromArray: function(t, e) {
        void 0 === e && (e = 0);
        for (var i = this.coefficients, n = 0; n < 9; n++) i[n].fromArray(t, e + 3 * n);
        return this
    },
    toArray: function(t, e) {
        void 0 === t && (t = []), void 0 === e && (e = 0);
        for (var i = this.coefficients, n = 0; n < 9; n++) i[n].toArray(t, e + 3 * n);
        return t
    }
}), Object.assign(Ws, {
    getBasisAt: function(t, e) {
        var i = t.x,
            n = t.y,
            r = t.z;
        e[0] = .282095, e[1] = .488603 * n, e[2] = .488603 * r, e[3] = .488603 * i, e[4] = 1.092548 * i * n, e[5] = 1.092548 * n * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * i * r, e[8] = .546274 * (i * i - n * n)
    }
}), qs.prototype = Object.assign(Object.create(Is.prototype), {
    constructor: qs,
    isLightProbe: !0,
    copy: function(t) {
        return Is.prototype.copy.call(this, t), this.sh.copy(t.sh), this
    },
    fromJSON: function(t) {
        return this.intensity = t.intensity, this.sh.fromArray(t.sh), this
    },
    toJSON: function(t) {
        var e = Is.prototype.toJSON.call(this, t);
        return e.object.sh = this.sh.toArray(), e
    }
}), Xs.prototype = Object.assign(Object.create(es.prototype), {
    constructor: Xs,
    load: function(t, e, i, n) {
        var r = this,
            a = new ns(r.manager);
        a.setPath(r.path), a.load(t, (function(t) {
            e(r.parse(JSON.parse(t)))
        }), i, n)
    },
    parse: function(t) {
        var e = this.textures;

        function i(t) {
            return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
        }
        var n = new zo[t.type];
        if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.sheen && (n.sheen = (new Ft).setHex(t.sheen)), void 0 !== t.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && n.specular.setHex(t.specular), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearcoat && (n.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (n.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.combine && (n.combine = t.combine), void 0 !== t.side && (n.side = t.side), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (n.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (n.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (n.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (n.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (n.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (n.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (n.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (n.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (n.skinning = t.skinning), void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (n.morphNormals = t.morphNormals), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.vertexTangents && (n.vertexTangents = t.vertexTangents), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.toneMapped && (n.toneMapped = t.toneMapped), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? n.vertexColors = t.vertexColors > 0 : n.vertexColors = t.vertexColors), void 0 !== t.uniforms)
            for (var r in t.uniforms) {
                var a = t.uniforms[r];
                switch (n.uniforms[r] = {}, a.type) {
                    case "t":
                        n.uniforms[r].value = i(a.value);
                        break;
                    case "c":
                        n.uniforms[r].value = (new Ft).setHex(a.value);
                        break;
                    case "v2":
                        n.uniforms[r].value = (new l).fromArray(a.value);
                        break;
                    case "v3":
                        n.uniforms[r].value = (new _).fromArray(a.value);
                        break;
                    case "v4":
                        n.uniforms[r].value = (new m).fromArray(a.value);
                        break;
                    case "m3":
                        n.uniforms[r].value = (new u).fromArray(a.value);
                    case "m4":
                        n.uniforms[r].value = (new R).fromArray(a.value);
                        break;
                    default:
                        n.uniforms[r].value = a.value
                }
            }
        if (void 0 !== t.defines && (n.defines = t.defines), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
            for (var o in t.extensions) n.extensions[o] = t.extensions[o];
        if (void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = i(t.map)), void 0 !== t.matcap && (n.matcap = i(t.matcap)), void 0 !== t.alphaMap && (n.alphaMap = i(t.alphaMap)), void 0 !== t.bumpMap && (n.bumpMap = i(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = i(t.normalMap)), void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
            var s = t.normalScale;
            !1 === Array.isArray(s) && (s = [s, s]), n.normalScale = (new l).fromArray(s)
        }
        return void 0 !== t.displacementMap && (n.displacementMap = i(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = i(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = i(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = i(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = i(t.specularMap)), void 0 !== t.envMap && (n.envMap = i(t.envMap)), void 0 !== t.envMapIntensity && (n.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (n.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (n.lightMap = i(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = i(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = i(t.gradientMap)), void 0 !== t.clearcoatMap && (n.clearcoatMap = i(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (n.clearcoatRoughnessMap = i(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (n.clearcoatNormalMap = i(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (n.clearcoatNormalScale = (new l).fromArray(t.clearcoatNormalScale)), n
    },
    setTextures: function(t) {
        return this.textures = t, this
    }
});
var Ys = function(t) {
    var e = t.lastIndexOf("/");
    return -1 === e ? "./" : t.substr(0, e + 1)
};

function Zs() {
    de.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
}

function Js(t, e, i, n) {
    "number" == typeof i && (n = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Xt.call(this, t, e, i), this.meshPerAttribute = n || 1
}

function Qs(t) {
    es.call(this, t)
}
Zs.prototype = Object.assign(Object.create(de.prototype), {
    constructor: Zs,
    isInstancedBufferGeometry: !0,
    copy: function(t) {
        return de.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    toJSON: function() {
        var t = de.prototype.toJSON.call(this);
        return t.maxInstancedCount = this.maxInstancedCount, t.isInstancedBufferGeometry = !0, t
    }
}), Js.prototype = Object.assign(Object.create(Xt.prototype), {
    constructor: Js,
    isInstancedBufferAttribute: !0,
    copy: function(t) {
        return Xt.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    },
    toJSON: function() {
        var t = Xt.prototype.toJSON.call(this);
        return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
    }
}), Qs.prototype = Object.assign(Object.create(es.prototype), {
    constructor: Qs,
    load: function(t, e, i, n) {
        var r = this,
            a = new ns(r.manager);
        a.setPath(r.path), a.load(t, (function(t) {
            e(r.parse(JSON.parse(t)))
        }), i, n)
    },
    parse: function(t) {
        var e = t.isInstancedBufferGeometry ? new Zs : new de,
            i = t.data.index;
        if (void 0 !== i) {
            var n = new Ks[i.type](i.array);
            e.setIndex(new Xt(n, 1))
        }
        var r = t.data.attributes;
        for (var a in r) {
            var o = r[a],
                s = (n = new Ks[o.type](o.array), new(o.isInstancedBufferAttribute ? Js : Xt)(n, o.itemSize, o.normalized));
            void 0 !== o.name && (s.name = o.name), e.setAttribute(a, s)
        }
        var c = t.data.morphAttributes;
        if (c)
            for (var a in c) {
                for (var h = c[a], l = [], u = 0, d = h.length; u < d; u++) {
                    o = h[u], s = new Xt(n = new Ks[o.type](o.array), o.itemSize, o.normalized);
                    void 0 !== o.name && (s.name = o.name), l.push(s)
                }
                e.morphAttributes[a] = l
            }
        t.data.morphTargetsRelative && (e.morphTargetsRelative = !0);
        var p = t.data.groups || t.data.drawcalls || t.data.offsets;
        if (void 0 !== p) {
            u = 0;
            for (var f = p.length; u !== f; ++u) {
                var m = p[u];
                e.addGroup(m.start, m.count, m.materialIndex)
            }
        }
        var g = t.data.boundingSphere;
        if (void 0 !== g) {
            var v = new _;
            void 0 !== g.center && v.fromArray(g.center), e.boundingSphere = new ut(v, g.radius)
        }
        return t.name && (e.name = t.name), t.userData && (e.userData = t.userData), e
    }
});
var Ks = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
};

function $s(t) {
    es.call(this, t)
}
$s.prototype = Object.assign(Object.create(es.prototype), {
    constructor: $s,
    load: function(t, e, i, n) {
        var r = this,
            a = "" === this.path ? Ys(t) : this.path;
        this.resourcePath = this.resourcePath || a;
        var o = new ns(r.manager);
        o.setPath(this.path), o.load(t, (function(i) {
            var a = null;
            try {
                a = JSON.parse(i)
            } catch (e) {
                return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
            }
            var o = a.metadata;
            void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? r.parse(a, e) : console.error("THREE.ObjectLoader: Can't load " + t)
        }), i, n)
    },
    parse: function(t, e) {
        var i = this.parseShape(t.shapes),
            n = this.parseGeometries(t.geometries, i),
            r = this.parseImages(t.images, (function() {
                void 0 !== e && e(s)
            })),
            a = this.parseTextures(t.textures, r),
            o = this.parseMaterials(t.materials, a),
            s = this.parseObject(t.object, n, o);
        return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
    },
    parseShape: function(t) {
        var e = {};
        if (void 0 !== t)
            for (var i = 0, n = t.length; i < n; i++) {
                var r = (new Os).fromJSON(t[i]);
                e[r.uuid] = r
            }
        return e
    },
    parseGeometries: function(t, e) {
        var i = {};
        if (void 0 !== t)
            for (var n = new Qs, r = 0, a = t.length; r < a; r++) {
                var o, s = t[r];
                switch (s.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        o = new To[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        o = new To[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        o = new To[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        o = new To[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        o = new To[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        o = new To[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "DodecahedronBufferGeometry":
                    case "IcosahedronGeometry":
                    case "IcosahedronBufferGeometry":
                    case "OctahedronGeometry":
                    case "OctahedronBufferGeometry":
                    case "TetrahedronGeometry":
                    case "TetrahedronBufferGeometry":
                        o = new To[s.type](s.radius, s.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        o = new To[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        o = new To[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        o = new To[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                        break;
                    case "TubeGeometry":
                    case "TubeBufferGeometry":
                        o = new To[s.type]((new Rs[s.path.type]).fromJSON(s.path), s.tubularSegments, s.radius, s.radialSegments, s.closed);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        o = new To[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                        break;
                    case "PolyhedronGeometry":
                    case "PolyhedronBufferGeometry":
                        o = new To[s.type](s.vertices, s.indices, s.radius, s.details);
                        break;
                    case "ShapeGeometry":
                    case "ShapeBufferGeometry":
                        for (var c = [], h = 0, l = s.shapes.length; h < l; h++) {
                            var u = e[s.shapes[h]];
                            c.push(u)
                        }
                        o = new To[s.type](c, s.curveSegments);
                        break;
                    case "ExtrudeGeometry":
                    case "ExtrudeBufferGeometry":
                        for (c = [], h = 0, l = s.shapes.length; h < l; h++) {
                            u = e[s.shapes[h]];
                            c.push(u)
                        }
                        var d = s.options.extrudePath;
                        void 0 !== d && (s.options.extrudePath = (new Rs[d.type]).fromJSON(d)), o = new To[s.type](c, s.options);
                        break;
                    case "BufferGeometry":
                    case "InstancedBufferGeometry":
                        o = n.parse(s);
                        break;
                    case "Geometry":
                        console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                        continue
                }
                o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData), i[s.uuid] = o
            }
        return i
    },
    parseMaterials: function(t, e) {
        var i = {},
            n = {};
        if (void 0 !== t) {
            var r = new Xs;
            r.setTextures(e);
            for (var a = 0, o = t.length; a < o; a++) {
                var s = t[a];
                if ("MultiMaterial" === s.type) {
                    for (var c = [], h = 0; h < s.materials.length; h++) {
                        var l = s.materials[h];
                        void 0 === i[l.uuid] && (i[l.uuid] = r.parse(l)), c.push(i[l.uuid])
                    }
                    n[s.uuid] = c
                } else void 0 === i[s.uuid] && (i[s.uuid] = r.parse(s)), n[s.uuid] = i[s.uuid]
            }
        }
        return n
    },
    parseAnimations: function(t) {
        for (var e = [], i = 0; i < t.length; i++) {
            var n = t[i],
                r = Jo.parse(n);
            void 0 !== n.uuid && (r.uuid = n.uuid), e.push(r)
        }
        return e
    },
    parseImages: function(t, e) {
        var i = this,
            n = {};

        function r(t) {
            return i.manager.itemStart(t), a.load(t, (function() {
                i.manager.itemEnd(t)
            }), void 0, (function() {
                i.manager.itemError(t), i.manager.itemEnd(t)
            }))
        }
        if (void 0 !== t && t.length > 0) {
            var a = new ss(new $o(e));
            a.setCrossOrigin(this.crossOrigin);
            for (var o = 0, s = t.length; o < s; o++) {
                var c = t[o],
                    h = c.url;
                if (Array.isArray(h)) {
                    n[c.uuid] = [];
                    for (var l = 0, u = h.length; l < u; l++) {
                        var d = h[l],
                            p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : i.resourcePath + d;
                        n[c.uuid].push(r(p))
                    }
                } else {
                    p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : i.resourcePath + c.url;
                    n[c.uuid] = r(p)
                }
            }
        }
        return n
    },
    parseTextures: function(t, e) {
        function i(t, e) {
            return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
        }
        var n = {};
        if (void 0 !== t)
            for (var r = 0, a = t.length; r < a; r++) {
                var o, s = t[r];
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(e[s.image]) ? new mi(e[s.image]) : new f(e[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = i(s.mapping, ec)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = i(s.wrap[0], ic), o.wrapT = i(s.wrap[1], ic)), void 0 !== s.format && (o.format = s.format), void 0 !== s.type && (o.type = s.type), void 0 !== s.encoding && (o.encoding = s.encoding), void 0 !== s.minFilter && (o.minFilter = i(s.minFilter, nc)), void 0 !== s.magFilter && (o.magFilter = i(s.magFilter, nc)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (o.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (o.unpackAlignment = s.unpackAlignment), n[s.uuid] = o
            }
        return n
    },
    parseObject: function(t, e, i) {
        var n;

        function r(t) {
            return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
        }

        function a(t) {
            if (void 0 !== t) {
                if (Array.isArray(t)) {
                    for (var e = [], n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        void 0 === i[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(i[a])
                    }
                    return e
                }
                return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t), i[t]
            }
        }
        switch (t.type) {
            case "Scene":
                n = new Y, void 0 !== t.background && Number.isInteger(t.background) && (n.background = new Ft(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? n.fog = new nr(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (n.fog = new ir(t.fog.color, t.fog.density)));
                break;
            case "PerspectiveCamera":
                n = new je(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (n.focus = t.focus), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.filmGauge && (n.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (n.filmOffset = t.filmOffset), void 0 !== t.view && (n.view = Object.assign({}, t.view));
                break;
            case "OrthographicCamera":
                n = new Gs(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (n.zoom = t.zoom), void 0 !== t.view && (n.view = Object.assign({}, t.view));
                break;
            case "AmbientLight":
                n = new Vs(t.color, t.intensity);
                break;
            case "DirectionalLight":
                n = new ks(t.color, t.intensity);
                break;
            case "PointLight":
                n = new Bs(t.color, t.intensity, t.distance, t.decay);
                break;
            case "RectAreaLight":
                n = new js(t.color, t.intensity, t.width, t.height);
                break;
            case "SpotLight":
                n = new Us(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                break;
            case "HemisphereLight":
                n = new Ds(t.color, t.groundColor, t.intensity);
                break;
            case "LightProbe":
                n = (new qs).fromJSON(t);
                break;
            case "SkinnedMesh":
                console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
            case "Mesh":
                n = new Pe(o = r(t.geometry), s = a(t.material));
                break;
            case "InstancedMesh":
                var o = r(t.geometry),
                    s = a(t.material),
                    c = t.count,
                    h = t.instanceMatrix;
                (n = new Gr(o, s, c)).instanceMatrix = new Xt(new Float32Array(h.array), 16);
                break;
            case "LOD":
                n = new Pr;
                break;
            case "Line":
                n = new Xr(r(t.geometry), a(t.material), t.mode);
                break;
            case "LineLoop":
                n = new Qr(r(t.geometry), a(t.material));
                break;
            case "LineSegments":
                n = new Jr(r(t.geometry), a(t.material));
                break;
            case "PointCloud":
            case "Points":
                n = new na(r(t.geometry), a(t.material));
                break;
            case "Sprite":
                n = new _r(a(t.material));
                break;
            case "Group":
                n = new Kn;
                break;
            default:
                n = new X
        }
        if (n.uuid = t.uuid, void 0 !== t.name && (n.name = t.name), void 0 !== t.matrix ? (n.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (n.matrixAutoUpdate = t.matrixAutoUpdate), n.matrixAutoUpdate && n.matrix.decompose(n.position, n.quaternion, n.scale)) : (void 0 !== t.position && n.position.fromArray(t.position), void 0 !== t.rotation && n.rotation.fromArray(t.rotation), void 0 !== t.quaternion && n.quaternion.fromArray(t.quaternion), void 0 !== t.scale && n.scale.fromArray(t.scale)), void 0 !== t.castShadow && (n.castShadow = t.castShadow), void 0 !== t.receiveShadow && (n.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (n.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (n.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && n.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (n.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.frustumCulled && (n.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (n.renderOrder = t.renderOrder), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.layers && (n.layers.mask = t.layers), void 0 !== t.children)
            for (var l = t.children, u = 0; u < l.length; u++) n.add(this.parseObject(l[u], e, i));
        if ("LOD" === t.type) {
            void 0 !== t.autoUpdate && (n.autoUpdate = t.autoUpdate);
            for (var d = t.levels, p = 0; p < d.length; p++) {
                var f = d[p],
                    m = n.getObjectByProperty("uuid", f.object);
                void 0 !== m && n.addLevel(m, f.distance)
            }
        }
        return n
    }
});
var tc, ec = {
        UVMapping: 300,
        CubeReflectionMapping: 301,
        CubeRefractionMapping: 302,
        EquirectangularReflectionMapping: 303,
        EquirectangularRefractionMapping: 304,
        SphericalReflectionMapping: 305,
        CubeUVReflectionMapping: 306,
        CubeUVRefractionMapping: 307
    },
    ic = {
        RepeatWrapping: 1e3,
        ClampToEdgeWrapping: 1001,
        MirroredRepeatWrapping: 1002
    },
    nc = {
        NearestFilter: 1003,
        NearestMipmapNearestFilter: 1004,
        NearestMipmapLinearFilter: 1005,
        LinearFilter: 1006,
        LinearMipmapNearestFilter: 1007,
        LinearMipmapLinearFilter: 1008
    };

function rc(t) {
    "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), es.call(this, t), this.options = void 0
}

function ac() {
    this.type = "ShapePath", this.color = new Ft, this.subPaths = [], this.currentPath = null
}

function oc(t) {
    this.type = "Font", this.data = t
}

function sc(t, e, i, n, r) {
    var a = r.glyphs[t] || r.glyphs["?"];
    if (a) {
        var o, s, c, h, l, u, d, p, f = new ac;
        if (a.o)
            for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), g = 0, v = m.length; g < v;) {
                switch (m[g++]) {
                    case "m":
                        o = m[g++] * e + i, s = m[g++] * e + n, f.moveTo(o, s);
                        break;
                    case "l":
                        o = m[g++] * e + i, s = m[g++] * e + n, f.lineTo(o, s);
                        break;
                    case "q":
                        c = m[g++] * e + i, h = m[g++] * e + n, l = m[g++] * e + i, u = m[g++] * e + n, f.quadraticCurveTo(l, u, c, h);
                        break;
                    case "b":
                        c = m[g++] * e + i, h = m[g++] * e + n, l = m[g++] * e + i, u = m[g++] * e + n, d = m[g++] * e + i, p = m[g++] * e + n, f.bezierCurveTo(l, u, d, p, c, h)
                }
            }
        return {
            offsetX: a.ha * e,
            path: f
        }
    }
    console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".")
}

function cc(t) {
    es.call(this, t)
}
rc.prototype = Object.assign(Object.create(es.prototype), {
    constructor: rc,
    setOptions: function(t) {
        return this.options = t, this
    },
    load: function(t, e, i, n) {
        void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        var r = this,
            a = Ko.get(t);
        if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
            e && e(a), r.manager.itemEnd(t)
        }), 0), a;
        fetch(t).then((function(t) {
            return t.blob()
        })).then((function(t) {
            return void 0 === r.options ? createImageBitmap(t) : createImageBitmap(t, r.options)
        })).then((function(i) {
            Ko.add(t, i), e && e(i), r.manager.itemEnd(t)
        })).catch((function(e) {
            n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
        })), r.manager.itemStart(t)
    }
}), Object.assign(ac.prototype, {
    moveTo: function(t, e) {
        return this.currentPath = new Cs, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
    },
    lineTo: function(t, e) {
        return this.currentPath.lineTo(t, e), this
    },
    quadraticCurveTo: function(t, e, i, n) {
        return this.currentPath.quadraticCurveTo(t, e, i, n), this
    },
    bezierCurveTo: function(t, e, i, n, r, a) {
        return this.currentPath.bezierCurveTo(t, e, i, n, r, a), this
    },
    splineThru: function(t) {
        return this.currentPath.splineThru(t), this
    },
    toShapes: function(t, e) {
        function i(t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
                var r = t[i],
                    a = new Os;
                a.curves = r.curves, e.push(a)
            }
            return e
        }

        function n(t, e) {
            for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
                var o = e[r],
                    s = e[a],
                    c = s.x - o.x,
                    h = s.y - o.y;
                if (Math.abs(h) > Number.EPSILON) {
                    if (h < 0 && (o = e[a], c = -c, s = e[r], h = -h), t.y < o.y || t.y > s.y) continue;
                    if (t.y === o.y) {
                        if (t.x === o.x) return !0
                    } else {
                        var l = h * (t.x - o.x) - c * (t.y - o.y);
                        if (0 === l) return !0;
                        if (l < 0) continue;
                        n = !n
                    }
                } else {
                    if (t.y !== o.y) continue;
                    if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
                }
            }
            return n
        }
        var r = $a.isClockWise,
            a = this.subPaths;
        if (0 === a.length) return [];
        if (!0 === e) return i(a);
        var o, s, c, h = [];
        if (1 === a.length) return s = a[0], (c = new Os).curves = s.curves, h.push(c), h;
        var l = !r(a[0].getPoints());
        l = t ? !l : l;
        var u, d, p = [],
            f = [],
            m = [],
            g = 0;
        f[g] = void 0, m[g] = [];
        for (var v = 0, y = a.length; v < y; v++) o = r(u = (s = a[v]).getPoints()), (o = t ? !o : o) ? (!l && f[g] && g++, f[g] = {
            s: new Os,
            p: u
        }, f[g].s.curves = s.curves, l && g++, m[g] = []) : m[g].push({
            h: s,
            p: u[0]
        });
        if (!f[0]) return i(a);
        if (f.length > 1) {
            for (var x = !1, b = [], _ = 0, w = f.length; _ < w; _++) p[_] = [];
            for (_ = 0, w = f.length; _ < w; _++)
                for (var M = m[_], S = 0; S < M.length; S++) {
                    for (var T = M[S], E = !0, A = 0; A < f.length; A++) n(T.p, f[A].p) && (_ !== A && b.push({
                        froms: _,
                        tos: A,
                        hole: S
                    }), E ? (E = !1, p[A].push(T)) : x = !0);
                    E && p[_].push(T)
                }
            b.length > 0 && (x || (m = p))
        }
        v = 0;
        for (var L = f.length; v < L; v++) {
            c = f[v].s, h.push(c);
            for (var R = 0, P = (d = m[v]).length; R < P; R++) c.holes.push(d[R].h)
        }
        return h
    }
}), Object.assign(oc.prototype, {
    isFont: !0,
    generateShapes: function(t, e) {
        void 0 === e && (e = 100);
        for (var i = [], n = function(t, e, i) {
                for (var n = Array.from ? Array.from(t) : String(t).split(""), r = e / i.resolution, a = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r, o = [], s = 0, c = 0, h = 0; h < n.length; h++) {
                    var l = n[h];
                    if ("\n" === l) s = 0, c -= a;
                    else {
                        var u = sc(l, r, s, c, i);
                        s += u.offsetX, o.push(u.path)
                    }
                }
                return o
            }(t, e, this.data), r = 0, a = n.length; r < a; r++) Array.prototype.push.apply(i, n[r].toShapes());
        return i
    }
}), cc.prototype = Object.assign(Object.create(es.prototype), {
    constructor: cc,
    load: function(t, e, i, n) {
        var r = this,
            a = new ns(this.manager);
        a.setPath(this.path), a.load(t, (function(t) {
            var i;
            try {
                i = JSON.parse(t)
            } catch (e) {
                console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(t.substring(65, t.length - 2))
            }
            var n = r.parse(i);
            e && e(n)
        }), i, n)
    },
    parse: function(t) {
        return new oc(t)
    }
});
var hc = function() {
    return void 0 === tc && (tc = new(window.AudioContext || window.webkitAudioContext)), tc
};

function lc(t) {
    es.call(this, t)
}

function uc(t, e, i) {
    qs.call(this, void 0, i);
    var n = (new Ft).set(t),
        r = (new Ft).set(e),
        a = new _(n.r, n.g, n.b),
        o = new _(r.r, r.g, r.b),
        s = Math.sqrt(Math.PI),
        c = s * Math.sqrt(.75);
    this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)
}

function dc(t, e) {
    qs.call(this, void 0, e);
    var i = (new Ft).set(t);
    this.sh.coefficients[0].set(i.r, i.g, i.b).multiplyScalar(2 * Math.sqrt(Math.PI))
}
lc.prototype = Object.assign(Object.create(es.prototype), {
    constructor: lc,
    load: function(t, e, i, n) {
        var r = new ns(this.manager);
        r.setResponseType("arraybuffer"), r.setPath(this.path), r.load(t, (function(t) {
            var i = t.slice(0);
            hc().decodeAudioData(i, (function(t) {
                e(t)
            }))
        }), i, n)
    }
}), uc.prototype = Object.assign(Object.create(qs.prototype), {
    constructor: uc,
    isHemisphereLightProbe: !0,
    copy: function(t) {
        return qs.prototype.copy.call(this, t), this
    },
    toJSON: function(t) {
        return qs.prototype.toJSON.call(this, t)
    }
}), dc.prototype = Object.assign(Object.create(qs.prototype), {
    constructor: dc,
    isAmbientLightProbe: !0,
    copy: function(t) {
        return qs.prototype.copy.call(this, t), this
    },
    toJSON: function(t) {
        return qs.prototype.toJSON.call(this, t)
    }
});
var pc = new R,
    fc = new R;

function mc(t) {
    this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
}
Object.assign(function() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new je, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new je, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
        focus: null,
        fov: null,
        aspect: null,
        near: null,
        far: null,
        zoom: null,
        eyeSep: null
    }
}.prototype, {
    update: function(t) {
        var e = this._cache;
        if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
            e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;
            var i, n, r = t.projectionMatrix.clone(),
                a = e.eyeSep / 2,
                o = a * e.near / e.focus,
                s = e.near * Math.tan(h.DEG2RAD * e.fov * .5) / e.zoom;
            fc.elements[12] = -a, pc.elements[12] = a, i = -s * e.aspect + o, n = s * e.aspect + o, r.elements[0] = 2 * e.near / (n - i), r.elements[8] = (n + i) / (n - i), this.cameraL.projectionMatrix.copy(r), i = -s * e.aspect - o, n = s * e.aspect - o, r.elements[0] = 2 * e.near / (n - i), r.elements[8] = (n + i) / (n - i), this.cameraR.projectionMatrix.copy(r)
        }
        this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(fc), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(pc)
    }
}), Object.assign(mc.prototype, {
    start: function() {
        this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
    },
    stop: function() {
        this.getElapsedTime(), this.running = !1, this.autoStart = !1
    },
    getElapsedTime: function() {
        return this.getDelta(), this.elapsedTime
    },
    getDelta: function() {
        var t = 0;
        if (this.autoStart && !this.running) return this.start(), 0;
        if (this.running) {
            var e = ("undefined" == typeof performance ? Date : performance).now();
            t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
        }
        return t
    }
});
var gc = new _,
    vc = new y,
    yc = new _,
    xc = new _;

function bc() {
    X.call(this), this.type = "AudioListener", this.context = hc(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new mc
}

function _c(t) {
    X.call(this), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this.filters = []
}
bc.prototype = Object.assign(Object.create(X.prototype), {
    constructor: bc,
    getInput: function() {
        return this.gain
    },
    removeFilter: function() {
        return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
    },
    getFilter: function() {
        return this.filter
    },
    setFilter: function(t) {
        return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
    },
    getMasterVolume: function() {
        return this.gain.gain.value
    },
    setMasterVolume: function(t) {
        return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
    },
    updateMatrixWorld: function(t) {
        X.prototype.updateMatrixWorld.call(this, t);
        var e = this.context.listener,
            i = this.up;
        if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(gc, vc, yc), xc.set(0, 0, -1).applyQuaternion(vc), e.positionX) {
            var n = this.context.currentTime + this.timeDelta;
            e.positionX.linearRampToValueAtTime(gc.x, n), e.positionY.linearRampToValueAtTime(gc.y, n), e.positionZ.linearRampToValueAtTime(gc.z, n), e.forwardX.linearRampToValueAtTime(xc.x, n), e.forwardY.linearRampToValueAtTime(xc.y, n), e.forwardZ.linearRampToValueAtTime(xc.z, n), e.upX.linearRampToValueAtTime(i.x, n), e.upY.linearRampToValueAtTime(i.y, n), e.upZ.linearRampToValueAtTime(i.z, n)
        } else e.setPosition(gc.x, gc.y, gc.z), e.setOrientation(xc.x, xc.y, xc.z, i.x, i.y, i.z)
    }
}), _c.prototype = Object.assign(Object.create(X.prototype), {
    constructor: _c,
    getOutput: function() {
        return this.gain
    },
    setNodeSource: function(t) {
        return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
    },
    setMediaElementSource: function(t) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
    },
    setMediaStreamSource: function(t) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this
    },
    setBuffer: function(t) {
        return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
    },
    play: function(t) {
        if (void 0 === t && (t = 0), !0 !== this.isPlaying) {
            if (!1 !== this.hasPlaybackControl) {
                this._startedAt = this.context.currentTime + t;
                var e = this.context.createBufferSource();
                return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
            }
            console.warn("THREE.Audio: this Audio has no playback control.")
        } else console.warn("THREE.Audio: Audio is already playing.")
    },
    pause: function() {
        if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    },
    stop: function() {
        if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    },
    connect: function() {
        if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
            this.filters[this.filters.length - 1].connect(this.getOutput())
        } else this.source.connect(this.getOutput());
        return this
    },
    disconnect: function() {
        if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput())
        } else this.source.disconnect(this.getOutput());
        return this
    },
    getFilters: function() {
        return this.filters
    },
    setFilters: function(t) {
        return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
    },
    setDetune: function(t) {
        if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
    },
    getDetune: function() {
        return this.detune
    },
    getFilter: function() {
        return this.getFilters()[0]
    },
    setFilter: function(t) {
        return this.setFilters(t ? [t] : [])
    },
    setPlaybackRate: function(t) {
        if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    },
    getPlaybackRate: function() {
        return this.playbackRate
    },
    onEnded: function() {
        this.isPlaying = !1
    },
    getLoop: function() {
        return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
    },
    setLoop: function(t) {
        if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    },
    setLoopStart: function(t) {
        return this.loopStart = t, this
    },
    setLoopEnd: function(t) {
        return this.loopEnd = t, this
    },
    getVolume: function() {
        return this.gain.gain.value
    },
    setVolume: function(t) {
        return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
    }
});
var wc = new _,
    Mc = new y,
    Sc = new _,
    Tc = new _;

function Ec(t) {
    _c.call(this, t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain)
}

function Ac(t, e) {
    this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
}

function Lc(t, e, i) {
    var n, r, a;
    switch (this.binding = t, this.valueSize = i, e) {
        case "quaternion":
            n = this._slerp, r = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i), this._workIndex = 5;
            break;
        case "string":
        case "bool":
            n = this._select, r = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(5 * i);
            break;
        default:
            n = this._lerp, r = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i)
    }
    this._mixBufferRegion = n, this._mixBufferRegionAdditive = r, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
}
Ec.prototype = Object.assign(Object.create(_c.prototype), {
    constructor: Ec,
    getOutput: function() {
        return this.panner
    },
    getRefDistance: function() {
        return this.panner.refDistance
    },
    setRefDistance: function(t) {
        return this.panner.refDistance = t, this
    },
    getRolloffFactor: function() {
        return this.panner.rolloffFactor
    },
    setRolloffFactor: function(t) {
        return this.panner.rolloffFactor = t, this
    },
    getDistanceModel: function() {
        return this.panner.distanceModel
    },
    setDistanceModel: function(t) {
        return this.panner.distanceModel = t, this
    },
    getMaxDistance: function() {
        return this.panner.maxDistance
    },
    setMaxDistance: function(t) {
        return this.panner.maxDistance = t, this
    },
    setDirectionalCone: function(t, e, i) {
        return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = i, this
    },
    updateMatrixWorld: function(t) {
        if (X.prototype.updateMatrixWorld.call(this, t), !0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
            this.matrixWorld.decompose(wc, Mc, Sc), Tc.set(0, 0, 1).applyQuaternion(Mc);
            var e = this.panner;
            if (e.positionX) {
                var i = this.context.currentTime + this.listener.timeDelta;
                e.positionX.linearRampToValueAtTime(wc.x, i), e.positionY.linearRampToValueAtTime(wc.y, i), e.positionZ.linearRampToValueAtTime(wc.z, i), e.orientationX.linearRampToValueAtTime(Tc.x, i), e.orientationY.linearRampToValueAtTime(Tc.y, i), e.orientationZ.linearRampToValueAtTime(Tc.z, i)
            } else e.setPosition(wc.x, wc.y, wc.z), e.setOrientation(Tc.x, Tc.y, Tc.z)
        }
    }
}), Object.assign(Ac.prototype, {
    getFrequencyData: function() {
        return this.analyser.getByteFrequencyData(this.data), this.data
    },
    getAverageFrequency: function() {
        for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i];
        return t / e.length
    }
}), Object.assign(Lc.prototype, {
    accumulate: function(t, e) {
        var i = this.buffer,
            n = this.valueSize,
            r = t * n + n,
            a = this.cumulativeWeight;
        if (0 === a) {
            for (var o = 0; o !== n; ++o) i[r + o] = i[o];
            a = e
        } else {
            var s = e / (a += e);
            this._mixBufferRegion(i, r, 0, s, n)
        }
        this.cumulativeWeight = a
    },
    accumulateAdditive: function(t) {
        var e = this.buffer,
            i = this.valueSize,
            n = i * this._addIndex;
        0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, n, 0, t, i), this.cumulativeWeightAdditive += t
    },
    apply: function(t) {
        var e = this.valueSize,
            i = this.buffer,
            n = t * e + e,
            r = this.cumulativeWeight,
            a = this.cumulativeWeightAdditive,
            o = this.binding;
        if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
            var s = e * this._origIndex;
            this._mixBufferRegion(i, n, s, 1 - r, e)
        }
        a > 0 && this._mixBufferRegionAdditive(i, n, this._addIndex * e, 1, e);
        for (var c = e, h = e + e; c !== h; ++c)
            if (i[c] !== i[c + e]) {
                o.setValue(i, n);
                break
            }
    },
    saveOriginalState: function() {
        var t = this.binding,
            e = this.buffer,
            i = this.valueSize,
            n = i * this._origIndex;
        t.getValue(e, n);
        for (var r = i, a = n; r !== a; ++r) e[r] = e[n + r % i];
        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
    },
    restoreOriginalState: function() {
        var t = 3 * this.valueSize;
        this.binding.setValue(this.buffer, t)
    },
    _setAdditiveIdentityNumeric: function() {
        var t = this._addIndex * this.valueSize;
        this.buffer.fill(0, t, t + this.valueSize)
    },
    _setAdditiveIdentityQuaternion: function() {
        this._setAdditiveIdentityNumeric(), this.buffer[4 * this._addIndex + 3] = 1
    },
    _setAdditiveIdentityOther: function() {
        var t = this._origIndex * this.valueSize,
            e = this._addIndex * this.valueSize;
        this.buffer.copyWithin(e, t, this.valueSize)
    },
    _select: function(t, e, i, n, r) {
        if (n >= .5)
            for (var a = 0; a !== r; ++a) t[e + a] = t[i + a]
    },
    _slerp: function(t, e, i, n) {
        y.slerpFlat(t, e, t, e, t, i, n)
    },
    _slerpAdditive: function(t, e, i, n, r) {
        var a = this._workIndex * r;
        y.multiplyQuaternionsFlat(t, a, t, e, t, i), y.slerpFlat(t, e, t, e, t, a, n)
    },
    _lerp: function(t, e, i, n, r) {
        for (var a = 1 - n, o = 0; o !== r; ++o) {
            var s = e + o;
            t[s] = t[s] * a + t[i + o] * n
        }
    },
    _lerpAdditive: function(t, e, i, n, r) {
        for (var a = 0; a !== r; ++a) {
            var o = e + a;
            t[o] = t[o] + t[i + a] * n
        }
    }
});
var Rc = new RegExp("[\\[\\]\\.:\\/]", "g"),
    Pc = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
    Cc = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    Oc = /(WCOD+)?/.source.replace("WCOD", Pc),
    Ic = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    Dc = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    Nc = new RegExp("^" + Cc + Oc + Ic + Dc + "$"),
    zc = ["material", "materials", "bones"];

function Uc(t, e, i) {
    var n = i || Fc.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, n)
}

function Fc(t, e, i) {
    this.path = e, this.parsedPath = i || Fc.parseTrackName(e), this.node = Fc.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
}

function Bc(t, e, i, n) {
    this._mixer = t, this._clip = e, this._localRoot = i || null, this.blendMode = n || e.blendMode;
    for (var r = e.tracks, a = r.length, o = new Array(a), s = {
            endingStart: 2400,
            endingEnd: 2400
        }, c = 0; c !== a; ++c) {
        var h = r[c].createInterpolant(null);
        o[c] = h, h.settings = s
    }
    this._interpolantSettings = s, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
}

function Gc(t) {
    this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
}

function Hc(t) {
    "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
}

function kc(t, e, i) {
    rr.call(this, t, e), this.meshPerAttribute = i || 1
}

function Vc(t, e, i, n) {
    this.ray = new xt(t, e), this.near = i || 0, this.far = n || 1 / 0, this.camera = null, this.layers = new I, this.params = {
        Mesh: {},
        Line: {
            threshold: 1
        },
        LOD: {},
        Points: {
            threshold: 1
        },
        Sprite: {}
    }, Object.defineProperties(this.params, {
        PointCloud: {
            get: function() {
                return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
            }
        }
    })
}

function jc(t, e) {
    return t.distance - e.distance
}

function Wc(t, e, i, n) {
    if (t.layers.test(e.layers) && t.raycast(e, i), !0 === n)
        for (var r = t.children, a = 0, o = r.length; a < o; a++) Wc(r[a], e, i, !0)
}
Object.assign(Uc.prototype, {
    getValue: function(t, e) {
        this.bind();
        var i = this._targetGroup.nCachedObjects_,
            n = this._bindings[i];
        void 0 !== n && n.getValue(t, e)
    },
    setValue: function(t, e) {
        for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
    },
    bind: function() {
        for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
    },
    unbind: function() {
        for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
    }
}), Object.assign(Fc, {
    Composite: Uc,
    create: function(t, e, i) {
        return t && t.isAnimationObjectGroup ? new Fc.Composite(t, e, i) : new Fc(t, e, i)
    },
    sanitizeNodeName: function(t) {
        return t.replace(/\s/g, "_").replace(Rc, "")
    },
    parseTrackName: function(t) {
        var e = Nc.exec(t);
        if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
        var i = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            },
            n = i.nodeName && i.nodeName.lastIndexOf(".");
        if (void 0 !== n && -1 !== n) {
            var r = i.nodeName.substring(n + 1); - 1 !== zc.indexOf(r) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = r)
        }
        if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
        return i
    },
    findNode: function(t, e) {
        if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
        if (t.skeleton) {
            var i = t.skeleton.getBoneByName(e);
            if (void 0 !== i) return i
        }
        if (t.children) {
            var n = function(t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        if (r.name === e || r.uuid === e) return r;
                        var a = n(r.children);
                        if (a) return a
                    }
                    return null
                },
                r = n(t.children);
            if (r) return r
        }
        return null
    }
}), Object.assign(Fc.prototype, {
    _getValue_unavailable: function() {},
    _setValue_unavailable: function() {},
    BindingType: {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    },
    Versioning: {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function(t, e) {
        t[e] = this.node[this.propertyName]
    }, function(t, e) {
        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
    }, function(t, e) {
        t[e] = this.resolvedProperty[this.propertyIndex]
    }, function(t, e) {
        this.resolvedProperty.toArray(t, e)
    }],
    SetterByBindingTypeAndVersioning: [
        [function(t, e) {
            this.targetObject[this.propertyName] = t[e]
        }, function(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
        }, function(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }],
        [function(t, e) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
        }, function(t, e) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
            this.targetObject.needsUpdate = !0
        }, function(t, e) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }],
        [function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }, function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
        }, function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }],
        [function(t, e) {
            this.resolvedProperty.fromArray(t, e)
        }, function(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
        }, function(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
        }]
    ],
    getValue: function(t, e) {
        this.bind(), this.getValue(t, e)
    },
    setValue: function(t, e) {
        this.bind(), this.setValue(t, e)
    },
    bind: function() {
        var t = this.node,
            e = this.parsedPath,
            i = e.objectName,
            n = e.propertyName,
            r = e.propertyIndex;
        if (t || (t = Fc.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
            if (i) {
                var a = e.objectIndex;
                switch (i) {
                    case "materials":
                        if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t = t.skeleton.bones;
                        for (var o = 0; o < t.length; o++)
                            if (t[o].name === a) {
                                a = o;
                                break
                            }
                        break;
                    default:
                        if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t = t[i]
                }
                if (void 0 !== a) {
                    if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                    t = t[a]
                }
            }
            var s = t[n];
            if (void 0 !== s) {
                var c = this.Versioning.None;
                this.targetObject = t, void 0 !== t.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
                var h = this.BindingType.Direct;
                if (void 0 !== r) {
                    if ("morphTargetInfluences" === n) {
                        if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                        if (t.geometry.isBufferGeometry) {
                            if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                            for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                                if (t.geometry.morphAttributes.position[o].name === r) {
                                    r = o;
                                    break
                                }
                        } else {
                            if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                            for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                                if (t.geometry.morphTargets[o].name === r) {
                                    r = o;
                                    break
                                }
                        }
                    }
                    h = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
                } else void 0 !== s.fromArray && void 0 !== s.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (h = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
                this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c]
            } else {
                var l = e.nodeName;
                console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + n + " but it wasn't found.", t)
            }
        } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
    },
    unbind: function() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
}), Object.assign(Fc.prototype, {
    _getValue_unbound: Fc.prototype.getValue,
    _setValue_unbound: Fc.prototype.setValue
}), Object.assign(function() {
    this.uuid = h.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    var t = {};
    this._indicesByUUID = t;
    for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    var n = this;
    this.stats = {
        objects: {
            get total() {
                return n._objects.length
            },
            get inUse() {
                return this.total - n.nCachedObjects_
            }
        },
        get bindingsPerObject() {
            return n._bindings.length
        }
    }
}.prototype, {
    isAnimationObjectGroup: !0,
    add: function() {
        for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, h = 0, l = arguments.length; h !== l; ++h) {
            var u = arguments[h],
                d = u.uuid,
                p = n[d];
            if (void 0 === p) {
                p = e++, n[d] = p, t.push(u);
                for (var f = 0, m = s; f !== m; ++f) o[f].push(new Fc(u, r[f], a[f]))
            } else if (p < i) {
                c = t[p];
                var g = --i,
                    v = t[g];
                n[v.uuid] = p, t[p] = v, n[d] = g, t[g] = u;
                for (f = 0, m = s; f !== m; ++f) {
                    var y = o[f],
                        x = y[g],
                        b = y[p];
                    y[p] = x, void 0 === b && (b = new Fc(u, r[f], a[f])), y[g] = b
                }
            } else t[p] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
        }
        this.nCachedObjects_ = i
    },
    remove: function() {
        for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
            var s = arguments[a],
                c = s.uuid,
                h = i[c];
            if (void 0 !== h && h >= e) {
                var l = e++,
                    u = t[l];
                i[u.uuid] = h, t[h] = u, i[c] = l, t[l] = s;
                for (var d = 0, p = r; d !== p; ++d) {
                    var f = n[d],
                        m = f[l],
                        g = f[h];
                    f[h] = m, f[l] = g
                }
            }
        }
        this.nCachedObjects_ = e
    },
    uncache: function() {
        for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
            var c = arguments[o],
                h = c.uuid,
                l = n[h];
            if (void 0 !== l)
                if (delete n[h], l < i) {
                    var u = --i,
                        d = t[u],
                        p = t[y = --e];
                    n[d.uuid] = l, t[l] = d, n[p.uuid] = u, t[u] = p, t.pop();
                    for (var f = 0, m = a; f !== m; ++f) {
                        var g = (x = r[f])[u],
                            v = x[y];
                        x[l] = g, x[u] = v, x.pop()
                    }
                } else {
                    var y;
                    n[(p = t[y = --e]).uuid] = l, t[l] = p, t.pop();
                    for (f = 0, m = a; f !== m; ++f) {
                        var x;
                        (x = r[f])[l] = x[y], x.pop()
                    }
                }
        }
        this.nCachedObjects_ = i
    },
    subscribe_: function(t, e) {
        var i = this._bindingsIndicesByPath,
            n = i[t],
            r = this._bindings;
        if (void 0 !== n) return r[n];
        var a = this._paths,
            o = this._parsedPaths,
            s = this._objects,
            c = s.length,
            h = this.nCachedObjects_,
            l = new Array(c);
        n = r.length, i[t] = n, a.push(t), o.push(e), r.push(l);
        for (var u = h, d = s.length; u !== d; ++u) {
            var p = s[u];
            l[u] = new Fc(p, t, e)
        }
        return l
    },
    unsubscribe_: function(t) {
        var e = this._bindingsIndicesByPath,
            i = e[t];
        if (void 0 !== i) {
            var n = this._paths,
                r = this._parsedPaths,
                a = this._bindings,
                o = a.length - 1,
                s = a[o];
            e[t[o]] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
        }
    }
}), Object.assign(Bc.prototype, {
    play: function() {
        return this._mixer._activateAction(this), this
    },
    stop: function() {
        return this._mixer._deactivateAction(this), this.reset()
    },
    reset: function() {
        return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
    },
    isRunning: function() {
        return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
    },
    isScheduled: function() {
        return this._mixer._isActiveAction(this)
    },
    startAt: function(t) {
        return this._startTime = t, this
    },
    setLoop: function(t, e) {
        return this.loop = t, this.repetitions = e, this
    },
    setEffectiveWeight: function(t) {
        return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
    },
    getEffectiveWeight: function() {
        return this._effectiveWeight
    },
    fadeIn: function(t) {
        return this._scheduleFading(t, 0, 1)
    },
    fadeOut: function(t) {
        return this._scheduleFading(t, 1, 0)
    },
    crossFadeFrom: function(t, e, i) {
        if (t.fadeOut(e), this.fadeIn(e), i) {
            var n = this._clip.duration,
                r = t._clip.duration,
                a = r / n,
                o = n / r;
            t.warp(1, a, e), this.warp(o, 1, e)
        }
        return this
    },
    crossFadeTo: function(t, e, i) {
        return t.crossFadeFrom(this, e, i)
    },
    stopFading: function() {
        var t = this._weightInterpolant;
        return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    },
    setEffectiveTimeScale: function(t) {
        return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
    },
    getEffectiveTimeScale: function() {
        return this._effectiveTimeScale
    },
    setDuration: function(t) {
        return this.timeScale = this._clip.duration / t, this.stopWarping()
    },
    syncWith: function(t) {
        return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
    },
    halt: function(t) {
        return this.warp(this._effectiveTimeScale, 0, t)
    },
    warp: function(t, e, i) {
        var n = this._mixer,
            r = n.time,
            a = this._timeScaleInterpolant,
            o = this.timeScale;
        null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
        var s = a.parameterPositions,
            c = a.sampleValues;
        return s[0] = r, s[1] = r + i, c[0] = t / o, c[1] = e / o, this
    },
    stopWarping: function() {
        var t = this._timeScaleInterpolant;
        return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    },
    getMixer: function() {
        return this._mixer
    },
    getClip: function() {
        return this._clip
    },
    getRoot: function() {
        return this._localRoot || this._mixer._root
    },
    _update: function(t, e, i, n) {
        if (this.enabled) {
            var r = this._startTime;
            if (null !== r) {
                var a = (t - r) * i;
                if (a < 0 || 0 === i) return;
                this._startTime = null, e = i * a
            }
            e *= this._updateTimeScale(t);
            var o = this._updateTime(e),
                s = this._updateWeight(t);
            if (s > 0) {
                var c = this._interpolants,
                    h = this._propertyBindings;
                switch (this.blendMode) {
                    case 2501:
                        for (var l = 0, u = c.length; l !== u; ++l) c[l].evaluate(o), h[l].accumulateAdditive(s);
                        break;
                    case 2500:
                    default:
                        for (l = 0, u = c.length; l !== u; ++l) c[l].evaluate(o), h[l].accumulate(n, s)
                }
            }
        } else this._updateWeight(t)
    },
    _updateWeight: function(t) {
        var e = 0;
        if (this.enabled) {
            e = this.weight;
            var i = this._weightInterpolant;
            if (null !== i) {
                var n = i.evaluate(t)[0];
                e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = e, e
    },
    _updateTimeScale: function(t) {
        var e = 0;
        if (!this.paused) {
            e = this.timeScale;
            var i = this._timeScaleInterpolant;
            if (null !== i) e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
        }
        return this._effectiveTimeScale = e, e
    },
    _updateTime: function(t) {
        var e = this.time + t,
            i = this._clip.duration,
            n = this.loop,
            r = this._loopCount,
            a = 2202 === n;
        if (0 === t) return -1 === r ? e : a && 1 == (1 & r) ? i - e : e;
        if (2200 === n) {
            -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            t: {
                if (e >= i) e = i;
                else {
                    if (!(e < 0)) {
                        this.time = e;
                        break t
                    }
                    e = 0
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                this.time = e,
                this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: t < 0 ? -1 : 1
                })
            }
        } else {
            if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= i || e < 0) {
                var o = Math.floor(e / i);
                e -= i * o, r += Math.abs(o);
                var s = this.repetitions - r;
                if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this.time = e, this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: t > 0 ? 1 : -1
                });
                else {
                    if (1 === s) {
                        var c = t < 0;
                        this._setEndings(c, !c, a)
                    } else this._setEndings(!1, !1, a);
                    this._loopCount = r, this.time = e, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: o
                    })
                }
            } else this.time = e;
            if (a && 1 == (1 & r)) return i - e
        }
        return e
    },
    _setEndings: function(t, e, i) {
        var n = this._interpolantSettings;
        i ? (n.endingStart = 2401, n.endingEnd = 2401) : (n.endingStart = t ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, n.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
    },
    _scheduleFading: function(t, e, i) {
        var n = this._mixer,
            r = n.time,
            a = this._weightInterpolant;
        null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
        var o = a.parameterPositions,
            s = a.sampleValues;
        return o[0] = r, s[0] = e, o[1] = r + t, s[1] = i, this
    }
}), Gc.prototype = Object.assign(Object.create(a.prototype), {
    constructor: Gc,
    _bindAction: function(t, e) {
        var i = t._localRoot || this._root,
            n = t._clip.tracks,
            r = n.length,
            a = t._propertyBindings,
            o = t._interpolants,
            s = i.uuid,
            c = this._bindingsByRootAndName,
            h = c[s];
        void 0 === h && (h = {}, c[s] = h);
        for (var l = 0; l !== r; ++l) {
            var u = n[l],
                d = u.name,
                p = h[d];
            if (void 0 !== p) a[l] = p;
            else {
                if (void 0 !== (p = a[l])) {
                    null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, s, d));
                    continue
                }
                var f = e && e._propertyBindings[l].binding.parsedPath;
                ++(p = new Lc(Fc.create(i, d, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(p, s, d), a[l] = p
            }
            o[l].resultBuffer = p.buffer
        }
    },
    _activateAction: function(t) {
        if (!this._isActiveAction(t)) {
            if (null === t._cacheIndex) {
                var e = (t._localRoot || this._root).uuid,
                    i = t._clip.uuid,
                    n = this._actionsByClip[i];
                this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
            }
            for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
                var s = r[a];
                0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
            }
            this._lendAction(t)
        }
    },
    _deactivateAction: function(t) {
        if (this._isActiveAction(t)) {
            for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                var r = e[i];
                0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
            }
            this._takeBackAction(t)
        }
    },
    _initMemoryManager: function() {
        this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
        var t = this;
        this.stats = {
            actions: {
                get total() {
                    return t._actions.length
                },
                get inUse() {
                    return t._nActiveActions
                }
            },
            bindings: {
                get total() {
                    return t._bindings.length
                },
                get inUse() {
                    return t._nActiveBindings
                }
            },
            controlInterpolants: {
                get total() {
                    return t._controlInterpolants.length
                },
                get inUse() {
                    return t._nActiveControlInterpolants
                }
            }
        }
    },
    _isActiveAction: function(t) {
        var e = t._cacheIndex;
        return null !== e && e < this._nActiveActions
    },
    _addInactiveAction: function(t, e, i) {
        var n = this._actions,
            r = this._actionsByClip,
            a = r[e];
        if (void 0 === a) a = {
            knownActions: [t],
            actionByRoot: {}
        }, t._byClipCacheIndex = 0, r[e] = a;
        else {
            var o = a.knownActions;
            t._byClipCacheIndex = o.length, o.push(t)
        }
        t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t
    },
    _removeInactiveAction: function(t) {
        var e = this._actions,
            i = e[e.length - 1],
            n = t._cacheIndex;
        i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
        var r = t._clip.uuid,
            a = this._actionsByClip,
            o = a[r],
            s = o.knownActions,
            c = s[s.length - 1],
            h = t._byClipCacheIndex;
        c._byClipCacheIndex = h, s[h] = c, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(t)
    },
    _removeInactiveBindingsForAction: function(t) {
        for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
            var r = e[i];
            0 == --r.referenceCount && this._removeInactiveBinding(r)
        }
    },
    _lendAction: function(t) {
        var e = this._actions,
            i = t._cacheIndex,
            n = this._nActiveActions++,
            r = e[n];
        t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _takeBackAction: function(t) {
        var e = this._actions,
            i = t._cacheIndex,
            n = --this._nActiveActions,
            r = e[n];
        t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _addInactiveBinding: function(t, e, i) {
        var n = this._bindingsByRootAndName,
            r = n[e],
            a = this._bindings;
        void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = a.length, a.push(t)
    },
    _removeInactiveBinding: function(t) {
        var e = this._bindings,
            i = t.binding,
            n = i.rootNode.uuid,
            r = i.path,
            a = this._bindingsByRootAndName,
            o = a[n],
            s = e[e.length - 1],
            c = t._cacheIndex;
        s._cacheIndex = c, e[c] = s, e.pop(), delete o[r], 0 === Object.keys(o).length && delete a[n]
    },
    _lendBinding: function(t) {
        var e = this._bindings,
            i = t._cacheIndex,
            n = this._nActiveBindings++,
            r = e[n];
        t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _takeBackBinding: function(t) {
        var e = this._bindings,
            i = t._cacheIndex,
            n = --this._nActiveBindings,
            r = e[n];
        t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _lendControlInterpolant: function() {
        var t = this._controlInterpolants,
            e = this._nActiveControlInterpolants++,
            i = t[e];
        return void 0 === i && ((i = new Go(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = i), i
    },
    _takeBackControlInterpolant: function(t) {
        var e = this._controlInterpolants,
            i = t.__cacheIndex,
            n = --this._nActiveControlInterpolants,
            r = e[n];
        t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
    },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction: function(t, e, i) {
        var n = e || this._root,
            r = n.uuid,
            a = "string" == typeof t ? Jo.findByName(n, t) : t,
            o = null !== a ? a.uuid : t,
            s = this._actionsByClip[o],
            c = null;
        if (void 0 === i && (i = null !== a ? a.blendMode : 2500), void 0 !== s) {
            var h = s.actionByRoot[r];
            if (void 0 !== h && h.blendMode === i) return h;
            c = s.knownActions[0], null === a && (a = c._clip)
        }
        if (null === a) return null;
        var l = new Bc(this, a, e, i);
        return this._bindAction(l, c), this._addInactiveAction(l, o, r), l
    },
    existingAction: function(t, e) {
        var i = e || this._root,
            n = i.uuid,
            r = "string" == typeof t ? Jo.findByName(i, t) : t,
            a = r ? r.uuid : t,
            o = this._actionsByClip[a];
        return void 0 !== o && o.actionByRoot[n] || null
    },
    stopAllAction: function() {
        var t = this._actions,
            e = this._nActiveActions,
            i = this._bindings,
            n = this._nActiveBindings;
        this._nActiveActions = 0, this._nActiveBindings = 0;
        for (var r = 0; r !== e; ++r) t[r].reset();
        for (r = 0; r !== n; ++r) i[r].useCount = 0;
        return this
    },
    update: function(t) {
        t *= this.timeScale;
        for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
            e[o]._update(n, t, r, a)
        }
        var s = this._bindings,
            c = this._nActiveBindings;
        for (o = 0; o !== c; ++o) s[o].apply(a);
        return this
    },
    setTime: function(t) {
        this.time = 0;
        for (var e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
        return this.update(t)
    },
    getRoot: function() {
        return this._root
    },
    uncacheClip: function(t) {
        var e = this._actions,
            i = t.uuid,
            n = this._actionsByClip,
            r = n[i];
        if (void 0 !== r) {
            for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                var c = a[o];
                this._deactivateAction(c);
                var h = c._cacheIndex,
                    l = e[e.length - 1];
                c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = h, e[h] = l, e.pop(), this._removeInactiveBindingsForAction(c)
            }
            delete n[i]
        }
    },
    uncacheRoot: function(t) {
        var e = t.uuid,
            i = this._actionsByClip;
        for (var n in i) {
            var r = i[n].actionByRoot[e];
            void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
        }
        var a = this._bindingsByRootAndName[e];
        if (void 0 !== a)
            for (var o in a) {
                var s = a[o];
                s.restoreOriginalState(), this._removeInactiveBinding(s)
            }
    },
    uncacheAction: function(t, e) {
        var i = this.existingAction(t, e);
        null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
    }
}), Hc.prototype.clone = function() {
    return new Hc(void 0 === this.value.clone ? this.value : this.value.clone())
}, kc.prototype = Object.assign(Object.create(rr.prototype), {
    constructor: kc,
    isInstancedInterleavedBuffer: !0,
    copy: function(t) {
        return rr.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }
}), Object.assign(Vc.prototype, {
    set: function(t, e) {
        this.ray.set(t, e)
    },
    setFromCamera: function(t, e) {
        e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type.")
    },
    intersectObject: function(t, e, i) {
        var n = i || [];
        return Wc(t, this, n, e), n.sort(jc), n
    },
    intersectObjects: function(t, e, i) {
        var n = i || [];
        if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
        for (var r = 0, a = t.length; r < a; r++) Wc(t[r], this, n, e);
        return n.sort(jc), n
    }
}), Object.assign(function(t, e, i) {
    return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
}.prototype, {
    set: function(t, e, i) {
        return this.radius = t, this.phi = e, this.theta = i, this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
    },
    makeSafe: function() {
        return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
    },
    setFromVector3: function(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z)
    },
    setFromCartesianCoords: function(t, e, i) {
        return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(h.clamp(e / this.radius, -1, 1))), this
    }
}), Object.assign(function(t, e, i) {
    return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
}.prototype, {
    set: function(t, e, i) {
        return this.radius = t, this.theta = e, this.y = i, this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
    },
    setFromVector3: function(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z)
    },
    setFromCartesianCoords: function(t, e, i) {
        return this.radius = Math.sqrt(t * t + i * i), this.theta = Math.atan2(t, i), this.y = e, this
    }
});
var qc = new l;

function Xc(t, e) {
    this.min = void 0 !== t ? t : new l(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new l(-1 / 0, -1 / 0)
}
Object.assign(Xc.prototype, {
    set: function(t, e) {
        return this.min.copy(t), this.max.copy(e), this
    },
    setFromPoints: function(t) {
        this.makeEmpty();
        for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
        return this
    },
    setFromCenterAndSize: function(t, e) {
        var i = qc.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    },
    getCenter: function(t) {
        return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new l), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(t) {
        return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new l), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
    },
    expandByPoint: function(t) {
        return this.min.min(t), this.max.max(t), this
    },
    expandByVector: function(t) {
        return this.min.sub(t), this.max.add(t), this
    },
    expandByScalar: function(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this
    },
    containsPoint: function(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
    },
    containsBox: function(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
    },
    getParameter: function(t, e) {
        return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new l), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
    },
    intersectsBox: function(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
    },
    clampPoint: function(t, e) {
        return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new l), e.copy(t).clamp(this.min, this.max)
    },
    distanceToPoint: function(t) {
        return qc.copy(t).clamp(this.min, this.max).sub(t).length()
    },
    intersect: function(t) {
        return this.min.max(t.min), this.max.min(t.max), this
    },
    union: function(t) {
        return this.min.min(t.min), this.max.max(t.max), this
    },
    translate: function(t) {
        return this.min.add(t), this.max.add(t), this
    },
    equals: function(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
    }
});
var Yc = new _,
    Zc = new _;

function Jc(t, e) {
    this.start = void 0 !== t ? t : new _, this.end = void 0 !== e ? e : new _
}

function Qc(t) {
    X.call(this), this.material = t, this.render = function() {}
}
Object.assign(Jc.prototype, {
    set: function(t, e) {
        return this.start.copy(t), this.end.copy(e), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(t) {
        return this.start.copy(t.start), this.end.copy(t.end), this
    },
    getCenter: function(t) {
        return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new _), t.addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(t) {
        return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new _), t.subVectors(this.end, this.start)
    },
    distanceSq: function() {
        return this.start.distanceToSquared(this.end)
    },
    distance: function() {
        return this.start.distanceTo(this.end)
    },
    at: function(t, e) {
        return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new _), this.delta(e).multiplyScalar(t).add(this.start)
    },
    closestPointToPointParameter: function(t, e) {
        Yc.subVectors(t, this.start), Zc.subVectors(this.end, this.start);
        var i = Zc.dot(Zc),
            n = Zc.dot(Yc) / i;
        return e && (n = h.clamp(n, 0, 1)), n
    },
    closestPointToPoint: function(t, e, i) {
        var n = this.closestPointToPointParameter(t, e);
        return void 0 === i && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), i = new _), this.delta(i).multiplyScalar(n).add(this.start)
    },
    applyMatrix4: function(t) {
        return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
    },
    equals: function(t) {
        return t.start.equals(this.start) && t.end.equals(this.end)
    }
}), Qc.prototype = Object.create(X.prototype), Qc.prototype.constructor = Qc, Qc.prototype.isImmediateRenderObject = !0;
var Kc = new _;

function $c(t, e) {
    X.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
    for (var i = new de, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
        var o = r / 32 * Math.PI * 2,
            s = a / 32 * Math.PI * 2;
        n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
    }
    i.setAttribute("position", new ee(n, 3));
    var c = new Hr({
        fog: !1,
        toneMapped: !1
    });
    this.cone = new Jr(i, c), this.add(this.cone), this.update()
}
$c.prototype = Object.create(X.prototype), $c.prototype.constructor = $c, $c.prototype.dispose = function() {
    this.cone.geometry.dispose(), this.cone.material.dispose()
}, $c.prototype.update = function() {
    this.light.updateMatrixWorld();
    var t = this.light.distance ? this.light.distance : 1e3,
        e = t * Math.tan(this.light.angle);
    this.cone.scale.set(e, e, t), Kc.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Kc), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
};
var th = new _,
    eh = new R,
    ih = new R;

function nh(t) {
    for (var e = function t(e) {
            var i = [];
            e && e.isBone && i.push(e);
            for (var n = 0; n < e.children.length; n++) i.push.apply(i, t(e.children[n]));
            return i
        }(t), i = new de, n = [], r = [], a = new Ft(0, 0, 1), o = new Ft(0, 1, 0), s = 0; s < e.length; s++) {
        var c = e[s];
        c.parent && c.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
    }
    i.setAttribute("position", new ee(n, 3)), i.setAttribute("color", new ee(r, 3));
    var h = new Hr({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0
    });
    Jr.call(this, i, h), this.type = "SkeletonHelper", this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
}

function rh(t, e, i) {
    this.light = t, this.light.updateMatrixWorld(), this.color = i;
    var n = new ho(e, 4, 2),
        r = new Wt({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        });
    Pe.call(this, n, r), this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
}
nh.prototype = Object.create(Jr.prototype), nh.prototype.constructor = nh, nh.prototype.isSkeletonHelper = !0, nh.prototype.updateMatrixWorld = function(t) {
    var e = this.bones,
        i = this.geometry,
        n = i.getAttribute("position");
    ih.getInverse(this.root.matrixWorld);
    for (var r = 0, a = 0; r < e.length; r++) {
        var o = e[r];
        o.parent && o.parent.isBone && (eh.multiplyMatrices(ih, o.matrixWorld), th.setFromMatrixPosition(eh), n.setXYZ(a, th.x, th.y, th.z), eh.multiplyMatrices(ih, o.parent.matrixWorld), th.setFromMatrixPosition(eh), n.setXYZ(a + 1, th.x, th.y, th.z), a += 2)
    }
    i.getAttribute("position").needsUpdate = !0, X.prototype.updateMatrixWorld.call(this, t)
}, rh.prototype = Object.create(Pe.prototype), rh.prototype.constructor = rh, rh.prototype.dispose = function() {
    this.geometry.dispose(), this.material.dispose()
}, rh.prototype.update = function() {
    void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
};
var ah = new _,
    oh = new Ft,
    sh = new Ft;

function ch(t, e, i) {
    X.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i;
    var n = new va(e);
    n.rotateY(.5 * Math.PI), this.material = new Wt({
        wireframe: !0,
        fog: !1,
        toneMapped: !1
    }), void 0 === this.color && (this.material.vertexColors = !0);
    var r = n.getAttribute("position"),
        a = new Float32Array(3 * r.count);
    n.setAttribute("color", new Xt(a, 3)), this.add(new Pe(n, this.material)), this.update()
}

function hh(t, e, i, n) {
    t = t || 10, e = e || 10, i = new Ft(void 0 !== i ? i : 4473924), n = new Ft(void 0 !== n ? n : 8947848);
    for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= e; h++, u += a) {
        s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
        var d = h === r ? i : n;
        d.toArray(c, l), l += 3, d.toArray(c, l), l += 3, d.toArray(c, l), l += 3, d.toArray(c, l), l += 3
    }
    var p = new de;
    p.setAttribute("position", new ee(s, 3)), p.setAttribute("color", new ee(c, 3));
    var f = new Hr({
        vertexColors: !0,
        toneMapped: !1
    });
    Jr.call(this, p, f), this.type = "GridHelper"
}

function lh(t, e, i, n, r, a) {
    t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new Ft(void 0 !== r ? r : 4473924), a = new Ft(void 0 !== a ? a : 8947848);
    var o, s, c, h, l, u, d, p = [],
        f = [];
    for (h = 0; h <= e; h++) c = h / e * (2 * Math.PI), o = Math.sin(c) * t, s = Math.cos(c) * t, p.push(0, 0, 0), p.push(o, 0, s), d = 1 & h ? r : a, f.push(d.r, d.g, d.b), f.push(d.r, d.g, d.b);
    for (h = 0; h <= i; h++)
        for (d = 1 & h ? r : a, u = t - t / i * h, l = 0; l < n; l++) c = l / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, p.push(o, 0, s), f.push(d.r, d.g, d.b), c = (l + 1) / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, p.push(o, 0, s), f.push(d.r, d.g, d.b);
    var m = new de;
    m.setAttribute("position", new ee(p, 3)), m.setAttribute("color", new ee(f, 3));
    var g = new Hr({
        vertexColors: !0,
        toneMapped: !1
    });
    Jr.call(this, m, g), this.type = "PolarGridHelper"
}
ch.prototype = Object.create(X.prototype), ch.prototype.constructor = ch, ch.prototype.dispose = function() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose()
}, ch.prototype.update = function() {
    var t = this.children[0];
    if (void 0 !== this.color) this.material.color.set(this.color);
    else {
        var e = t.geometry.getAttribute("color");
        oh.copy(this.light.color), sh.copy(this.light.groundColor);
        for (var i = 0, n = e.count; i < n; i++) {
            var r = i < n / 2 ? oh : sh;
            e.setXYZ(i, r.r, r.g, r.b)
        }
        e.needsUpdate = !0
    }
    t.lookAt(ah.setFromMatrixPosition(this.light.matrixWorld).negate())
}, hh.prototype = Object.assign(Object.create(Jr.prototype), {
    constructor: hh,
    copy: function(t) {
        return Jr.prototype.copy.call(this, t), this.geometry.copy(t.geometry), this.material.copy(t.material), this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
}), lh.prototype = Object.create(Jr.prototype), lh.prototype.constructor = lh;
var uh = new _,
    dh = new _,
    ph = new _;

function fh(t, e, i) {
    X.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
    var n = new de;
    n.setAttribute("position", new ee([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
    var r = new Hr({
        fog: !1,
        toneMapped: !1
    });
    this.lightPlane = new Xr(n, r), this.add(this.lightPlane), (n = new de).setAttribute("position", new ee([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Xr(n, r), this.add(this.targetLine), this.update()
}
fh.prototype = Object.create(X.prototype), fh.prototype.constructor = fh, fh.prototype.dispose = function() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
}, fh.prototype.update = function() {
    uh.setFromMatrixPosition(this.light.matrixWorld), dh.setFromMatrixPosition(this.light.target.matrixWorld), ph.subVectors(dh, uh), this.lightPlane.lookAt(dh), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(dh), this.targetLine.scale.z = ph.length()
};
var mh = new _,
    gh = new Ve;

function vh(t) {
    var e = new de,
        i = new Hr({
            color: 16777215,
            vertexColors: !0,
            toneMapped: !1
        }),
        n = [],
        r = [],
        a = {},
        o = new Ft(16755200),
        s = new Ft(16711680),
        c = new Ft(43775),
        h = new Ft(16777215),
        l = new Ft(3355443);

    function u(t, e, i) {
        d(t, i), d(e, i)
    }

    function d(t, e) {
        n.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === a[t] && (a[t] = []), a[t].push(n.length / 3 - 1)
    }
    u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", h), u("p", "c", l), u("cn1", "cn2", l), u("cn3", "cn4", l), u("cf1", "cf2", l), u("cf3", "cf4", l), e.setAttribute("position", new ee(n, 3)), e.setAttribute("color", new ee(r, 3)), Jr.call(this, e, i), this.type = "CameraHelper", this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
}

function yh(t, e, i, n, r, a, o) {
    mh.set(r, a, o).unproject(n);
    var s = e[t];
    if (void 0 !== s)
        for (var c = i.getAttribute("position"), h = 0, l = s.length; h < l; h++) c.setXYZ(s[h], mh.x, mh.y, mh.z)
}
vh.prototype = Object.create(Jr.prototype), vh.prototype.constructor = vh, vh.prototype.update = function() {
    var t = this.geometry,
        e = this.pointMap;
    gh.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), yh("c", e, t, gh, 0, 0, -1), yh("t", e, t, gh, 0, 0, 1), yh("n1", e, t, gh, -1, -1, -1), yh("n2", e, t, gh, 1, -1, -1), yh("n3", e, t, gh, -1, 1, -1), yh("n4", e, t, gh, 1, 1, -1), yh("f1", e, t, gh, -1, -1, 1), yh("f2", e, t, gh, 1, -1, 1), yh("f3", e, t, gh, -1, 1, 1), yh("f4", e, t, gh, 1, 1, 1), yh("u1", e, t, gh, .7, 1.1, -1), yh("u2", e, t, gh, -.7, 1.1, -1), yh("u3", e, t, gh, 0, 2, -1), yh("cf1", e, t, gh, -1, 0, 1), yh("cf2", e, t, gh, 1, 0, 1), yh("cf3", e, t, gh, 0, -1, 1), yh("cf4", e, t, gh, 0, 1, 1), yh("cn1", e, t, gh, -1, 0, -1), yh("cn2", e, t, gh, 1, 0, -1), yh("cn3", e, t, gh, 0, -1, -1), yh("cn4", e, t, gh, 0, 1, -1), t.getAttribute("position").needsUpdate = !0
};
var xh = new ct;

function bh(t, e) {
    this.object = t, void 0 === e && (e = 16776960);
    var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
        n = new Float32Array(24),
        r = new de;
    r.setIndex(new Xt(i, 1)), r.setAttribute("position", new Xt(n, 3)), Jr.call(this, r, new Hr({
        color: e,
        toneMapped: !1
    })), this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update()
}

function _h(t, e) {
    this.type = "Box3Helper", this.box = t, e = e || 16776960;
    var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
        n = new de;
    n.setIndex(new Xt(i, 1)), n.setAttribute("position", new ee([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Jr.call(this, n, new Hr({
        color: e,
        toneMapped: !1
    })), this.type = "Box3Helper", this.geometry.computeBoundingSphere()
}

function wh(t, e, i) {
    this.plane = t, this.size = void 0 === e ? 1 : e;
    var n = void 0 !== i ? i : 16776960,
        r = new de;
    r.setAttribute("position", new ee([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), Xr.call(this, r, new Hr({
        color: n,
        toneMapped: !1
    })), this.type = "PlaneHelper";
    var a = new de;
    a.setAttribute("position", new ee([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new Pe(a, new Wt({
        color: n,
        opacity: .2,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !1
    })))
}
bh.prototype = Object.create(Jr.prototype), bh.prototype.constructor = bh, bh.prototype.update = function(t) {
    if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && xh.setFromObject(this.object), !xh.isEmpty()) {
        var e = xh.min,
            i = xh.max,
            n = this.geometry.attributes.position,
            r = n.array;
        r[0] = i.x, r[1] = i.y, r[2] = i.z, r[3] = e.x, r[4] = i.y, r[5] = i.z, r[6] = e.x, r[7] = e.y, r[8] = i.z, r[9] = i.x, r[10] = e.y, r[11] = i.z, r[12] = i.x, r[13] = i.y, r[14] = e.z, r[15] = e.x, r[16] = i.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = i.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere()
    }
}, bh.prototype.setFromObject = function(t) {
    return this.object = t, this.update(), this
}, bh.prototype.copy = function(t) {
    return Jr.prototype.copy.call(this, t), this.object = t.object, this
}, bh.prototype.clone = function() {
    return (new this.constructor).copy(this)
}, _h.prototype = Object.create(Jr.prototype), _h.prototype.constructor = _h, _h.prototype.updateMatrixWorld = function(t) {
    var e = this.box;
    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), X.prototype.updateMatrixWorld.call(this, t))
}, wh.prototype = Object.create(Xr.prototype), wh.prototype.constructor = wh, wh.prototype.updateMatrixWorld = function(t) {
    var e = -this.plane.constant;
    Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), X.prototype.updateMatrixWorld.call(this, t)
};
var Mh, Sh, Th = new _;

function Eh(t, e, i, n, r, a) {
    X.call(this), this.type = "ArrowHelper", void 0 === t && (t = new _(0, 0, 1)), void 0 === e && (e = new _(0, 0, 0)), void 0 === i && (i = 1), void 0 === n && (n = 16776960), void 0 === r && (r = .2 * i), void 0 === a && (a = .2 * r), void 0 === Mh && ((Mh = new de).setAttribute("position", new ee([0, 0, 0, 0, 1, 0], 3)), (Sh = new bo(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new Xr(Mh, new Hr({
        color: n,
        toneMapped: !1
    })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Pe(Sh, new Wt({
        color: n,
        toneMapped: !1
    })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a)
}

function Ah(t) {
    var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
        i = new de;
    i.setAttribute("position", new ee(e, 3)), i.setAttribute("color", new ee([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
    var n = new Hr({
        vertexColors: !0,
        toneMapped: !1
    });
    Jr.call(this, i, n), this.type = "AxesHelper"
}
Eh.prototype = Object.create(X.prototype), Eh.prototype.constructor = Eh, Eh.prototype.setDirection = function(t) {
    if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);
    else if (t.y < -.99999) this.quaternion.set(1, 0, 0, 0);
    else {
        Th.set(t.z, 0, -t.x).normalize();
        var e = Math.acos(t.y);
        this.quaternion.setFromAxisAngle(Th, e)
    }
}, Eh.prototype.setLength = function(t, e, i) {
    void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
}, Eh.prototype.setColor = function(t) {
    this.line.material.color.set(t), this.cone.material.color.set(t)
}, Eh.prototype.copy = function(t) {
    return X.prototype.copy.call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this
}, Eh.prototype.clone = function() {
    return (new this.constructor).copy(this)
}, Ah.prototype = Object.create(Jr.prototype), Ah.prototype.constructor = Ah;
var Lh = [.125, .215, .35, .446, .526, .582],
    Rh = 5 + Lh.length,
    {
        _lodPlanes: Ph,
        _sizeLods: Ch,
        _sigmas: Oh
    } = (new Gs, function() {
        for (var t = [], e = [], i = [], n = 8, r = 0; r < Rh; r++) {
            var a = Math.pow(2, n);
            e.push(a);
            var o = 1 / a;
            r > 4 ? o = Lh[r - 8 + 4 - 1] : 0 == r && (o = 0), i.push(o);
            for (var s = 1 / (a - 1), c = -s / 2, h = 1 + s / 2, l = [c, c, h, c, h, h, c, c, h, h, c, h], u = new Float32Array(108), d = new Float32Array(72), p = new Float32Array(36), f = 0; f < 6; f++) {
                var m = f % 3 * 2 / 3 - 1,
                    g = f > 2 ? 0 : -1,
                    v = [m, g, 0, m + 2 / 3, g, 0, m + 2 / 3, g + 1, 0, m, g, 0, m + 2 / 3, g + 1, 0, m, g + 1, 0];
                u.set(v, 18 * f), d.set(l, 12 * f);
                var y = [f, f, f, f, f, f];
                p.set(y, 6 * f)
            }
            var x = new de;
            x.setAttribute("position", new Xt(u, 3)), x.setAttribute("uv", new Xt(d, 2)), x.setAttribute("faceIndex", new Xt(p, 1)), t.push(x), n > 4 && n--
        }
        return {
            _lodPlanes: t,
            _sizeLods: e,
            _sigmas: i
        }
    }());

function Ih(t) {
    console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), ys.call(this, t), this.type = "catmullrom"
}
ls.create = function(t, e) {
    return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(ls.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
}, Object.assign(Ps.prototype, {
    createPointsGeometry: function(t) {
        console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
        var e = this.getPoints(t);
        return this.createGeometry(e)
    },
    createSpacedPointsGeometry: function(t) {
        console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
        var e = this.getSpacedPoints(t);
        return this.createGeometry(e)
    },
    createGeometry: function(t) {
        console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
        for (var e = new Ue, i = 0, n = t.length; i < n; i++) {
            var r = t[i];
            e.vertices.push(new _(r.x, r.y, r.z || 0))
        }
        return e
    }
}), Object.assign(Cs.prototype, {
    fromPoints: function(t) {
        return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
    }
}), Ih.prototype = Object.create(ys.prototype), Object.assign(Ih.prototype, {
    initFromArray: function() {
        console.error("THREE.Spline: .initFromArray() has been removed.")
    },
    getControlPointsArray: function() {
        console.error("THREE.Spline: .getControlPointsArray() has been removed.")
    },
    reparametrizeByArcLength: function() {
        console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
    }
}), hh.prototype.setColors = function() {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
}, nh.prototype.update = function() {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
}, Object.assign(es.prototype, {
    extractUrlBase: function(t) {
        return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Ys(t)
    }
}), es.Handlers = {
    add: function() {
        console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
    },
    get: function() {
        console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
    }
}, Object.assign($s.prototype, {
    setTexturePath: function(t) {
        return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t)
    }
}), Object.assign(Xc.prototype, {
    center: function(t) {
        return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
    },
    empty: function() {
        return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
    },
    isIntersectionBox: function(t) {
        return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
    },
    size: function(t) {
        return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
    }
}), Object.assign(ct.prototype, {
    center: function(t) {
        return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
    },
    empty: function() {
        return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
    },
    isIntersectionBox: function(t) {
        return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
    },
    isIntersectionSphere: function(t) {
        return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
    },
    size: function(t) {
        return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
    }
}), Object.assign(ut.prototype, {
    empty: function() {
        return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
    }
}), Je.prototype.setFromMatrix = function(t) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t)
}, Jc.prototype.center = function(t) {
    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
}, Object.assign(h, {
    random16: function() {
        return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
    },
    nearestPowerOfTwo: function(t) {
        return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), h.floorPowerOfTwo(t)
    },
    nextPowerOfTwo: function(t) {
        return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), h.ceilPowerOfTwo(t)
    }
}), Object.assign(u.prototype, {
    flattenToArrayOffset: function(t, e) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
    },
    multiplyVector3: function(t) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
    },
    multiplyVector3Array: function() {
        console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
    },
    applyToBufferAttribute: function(t) {
        return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
    },
    applyToVector3Array: function() {
        console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
    }
}), Object.assign(R.prototype, {
    extractPosition: function(t) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
    },
    flattenToArrayOffset: function(t, e) {
        return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
    },
    getPosition: function() {
        return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new _).setFromMatrixColumn(this, 3)
    },
    setRotationFromQuaternion: function(t) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
    },
    multiplyToArray: function() {
        console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
    },
    multiplyVector3: function(t) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
    },
    multiplyVector4: function(t) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
    },
    multiplyVector3Array: function() {
        console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
    },
    rotateAxis: function(t) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
    },
    crossVector: function(t) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
    },
    translate: function() {
        console.error("THREE.Matrix4: .translate() has been removed.")
    },
    rotateX: function() {
        console.error("THREE.Matrix4: .rotateX() has been removed.")
    },
    rotateY: function() {
        console.error("THREE.Matrix4: .rotateY() has been removed.")
    },
    rotateZ: function() {
        console.error("THREE.Matrix4: .rotateZ() has been removed.")
    },
    rotateByAxis: function() {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
    },
    applyToBufferAttribute: function(t) {
        return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
    },
    applyToVector3Array: function() {
        console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
    },
    makeFrustum: function(t, e, i, n, r, a) {
        return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, n, i, r, a)
    }
}), Mt.prototype.isIntersectionLine = function(t) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
}, y.prototype.multiplyVector3 = function(t) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
}, Object.assign(xt.prototype, {
    isIntersectionBox: function(t) {
        return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
    },
    isIntersectionPlane: function(t) {
        return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
    },
    isIntersectionSphere: function(t) {
        return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
    }
}), Object.assign(Dt.prototype, {
    area: function() {
        return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
    },
    barycoordFromPoint: function(t, e) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e)
    },
    midpoint: function(t) {
        return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t)
    },
    normal: function(t) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t)
    },
    plane: function(t) {
        return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t)
    }
}), Object.assign(Dt, {
    barycoordFromPoint: function(t, e, i, n, r) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Dt.getBarycoord(t, e, i, n, r)
    },
    normal: function(t, e, i, n) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Dt.getNormal(t, e, i, n)
    }
}), Object.assign(Os.prototype, {
    extractAllPoints: function(t) {
        return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
    },
    extrude: function(t) {
        return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new io(this, t)
    },
    makeGeometry: function(t) {
        return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new mo(this, t)
    }
}), Object.assign(l.prototype, {
    fromAttribute: function(t, e, i) {
        return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
    },
    distanceToManhattan: function(t) {
        return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
    },
    lengthManhattan: function() {
        return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
    }
}), Object.assign(_.prototype, {
    setEulerFromRotationMatrix: function() {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
    },
    setEulerFromQuaternion: function() {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
    },
    getPositionFromMatrix: function(t) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
    },
    getScaleFromMatrix: function(t) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
    },
    getColumnFromMatrix: function(t, e) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
    },
    applyProjection: function(t) {
        return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
    },
    fromAttribute: function(t, e, i) {
        return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
    },
    distanceToManhattan: function(t) {
        return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
    },
    lengthManhattan: function() {
        return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
    }
}), Object.assign(m.prototype, {
    fromAttribute: function(t, e, i) {
        return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
    },
    lengthManhattan: function() {
        return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
    }
}), Object.assign(Ue.prototype, {
    computeTangents: function() {
        console.error("THREE.Geometry: .computeTangents() has been removed.")
    },
    computeLineDistances: function() {
        console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
    },
    applyMatrix: function(t) {
        return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
    }
}), Object.assign(X.prototype, {
    getChildByName: function(t) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
    },
    renderDepth: function() {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
    },
    translate: function(t, e) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
    },
    getWorldRotation: function() {
        console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
    },
    applyMatrix: function(t) {
        return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
    }
}), Object.defineProperties(X.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
        },
        set: function(t) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
}), Object.assign(Pe.prototype, {
    setDrawMode: function() {
        console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
    }
}), Object.defineProperties(Pe.prototype, {
    drawMode: {
        get: function() {
            return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0
        },
        set: function() {
            console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
        }
    }
}), Object.defineProperties(Pr.prototype, {
    objects: {
        get: function() {
            return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
        }
    }
}), Object.defineProperty(Dr.prototype, "useVertexTexture", {
    get: function() {
        console.warn("THREE.Skeleton: useVertexTexture has been removed.")
    },
    set: function() {
        console.warn("THREE.Skeleton: useVertexTexture has been removed.")
    }
}), Cr.prototype.initBones = function() {
    console.error("THREE.SkinnedMesh: initBones() has been removed.")
}, Object.defineProperty(ls.prototype, "__arcLengthDivisions", {
    get: function() {
        return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
    },
    set: function(t) {
        console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
    }
}), je.prototype.setLens = function(t, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
}, Object.defineProperties(Is.prototype, {
    onlyShadow: {
        set: function() {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
        }
    },
    shadowCameraLeft: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
        }
    },
    shadowCameraRight: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
        }
    },
    shadowCameraTop: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
        }
    },
    shadowCameraBottom: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
        }
    },
    shadowCameraNear: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
        }
    },
    shadowCameraFar: {
        set: function(t) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
        }
    },
    shadowCameraVisible: {
        set: function() {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    },
    shadowBias: {
        set: function(t) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
        }
    },
    shadowDarkness: {
        set: function() {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    },
    shadowMapWidth: {
        set: function(t) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
        }
    },
    shadowMapHeight: {
        set: function(t) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
        }
    }
}), Object.defineProperties(Xt.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
        }
    },
    dynamic: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), 35048 === this.usage
        },
        set: function() {
            console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(35048)
        }
    }
}), Object.assign(Xt.prototype, {
    setDynamic: function(t) {
        return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? 35048 : 35044), this
    },
    copyIndicesArray: function() {
        console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
    },
    setArray: function() {
        console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
    }
}), Object.assign(de.prototype, {
    addIndex: function(t) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
    },
    addAttribute: function(t, e) {
        return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new Xt(arguments[1], arguments[2])))
    },
    addDrawCall: function(t, e, i) {
        void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
    },
    clearDrawCalls: function() {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
    },
    computeTangents: function() {
        console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
    },
    computeOffsets: function() {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
    },
    removeAttribute: function(t) {
        return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t)
    },
    applyMatrix: function(t) {
        return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
    }
}), Object.defineProperties(de.prototype, {
    drawcalls: {
        get: function() {
            return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
        }
    },
    offsets: {
        get: function() {
            return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
        }
    }
}), Object.defineProperties(Vc.prototype, {
    linePrecision: {
        get: function() {
            return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold
        },
        set: function(t) {
            console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = t
        }
    }
}), Object.defineProperties(rr.prototype, {
    dynamic: {
        get: function() {
            return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), 35048 === this.usage
        },
        set: function(t) {
            console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(t)
        }
    }
}), Object.assign(rr.prototype, {
    setDynamic: function(t) {
        return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? 35048 : 35044), this
    },
    setArray: function() {
        console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
    }
}), Object.assign(no.prototype, {
    getArrays: function() {
        console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
    },
    addShapeList: function() {
        console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
    },
    addShape: function() {
        console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
    }
}), Object.defineProperties(Hc.prototype, {
    dynamic: {
        set: function() {
            console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
        }
    },
    onUpdate: {
        value: function() {
            return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
        }
    }
}), Object.defineProperties(jt.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        }
    },
    overdraw: {
        get: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE.Material: .wrapRGB has been removed."), new Ft
        }
    },
    shading: {
        get: function() {
            console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
        },
        set: function(t) {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
        }
    },
    stencilMask: {
        get: function() {
            return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
        },
        set: function(t) {
            console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t
        }
    }
}), Object.defineProperties(Po.prototype, {
    metal: {
        get: function() {
            return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
        },
        set: function() {
            console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
        }
    }
}), Object.defineProperties(ke.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
        },
        set: function(t) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
        }
    }
}), Object.assign(er.prototype, {
    clearTarget: function(t, e, i, n) {
        console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, i, n)
    },
    animate: function(t) {
        console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t)
    },
    getCurrentRenderTarget: function() {
        return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
    },
    getMaxAnisotropy: function() {
        return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
    },
    getPrecision: function() {
        return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
    },
    resetGLState: function() {
        return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
    },
    supportsFloatTextures: function() {
        return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
    },
    supportsHalfFloatTextures: function() {
        return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
    },
    supportsStandardDerivatives: function() {
        return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
    },
    supportsCompressedTextureS3TC: function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
    },
    supportsCompressedTexturePVRTC: function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
    },
    supportsBlendMinMax: function() {
        return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
    },
    supportsVertexTextures: function() {
        return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
    },
    supportsInstancedArrays: function() {
        return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
    },
    enableScissorTest: function(t) {
        console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
    },
    initMaterial: function() {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
    },
    addPrePlugin: function() {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
    },
    addPostPlugin: function() {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
    },
    updateShadowMap: function() {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
    },
    setFaceCulling: function() {
        console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
    },
    allocTextureUnit: function() {
        console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
    },
    setTexture: function() {
        console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
    },
    setTexture2D: function() {
        console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
    },
    setTextureCube: function() {
        console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
    },
    getActiveMipMapLevel: function() {
        return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
    }
}), Object.defineProperties(er.prototype, {
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
        }
    },
    shadowMapCullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    context: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
        }
    },
    vr: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
        }
    },
    gammaInput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
        }
    },
    gammaOutput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? 3001 : 3e3
        }
    }
}), Object.defineProperties(Xn.prototype, {
    cullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    renderReverseSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        }
    },
    renderSingleSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        }
    }
}), Object.defineProperties(g.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
        },
        set: function(t) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
        }
    }
}), Object.defineProperties(_c.prototype, {
    load: {
        value: function(t) {
            console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
            var e = this;
            return (new lc).load(t, (function(t) {
                e.setBuffer(t)
            })), this
        }
    },
    startTime: {
        set: function() {
            console.warn("THREE.Audio: .startTime is now .play( delay ).")
        }
    }
}), Ac.prototype.getData = function() {
    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
}, We.prototype.updateCubeMap = function(t, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
}, d.crossOrigin = void 0, d.loadTexture = function(t, e, i, n) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    var r = new hs;
    r.setCrossOrigin(this.crossOrigin);
    var a = r.load(t, i, void 0, n);
    return e && (a.mapping = e), a
}, d.loadTextureCube = function(t, e, i, n) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    var r = new cs;
    r.setCrossOrigin(this.crossOrigin);
    var a = r.load(t, i, void 0, n);
    return e && (a.mapping = e), a
}, d.loadCompressedTexture = function() {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
}, d.loadCompressedTextureCube = function() {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
        revision: "116"
    }
}));
const Dh = {
        ad: [42.5, 1.5],
        ae: [24, 54],
        af: [33, 65],
        al: [41, 20],
        am: [40, 45],
        an: [12.25, -68.75],
        ao: [-12.5, 18.5],
        ap: [35, 105],
        aq: [-90, 0],
        ar: [-34, -64],
        at: [47.3333, 13.3333],
        au: [-27, 133],
        aw: [12.5, -69.9667],
        az: [40.5, 47.5],
        ba: [44, 18],
        bd: [24, 90],
        be: [50.8333, 4],
        bf: [13, -2],
        bg: [43, 25],
        bh: [26, 50.55],
        bi: [-3.5, 30],
        bj: [9.5, 2.25],
        bn: [4.5, 114.6667],
        bo: [-17, -65],
        br: [-10, -55],
        bt: [27.5, 90.5],
        bv: [-54.4333, 3.4],
        bw: [-22, 24],
        bz: [17.25, -88.75],
        ca: [54, -100],
        cd: [0, 25],
        cf: [7, 21],
        ch: [47, 8],
        cl: [-30, -71],
        cm: [6, 12],
        cn: [35, 105],
        co: [4, -72],
        cr: [10, -84],
        cy: [35, 33],
        cz: [49.75, 15.5],
        de: [51, 9],
        dj: [11.5, 43],
        dk: [56, 10],
        do: [19, -70.6667],
        dz: [28, 3],
        ec: [-2, -77.5],
        ee: [59, 26],
        eg: [27, 30],
        eh: [24.5, -13],
        er: [15, 39],
        es: [40, -4],
        et: [8, 38],
        eu: [47, 8],
        fi: [64, 26],
        fo: [62, -7],
        fr: [46, 2],
        ga: [-1, 11.75],
        gb: [54, -2],
        ge: [42, 43.5],
        gf: [4, -53],
        gh: [8, -2],
        gi: [36.1833, -5.3667],
        gl: [72, -40],
        gm: [13.4667, -16.5667],
        gn: [11, -10],
        gq: [2, 10],
        gr: [39, 22],
        gt: [15.5, -90.25],
        gw: [12, -15],
        gy: [5, -59],
        hk: [22.25, 114.1667],
        hn: [15, -86.5],
        hr: [45.1667, 15.5],
        ht: [19, -72.4167],
        hu: [47, 20],
        id: [-5, 120],
        ie: [53, -8],
        il: [31.5, 34.75],
        in: [20, 77],
        is: [65, -18],
        it: [42.8333, 12.8333],
        jm: [18.25, -77.5],
        jo: [31, 36],
        jp: [36, 138],
        ke: [1, 38],
        kg: [41, 75],
        kh: [13, 105],
        kr: [37, 127.5],
        kw: [29.3375, 47.6581],
        kz: [48, 68],
        la: [18, 105],
        lb: [33.8333, 35.8333],
        li: [47.1667, 9.5333],
        lk: [7, 81],
        ls: [-29.5, 28.5],
        lt: [56, 24],
        lu: [49.75, 6.1667],
        lv: [57, 25],
        ly: [25, 17],
        ma: [32, -5],
        mc: [43.7333, 7.4],
        md: [47, 29],
        me: [42, 19],
        mg: [-20, 47],
        mk: [41.8333, 22],
        ml: [17, -4],
        mn: [46, 105],
        mo: [22.1667, 113.55],
        mr: [20, -12],
        mw: [-13.5, 34],
        mx: [23, -102],
        my: [2.5, 112.5],
        mz: [-18.25, 35],
        na: [-22, 17],
        ne: [16, 8],
        ng: [10, 8],
        ni: [13, -85],
        nl: [52.5, 5.75],
        no: [62, 10],
        np: [28, 84],
        nz: [-41, 174],
        om: [21, 57],
        pa: [9, -80],
        pe: [-10, -76],
        pg: [-6, 147],
        ph: [13, 122],
        pk: [30, 70],
        pl: [52, 20],
        pm: [46.8333, -56.3333],
        ps: [32, 35.25],
        pt: [39.5, -8],
        py: [-23, -58],
        qa: [25.5, 51.25],
        ro: [46, 25],
        rs: [44, 21],
        ru: [60, 100],
        rw: [-2, 30],
        sa: [25, 45],
        se: [62, 15],
        sg: [1.3667, 103.8],
        si: [46, 15],
        sj: [78, 20],
        sk: [48.6667, 19.5],
        sl: [8.5, -11.5],
        sm: [43.7667, 12.4167],
        sn: [14, -14],
        so: [10, 49],
        sr: [4, -56],
        sv: [13.8333, -88.9167],
        sz: [-26.5, 31.5],
        td: [15, 19],
        tg: [8, 1.1667],
        th: [15, 100],
        tj: [39, 71],
        tn: [34, 9],
        tr: [39, 35],
        tt: [11, -61],
        tw: [23.5, 121],
        tz: [-6, 35],
        ua: [49, 32],
        ug: [1, 32],
        us: [38, -97],
        uy: [-33, -56],
        uz: [41, 64],
        va: [41.9, 12.45],
        ve: [8, -66],
        vn: [16, 106],
        ye: [15, 48],
        za: [-29, 24],
        zm: [-15, 30]
    },
    Nh = Math.PI,
    zh = Nh / 2,
    Uh = 180 / Nh,
    Fh = Nh / 180,
    Bh = Math.atan2,
    Gh = Math.cos,
    Hh = Math.sin,
    kh = Math.sqrt;

function Vh(t) {
    return (t = Hh(t / 2)) * t
}

function jh(t, e) {
    const i = t[0] * Fh,
        n = t[1] * Fh,
        r = e[0] * Fh,
        a = e[1] * Fh,
        o = Gh(n),
        s = Hh(n),
        c = Gh(a),
        h = Hh(a),
        l = o * Gh(i),
        u = o * Hh(i),
        d = c * Gh(r),
        p = c * Hh(r),
        f = 2 * ((m = kh(Vh(a - n) + o * c * Vh(r - i))) > 1 ? zh : m < -1 ? -zh : Math.asin(m));
    var m;
    const g = Hh(f),
        v = f ? function(t) {
            const e = Hh(t *= f) / g,
                i = Hh(f - t) / g,
                n = i * l + e * d,
                r = i * u + e * p,
                a = i * s + e * h;
            return [Bh(r, n) * Uh, Bh(a, kh(n * n + r * r)) * Uh]
        } : function() {
            return [i * Uh, n * Uh]
        };
    return v.distance = f, v
}
const Wh = Math.PI / 180;

function qh(t, e, i) {
    const n = (90 - t) * Wh,
        r = e * Wh;
    return new _(-i * Math.sin(n) * Math.cos(r), i * Math.cos(n), i * Math.sin(n) * Math.sin(r))
}
class Xh extends Kn {
    constructor(e, n, a, o, s, c, h) {
        super(), t(this, "animationFrame", void 0), t(this, "drawAnimatedLine", () => {
            if (!this.active) return;
            let t = this.geometry.drawRange.count;
            const e = performance.now() - this.startTime;
            this.material.uniforms.u_time.value = e;
            const n = i.easeOutQuart(e, 0, 1, 0);
            if (t = Math.min(3e3, Math.ceil(3e3 * n)), this.active && t < 3e3) {
                const e = this.circle1.scale.x;
                if (e < .35 && this.circle1.scale.set(e + .01, e + .01, e + .01), t > 1500) {
                    const t = this.circle2.scale.x;
                    t < .35 && this.circle2.scale.set(t + .015, t + .015, t + .015)
                }
                this.geometry.setDrawRange(0, t)
            }
            this.animationFrame = requestAnimationFrame(this.drawAnimatedLine)
        }), t(this, "drawStaticLine", () => {
            this.geometry.setDrawRange(0, 3e3), this.circle1.scale.set(.35, .35, .35), this.circle2.scale.set(.35, .35, .35)
        }), t(this, "eraseLine", () => {
            const t = this.geometry.drawRange.count,
                e = this.geometry.drawRange.start;
            if (this.material.uniforms.u_time.value = performance.now() - this.startTime, e > t) return;
            const i = this.circle1.scale.x,
                n = this.circle2.scale.x;
            if (i > .03) {
                const t = i - .01;
                this.circle1.scale.set(t, t, t)
            }
            if (e > 1500 && n > .03) {
                const t = n - .015;
                this.circle2.scale.set(t, t, t)
            }
            this.geometry.setDrawRange(e + 48, t), this.animationFrame = requestAnimationFrame(this.eraseLine)
        }), this.colors = a, this.texture = o, this.isStatic = h, this.startLat = e[0], this.startLng = e[1];
        const l = n[0],
            u = n[1],
            d = qh(this.startLat, this.startLng, c),
            p = qh(l, u, 1.002 * c),
            f = r.clamp(.5 * d.distanceTo(p), 160, 500),
            m = jh([this.startLng, this.startLat], [u, l]),
            g = m(.25),
            v = m(.75),
            y = new Ms(d, qh(g[1], g[0], c + f), qh(v[1], v[0], c + f), p);
        this.geometry = new Ma(y, 44, .2 + c / 1200, 8, !1), this.material = new ke({
            uniforms: {
                u_time: {
                    type: "f",
                    value: 0
                },
                u_texture: {
                    type: "t",
                    value: null
                },
                speedEpsilon: {
                    type: "f",
                    value: 4e-4
                }
            },
            vertexShader: "\n        varying vec2 vUv;\n\n        void main() {\n          vUv = uv;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n        }\n      ",
            fragmentShader: "\n        uniform float u_time;\n        uniform sampler2D u_texture;\n        varying vec2 vUv;\n        uniform float speedEpsilon;\n\n        void main() {\n          float ramp = vUv.x * 0.5;\n          float pct = fract(ramp - u_time * speedEpsilon);\n          vec4 color = vec4(0.0, 0.0, 0.0, 1.0);\n          color = texture2D(u_texture, vec2(pct, 0.6));\n          gl_FragColor = vec4(color);\n        }\n      "
        }), this.active = !1, this.mesh = new Pe(this.geometry, this.material), this.add(this.mesh), this.material.uniforms.u_texture.value = this.texture, this.circleMaterial1 = new Wt({
            map: s,
            color: a[0],
            transparent: !0,
            opacity: 0,
            side: 2
        }), this.circleMaterial2 = new Wt({
            map: s,
            color: a[1],
            transparent: !0,
            opacity: 0,
            side: 2
        }), this.circleGeometry = new ti(.3 * c, .3 * c, 2), this.circle1 = new Pe(this.circleGeometry, this.circleMaterial1), this.circle2 = new Pe(this.circleGeometry, this.circleMaterial2), this.circle1.scale.set(.01, .01, .01), this.circle2.scale.set(.01, .01, .01), this.circle1.position.set(d.x, d.y, d.z), this.circle2.position.set(p.x, p.y, p.z), this.circle1.rotation.set(Math.PI, Math.PI, Math.PI), this.circle2.rotation.set(Math.PI, Math.PI, Math.PI), this.circle1.lookAt(new _(0, 0, 0)), this.circle2.lookAt(new _(0, 0, 0)), this.add(this.circle1), this.add(this.circle2), this.showLine()
    }
    showLine() {
        this.active = !0, this.geometry.setDrawRange(0, 1), this.isStatic ? this.drawStaticLine() : (this.startTime = performance.now(), this.drawAnimatedLine())
    }
    hideLine() {
        this.active = !1, this.eraseLine()
    }
    disposeLine() {
        this.mesh.geometry.dispose(), this.texture.dispose(), this.mesh.material.dispose(), this.circle1.geometry.dispose(), this.circle1.material.dispose(), this.circle2.geometry.dispose(), this.circle2.material.dispose(), this.children = null
    }
    pause() {
        cancelAnimationFrame(this.animationFrame)
    }
    play() {
        this.isStatic ? this.drawStaticLine() : this.active ? this.animationFrame = requestAnimationFrame(this.drawAnimatedLine) : this.animationFrame = requestAnimationFrame(this.eraseLine)
    }
}

function Yh(t, e) {
    const i = new _;
    return i.subVectors(e, t).normalize(), new l(1 - (.5 + Math.atan2(i.z, i.x) / (2 * Math.PI)), .5 + Math.asin(i.y) / Math.PI)
}

function Zh(t, e) {
    const i = e.width,
        n = e.height,
        r = 4 * Math.floor(t.x * i) + Math.floor(t.y * n) * (4 * i);
    return e.data.slice(r, r + 4)
}
class Jh extends Kn {
    constructor(e, i, n) {
        super(), t(this, "callback", void 0), this.callback = i, this.isStatic = n, this.rotation.x = -Math.PI, this.rotation.z = -Math.PI, this.radius = e, this.isDragging = !1, this.dragTime = 0, (new ss).load("https://images.ctfassets.net/fzn2n1nzq965/11064gUb2CgTJXKVwAt5J9/297a98a65d04d4fbb979072ce60466ab/map_fill-a78643e8.png", t => {
            const e = function(t) {
                const e = t.width,
                    i = t.height,
                    n = document.createElement("canvas");
                n.width = e, n.height = i;
                const r = n.getContext("2d");
                return r.drawImage(t, 0, 0), r.getImageData(0, 0, e, i)
            }(t);
            this.mapLoaded(e)
        })
    }
    mapLoaded(t) {
        const e = this.radius / 450,
            i = 1e4 + Math.floor(this.radius / 600 * 7e4),
            n = this.radius,
            r = new Mo(1.8 * e, 5),
            
            a = new Ue,
            o = [],
            s = [],
            c = new _;
        for (let e = i; e >= 0; e -= 1) {
            const h = Math.acos(2 * e / i - 1), 
                l = Math.sqrt(i * Math.PI) * h;
            if (c.setFromSphericalCoords(n, h, l), a.copy(r), a.lookAt(c), a.translate(c.x, c.y, c.z), a.computeBoundingSphere(), Zh(Yh(a.boundingSphere.center, this.position), t)[3] > 0) {
                const t = Math.random();
                for (let e = 0; e < a.faces.length; e += 1) {
                    const i = a.faces[e];
                    o.push(a.vertices[i.a].x, a.vertices[i.a].y, a.vertices[i.a].z, a.vertices[i.b].x, a.vertices[i.b].y, a.vertices[i.b].z, a.vertices[i.c].x, a.vertices[i.c].y, a.vertices[i.c].z), s.push(t, t, t)
                }
            }
            
        }
        const h = new de;
        h.setAttribute("position", new ee(o, 3)), h.setAttribute("rndId", new ee(s, 1)), this.material = new ke({
            transparent: !0,
            uniforms: {
                u_time: {
                    type: "f",
                    value: 0
                },
                u_drag_time: {
                    type: "f",
                    value: 0
                },
                u_resolution: {
                    type: "v2",
                    value: new l
                }
            },
            vertexShader: "\n        uniform float u_time;\n        uniform float u_drag_time;\n        uniform vec2 u_resolution;\n        attribute float rndId;\n        varying float vRndId;\n\n        varying float pct;\n\n        void main() {\n          vRndId = rndId;\n          vec2 st = position.xy/u_resolution;\n\n          pct = min(1.0, u_time / (1000. / max(0.2, 0.2 * sin(fract(rndId)))));\n          float vNormal = rndId + ((1.0 - rndId) * pct);\n          vNormal = rndId + ((1.0 - rndId));\n          vNormal = smoothstep(0., 1.0, vNormal);\n          if (u_drag_time > 0.) {\n            vNormal -= ((sin(u_time / 400.0 * vRndId) + 1.0) * 0.02) * min(1., u_drag_time / 1200.0);\n          }\n          vec4 modelViewPosition = modelViewMatrix * vec4(position, vNormal);\n          gl_Position = projectionMatrix * modelViewPosition;\n        }\n    ",
            fragmentShader: "\n        uniform bool u_dragging;\n        uniform float u_time;\n        uniform float u_drag_time;\n        varying float vRndId;\n        varying float pct;\n\n        void main() {\n          float v = sin(u_time / 200.0 * vRndId);\n          float alpha = pct * 0.7 + v * 0.2;\n          float r = 0.19;\n          float g = 0.42;\n          float b = 0.65;\n          float dragDur = 1200.0;\n          vec3 color = vec3(r, g, b);\n          float rInc = min(1.0, u_drag_time / dragDur) * (sin(u_drag_time / (dragDur * 0.5) + 1.0) * 0.1);\n          float gInc = min(1.0, u_drag_time / dragDur) * (sin(u_drag_time / (dragDur * 0.75) - 1.0) * 0.1);\n          float bInc = min(1.0, u_drag_time / dragDur) * (sin(u_drag_time / dragDur) * 0.1);\n          if (u_dragging) {\n            color.r = r + rInc;\n            color.g = g + gInc;\n            color.b = b + bInc;\n          }\n\n          gl_FragColor = vec4(color, alpha);\n        }\n    "
        }), this.material.side = 2; 
        const u = new Pe(h, this.material);
        
        this.add(u), this.material.uniforms.u_resolution.value.x = window.innerWidth, this.material.uniforms.u_resolution.value.y = window.innerHeight, this.startTime = performance.now(), this.dragStartTime = 0, this.callback()
    }
    startDragging() {
        this.material && !this.isStatic && (this.isDragging = !0, this.dragStartTime = performance.now(), this.material.uniforms.u_time.value = performance.now() - this.dragStartTime)
    }
    stopDragging() {
        this.isDragging = !1
    }
    updateDragTimer() {
        this.isDragging ? this.dragTime = performance.now() - this.dragStartTime : this.dragTime > .1 && (this.dragTime = Math.max(0, .9 * this.dragTime))
    }
    animate() {
        if (this.updateDragTimer(), !this.material) return;
        this.material.uniforms.u_drag_time.value = this.dragTime;
        const t = this.isStatic ? 3e3 : performance.now() - this.startTime;
        this.material.uniforms.u_time.value = t;
    }
    
}
const Qh = 2 * Math.PI,
    Kh = .1111 * Math.PI,
    $h = Math.PI,
    tl = .1 * Math.PI,
    el = -.5 * Math.PI,
    il = .25 * Math.PI,
    nl = ["https://images.ctfassets.net/fzn2n1nzq965/21KQEBsC7QG4IYZV5RuhDz/d3180249af4082f42a22cb5f3ccc8e09/arc-texture-1.png", "https://images.ctfassets.net/fzn2n1nzq965/22Apsqcv7VIDzlCuSOEzPQ/2194c40aac8bced46d48582d5d712bf6/arc-texture-2.png", "https://images.ctfassets.net/fzn2n1nzq965/79YUdAMNjtlQuuFLN0RBLG/f779fbfcc31d6360893844a29ec5fb4f/arc-texture-3.png", "https://images.ctfassets.net/fzn2n1nzq965/7ez6kk9Dk9uuhgdRLFyhZX/220a177ca8529de208f8ae3cc3b10609/arc-texture-4.png"];
export class Globe {
    constructor(i) {
        t(this, "el", void 0), t(this, "eastCountryList", ["my", "sg", "au", "nz", "hk", "jp", "in"]), t(this, "westCountryList", ["ca", "mx", "us", "br"]), t(this, "middleCountryList", ["be", "gb", "at", "dk", "ee", "fi", "fr", "gr", "de", "ie", "it", "lv", "lt", "lu", "nl", "no", "pl", "pt", "es", "sk", "si", "se", "ch", "cy", "bg", "ro", "cz"]), t(this, "liveCountryList", [...this.eastCountryList, ...this.westCountryList, ...this.middleCountryList]), t(this, "countryList", Object.keys(Dh)), t(this, "origin", new _(0, 0, 0)), t(this, "dom", {}), t(this, "mouse", new l), t(this, "isDragging", !1), t(this, "isStatic", e.disableAmbientAnimations()), t(this, "isDiscTextureLoaded", !1), t(this, "arcTexturesLoaded", 0), t(this, "globeOff", !1), t(this, "scrollTop", 0), t(this, "globeOpacity", 0), t(this, "lineCount", 0), t(this, "arcColors", [
            ['#d8d8d8', '#d8d8d8']
        ]), t(this, "scene", new Y), t(this, "globeRadius", 250 + .3 * Math.min(document.documentElement.clientWidth, 1080)), t(this, "globeSegments", Math.floor(this.globeRadius / 250 * 10) + 20), t(this, "isLoaded", !1), t(this, "loaded", []), t(this, "loading", []), t(this, "isScrolling", !1), t(this, "isRevealed", !1), t(this, "frame", 0), t(this, "touchDistanceX", void 0), t(this, "touchStartX", void 0), t(this, "touchDistanceY", void 0), t(this, "touchStartY", void 0), t(this, "oldRotationY", 0), t(this, "oldRotationX", 0), t(this, "newRotationY", 0), t(this, "newRotationX", 0), t(this, "globeRotationIncrement", .02), t(this, "targetScale", 1), t(this, "scale", 1), t(this, "oldMouseX", 0), t(this, "oldMouseY", 0), t(this, "moveX", 0), t(this, "moveY", 0), t(this, "tension", 1), t(this, "arcTextures", void 0), t(this, "windowW", void 0), t(this, "windowH", void 0), t(this, "aspectRatio", void 0), t(this, "oldInnerWidth", void 0), t(this, "camera", void 0), t(this, "renderer", void 0), t(this, "globeContainer", void 0), t(this, "globeDots", void 0), t(this, "globeFillMaterial", void 0), t(this, "globeFillSphere", void 0), t(this, "globeFill", void 0), t(this, "globeMap", void 0), t(this, "circleTexture", void 0), t(this, "linesContainer", void 0), t(this, "lineInterval", void 0), t(this, "renderAnimationFrame", void 0), t(this, "throwAnimationFrame", void 0), t(this, "initialized", !1), t(this, "currentLines", []), t(this, "handleDragStart", () => {
            this.globeDots.startDragging(), this.isDragging = !0, this.oldRotationX = this.globeContainer.rotation.x, this.oldRotationY = this.globeContainer.rotation.y, this.targetScale = this.isStatic ? 1 : .98, document.documentElement.classList.add("is-globe-dragging")
        }), t(this, "handleTouchStart", t => {
            const e = t.touches[0] || t.changedTouches[0];
            this.oldMouseX = e.pageX, this.oldMouseY = e.pageY, this.mouse.x = e.pageX, this.mouse.y = e.pageY, this.touchStartX = e.pageX, this.touchStartY = e.pageY, this.handleDragStart()
        }), t(this, "handleMouseMove", t => {
            this.mouse.x = t.clientX, this.mouse.y = t.clientY, this.handleDragging()
        }), t(this, "handleTouchMove", t => {
            const e = t.touches[0] || t.changedTouches[0];
            this.touchDistanceX = Math.abs(this.touchStartX - e.pageX), this.touchDistanceY = Math.abs(this.touchStartY - e.pageY), this.touchDistanceY > this.touchDistanceX || (this.mouse.x = e.pageX, this.mouse.y = e.pageY, this.handleDragging())
        }), t(this, "handleMouseUp", () => {
            setTimeout(() => {
                document.documentElement.classList.remove("is-globe-dragging")
            }, 20), this.isDragging = !1, (0 !== this.moveX || Math.abs(this.moveY) > 0) && this.throwGlobe(this.moveX, this.moveY), this.oldMouseX = 0, this.oldMouseY = 0, this.moveX = 0, this.moveY = 0, this.targetScale = 1, this.globeDots.stopDragging()
        }), t(this, "handleMouseDown", t => {
            document.documentElement.classList.add("is-globe-dragging"), this.oldMouseX = t.clientX, this.oldMouseY = t.clientY, this.handleDragStart()
        }), t(this, "handleDragging", () => {
            this.isDragging && (this.tension = 1 + Math.abs(this.oldRotationX), this.tension **= this.tension, this.moveX = -.003 * (this.oldMouseX - this.mouse.x), this.moveY = -.003 * (this.oldMouseY - this.mouse.y) / this.tension, this.newRotationY = this.resetRevolutions(this.oldRotationY + this.moveX), this.newRotationX = Math.max(el, Math.min(il, this.oldRotationX + this.moveY)), this.globeContainer.rotation.y = this.newRotationY, this.globeContainer.rotation.x = this.newRotationX, this.oldRotationY = this.newRotationY, this.oldRotationX = this.newRotationX, this.oldMouseX = this.mouse.x, this.oldMouseY = this.mouse.y)
        }), t(this, "setWindowSize", () => {
            this.windowW = document.documentElement.clientWidth, this.windowH = this.el.offsetHeight, this.aspectRatio = this.windowW / this.windowH, this.renderer.setSize(this.windowW, this.windowH), this.oldInnerWidth = this.windowW
        }), t(this, "handleResize", () => {
            const t = document.documentElement.clientWidth;
            (this.oldInnerWidth !== t || t > 512) && (this.setWindowSize(), this.addCamera())
        }), this.el = i
    }
    load() {
        return this.loading.push("scene"), this.el.style.height = window.outerHeight, this.dom.container = this.el, this.addRenderer(), this.addLighting(), this.addGlobe(), this.addListeners(), this.setWindowSize(), this.addCamera(), this.objectLoaded("scene"), !0
    }
    play() {
        this.initialized && !this.isStatic ? (this.currentLines.forEach(t => t.play()), this.drawLines()) : this.addLines(), this.initialized && this.isStatic || this.render(this.frame), this.initialized = !0
    }
    pause() {
        this.currentLines.forEach(t => t.pause()), cancelAnimationFrame(this.renderAnimationFrame), clearInterval(this.lineInterval)
    }
    disconnect() {
        clearInterval(this.lineInterval), cancelAnimationFrame(this.renderAnimationFrame), cancelAnimationFrame(this.throwAnimationFrame), window.removeEventListener("resize", this.handleResize), this.isStatic || (window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("mousemove", this.handleMouseMove), this.el.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchend", this.handleMouseUp), this.el.removeEventListener("mousedown", this.handleMouseDown))
    }
    setCountryList(t) {
        this.countryList = t
    }
    addCamera() {
        const t = 0.9 * this.windowH,
            e = -this.aspectRatio * this.windowH * 1,
            i = 4 * this.globeRadius;
        this.camera || (this.camera = new Gs(0, 0, 0, 0, 0, 0)), this.camera.left = e, this.camera.right = -e, this.camera.top = t, this.camera.bottom = -t, this.camera.near = -i, this.camera.far = i, this.shiftCamera(), this.camera.updateProjectionMatrix()
    }
    shiftCamera() {
        const t = 2.05 * this.globeRadius;
        this.camera.position.x = -t / 100, this.camera.position.y = .1 * this.globeRadius
    }
    addRenderer() {
        this.renderer = new er({
            antialias: !1,
            alpha: !0
        }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setClearColor(14540253, 0), this.renderer.sortObjects = !1, this.dom.container.appendChild(this.renderer.domElement)
    }
    addLighting() {
        const t = new Vs("#00000000", 1);
        this.scene.add(t);
        const e = new Bs("#00000000", 2, 0, 2);
        e.position.set(-1e3, -1100, -3300), this.scene.add(e);
        const i = new Bs("#00000000", .8, 0, 20);
        i.position.set(-3e3, 3e3, 3300), this.scene.add(i)
    }
    addGlobe() {
        this.globeContainer = new Kn, this.scene.add(this.globeContainer), this.addGlobeMap(), this.addGlobeDots(), this.addGlobeFill(), this.globeContainer.position.z = 2 * -this.globeRadius, this.globeContainer.rotation.x = Kh, this.globeContainer.rotation.y = this.isStatic ? tl : $h
    }
    addGlobeDots() {
        this.loading.push("globeDots"), this.globeDots = new Jh(this.globeRadius, () => {
            this.objectLoaded("globeDots")
        }, this.isStatic), this.globeMap.add(this.globeDots);
        
    }

    addGlobeFill() {
        this.globeFillMaterial = new Io({
            transparent: !0,
            opacity: 0,
            color: "#181818"
        }), this.globeFillSphere = new co(this.globeRadius - .1, this.globeSegments, this.globeSegments), this.globeFill = new Pe(this.globeFillSphere, this.globeFillMaterial), this.globeMap.add(this.globeFill)
    }
    addGlobeMap() {
        this.globeMap = new Kn, this.globeContainer.add(this.globeMap)
    }
    throwGlobe(t, e) {
        const i = .94 * t,
            n = .94 * e,
            r = this.globeContainer.rotation.y + i,
            a = Math.max(el, Math.min(il, this.globeContainer.rotation.x + n));
        this.globeContainer.rotation.y = this.resetRevolutions(r), this.globeContainer.rotation.x = a, (Math.abs(i) > .001 || Math.abs(n) > .001) && !1 === this.isDragging && (this.throwAnimationFrame = requestAnimationFrame(() => {
            this.throwGlobe(i, n)
        }))
    }
    addLines() {
        this.circleTexture = (new hs).load("https://images.ctfassets.net/fzn2n1nzq965/2wn0qc94lx6dbfTVt1vpuO/cf3e66080a3cddeb7275a8fefbca5134/disc_texture.png", () => {
            this.isDiscTextureLoaded = !0
        }), this.arcTextures = nl.map(t => (new hs).load(t, () => {
            this.arcTexturesLoaded += 1
        })), this.linesContainer = new Kn, this.globeContainer.add(this.linesContainer), this.drawLines()
    }
    drawLines() {
        if (!this.isStatic) return clearInterval(this.lineInterval), void(this.lineInterval = setInterval(() => {
            this.drawLine()
        }, 1e3));
        if (0 === this.lineCount)
            for (let t = 0; t < 5; t += 1) this.drawLine()
    }
    drawLine() {
        this.lineCount += 1;
        const t = this.resetRevolutions(this.globeContainer.rotation.y);
        let e = this.countryList[this.lineCount % this.countryList.length],
            i = this.liveCountryList[this.lineCount % this.liveCountryList.length];
        if (t < 5.7 && t > 4.4 || t > -2 && t < -.2 ? i = this.eastCountryList[this.lineCount % this.eastCountryList.length] : t < 4.2 && t > 2.2 || t > -4 && t < -1.7 ? ((t < -1.7 && t > -3 || t > 3 && t < 4.2) && (e = this.eastCountryList[this.lineCount % this.eastCountryList.length]), i = this.westCountryList[this.lineCount % this.westCountryList.length]) : (t < 2.2 && t > .3 || t > -6.28 && t < -4) && (i = this.middleCountryList[this.lineCount % this.middleCountryList.length]), e === i) return void this.drawLine();
        const r = Dh[e],
            a = Dh[i],
            o = this.lineCount % this.arcColors.length,
            s = this.arcColors[o],
            c = new Xh(r, a, s, this.arcTextures[o], this.circleTexture, 1.002 * this.globeRadius + .05 * Math.random(), this.isStatic);
        this.linesContainer.add(c), this.currentLines.push(c), this.isStatic || n.delay(() => {
            this.hideLine(c);
            const t = this.currentLines.indexOf(c);
            t > -1 && this.currentLines.splice(t, 1)
        }, 4e3)
    }
    hideLine(t) {
        t.hideLine(), n.delay(() => {
            t.disposeLine(), this.linesContainer.remove(t)
        }, 1500)
    }
    objectLoaded(t = "x") {
        this.loaded.push(t), this.loaded.length === this.loading.length && (this.isLoaded = !0)
    }
    resetRevolutions(t) {
        if (0 === Math.abs(t / Qh)) return t;
        return t - Math.floor(Math.abs(t / Qh)) * Math.sign(t) * Qh
    }
    addListeners() {
        window.addEventListener("resize", this.handleResize), this.isStatic || (window.addEventListener("mouseup", this.handleMouseUp), window.addEventListener("mousemove", this.handleMouseMove), this.el.addEventListener("touchstart", this.handleTouchStart, {
            passive: !0
        }), window.addEventListener("touchmove", this.handleTouchMove), window.addEventListener("touchend", this.handleMouseUp), this.el.addEventListener("mousedown", this.handleMouseDown))
    }
    revealAnimation() {
        const t = this.isStatic ? 1 : i.easeOutQuart(this.globeOpacity, 1, 1, 1);
        this.globeOpacity += .005, this.globeFillMaterial.opacity = .50 * t, this.globeRotationIncrement = 2 * (1 - t) + .001 * t, t > .999 && (this.isRevealed = !0)
    }
    autoRotateGlobe() {
        this.isDragging || this.isScrolling || this.isStatic || (this.globeContainer.rotation.y -= this.globeRotationIncrement)
    }
    render(t = 0) {
        this.frame = t, this.autoRotateGlobe(), Math.abs(this.scale - this.targetScale) > .001 && (this.scale -= .1 * (this.scale - this.targetScale), this.globeFill.scale.set(this.scale, this.scale, this.scale)), !this.globeOff && this.isLoaded && (this.globeDots.animate(), this.isRevealed || this.revealAnimation(), this.renderer.render(this.scene, this.camera)), this.renderAnimationFrame = requestAnimationFrame(() => {
            this.isRevealed && this.isStatic && this.arcTexturesLoaded === nl.length && this.isDiscTextureLoaded ? this.renderer.render(this.scene, this.camera) : this.render(t + 1)
        })
    }
}

