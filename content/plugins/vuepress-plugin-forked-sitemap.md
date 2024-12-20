---
author:
  avatar: https://private-avatars.githubusercontent.com/u/36023898?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU4MDAsIm5iZiI6MTczNDY1NDYwMCwicGF0aCI6Ii91LzM2MDIzODk4In0.93CfotdmQT5lf3xxv8D5nPgudCQM0ykQmmT7FLRU_EU&v=4
  email: ekoeryanto@gmail.com
  name: Eko Eryanto
  url: null
  username: ekoeryanto
bugs: https://github.com/ekoeryanto/vuepress-plugin-sitemap/issues
category: plugins
date: '2019-10-11T09:21:32.001Z'
deprecated: false
description: Sitemap generator plugin for vuepress
downloads: null
homepage: https://github.com/ekoeryanto/vuepress-plugin-sitemap#readme
keywords:
- documentation
- vue
- vuepress
- vuepress-plugin
- sitemap
- generator
license: MIT License
maintainers: null
name: vuepress-plugin-forked-sitemap
npm: https://www.npmjs.com/package/vuepress-plugin-forked-sitemap
publisher:
  avatar: null
  email: newsbielt703@gmail.com
  name: null
  url: null
  username: newsbielt703
repository: https://github.com/ekoeryanto/vuepress-plugin-sitemap
score: 0.14959819162197033
stars: 93
unstable: true
version: 0.0.1
watchers: 93

---

# vuepress-plugin-sitemap

Sitemap generator plugin for vuepress.


## Install

* Yarn

  ```sh
  yarn add vuepress-plugin-sitemap
  ```

* NPM

  ```sh
  npm install vuepress-plugin-sitemap
  ```

> in v2.0.0, dependencies except `sitemap` are moved to peerDependencies so we need to install `esm` module manually (`chalk` and `commander` are already installed by `vuepress`) when we use this plugin with *cli method*.


## Usage

### Vuepress v1.x

```js
// .vuepress/config.js
module.exports = {
  plugins: {
    'sitemap': {
      hostname: 'https://pake.web.id'
    },
  }
}
```

### Vuepress v0.x

There's no plugin supported with Vuepress v0.x so we need to run it after the build process manually (or with npm `postbuild` script).

1. Manual

   ```sh
   ./node_modules/.bin/vuepress -d "dist"
   ./node_modules/.bin/vuepress-sitemap -H "https://pake.web.id" -d "dist"
   ```

2. NPM Script

   ```ts
   {
     scripts: {
       build: "vuepress build docs -d dist",
       postbuild: "vuepress-sitemap -H https://pake.web.id -d dist"
     }
   }
   ```


## Options

```yml
hostname:
  type: string
  required: true
  default: null
  description: website root url
  example: https://pake.web.id

outFile:
  type: string
  required: false
  default: sitemap.xml
  description: sitemap file name
  example: sitemap.txt

urls:
  type: array
  required: false
  default: [],
  description: custom urls to append
  example: [
    { url: '/place', changefreq: 'monthly' }
  ]

exclude:
  type: array
  required: false
  default: [],
  description: pages path to exclude
  example: ['/404.html']

dateFormatter:
  type: function
  required: false
  description: change the date format
  default: time => new Date(time).toISOString()
```


## Frontmatter Options

To override global option for a specific page, we can use `sitemap` key on the frontmatter,
currently we just have 2 options, they are `exclude` and `changefreq`.


### Example

```yml
---
sitemap:
  exclude: false
  changefreq: hourly
---
# Content Updated Frequently
```

**Note:**
Other options of [sitemap](https://npm.im/sitemap) can be used, all options passed except `urls`, `hostname`, `cacheTime`, `xslUrl`, `xmlNs` and `outFile` will be passed to `sitemap.createSitemap` constructor.


## Related Plugins

* [Server Push Links Generator](https://github.com/ekoeryanto/vuepress-plugin-server-push)


## Credits
* [JetBrains s.r.o](https://www.jetbrains.com/?from=vuepress-plugin-sitemap)
