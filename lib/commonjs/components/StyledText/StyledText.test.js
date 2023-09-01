"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test('renders correctly', () => {
  const text = 'Test Text';
  const {
    toJSON,
    getByText
  } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, null, text));
  const rendered = toJSON();
  expect(getByText(`${text} `)).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});
//# sourceMappingURL=StyledText.test.js.map