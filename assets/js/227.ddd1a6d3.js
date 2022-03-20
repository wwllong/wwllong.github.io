(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{875:function(s,t,e){"use strict";e.r(t);var a=e(58),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ubuntu-20-x-dns设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-20-x-dns设置"}},[s._v("#")]),s._v(" Ubuntu 20.x DNS设置")]),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("在使用Ubuntu 20.x 的系统的时候，突然出现 无法通过域名访问服务的现象。例如在使用Docker无法拉取镜像、curl 指令访问 不了服务等等。")]),s._v(" "),e("p",[s._v("经排查，是由于Ubuntu 20.x DNS 被自动覆盖成127.0.0.53导致的。")]),s._v(" "),e("h2",{attrs:{id:"解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("临时解决：修改"),e("code",[s._v("/etc/resolv.conf")]),s._v("文件或"),e("code",[s._v("/etc/systemd/resolved.conf")]),s._v("配置阿里DNS即可。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("wenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/resolv.config\n")])])]),e("p",[s._v("在文件里添加")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("nameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.5")]),s._v(".5.5\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或")]),s._v("\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.6")]),s._v(".6.6\n")])])]),e("p",[s._v("修改完成后一般就可以，但是这种修复在重启后会被自动改回去。")])]),s._v(" "),e("li",[e("p",[s._v("永久解决：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("把systemd-resolved停掉并且禁用")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用服务")]),s._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl disable systemd-resolved.service\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止服务")]),s._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop systemd-resolved\n")])])])]),s._v(" "),e("li",[e("p",[s._v("把NetworkManager的dns设置成default")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# DNS设置成default")]),s._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/NetworkManager/NetworkManager.config\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在[main]部分中加入 dns=default")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除符号链接/etc/resolv.conf")]),s._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /etc/resolv.conf\n")])])])]),s._v(" "),e("li",[e("p",[s._v("重启NetworkManager。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network-manager restart")])])])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);