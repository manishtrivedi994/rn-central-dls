function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, Circle, G, ClipPath, Line } from 'react-native-svg';
import { color as dlsColors } from 'rn-central-dls';
import size from '../theme/size';
import BaseColors from '../theme/color/base';
const Close = ({
  color = '#fff',
  fillOpacity = 0.69,
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 16,
  height: 16,
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  fill: color,
  fillOpacity: fillOpacity,
  d: "M12.854 12.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8 3.146 3.854a.5.5 0 0 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146Z"
}));
const Loader = ({
  startColor = '#FFCBA3',
  endColor = '#FCDBC3',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 16,
  height: 16,
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  fill: "url(#a)",
  d: "M8.034 1.388A.382.382 0 0 0 7.636 1a7.032 7.032 0 1 0 7.418 7.42.387.387 0 0 0-.388-.399c-.189 0-.377-.003-.565 0a.412.412 0 0 0-.399.394 5.68 5.68 0 1 1-6.066-6.06.421.421 0 0 0 .398-.413v-.554Z"
}), /*#__PURE__*/React.createElement(Defs, null, /*#__PURE__*/React.createElement(LinearGradient, {
  id: "a",
  x1: 6.968,
  x2: 14.468,
  y1: 1.771,
  y2: 8.521,
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement(Stop, {
  stopColor: startColor
}), /*#__PURE__*/React.createElement(Stop, {
  offset: 1,
  stopColor: endColor
}))));
const UploadSimple = ({
  color = '#0F0F10',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M17.5 11.875v4.375a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25v-4.375a.625.625 0 1 1 1.25 0v4.375h12.5v-4.375a.624.624 0 1 1 1.25 0M7.317 6.692l2.058-2.058v7.241a.625.625 0 1 0 1.25 0V4.634l2.058 2.058a.625.625 0 1 0 .884-.884l-3.125-3.125a.626.626 0 0 0-.884 0L6.433 5.808a.625.625 0 1 0 .884.884",
  fill: color
}));
const Info = ({
  color = '#B4272E',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 12,
  height: 12,
  viewBox: "0 0 12 12",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M6 1.125a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75m0 9a4.125 4.125 0 1 1 0-8.25 4.125 4.125 0 0 1 0 8.25m.75-1.875a.375.375 0 0 1-.375.375.75.75 0 0 1-.75-.75V6a.375.375 0 0 1 0-.75.75.75 0 0 1 .75.75v1.875a.375.375 0 0 1 .375.375m-1.5-4.312a.562.562 0 1 1 1.125 0 .562.562 0 0 1-1.125 0",
  fill: color
}));
const Files = ({
  color = '#B0B0B0',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "m16.692 5.183-3.125-3.125a.63.63 0 0 0-.442-.183h-6.25a1.25 1.25 0 0 0-1.25 1.25v1.25h-1.25a1.25 1.25 0 0 0-1.25 1.25v11.25a1.25 1.25 0 0 0 1.25 1.25h8.75a1.25 1.25 0 0 0 1.25-1.25v-1.25h1.25a1.25 1.25 0 0 0 1.25-1.25v-8.75a.62.62 0 0 0-.183-.442m-3.567 11.692h-8.75V5.625h5.991l2.759 2.759zm2.5-2.5h-1.25v-6.25a.62.62 0 0 0-.183-.442l-3.125-3.125a.63.63 0 0 0-.442-.183h-3.75v-1.25h5.991l2.759 2.759zm-4.375-2.5a.624.624 0 0 1-.625.625h-3.75a.625.625 0 1 1 0-1.25h3.75a.624.624 0 0 1 .625.625m0 2.5a.624.624 0 0 1-.625.625h-3.75a.625.625 0 1 1 0-1.25h3.75a.624.624 0 0 1 .625.625",
  fill: color
}));
const CloseCircle = ({
  color = '#B0B0B0',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M12.942 7.942 10.884 10l2.058 2.058a.624.624 0 1 1-.884.884L10 10.884l-2.058 2.058a.624.624 0 1 1-.884-.884L9.116 10 7.058 7.942a.625.625 0 0 1 .884-.884L10 9.116l2.058-2.058a.626.626 0 0 1 .884.884M18.125 10A8.125 8.125 0 1 1 10 1.875 8.133 8.133 0 0 1 18.125 10m-1.25 0A6.875 6.875 0 1 0 10 16.875 6.883 6.883 0 0 0 16.875 10",
  fill: color
}));
const ClockwiseTwo = ({
  color = '#EF6E0B',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 14,
  height: 14,
  viewBox: "0 0 14 14",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M13.125 3.063v2.625a.44.44 0 0 1-.437.437h-2.626a.438.438 0 0 1 0-.875h1.499l-1.454-1.332-.014-.013a4.375 4.375 0 1 0-.091 6.277.437.437 0 1 1 .601.636A5.22 5.22 0 0 1 7 12.25h-.072a5.25 5.25 0 1 1 3.777-8.969l1.545 1.411v-1.63a.437.437 0 1 1 .875 0",
  fill: color
}));
const CheckCircleOutlined = ({
  color = '#4DBB3E',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M10.8538 6.14625C10.9002 6.19269 10.9371 6.24783 10.9623 6.30853C10.9874 6.36923 11.0004 6.43429 11.0004 6.5C11.0004 6.56571 10.9874 6.63077 10.9623 6.69147C10.9371 6.75217 10.9002 6.80731 10.8538 6.85375L7.35375 10.3538C7.30732 10.4002 7.25217 10.4371 7.19147 10.4623C7.13077 10.4874 7.06571 10.5004 7 10.5004C6.9343 10.5004 6.86923 10.4874 6.80853 10.4623C6.74783 10.4371 6.69269 10.4002 6.64625 10.3538L5.14625 8.85375C5.05243 8.75993 4.99972 8.63268 4.99972 8.5C4.99972 8.36732 5.05243 8.24007 5.14625 8.14625C5.24007 8.05243 5.36732 7.99972 5.5 7.99972C5.63268 7.99972 5.75993 8.05243 5.85375 8.14625L7 9.29313L10.1463 6.14625C10.1927 6.09976 10.2478 6.06288 10.3085 6.03772C10.3692 6.01256 10.4343 5.99961 10.5 5.99961C10.5657 5.99961 10.6308 6.01256 10.6915 6.03772C10.7522 6.06288 10.8073 6.09976 10.8538 6.14625ZM14.5 8C14.5 9.28558 14.1188 10.5423 13.4046 11.6112C12.6903 12.6801 11.6752 13.5132 10.4874 14.0052C9.29973 14.4972 7.99279 14.6259 6.73192 14.3751C5.47104 14.1243 4.31285 13.5052 3.40381 12.5962C2.49477 11.6872 1.8757 10.529 1.6249 9.26809C1.37409 8.00721 1.50282 6.70028 1.99479 5.51256C2.48676 4.32484 3.31988 3.30968 4.3888 2.59545C5.45772 1.88122 6.71442 1.5 8 1.5C9.72335 1.50182 11.3756 2.18722 12.5942 3.40582C13.8128 4.62441 14.4982 6.27665 14.5 8ZM13.5 8C13.5 6.9122 13.1774 5.84883 12.5731 4.94436C11.9687 4.03989 11.1098 3.33494 10.1048 2.91866C9.09977 2.50238 7.9939 2.39346 6.92701 2.60568C5.86011 2.8179 4.8801 3.34172 4.11092 4.11091C3.34173 4.8801 2.8179 5.86011 2.60568 6.927C2.39347 7.9939 2.50238 9.09977 2.91867 10.1048C3.33495 11.1098 4.0399 11.9687 4.94437 12.5731C5.84884 13.1774 6.91221 13.5 8 13.5C9.45819 13.4983 10.8562 12.9184 11.8873 11.8873C12.9184 10.8562 13.4983 9.45818 13.5 8Z",
  fill: color
}));
const CheckCirle = ({
  color = '#4DBB3E',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.854 5.354-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 1 1 .708.708",
  fill: color
}));
const Trash = ({
  color = '#B4272E',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M16.875 3.75H13.75v-.625a1.875 1.875 0 0 0-1.875-1.875h-3.75A1.875 1.875 0 0 0 6.25 3.125v.625H3.125a.625.625 0 0 0 0 1.25h.625v11.25A1.25 1.25 0 0 0 5 17.5h10a1.25 1.25 0 0 0 1.25-1.25V5h.625a.625.625 0 1 0 0-1.25M7.5 3.125a.625.625 0 0 1 .625-.625h3.75a.625.625 0 0 1 .625.625v.625h-5zM15 16.25H5V5h10zM8.75 8.125v5a.625.625 0 1 1-1.25 0v-5a.625.625 0 0 1 1.25 0m3.75 0v5a.624.624 0 1 1-1.25 0v-5a.625.625 0 1 1 1.25 0",
  fill: color
}));
const EyeShow = ({
  color = '#fff',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M15.457 7.797c-.022-.049-.551-1.223-1.728-2.4C12.16 3.829 10.18 3 8 3s-4.16.829-5.729 2.397C1.094 6.574.563 7.75.543 7.797a.5.5 0 0 0 0 .407c.022.05.551 1.223 1.728 2.4C3.84 12.17 5.82 13 8 13s4.16-.829 5.729-2.396c1.177-1.177 1.706-2.35 1.728-2.4a.5.5 0 0 0 0-.407M8 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5",
  fill: color
}));
const AshokaChakra = ({
  color = '#0059A3',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 18,
  height: 24,
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Circle, {
  cx: 9,
  cy: 5.996,
  r: 1.012,
  fill: color
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 9,
  cy: 5.996,
  r: 5.42,
  stroke: color,
  strokeWidth: 0.723
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 8.34,
  cy: 0.985,
  r: 0.289,
  fill: color,
  transform: "rotate(-7.5 8.34 .985)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 9.66,
  cy: 11.015,
  r: 0.289,
  fill: color,
  transform: "rotate(-7.5 9.66 11.015)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 13.674,
  cy: 7.936,
  r: 0.289,
  fill: color,
  transform: "rotate(112.5 13.674 7.936)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 4.326,
  cy: 4.064,
  r: 0.289,
  fill: color,
  transform: "rotate(112.5 4.326 4.064)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 13.013,
  cy: 2.92,
  r: 0.289,
  fill: color,
  transform: "rotate(52.5 13.013 2.92)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 4.987,
  cy: 9.079,
  r: 0.289,
  fill: color,
  transform: "rotate(52.5 4.987 9.08)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 12.079,
  cy: 1.987,
  r: 0.289,
  fill: color,
  transform: "rotate(37.5 12.08 1.987)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 5.921,
  cy: 10.013,
  r: 0.289,
  fill: color,
  transform: "rotate(37.5 5.92 10.013)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 10.936,
  cy: 10.674,
  r: 0.289,
  fill: color,
  transform: "rotate(157.5 10.936 10.674)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 7.064,
  cy: 1.326,
  r: 0.289,
  fill: color,
  transform: "rotate(157.5 7.064 1.326)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 14.015,
  cy: 6.66,
  r: 0.289,
  fill: color,
  transform: "rotate(97.5 14.015 6.66)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 3.985,
  cy: 5.34,
  r: 0.289,
  fill: color,
  transform: "rotate(97.5 3.985 5.34)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 10.936,
  cy: 1.326,
  r: 0.289,
  fill: color,
  transform: "rotate(22.5 10.936 1.326)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 7.064,
  cy: 10.674,
  r: 0.289,
  fill: color,
  transform: "rotate(22.5 7.064 10.674)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 12.079,
  cy: 10.013,
  r: 0.289,
  fill: color,
  transform: "rotate(142.5 12.08 10.013)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 5.92,
  cy: 1.987,
  r: 0.289,
  fill: color,
  transform: "rotate(142.5 5.92 1.987)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 14.015,
  cy: 5.34,
  r: 0.289,
  fill: color,
  transform: "rotate(82.5 14.015 5.34)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 3.985,
  cy: 6.66,
  r: 0.289,
  fill: color,
  transform: "rotate(82.5 3.985 6.66)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 9.66,
  cy: 0.985,
  r: 0.289,
  fill: color,
  transform: "rotate(7.5 9.66 .985)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 8.34,
  cy: 11.015,
  r: 0.289,
  fill: color,
  transform: "rotate(7.5 8.34 11.015)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 13.013,
  cy: 9.079,
  r: 0.289,
  fill: color,
  transform: "rotate(127.5 13.013 9.08)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 4.987,
  cy: 2.92,
  r: 0.289,
  fill: color,
  transform: "rotate(127.5 4.987 2.92)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 13.674,
  cy: 4.064,
  r: 0.289,
  fill: color,
  transform: "rotate(67.5 13.674 4.064)"
}), /*#__PURE__*/React.createElement(Circle, {
  cx: 4.326,
  cy: 7.936,
  r: 0.289,
  fill: color,
  transform: "rotate(67.5 4.326 7.936)"
}), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#a)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m8.804 11.035-.173-3.036.173-1.445L8.977 8l-.173 3.036Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#b)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m8.862.917.173 3.035-.173 1.446-.174-1.446.174-3.035Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#c)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m4.467 3.422 2.715 1.367 1.165.873-1.339-.573-2.541-1.667Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#d)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m13.2 8.53-2.716-1.367L9.32 6.29l1.339.573 2.541 1.667Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#e)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m4.438 8.48 2.541-1.667 1.339-.573-1.165.873L4.438 8.48Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#f)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "M13.228 3.472 10.687 5.14l-1.339.572 1.165-.873 2.715-1.367Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#g)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m5.236 9.533 2.023-2.27 1.145-.899-.9 1.145-2.268 2.024Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#h)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m12.43 2.42-2.023 2.268-1.145.9.9-1.145 2.268-2.024Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#i)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m7.552 1.082.953 2.887.206 1.441L8.17 4.06l-.618-2.977Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#j)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m10.114 10.87-.953-2.887-.206-1.441.541 1.351.618 2.977Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#k)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m3.954 4.639 2.977.618 1.35.541-1.44-.206-2.887-.953Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#l)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m13.712 7.313-2.977-.618-1.351-.542 1.44.207 2.888.953Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#m)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m6.279 10.342 1.367-2.715.873-1.165-.573 1.339-1.667 2.541Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#n)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "M11.387 1.61 10.02 4.325 9.147 5.49l.572-1.339 1.668-2.541Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#o)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m6.329 1.58 1.667 2.542.573 1.339-.873-1.165L6.329 1.58Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#p)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "M11.337 10.371 9.67 7.83 9.097 6.49l.873 1.165 1.367 2.715Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#q)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m3.774 5.947 3.035-.173 1.446.173-1.446.173-3.035-.173Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#r)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m13.892 6.005-3.036.173-1.445-.173 1.445-.174 3.036.174Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#s)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m7.496 10.855.618-2.977.541-1.351-.206 1.44-.953 2.888Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#t)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m10.17 1.097-.618 2.977-.542 1.351.207-1.441.953-2.887Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#u)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m5.276 2.378 2.27 2.024.899 1.145-1.145-.9-2.024-2.269Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#v)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "M12.39 9.573 10.12 7.55l-.899-1.145 1.145.9 2.023 2.268Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#w)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m3.94 7.257 2.886-.953 1.441-.206-1.351.541-2.977.618Z"
})), /*#__PURE__*/React.createElement(G, {
  clipPath: "url(#x)"
}, /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m13.727 4.695-2.887.953-1.441.206 1.351-.541 2.977-.618Z"
})), /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "M2.334 14.727V22H1.016v-7.273h1.318Zm7.403 0V22H8.565l-3.427-4.954h-.06V22H3.76v-7.273h1.18l3.423 4.958h.063v-4.958h1.31Zm3.9 7.273h-2.465v-7.273h2.515c.722 0 1.342.146 1.86.437.521.289.921.704 1.2 1.246.28.543.42 1.191.42 1.947 0 .757-.141 1.408-.423 1.953a2.92 2.92 0 0 1-1.21 1.253c-.526.291-1.159.437-1.897.437Zm-1.147-1.14h1.083c.507 0 .93-.092 1.268-.277.338-.187.593-.465.763-.834.17-.372.256-.836.256-1.392 0-.557-.085-1.018-.256-1.385a1.743 1.743 0 0 0-.756-.828c-.332-.184-.744-.277-1.236-.277H12.49v4.993Z"
}), /*#__PURE__*/React.createElement(Defs, null, /*#__PURE__*/React.createElement(ClipPath, {
  id: "a"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "M9.7 6.482H7.966v4.625H9.7z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "b"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "M7.966 5.47H9.7V.845H7.966z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "c"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m7.961 6.474.867-1.502L4.823 2.66l-.867 1.502z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "d"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "M9.705 5.478 8.838 6.98l4.005 2.312.867-1.502z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "e"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m8.828 6.98-.867-1.502-4.005 2.313.867 1.501z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "f"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m8.837 4.972.867 1.502L13.71 4.16l-.867-1.501z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "g"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "M9.088 6.947 7.862 5.72l-3.27 3.27 1.226 1.226z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "h"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m8.577 5.005 1.227 1.226 3.27-3.27-1.226-1.226z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "i"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m7.864 5.712 1.675-.449L8.342.796l-1.675.448z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "j"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m9.801 6.24-1.674.449 1.197 4.467 1.675-.448z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "k"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m8.12 6.683.449-1.675L4.1 3.81l-.449 1.675z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "l"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m9.546 5.27-.449 1.674 4.468 1.197.448-1.675z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "m"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "M9.331 6.848 7.829 5.98 5.517 9.986l1.501.867z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "n"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m8.335 5.104 1.501.867 2.313-4.005-1.502-.867z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "o"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m7.829 5.971 1.502-.867L7.018 1.1l-1.502.867z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "p"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m9.837 5.98-1.502.867 2.313 4.006 1.501-.867z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "q"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "M8.327 6.843V5.11H3.702v1.734z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "r"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "M9.339 5.109v1.734h4.625V5.109z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "s"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m9.54 6.69-1.675-.45-1.197 4.468 1.675.448z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "t"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m8.126 5.263 1.675.449 1.197-4.468L9.323.796z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "u"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m7.862 6.231 1.226-1.226-3.27-3.27-1.226 1.226z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "v"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "M9.804 5.72 8.578 6.947l3.27 3.27 1.226-1.226z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "w"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m8.569 6.945-.45-1.675-4.466 1.197.448 1.675z"
})), /*#__PURE__*/React.createElement(ClipPath, {
  id: "x"
}, /*#__PURE__*/React.createElement(Path, {
  fill: "#fff",
  d: "m9.097 5.007.449 1.675 4.467-1.197-.449-1.675z"
}))));
const SearchIcon = ({
  color = '#717272',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 20,
  height: 20
}, props), /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m17.942 17.058-3.912-3.911a6.884 6.884 0 1 0-.883.883l3.91 3.912a.624.624 0 1 0 .885-.884ZM3.125 8.75a5.625 5.625 0 1 1 5.625 5.625A5.631 5.631 0 0 1 3.125 8.75Z"
}));
const DottedLine = ({
  color
}) => /*#__PURE__*/React.createElement(Svg, {
  height: "2",
  width: "100%"
}, /*#__PURE__*/React.createElement(Line, {
  x1: "0",
  y1: "0",
  x2: "100%",
  y2: "0",
  stroke: color,
  strokeWidth: 2,
  strokeLinecap: "square",
  strokeDasharray: [2, 4]
}));
const ChevronDown = ({
  color = dlsColors.BASE.icon.defaultPrimary,
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 16,
  height: 16,
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m13.354 5.854-5 5a.499.499 0 0 1-.708 0l-5-5a.5.5 0 0 1 .708-.708L8 9.793l4.646-4.647a.5.5 0 1 1 .708.708Z"
}));
const ChevronRightDoubleOutlined = ({
  color = dlsColors.BASE.icon.defaultPrimary,
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: size.IconSize.iconSize32,
  height: size.IconSize.iconSize32,
  viewBox: "0 0 32 32",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  fill: color,
  d: "m17.708 16.707-10 10a1 1 0 1 1-1.415-1.415L15.586 16 6.293 6.707a1 1 0 0 1 1.415-1.415l10 10a1.001 1.001 0 0 1 0 1.415Zm10-1.415-10-10a1 1 0 0 0-1.415 1.415L25.586 16l-9.293 9.292a1 1 0 1 0 1.415 1.415l10-10a1 1 0 0 0 0-1.415Z"
}));
const CheckOutlined = ({
  color = dlsColors.BASE.icon.defaultPrimary,
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: size.IconSize.iconSize24,
  height: size.IconSize.iconSize24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  stroke: color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M20 6 9 17l-5-5"
}));
const MinusOutlined = ({
  color = dlsColors.BASE.icon.defaultPrimary,
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: size.IconSize.iconSize24,
  height: size.IconSize.iconSize24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  stroke: color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M5 12h14"
}));
const StarOutlined = ({
  color = '#B0B0B0',
  halfFilled = false,
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 18,
  height: 18,
  viewBox: "0 0 18 18",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M17.688 6.6a1.25 1.25 0 0 0-1.08-.859l-4.64-.4-1.818-4.325a1.246 1.246 0 0 0-2.3 0L6.037 5.341l-4.646.403A1.25 1.25 0 0 0 .68 7.936l3.524 3.08-1.056 4.573a1.25 1.25 0 0 0 1.862 1.355l3.985-2.422 3.993 2.422a1.25 1.25 0 0 0 1.862-1.355l-1.056-4.578 3.524-3.075a1.25 1.25 0 0 0 .37-1.335m-1.19.391-3.523 3.075a1.25 1.25 0 0 0-.397 1.228l1.059 4.581-3.99-2.422a1.24 1.24 0 0 0-1.292 0L4.37 15.875l1.052-4.578a1.25 1.25 0 0 0-.397-1.228L1.5 6.996V6.99l4.644-.401a1.25 1.25 0 0 0 1.043-.762L9 1.506l1.813 4.32a1.25 1.25 0 0 0 1.042.762l4.645.401v.006z",
  fill: color
}), halfFilled && /*#__PURE__*/React.createElement(Path, {
  d: "M9 13.435V1.058c0-.221-.306-.279-.386-.073L6.76 5.712a.5.5 0 0 1-.421.315L2.03 6.41a.5.5 0 0 0-.32.842l3.339 3.521a.5.5 0 0 1 .124.458l-1.071 4.577a.5.5 0 0 0 .755.536l3.91-2.486A.5.5 0 0 0 9 13.435",
  fill: color
}));
const StarFilled = ({
  color = '#F4BE34',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "m18.313 9.221-3.521 3.19 1.055 4.748c.055.248.04.508-.046.747a1.3 1.3 0 0 1-.436.596 1.21 1.21 0 0 1-1.38.062l-3.99-2.512-3.982 2.512a1.21 1.21 0 0 1-1.38-.062 1.3 1.3 0 0 1-.435-.596 1.34 1.34 0 0 1-.046-.747l1.053-4.743L1.683 9.22a1.3 1.3 0 0 1-.387-.632 1.34 1.34 0 0 1 .015-.75c.076-.243.22-.457.412-.615.193-.159.426-.255.672-.276l4.642-.418 1.812-4.485c.094-.236.254-.437.459-.578a1.21 1.21 0 0 1 1.38 0c.205.141.365.342.46.578l1.817 4.485 4.64.418c.246.021.48.117.672.276.193.158.336.372.412.615s.081.504.015.75-.201.466-.387.632z",
  fill: color
}));
const EditFilled = ({
  color = '#EF6E0B',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 14,
  height: 14,
  viewBox: "0 0 14 14",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M12.431 4.01242L9.98758 1.56844C9.90633 1.48717 9.80986 1.4227 9.70369 1.37871C9.59752 1.33473 9.48372 1.31209 9.36879 1.31209C9.25387 1.31209 9.14007 1.33473 9.0339 1.37871C8.92773 1.4227 8.83126 1.48717 8.75 1.56844L2.00649 8.3125C1.92488 8.39346 1.86019 8.48983 1.81615 8.59601C1.77212 8.70219 1.74964 8.81607 1.75 8.93102V11.375C1.75 11.6071 1.84219 11.8296 2.00629 11.9937C2.17038 12.1578 2.39294 12.25 2.625 12.25H5.06899C5.18394 12.2504 5.29781 12.2279 5.404 12.1839C5.51018 12.1398 5.60655 12.0751 5.6875 11.9935L12.431 5.25C12.5123 5.16875 12.5768 5.07228 12.6207 4.96611C12.6647 4.85993 12.6874 4.74614 12.6874 4.63121C12.6874 4.51629 12.6647 4.40249 12.6207 4.29632C12.5768 4.19015 12.5123 4.09368 12.431 4.01242ZM10.5 5.94344L8.05602 3.5L9.36852 2.1875L11.8125 4.63094L10.5 5.94344Z",
  fill: color
}));
const DashedLine = ({
  width
}) => /*#__PURE__*/React.createElement(Svg, {
  height: 1,
  width: width
}, /*#__PURE__*/React.createElement(Line, {
  x1: "0",
  y1: "1",
  x2: width,
  y2: "1",
  stroke: BaseColors.border.defaultPrimary,
  strokeWidth: "2",
  strokeDasharray: "4,4"
}));
const Check = ({
  color = '#EF6E0B',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 10,
  height: 10,
  viewBox: "0 0 10 10",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M8.33335 2.5L3.75002 7.08333L1.66669 5",
  stroke: color,
  strokeWidth: 0.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const WarningOutlined = ({
  color = '#B4272E',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 20,
  height: 21,
  viewBox: "0 0 20 21",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M18.5008 15.2317L11.6688 3.36685C11.4981 3.07616 11.2544 2.83514 10.9618 2.66768C10.6692 2.50021 10.3379 2.41211 10.0008 2.41211C9.66373 2.41211 9.33247 2.50021 9.0399 2.66768C8.74732 2.83514 8.50359 3.07616 8.33287 3.36685L1.50084 15.2317C1.33657 15.5128 1.25 15.8326 1.25 16.1583C1.25 16.4839 1.33657 16.8037 1.50084 17.0848C1.66938 17.3773 1.91269 17.6196 2.20581 17.787C2.49893 17.9543 2.83129 18.0407 3.16881 18.0372H16.8329C17.1701 18.0404 17.5022 17.9539 17.795 17.7866C18.0878 17.6192 18.3309 17.377 18.4993 17.0848C18.6638 16.8038 18.7506 16.4841 18.7509 16.1585C18.7512 15.8328 18.6649 15.513 18.5008 15.2317ZM17.4172 16.459C17.3577 16.5606 17.2722 16.6446 17.1695 16.7022C17.0668 16.7599 16.9506 16.7892 16.8329 16.7872H3.16881C3.05105 16.7892 2.93488 16.7599 2.83219 16.7022C2.7295 16.6446 2.64399 16.5606 2.58443 16.459C2.53048 16.3677 2.50202 16.2636 2.50202 16.1575C2.50202 16.0514 2.53048 15.9473 2.58443 15.8559L9.41646 3.99107C9.47723 3.88995 9.56312 3.80628 9.6658 3.74819C9.76847 3.69011 9.88443 3.65958 10.0024 3.65958C10.1204 3.65958 10.2363 3.69011 10.339 3.74819C10.4417 3.80628 10.5276 3.88995 10.5883 3.99107L17.4204 15.8559C17.4738 15.9475 17.5018 16.0518 17.5012 16.1579C17.5007 16.264 17.4717 16.368 17.4172 16.459ZM9.37584 11.7872V8.66216C9.37584 8.4964 9.44169 8.33743 9.5589 8.22022C9.67611 8.10301 9.83508 8.03716 10.0008 8.03716C10.1666 8.03716 10.3256 8.10301 10.4428 8.22022C10.56 8.33743 10.6258 8.4964 10.6258 8.66216V11.7872C10.6258 11.9529 10.56 12.1119 10.4428 12.2291C10.3256 12.3463 10.1666 12.4122 10.0008 12.4122C9.83508 12.4122 9.67611 12.3463 9.5589 12.2291C9.44169 12.1119 9.37584 11.9529 9.37584 11.7872ZM10.9383 14.5997C10.9383 14.7851 10.8834 14.9663 10.7803 15.1205C10.6773 15.2747 10.5309 15.3948 10.3596 15.4658C10.1883 15.5368 9.9998 15.5553 9.81794 15.5191C9.63608 15.483 9.46904 15.3937 9.33792 15.2626C9.20681 15.1315 9.11753 14.9644 9.08135 14.7826C9.04518 14.6007 9.06374 14.4122 9.1347 14.2409C9.20566 14.0696 9.32582 13.9232 9.47999 13.8202C9.63416 13.7171 9.81542 13.6622 10.0008 13.6622C10.2495 13.6622 10.4879 13.7609 10.6637 13.9367C10.8396 14.1126 10.9383 14.351 10.9383 14.5997Z",
  fill: color
}));
const FilesFilled = ({
  color = '#B4272E',
  ...props
}) => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  d: "M16.6922 5.18281L13.5672 2.05781C13.5091 1.99979 13.4402 1.95378 13.3643 1.92241C13.2884 1.89105 13.2071 1.87494 13.125 1.875H6.875C6.54348 1.875 6.22554 2.0067 5.99112 2.24112C5.7567 2.47554 5.625 2.79348 5.625 3.125V4.375H4.375C4.04348 4.375 3.72554 4.5067 3.49112 4.74112C3.2567 4.97554 3.125 5.29348 3.125 5.625V16.875C3.125 17.2065 3.2567 17.5245 3.49112 17.7589C3.72554 17.9933 4.04348 18.125 4.375 18.125H13.125C13.4565 18.125 13.7745 17.9933 14.0089 17.7589C14.2433 17.5245 14.375 17.2065 14.375 16.875V15.625H15.625C15.9565 15.625 16.2745 15.4933 16.5089 15.2589C16.7433 15.0245 16.875 14.7065 16.875 14.375V5.625C16.8751 5.5429 16.859 5.46159 16.8276 5.38572C16.7962 5.30985 16.7502 5.2409 16.6922 5.18281ZM10.625 15H6.875C6.70924 15 6.55027 14.9342 6.43306 14.8169C6.31585 14.6997 6.25 14.5408 6.25 14.375C6.25 14.2092 6.31585 14.0503 6.43306 13.9331C6.55027 13.8158 6.70924 13.75 6.875 13.75H10.625C10.7908 13.75 10.9497 13.8158 11.0669 13.9331C11.1842 14.0503 11.25 14.2092 11.25 14.375C11.25 14.5408 11.1842 14.6997 11.0669 14.8169C10.9497 14.9342 10.7908 15 10.625 15ZM10.625 12.5H6.875C6.70924 12.5 6.55027 12.4342 6.43306 12.3169C6.31585 12.1997 6.25 12.0408 6.25 11.875C6.25 11.7092 6.31585 11.5503 6.43306 11.4331C6.55027 11.3158 6.70924 11.25 6.875 11.25H10.625C10.7908 11.25 10.9497 11.3158 11.0669 11.4331C11.1842 11.5503 11.25 11.7092 11.25 11.875C11.25 12.0408 11.1842 12.1997 11.0669 12.3169C10.9497 12.4342 10.7908 12.5 10.625 12.5ZM15.625 14.375H14.375V8.125C14.3751 8.0429 14.359 7.96159 14.3276 7.88572C14.2962 7.80985 14.2502 7.7409 14.1922 7.68281L11.0672 4.55781C11.0091 4.49979 10.9402 4.45378 10.8643 4.42241C10.7884 4.39105 10.7071 4.37494 10.625 4.375H6.875V3.125H12.8664L15.625 5.88359V14.375Z",
  fill: color
}));
const Svgs = {
  Close,
  Loader,
  UploadSimple,
  Info,
  Files,
  CloseCircle,
  ClockwiseTwo,
  CheckCirle,
  Trash,
  EyeShow,
  AshokaChakra,
  DottedLine,
  SearchIcon,
  ChevronDown,
  CheckOutlined,
  MinusOutlined,
  ChevronRightDoubleOutlined,
  StarOutlined,
  StarFilled,
  EditFilled,
  DashedLine,
  Check,
  CheckCircleOutlined,
  WarningOutlined,
  FilesFilled
};
export default Svgs;
//# sourceMappingURL=index.js.map