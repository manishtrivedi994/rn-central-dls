"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = void 0;
var _themeContext = require("../themeContext");
var _autopilot = _interopRequireDefault(require("./autopilot"));
var _orbit = _interopRequireDefault(require("./orbit"));
var base = _interopRequireWildcard(require("./base"));
var _nbfc = _interopRequireDefault(require("./nbfc"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const color = exports.color = {
  [_themeContext.ModuleName.AUTOPILOT]: _autopilot.default,
  [_themeContext.ModuleName.BASE]: base,
  [_themeContext.ModuleName.ORBIT]: _orbit.default,
  [_themeContext.ModuleName.NBFC]: _nbfc.default
};
//# sourceMappingURL=index.js.map