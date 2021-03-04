# Spring Transaction

## 概述

事务（Transaction ）原本是数据库中的概念，用于数据访问层。但一般情况下，需要将事务提升到业务层，即Service层。这样做是为了能够**使用事务的特性来管理具体的业务**。

在 Spring 中通常可以通过以下三种方式来实现对事务的管理：

    1. 使用 Spring 的事务代理工厂管理事务（已过时）
    2. 使用 Spring 的事务注解管理事务
    3. 使用 AspectJ 的 AOP 配置管理事务

## Spring 事务管理 API

Spring 的事务管理，主要用到两个事务相关的接口：**事务管理器接口**和**事务定义接口**。

### 事务管理器接口

事务管理器接口是指 `PlatformTransactionManager` ，其主要用于完成事务的**提交、回滚，及获取事务的状态信息**。

该接口定义了 3 个事务方法：

    1. void commit(TransactionStatus status)：事务的提交
    2. TransactionStatus getTransaction(TransactionDefinition definition)：获取事务的状态
    3. void rollback(TranscationStatus status)：事务的回滚

`PlatformTransactionManager` 接口有两个常用的实现类：

    1. DataSourceTransactionManager：使用 JDBC 或 MyBatis 进行持久化数据时使用。
    2. HibernateTransactionManager：使用 Hibernate 进行持久化数据时使用。

**Spring 事务的默认回滚方式是：发生运行时异常回滚**。

### 事务定义接口

事务定义接口 `TransactionDefinition` 中定义了事务描述相关的三类常量：**事务隔离级别、事务传播行为、事务默认超时时限**，以及对它们的操作。分别有四种隔离级别和七种传播行为：

**事务的四种隔离级别**

    1. DEFAULT（不是隔离级别）：采用 DB 默认的事务隔离级别。MySql 默认为 REPEATABLE_READ；Oracle 默认为：READ_COMMITTED；
    2. READ_UNCOMMITTED：读未提交。未解决任何并发问题。
    3. READ_COMMITTED：读已提交。解决脏读，存在不可重复读与幻读。
    4. REPEATABLE_READ：可重复读。解决脏读、不可重复读。存在幻读。
    5. SERIALIZABLE：串行化。不存在并发问题。
    

**事务的七种传播行为**

所谓事务传播行为是指：**处于不同事务中的方法在相互调用时，执行期间事务的维护情况**。如，A 事务中的方法 a() 调用 B 事务中的方法 b()，在调用执行期间事务的维护情况，就称为事务传播行为。**事务传播行为是加在方法上的**。

    1. REQUIRED：指定的方法必须在事务内执行。若当前存在事务，就加入到当前事务中；若当前没有事务，则创建一个新事务。这种传播行为是最常见的选择，也是 Spring 默认的事务传播行为。
    2. SUPPORTS：指定的方法支持当前事务，但若当前没有事务，也可以以非事务方式执行。
    3. MANDATORY：指定的方法必须在当前事务内执行，若当前没有事务，则直接抛出异常。
    4. REQUIRES_NEW：总是新建一个事务，若当前存在事务，就将当前事务挂起，直到新事务执行完毕。
    5. NOT_SUPPORTED：指定的方法不能在事务环境中执行，若当前存在事务，就将当前事务挂起。
    6. NEVER：指定的方法不能在事务环境下执行，若当前存在事务，就直接抛出异常。
    7. NESTED：指定的方法必须在事务内执行。若当前存在事务，则在嵌套事务内执行；若当前没有事务，则创建一个新事务。

## 使用 AspectJ 的 AOP 配置管理事务

AspectJ 主要是**使用 XML 配置顾问方式自动为每个符合切入点表达式的类生成事务代理。**

### POM.XML
POM中增加 org.springframework:spring-aspects 依赖：
``` xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aspects</artifactId>
    <version>${spring.version}</version>
</dependency>
```

### 配置Spring.xml

AspectJ的AOP的配置示例：
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context" xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd">

    <context:annotation-config/>
    <context:component-scan base-package="xxx.xxx.your.package">
        <context:exclude-filter type="annotation" expression="xxx.xxx.xxx"/>
    </context:component-scan>

    <!-- 配置事务管理器 -->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <!-- 配置事务通知 -->
    <tx:advice id="myAdvice" transaction-manager="transactionManager">
        <tx:attributes>
            <tx:method name="save*" propagation="REQUIRED"/>
        </tx:attributes>
    </tx:advice>

    <!-- 配置顾问和切入点 -->
    <aop:config>
        <aop:pointcut id="myPointcut" expression="execution(* reference.service.*.*(..))" />
        <aop:advisor advice-ref="myAdvice" pointcut-ref="myPointcut" />
    </aop:config>
</beans>
```

## 使用 Spring 注解管理事务

通过 `@Transactional` 注解方式，也可将事务织入到相应方法中。而使用注解方式，只需在配置文件中加入一个 `tx` 标签，以告诉 Spring 使用注解来完成事务的织入。该标签只需指定一个属性：开启事务注解驱动。

### 配置Spring.xml

``` xml
<!-- 配置事务管理器 -->
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"/>
</bean>

<!-- 开启事务注解驱动 -->
<tx:annotation-driven transaction-manager="transactionManager" />
```

### @Transactional 注解所有可选属性

    1. propagation：用于设置事务传播属性。该属性类型为 Propagation 枚举，默认值为Propagation.REQUIRED。
    2. isolation：用于设置事务的隔离级别。该属性类型为 Isolation 枚举 ，默认值为 Isolation.DEFAULT。
    3. readOnly：用于设置该方法对数据库的操作是否是只读的。该属性为 boolean，默认值为 false。
    4. timeout：用于设置本操作与数据库连接的超时时限。单位为秒，类型为 int，默认值为 -1，即没有时限。
    5. rollbackFor：指定需要回滚的异常类。类型为 Class[]，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。
    6. rollbackForClassName：指定需要回滚的异常类类名。类型为 String[]，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。
    7. noRollbackFor：指定不需要回滚的异常类。类型为 Class[]，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。
    8. noRollbackForClassName： 指定不需要回滚的异常类类名。类型为 String[]，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。

需要注意的是：
1. **`@Transactional` 若用在方法上，只能用于 public 方法上。对于其他非 public 方法，如果加上了注解 `@Transactional`，虽然 Spring 不会报错，但不会将指定事务织入到该方法中，因为 Spring 会忽略掉所有非 public 方法上的 `@Transaction` 注解**。

2. 若 `@Transaction` 注解在类上，则表示该类上所有的（public）方法均将在执行时织入事务。
