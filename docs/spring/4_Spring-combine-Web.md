# Spring Web与 Bean装配

## Spring整合Web

Spring-Web是专门用来使Spring支持Web应用的依赖。Jar应用的入口为main函数，War应用的入口在web.xml中配置。

### 容器初始化

启动容器时需要自动装载`ApplicationContext`,Spring提供的`ContextLoaderListener`就是为了自动装配`ApplicationContext`的配置信息。

### POM

在`pom.xml`增加`org.springframework:spring-web`依赖：
``` xml

<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>4.3.25.RELEASE</version>
</dependency>

```

### web.xml

在`web.xml`添加spring-web的配置：

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:spring-context*.xml</param-value>
    </context-param>
    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>

</web-app>

```

## ApplicationContextAware

当一个类实现了这个接口（ApplicationContextAware）之后，这个类就可以方便获得ApplicationContext的所有bean。换句话说，就是这个类可以直接获取Spring配置文件中，所有配置到的Bean对象。例如下面的工具类SpringContext就实现了ApplicationContextAware，他可以让我们方便得获取到Bean：

``` java
public class SpringContext implements ApplicationContextAware, DisposableBean {

    private Logger logger = LoggerFactory.getLogger(SpringContext.class);

    private static ApplicationContext applicationContext;

    /**
     * 使用ApplicationContext，根据beanId获取实例
     * @param beanId beanId
     * @param <T>
     * @return
     */
    public static <T> T getBean(String beanId){
        assertContextInjected();
        return (T)applicationContext.getBean(beanId);
    }

    /**
     * 使用ApplicationContext，根据clazz获取实例
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> T getBean(Class<T> clazz){
        assertContextInjected();
        return applicationContext.getBean(clazz);
    }

    public void destroy() throws Exception {
        logger.debug("清空 ApplicationContext");
        applicationContext = null;
    }

    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringContext.applicationContext = applicationContext;
    }

    private static void assertContextInjected(){
        Validate.validState(applicationContext != null, "您还没有在spring-context.xml中配置SpringContext对象");
    }

}

```

注意工具类中：Validate类为`commons-lang3`包提供的方法，所以需要引入该包。并且在spring-context.xml中配置SpringContext的实例时，注意该实例应该需要放在第一的位置。

``` xml

<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.9</version>
</dependency>

```

更多关于ApplicationContextAware的使用可以参考：[ApplicationContextAware使用理解](https://www.jianshu.com/p/4c0723615a52)



## Bean的装配方式

### 默认装配方式

在很久之前（Spring1）Bean装配的方式是通过`getBean()`方式从容器中获取指定的Bean实例，容器首先会调用Bean类的无参构造器，创建空值的实例对象。从Spring2开始，除了`getBean()`的装配方式外，还可以使用注解的装配方式，它是目前最常用的装配方式。

### 容器中Bean的作用域

在学习Bean的装配方式之前，我们需要先了解一下Bean的作用域。当通过Spring容器创建一个Bean实例，不仅可以完成Bean的实例化，还可以通过scope属性，为Bean指定的作用域。

Spring支持5种作用域：
```
- singleton：单例模式。在整个Spring容器种，使用singleton定义的Bean将是单例的，只有一个实例。默认为单例模式。
- prototype：原型模式。即每次使用getBean方式获取的同一个<bean/>的实例都是一个新的实例。
- request：对每次HTTP请求，都将会产生一个不同的Bean实例。
- session：对于每个不同的HTTP Session，都将产生一个不同的Bean实例。
- global session：每个全局的HTTP Session对应一个Bean实例。经典情况下，仅在使用protlet集群时生效，多个Web应用共享一个session。一般应用中，global-session与session是等同的。
```

注意事项：

* 对于scope的值request、session与global session，只有在Web应用中使用Spring时候，该作用域才有效。
* 对于scope为singletion的单例模式，该Bean是在容器被创建时就被装配好了。
* 对于scope为prototype的原型模式，Bean实例是在代码中使用该Bean实例时才进行装配的。

### 基于注解的装配方式

对于 DI 使用注解，将不在需要在Spring配置文件中声明Bean实例。Spring使用注解，需要在原有Spring运行环境基础上再做些改变。

在Spring配置文件中配置**组件扫描器**，用于在指定的基本包中扫描注解。

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/tool http://www.springframework.org/schema/tool/spring-tool.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <context:annotation-config/>
    <context:component-scan base-package="com.wenwl.my.shop"/>

</beans>
```

Spring 常用注解：

|注解|描述|
|:--|:--|
|@Component|Spring核心注解，类注解，value属性用于指定该bean的id值|
|@Repository|一般等效于@Component注解，用于对DAO实现类进行注解|
|@Service|等效于@Component注解，用于对Service实现类进行注解|
|@Controller|等效于@Component注解，用于对Controller实现类进行注解|
|@Scope|类注解，value说明Bean的作用域，默认为singleton|
|@Value|属性注解，value属性用于指定要注入的值|
|@Autowired|域属性注解，使用 按类型自动装配Bean 的方式，使用这种方式注入，类中无需setter，若属性有setter，也可将其加到setter上|
|@Resource|域属性注解， 该注解有一个name属性，可以注入指定的bean|
|@PostConstruct|方法注解，相当于初始化|

### 注解装配与XML装配的区别

注解的好处是配置方便、直观。但是其弊端是以硬编码的方式写入了Java代码中，其修改是需要重新编译代码的。

XML配置方式的最大好处是对其所做的修改，无需编译代码，只需重启服务器即可将新的配置加载。

若注解与XML同用，XML的优先级要高于注解。这样做的好处是：需要对某个Bean做修改，只需要修改配置文件即可。