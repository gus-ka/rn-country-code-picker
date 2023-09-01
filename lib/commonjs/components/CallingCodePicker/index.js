"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var RNLocalize = _interopRequireWildcard(require("react-native-localize"));
var _countries = _interopRequireDefault(require("../../data/countries"));
var _utility = require("../../functions/utility");
var _theme = require("../../theme");
var _ItemSeparator = _interopRequireDefault(require("../ItemSeparator"));
var _PickerItem = _interopRequireDefault(require("../PickerItem"));
var _PickerToggler = _interopRequireDefault(require("../PickerToggler"));
var _Search = _interopRequireDefault(require("../Search"));
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const CallingCodePicker = _ref => {
  let {
    initialCountryCode,
    onValueChange,
    togglerContainerStyle,
    togglerLabelStyle,
    listContainerStyle,
    listStyle,
    pickerItemLabelStyle,
    searchInputStyle,
    pickerItemContainerStyle,
    style,
    isFlagVisible = true
  } = _ref;
  const [searchValue, setSearchValue] = (0, _react.useState)('');
  const [isPickerOpen, setIsPickerOpen] = (0, _react.useState)(false);
  const [countriesData, setCountriesData] = (0, _react.useState)((0, _utility.sortData)(_countries.default, ''));
  const localCountryCode = _countries.default.find(f => f.alpha2Code === RNLocalize.getCountry());
  const [selectedCountry, setSelectedCountry] = (0, _react.useState)(initialCountryCode ? _countries.default.find(f => f.alpha2Code === initialCountryCode) ?? localCountryCode : localCountryCode);
  const containerRef = /*#__PURE__*/(0, _react.createRef)();
  const [toggleMeasure, setToggleMeasure] = (0, _react.useState)();
  const [containerMeasure, setContainerMeasure] = (0, _react.useState)();
  const styles = (0, _styles.default)(calculateModalVerticalPosition());
  const handleCountrySelect = country => {
    setSelectedCountry(country);
    setIsPickerOpen(false);
    setSearchValue('');
  };
  (0, _react.useEffect)(() => {
    let newCountries = _countries.default.filter(s => s.callingCode === searchValue.trim() || s.alpha2Code.trim().toLowerCase().includes(searchValue.trim().toLowerCase()) || s.name.trim().toLowerCase().includes(searchValue.trim().toLowerCase()));
    newCountries = (0, _utility.sortData)(newCountries, searchValue);
    setCountriesData(newCountries);
  }, [searchValue]);
  const renderPickerItem = renderItem => {
    const {
      item: country
    } = renderItem;
    return /*#__PURE__*/_react.default.createElement(_PickerItem.default, {
      country: country,
      onCountrySelect: handleCountrySelect,
      textStyle: pickerItemLabelStyle,
      containerStyle: pickerItemContainerStyle
    });
  };
  function calculateModalVerticalPosition() {
    const screenHeight = _reactNative.Dimensions.get('window').height;
    const y = ((containerMeasure === null || containerMeasure === void 0 ? void 0 : containerMeasure.y) ?? 0) + ((toggleMeasure === null || toggleMeasure === void 0 ? void 0 : toggleMeasure.height) ?? 0);
    return y + _theme.MODAL_SIZE > screenHeight ? screenHeight - _theme.MODAL_SIZE - 2 * _theme.spacing.s : y;
  }
  (0, _react.useEffect)(() => {
    onValueChange(selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.callingCode);
  }, [selectedCountry, onValueChange]);
  function dismissPicker() {
    setIsPickerOpen(false);
    setSearchValue('');
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style,
    ref: containerRef,
    onLayout: () => (0, _utility.onLayoutToggle)(containerRef, measure => setContainerMeasure(measure))
  }, /*#__PURE__*/_react.default.createElement(_PickerToggler.default, {
    flag: selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.flag,
    selectedCode: selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.callingCode,
    isPickerOpen: isPickerOpen,
    onPickerToggle: setIsPickerOpen,
    containerStyle: togglerContainerStyle,
    textStyle: togglerLabelStyle,
    onLayout: measure => setToggleMeasure(measure),
    isFlagVisible: isFlagVisible
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    visible: isPickerOpen,
    transparent: true,
    animationType: "fade"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.modalChild
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styles.dismissButton,
    onPress: dismissPicker
  }), /*#__PURE__*/_react.default.createElement(_reactNative.KeyboardAvoidingView, {
    behavior: "position",
    style: styles.keyboardAvoidingView,
    keyboardVerticalOffset: _reactNative.Platform.OS === 'ios' ? 10 : -60
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: listContainerStyle ?? styles.listContainer
  }, /*#__PURE__*/_react.default.createElement(_Search.default, {
    value: searchValue,
    onChangeText: setSearchValue,
    onClearInput: () => setSearchValue(''),
    inputStyle: searchInputStyle
  }), /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    data: countriesData,
    renderItem: renderPickerItem,
    keyExtractor: (_, index) => index.toString(),
    showsVerticalScrollIndicator: false,
    style: listStyle,
    ItemSeparatorComponent: _ItemSeparator.default,
    keyboardShouldPersistTaps: "always"
  }))))));
};
var _default = CallingCodePicker;
exports.default = _default;
//# sourceMappingURL=index.js.map