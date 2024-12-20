---
author:
  avatar: https://private-avatars.githubusercontent.com/u/43475371?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUzODAsIm5iZiI6MTczNDY1NDE4MCwicGF0aCI6Ii91LzQzNDc1MzcxIn0.q4UHHsXggdqpwob4NUgwuE1VXXSi7Pbd3Pw7Leh2Rv8&v=4
  email: stickmyc@163.com
  name: "\u5B50\u8083"
  url: null
  username: wuwaki
bugs: https://github.com/Yubisaki/vuepress-plugin-blog/issues
category: plugins
date: '2019-04-04T03:54:34.523Z'
deprecated: false
description: blog support plugin for vuepress theme yubisaki
downloads: null
homepage: https://github.com/Yubisaki/vuepress-plugin-blog#readme
keywords:
- vuepress
- vuepress-plugin
license: false
maintainers: null
name: '@yubisaki/vuepress-plugin-blog'
npm: https://www.npmjs.com/package/%40yubisaki%2Fvuepress-plugin-blog
publisher:
  avatar: null
  email: stickmyc@163.com
  name: null
  url: null
  username: wuwaki
repository: https://github.com/Yubisaki/vuepress-plugin-blog
score: 0.31650221690692626
stars: 0
unstable: true
version: 0.1.8
watchers: 0

---

# @yubisaki/vuepress-plugin-blog

## Install

```bash
npm i @yubisaki/vuepress-plugin-blog
```

## Usage

```js
module.exports = {
  plugins: ['@yubisaki/blog']
}
```

## Options

**pageEnhancers**

- Type: `Array`

- default: []

This option is the extend enhancers for [extendPageData](https://vuepress.vuejs.org/plugin/#extendpagedata)

**tagUrl**

- Type: `string`

- default: `/tag/`

This option is the path which page show the tags or the posts of a specific tag

**categoryUrl**

- Type: `string`

- default: `/category/`

This option is the path which page show the categories or the posts of a specific category

## example

```js
module.exports = {
  plugins: ['@yubisaki/blog', {
    pageEnhancers,
    tagUrl,
    categoryUrl
  }]
}
```

## What can you get?

**extendMarkdown**

- [markdown-it-task-list](https://github.com/revin/markdown-it-task-lists)

- [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize)

**Vue.computed.$tags/Vue.computed.$categories**

- `length`: The length of all the tags

- `map`: Object of tags

- `list`: Array of tags data
```js
[{ name, path, pages }]
```
  - `name`: The tag name, such as `React`, `Redux`
  - `path`: The path which page show the posts of a specific tag, for example `xxx.blog/tag/react` will show the posts(the pages field) which tag is `react`
  - `pages`: The posts which the tag field contains

**Vue.computed.$tag/Vue.computed.$category**

This value is a item of `Vue.computed.$tags.list` which the name field equals to `this.$route.meta.tagName`

## The Layout maybe your theme should support

- `Tags`: This layout is used to show the tags page, such as `xxx.blog/tag/`

- `Tag`: This layout is used to show the posts which tag equals to tag url, for example `xxx.blog/tag/react` will show the posts which tag is `react`

- `Categories`: As same as the Tags layout

- `Category`: As same as the Tag layout