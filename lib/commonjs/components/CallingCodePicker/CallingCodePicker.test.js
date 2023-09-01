"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
jest.mock('react-native-localize');
test('renders correctly', () => {
  const onValueChangeMockFn = jest.fn();
  const {
    toJSON
  } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    onValueChange: onValueChangeMockFn
  }));
  const rendered = toJSON();
  expect(onValueChangeMockFn).toHaveBeenCalledWith('1');
  expect(rendered).toMatchSnapshot();
});
//# sourceMappingURL=CallingCodePicker.test.js.map