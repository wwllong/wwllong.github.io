(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{819:function(t,s,a){"use strict";a.r(s);var r=a(58),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"程序计数器-pc寄存器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器-pc寄存器"}},[t._v("#")]),t._v(" 程序计数器（PC寄存器）")]),t._v(" "),a("h2",{attrs:{id:"pc-register简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pc-register简介"}},[t._v("#")]),t._v(" PC Register简介")]),t._v(" "),a("p",[t._v("JVM中的程序计数寄存器（Program Counter Register）中，Register的命名源于CPU的寄存器，寄存器存储指令相关的现场信息。CPU只有把数据装载到寄存器才能够运行。")]),t._v(" "),a("p",[t._v("程序计数寄存器并非是广义上所指的物理寄存器，或许将其翻译为PC计数器（或指令计数器、程序钩子）会更加贴切，并且也不容易引起一些不必要的误会。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qiniu.wenwl.site/notes/jvm/pc_register_1.png",alt:"pc_register_1.png"}})]),t._v(" "),a("p",[a("strong",[t._v("JVM中的PC寄存器是对物理PC寄存器的一种抽象模拟")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"程序计数器的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器的作用"}},[t._v("#")]),t._v(" 程序计数器的作用")]),t._v(" "),a("p",[t._v("程序计数器用来"),a("strong",[t._v("存储指向下一条指令的地址")]),t._v("，也即将要执行的指令代码。由执行引擎读取下一条指令，执行引擎会将指令执行的结果存放到虚拟机栈中，详细的过程后面会讲到。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qiniu.wenwl.site/notes/jvm/pc_register_2.png",alt:"pc_register_2.png"}})]),t._v(" "),a("ul",[a("li",[t._v("程序计数器是一块"),a("strong",[t._v("很小的内存空间")]),t._v("，几乎可以忽略不记。也是"),a("strong",[t._v("运行速度最快的存储区域")]),t._v("。")]),t._v(" "),a("li",[t._v("在JVM规范中，每个线程都有它自己的程序计数器，是"),a("strong",[t._v("线程私有")]),t._v("的，生命周期与线程的生命周期保持一致。")]),t._v(" "),a("li",[a("strong",[t._v("任何时间一个线程都只有一个方法在执行，也就是所谓的当前方法")]),t._v("。程序计数器会存储当前线程正在执行的Java方法的JVM指令地址；但是，如果是在执行native方法，则是未指定值（undefined）。")]),t._v(" "),a("li",[t._v("程序计数器是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。")]),t._v(" "),a("li",[t._v("字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令。")]),t._v(" "),a("li",[t._v("程序计数器是唯一一个在Java虚拟机规范中"),a("strong",[t._v("没有规定任何OutofMemoryError")]),t._v("情况的区域。")])]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    intc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    intd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("字节码文件：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(": iconst_3\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": istore_1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": iconst_4\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": istore_2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(": iload_1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(": iload_2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(": isub\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(": ireturn\n")])])]),a("h2",{attrs:{id:"常见面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见面试题"}},[t._v("#")]),t._v(" 常见面试题")]),t._v(" "),a("p",[t._v("Q1: 使用PC寄存器存储字节码指令地址有什么用呢？或者为什么使用PC寄存器记录当前线程的执行地址呢？")]),t._v(" "),a("p",[t._v("因为CPU需要不停的切换各个线程，这时候切换回来以后，就得知道接着从哪开始继续执行。JVM的字节码解释器就需要通过改变PC寄存器的值来明确下一条应该执行什么样的字节码指令。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qiniu.wenwl.site/notes/jvm/pc_register_3.png",alt:"pc_register_3.png"}})]),t._v(" "),a("p",[t._v("Q2: PC寄存器为什么被设定为私有的？")]),t._v(" "),a("p",[t._v("我们都知道由于CPU时间片轮限制，众多线程在并发执行过程中，任何一个确定的时刻，一个处理器或者多核处理器中的一个内核，只会执行某个线程中的一条指令（多线程其实在一个特定的时间段内只会执行其中某一个线程的方法，只是CPU会不停地做任务切换），所以这样必然导致经常线程执行中断或恢复，如何保证分毫无差呢？为了能够准确地记录各个线程正在执行的当前字节码指令地址，最好的办法自然是为每个线程在创建后，都会产生自己的程序计数器和栈帧，程序计数器在各个线程之间互不影响，这样一来各个线程之间便可以进行独立计算，从而不会出现相互干扰的情况。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("时间片")]),t._v(" "),a("p",[t._v("CPU时间片即CPU分配给各个程序的时间，每个线程被分配一个时间段，称作它的时间片。")]),t._v(" "),a("p",[t._v("在宏观上：我们可以同时打开多个应用程序，每个程序并行不悖，同时运行。")]),t._v(" "),a("p",[t._v("但在微观上：由于只有一个CPU，一次只能处理程序要求的一部分，如何处理公平，一种方法就是引入时间片，每个程序轮流执行。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);