# Spring Boot 整合 HikariCP



## 概述

[HiKariCP](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fbrettwooldridge%2FHikariCP) 是数据库连接池的一个后起之秀，号称性能最好，可以完美地 PK 掉其他连接池。Hikari（ひかり[shi ga li]） 来自日文，是 **光** 的意思，这个产品的口号是 **快速、简单、可靠**。总得来说，它是一个高性能的 JDBC 连接池，基于 BoneCP 做了不少的改进和优化，就连 BoneCP 作者放弃维护，在Github 项目主页推荐大家使用 HikariCP。（BoneCP 在快速这个特点上做到了极致，例如是C3P0的25倍左右）

HiKariCP 从 Spring Boot 2.x 后纳入为默认的数据连接池。

## HiKariCP 特性



### 优化

- **字节码精简 ：** 优化代码，直到编译后的字节码最少，这样，CPU 缓存可以加载更多的程序代码
- **优化代理和拦截器 ：** 减少代码，例如 HikariCP 的 Statement proxy 只有 100 行代码，只有 BoneCP 的十分之一
- **自定义数组类型（FastStatementList）代替 ArrayList ：** 避免每次 `get()` 调用都要进行 range check，避免调用 `remove()` 时的从头到尾的扫描
- **自定义集合类型（ConcurrentBag）：** 提高并发读写的效率
- **其他针对 BoneCP 缺陷的优化：** 比如对于耗时超过一个 CPU 时间片的方法调用的研究（但没说具体怎么优化）

### 代码量

几个连接池的代码量对比（代码量越少，一般意味着执行效率越高、发生 BUG 的可能性越低）:

| Pool     | Files | Code  |
| -------- | ----- | ----- |
| Vibur    | 34    | 1927  |
| HikariCP | 21    | 2228  |
| Tomcat   | 31    | 6345  |
| BoneCP   | 49    | 7293  |
| C3P0     | 120   | 15550 |

### 可靠性

另外，关于可靠性方面，也是有实验和数据支持的。对于数据库连接中断的情况，通过测试 `getConnection()`，各种 CP 的不相同处理方法如下（所有 CP 都配置了跟 `connectionTimeout` 类似的参数为 5 秒钟）

- **HikariCP(A)：** 等待 5 秒钟后，如果连接还是没有恢复，则抛出一个 `SQLExceptions` 异常；后续的 `getConnection()` 也是一样处理
- **C3P0(C-)：** 完全没有反应，没有提示，也不会在 `CheckoutTimeout` 配置的时长超时后有任何通知给调用者；然后等待 2 分钟后终于醒来了，返回一个 error
- **Tomcat(F)：** 返回一个 connection，然后调用者如果利用这个无效的 connection 执行 SQL 语句 结果可想而知；大约 55 秒之后终于醒来了，这时候的 `getConnection()` 终于可以返回一个 error，但没有等待参数配置的 5 秒钟，而是立即返回 error
- **BoneCP(C)：** 跟 Tomcat 的处理方法一样；也是大约 55 秒之后才醒来，有了正常的反应，并且终于会等待 5 秒钟之后返回 error 了



## Spring Boot 整合 HikariCP

### 引入依赖

```xml
<!-- HikariCP -->
<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>${hikaricp.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
    <exclusions>
        <!-- 排除 tomcat-jdbc 以使用 HikariCP -->
        <exclusion>
            <groupId>org.apache.tomcat</groupId>
            <artifactId>tomcat-jdbc</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<!-- MySQL 驱动 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>
```

### 配置 `application.yml`

```yml
spring:
  datasource:
    type: com.zaxxer.hikari.HikariDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://ip:port/dbname?useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: root
    password: root
    hikari:
      # 是客户端等待连接池连接的最大毫秒数
      connection-timeout: 30000
      # 是允许连接在连接池中空闲的最长时间
      minimum-idle: 10
      # 配置最大池大小
      maximum-pool-size: 65
      # 是允许连接在连接池中空闲的最长时间（以毫秒为单位）
      idle-timeout: 60000
      # 池中连接关闭后的最长生命周期（以毫秒为单位）
      max-lifetime: 600000
      # 配置从池返回的连接的默认自动提交行为。默认值为true。
      auto-commit: true
      # 连接池的名称
      pool-name: MyHikariCP
      # 开启连接监测泄露
      leak-detection-threshold: 5000
      # 测试连接数据库
      connection-test-query: SELECT 1
```

## HikariCP 默认配置

HikariCP 有两部分的参数有两部分组成

- 主要参数是在 `com.zaxxer.hikari.HikariConfig` 中，
- 部分参数是在 `com.zaxxer.hikari.pool.PoolBase` 中。

### 常用参数配置

| 属性                | 默认值       | 说明                                                         |
| :------------------ | :----------- | :----------------------------------------------------------- |
| autoCommit          | true         | 自动提交从池中返回的连接                                     |
| connectionTimeout   | 30000        | 等待来自池的连接的最大毫秒数                                 |
| maxLifetime         | 1800000      | 池中连接最长生命周期如果不等于0且小于30秒则会被重置回30分钟  |
| minimumIdle         | 10           | 池中维护的最小空闲连接数 minIdle<0或者minIdle>maxPoolSize,则被重置为maxPoolSize |
| maximumPoolSize     | 10           | 池中最大连接数，包括闲置和使用中的连接                       |
| metricRegistry      | null         | 连接池的用户定义名称，主要出现在日志记录和JMX管理控制台中以识别池和池配置 |
| healthCheckRegistry | null         | 报告当前健康信息                                             |
| poolName            | HikariPool-1 | 连接池的用户定义名称，主要出现在日志记录和JMX管理控制台中以识别池和池配置 |
| idleTimeout         |              | 是允许连接在连接池中空闲的最长时间                           |

建议：

1. minimumIdle，建议使用默认值，小于maximumPoolSize值。
2. 连接空闲时间idleTimeout生效，重发频率为60多秒，值可设为1分钟，减少空闲连接占用，尽快释放数据库连接。
3. 连接生命周期maxLifetime值设为10分钟，低于数据库超时时长，尽快释放数据库无效连接。
4. 增加连接池的用户定义名称。
5. 开启连接监测泄露leakDetectionThreshold方法，此属性控制在记录消息之前连接可能离开池的时间量，表明可能存在的连接泄漏。

