(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{850:function(s,a,t){"use strict";t.r(a);var e=t(58),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"g1并发执行的线程数对性能的影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g1并发执行的线程数对性能的影响"}},[s._v("#")]),s._v(" G1并发执行的线程数对性能的影响")]),s._v(" "),t("p",[s._v("优化案例1中，Tomcat 使用的垃圾回收器是ParallelGC，这个案例更改为G1（Linux虚拟机更改为4核、8G）。尝试说明G1并发执行的线程数对性能的影响。")]),s._v(" "),t("h2",{attrs:{id:"案例演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例演示"}},[s._v("#")]),s._v(" 案例演示")]),s._v(" "),t("p",[s._v("初始Tomcat JVM参数设置（"),t("code",[s._v("setenv.sh")]),s._v("文件）：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -XX:+UseG1GC"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -Xms20m"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -XX:SurvivorRatio=8"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -Xmx20m"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -XX:+PrintGCDetails"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -XX:MetaspaceSize=64m"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -XX:+PrintGCDateStamps"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -Xloggc:/home/wenwl/apache-tomcat-8.5.66/logs/gc.log"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -XX:ConcGCThreads=1"')]),s._v("\n")])])]),t("p",[s._v("其中参数"),t("code",[s._v("-XX:ConcGCThreads=1")]),s._v("可以在使用G1 GC 测试初始并发GC Threads之后再加上，因为没有配置的情况下：并发线程数是1。")]),s._v(" "),t("p",[s._v("初始化内存和最大内存调整小一些，目的发生 FullGC，关注GC时间 。")]),s._v(" "),t("p",[s._v("案例关注点是："),t("strong",[s._v("GC次数，GC时间，以及Jmeter的平均响应时间")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"初始状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始状态"}},[s._v("#")]),s._v(" 初始状态")]),s._v(" "),t("p",[s._v("启动Tomcat后，查看进程默认的并发线程数(ConcGCThreads)，默认为1：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://qiniu.wenwl.site/notes/jvm/tuning_case/perf_case5_1.png",alt:"perf_case5_1.png"}})]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("jstat")]),s._v("，查看压测前后JVM统计信息：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://qiniu.wenwl.site/notes/jvm/tuning_case/perf_case5_2_.png",alt:"perf_case5_2.png"}})]),s._v(" "),t("p",[s._v("由上图可知，压力测试期间，YGC的次数为735次（750 - 15），时间为 1.983秒（2.057 - 0.074），每次YGC平均耗时 2.69ms；")]),s._v(" "),t("p",[s._v("期间没有发生1次过Full GC；GC总时间为1.983秒。")]),s._v(" "),t("p",[s._v("接下来关注压测数据：\n"),t("img",{attrs:{src:"https://qiniu.wenwl.site/notes/jvm/tuning_case/perf_case5_3_.png",alt:"perf_case5_3.png"}})]),s._v(" "),t("p",[s._v("由上图可知，"),t("strong",[s._v("90%的请求响应时间为23ms，95%的请求响应时间为36ms，95%的请求响应时间为69ms，吞吐量为4737.5/sec")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"优化之后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化之后"}},[s._v("#")]),s._v(" 优化之后")]),s._v(" "),t("p",[s._v("根据之前"),t("RouterLink",{attrs:{to:"/java-vm/1_16_gc_collector.html#参数-5"}},[s._v("G1的参数介绍")]),s._v("，将并发线程设置为2，并重启Tomcat之后测试。")],1),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("export CATALINA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$CATALINA_OPTS -XX:ConcGCThreads=2"')]),s._v("\n")])])]),t("p",[s._v("使用"),t("code",[s._v("jstat")]),s._v("，查看优化后的压测前后JVM统计信息：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://qiniu.wenwl.site/notes/jvm/tuning_case/perf_case5_4.png",alt:"perf_case5_4.png"}})]),s._v(" "),t("p",[s._v("由上图可知，压力测试期间，YGC的次数为669次（687 - 9），时间为 1.786秒（1.831 - 0.045），每次YGC平均耗时 2.66ms；")]),s._v(" "),t("p",[s._v("期间发生过1次 Full GC；GC总时间为 1.814秒。")]),s._v(" "),t("p",[s._v("接下来关注优化后压测数据：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://qiniu.wenwl.site/notes/jvm/tuning_case/perf_case5_5.png",alt:"perf_case5_5.png"}})]),s._v(" "),t("p",[s._v("由上图可知，"),t("strong",[s._v("90%的请求响应时间为22ms，95%的请求响应时间为34ms，99%的请求响应时间为64ms，吞吐量为4880.9/sec")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("总的来说，增加了G1并发线程数之后，由于GC总时间略微下降的，平均吞吐量有略微提升，特别是在90%、95%、99%的平均响应时间有明显下降。仅从效果上来看，我们这次的优化是有一定效果的。在工作中对于线上项目进行优化的时候，可以考虑到这方面的优化。 此外，注意G1垃圾收集器是在大内存应用上则发挥其优势，平衡点在6-8GB之间。")])])}),[],!1,null,null,null);a.default=r.exports}}]);