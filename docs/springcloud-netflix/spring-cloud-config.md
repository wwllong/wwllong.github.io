# Spring Cloud Config

## 概述

在分布式系统中，由于服务数量巨多，为了方便服务配置文件的统一管理、实时更新，所以需要引入分布式配置中心组件。目前的解决方案主要有：

- [Spring Cloud Config](https://cloud.spring.io/spring-cloud-config/reference/html/)：Spring Cloud官方提供的分布式配置中心组件 。
- [Apollo](https://www.apolloconfig.com/#/zh/README)：携程框架研发部开源的可靠的分布式配置管理中心。
- [Spring Cloud Alibaba Nacos](https://nacos.io/zh-cn/)：Spring Cloud Alibaba的组件，提供简单易用的动态服务发现、服务配置、服务共享与管理等服务基础设施。

本文主要介绍 Spring Cloud Config 的配置与使用。 Spring Cloud Config 支持配置服务本地化（即配置存放在内存中），也支持放在远程 Git 仓库。在 Spring Cloud Config 组件中分两个角色：

- 配置中心服务端（ Config Server） ：存放和统一管理服务配置文件。
- 配置中心客户端（Config Client）：从服务端读取配置文件。



## 配置中心服务端

创建一个工程名为 `hello-spring-cloud-config` 的项目。

### POM

`pom.xml` 配置文件如下：

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.example</groupId>
        <artifactId>hello-spring-cloud-netflix-dependencies</artifactId>
        <version>1.0.0-SNAPSHOT</version>
        <relativePath>../hello-spring-cloud-netflix-dependencies/pom.xml</relativePath>
    </parent>

    <artifactId>hello-spring-cloud-config</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <dependencies>
        <!-- Spring Boot Begin -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <!-- Spring Boot End -->

        <!-- Spring Cloud Begin -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-config-server</artifactId>
        </dependency>
        <!-- Spring Cloud End -->
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <mainClass>com.example.hello.spring.cloud.config.ConfigApplication</mainClass>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```

### Application

启动类增加`@EnableConfigServer` 注解开启配置服务器功能以及`@EnableEurekaClient`注解注册服务到Eureka。

``` java
package com.example.hello.spring.cloud.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableConfigServer
@EnableEurekaClient
@SpringBootApplication
public class ConfigApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConfigApplication.class, args);
    }

}
```

### application.yml

配置文件中增加`spring.cloud.config`相关配置。这里我们使用远程 Git 仓库的方式存放我们的配置文件，Spring Cloud Config默认端口为 `8888`：

``` yaml
spring:
  main:
    allow-bean-definition-overriding: true
  application:
    name: hello-spring-cloud-config
  cloud:
    config:
      # 配置仓库的分支
      label: master
      server:
        git:
          # 配置 Git 仓库地址（GitHub、GitLab、码云 ...）
          uri: https://github.com/your-addr/spring-cloud-config 
          # 配置仓库路径，即存放配置文件的目录
          search-paths: respo
          # 访问 Git 仓库的账号和密码
          username: root
          password: 12345678

server:
  port: 8888

eureka:
  instance:
    hostname: localhost
  client:
    serviceUrl:
      defaultZone: http://${eureka.instance.hostname}:8761/eureka/
```

::: tip 提示

1. 使用 GitLab 作为仓库`uri.git` 需要在结尾加上 `.git`，而 GitHub 不用。
2. 如果要更改默认的服务端口，改用`bootstrap.properties`或`bootstrap.yml`加载配置文件。

:::

### 创建配置文件目录

在配置的Git仓库，创建一个名为 `respo` 的目录用于存放配置文件。这里将[服务消费者 - Feign](./spring-cloud-service-consumer-feign.html)的配置文件命名为`consumer-feign-dev.yml`，上传到配置中心服务端对应的Git仓库，用于测试是否生效，后续将该服务作为客户端从配置中心拉取该配置。

``` yaml
spring:
  application:
    name: hello-spring-cloud-netflix-consumer-feign
  thymeleaf:
    cache: false
    mode: LEGACYHTML5
    encoding: UTF-8
    servlet:
      content-type: text/html

