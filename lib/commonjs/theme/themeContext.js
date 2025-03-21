"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = exports.useTheme = exports.default = exports.ThemeProvider = exports.ModuleName = void 0;
var _react = _interopRequireWildcard(require("react"));
var _color = require("./color");
var _size = _interopRequireDefault(require("./size"));
var _gradient = require("./gradient");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
let ModuleName = exports.ModuleName = /*#__PURE__*/function (ModuleName) {
  ModuleName["AUTOPILOT"] = "AUTOPILOT";
  ModuleName["BASE"] = "BASE";
  ModuleName["ORBIT"] = "ORBIT";
  ModuleName["NBFC"] = "NBFC";
  return ModuleName;
}({});
const ThemeContext = /*#__PURE__*/(0, _react.createContext)({
  appName: ModuleName.BASE
});
const ThemeProvider = ({
  appName,
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
    value: {
      appName
    }
  }, children);
};
exports.ThemeProvider = ThemeProvider;
const withTheme = (appName, children) => {
  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
    value: {
      appName
    }
  }, children);
};
exports.withTheme = withTheme;
const useTheme = () => {
  const context = (0, _react.useContext)(ThemeContext);
  const module = context.appName;
  return {
    colors: _color.color[module],
    gradientColor: _gradient.gradientColor[module],
    sizes: _size.default,
    module
  };
};
exports.useTheme = useTheme;
var _default = exports.default = withTheme;
//# sourceMappingURL=themeContext.js.map