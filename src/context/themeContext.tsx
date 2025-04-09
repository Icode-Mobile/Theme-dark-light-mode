import { THEME_COLORS } from '@/utils/theme/colors';
import { createContext, useContext, useState } from 'react';

interface ThemeContextProps {
  theme: typeof THEME_COLORS.LIGHT | typeof THEME_COLORS.DARK;
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
        theme: isDark ? THEME_COLORS.DARK : THEME_COLORS.LIGHT,
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
