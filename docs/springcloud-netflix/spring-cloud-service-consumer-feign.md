# 服务消费者 - Feign



## 概述

在微服务架构中，业务都会被拆分成一个独立的服务，服务与服务的通讯基于多种跨进程的方式进行通信协作，而在`Spring Cloud`架构中比较常见的跨进程的方式是RESTful HTTP请求和RPC调用。这两种方式的实现方案有：

- RESTful HTTP请求：Ribbon + RestTemplate，
- RPC调用：Feign。

这一篇文章讲解下基于 Feign的通信方式。



## Feign简介

Feign是一种负载均衡的HTTP客户端, 使用Feign调用API就像调用本地方法一样，避免了调用目标微服务时，需要不断的解析/封装json 数据的繁琐。**Feign集成了Ribbon。Ribbon+Eureka是面向微服务编程，而Feign是面向接口编程。**

Feign 是一个声明式的伪 HTTP 客户端，它使得编写Web服务客户端 客户端变得更简单。使用 Feign，只需要创建一个接口并对它进行注解。它具有可插拔的注解特性，可使用 Feign 注解和 JAX-RS 注解，Feign 支持可插拔的编码器和解码器。Feign 默认集成了 Ribbon，并和 Eureka 结合，默认实现了负载均衡的效果。Spring Cloud 增加了对 Spring MVC的注解，Spring Web 默认使用了HttpMessageConverters, Spring Cloud 集成 Ribbon 和 Eureka 提供的负载均衡的HTTP客户端 Feign。

- Feign 采用的是基于接口的注解
- Feign 整合了 Ribbon

## 准备工作

演示案例方案和服务提供者集群，同[服务消费者 - Ribbon](./spring-cloud-service-consumer-ribbon.html#演示案例方案)，只是更改了服务的通信方式，这里不赘述。

## 创建服务消费者

创建一个工程名为 `hello-spring-cloud-netflix-consumer-feign` 的服务消费者项目，目的通过Feign接口的方式调用服务提供者的http://hello-spring-cloud-netflix-provider:8762/hi?msg=HelloProvider接口，并能够体现Feign的负载均衡机制。

### POM

`pom.xml` 配置如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>hello-spring-cloud-netflix-dependencies</artifactId>
        <version>1.0.0-SNAPSHOT</version>
        <relativePath>../hello-spring-cloud-netflix-dependencies/pom.xml</relativePath>
    </parent>

    <artifactId>hello-spring-cloud-netflix-consumer-feign</artifactId>
    <packaging>jar</packaging>

    <dependencies>
        <!-- Spring Boot Begin -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
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
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>
        <!-- Spring Cloud End -->

        <!-- 解决 thymeleaf 模板引擎一定要执行严格的 html5 格式校验问题 -->
        <dependency>
            <groupId>net.sourceforge.nekohtml</groupId>
            <artifactId>nekohtml</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <mainClass>hello.spring.cloud.netflix.consumer.feign.FeignConsumerApplication</mainClass>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

与[服务消费者 - Ribbon](./spring-cloud-service-consumer-ribbon.html#创建服务消费者)对比，这里主要是将`spring-cloud-starter-netflix-ribbon`移除，引入了`spring-cloud-starter-openfeign`依赖。



### Application

由于是消费者，同样需要开启 `@EnableDiscoveryClient` 配置，让消费者去到Eureka Server发现服务。此外，还需要使用 `@EnableFeignClients` 配置开启 Feign 功能。

```java
package hello.spring.cloud.netflix.consumer.feign;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class FeignConsumerApplication {

    public static void main(String[] args) {
        SpringApplication.run(FeignConsumerApplication.class, args);
    }

}

```



### application.yml

配置Eureka Server地址，设置程序端口号为：`8765`

```yaml
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
```



### Feign Interface

使用Feign只需要编写接口并且使用`@FeignClient("服务名")`注解来指定调用哪个服务，

与Ribbon对比：

1. 不需要编写ConfigurationBean，配置注入 `RestTemplate` 
2. 不需要将服务提供者提供的接口封装在一个Service，使用RestTemplate调用接口。

```java
package hello.spring.cloud.netflix.consumer.feign.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = "hello-spring-cloud-netflix-provider")
public interface ProviderClient {

    @GetMapping(value = "hi")
    public String sayHi(@RequestParam(value = "msg", required = false) String msg);

}

```

注意，Feign接口的方法的签名需要跟服务方的提供的服务方法签名一致，否则无法调用。



### ControllerTest

```java
package hello.spring.cloud.netflix.consumer.feign.ctrl;

import hello.spring.cloud.netflix.consumer.feign.service.ProviderClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FeignConsumerCtrl {

    @Autowired
    private ProviderClient providerClient;

    @GetMapping(value = "hi")
    public String sayHi(@RequestParam(value = "msg", required = false) String msg) {
        return providerClient.sayHi(msg);
    }

}

```



## 测试访问

在浏览器上多次访问 http://localhost:8765/hi?msg=HelloFeign

浏览器交替显示：

```html
Hi，your message is :"HelloFeign" i am from port：8762
Hi，your message is :"HelloFeign" i am from port：8763
```

请求成功则表示我们已经成功通过Feign实现了负载均衡访问不同端口的实例。


