"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidRegNo = exports.getColor = exports.TEXT_PROP_MAP_STANDALONE = exports.TEXT_PROP_MAP = exports.NUMBER_REGEX = exports.NEW_NUMBER_REGEX = exports.MOBILE_NUMBER_REGEX_2 = exports.MAX_INPUT_HEIGHT = exports.HEIGHT = exports.BHARAT_NUMBER_REGEX = exports.ALPHA_NUMERIC_SPACE_REGEX = void 0;
var _react = _interopRequireDefault(require("react"));
var _type = require("./type");
var _index = _interopRequireDefault(require("../../icons/index"));
var _type2 = require("../StandaloneTextInput/type");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const HEIGHT = exports.HEIGHT = 44;
const MAX_INPUT_HEIGHT = exports.MAX_INPUT_HEIGHT = 80;
const NUMBER_REGEX = exports.NUMBER_REGEX = new RegExp(/^[a-zA-Z]{2}[0-9]{1,3}[a-zA-Z]{1,3}[0-9]{4}$/);
const BHARAT_NUMBER_REGEX = exports.BHARAT_NUMBER_REGEX = new RegExp(/^[0-9]{2}BH[0-9]{4}[A-HJ-NP-Z]{1,2}$/);
const NEW_NUMBER_REGEX = exports.NEW_NUMBER_REGEX = new RegExp(/^[A-Z]{2}[ -]{0,1}[0-9]{2}[ -]{0,1}[0-9]{1,4}$/);
const MOBILE_NUMBER_REGEX_2 = exports.MOBILE_NUMBER_REGEX_2 = /^[6-9]\d{9}$/;
const ALPHA_NUMERIC_SPACE_REGEX = exports.ALPHA_NUMERIC_SPACE_REGEX = /[^a-zA-Z0-9 ]/g;
const isValidRegNo = _value => {
  const value = _value === null || _value === void 0 ? void 0 : _value.toUpperCase();
  return !!value && (NUMBER_REGEX.test(value) || BHARAT_NUMBER_REGEX.test(value) || NEW_NUMBER_REGEX.test(value));
};
exports.isValidRegNo = isValidRegNo;
const defaultFormatter = text => text;
const regNoFormatter = regNo => {
  var _formatted;
  if (!regNo) return '';
  const unformatted = regNo.split(' ').join('');
  let formatted = unformatted;
  if (unformatted.length > 4) {
    formatted = unformatted.replace(/^(\w{2})(\w{2})/, '$1 $2 ');
  } else if (unformatted.length > 2) {
    formatted = unformatted.replace(/^(\w{2})/, '$1 ');
  }
  return (_formatted = formatted) === null || _formatted === void 0 || (_formatted = _formatted.replace(ALPHA_NUMERIC_SPACE_REGEX, '')) === null || _formatted === void 0 ? void 0 : _formatted.toUpperCase();
};
const regNoUnFormatter = regNo => {
  var _unformatted$replace;
  const unformatted = regNo.split(' ').join('');
  return unformatted === null || unformatted === void 0 || (_unformatted$replace = unformatted.replace(ALPHA_NUMERIC_SPACE_REGEX, '')) === null || _unformatted$replace === void 0 ? void 0 : _unformatted$replace.toUpperCase();
};
const isValidMobileNo = value => {
  var _value$match;
  return !!value && !!(value !== null && value !== void 0 && (_value$match = value.match) !== null && _value$match !== void 0 && _value$match.call(value, MOBILE_NUMBER_REGEX_2)) && (value === null || value === void 0 ? void 0 : value.length) === 10;
};
const defaultIsValid = _text => true;
const amountFormatter = {
  formatter: text => {
    const strippedText = text.replace(/\D/g, '');

    // Add comma separators for thousands
    let formatted = strippedText.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formatted;
  },
  unformatter: text => text === null || text === void 0 ? void 0 : text.replace(/,/g, ''),
  prefix: '₹',
  placeholder: undefined,
  maxLength: undefined,
  checkValidity: defaultIsValid,
  showSeparator: false
};
const TEXT_PROP_MAP = ({
  colors,
  focused,
  inverse,
  value
}) => ({
  [_type.TextInputType.VEHICLE_NO]: {
    formatter: regNoFormatter,
    unformatter: regNoUnFormatter,
    prefix: '',
    placeholder: 'DL 12 AA 1234',
    maxLength: 15,
    checkValidity: isValidRegNo,
    showSeparator: true
  },
  [_type.TextInputType.TEXT]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: '',
    placeholder: undefined,
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  },
  [_type.TextInputType.MULTILINE]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: '',
    placeholder: undefined,
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  },
  [_type.TextInputType.ADHAAR]: {
    formatter: text => {
      const strippedText = text.replace(/\D/g, '');
      const formattedText = strippedText === null || strippedText === void 0 ? void 0 : strippedText.replace(/(\d{4})(?=\d)/g, '$1 ');
      return formattedText === null || formattedText === void 0 ? void 0 : formattedText.slice(0, 14);
    },
    unformatter: text => {
      return text.replace(/\D/g, '');
    },
    prefix: '',
    placeholder: undefined,
    maxLength: 14,
    checkValidity: defaultIsValid,
    showSeparator: false
  },
  [_type.TextInputType.AMOUNT]: amountFormatter,
  [_type.TextInputType.AMOUNT_RUPEE]: {
    ...amountFormatter,
    formatter: amount => {
      const amountVal = amount.toString();
      const amountLen = amountVal.length;
      let lastThree = amountVal.substring(amountLen - 3);
      const otherNumbers = amountVal.substring(0, amountLen - 3);
      if (otherNumbers !== '') {
        lastThree = `,${lastThree}`;
      }
      const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
      return res;
    }
  },
  [_type.TextInputType.EMAIL]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: '',
    placeholder: 'name@gmail.com',
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  },
  [_type.TextInputType.PHONE_NUMBER]: {
    formatter: text => {
      // Remove all non-numeric characters
      const strippedText = text === null || text === void 0 ? void 0 : text.replace(/\D/g, '');

      // Add a space after the first four digits
      //   let formatted = strippedText.replace(/^(\d{4})/, '$1 ');

      return strippedText;
    },
    unformatter: text => {
      // Remove all non-numeric characters and spaces
      const unformatted = text === null || text === void 0 ? void 0 : text.replace(/[\D\s]/g, '');
      return unformatted;
    },
    prefix: '+91',
    placeholder: '99999 99999',
    maxLength: 10,
    checkValidity: isValidMobileNo,
    showSeparator: false
  },
  [_type.TextInputType.SEARCH_BAR]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: /*#__PURE__*/_react.default.createElement(_index.default.SearchIcon, {
      color: inverse && (focused || value) ? colors.icon.defaultInverse : colors.icon.defaultSecondary
    }),
    placeholder: undefined,
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  }
});
exports.TEXT_PROP_MAP = TEXT_PROP_MAP;
const TEXT_PROP_MAP_STANDALONE = colors => ({
  [_type2.StandaloneTextInputType.VEHICLE_NO]: {
    formatter: regNoFormatter,
    unformatter: regNoUnFormatter,
    prefix: '',
    placeholder: 'DL 12 AA 1234',
    maxLength: 15,
    checkValidity: isValidRegNo,
    showSeparator: false
  },
  [_type2.StandaloneTextInputType.TEXT]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: '',
    placeholder: undefined,
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  },
  [_type2.StandaloneTextInputType.PHONE_NUMBER]: {
    formatter: text => {
      // Remove all non-numeric characters
      const strippedText = text === null || text === void 0 ? void 0 : text.replace(/\D/g, '');
      return strippedText;
    },
    unformatter: text => {
      // Remove all non-numeric characters and spaces
      const unformatted = text === null || text === void 0 ? void 0 : text.replace(/[\D\s]/g, '');
      return unformatted;
    },
    prefix: '+91',
    placeholder: '99999 99999',
    maxLength: 10,
    checkValidity: isValidMobileNo,
    showSeparator: false
  }
});
exports.TEXT_PROP_MAP_STANDALONE = TEXT_PROP_MAP_STANDALONE;
const getBorderColor = ({
  colors,
  isFocused,
  isErrorState,
  inverse
}) => {
  if (isErrorState) {
    return colors.border.stateError;
  } else if (isFocused) {
    return inverse ? colors.border.defaultWhite : colors.border.defaultAccent;
  }
  return inverse ? colors.border.defaultSecondary : colors.border.defaultPrimary;
};
const getIconColor = ({
  colors,
  isFocused,
  inverse,
  value
}) => {
  if (!inverse) return colors.icon.defaultSecondary;
  if (isFocused || value) return colors.icon.defaultInverse;
  return colors.icon.defaultSecondary;
};
const getColor = ({
  colors,
  isFocused,
  inverse,
  isErrorState,
  value
}) => {
  return {
    border: getBorderColor({
      colors,
      inverse,
      isErrorState,
      isFocused
    }),
    icon: getIconColor({
      colors,
      inverse,
      isFocused,
      value
    })
  };
};
exports.getColor = getColor;
//# sourceMappingURL=config.js.map