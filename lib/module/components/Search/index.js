import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../../theme';
import { SvgClose, SvgSearch } from '../icons';
import styles from './styles';
const Search = _ref => {
  let {
    value,
    onChangeText,
    onClearInput,
    inputStyle
  } = _ref;
  const [valueState, setValueState] = useState(value);
  function handleChangeText(text) {
    onChangeText(text);
    setValueState(text);
  }
  function handleClear() {
    handleChangeText('');
    onClearInput();
  }
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.searchIconContainer
  }, /*#__PURE__*/React.createElement(SvgSearch, {
    color: colors.grey
  })), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Country name or abbreviation",
    value: valueState,
    onChangeText: handleChangeText,
    style: [styles.input, inputStyle],
    testID: "search-input"
  }), valueState ? /*#__PURE__*/React.createElement(View, {
    style: styles.clearContainer
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: handleClear,
    testID: "clear-button"
  }, /*#__PURE__*/React.createElement(SvgClose, {
    color: colors.white,
    width: 20,
    height: 20
  }))) : null);
};
export default Search;
//# sourceMappingURL=index.js.map