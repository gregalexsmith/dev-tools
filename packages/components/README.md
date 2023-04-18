![npm (scoped)](https://img.shields.io/npm/v/@gregalexsmith/components)

# Components

React Component library using [tailwindcss](https://tailwindcss.com/).

Storybook: https://dev-tools-components.netlify.app/

## Getting started

1. Dependancies:
[Setup your project with Tailwind](https://tailwindcss.com/docs/installation)

1. Install:
```shell
npm i @gregalexsmith/components
```
3. Update the project's `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@gregalexsmith/components/tailwind.config')
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/@gregalexsmith/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {},
  },
}
```

## References:
- https://tailwindcss.com/
- https://flowbite.com/
