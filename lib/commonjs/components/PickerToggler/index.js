"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utility = require("../../functions/utility");
var _theme = require("../../theme");
var _Flag = _interopRequireDefault(require("../Flag"));
var _icons = require("../icons");
var _StyledText = _interopRequireDefault(require("../StyledText"));
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const PickerToggler = _ref => {
  let {
    selectedCode,
    flag,
    isPickerOpen,
    onPickerToggle,
    containerStyle,
    textStyle,
    onLayout,
    isFlagVisible = true
  } = _ref;
  const containerRef = /*#__PURE__*/(0, _react.createRef)();
  const arrowDownStyle = {
    transform: [{
      rotate: isPickerOpen ? '180deg' : '0deg'
    }]
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: containerStyle,
    ref: containerRef,
    onLayout: () => (0, _utility.onLayoutToggle)(containerRef, measure => onLayout(measure))
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => onPickerToggle(!isPickerOpen),
    testID: "toggler-button"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.innerContainer
  }, isFlagVisible && /*#__PURE__*/_react.default.createElement(_Flag.default, {
    flag: flag
  }), /*#__PURE__*/_react.default.createElement(_StyledText.default, {
    style: textStyle
  }, `+${selectedCode}`), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: arrowDownStyle
  }, /*#__PURE__*/_react.default.createElement(_icons.SvgArrowDown, {
    color: _theme.colors.black,
    width: 18,
    height: 18
  })))));
};
var _default = PickerToggler;
exports.default = _default;
//# sourceMappingURL=index.js.map