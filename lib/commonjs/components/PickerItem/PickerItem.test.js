"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _country = _interopRequireDefault(require("../../__mocks__/country"));
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const onCountrySelectMockFn = jest.fn();
const PICKER_ITEM_COMPONENT = /*#__PURE__*/_react.default.createElement(_.default, {
  country: _country.default,
  onCountrySelect: onCountrySelectMockFn
});
test('renders correctly', () => {
  const {
    toJSON,
    getByText
  } = (0, _reactNative.render)(PICKER_ITEM_COMPONENT);
  const rendered = toJSON();
  const name = getByText(`${_country.default.name} `);
  const callingCode = getByText(`+${_country.default.callingCode} `);
  expect(name).toBeTruthy();
  expect(callingCode).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});
test('picks country on click', () => {
  const {
    getByTestId
  } = (0, _reactNative.render)(PICKER_ITEM_COMPONENT);
  const pickerItem = getByTestId('picker-item');
  _reactNative.fireEvent.press(pickerItem);
  expect(onCountrySelectMockFn).toHaveBeenCalledWith(_country.default);
});
//# sourceMappingURL=PickerItem.test.js.map