// import original module declarations
import 'styled-components';
import { theme } from './index';

export type DefaultStyledTheme = typeof theme & {
  colors: {
    /** #fafafa */
    background: string;
    surface: string;
    onSurface: string;
    primary: {
      lightest: string;
      light: string;
      normal: string;
      dark: string;
      darkest: string;
    };
    neutral: {
      white: string;
      lightest: string;
      light: string;
      normal: string;
      dark: string;
      darkest: string;
    };
  };
};

// Extend styled-compoennts default theme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
  export interface DefaultTheme extends DefaultStyledTheme { }
}
