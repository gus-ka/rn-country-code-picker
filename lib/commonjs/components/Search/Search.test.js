"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const onChangeTextMockFn = jest.fn();
const onClearInputMockFn = jest.fn();
const SEARCH_VALUE = 'Turkey';
const SEARCH_COMPONENT = /*#__PURE__*/_react.default.createElement(_.default, {
  onChangeText: onChangeTextMockFn,
  onClearInput: onClearInputMockFn
});
test('renders correctly', () => {
  const {
    toJSON
  } = (0, _reactNative.render)(SEARCH_COMPONENT);
  const rendered = toJSON();
  expect(rendered).toMatchSnapshot();
});
test('changes the input value', () => {
  const {
    getByTestId
  } = (0, _reactNative.render)(SEARCH_COMPONENT);
  const textInput = getByTestId('search-input');
  _reactNative.fireEvent.changeText(textInput, SEARCH_VALUE);
  expect(onChangeTextMockFn).toBeCalledWith(SEARCH_VALUE);
  expect(textInput.props.value).toBe(SEARCH_VALUE);
});
test('clears the input value', () => {
  const {
    getByTestId
  } = (0, _reactNative.render)(SEARCH_COMPONENT);
  const textInput = getByTestId('search-input');
  _reactNative.fireEvent.changeText(textInput, SEARCH_VALUE);
  expect(onChangeTextMockFn).toBeCalledWith(SEARCH_VALUE);
  expect(textInput.props.value).toBe(SEARCH_VALUE);
  const clearButton = getByTestId('clear-button');
  _reactNative.fireEvent.press(clearButton);
  expect(onClearInputMockFn).toBeCalled();
  expect(textInput.props.value).toBe('');
  expect(onChangeTextMockFn).toBeCalledWith('');
});
//# sourceMappingURL=Search.test.js.map