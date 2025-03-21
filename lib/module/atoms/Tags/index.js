import React from 'react';
import { StyleSheet } from 'react-native';
import { default as ThemeSize } from '../../theme/size';
import { useTheme } from '../../theme/themeContext';
import BaseTags from '../base/BaseTags';
import { getStyles } from './config';
import { TextTokenV3 } from '../../typography/text';
const TagsComponent = props => {
  const {
    size = "SMALL",
    appearance,
    tagsCount = 0,
    label,
    style,
    bg
  } = props;
  const {
    colors
  } = useTheme();
  const {
    textColor,
    ...baseStyles
  } = React.useMemo(() => {
    return getStyles({
      colors,
      appearance,
      bg: bg ?? "PRIMARY"
    });
  }, [colors, appearance]);

  // backward compatibility, MEDIUM is deprecated
  const _size = React.useMemo(() => size === "MEDIUM" ? "LARGE" : size, [size]);
  return /*#__PURE__*/React.createElement(BaseTags, {
    label: label ?? tagsCount,
    containerStyle: [style, baseStyles, st[_size]],
    textColor: textColor,
    textVariant: _size === "LARGE" ? TextTokenV3.regular_200 : TextTokenV3.medium_150
  });
};
const Tags = /*#__PURE__*/React.memo(TagsComponent);
export { Tags };
const st = StyleSheet.create({
  SMALL: {
    height: 20,
    paddingHorizontal: ThemeSize.Space.space4
  },
  LARGE: {
    height: 22,
    paddingHorizontal: ThemeSize.Space.space4
  }
});
//# sourceMappingURL=index.js.map