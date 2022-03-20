(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{898:function(t,v,e){"use strict";e.r(v);var a=e(58),_=Object(a.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"maven-pom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-pom"}},[t._v("#")]),t._v(" Maven POM")]),t._v(" "),e("p",[t._v("Maven是个工具，与我们项目的开发、程序是隔离的，要使得他们进行关联，那么就要一个"),e("strong",[t._v("桥梁")]),t._v("，对于Maven来说就是"),e("strong",[t._v("POM")]),t._v("文件。")]),t._v(" "),e("h2",{attrs:{id:"什么是pom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是pom"}},[t._v("#")]),t._v(" 什么是POM?")]),t._v(" "),e("p",[t._v("POM代表"),e("strong",[t._v("项目对象模型。它是Maven中工作的基本单位，这是一个XML文件。它始终保存该项目的基本目录中")]),t._v("。")]),t._v(" "),e("p",[t._v("POM包含的项目是使用Maven来构建的，它用来含各种配置信息。")]),t._v(" "),e("p",[t._v("POM也包含了目标和插件。在执行任务或目标时，Maven会使用当前目录中的POM。它读取POM得到所需的配置启息，然后执行。以下是POM文件中可以使用的配置：")]),t._v(" "),e("ul",[e("li",[t._v("project dependencies")]),t._v(" "),e("li",[t._v("plugins")]),t._v(" "),e("li",[t._v("goals")]),t._v(" "),e("li",[t._v("build profiles")]),t._v(" "),e("li",[t._v("project version")]),t._v(" "),e("li",[t._v("developers")]),t._v(" "),e("li",[t._v("mailing list")])]),t._v(" "),e("p",[t._v("创建一个POM之前，"),e("strong",[t._v("应该要先决定项目组("),e("code",[t._v("groupId")]),t._v(")，它的名字("),e("code",[t._v("artifactId")]),t._v(")和版本("),e("code",[t._v("version")]),t._v(")，因为这些属性在项目仓库是唯一标识的")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"pom例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pom例子"}},[t._v("#")]),t._v(" POM例子")]),t._v(" "),e("div",{staticClass:"language-pom extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<?xml version="1.0" encoding="UTF-8"?>\n\n<project xmlns="http://maven.apache.org/POM/4.0.0" \n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.wenwl.sms</groupId>\n    <artifactId>sms_mservice</artifactId>\n    <version>1.0</version>\n</project>\n')])])]),e("p",[e("strong",[t._v("每个项目中只有一个POM文件。")])]),t._v(" "),e("ul",[e("li",[t._v("pom.xml中必须要填写三个字段：groupId、artifactId、version")]),t._v(" "),e("li",[t._v("在库中，项目符号是 "),e("strong",[t._v("groupId:artifactId:version")])]),t._v(" "),e("li",[t._v("pom.xml的根元素是 <project> ，有三个主要的子节点。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("节点")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("groupId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("项目组编号，通常来说是唯一的。常见的是用域名反转的方式命名，目的是为了全球唯一。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("artifactId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("项目ID，通常是项目的名称。除了groupId外，artifactId也定义了artifact在存储库中的位置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("项目的版本。与groupId一起使用，artifact在库中用于将版本彼此分离。通常采用"),e("strong",[t._v("语义化版本规范")])])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("语义化版本规范")]),t._v(" "),e("p",[t._v("version通常语义化版本规范来命名。通过"),e("code",[t._v(".")]),t._v("分隔开数字，每一段数字代表不同的含义，通常来说分为3段:")]),t._v(" "),e("ol",[e("li",[t._v("第一段代表整个项目的架构改变;")]),t._v(" "),e("li",[t._v("第二段代表增加或减少了功能;")]),t._v(" "),e("li",[t._v("第三段代表修复了bug。")])]),t._v(" "),e("p",[t._v("例如 1.0.0 版本的软件，假如修复了几个bug，可以更改版本号为1.0.10；如果是修复了在一段时间后，业务或需求上砍掉了部分的功能或者添加了功能，则可能更改版本号为1.2.0；如果是在整个软件的架构或者大改的情况下，通常会改变第一个数字，改版为2.0.0等。以上只是常见的的一种语义化版本规范命名，不排除有以十进一的方式来命名。")])])])}),[],!1,null,null,null);v.default=_.exports}}]);