"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Flag = _interopRequireDefault(require("../Flag"));
var _StyledText = _interopRequireDefault(require("../StyledText"));
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PickerItem = _ref => {
  let {
    country,
    onCountrySelect,
    textStyle,
    containerStyle
  } = _ref;
  const {
    name,
    flag,
    callingCode
  } = country;
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => onCountrySelect(country),
    testID: "picker-item"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: containerStyle ?? _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.imageContainer
  }, /*#__PURE__*/_react.default.createElement(_Flag.default, {
    flag: flag
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.codeContainer
  }, /*#__PURE__*/_react.default.createElement(_StyledText.default, {
    style: textStyle
  }, `+${callingCode}`)), /*#__PURE__*/_react.default.createElement(_StyledText.default, {
    style: textStyle ?? _styles.default.textStyle
  }, name)));
};
var _default = PickerItem;
exports.default = _default;
//# sourceMappingURL=index.js.map