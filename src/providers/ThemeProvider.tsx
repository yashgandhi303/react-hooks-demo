import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

const ThemeContext = React.createContext<[string, Dispatch<SetStateAction<string>>]>([
  'light',
  theme => theme,
]);

const ThemeContextProvider = (props: any) => {
  const initialTheme = () => window.localStorage.getItem('theme') || 'light';
  const themeHook = useState(initialTheme);
  const theme = themeHook[0];

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={themeHook}>{props.children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeContextProvider };
