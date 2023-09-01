import React, { createRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { onLayoutToggle } from '../../functions/utility';
import { colors } from '../../theme';
import Flag from '../Flag';
import { SvgArrowDown } from '../icons';
import StyledText from '../StyledText';
import styles from './styles';
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
  const containerRef = /*#__PURE__*/createRef();
  const arrowDownStyle = {
    transform: [{
      rotate: isPickerOpen ? '180deg' : '0deg'
    }]
  };
  return /*#__PURE__*/React.createElement(View, {
    style: containerStyle,
    ref: containerRef,
    onLayout: () => onLayoutToggle(containerRef, measure => onLayout(measure))
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => onPickerToggle(!isPickerOpen),
    testID: "toggler-button"
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.innerContainer
  }, isFlagVisible && /*#__PURE__*/React.createElement(Flag, {
    flag: flag
  }), /*#__PURE__*/React.createElement(StyledText, {
    style: textStyle
  }, `+${selectedCode}`), /*#__PURE__*/React.createElement(View, {
    style: arrowDownStyle
  }, /*#__PURE__*/React.createElement(SvgArrowDown, {
    color: colors.black,
    width: 18,
    height: 18
  })))));
};
export default PickerToggler;
//# sourceMappingURL=index.js.map