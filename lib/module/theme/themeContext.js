import { createContext, useContext } from 'react';
import React from 'react';
import { color } from './color';
import size from './size';
import { gradientColor } from './gradient';
export let ModuleName = /*#__PURE__*/function (ModuleName) {
  ModuleName["AUTOPILOT"] = "AUTOPILOT";
  ModuleName["BASE"] = "BASE";
  ModuleName["ORBIT"] = "ORBIT";
  ModuleName["NBFC"] = "NBFC";
  return ModuleName;
}({});
const ThemeContext = /*#__PURE__*/createContext({
  appName: ModuleName.BASE
});
export const ThemeProvider = ({
  appName,
  children
}) => {
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: {
      appName
    }
  }, children);
};
export const withTheme = (appName, children) => {
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: {
      appName
    }
  }, children);
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  const module = context.appName;
  return {
    colors: color[module],
    gradientColor: gradientColor[module],
    sizes: size,
    module
  };
};
export default withTheme;
//# sourceMappingURL=themeContext.js.map