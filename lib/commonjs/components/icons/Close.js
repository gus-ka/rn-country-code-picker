"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SvgClose(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, _extends({
    fill: "none",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    fill: "currentColor",
    d: "M18.177 5.823l.707-.707-.707.707zm0 .354l.707.707-.707-.707zm-.354-.354l-.707-.707.707.707zM12 11.646l-.707.708a1 1 0 001.414 0L12 11.646zM6.177 5.823l-.707.707.707-.707zm-.354 0l.707.707-.707-.707zm0 .354l.707-.707-.707.707zM11.646 12l.708.707a1 1 0 000-1.414l-.708.707zm-5.823 5.823l-.707-.707.707.707zm0 .354l-.707.707.707-.707zm.354 0l.707.707-.707-.707zM12 12.354l.707-.708a1 1 0 00-1.414 0l.707.708zm5.823 5.823l-.707.707.707-.707zm.354 0l.707.707-.707-.707zm0-.354l.707-.707-.707.707zM12.354 12l-.708-.707a1 1 0 000 1.414l.708-.707zm5.116-5.47a.75.75 0 010-1.06l1.414 1.414a1.25 1.25 0 000-1.768L17.47 6.53zm1.06 0a.75.75 0 01-1.06 0l1.414-1.414a1.25 1.25 0 00-1.768 0L18.53 6.53zm-5.823 5.824L18.53 6.53l-1.414-1.414-5.823 5.823 1.414 1.415zM5.47 6.53l5.823 5.824 1.414-1.415-5.823-5.823L5.47 6.53zm1.06 0a.75.75 0 01-1.06 0l1.414-1.414a1.25 1.25 0 00-1.768 0L6.53 6.53zm0-1.06a.75.75 0 010 1.06L5.116 5.116a1.25 1.25 0 000 1.768L6.53 5.47zm5.824 5.823L6.53 5.47 5.116 6.884l5.823 5.823 1.415-1.414zM6.53 18.53l5.824-5.823-1.415-1.414-5.823 5.823L6.53 18.53zm0-1.06a.75.75 0 010 1.06l-1.414-1.414a1.25 1.25 0 000 1.768L6.53 17.47zm-1.06 0a.75.75 0 011.06 0l-1.414 1.414a1.25 1.25 0 001.768 0L5.47 17.47zm5.823-5.824L5.47 17.47l1.414 1.414 5.823-5.823-1.414-1.415zm7.237 5.824l-5.823-5.824-1.414 1.415 5.823 5.823 1.414-1.414zm-1.06 0a.75.75 0 011.06 0l-1.414 1.414a1.25 1.25 0 001.768 0L17.47 17.47zm0 1.06a.75.75 0 010-1.06l1.414 1.414a1.25 1.25 0 000-1.768L17.47 18.53zm-5.824-5.823l5.824 5.823 1.414-1.414-5.823-5.823-1.415 1.414zM17.47 5.47l-5.824 5.823 1.415 1.414 5.823-5.823L17.47 5.47z"
  }));
}
var _default = SvgClose;
exports.default = _default;
//# sourceMappingURL=Close.js.map