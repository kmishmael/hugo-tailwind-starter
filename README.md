# Hugo + TailwindCSS starter template

This repo demostrates how to use [TaiwindCSS](https://tailwindcss.com) in a Hugo Framework
project. [Hugo](https://gohugo.io) is a static site generator, which is arguably the fastest
generator out there.

To run the project:
First install packages

```bash
npm install
```

To run the project in dev mode, we use `concurrently` to run both `Hugo server` and `Tailwind CLI`. `Tailwind CLI` continously builds our CSS in dev mode.
Subsequently, ensure that concurrently is installed. You can do so by running:

```bash
npm install --save-dev concurrently
```

In development mode:

```bash
npm run dev
```

For production build:

```bash
npm run build
```

## Adding Tailwind to an existing project.

If you wish to add tailwind to an existing project instead, here are the steps:

First, if you have not initialised a npm project, you have to by running

```bash
npm init
```

Then we have to installed the packages requred, this includes tailwind, postcss

```bash
npm install --save-dev tailwindcss autoprefixer postcss @tailwindcss/typography
```

Create a tailwind config file in the root folder of your project: `tailwind.config.js`

```js
// tailwind.config.js
module.exports = {
  content: [
    "./content/**/*.md",
    "./layouts/**/*.html",
    // wherever else you use tailwind classes
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
```

Also, create a postcss config file: `postcss.config.js`

```js
// postcss.config.js
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
```

Also, create a css file, say in `assets/css/style.css`, and add the tailwind headers:

```css
/* assets/css/style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, add the commands to run tailwind and hugo concurrently. Therefore install concurrenlty:

```bash
npm install --save-dev concurrently
```

and now you can add script commands in `package.json`.

```json
"scripts": {
    "dev": "concurrently --kill-others \"npm run watch:tw\" \"hugo server --ignoreCache\"",
    "build": "npm run build:tw & hugo --minify",
    "build:tw": "npx tailwindcss -i ./assets/css/style.css -o ./static/style.css --minify",
    "watch:tw": "npx tailwindcss -i ./assets/css/style.css -o ./static/style.css --watch"
  }
```

You can also install tailwindcss locally, to avoid using `npx`, should you prefer
