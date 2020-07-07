(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{641:function(t,e,s){"use strict";s.r(e);var a=s(50),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-schema2md"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-schema2md"}},[t._v("#")]),t._v(" vuepress-plugin-schema2md")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.com/package/vuepress-plugin-schema2md",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/vuepress-plugin-schema2md.svg?style=flat",alt:"NPM version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://npmjs.com/package/vuepress-plugin-schema2md",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dm/vuepress-plugin-schema2md.svg?style=flat",alt:"NPM downloads"}}),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"https://github.com/rich-lab/vuepress-plugin-schema2md/workflows/Node.js%20CI/badge.svg",alt:"Node.js CI"}})]),t._v(" "),s("h2",{attrs:{id:"feature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feature"}},[t._v("#")]),t._v(" Feature")]),t._v(" "),s("ul",[s("li",[t._v("📄 Generate dynamic VuePress pages from JSON Schemas.")]),t._v(" "),s("li",[t._v("❤️ HMR Support!")]),t._v(" "),s("li",[t._v("🎁 Support extra markdown file to be merged into final content.")])]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/VuePress/vuepress-plugin-schema2md/master/.media/demo.gif",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[s("small",[s("i",[t._v("Tip. you can execute "),s("code",[t._v("npm run docs:dev")]),t._v(" on thie repo to check out this example.")])])]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-schema2md  -D \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install vuepress-plugin-schema2md -D")]),t._v("\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema2md'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Options")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("h3",{attrs:{id:"pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pages"}},[t._v("#")]),t._v(" pages")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Record<string, ITransformOptions>")])]),t._v(" "),s("li",[t._v("Description: describe the generated pages.")])]),t._v(" "),s("p",[t._v("e.g.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema2md'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/config/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        schemaPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/your/schema.json'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Then you will get a dynamic page with route "),s("code",[t._v("/config/")]),t._v(", whose content is generated by "),s("a",{attrs:{href:"https://github.com/rich-lab/schema2md",target:"_blank",rel:"noopener noreferrer"}},[t._v("schema2md"),s("OutboundLink")],1),t._v(" from "),s("code",[t._v("'/path/to/your/schema.json'")]),t._v(",")]),t._v(" "),s("p",[t._v("For typings of interface "),s("code",[t._v("ITransformOptions")]),t._v(", plead head "),s("a",{attrs:{href:"https://github.com/rich-lab/schema2md",target:"_blank",rel:"noopener noreferrer"}},[t._v("schema2md"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"cwd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cwd"}},[t._v("#")]),t._v(" cwd")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v('Description: Current working directory, used to calcaulate absolute path for "schemaPath" and "outputPath" with relative path, defaults to '),s("code",[t._v("process.cwd()")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"locale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locale"}},[t._v("#")]),t._v(" locale")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Description: Global locale.")])]),t._v(" "),s("h3",{attrs:{id:"write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write"}},[t._v("#")]),t._v(" write")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("Description: whether to generate the markdown content to disk.")])]),t._v(" "),s("p",[t._v("If you want to check out the generated markdown, you could do like this:")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v(" // .vuepress/config.js\n module.exports = {\n   plugins: ['schema2md', {\n")]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+    write: true,\n")]),s("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("     pages: {\n       '/config/': {\n         schemaPath: '/path/to/your/schema.json'\n")]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+        outputPath: 'docs/config/README.md', // You shouldn't commit this file.\n")]),s("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("       }\n     }\n   }]\n }\n")])])])]),s("h2",{attrs:{id:"contributing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),s("ol",[s("li",[t._v("Fork it!")]),t._v(" "),s("li",[t._v("Create your feature branch: "),s("code",[t._v("git checkout -b my-new-feature")])]),t._v(" "),s("li",[t._v("Commit your changes: "),s("code",[t._v("git commit -am 'Add some feature'")])]),t._v(" "),s("li",[t._v("Push to the branch: "),s("code",[t._v("git push origin my-new-feature")])]),t._v(" "),s("li",[t._v("Submit a pull request 😄")])]),t._v(" "),s("h2",{attrs:{id:"author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" Author")]),t._v(" "),s("p",[s("strong",[t._v("vuepress-plugin-schema2md")]),t._v(" © "),s("a",{attrs:{href:"https://github.com/ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("ULIVZ"),s("OutboundLink")],1),t._v(", Released under the "),s("a",{attrs:{href:"https://raw.githubusercontent.com/VuePress/vuepress-plugin-schema2md/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT"),s("OutboundLink")],1),t._v(" License."),s("br")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/ulivz"),s("OutboundLink")],1),t._v(" · GitHub "),s("a",{attrs:{href:"https://github.com/ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ULIVZ"),s("OutboundLink")],1),t._v(" · Twitter "),s("a",{attrs:{href:"https://twitter.com/_ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("@_ulivz"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);