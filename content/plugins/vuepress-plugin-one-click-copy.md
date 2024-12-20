---
author:
  avatar: https://private-avatars.githubusercontent.com/u/17906558?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUzODAsIm5iZiI6MTczNDY1NDE4MCwicGF0aCI6Ii91LzE3OTA2NTU4In0.9OPpIOVoiZgiISmKFo38bPmp5XhkVzUb3X3-kVJi-8o&v=4
  email: pengchengou@gmail.com
  name: vxhly
  url: null
  username: vxhly
bugs: https://github.com/vxhly/vuepress-plugin-one-click-copy/issues
category: plugins
date: '2021-09-04T01:52:30.959Z'
deprecated: false
description: A vuepress plugin for clipboard-copy
downloads: null
homepage: https://github.com/vxhly/vuepress-plugin-one-click-copy#readme
keywords:
- vuepress
- plugin
- clipboard-copy
- vuepress-one-click-copy
- copy
- one-click-copy
license: Other
maintainers: null
name: vuepress-plugin-one-click-copy
npm: https://www.npmjs.com/package/vuepress-plugin-one-click-copy
publisher:
  avatar: null
  email: pengchengou@gmail.com
  name: null
  url: null
  username: vxhly
repository: https://github.com/vxhly/vuepress-plugin-one-click-copy
score: 0.5355737714933446
stars: 11
unstable: false
version: 1.0.6
watchers: 11

---

# vuepress-plugin-one-click-copy

> A vuepress plugin for clipboard-copy

[![npm](https://img.shields.io/npm/v/vuepress-plugin-one-click-copy.svg)](https://www.npmjs.com/package/vuepress-plugin-one-click-copy)
[![GitHub stars](https://img.shields.io/github/stars/vxhly/vuepress-plugin-one-click-copy)](https://github.com/vxhly/vuepress-plugin-one-click-copy/stargazers)
[![GitHub license](https://img.shields.io/github/license/vxhly/vuepress-plugin-one-click-copy)](https://github.com/vxhly/vuepress-plugin-one-click-copy/blob/master/LICENSE)

## Install

``` bash
# install dependencies
npm i vuepress-plugin-one-click-copy -D

# or use yarn
yarn add vuepress-plugin-one-click-copy -D
```

## Usage

Write vuepress config

``` javascript
module.exports = {
  plugins: ['one-click-copy']
}
```

## Options

This plugin supports the following configurations.

``` javascript
module.exports = {
  plugins: ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: 'Copied successfully!', // default is 'Copied successfully!'
    toolTipMessage: 'Copy to clipboard', // default is ''Copy to clipboard'
    duration: 300, // prompt message display time
  }]
}
```

## License

[MIT](https://github.com/vxhly/vuepress-plugin-one-click-copy/blob/master/LICENSE).
