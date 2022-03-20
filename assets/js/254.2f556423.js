(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{906:function(t,e,s){"use strict";s.r(e);var a=s(58),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"跨域问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题"}},[t._v("#")]),t._v(" 跨域问题")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("在开发过程中，通常会遇到在浏览器端进行 Ajax 请求时会出现跨域问题，浏览器调试器控制台一般输出如下：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("Access to xxx at 'http://xxx/...' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.\n\nGET 'http://xxx/...' net::ERR_FAILED\n")])])]),s("p",[s("strong",[t._v("跨域指的是浏览器不能执行其他网站的脚本。"),s("strong",[t._v("它是由浏览器的")]),t._v("同源策略")]),t._v("（同源策略指域名，协议，端口均相同。）造成的，是浏览器对 JavaScript 施加的安全限制。")]),t._v(" "),s("h2",{attrs:{id:"解决跨域问题的方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域问题的方案"}},[t._v("#")]),t._v(" 解决跨域问题的方案")]),t._v(" "),s("h3",{attrs:{id:"cors-跨资源共享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-跨资源共享"}},[t._v("#")]),t._v(" CORS - 跨资源共享")]),t._v(" "),s("p",[t._v('CORS 是一个 W3C 标准，全称是**"跨域资源共享"（Cross-origin resource sharing）**。它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。')]),t._v(" "),s("p",[t._v("CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE 浏览器不能低于 IE10。整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与同源的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。因此，实现 CORS 通信的关键是服务器，只要服务器实现了 CORS 接口，就可以跨源通信。")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("Header")]),t._v(" 中设置："),s("code",[t._v("Access-Control-Allow-Origin")]),t._v("即可。")]),t._v(" "),s("h3",{attrs:{id:"jsonp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),s("p",[t._v("JSONP（JSON with Padding）是 "),s("strong",[t._v("JSON 的一种“使用模式”")]),t._v("，可用于解决主流浏览器的跨域数据访问的问题。由于同源策略，一般来说位于 "),s("code",[t._v("server1.example.com")]),t._v(" 的网页无法与 "),s("code",[t._v("server2.example.com")]),t._v(" 的服务器沟通，而 HTML 的 "),s("code",[t._v("<script>")]),t._v(" 元素是一个例外。利用 "),s("code",[t._v("<script>")]),t._v(" 元素的这个开放策略，网页可以得到从其他来源动态产生的 JSON 资料，而这种使用模式就是所谓的 JSONP。用 JSONP 抓到的资料并不是 JSON，而是任意的 JavaScript，用 JavaScript 直译器执行而不是用 JSON 解析器解析。")]),t._v(" "),s("p",[t._v("这种方式需要目标服务器配合一个 "),s("code",[t._v("callback")]),t._v(" 函数。")]),t._v(" "),s("h3",{attrs:{id:"nginx-反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理"}},[t._v("#")]),t._v(" Nginx 反向代理")]),t._v(" "),s("p",[t._v("以上跨域问题解决方案都需要服务器支持，当服务器无法设置 "),s("code",[t._v("header")]),t._v(" 或提供 "),s("code",[t._v("callback")]),t._v(" 时我们就可以采用 Nginx 反向代理的方式解决跨域问题。")]),t._v(" "),s("p",[t._v("Nginx 配置跨域案例，在 "),s("code",[t._v("nginx.conf")]),t._v(" 的 "),s("code",[t._v("location")]),t._v(" 中增加如下配置：")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Origin *或域名")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Headers X-Requested-With")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Methods GET,POST,OPTIONS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);