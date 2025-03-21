import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme/themeContext';
import { Text, TextTokenV3 } from '../../typography/text';
import { Sizes } from 'rn-central-dls';
import Svgs from '../../icons';
import locale from '../../locale';
const DefaultDivider = () => {
  const {
    colors
  } = useTheme();
  const styles = useMemo(() => st(colors), [colors]);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.divider
  });
};
const DottedDivider = () => {
  const [dividerLength, setDividerLength] = useState(0);
  const onLayout = event => {
    const {
      width
    } = event.nativeEvent.layout;
    setDividerLength(width);
  };
  return /*#__PURE__*/React.createElement(View, {
    onLayout: onLayout
  }, /*#__PURE__*/React.createElement(Svgs.DashedLine, {
    width: dividerLength
  }));
};
const ORDivider = () => {
  const {
    colors
  } = useTheme();
  const styles = useMemo(() => st(colors), [colors]);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.orLine
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.divider
  }), /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.semibold_200,
    fontColor: colors.text.defaultTertiary,
    style: styles.or
  }, locale.OR), /*#__PURE__*/React.createElement(View, {
    style: styles.divider
  }));
};
const Dividers = {
  DEFAULT: /*#__PURE__*/React.createElement(DefaultDivider, null),
  OR: /*#__PURE__*/React.createElement(ORDivider, null),
  DOTTED: /*#__PURE__*/React.createElement(DottedDivider, null)
};
const DividerComponent = props => {
  const {
    type = 'DEFAULT',
    style
  } = props ?? {};
  return Dividers[type] ? /*#__PURE__*/React.createElement(View, {
    style: style
  }, Dividers[type]) : /*#__PURE__*/React.createElement(React.Fragment, null);
};
const st = colors => StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.border.defaultDisabled,
    flex: 1
  },
  or: {
    marginHorizontal: Sizes.Space.space8
  },
  orLine: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
const Divider = /*#__PURE__*/React.memo(DividerComponent);
export { Divider };
//# sourceMappingURL=index.js.map