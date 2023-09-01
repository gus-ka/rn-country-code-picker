"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _country = _interopRequireDefault(require("../../__mocks__/country"));
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test('renders correctly', () => {
  const mockFlag = _country.default.flag;
  const {
    toJSON,
    getByTestId
  } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
    flag: mockFlag
  }));
  const rendered = toJSON();
  const image = getByTestId('flag-image');
  expect(image.props.source).toBe(mockFlag);
  expect(rendered).toMatchSnapshot();
});
//# sourceMappingURL=Flag.test.js.map