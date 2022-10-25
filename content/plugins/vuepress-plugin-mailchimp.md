---
author:
  avatar: https://avatars.githubusercontent.com/u/38957202?v=4
  email: newsbielt703@gmail.com
  name: Billyyyyy3320
  url: null
  username: newsbielt703
bugs: https://github.com/newsbielt703/vuepress-plugin-mailchimp/issues
category: plugins
date: '2020-03-27T07:03:24.140Z'
deprecated: false
description: A VuePress plugin for Mailchimp subscriptions
downloads: null
homepage: https://github.com/newsbielt703/vuepress-plugin-mailchimp#readme
keywords:
- mailchimp
- newsletter
- plugin
- vuepress
license: MIT License
maintainers: null
name: vuepress-plugin-mailchimp
npm: https://www.npmjs.com/package/vuepress-plugin-mailchimp
publisher:
  avatar: null
  email: newsbielt703@gmail.com
  name: null
  url: null
  username: newsbielt703
repository: https://github.com/newsbielt703/vuepress-plugin-mailchimp
score: 0.4455314477520397
stars: 8
unstable: false
version: 1.4.2
watchers: 8

---

# vuepress-plugin-mailchimp

[![NPM version](https://img.shields.io/npm/v/vuepress-plugin-mailchimp)](https://www.npmjs.com/package/vuepress-plugin-mailchimp)
[![NPM LICENSE](https://badgen.net/npm/license/vuepress-plugin-mailchimp)](https://github.com/newsbielt703/vuepress-plugin-mailchimp/blob/master/LICENSE)
[![Circle ci](https://badgen.net/circleci/github/newsbielt703/vuepress-plugin-mailchimp)](https://circleci.com/gh/newsbielt703/workflows/vuepress-plugin-mailchimp)
[![LGTM](https://badgen.net/lgtm/grade/g/newsbielt703/vuepress-plugin-mailchimp)](https://lgtm.com/projects/g/newsbielt703/vuepress-plugin-mailchimp)

Simplifies subscribing new email addresses to a Mailchimp email list.

## Install

First of all, you have to sign up for [Mailchimp](https://mailchimp.com/).

```bash
yarn add vuepress-plugin-mailchimp -D
# OR npm install vuepress-plugin-mailchimp -D
```

## Usage

Take a look at [Using a Plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html).

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    "vuepress-plugin-mailchimp",
    {
      // You need to provide this plugin with your Mailchimp endpoint in order for it
      // to know where to save the email address. See more detail in Config section.
      endpoint: ""
    }
  ]
};
```

### `<SimpleNewsletter/>`

This plugin provides a out-of-box component. Since it has been registered automatically, you can simply use it in your `.md` or `.vue` files.

- Source code:[SimpleNewsletter.vue](https://github.com/newsbielt703/vuepress-plugin-mailchimp/blob/master/src/SimpleNewsletter.vue)
- Usage:

```md
// .md file

...
your content
...

<SimpleNewsletter/>
```

or

```vue
// .vue file

<template>
  <SimplePagination />
</template>
```

Check out the full [documentation](https://vuepress-plugin-mailchimp.billyyyyy3320.com/).

## License

MIT © [Billyyyyy3320](https://github.com/newsbielt703)
