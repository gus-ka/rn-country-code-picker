import React, { createRef, useEffect, useState } from 'react';
import { Dimensions, FlatList, KeyboardAvoidingView, Modal, Platform, TouchableOpacity, View } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import countries from '../../data/countries';
import { onLayoutToggle, sortData } from '../../functions/utility';
import { MODAL_SIZE, spacing } from '../../theme';
import ItemSeparator from '../ItemSeparator';
import PickerItem from '../PickerItem';
import PickerToggler from '../PickerToggler';
import Search from '../Search';
import useStyles from './styles';
const CallingCodePicker = _ref => {
  let {
    initialCountryCode,
    onValueChange,
    togglerContainerStyle,
    togglerLabelStyle,
    listContainerStyle,
    listStyle,
    pickerItemLabelStyle,
    searchInputStyle,
    pickerItemContainerStyle,
    style,
    isFlagVisible = true
  } = _ref;
  const [searchValue, setSearchValue] = useState('');
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [countriesData, setCountriesData] = useState(sortData(countries, ''));
  const localCountryCode = countries.find(f => f.alpha2Code === RNLocalize.getCountry());
  const [selectedCountry, setSelectedCountry] = useState(initialCountryCode ? countries.find(f => f.alpha2Code === initialCountryCode) ?? localCountryCode : localCountryCode);
  const containerRef = /*#__PURE__*/createRef();
  const [toggleMeasure, setToggleMeasure] = useState();
  const [containerMeasure, setContainerMeasure] = useState();
  const styles = useStyles(calculateModalVerticalPosition());
  const handleCountrySelect = country => {
    setSelectedCountry(country);
    setIsPickerOpen(false);
    setSearchValue('');
  };
  useEffect(() => {
    let newCountries = countries.filter(s => s.callingCode === searchValue.trim() || s.alpha2Code.trim().toLowerCase().includes(searchValue.trim().toLowerCase()) || s.name.trim().toLowerCase().includes(searchValue.trim().toLowerCase()));
    newCountries = sortData(newCountries, searchValue);
    setCountriesData(newCountries);
  }, [searchValue]);
  const renderPickerItem = renderItem => {
    const {
      item: country
    } = renderItem;
    return /*#__PURE__*/React.createElement(PickerItem, {
      country: country,
      onCountrySelect: handleCountrySelect,
      textStyle: pickerItemLabelStyle,
      containerStyle: pickerItemContainerStyle
    });
  };
  function calculateModalVerticalPosition() {
    const screenHeight = Dimensions.get('window').height;
    const y = ((containerMeasure === null || containerMeasure === void 0 ? void 0 : containerMeasure.y) ?? 0) + ((toggleMeasure === null || toggleMeasure === void 0 ? void 0 : toggleMeasure.height) ?? 0);
    return y + MODAL_SIZE > screenHeight ? screenHeight - MODAL_SIZE - 2 * spacing.s : y;
  }
  useEffect(() => {
    onValueChange(selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.callingCode);
  }, [selectedCountry, onValueChange]);
  function dismissPicker() {
    setIsPickerOpen(false);
    setSearchValue('');
  }
  return /*#__PURE__*/React.createElement(View, {
    style: style,
    ref: containerRef,
    onLayout: () => onLayoutToggle(containerRef, measure => setContainerMeasure(measure))
  }, /*#__PURE__*/React.createElement(PickerToggler, {
    flag: selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.flag,
    selectedCode: selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.callingCode,
    isPickerOpen: isPickerOpen,
    onPickerToggle: setIsPickerOpen,
    containerStyle: togglerContainerStyle,
    textStyle: togglerLabelStyle,
    onLayout: measure => setToggleMeasure(measure),
    isFlagVisible: isFlagVisible
  }), /*#__PURE__*/React.createElement(Modal, {
    visible: isPickerOpen,
    transparent: true,
    animationType: "fade"
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.modalChild
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.dismissButton,
    onPress: dismissPicker
  }), /*#__PURE__*/React.createElement(KeyboardAvoidingView, {
    behavior: "position",
    style: styles.keyboardAvoidingView,
    keyboardVerticalOffset: Platform.OS === 'ios' ? 10 : -60
  }, /*#__PURE__*/React.createElement(View, {
    style: listContainerStyle ?? styles.listContainer
  }, /*#__PURE__*/React.createElement(Search, {
    value: searchValue,
    onChangeText: setSearchValue,
    onClearInput: () => setSearchValue(''),
    inputStyle: searchInputStyle
  }), /*#__PURE__*/React.createElement(FlatList, {
    data: countriesData,
    renderItem: renderPickerItem,
    keyExtractor: (_, index) => index.toString(),
    showsVerticalScrollIndicator: false,
    style: listStyle,
    ItemSeparatorComponent: ItemSeparator,
    keyboardShouldPersistTaps: "always"
  }))))));
};
export default CallingCodePicker;
//# sourceMappingURL=index.js.map