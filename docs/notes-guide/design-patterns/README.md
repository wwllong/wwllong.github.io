# 设计模式 - Python 实现

&emsp;&emsp;**设计模式与编程语言没有关系，它是面向对象思想的灵活应用和高度概括，可以用任意语言来实现它。**

&emsp;&emsp;**学习设计模式，应该领悟其设计思想，而不应该局限于代码的层面**。例如，监听模式可以应用于网络中的客户端和服务器，比如手机中的各种App的消息推送，服务端是被观察者，各个手机上的App是观察者，一旦服务器上的数据有更新，就会被推送到手机上。在这个应用中你会发现服务器代码和App客户端代码其实是两套完全不一样的代码，它们是通过网络接口进行通信的，所以只停留在代码层面是不够的。


## 基础篇

- [监听模式](/design-patterns-base/1_dp-monitor.html)

  在对象之间定义一种一对多的依赖关系，当这个对象状态发生改变时，所有依赖它的对象都会被通知并自动更新。

- [状态模式](/design-patterns-base/2_dp-state.html)
  
  一个对象在其内部状态发生改变的时候，其表现的行为和外在属性不一样，这个对象看上去就像改变了它的类型一样。

- [中介模式](/design-patterns-base/3_dp-intermediary.html)
  
  用一个中介对象来封装一系列的对象交互，中介对象使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。

- [装饰模式](/design-patterns-base/4_dp-decorative.html)
  
  装饰模式能够动态地将额外的一些职责附加到一个对象。 装饰器为扩展功能提供了比生成子类的方式更灵活的选择。

- [单例模式](/design-patterns-base/5_dp-singleton.html)
  
  确保一个类只有一个实例，并且提供一个访问它的全局方法。

- [原型模式](/design-patterns-base/6_dp-clone.html)
  
  用于创建重复的对象，同时又能保证性能。

- [职责模式](/design-patterns-base/7_dp-duty.html)
  
  为避免请求的发送方与其接收方耦合，让多个对象都有处理请求的机会。将接收对象串起来，并沿着链传递请求，直到有一个对象处理它。（工作流）

- [代理模式](/design-patterns-base/8_dp-proxy.html)
  
  为其他对象提供一种代理来控制对它的访问。

- [外观模式](/design-patterns-base/9_dp-facade.html)
  
  用一个简单的接口封装一个复杂的子系统，使这个系统更容易使用。

- [迭代器模式](/design-patterns-base/10_dp-iterator.html)
  
  提供一种方法顺序地访问一组聚合对象（一个容器）中的各个元素，而又不需要暴露该对象的内部细节。

- [组合模式](/design-patterns-base/11_dp-composite.html)
  
  将对象组合成树形结构以表示“整体-部分”的层次结构关系。组合使得用户对单个对象和复合对象的使用具有一致性。

- [构建模式](/design-patterns-base/12_dp-builder.html)
  
  将复杂对象的构建过程与其表现分离，以便相同的构建过程可以创建不同的表现。

- [适配模式](/design-patterns-base/13_dp-adapter.html)
  
  将一个类的接口变成客户端所期望的另一种接口，从而使原本因接口不匹配而无法一起工作的两个类能够在一起工作。

- [策略模式](/design-patterns-base/14_dp-strategy.html)

  定义一系列算法，将每个算法都封装起来，并且使它们之间可以相互替换。

- [工厂模式](/design-patterns-base/15_dp-factory.html)

  专门定义一个类来负责创建其他类的实例。工厂模式又可以派生出简单工厂、工厂方法、抽象工厂模式。

- [命令模式](/design-patterns-base/16_dp-command.html)

  将具体的命令与对应的接收者相关联，而调用方与接收方隔离的，调用方只要发送正确的命令，接收方就能准确无误地完成相应的任务。

- [备忘模式](/design-patterns-base/17_dp-memento.html)

  将一个对象的状态或内容作为备份，在状态发生改变或者出行异常时，可以恢复对象之前的状态或内容。

- [享元模式](/design-patterns-base/18_dp-flyweight.html)

  运用共享技术有效地支持大量细粒度对象的复用，可以节约内存空间，提高系统的性能。

- [访问模式](/design-patterns-base/19_dp-visitor.html)

  在不改变数据结构的前提下定义作用于这些元素的新操作。

- [模板模式](/design-patterns-base/20_dp-template.html)

  面向对象中的继承机制。定义算法框架，将算法中用到的某些具体的步骤放到子类中实现。

- [桥接模式](/design-patterns-base/21_dp-bridge.html)

  面向对象中的接口实现机制。抽象和实现解耦，使得它们可以独立地变化。

- [解释模式](/design-patterns-base/22_dp-interpreter.html)

  描述如何使用面向对象构建一个简单的语言解释器。


## 进阶篇

- [过滤模式](/design-patterns-advanced/1_dp-filter.html)

  从一组对象中，过滤掉一些不符合要求的对象的过程。

- [对象池技术](/design-patterns-advanced/2_dp-objectpool.html)

  单例模式、享元模式的延伸。将对象放入池子，通过借用、归还让对象重复地被独享。

- [回调机制](/design-patterns-advanced/3_dp-callback.html)

  把函数作为参数传入另一个函数的回调机制是函数式编程的核心思想。

- [MVC模式](/design-patterns-advanced/4_dp-mvc.html)

  软件架构模式，将软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）。


