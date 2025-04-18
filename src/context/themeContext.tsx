import { createContext, useContext, useState } from 'react';

interface ThemeContextProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext({} as ThemeContextProps);

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
