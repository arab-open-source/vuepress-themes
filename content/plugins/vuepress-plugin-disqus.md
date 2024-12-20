---
author:
  avatar: https://private-avatars.githubusercontent.com/u/3642397?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTU4MDAsIm5iZiI6MTczNDY1NDYwMCwicGF0aCI6Ii91LzM2NDIzOTcifQ.oOc8gsFpVUbiCMQ3YRatL00_ShpedM-EYo1sOXaC0YM&v=4
  email: null
  name: Loris Leiva
  url: null
  username: lorisleiva
bugs: https://github.com/lorisleiva/vuepress-plugin-disqus/issues
category: plugins
date: '2020-01-13T00:46:29.489Z'
deprecated: false
description: Register a global Disqus component to add to your layouts
downloads: null
homepage: https://github.com/lorisleiva/vuepress-plugin-disqus#readme
keywords:
- vuepress
- plugin
- disqus
license: MIT License
maintainers: null
name: vuepress-plugin-disqus
npm: https://www.npmjs.com/package/vuepress-plugin-disqus
publisher:
  avatar: null
  email: loris.leiva@gmail.com
  name: null
  url: null
  username: lorisleiva
repository: https://github.com/lorisleiva/vuepress-plugin-disqus
score: 0.4437706817949969
stars: 29
unstable: true
version: 0.2.0
watchers: 29

---

# Vuepress Plugin Disqus
🔌 Register a global `<Disqus />` component to add to your layouts.

This plugins is a vuepress wrapper of [vue-disqus](https://github.com/ktquez/vue-disqus).

## Installation

```bash
npm i vuepress-plugin-disqus -D
```

## Register the plugin

```js
plugins: {
    'disqus': { /* options */ }
},
```

Please check out [Config](#config) for options.

Note that Vuepress allows multiple syntaxes to register plugins. See [Vuepress documentation on how to use a plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html) for more information.

## Use the Disqus component

This plugin present a out-of-box SSR-friendly component  - `<Disqus/>`. Just put it wherever you like, and Disqus will be embedded in the right place. For example:

```html
<template>
  <div>
    <Content />
    <!-- ...... -->
    <Disqus />
  </div>
</template>
```
Or you can simply put it in your `.md` file.
```markdown
## Hello VuePress

This is a demo.

<Disqus/>
```

You can use all the props and events defined by [vue-disqus](https://github.com/ktquez/vue-disqus).

Prop            | Data Type  | required  | Description
--------------- | ---------- | --------- | -----------
`shortname`     | String     | true      | Your disqus shortname.
`url`           | String     | false     | Your URL where Disqus is present
`title`         | String     | false     | Title that identifies the current page.
`identifier`    | String     | false     | The page's unique identifier
`sso_config`    | Object     | false     | Single sign-on (SSO)
`api_key`       | String     | false     | Your API key disqus
`remote_auth_s3`| String     | false     | implementation with Laravel/PHP
`language`      | String     | false     | Language overrides

## Config 

See the table above. All the props are also configuration options for this plugin. They'll be passed to every `Disqus` component. You're still able to override it by passing down props. Note that if you don't set language, it'll use VuePress's $lang as default language.

There's still one option available - `name` which specifies the name of the disqus component. Defaults to: `Disqus`.