server:
  port: 8765

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

feign:
  hystrix:
    enabled: true
```

### 测试获取配置信息

通过访问配置中心，拉取`consumer-feign-dev.yml`配置文件，浏览器端访问：http://localhost:8888/consumer-feign/dev/master，如果结果类似如下，即说明配置中心服务端部署成功。

``` xml
<Environment>
    <name>consumer-feign</name>
    <profiles>
        <profiles>dev</profiles>
    </profiles>
    <label>master</label>
    <version>9164e99eae1006a672fbad711a3961b451a90f33</version>
    <state/>
    <propertySources>
        <propertySources>
            <name>https://github.com/your-addr/respo/consumer-feign-dev.yml</name>
            <source>
                <spring.application.name>hello-spring-cloud-netflix-consumer-feign</spring.application.name>
                <spring.thymeleaf.cache>false</spring.thymeleaf.cache>
                <spring.thymeleaf.mode>LEGACYHTML5</spring.thymeleaf.mode>
                <spring.thymeleaf.encoding>UTF-8</spring.thymeleaf.encoding>
                <spring.thymeleaf.servlet.content-type>text/html</spring.thymeleaf.servlet.content-type>
                <server.port>8765</server.port>
                <eureka.client.serviceUrl.defaultZone>http://localhost:8761/eureka/</eureka.client.serviceUrl.defaultZone>
                <feign.hystrix.enabled>true</feign.hystrix.enabled>
            </source>
        </propertySources>
    </propertySources>
</Environment>
```

::: tip HTTP请求配置中心地址和资源文件映射关系

1. http://ip:port/{application}/{profile}[/{label}]
2. http://ip:port/{application}-{profile}.yml
3. http://ip:port/{label}/{application}-{profile}.yml
4. http://ip:port/{application}-{profile}.properties
5. http://ip:port/{label}/{application}-{profile}.properties

:::

## 配置中心客户端

在所有需要使用配置中心的服务按以下流程操作。这里以[服务消费者 - Feign](./spring-cloud-service-consumer-feign.html)为例。

### POM

增加`spring-cloud-starter-config`依赖：

``` xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
```

### Application

启动类无需改动（略）

### application.yml

配置信息从配置中心获取，下面是 Config Client 相关配置：

``` yaml
spring:
  cloud:
    config:
      # 配置服务中心的地址
      uri: http://localhost:8888
      # 配置文件名称的前缀
      name: consumer-feign
      # 配置仓库的分支
      label: master
      # 配置文件的环境标识（dev，test，prod）
      profile: dev
```



### 测试客户端启动

依次启动相关服务后（Euerka、Config），尝试启动Feign消费者服务，观察启动信息例如端口号，能正常启动说明客户端拉取配置服务中心配置成功：

``` shell
2021-08-30 13:19:29.342  INFO 3950 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8765 (http) with context path ''
2021-08-30 13:19:29.343  INFO 3950 --- [           main] .s.c.n.e.s.EurekaAutoServiceRegistration : Updating port to 8765
2021-08-30 13:19:29.346  INFO 3950 --- [           main] c.e.h.s.c.n.c.f.FeignConsumerApplication : Started FeignConsumerApplication in 13.445 seconds (JVM running for 18.851)
2021-08-30 13:19:29.610  INFO 3950 --- [)-192.168.0.102] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
2021-08-30 13:19:29.610  INFO 3950 --- [)-192.168.0.102] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2021-08-30 13:19:29.614  INFO 3950 --- [)-192.168.0.102] c.c.c.ConfigServicePropertySourceLocator : Fetching config from server at : http://localhost:8888
2021-08-30 13:19:29.616  INFO 3950 --- [)-192.168.0.102] o.s.web.servlet.DispatcherServlet        : Completed initialization in 6 ms
2021-08-30 13:19:30.381  INFO 3950 --- [)-192.168.0.102] c.c.c.ConfigServicePropertySourceLocator : Located environment: name=consumer-feign, profiles=[dev], label=master, version=9164e99eae1006a672fbad711a3961b451a90f33, state=null
```

