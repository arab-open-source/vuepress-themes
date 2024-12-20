---
author:
  avatar: https://private-avatars.githubusercontent.com/u/15191056?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUyNjAsIm5iZiI6MTczNDY1NDA2MCwicGF0aCI6Ii91LzE1MTkxMDU2In0.wdzIR1se-dV0wWBsAXtDLXDGGpoRub_YMTpiYv2EMWQ&v=4
  email: null
  name: jardenliu
  url: null
  username: jardenliu
bugs: https://github.com/jardenliu/vuepress-plugin-code-doc/issues
category: plugins
date: '2020-07-23T03:32:18.037Z'
deprecated: false
description: Writing Documents Like Element-ui
downloads: null
homepage: https://github.com/jardenliu/vuepress-plugin-code-doc#readme
keywords:
- vuepress
- code
- demo
- doc
- element
- ui
- components
license: false
maintainers: null
name: vuepress-plugin-code-doc
npm: https://www.npmjs.com/package/vuepress-plugin-code-doc
publisher:
  avatar: null
  email: jarden@qq.com
  name: null
  url: null
  username: jardenliu
repository: https://github.com/jardenliu/vuepress-plugin-code-doc
score: 0.46859774115786945
stars: 1
unstable: true
version: 0.0.1
watchers: 1

---

# vuepress-plugin-code-doc
> 🤩🤩🤩Writing Vuepress Documents Like Element-UI

[📚中文文档](./README_CN.md) 丨 [📚English Docs](./README.md)

## Installation
Install plugin for your Vuepress project.
```bash
    $ yarn add vuepress-plugin-code-doc
    #or
    $ npm i vuepress-plugin-code-doc
```

## Usage
In `.vuepress/config.js`, require the plugin and set it to the config. as follow:
```js

const CodeDocPlugin = require('vuepress-plugin-code-doc')
const CodeDocOpt = {}

module.exports = {
    title: 'Vuepress Plugin Code Doc',
    plugins: [[CodeDocPlugin, CodeDocOpt]]
}

```

## Options

| Name               | Description        | type   | Accepted Values | Default |
| ------------------ | ------------------ | ------ | --------------- | ------- |
| schema             | code block mark    | string | ---             | :       |
| scrollViewSelector | scrollViewSelector | string | ---             | html    |
