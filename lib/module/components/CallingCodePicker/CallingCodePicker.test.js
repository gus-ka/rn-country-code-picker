import React from 'react';
import { render } from '@testing-library/react-native';
import CallingCodePicker from './';
jest.mock('react-native-localize');
test('renders correctly', () => {
  const onValueChangeMockFn = jest.fn();
  const {
    toJSON
  } = render( /*#__PURE__*/React.createElement(CallingCodePicker, {
    onValueChange: onValueChangeMockFn
  }));
  const rendered = toJSON();
  expect(onValueChangeMockFn).toHaveBeenCalledWith('1');
  expect(rendered).toMatchSnapshot();
});
//# sourceMappingURL=CallingCodePicker.test.js.map