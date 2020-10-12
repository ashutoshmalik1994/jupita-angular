import {
    _ as e
} from "./_rollupPluginBabelHelpers-e36f2efa.js";

function n() {
    const e = "(prefers-reduced-motion: reduce)",
        n = window.matchMedia(e);
    return n.media === e && n.matches
}
const t = new class {
    constructor() {
        e(this, "__gpuInfo", void 0);
    }
    get gpuInfo() {
        return void 0 === this.__gpuInfo && (this.__gpuInfo = function () {
            const e = document.createElement("canvas");
            try {
                const n = e.getContext("webgl") || e.getContext("experimental-webgl");
                if (!n) return null;
                const t = n.getExtension("WEBGL_debug_renderer_info");
                return {
                    vendor: n.getParameter(t.UNMASKED_VENDOR_WEBGL) || null,
                    renderer: n.getParameter(t.UNMASKED_RENDERER_WEBGL) || null
                }
            } catch (e) {
                return null
            }
        }()), this.__gpuInfo
    }
    get vendor() {
        return this.gpuInfo && this.gpuInfo.vendor
    }
    get renderer() {
        return this.gpuInfo && this.gpuInfo.renderer
    }
},
    r = [/swiftshade/i],
    o = {
        prefersReducedMotion: n,
        disableAmbientAnimations() {
            const e = t.renderer;
            return n() || !!e && r.some(n => e.match(n))
        }
    };
export {
    o as F
};