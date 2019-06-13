import React, { useState } from 'react';

const ThemeContext = React.createContext(["light", () => {}]);

const ThemeContextProvider = (props) => {
  const themeHook = useState("dark");
  return (
    <ThemeContext.Provider value={themeHook}>
      {props.children}
    </ThemeContext.Provider>
  )
};

export { ThemeContext, ThemeContextProvider };
