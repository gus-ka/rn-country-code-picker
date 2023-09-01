import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
const Flag = _ref => {
  let {
    flag
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.image,
    source: flag,
    resizeMethod: "scale",
    testID: "flag-image"
  }));
};
export default Flag;
//# sourceMappingURL=index.js.map