import { createGlobalStyle } from 'styled-components';
import { DefaultStyledTheme } from './types';

const bg = (p: { theme: DefaultStyledTheme }) => p.theme.colors.background;

export default createGlobalStyle`
  body {
    margin: 0;
    background-image: radial-gradient(73% 147%, ${bg} 59%, ${bg} 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
    background-blend-mode: screen;
    font-family: ${(props) => props.theme.fonts.body};
    * {
      box-sizing: border-box;
    }
  }

  html, body, #root { height: 100%; }
`;
