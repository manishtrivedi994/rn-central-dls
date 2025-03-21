"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextVariants = exports.TextVariants = exports.TextTokenV3 = exports.TextToken = exports.LineHeightV3 = exports.LINE_HEIGHT = exports.FontSizeV3 = exports.Font = exports.FONT_TYPE = exports.FONT_SIZE = void 0;
var _reactNative = require("react-native");
let FONT_SIZE = exports.FONT_SIZE = /*#__PURE__*/function (FONT_SIZE) {
  FONT_SIZE[FONT_SIZE["xxs"] = 8] = "xxs";
  FONT_SIZE[FONT_SIZE["xs"] = 10] = "xs";
  FONT_SIZE[FONT_SIZE["s"] = 12] = "s";
  FONT_SIZE[FONT_SIZE["m"] = 14] = "m";
  FONT_SIZE[FONT_SIZE["l"] = 16] = "l";
  FONT_SIZE[FONT_SIZE["xl"] = 18] = "xl";
  FONT_SIZE[FONT_SIZE["xxl"] = 20] = "xxl";
  FONT_SIZE[FONT_SIZE["xxxl"] = 24] = "xxxl";
  FONT_SIZE[FONT_SIZE["xxxxl"] = 28] = "xxxxl";
  FONT_SIZE[FONT_SIZE["xxxxxl"] = 32] = "xxxxxl";
  FONT_SIZE[FONT_SIZE["xxxxxxl"] = 36] = "xxxxxxl";
  return FONT_SIZE;
}({});
let LINE_HEIGHT = exports.LINE_HEIGHT = /*#__PURE__*/function (LINE_HEIGHT) {
  LINE_HEIGHT[LINE_HEIGHT["xs"] = 12] = "xs";
  LINE_HEIGHT[LINE_HEIGHT["s"] = 14] = "s";
  LINE_HEIGHT[LINE_HEIGHT["m"] = 16] = "m";
  LINE_HEIGHT[LINE_HEIGHT["l"] = 18] = "l";
  LINE_HEIGHT[LINE_HEIGHT["xl"] = 20] = "xl";
  LINE_HEIGHT[LINE_HEIGHT["xxl"] = 22] = "xxl";
  LINE_HEIGHT[LINE_HEIGHT["xxxl"] = 24] = "xxxl";
  LINE_HEIGHT[LINE_HEIGHT["xxxxl"] = 28] = "xxxxl";
  LINE_HEIGHT[LINE_HEIGHT["xxxxxl"] = 34] = "xxxxxl";
  LINE_HEIGHT[LINE_HEIGHT["xxxxxxl"] = 38] = "xxxxxxl";
  LINE_HEIGHT[LINE_HEIGHT["xxxxxxxl"] = 44] = "xxxxxxxl";
  return LINE_HEIGHT;
}({});
let FONT_TYPE = exports.FONT_TYPE = /*#__PURE__*/function (FONT_TYPE) {
  FONT_TYPE["Bold"] = "Bold";
  FONT_TYPE["Medium"] = "Medium";
  FONT_TYPE["SemiBold"] = "SemiBold";
  FONT_TYPE["Regular"] = "Regular";
  FONT_TYPE["BoldItalic"] = "BoldItalic";
  FONT_TYPE["MediumItalic"] = "MediumItalic";
  FONT_TYPE["SemiBoldItalic"] = "SemiBoldItalic";
  FONT_TYPE["RegularItalic"] = "RegularItalic";
  return FONT_TYPE;
}({});
const Font = exports.Font = {
  Bold: 'Inter-Bold',
  //700 fontweight
  Medium: 'Inter-Medium',
  //500 fontweight
  SemiBold: 'Inter-SemiBold',
  //600 fontweight
  Regular: 'Inter-Regular',
  //400 fontweight

  BoldItalic: 'Inter-BoldItalic',
  //700 fontweight
  MediumItalic: 'Inter-MediumItalic',
  //500 fontweight
  SemiBoldItalic: 'Inter-SemiBoldItalic',
  //600 fontweight
  RegularItalic: 'Inter-Italic' //400 fontweight
};

