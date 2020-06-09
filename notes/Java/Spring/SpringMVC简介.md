# Spring MVC 简介

Spring MVC 也叫 Spring Web MVC，属于`展示层框架`。SpringMVC是Spring框架的一部分。

Spring Web MVC 框架提供了MVC（模型-视图-控制器）架构和用于开发灵活和松散耦合的Web应用程序的组件。MVC模式导致应用程序的不同方面（输入逻辑、业务逻辑和UI逻辑）分离，同时提供了这些元素之间的松散耦合。

* 模型（Model）：封装了应用程序数据，通常它们将由POJO类组成。
* 视图（View）：负责渲染模型数据，一般来说它生成客户端浏览器可以解释HTML输出。
* 控制器（Controller）：负责处理用户请求并构建适当的模型，并将其传递给视图进行渲染。

## DispatcherServlet组件类

传统的Servlet使用不灵活，每创建一个Servlet都需要到web.xml中进行配置，默认调用doGet() 或 doPost()方法。一个Servlet中有多个业务函数的需要使用传参数的方式做到灵活调用。例如：？opt=add/del/update

针对上述问题，SpringMVC是这样解决的：Spring Web MVC 框架是围绕DispathcerServlet设计的(核心组件），它处理所有的HTTP请求和响应，它的设计是方法级别的处理。Spring Web MVC DispatcerServlet的请求处理工作流如下图所示：

![img](imgs/springmvc-dispatcherServlet.png)

DispathcerServlet传入HTTP请求的事件顺序：


* 在接收到HTTP请求后，DispathcerServlet会查询HandlerMapping以调用相应的Controller。
* Controller接受请求并根据使用的GET或POST方法调用相应的服务方法。服务方法将基于定义的业务逻辑设置模型数据，并将视图名称返回给DispahtcerServlet。
* DispathcerServlet将从ViewResolver获取请求的定义视图。
* 当视图完成，DispathcerServlet将模型数据传递到最终的视图，并在浏览器上呈现。

所有上诉组件，即HandlerMapping、Controller和ViewResolver是WebApplicationCotext的一部分，它是普通ApplicationContext的扩展，带有Web应用程序所需的一些额外功能。