import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
const StyledText = _ref => {
  let {
    children,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, {
    style: [style, styles.text]
  }, children, " ");
};
export default StyledText;
//# sourceMappingURL=index.js.map