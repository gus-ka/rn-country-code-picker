"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _icons = require("../icons");
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Search = _ref => {
  let {
    value,
    onChangeText,
    onClearInput,
    inputStyle
  } = _ref;
  const [valueState, setValueState] = (0, _react.useState)(value);
  function handleChangeText(text) {
    onChangeText(text);
    setValueState(text);
  }
  function handleClear() {
    handleChangeText('');
    onClearInput();
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.searchIconContainer
  }, /*#__PURE__*/_react.default.createElement(_icons.SvgSearch, {
    color: _theme.colors.grey
  })), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: "Country name or abbreviation",
    value: valueState,
    onChangeText: handleChangeText,
    style: [_styles.default.input, inputStyle],
    testID: "search-input"
  }), valueState ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.clearContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handleClear,
    testID: "clear-button"
  }, /*#__PURE__*/_react.default.createElement(_icons.SvgClose, {
    color: _theme.colors.white,
    width: 20,
    height: 20
  }))) : null);
};
var _default = Search;
exports.default = _default;
//# sourceMappingURL=index.js.map