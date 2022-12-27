import { themes } from '@storybook/theming';
import './index.css'

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