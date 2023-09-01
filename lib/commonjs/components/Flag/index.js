"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Flag = _ref => {
  let {
    flag
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: _styles.default.image,
    source: flag,
    resizeMethod: "scale",
    testID: "flag-image"
  }));
};
var _default = Flag;
exports.default = _default;
//# sourceMappingURL=index.js.map