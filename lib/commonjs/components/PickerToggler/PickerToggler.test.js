"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _country = _interopRequireDefault(require("../../__mocks__/country"));
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const onPickerToggleMockFn = jest.fn();
const PICKER_TOGGLER_COMPONENT = /*#__PURE__*/_react.default.createElement(_.default, {
  flag: _country.default.flag,
  selectedCode: _country.default.callingCode,
  onPickerToggle: onPickerToggleMockFn,
  onLayout: () => {},
  isPickerOpen: false
});
test('renders correctly', () => {
  const {
    toJSON,
    getByText
  } = (0, _reactNative.render)(PICKER_TOGGLER_COMPONENT);
  const rendered = toJSON();
  const callingCode = getByText(`+${_country.default.callingCode} `);
  expect(callingCode).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});
test('toggles picker on click', () => {
  const {
    getByTestId
  } = (0, _reactNative.render)(PICKER_TOGGLER_COMPONENT);
  const toggler = getByTestId('toggler-button');
  _reactNative.fireEvent.press(toggler);
  expect(onPickerToggleMockFn).toHaveBeenCalledWith(true);
});
//# sourceMappingURL=PickerToggler.test.js.map