# Jack's ESLint Configuration

ESLint configuration for developers proficient in TypeScript.

## Getting Started

This configuration comes with [`typescript-eslint`](https://typescript-eslint.io/) and [`eslint-stylistic`](https://eslint.style/) pre-configured.

Use `eslint-stylistic` instead of `prettier` for formatting. To learn more, [visit the `eslint-stylistic` guide.](https://eslint.style/guide/why)

### Prerequisites

The following versions of Node.js and TypeScript are required:

- Node.js 20 or higher
- TypeScript 4.7 or higher

This package is [pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c), and you must configure your project to use the ESM package.

### 1. Installation

First, install the required packages.

```sh
npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint @stylistic/eslint-plugin @choi-jack/eslint-config
```

### 2. Configuration

Next, create an `eslint.config.js` config file in the root of your project, and populate it with the following:

```typescript
// @ts-check

import base from '@choi-jack/eslint-config';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    ...base,
    {
        // ...
    },
    // ...
);
```

### 3. Running ESLint

Open a terminal to the root of your project and run the following command:

```sh
npx eslint .
```

ESLint will lint all TypeScript compatible files within the current folder, and will output the results to your terminal.

> This guide is based on the following guide: <https://typescript-eslint.io/getting-started/>

## License

Distributed under the MIT License. See the [LICENSE](https://github.com/choi-jack/eslint-config/blob/main/LICENSE) file for more details.
