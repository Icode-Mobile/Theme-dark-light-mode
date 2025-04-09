import ThemeProvider from '@/context/themeContext';
import Home from '@/screens/Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
