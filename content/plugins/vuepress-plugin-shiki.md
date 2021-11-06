---
author:
  avatar: https://avatars.githubusercontent.com/u/69196822?v=4
  email: octref@gmail.com
  name: Pine Wu
  url: null
  username: octref
bugs: https://github.com/octref/shiki/issues
category: plugins
date: '2020-11-13T09:52:24.768Z'
deprecated: false
description: Vuepress plugin for Shiki
downloads: null
homepage: https://github.com/octref/shiki/tree/master/packages/vuepress-plugin
keywords:
- shiki
- vuepress
- vuepress-plugin
- syntax-highlighter
- highlighter
license: MIT License
maintainers: null
name: vuepress-plugin-shiki
npm: https://www.npmjs.com/package/vuepress-plugin-shiki
publisher:
  avatar: null
  email: octref@gmail.com
  name: null
  url: null
  username: octref
repository: https://github.com/octref/shiki
score: 0.5970476008680486
stars: 2743
unstable: true
version: 0.2.7
watchers: 2743

---

<p>
  <h2 align="center">Shiki</h2>
</p>
<p align="center">
  Shiki is a beautiful Syntax Highlighter. <a href="http://shiki.matsu.io">Demo</a>.
</p>

## Usage

```sh
npm i shiki
# yarn add shiki
```

```js
const shiki = require('shiki')

shiki
  .getHighlighter({
    theme: 'nord'
  })
  .then(highlighter => {
    console.log(highlighter.codeToHtml(`console.log('shiki');`, 'js'))
  })

// <pre class="shiki" style="background-color: #2e3440"><code>
//   <!-- Highlighted Code -->
// </code></pre>
```

```html
<script src='https://unpkg.com/shiki'></script>
<script>
shiki
  .getHighlighter({
    theme: 'nord'
  })
  .then(highlighter => {
    const code = highlighter.codeToHtml(`console.log('shiki');`, 'js')
    document.getElementById('output').innerHTML = code
  })
</script>
```

- [Themes](./docs/themes.md)
- [Languages](./docs/languages.md)
- [SVG Renderer](./packages/renderer-svg/README.md)
- [vuepress-plugin-shiki](./packages/vuepress-plugin/README.md)

Clone [shikijs/shiki-starter](https://github.com/shikijs/shiki-starter) to play with Shiki, or try it out on [Repl.it](https://repl.it/@octref/shiki-starter).

## Seen

- Shiki Docs: https://shiki.matsu.io
- Shiki Twoslash: https://shikijs.github.io/twoslash/ Playground: https://shikijs.github.io/twoslash/playground
- Interactive Demo on CodeSandbox (with Next.js): https://codesandbox.io/s/shiki-next-js-cir0y
- [VS Code website](https://code.visualstudio.com), such as in the [Notebook API page](https://code.visualstudio.com/api/extension-guides/notebook).
- [TypeScript website](https://www.typescriptlang.org), such as in the [Basic Types documentation page](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple).
- [Markdown Preview Shiki Highlighting](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-Shiki), a VS Code plugin to use Shiki's highlighting in Markdown preview.
- [Shiki LaTeX](https://www.npmjs.com/package/shiki-latex), a Shiki renderer for [LaTeX](https://www.latex-project.org). Compatible with [minted](https://github.com/gpoore/minted), replacing [Pygments](https://pygments.org).
- [Fatih Kalifa's website](https://fatihkalifa.com/typescript-twoslash)
- [Blockstack Documentation](https://docs.blockstack.org/)
- [VPC Shiki](https://github.com/Vap0r1ze/vpc-shiki), Shiki codeblocks on Discord. Powered by [Powercord](http://powercord.dev/)
- [Torchlight](https://torchlight.dev/), a syntax highlighting API powered by the Shiki tokenizer.
- [CodeChalk](https://github.com/a20185/codechalk), A neat terminal code highlighting tool powered by Shiki tokenizer and Chalk.

## Contributing

See the [Contributing Guide](.github/CONTRIBUTING.md).

## Credits

- Shiki uses [Onigasm](https://github.com/NeekSandhu/onigasm) by [@NeekSandhu](https://github.com/NeekSandhu)
- A lot of code is based on [vscode-textmate](https://github.com/Microsoft/vscode-textmate)

## Sponsorship

If you find Shiki useful, please consider sponsoring my Open Source development. Thank you 🙏

https://github.com/sponsors/octref

## License

MIT © [Pine Wu](https://github.com/octref)
