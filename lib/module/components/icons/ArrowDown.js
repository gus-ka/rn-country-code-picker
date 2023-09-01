function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Svg, { Path } from 'react-native-svg';
function SvgArrowDown(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement(Path, {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 9l-7 7-7-7"
  }));
}
export default SvgArrowDown;
//# sourceMappingURL=ArrowDown.js.map