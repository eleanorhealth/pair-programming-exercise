import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      accent: string;
      bodyBg: string;
      border: string;
      gray: string;
      mint: string;
      primary: string;
      secondary: string;
      text: string;
    };
    spacing: {
      xss: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    font: {
      family: string;
      sizeSm: string;
      sizeMd: string;
      sizeLg: string;
    };
  }
}
