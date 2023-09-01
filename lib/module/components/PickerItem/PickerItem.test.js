import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import mockCountry from '../../__mocks__/country';
import PickerItem from './';
const onCountrySelectMockFn = jest.fn();
const PICKER_ITEM_COMPONENT = /*#__PURE__*/React.createElement(PickerItem, {
  country: mockCountry,
  onCountrySelect: onCountrySelectMockFn
});
test('renders correctly', () => {
  const {
    toJSON,
    getByText
  } = render(PICKER_ITEM_COMPONENT);
  const rendered = toJSON();
  const name = getByText(`${mockCountry.name} `);
  const callingCode = getByText(`+${mockCountry.callingCode} `);
  expect(name).toBeTruthy();
  expect(callingCode).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});
test('picks country on click', () => {
  const {
    getByTestId
  } = render(PICKER_ITEM_COMPONENT);
  const pickerItem = getByTestId('picker-item');
  fireEvent.press(pickerItem);
  expect(onCountrySelectMockFn).toHaveBeenCalledWith(mockCountry);
});
//# sourceMappingURL=PickerItem.test.js.map