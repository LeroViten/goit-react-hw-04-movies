import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const updateBodyStyles = () => {
    if (isDark) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
    if (!isDark) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    updateBodyStyles();
  };

  return (
    <ThemeContext.Provider value={[{ isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
