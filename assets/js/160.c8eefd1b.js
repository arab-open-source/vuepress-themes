(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{634:function(t,s,e){"use strict";e.r(s);var a=e(50),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress-plugin-remote-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-remote-url"}},[t._v("#")]),t._v(" vuepress-plugin-remote-url")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://badge.fury.io/js/vuepress-plugin-remote-url",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badge.fury.io/js/vuepress-plugin-remote-url.svg",alt:"npm version"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("A "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),e("OutboundLink")],1),t._v(" plugin to handle urls of remote repository.")]),t._v(" "),e("p",[t._v("This plugin is for "),e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 1.x"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("yarn")]),t._v(" "),e("p",[e("code",[t._v("yarn add -D vuepress-plugin-remote-url")])])]),t._v(" "),e("li",[e("p",[t._v("npm")]),t._v(" "),e("p",[e("code",[t._v("npm install --save-dev vuepress-remote-url")])])])]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"remote-url"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This plugin finds repository information automatically from local vsc config files (e.g. "),e("code",[t._v(".git/")]),t._v(" directory.)")]),t._v(" "),e("p",[t._v("Then each "),e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/global-computed.html#page",target:"_blank",rel:"noopener noreferrer"}},[t._v("$page"),e("OutboundLink")],1),t._v(" object has "),e("code",[t._v("remoteUrl")]),t._v(" property:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $page of sourceDir/index.md")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    regularPath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    remoteUrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/someone/somerepo/blob/master/path/to/sourceDir/index.md"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        raw"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/someone/somerepo/raw/master/path/to/sourceDir/index.md"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        edit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(same)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        blame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(as)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        history"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(above)"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("NOTE: If the page is generated by some plugin, the value of "),e("code",[t._v("remoteUrl")]),t._v(" property is "),e("code",[t._v("null")]),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);