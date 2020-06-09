# OutOfMenoryError异常

&emsp;&emsp;目的：验证Java虚拟机中各个规范中的运行时区域存储的内容，并达到工作中根据异常信息快速判断哪个区域的内存溢出，以及怎样的代码可能导致这些区域的内存溢出，以及该如何处理该类异常。

## Java堆溢出

&emsp;&emsp;堆内存溢出异常时最常见的OOM异常之一。我们知道Java堆是用于存储对象实例的，我们只要`不断得创建对象，并且保证GC Roots到对象之间有可达路径`来避免垃圾回收机制清除这些对象，就会在对象数量达到堆最大的容量限制后产生内存溢出异常。

&emsp;&emsp;处理这个问题的简略思路：
- 可以通过设置参数：`-XX:+HeapDumpOnOutOfMemoryError`让虚拟机在出现内存溢出异常时Dump（转储）出当前的内存堆`转储`快照以便事后使用内存映像分析工具进行分析。重点是`确认内存中的对象是否必要的`，也就是要先分清楚到底是出现了`内存泄漏（Memory Leak）`还是`内存溢出(Memory Overflow)`。
- 如果是内存泄漏，可进一步通过工具`查看泄漏对象到GC Roots的引用链`。也就是说要找到泄漏对象是通过怎样的路径与GC Roots相关联并导致了垃圾收集器无法自动回收它们。`通过掌握泄漏对象的类型信息，以及GC Roots引用链的信息，可以比较准确地定位出导致内存泄漏的代码位置。`
- 如果不是内存泄漏，也就是说内存中的对象确实必须要存活，那么就应当检查`虚拟机的堆参数（-Xmx、-Xms），以及机器物理内存对比看是否可以调大`，从代码上检查`是否存在某些对象生命周期过长、持有状态时间过长`的情况，尝试减少出现运行期间的内存消耗。

``` java
/**
 *  内存溢出异常：堆内存溢出
 * @author Wwl
 *
 * VM Args:-Xms20m -Xmx20m -XX:+HeapDumpOnOutOfMemoryError
 */
public class HeapOOM {
	
	static class OOMObject {
	}
	
	public static void main(String[] args) {
		
		List<OOMObject> list = new ArrayList<>();
		
		while(true) {
			list.add(new OOMObject());
		}
	}
}

/**运行结果：
java.lang.OutOfMemoryError: Java heap space
Dumping heap to java_pid10468.hprof ...
Heap dump file created [28851485 bytes in 0.121 secs]
*/

```

## Java栈溢出
&emsp;&emsp;对于HotSpot虚拟机，不区分虚拟机栈和本地方法栈，所以`-Xoss参数（设置本地方法栈大小）虽然存在，但实际上是无效的。`栈容量只由-Xss参数设定。

&emsp;&emsp;JVM规范描述两种异常：  
1. StackOverflowError：线程请求的栈深度大于虚拟机所允许的最大深度。
2. OutOfMemoryError：虚拟机在扩展时无法申请到足够的内存空间。
   
（本质上只是对同一件事情的两种描述而已：当栈空间无法继续分配的时候，到底是内存太小，还是已使用的栈空间太大。）

## 运行时常量池溢出

## 方法区溢出

## 本机直接内存溢出     