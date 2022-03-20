(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{882:function(s,a,t){"use strict";t.r(a);var n=t(58),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux安装jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux安装jdk"}},[s._v("#")]),s._v(" Linux安装JDK")]),s._v(" "),t("h2",{attrs:{id:"简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[s._v("#")]),s._v(" 简述")]),s._v(" "),t("p",[s._v("JDK主要分为两个版本，一个开源版本OpenJDK，还有一个官方版本的OracleJDK。本文主要记录在Linux系统上如何安装这些JDK的步骤,以Ubuntu为例：")]),s._v(" "),t("h2",{attrs:{id:"通过软件包安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过软件包安装"}},[s._v("#")]),s._v(" 通过软件包安装")]),s._v(" "),t("h3",{attrs:{id:"安装openjdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装openjdk"}},[s._v("#")]),s._v(" 安装OpenJDK")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("更新软件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装openjdk-8-jdk")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openjdk-8-jdk\n")])])])]),s._v(" "),t("li",[t("p",[s._v("检查是否安装成功")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("java -version\n")])])]),t("p",[s._v("结果类似如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("openjdk version "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.8.0_272"')]),s._v("\nOpenJDK Runtime Environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".0_272-8u272-b10-0ubuntu1~20.04-b10"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nOpenJDK "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-Bit Server VM "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25.272")]),s._v("-b10, mixed mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"安装oraclejdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装oraclejdk"}},[s._v("#")]),s._v(" 安装OracleJDK")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("安装依赖包")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-software-properties\n")])])])]),s._v(" "),t("li",[t("p",[s._v("添加仓库源")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository ppa:webupd8team/java\n")])])])]),s._v(" "),t("li",[t("p",[s._v("更新软件包列表")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装OracleJDK（安装过程需要接受协议略）")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" oracle-java8-installer\n")])])])]),s._v(" "),t("li",[t("p",[s._v("最后检查版本（略）")])])]),s._v(" "),t("h2",{attrs:{id:"手动下载压缩包安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动下载压缩包安装"}},[s._v("#")]),s._v(" 手动下载压缩包安装")]),s._v(" "),t("ol",[t("li",[t("p",[t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载压缩包"),t("OutboundLink")],1),s._v("，（以jdk-8u152-linux-x64.tar.gz为例）")])]),s._v(" "),t("li",[t("p",[s._v("解压缩并移动到指定目录")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压缩")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf jdk-8u152-linux-x64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建目录（-p ，递归创建目录）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/java\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动安装包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" jdk1.8.0_152/ /usr/local/java/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置所有者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /usr/local/java/\n")])])])]),s._v(" "),t("li",[t("p",[s._v("配置环境变量")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("配置系统环境变量：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/environment\n")])])]),t("p",[s._v("修改系统环境变量：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/java/jdk1.8.0_152\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/java/jdk1.8.0_152/jre\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/jre/lib\n")])])])]),s._v(" "),t("li",[t("p",[s._v("配置用户环境变量：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n")])])]),t("p",[s._v("修改用户环境变量")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PS1")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$BASH")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$BASH")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The file bash.bashrc already sets the default PS1.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PS1='\\h:\\w\\$ '")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f /etc/bash.bashrc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /etc/bash.bashrc\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# '")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$ '")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/java/jdk1.8.0_152\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/java/jdk1.8.0_152/jre\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/jre/lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/jre/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/bin\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -d /etc/profile.d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /etc/profile.d/*.sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -r "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" i\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("p",[s._v("使用户环境变量生效：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])])])])])]),s._v(" "),t("li",[t("p",[s._v("验证安装是否成功")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("java -version\njava version "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.8.0_152"')]),s._v("\nJava"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SE Runtime Environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".0_152-b16"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJava HotSpot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-Bit Server VM "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25.152")]),s._v("-b16, mixed mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("参考：")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/zbj18314469395/article/details/86064849",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux之Ubuntu18.04安装Java JDK8的三种方式"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);