/**@deprecated
 * use TextTokenV3 instead
 *
 */
var TextToken = exports.TextToken = /*#__PURE__*/function (TextToken) {
  TextToken[TextToken["display_bold"] = 0] = "display_bold";
  TextToken[TextToken["display1_semibold"] = 1] = "display1_semibold";
  TextToken[TextToken["heading1_bold"] = 2] = "heading1_bold";
  TextToken[TextToken["heading1_semibold"] = 3] = "heading1_semibold";
  TextToken[TextToken["heading2_bold"] = 4] = "heading2_bold";
  TextToken[TextToken["heading2_semibold"] = 5] = "heading2_semibold";
  TextToken[TextToken["heading3_bold"] = 6] = "heading3_bold";
  TextToken[TextToken["heading3_semibold"] = 7] = "heading3_semibold";
  TextToken[TextToken["heading4_bold"] = 8] = "heading4_bold";
  TextToken[TextToken["heading4_semibold"] = 9] = "heading4_semibold";
  TextToken[TextToken["label1_semibold"] = 10] = "label1_semibold";
  TextToken[TextToken["label1_medium"] = 11] = "label1_medium";
  TextToken[TextToken["label1_regular"] = 12] = "label1_regular";
  TextToken[TextToken["label2_semibold"] = 13] = "label2_semibold";
  TextToken[TextToken["label2_medium"] = 14] = "label2_medium";
  TextToken[TextToken["label2_regular"] = 15] = "label2_regular";
  TextToken[TextToken["label3_bold"] = 16] = "label3_bold";
  TextToken[TextToken["label3_semibold"] = 17] = "label3_semibold";
  TextToken[TextToken["label3_medium"] = 18] = "label3_medium";
  TextToken[TextToken["label3_regular"] = 19] = "label3_regular";
  TextToken[TextToken["label4_semibold"] = 20] = "label4_semibold";
  TextToken[TextToken["label4_medium"] = 21] = "label4_medium";
  TextToken[TextToken["label4_regular"] = 22] = "label4_regular";
  TextToken[TextToken["body1_semibold"] = 23] = "body1_semibold";
  TextToken[TextToken["body1_regular"] = 24] = "body1_regular";
  TextToken[TextToken["body2_semibold"] = 25] = "body2_semibold";
  TextToken[TextToken["body2_regular"] = 26] = "body2_regular";
  TextToken[TextToken["body3_semibold"] = 27] = "body3_semibold";
  TextToken[TextToken["body3_regular"] = 28] = "body3_regular";
  TextToken[TextToken["tiny_regular"] = 29] = "tiny_regular";
  TextToken[TextToken["tiny_medium"] = 30] = "tiny_medium";
  TextToken[TextToken["tiny_semibold"] = 31] = "tiny_semibold";
  TextToken[TextToken["tiny_bold"] = 32] = "tiny_bold";
  TextToken[TextToken["tiny_uppercase"] = 33] = "tiny_uppercase";
  return TextToken;
}(TextToken || {});
let FontSizeV3 = exports.FontSizeV3 = /*#__PURE__*/function (FontSizeV3) {
  FontSizeV3[FontSizeV3["FontSize900"] = 40] = "FontSize900";
  FontSizeV3[FontSizeV3["FontSize850"] = 38] = "FontSize850";
  FontSizeV3[FontSizeV3["FontSize800"] = 36] = "FontSize800";
  FontSizeV3[FontSizeV3["FontSize750"] = 32] = "FontSize750";
  FontSizeV3[FontSizeV3["FontSize700"] = 30] = "FontSize700";
  FontSizeV3[FontSizeV3["FontSize650"] = 28] = "FontSize650";
  FontSizeV3[FontSizeV3["FontSize600"] = 24] = "FontSize600";
  FontSizeV3[FontSizeV3["FontSize550"] = 22] = "FontSize550";
  FontSizeV3[FontSizeV3["FontSize500"] = 20] = "FontSize500";
  FontSizeV3[FontSizeV3["FontSize450"] = 18] = "FontSize450";
  FontSizeV3[FontSizeV3["FontSize400"] = 16] = "FontSize400";
  FontSizeV3[FontSizeV3["FontSize350"] = 16] = "FontSize350";
  FontSizeV3[FontSizeV3["FontSize300"] = 16] = "FontSize300";
  FontSizeV3[FontSizeV3["FontSize250"] = 14] = "FontSize250";
  FontSizeV3[FontSizeV3["FontSize200"] = 12] = "FontSize200";
  FontSizeV3[FontSizeV3["FontSize150"] = 10] = "FontSize150";
  return FontSizeV3;
}({});
let LineHeightV3 = exports.LineHeightV3 = /*#__PURE__*/function (LineHeightV3) {
  LineHeightV3[LineHeightV3["LineHeight900"] = 40] = "LineHeight900";
  LineHeightV3[LineHeightV3["LineHeight850"] = 38] = "LineHeight850";
  LineHeightV3[LineHeightV3["LineHeight800"] = 36] = "LineHeight800";
  LineHeightV3[LineHeightV3["LineHeight750"] = 32] = "LineHeight750";
  LineHeightV3[LineHeightV3["LineHeight700"] = 36] = "LineHeight700";
  LineHeightV3[LineHeightV3["LineHeight650"] = 34] = "LineHeight650";
  LineHeightV3[LineHeightV3["LineHeight600"] = 29] = "LineHeight600";
  LineHeightV3[LineHeightV3["LineHeight550"] = 29] = "LineHeight550";
  LineHeightV3[LineHeightV3["LineHeight500"] = 26] = "LineHeight500";
  LineHeightV3[LineHeightV3["LineHeight450"] = 23] = "LineHeight450";
  LineHeightV3[LineHeightV3["LineHeight400"] = 21] = "LineHeight400";
  LineHeightV3[LineHeightV3["LineHeight350"] = 23] = "LineHeight350";
  LineHeightV3[LineHeightV3["LineHeight300"] = 24] = "LineHeight300";
  LineHeightV3[LineHeightV3["LineHeight250"] = 20] = "LineHeight250";
  LineHeightV3[LineHeightV3["LineHeight200"] = 17] = "LineHeight200";
  LineHeightV3[LineHeightV3["LineHeight150"] = 15] = "LineHeight150";
  return LineHeightV3;
}({});
var TextTokenV3 = exports.TextTokenV3 = /*#__PURE__*/function (TextTokenV3) {
  TextTokenV3["bold_900"] = "bold_900";
  TextTokenV3["semibold_900"] = "semibold_900";
  TextTokenV3["bold_850"] = "bold_850";
  TextTokenV3["semibold_850"] = "semibold_850";
  TextTokenV3["bold_800"] = "bold_800";
  TextTokenV3["semibold_800"] = "semibold_800";
  TextTokenV3["bold_750"] = "bold_750";
  TextTokenV3["semibold_750"] = "semibold_750";
  TextTokenV3["bold_700"] = "bold_700";
  TextTokenV3["semibold_700"] = "semibold_700";
  TextTokenV3["bold_650"] = "bold_650";
  TextTokenV3["semibold_650"] = "semibold_650";
  TextTokenV3["bold_600"] = "bold_600";
  TextTokenV3["semibold_600"] = "semibold_600";
  TextTokenV3["bold_550"] = "bold_550";
  TextTokenV3["semibold_550"] = "semibold_550";
  TextTokenV3["medium_550"] = "medium_550";
  TextTokenV3["regular_550"] = "regular_550";
  TextTokenV3["bold_500"] = "bold_500";
  TextTokenV3["semibold_500"] = "semibold_500";
  TextTokenV3["medium_500"] = "medium_500";
  TextTokenV3["regular_500"] = "regular_500";
  TextTokenV3["bold_450"] = "bold_450";
  TextTokenV3["semibold_450"] = "semibold_450";
  TextTokenV3["medium_450"] = "medium_450";
  TextTokenV3["regular_450"] = "regular_450";
  TextTokenV3["bold_400"] = "bold_400";
  TextTokenV3["semibold_400"] = "semibold_400";
  TextTokenV3["medium_400"] = "medium_400";
  TextTokenV3["regular_400"] = "regular_400";
  TextTokenV3["bold_350"] = "bold_350";
  TextTokenV3["semibold_350"] = "semibold_350";
  TextTokenV3["medium_350"] = "medium_350";
  TextTokenV3["regular_350"] = "regular_350";
  TextTokenV3["bold_300"] = "bold_300";
  TextTokenV3["semibold_300"] = "semibold_300";
  TextTokenV3["medium_300"] = "medium_300";
  TextTokenV3["regular_300"] = "regular_300";
  TextTokenV3["bold_250"] = "bold_250";
  TextTokenV3["semibold_250"] = "semibold_250";
  TextTokenV3["medium_250"] = "medium_250";
  TextTokenV3["regular_250"] = "regular_250";
  TextTokenV3["bold_200"] = "bold_200";
  TextTokenV3["semibold_200"] = "semibold_200";
  TextTokenV3["medium_200"] = "medium_200";
  TextTokenV3["regular_200"] = "regular_200";
  TextTokenV3["bold_150"] = "bold_150";
  TextTokenV3["semibold_150"] = "semibold_150";
  TextTokenV3["medium_150"] = "medium_150";
  TextTokenV3["regular_150"] = "regular_150";
  return TextTokenV3;
}(TextTokenV3 || {});
const getTextVariants = ({
  italic = false
}) => _reactNative.StyleSheet.create({
  [TextToken.display_bold]: {
    fontSize: FONT_SIZE.xxxxxxl,
    lineHeight: LINE_HEIGHT.xxxxxxxl,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    letterSpacing: 0.02
  },
  [TextToken.display1_semibold]: {
    fontSize: FONT_SIZE.xxxxxxl,
    lineHeight: LINE_HEIGHT.xxxxxxxl,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    letterSpacing: 0.02
  },
  [TextToken.heading1_bold]: {
    fontSize: FONT_SIZE.xxxxxl,
    lineHeight: LINE_HEIGHT.xxxxxxl,
    fontFamily: italic ? Font.BoldItalic : Font.Bold
  },
  [TextToken.heading1_semibold]: {
    fontSize: FONT_SIZE.xxxxxl,
    lineHeight: LINE_HEIGHT.xxxxxxl,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.heading2_bold]: {
    fontSize: FONT_SIZE.xxxxl,
    lineHeight: LINE_HEIGHT.xxxxxl,
    fontFamily: italic ? Font.BoldItalic : Font.Bold
  },
  [TextToken.heading2_semibold]: {
    fontSize: FONT_SIZE.xxxxl,
    lineHeight: LINE_HEIGHT.xxxxxl,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.heading3_bold]: {
    fontSize: FONT_SIZE.xxxl,
    lineHeight: LINE_HEIGHT.xxxxl,
    fontFamily: italic ? Font.BoldItalic : Font.Bold
  },
  [TextToken.heading3_semibold]: {
    fontSize: FONT_SIZE.xxxl,
    lineHeight: LINE_HEIGHT.xxxxl,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.heading4_bold]: {
    fontSize: FONT_SIZE.xxl,
    lineHeight: LINE_HEIGHT.xxxl,
    fontFamily: italic ? Font.BoldItalic : Font.Bold
  },
  [TextToken.heading4_semibold]: {
    fontSize: FONT_SIZE.xxl,
    lineHeight: LINE_HEIGHT.xxxl,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.label1_semibold]: {
    fontSize: FONT_SIZE.xl,
    lineHeight: LINE_HEIGHT.xxl,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.label1_medium]: {
    fontSize: FONT_SIZE.xl,
    lineHeight: LINE_HEIGHT.xxl,
    fontFamily: italic ? Font.MediumItalic : Font.Medium
  },
  [TextToken.label1_regular]: {
    fontSize: FONT_SIZE.xl,
    lineHeight: LINE_HEIGHT.xxl,
    fontFamily: italic ? Font.RegularItalic : Font.Regular
  },
  [TextToken.label2_semibold]: {
    fontSize: FONT_SIZE.l,
    lineHeight: LINE_HEIGHT.l,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.label2_medium]: {
    fontSize: FONT_SIZE.l,
    lineHeight: LINE_HEIGHT.l,
    fontFamily: italic ? Font.MediumItalic : Font.Medium
  },
  [TextToken.label2_regular]: {
    fontSize: FONT_SIZE.l,
    lineHeight: LINE_HEIGHT.l,
    fontFamily: italic ? Font.RegularItalic : Font.Regular
  },
  [TextToken.label3_semibold]: {
    fontSize: FONT_SIZE.m,
    lineHeight: LINE_HEIGHT.m,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.label3_bold]: {
    fontSize: FONT_SIZE.m,
    lineHeight: LINE_HEIGHT.m,
    fontFamily: italic ? Font.BoldItalic : Font.Bold
  },
  [TextToken.label3_medium]: {
    fontSize: FONT_SIZE.m,
    lineHeight: LINE_HEIGHT.m,
    fontFamily: italic ? Font.MediumItalic : Font.Medium
  },
  [TextToken.label3_regular]: {
    fontSize: FONT_SIZE.m,
    lineHeight: LINE_HEIGHT.m,
    fontFamily: italic ? Font.RegularItalic : Font.Regular
  },
  [TextToken.label4_semibold]: {
    fontSize: FONT_SIZE.s,
    lineHeight: LINE_HEIGHT.s,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.label4_medium]: {
    fontSize: FONT_SIZE.s,
    lineHeight: LINE_HEIGHT.s,
    fontFamily: italic ? Font.MediumItalic : Font.Medium
  },
  [TextToken.label4_regular]: {
    fontSize: FONT_SIZE.s,
    lineHeight: LINE_HEIGHT.s,
    fontFamily: italic ? Font.RegularItalic : Font.Regular
  },
  [TextToken.body1_semibold]: {
    fontSize: FONT_SIZE.l,
    lineHeight: LINE_HEIGHT.xxl,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.body1_regular]: {
    fontSize: FONT_SIZE.l,
    lineHeight: LINE_HEIGHT.xxl,
    fontFamily: italic ? Font.RegularItalic : Font.Regular
  },
  [TextToken.body2_semibold]: {
    fontSize: FONT_SIZE.m,
    lineHeight: LINE_HEIGHT.xl,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.body2_regular]: {
    fontSize: FONT_SIZE.m,
    lineHeight: LINE_HEIGHT.xl,
    fontFamily: italic ? Font.RegularItalic : Font.Regular
  },
  [TextToken.body3_semibold]: {
    fontSize: FONT_SIZE.s,
    lineHeight: LINE_HEIGHT.l,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.body3_regular]: {
    fontSize: FONT_SIZE.s,
    lineHeight: LINE_HEIGHT.l,
    fontFamily: italic ? Font.RegularItalic : Font.Regular
  },
  [TextToken.tiny_regular]: {
    fontSize: FONT_SIZE.xs,
    lineHeight: LINE_HEIGHT.xs,
    fontFamily: italic ? Font.RegularItalic : Font.Regular
  },
  [TextToken.tiny_medium]: {
    fontSize: FONT_SIZE.xs,
    lineHeight: LINE_HEIGHT.xs,
    fontFamily: italic ? Font.MediumItalic : Font.Medium
  },
  [TextToken.tiny_semibold]: {
    fontSize: FONT_SIZE.xs,
    lineHeight: LINE_HEIGHT.xs,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold
  },
  [TextToken.tiny_bold]: {
    fontSize: FONT_SIZE.xs,
    lineHeight: LINE_HEIGHT.xs,
    fontFamily: italic ? Font.BoldItalic : Font.Bold
  },
  [TextToken.tiny_uppercase]: {
    fontSize: FONT_SIZE.xs,
    lineHeight: LINE_HEIGHT.xs,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    textTransform: 'uppercase'
  },
  [TextTokenV3.bold_900]: {
    fontSize: FontSizeV3.FontSize900,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight900
  },
  [TextTokenV3.semibold_900]: {
    fontSize: FontSizeV3.FontSize900,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight900
  },
  [TextTokenV3.bold_850]: {
    fontSize: FontSizeV3.FontSize850,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight850
  },
  [TextTokenV3.semibold_850]: {
    fontSize: FontSizeV3.FontSize850,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight850
  },
  [TextTokenV3.bold_800]: {
    fontSize: FontSizeV3.FontSize800,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight800
  },
  [TextTokenV3.semibold_800]: {
    fontSize: FontSizeV3.FontSize800,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight800
  },
  [TextTokenV3.bold_750]: {
    fontSize: FontSizeV3.FontSize750,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight750
  },
  [TextTokenV3.semibold_750]: {
    fontSize: FontSizeV3.FontSize750,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight750
  },
  [TextTokenV3.bold_700]: {
    fontSize: FontSizeV3.FontSize700,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight700
  },
  [TextTokenV3.semibold_700]: {
    fontSize: FontSizeV3.FontSize700,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight700
  },
  [TextTokenV3.bold_650]: {
    fontSize: FontSizeV3.FontSize650,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight650
  },
  [TextTokenV3.semibold_650]: {
    fontSize: FontSizeV3.FontSize650,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight650
  },
  [TextTokenV3.bold_600]: {
    fontSize: FontSizeV3.FontSize600,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight600
  },
  [TextTokenV3.semibold_600]: {
    fontSize: FontSizeV3.FontSize600,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight600
  },
  [TextTokenV3.bold_550]: {
    fontSize: FontSizeV3.FontSize550,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight550
  },
  [TextTokenV3.semibold_550]: {
    fontSize: FontSizeV3.FontSize550,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight550
  },
  [TextTokenV3.medium_550]: {
    fontSize: FontSizeV3.FontSize550,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    lineHeight: LineHeightV3.LineHeight550
  },
  [TextTokenV3.regular_550]: {
    fontSize: FontSizeV3.FontSize550,
    fontFamily: italic ? Font.RegularItalic : Font.Regular,
    lineHeight: LineHeightV3.LineHeight550
  },
  [TextTokenV3.bold_500]: {
    fontSize: FontSizeV3.FontSize500,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight500
  },
  [TextTokenV3.semibold_500]: {
    fontSize: FontSizeV3.FontSize500,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight500
  },
  [TextTokenV3.medium_500]: {
    fontSize: FontSizeV3.FontSize500,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    lineHeight: LineHeightV3.LineHeight500
  },
  [TextTokenV3.regular_500]: {
    fontSize: FontSizeV3.FontSize500,
    fontFamily: italic ? Font.RegularItalic : Font.Regular,
    lineHeight: LineHeightV3.LineHeight500
  },
  [TextTokenV3.bold_450]: {
    fontSize: FontSizeV3.FontSize450,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight450
  },
  [TextTokenV3.semibold_450]: {
    fontSize: FontSizeV3.FontSize450,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight450
  },
  [TextTokenV3.medium_450]: {
    fontSize: FontSizeV3.FontSize450,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    lineHeight: LineHeightV3.LineHeight450
  },
  [TextTokenV3.regular_450]: {
    fontSize: FontSizeV3.FontSize450,
    fontFamily: italic ? Font.RegularItalic : Font.Regular,
    lineHeight: LineHeightV3.LineHeight450
  },
  [TextTokenV3.bold_400]: {
    fontSize: FontSizeV3.FontSize400,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight400
  },
  [TextTokenV3.semibold_400]: {
    fontSize: FontSizeV3.FontSize400,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight400
  },
  [TextTokenV3.medium_400]: {
    fontSize: FontSizeV3.FontSize400,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    lineHeight: LineHeightV3.LineHeight400
  },
  [TextTokenV3.regular_400]: {
    fontSize: FontSizeV3.FontSize400,
    fontFamily: italic ? Font.RegularItalic : Font.Regular,
    lineHeight: LineHeightV3.LineHeight400
  },
  [TextTokenV3.bold_350]: {
    fontSize: FontSizeV3.FontSize350,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight350
  },
  [TextTokenV3.semibold_350]: {
    fontSize: FontSizeV3.FontSize350,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight350
  },
  [TextTokenV3.medium_350]: {
    fontSize: FontSizeV3.FontSize350,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    lineHeight: LineHeightV3.LineHeight350
  },
  [TextTokenV3.regular_350]: {
    fontSize: FontSizeV3.FontSize350,
    fontFamily: italic ? Font.RegularItalic : Font.Regular,
    lineHeight: LineHeightV3.LineHeight350
  },
  [TextTokenV3.bold_300]: {
    fontSize: FontSizeV3.FontSize300,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight300
  },
  [TextTokenV3.semibold_300]: {
    fontSize: FontSizeV3.FontSize300,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight300
  },
  [TextTokenV3.medium_300]: {
    fontSize: FontSizeV3.FontSize300,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    lineHeight: LineHeightV3.LineHeight300
  },
  [TextTokenV3.regular_300]: {
    fontSize: FontSizeV3.FontSize300,
    fontFamily: italic ? Font.RegularItalic : Font.Regular,
    lineHeight: LineHeightV3.LineHeight300
  },
  [TextTokenV3.bold_250]: {
    fontSize: FontSizeV3.FontSize250,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight250
  },
  [TextTokenV3.semibold_250]: {
    fontSize: FontSizeV3.FontSize250,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight250
  },
  [TextTokenV3.medium_250]: {
    fontSize: FontSizeV3.FontSize250,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    lineHeight: LineHeightV3.LineHeight250
  },
  [TextTokenV3.regular_250]: {
    fontSize: FontSizeV3.FontSize250,
    fontFamily: italic ? Font.RegularItalic : Font.Regular,
    lineHeight: LineHeightV3.LineHeight250
  },
  [TextTokenV3.bold_200]: {
    fontSize: FontSizeV3.FontSize200,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight200
  },
  [TextTokenV3.semibold_200]: {
    fontSize: FontSizeV3.FontSize200,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight200
  },
  [TextTokenV3.medium_200]: {
    fontSize: FontSizeV3.FontSize200,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    lineHeight: LineHeightV3.LineHeight200
  },
  [TextTokenV3.regular_200]: {
    fontSize: FontSizeV3.FontSize200,
    fontFamily: italic ? Font.RegularItalic : Font.Regular,
    lineHeight: LineHeightV3.LineHeight200
  },
  [TextTokenV3.bold_150]: {
    fontSize: FontSizeV3.FontSize150,
    fontFamily: italic ? Font.BoldItalic : Font.Bold,
    lineHeight: LineHeightV3.LineHeight150
  },
  [TextTokenV3.semibold_150]: {
    fontSize: FontSizeV3.FontSize150,
    fontFamily: italic ? Font.SemiBoldItalic : Font.SemiBold,
    lineHeight: LineHeightV3.LineHeight150
  },
  [TextTokenV3.medium_150]: {
    fontSize: FontSizeV3.FontSize150,
    fontFamily: italic ? Font.MediumItalic : Font.Medium,
    lineHeight: LineHeightV3.LineHeight150
  },
  [TextTokenV3.regular_150]: {
    fontSize: FontSizeV3.FontSize150,
    fontFamily: italic ? Font.RegularItalic : Font.Regular,
    lineHeight: LineHeightV3.LineHeight150
  }
});
exports.getTextVariants = getTextVariants;
const TextVariants = exports.TextVariants = getTextVariants({
  italic: false
});
//# sourceMappingURL=styles.js.map