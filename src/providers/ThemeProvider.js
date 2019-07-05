import React, { useEffect, useState } from 'react';

const ThemeContext = React.createContext(["light", () => {}]);

const ThemeContextProvider = (props) => {
  const initialTheme = () => window.localStorage.getItem("theme") || "light";
  const themeHook = useState(initialTheme);
  const theme = themeHook[0];

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeHook}>
      {props.children}
    </ThemeContext.Provider>
  )
};

export { ThemeContext, ThemeContextProvider };
