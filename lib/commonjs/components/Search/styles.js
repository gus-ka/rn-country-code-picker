"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _default = _reactNative.StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  searchIconContainer: {
    alignSelf: 'center'
  },
  input: {
    marginHorizontal: _theme.spacing.s,
    marginVertical: _theme.spacing.s,
    fontSize: 17,
    flex: 1
  },
  clearContainer: {
    backgroundColor: _theme.colors.greyLight,
    height: 20,
    width: 20,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
exports.default = _default;
//# sourceMappingURL=styles.js.map