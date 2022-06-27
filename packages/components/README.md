![npm (scoped)](https://img.shields.io/npm/v/@gregalexsmith/components)

# Components

React Component library using [tailwindcss](https://tailwindcss.com/)

## Getting started

Install:
```shell
npm i @gregalexsmith/components
```

Starting `tailwind.config.js`:
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