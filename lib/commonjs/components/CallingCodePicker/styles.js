"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _theme = require("../../theme");
const shadowStyle = _reactNative.StyleSheet.create({
  listContainer: _reactNative.Platform.OS === 'ios' ? {
    shadowColor: _theme.colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2
    }
  } : {
    elevation: 3,
    overflow: 'hidden'
  }
});
const useStyles = y => {
  const style = (0, _react.useMemo)(() => _reactNative.StyleSheet.create({
    keyboardAvoidingView: {
      position: 'absolute',
      alignSelf: 'center',
      top: y,
      width: '90%'
    },
    listContainer: {
      ...shadowStyle.listContainer,
      width: '100%',
      height: _theme.MODAL_SIZE,
      backgroundColor: _theme.colors.white,
      padding: _theme.spacing.s,
      borderRadius: _theme.borderRadius.m,
      justifyContent: 'center',
      marginTop: _theme.spacing.s
    },
    dismissButton: {
      flex: 1,
      width: '100%'
    },
    modalChild: {
      flex: 1
    }
  }), [y]);
  return style;
};
var _default = useStyles;
exports.default = _default;
//# sourceMappingURL=styles.js.map