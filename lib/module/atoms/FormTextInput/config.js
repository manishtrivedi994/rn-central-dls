import React from 'react';
import { TextInputType } from './type';
import Svgs from '../../icons/index';
import { StandaloneTextInputType } from '../StandaloneTextInput/type';
import { VehiclePrefix } from '../StandaloneTextInput/components/VehiclePrefix';
export const HEIGHT = 44;
export const MAX_INPUT_HEIGHT = 80;
export const NUMBER_REGEX = new RegExp(/^[a-zA-Z]{2}[0-9]{1,3}[a-zA-Z]{1,3}[0-9]{4}$/);
export const BHARAT_NUMBER_REGEX = new RegExp(/^[0-9]{2}BH[0-9]{4}[A-HJ-NP-Z]{1,2}$/);
export const NEW_NUMBER_REGEX = new RegExp(/^[A-Z]{2}[ -]{0,1}[0-9]{2}[ -]{0,1}[0-9]{1,4}$/);
export const MOBILE_NUMBER_REGEX_2 = /^[6-9]\d{9}$/;
export const ALPHA_NUMERIC_SPACE_REGEX = /[^a-zA-Z0-9 ]/g;
export const isValidRegNo = _value => {
  const value = _value === null || _value === void 0 ? void 0 : _value.toUpperCase();
  return !!value && (NUMBER_REGEX.test(value) || BHARAT_NUMBER_REGEX.test(value) || NEW_NUMBER_REGEX.test(value));
};
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
export const TEXT_PROP_MAP = ({
  colors,
  focused,
  inverse,
  value
}) => ({
  [TextInputType.VEHICLE_NO]: {
    formatter: regNoFormatter,
    unformatter: regNoUnFormatter,
    prefix: /*#__PURE__*/React.createElement(Svgs.AshokaChakra, {
      color: colors.icon.accent
    }),
    placeholder: 'DL 12 AA 1234',
    maxLength: 15,
    checkValidity: isValidRegNo,
    showSeparator: true
  },
  [TextInputType.TEXT]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: '',
    placeholder: undefined,
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  },
  [TextInputType.MULTILINE]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: '',
    placeholder: undefined,
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  },
  [TextInputType.ADHAAR]: {
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
  [TextInputType.AMOUNT]: amountFormatter,
  [TextInputType.AMOUNT_RUPEE]: {
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
  [TextInputType.EMAIL]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: '',
    placeholder: 'name@gmail.com',
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  },
  [TextInputType.PHONE_NUMBER]: {
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
  [TextInputType.SEARCH_BAR]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: /*#__PURE__*/React.createElement(Svgs.SearchIcon, {
      color: inverse && (focused || value) ? colors.icon.defaultInverse : colors.icon.defaultSecondary
    }),
    placeholder: undefined,
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  }
});
export const TEXT_PROP_MAP_STANDALONE = colors => ({
  [StandaloneTextInputType.VEHICLE_NO]: {
    formatter: regNoFormatter,
    unformatter: regNoUnFormatter,
    prefix: /*#__PURE__*/React.createElement(VehiclePrefix, {
      colors: colors
    }),
    placeholder: 'DL 12 AA 1234',
    maxLength: 15,
    checkValidity: isValidRegNo,
    showSeparator: false
  },
  [StandaloneTextInputType.TEXT]: {
    formatter: defaultFormatter,
    unformatter: defaultFormatter,
    prefix: '',
    placeholder: undefined,
    maxLength: undefined,
    checkValidity: defaultIsValid,
    showSeparator: false
  },
  [StandaloneTextInputType.PHONE_NUMBER]: {
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
export const getColor = ({
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
//# sourceMappingURL=config.js.map