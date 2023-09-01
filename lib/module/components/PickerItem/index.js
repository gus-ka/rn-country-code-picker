import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Flag from '../Flag';
import StyledText from '../StyledText';
import styles from './styles';
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
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => onCountrySelect(country),
    testID: "picker-item"
  }, /*#__PURE__*/React.createElement(View, {
    style: containerStyle ?? styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.imageContainer
  }, /*#__PURE__*/React.createElement(Flag, {
    flag: flag
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.codeContainer
  }, /*#__PURE__*/React.createElement(StyledText, {
    style: textStyle
  }, `+${callingCode}`)), /*#__PURE__*/React.createElement(StyledText, {
    style: textStyle ?? styles.textStyle
  }, name)));
};
export default PickerItem;
//# sourceMappingURL=index.js.map