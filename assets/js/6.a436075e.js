(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{658:function(t,s,a){t.exports=a.p+"assets/img/hystrix-principle-1.f203db94.png"},659:function(t,s,a){t.exports=a.p+"assets/img/hystrix-principle-2.96325624.png"},660:function(t,s,a){t.exports=a.p+"assets/img/hystrix-principle-3.af8082cf.png"},661:function(t,s,a){t.exports=a.p+"assets/img/hystrix-principle-4.995e5420.png"},662:function(t,s,a){t.exports=a.p+"assets/img/hystrix-principle-5.87ffe419.png"},663:function(t,s,a){t.exports=a.p+"assets/img/hystrix-principle-6.1c9e4fa3.png"},664:function(t,s,a){t.exports=a.p+"assets/img/hystrix-principle-7.ec232e3f.png"},665:function(t,s,a){t.exports=a.p+"assets/img/hystrix-principle-8.b8ab1d39.png"},666:function(t,s,a){t.exports=a.p+"assets/img/hystrix-principle-9.17aa6339.png"},993:function(t,s,a){"use strict";a.r(s);var n=a(58),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"netflix-hystrix工作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#netflix-hystrix工作原理"}},[t._v("#")]),t._v(" Netflix Hystrix工作原理")]),t._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("p",[n("strong",[t._v("Hystrix")]),t._v(" 的中文含义是豪猪，因其背上长满了刺,而拥有自我保护能力。Netflix 的 Hystrix 是一个帮助解决分布式系统交互时超时处理和容错的类库，它同样拥有保护系统的能力，是防服务雪崩利器。")]),t._v(" "),n("h2",{attrs:{id:"hystrix预防服务雪崩设计原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix预防服务雪崩设计原则"}},[t._v("#")]),t._v(" Hystrix预防服务雪崩设计原则")]),t._v(" "),n("p",[t._v("Hystrix预防服务雪崩设计原则主要包括：资源隔离、熔断器模式、命令模式。")]),t._v(" "),n("h3",{attrs:{id:"资源隔离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#资源隔离"}},[t._v("#")]),t._v(" 资源隔离")]),t._v(" "),n("p",[t._v("货船为了进行防止漏水和火灾的扩散，会将货仓分隔为多个（如下图），这种将资源隔离以减少风险的方式被称为："),n("strong",[t._v("Bulkheads")]),t._v("（舱壁隔离模式），Hystrix将这个模式运用到了服务调用者上。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(658),alt:"hystrix-principle-1"}})]),t._v(" "),n("p",[t._v("在微服务系统中，我们实现的一个业务逻辑通常会依赖多个服务。比如，商品详情展示服务会依赖商品服务、价格服务、商品评论服务，如图所示:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(659),alt:"hystrix-principle-2"}})]),t._v(" "),n("p",[n("strong",[t._v("调用三个依赖服务会共享商品详情服务的线程池")]),t._v("，如果其中的商品评论服务不可用，就会出现线程池里所有线程都因等待响应而被"),n("strong",[t._v("阻塞")]),t._v("，从而造成"),n("strong",[t._v("服务雪崩")]),t._v("，如图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(660),alt:"hystrix-principle-3"}})]),t._v(" "),n("p",[n("strong",[t._v("Hystrix通过将每个依赖服务分配独立的线程池进行资源隔离，从而避免服务雪崩")]),t._v("。如下图所示，当商品评论服务不可用时，即使商品服务独立分配的20个线程全部处于同步等待状态，也不会影响其他依赖服务的调用。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(661),alt:"hystrix-principle-4"}})]),t._v(" "),n("h3",{attrs:{id:"熔断器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#熔断器模式"}},[t._v("#")]),t._v(" 熔断器模式")]),t._v(" "),n("p",[t._v("熔断器模式定义了熔断器开关相互转换的逻辑：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(662),alt:"hystrix-principle-5"}})]),t._v(" "),n("p",[t._v("熔断器开关相互转换是通过当前服务健康状况（请求失败数 / 请求总数）和设定阈值比较决定的：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("当熔断器开关关闭时，请求被允许通过熔断器。")]),t._v(" "),n("p",[t._v("如果当前健康状况高于设定阈值，开关继续保持关闭。")]),t._v(" "),n("p",[t._v("如果当前健康状况低于设定阈值，开关则切换为打开状态。")])]),t._v(" "),n("li",[n("p",[t._v("当熔断器开关打开时，请求被禁止通过。")])]),t._v(" "),n("li",[n("p",[t._v("当熔断器开关处于打开状态，经过一段时间后，熔断器会自动进入半开状态，这时熔断器只允许一个请求通过。")]),t._v(" "),n("p",[t._v("当该请求调用成功时，熔断器恢复到关闭状态。若该请求失败，熔断器继续保持打开状态，接下来的请求被禁止通过。")])])]),t._v(" "),n("p",[t._v("总得来说，"),n("strong",[t._v("熔断器的开关能保证服务调用者在调用异常服务时，快速返回结果，避免大量的同步等待。并且熔断器能在一段时间后继续侦测请求执行结果，提供恢复服务调用的可能")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"命令模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[t._v("#")]),t._v(" 命令模式")]),t._v(" "),n("p",[t._v("Hystrix使用命令模式（继承HystrixCommand类）来包裹具体的服务调用逻辑（run方法），并在命令模式中添加了服务调用失败后的降级逻辑（getFallback），同时我们在Command的构造方法中可以定义当前服务线程池和熔断器的相关参数， 如下代码所示:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service1HystrixCommand")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommand")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service1")]),t._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Request")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service1HystrixCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service1")]),t._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Request")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("supper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withGroupKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandGroupKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Factory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ServiceGroup"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("andCommandKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Factory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"servcie1query"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("andThreadPoolKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixThreadPoolKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Factory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service1ThreadPool"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("andThreadPoolPropertiesDefaults")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixThreadPoolProperties"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Setter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withCoreSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务线程池数量")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("andCommandPropertiesDefaults")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandProperties"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Setter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withCircuitBreakerErrorThresholdPercentage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 熔断器关闭到打开阈值")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withCircuitBreakerSleepWindowInMilliseconds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 熔断器打开到关闭的时间窗长度")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" service1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dummy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("在使用了Command模式构建了服务对象之后，服务便拥有了熔断器和线程池的功能")]),t._v("。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(663),alt:"hystrix-principle-6"}})]),t._v(" "),n("h2",{attrs:{id:"hystrix工作流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix工作流程"}},[t._v("#")]),t._v(" Hystrix工作流程")]),t._v(" "),n("p",[t._v("Hystrix服务调用的工作流程：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(664),alt:"hystrix-principle-7"}})]),t._v(" "),n("ol",[n("li",[t._v("构建Hystrix的Command对象，调用执行方法。")]),t._v(" "),n("li",[t._v("Hystrix检查当前服务的熔断器开关是否开启，若开启，则执行降级服务getFallback方法。")]),t._v(" "),n("li",[t._v("若熔断器开关关闭，则Hystrix检查当前服务的线程池是否能接收新的请求，若超过线程池已满，则执行降级服务getFallback方法。")]),t._v(" "),n("li",[t._v("若线程池接受请求，则Hystrix开始执行服务调用具体逻辑run方法。")]),t._v(" "),n("li",[t._v("若服务执行失败，则执行降级服务getFallback方法，并将执行结果上报"),n("strong",[t._v("Metrics")]),t._v("更新服务健康状况。")]),t._v(" "),n("li",[t._v("若服务执行超时，则执行降级服务getFallback方法，并将执行结果上报"),n("strong",[t._v("Metrics")]),t._v("更新服务健康状况。")]),t._v(" "),n("li",[t._v("若服务执行成功，返回正常结果。")]),t._v(" "),n("li",[t._v("若服务降级方法getFallback执行成功，则返回降级结果。")]),t._v(" "),n("li",[t._v("若服务降级方法getFallback执行失败，则抛出异常。")])]),t._v(" "),n("p",[t._v("当"),n("RouterLink",{attrs:{to:"/springcloud-netflix/service-avalanche.html#雪崩案例"}},[t._v("雪崩案例")]),t._v("启用 Hystrix 封装了原有的远程调用请求后，流程图变为下图所示：")],1),t._v(" "),n("p",[n("img",{attrs:{src:a(665),alt:"hystrix-principle-8"}})]),t._v(" "),n("h2",{attrs:{id:"hystrix-metrics的实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-metrics的实现"}},[t._v("#")]),t._v(" Hystrix Metrics的实现")]),t._v(" "),n("p",[n("strong",[t._v("Hystrix的Metrics中保存了当前服务的健康状况，包括服务调用总次数和服务调用失败次数等。根据Metrics的计数，熔断器从而能计算出当前服务的调用失败率，用来和设定的阈值比较从而决定熔断器的开关状态切换逻辑。因此Metrics的实现非常重要")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"_1-4之前的滑动窗口实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4之前的滑动窗口实现"}},[t._v("#")]),t._v(" 1.4之前的滑动窗口实现")]),t._v(" "),n("p",[t._v("Hystrix在1.4.x之前的版本中使用自定义的滑动窗口数据结构来记录当前时间窗的各种事件（成功，失败，超时，线程池拒绝等）的计数。事件产生时， 滑动窗口数据结构根据当前时间来确定使用旧桶还是创建新桶来计数， 并在桶中对计数器经行修改，这些修改是多线程并发执行的， 代码中有不少加锁操作，逻辑较为复杂。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(666),alt:"hystrix-principle-9"}})]),t._v(" "),n("h3",{attrs:{id:"_1-5之后的滑动窗口实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5之后的滑动窗口实现"}},[t._v("#")]),t._v(" 1.5之后的滑动窗口实现")]),t._v(" "),n("p",[t._v("Hystrix在1.5.x的版本中开始使用"),n("code",[t._v("RxJava")]),t._v("的"),n("code",[t._v("Observable.window()")]),t._v("实现滑动窗口。"),n("code",[t._v("RxJava")]),t._v("的"),n("code",[t._v("Observable.window()")]),t._v("使用后台线程创建新桶，避免了并发创建桶的问题。同时"),n("code",[t._v("RxJava")]),t._v("的单线程无锁特性也保证了计数变更时的线程安全，从而使代码更加简洁。\n以下为我使用"),n("code",[t._v("Observable.window()")]),t._v("方法实现的一个简易滑动窗口Metrics，短短几行代码便能完成统计功能，足以证明"),n("code",[t._v("RxJava")]),t._v("的强大：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeWindowTest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observable")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" source "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("interval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MILLISECONDS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RandomUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" metrics "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" metrics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InternalObservableUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ERROR_NOT_IMPLEMENTED"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"窗口Metrics:"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" JSON"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJSONString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metrics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000005988895",target:"_blank",rel:"noopener noreferrer"}},[t._v("防雪崩利器：熔断器 Hystrix 的原理与使用"),n("OutboundLink")],1),t._v(" （好文，强烈推荐）")])])])}),[],!1,null,null,null);s.default=e.exports}}]);