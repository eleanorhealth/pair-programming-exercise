import { DefaultTheme } from "styled-components";

export type ThemeGetter<K extends keyof DefaultTheme> = (
  key: keyof DefaultTheme[K]
) => (themeProps: { theme: DefaultTheme }) => string;
