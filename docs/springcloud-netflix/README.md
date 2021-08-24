# Spring Cloud Netflix



## 概述

Spring Cloud 是一个相对比较新的微服务框架，2016 才推出 1.0 的 Release 版本. 但是其更新特别快，几乎每 1-2 个月就有一次更新，虽然 Spring Cloud 时间最短, 但是相比 Dubbo 等 RPC 框架, Spring Cloud 提供的全套的分布式系统解决方案。

Spring Cloud 为开发人员提供了快速构建分布式系统中一些常见模式的工具（例如配置管理，服务发现，断路器，智能路由，微代理，控制总线）。分布式系统的协调导致了样板模式, 使用 Spring Cloud 开发人员可以快速地支持实现这些模式的服务和应用程序。他们将在任何分布式环境中运行良好，包括开发人员自己的笔记本电脑，裸机数据中心，以及 Cloud Foundry 等托管平台。

**Spring Boot + Spring Cloud Netflix 是第一套微服务架构解决方案**。目前业界对 Spring Cloud 使用较为广泛。但随着项目宣布进入维护期(2018 年 12 月 12 日，Netflix 宣布 Spring Cloud Netflix 系列技术栈进入维护模式（不再添加新特性）)，意味着它再也没有新功能了；目前替代方案是**Spring Cloud Alibaba**。

## Spring Cloud Netflix 项目进入维护模式

近日，Netflix[宣布](https://github.com/Netflix/Hystrix#hystrix-status)Hystrix 进入维护模式。Ribbon自 2016 年以来一直处于[类似状态](https://github.com/Netflix/ribbon#project-status-on-maintenance)。 虽然 Hystrix 和 Ribbon 现在处于维护模式，但它们仍然在 Netflix 大规模部署。

`Hystrix Dashboard` 和 `Turbine` 已被 **Atlas** 取代。这些项目的最后一次提交分别是 2 年前和 4 年前。`Zuul1` 和 `Archaius1` 都被后来不兼容的版本所取代。

以下 Spring Cloud Netflix 模块和相应的 Starter 将进入维护模式：

- spring-cloud-netflix-archaius
- spring-cloud-netflix-hystrix-contract
- spring-cloud-netflix-hystrix-dashboard
- spring-cloud-netflix-hystrix-stream
- spring-cloud-netflix-hystrix
- spring-cloud-netflix-ribbon
- spring-cloud-netflix-turbine-stream
- spring-cloud-netflix-turbine
- spring-cloud-netflix-zuul

这并不包括Eureka或concurrency-limits模块。

## 什么是维护模式

将模块置于维护模式，意味着Spring Cloud团队将不再向模块添加新特性。我们将修复拦截器漏洞和安全问题，我们也将考虑和审查来自社区的小型 pull request。

我们打算继续支持这些模块至少一年的时间，从发布[Greenwich release train](https://github.com/spring-cloud/spring-cloud-release/milestones?direction=asc&sort=due_date)系列的普遍可用性开始。

## 替代品

我们建议使用以下功能替换这些模块提供的功能。

| CURRENT                     | REPLACEMENT                                       |
| :-------------------------- | :------------------------------------------------ |
| Hystrix                     | Resilience4j                                      |
| Hystrix Dashboard / Turbine | Micrometer + Monitoring System                    |
| Ribbon                      | Spring Cloud Loadbalancer                         |
| Zuul 1                      | Spring Cloud Gateway                              |
| Archaius 1                  | Spring Boot external config + Spring Cloud Config |

未来会有一篇关于Spring Cloud Loadbalancer以及与Netflix新项目Concurrency Limits集成的博文。

相关模块的介绍：

### Netflix Concurrency Limits

并发限制模块，它是 Netflix 开源的限流器项目，Spring Cloud 在 Greenwich 版本中引入 spring-cloud-netflix-concurrency-limits

### Archaius 1

有些人对它可能比较陌生，也是 Netflix 公司开源项目，基于 Java 的配置管理类库（apache common configuration 类库的扩展），主要用于多配置存储的动态获取。它主要的特性：

- 动态类型化属性
- 高效和线程安全的配置操作
- 配置改变时的回调机制
- 轮询框架
- JMX，通过Jconsole检查和调用操作属性
- 组合配置

### Resilience4j

目前还中孵化中，Spring 可能是要抽象一个断路器的统一规范，让不同的断路器（Hystrix、Resilience4j、**Sentinel（阿里开源）**）选择使用

#### Micrometer

Spring Boot 2 中的 Spring Boot Actuator 底层用的就是 Micrometer，它是 **Pivotal** 公司（也就是 Spring 所在的公司）开源的监控门面，类似于监控世界的 Slf4j。**Resilience4j 自带整合了 Micrometer**；目前还无法判断是否比 Hystrix Dashboard /Turbine 的更强大，更好用。

### Spring Cloud Loadbalancer

目前还中孵化中，使用上和 Ribbon 区别不大

### Spring Cloud Gateway

Zuul 持续跳票 1 年多，1.x 是一个基于阻塞 IO 的 API Gateway 以及 Servlet；直到 2018 年 5 月，Zuul 2.x（基于 Netty，也是非阻塞的，支持长连接）才发布，但 Spring Cloud 暂时还没有整合计划。Spring Cloud Gateway 比 Zuul 1.x 系列的性能和功能整体要好。

### Spring Boot external config + Spring Cloud Config

Netflix 开源的组件（Archaius 1/Ribbon/Hystrix）都没有使用 Spring Boot 的规范（spring-boot-configuration-processor），根本没有 metadata.json 文件，于是这部分配置 IDE 无法给你提示



## 参考

1. [【官方新闻】Spring Cloud Greenwich.RC1 available now](https://spring.io/blog/2018/12/12/spring-cloud-greenwich-rc1-available-now)
