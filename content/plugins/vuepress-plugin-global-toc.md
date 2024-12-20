---
author:
  avatar: https://private-avatars.githubusercontent.com/u/566536?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU2ODAsIm5iZiI6MTczNDY1NDQ4MCwicGF0aCI6Ii91LzU2NjUzNiJ9.FK0-7_7O8L9bKKO3ERbj8mX3DgyoZU0fhsu6G5yBGm0&v=4
  email: null
  name: Sylvain Pollet-Villard
  url: null
  username: sylvainpolletvillard
bugs: https://github.com/sylvainpolletvillard/vuepress-plugin-global-toc/issues
category: plugins
date: '2021-03-20T12:22:50.172Z'
deprecated: false
description: Vuepress plugin to add a global Table of Contents component
downloads: null
homepage: https://github.com/sylvainpolletvillard/vuepress-plugin-global-toc#readme
keywords:
- vuepress
- toc
license: MIT License
maintainers: null
name: vuepress-plugin-global-toc
npm: https://www.npmjs.com/package/vuepress-plugin-global-toc
publisher:
  avatar: null
  email: sylvain.pollet.villard@gmail.com
  name: null
  url: null
  username: sylvainpolletvillard
repository: https://github.com/sylvainpolletvillard/vuepress-plugin-global-toc
score: 0.34618441286680524
stars: 7
unstable: false
version: 1.1.0
watchers: 7

---

# vuepress-plugin-global-toc

[![NPM version](https://badgen.net/npm/v/vuepress-plugin-global-toc)](https://npmjs.com/package/vuepress-plugin-global-toc) [![NPM downloads](https://badgen.net/npm/dm/vuepress-plugin-global-toc)](https://npmjs.com/package/vuepress-plugin-global-toc)

> This plugin requires VuePress >= **1.0.0**. VuePress 2 is not supported

## Features

- Add a `<GlobalTableOfContents />` component that you can use in your markdown instead of `[[toc]]` to get a global Table of Contents, i.e. a table of contents that covers the entire vuepress website.
- Internally uses the same function that retrieves the items in the sidebar

## Install

```bash
npm i vuepress-plugin-global-toc
```

## Usage

Using this plugin:

```javascript
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-global-toc']
}
```

then add your table of components where you please in your markdown pages:

```mdx
# Table of contents

<GlobalTableOfContents />
```
