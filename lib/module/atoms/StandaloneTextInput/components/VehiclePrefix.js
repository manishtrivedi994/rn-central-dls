import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, TextTokenV3 } from '../../../typography/text';
const indianFlagPath = require('../../../assets/images/flag.png');
export const VehiclePrefix = props => {
  const {
    colors
  } = props;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Image, {
    source: indianFlagPath,
    style: styles.flag
  }), /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.semibold_200,
    fontColor: colors.text.defaultInverse
  }, "IND"));
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flag: {
    height: 14,
    width: 14,
    resizeMode: 'contain'
  }
});
//# sourceMappingURL=VehiclePrefix.js.map