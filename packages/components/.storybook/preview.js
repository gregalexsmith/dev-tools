import { themes } from '@storybook/theming';
import './index.css'

// Temp fix for vite + jest + storyook
// https://github.com/storybookjs/storybook/issues/15391#issuecomment-869229982
import * as jest from "jest-mock";
window.jest = jest;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark,  },
    // Override the default light theme
    light: { ...themes.normal,  }
  }
}