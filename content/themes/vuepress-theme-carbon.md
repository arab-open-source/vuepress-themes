---
author:
  avatar: https://private-avatars.githubusercontent.com/u/4020037?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUyNjAsIm5iZiI6MTczNDY1NDA2MCwicGF0aCI6Ii91LzQwMjAwMzcifQ.qcWA4RzzuGkKLYd5jFYzej_2HIpIZvYd4FpVq82zIEs&v=4
  email: null
  name: null
  url: null
  username: lupas
bugs: https://github.com/lupas/vuepress-theme-carbon/issues
category: themes
date: '2020-04-20T22:30:06.299Z'
deprecated: false
description: Vuepress default theme with support for Carbon Ads.
downloads: null
homepage: https://github.com/lupas/vuepress-theme-carbon#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-theme-carbon
npm: https://www.npmjs.com/package/vuepress-theme-carbon
publisher:
  avatar: null
  email: pascal@luther.ch
  name: null
  url: null
  username: lupas
repository: https://github.com/lupas/vuepress-theme-carbon
score: 0.4628514741899553
stars: 7
unstable: false
version: 1.0.0
watchers: 7

---

# vuepress-theme-carbon

<p align="center"><img align="center" height="300px" src="https://github.com/lupas/vuepress-theme-carbon/blob/master/misc/hero_vuepress-theme-carbon.png?raw=true"/></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vuepress-theme-carbon"><img src="https://badgen.net/npm/dm/vuepress-theme-carbon" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vuepress-theme-carbon"><img src="https://badgen.net/npm/v/vuepress-theme-carbon" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vuepress-theme-carbon"><img src="https://badgen.net/npm/license/vuepress-theme-carbon" alt="License"></a>
 </p>
</p>

> Inspired from the [__Carbon Ads__](https://www.carbonads.net/) integration in the official [vuepress documentation](https://vuepress.vuejs.org/guide/) and its source code, this theme extends the default vuepress theme with a __Carbon Ads__ slot in the sidebar.

## Demo / Example

* [@nuxtjs/firebase Documentation](https://firebase.nuxtjs.org/guide/getting-started/) - See top left corner

## Install

```bash
yarn add vuepress-theme-carbon -D
# OR npm install vuepress-theme-carbon -D
```

## Usage

```js
// .vuepress/config.js
module.exports = {
  theme: 'carbon',
  themeConfig: {
    // Your ad ID and placement label from your Carbon Ads tag:
    carbonAds: {
      serve: "yourServeId",
      placement: "yourPlacementLabel"
    },
    // All the other options from the default theme:
    // ...
  }
}
```

See [default theme config](https://vuepress.vuejs.org/theme/default-theme-config.html).

## Credits

Thanks to [Vuepress](https://github.com/vuejs/vuepress).

## License

MIT - [Pascal Luther](https://github.com/lupas)
