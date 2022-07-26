import { createTheme, NextUIProvider } from '@nextui-org/react';
import { useTheme, ThemeProvider as NextThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

type ThemesProviderProps = {
  children: ReactNode;
};

export const ThemesProvider = ({ children }: ThemesProviderProps) => {
  return (
    <NextThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemeProvider>
  );
};

export const useNextTheme = () => useTheme();
