(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{782:function(t,s,a){"use strict";a.r(s);var n=a(58),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git配置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git配置代理"}},[t._v("#")]),t._v(" Git配置代理")]),t._v(" "),a("h2",{attrs:{id:"设置全局代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置全局代理"}},[t._v("#")]),t._v(" 设置全局代理")]),t._v(" "),a("p",[t._v("端口号，根据自己的实际情况去设置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.proxy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:1080"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global https.proxy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:1080"')]),t._v("\n")])])]),a("h2",{attrs:{id:"取消代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消代理"}},[t._v("#")]),t._v(" 取消代理")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset http.proxy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset https.proxy\n")])])]),a("h2",{attrs:{id:"只对github-com设置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只对github-com设置代理"}},[t._v("#")]),t._v(" 只对github.com设置代理")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.https://github.com.proxy "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:1080"')]),t._v("\n")])])]),a("h2",{attrs:{id:"取消github-com代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消github-com代理"}},[t._v("#")]),t._v(" 取消github.com代理")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset http.https://github.com.proxy\n")])])]),a("h2",{attrs:{id:"修改配置文件办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件办法"}},[t._v("#")]),t._v(" 修改配置文件办法")]),t._v(" "),a("p",[t._v("找到git的配置文件.gitconfig。这个文件一般在用户目录下。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("http "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:1080"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为所有的配置socks5代理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:1080"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);