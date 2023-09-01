"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const StyledText = _ref => {
  let {
    children,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [style, _styles.default.text]
  }, children, " ");
};
var _default = StyledText;
exports.default = _default;
//# sourceMappingURL=index.js.map