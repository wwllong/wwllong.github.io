# Spring Boot 整合 Druid



## 概述

[Druid](https://github.com/alibaba/druid) 是阿里巴巴开源平台上的一个项目，它是一个 JDBC 组件库，包含数据库连接池、SQL Parser （SQL 解析器）等组件，在功能、性能、扩展性方面，都超过其他数据库连接池，包括 DBCP、C3P0、BoneCP、Proxool、JBoss DataSource。Druid 已经在阿里巴巴部署了超过 600 个应用，经过多年生产环境大规模部署的严苛考验。Druid 是阿里巴巴开发的号称为监控而生的数据库连接池！

Druid可以让程序员实现一些特殊的需求，比如向密钥服务请求凭证、统计 SQL 信息、SQL 性能收集、SQL 注入检查、SQL 翻译等，程序员可以通过定制来实现自己需要的功能。



## Spring Boot 整合 Druid

### 引入依赖

SpringBoot版本为2.5.3，在 `pom.xml` 文件中引入 `druid-spring-boot-starter` 依赖。

```xml
<!-- druid -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.1.10</version>
</dependency>
<!-- MySQL 驱动 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-jdbc</artifactId>
</dependency>
```

### 配置 `application.yml`

在 `application.yml` 中配置数据库连接

```yaml
spring:
  datasource:
    druid:
      url: jdbc:mysql://ip:port/dbname?useUnicode=true&characterEncoding=utf-8&useSSL=false
      username: root
      password: 123456
      initial-size: 1
      min-idle: 1
      max-active: 20
      test-on-borrow: true
      # MySQL 8.x: com.mysql.cj.jdbc.Driver
      driver-class-name: com.mysql.jdbc.Driver
```

项目运行的时候看到类似一下log信息，说明配置成功：

```shell
2021-08-17 12:25:37.330  INFO 2961 --- [           main] c.a.d.s.b.a.DruidDataSourceAutoConfigure : Init DruidDataSource
2021-08-17 12:25:37.506  INFO 2961 --- [           main] com.alibaba.druid.pool.DruidDataSource   : {dataSource-1} inited
```

