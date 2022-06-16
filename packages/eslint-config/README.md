![npm (scoped)](https://img.shields.io/npm/v/@gregalexsmith/eslint-config)

# @gregalexsmith/eslint-config

An eslint configuration for `react` & `typescript` projects

## Getting started

Install
```
npm i -D @gregalexsmith/eslint-config
```

Create an `.eslintrc.json` file with:
```json
{
    "extends": [
        "@gregalexsmith/eslint-config"
    ]
}
```

Add an `.eslintignore` file with project-specific settings - here's an example:
```
build/
node_modules/
.yalc/
```