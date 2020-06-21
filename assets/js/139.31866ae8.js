(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{611:function(e,t,s){"use strict";s.r(t);var a=s(50),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-minimal-google-analytics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-minimal-google-analytics"}},[e._v("#")]),e._v(" VuePress Plugin Minimal Google Analytics")]),e._v(" "),s("blockquote",[s("p",[e._v("Minimal Google Analytics plugin for VuePress 1.x")])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://travis-ci.org/webmasterish/vuepress-plugin-minimal-analytics",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/travis/webmasterish/vuepress-plugin-minimal-analytics/master.svg?style=flat-square",alt:"Build Status"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"http://npm.im/vuepress-plugin-minimal-analytics",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/vuepress-plugin-minimal-analytics.svg?style=flat-square",alt:"npm version"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://greenkeeper.io/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badges.greenkeeper.io/webmasterish/vuepress-plugin-minimal-analytics.svg?style=flat-square",alt:"Greenkeeper badge"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"http://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/l/express.svg?style=flat-square",alt:"MIT License"}}),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"why"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[e._v("#")]),e._v(" Why")]),e._v(" "),s("p",[e._v("Because sometimes all you need is just the page views\nwithout all the bloated libraries.")]),e._v(" "),s("h2",{attrs:{id:"what"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[e._v("#")]),e._v(" What")]),e._v(" "),s("p",[e._v("This plugin is based on the official VuePress plugin  "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-google-analytics"),s("OutboundLink")],1),e._v(" - "),s("a",{attrs:{href:"https://www.npmjs.com/package/@vuepress/plugin-google-analytics",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("The difference betweeen this plugin and the official one is that it uses a light\nversion of the tracking code as introduced\nby 🌱 "),s("a",{attrs:{href:"https://minimalanalytics.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("minimalanalytics.com"),s("OutboundLink")],1),e._v(" - source code in "),s("a",{attrs:{href:"https://gist.github.com/DavidKuennen/443121e692175d6fc145e1efb0284ec9",target:"_blank",rel:"noopener noreferrer"}},[e._v("this gist"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -D vuepress-plugin-minimal-analytics\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -D vuepress-plugin-minimal-analytics\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("Add "),s("code",[e._v("vuepress-plugin-minimal-analytics")]),e._v(" in your site or theme config file.")]),e._v(" "),s("blockquote",[s("p",[e._v("See "),s("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/using-a-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official docs on using a plugin"),s("OutboundLink")],1)])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// .vuepress/config.js")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// or")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// .vuepress/theme/index.js")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// replace 'XX-XXXXXXXXX-X' with your tracking id")]),e._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'minimal-analytics'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("ga"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'XX-XXXXXXXXX-X'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),s("blockquote",[s("p",[e._v("See Plugin Option API "),s("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/option-api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official docs"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"ga"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ga"}},[e._v("#")]),e._v(" ga")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("string")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("undefined")])])]),e._v(" "),s("p",[e._v("Provide the Google Analytics ID to enable integration.")]),e._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),s("ul",[s("li",[e._v("VuePress official "),s("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugin docs"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("VuePress official "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-google-analytics"),s("OutboundLink")],1),e._v(" - "),s("a",{attrs:{href:"https://www.npmjs.com/package/@vuepress/plugin-google-analytics",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Minimal Analytics Snippet "),s("a",{attrs:{href:"https://gist.github.com/DavidKuennen/443121e692175d6fc145e1efb0284ec9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gist"),s("OutboundLink")],1),e._v("\nby "),s("a",{attrs:{href:"https://github.com/DavidKuennen",target:"_blank",rel:"noopener noreferrer"}},[e._v("@DavidKuennen"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Google Analytics official "),s("a",{attrs:{href:"https://developers.google.com/analytics/devguides/collection/protocol/v1/reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("endpoint documentation"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),s("p",[e._v("MIT © "),s("a",{attrs:{href:"https://webmasterish.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("webmasterish"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);