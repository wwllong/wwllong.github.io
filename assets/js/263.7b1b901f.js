(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{921:function(t,e,l){"use strict";l.r(e);var a=l(58),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"druid简介"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#druid简介"}},[t._v("#")]),t._v(" Druid简介")]),t._v(" "),l("h2",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[l("a",{attrs:{href:"https://github.com/alibaba/druid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Druid"),l("OutboundLink")],1),t._v(" 是阿里巴巴开源平台上的一个项目，整个项目由数据库连接池、插件框架和 SQL 解析器组成。该项目主要是为了扩展 JDBC 的一些限制，可以让程序员实现一些特殊的需求，比如向密钥服务请求凭证、统计 SQL 信息、SQL 性能收集、SQL 注入检查、SQL 翻译等，程序员可以通过定制来实现自己需要的功能。")]),t._v(" "),l("h2",{attrs:{id:"各种连接池性能对比测试"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#各种连接池性能对比测试"}},[t._v("#")]),t._v(" 各种连接池性能对比测试")]),t._v(" "),l("p",[t._v("测试执行申请归还连接 1,000,000（一百万）次总耗时性能对比。")]),t._v(" "),l("h2",{attrs:{id:"测试环境"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[t._v("#")]),t._v(" 测试环境")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("环境")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("OS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("OS X 10.8.2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("CPU")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Intel i7 2GHz 4 Core")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Java Version 1.7.0_05")])])])]),t._v(" "),l("h2",{attrs:{id:"基准测试结果"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基准测试结果"}},[t._v("#")]),t._v(" 基准测试结果")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Jdbc Connection Pool")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("1 thread")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("2 thread")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("5 threads")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("10 threads")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("20 threads")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("50 threads")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Druid")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("898")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1,191")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1,324")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1,362")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1,325")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1,459")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("tomcat-jdbc")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1,269")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1,378")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2,029")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2,103")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1,879")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2,025")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DBCP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2,324")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("5,055")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("5,446")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("5,471")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("5,524")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("5,415")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("BoneCP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3,738")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3,150")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3,194")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("5,681")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("11,018")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("23,125")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("jboss-datasource")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4,377")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2,988")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3,680")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3,980")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("32,708")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("37,742")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("C3P0")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10,841")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("13,637")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10,682")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("11,055")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("14,497")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("20,351")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Proxool")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("16,337")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("16,187")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("18,310(Exception)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("25,945")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("33,706(Exception)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("39,501 (Exception)")])])])]),t._v(" "),l("h2",{attrs:{id:"结论"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),l("ul",[l("li",[t._v("Druid 是性能最好的数据库连接池，tomcat-jdbc 和 druid 性能接近。")]),t._v(" "),l("li",[t._v("proxool 在激烈并发时会抛异常，完全不靠谱。")]),t._v(" "),l("li",[t._v("c3p0 和 proxool 都相当慢，慢到影响 sql 执行效率的地步。")]),t._v(" "),l("li",[t._v("bonecp 性能并不优越，采用 LinkedTransferQueue 并没有能够获得性能提升。")]),t._v(" "),l("li",[t._v("除了 bonecp，其他的在 JDK 7 上跑得比 JDK 6 上快")]),t._v(" "),l("li",[t._v("jboss-datasource 虽然稳定，但是性能很糟糕")])])])}),[],!1,null,null,null);e.default=i.exports}}]);