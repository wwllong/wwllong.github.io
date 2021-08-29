# 熔断器-Netflix Hystrix



## 概述

通过上文[服务雪崩效应](./service-avalanche.html)，我们可以知道**在分布式环境中，不可避免地会遇到所依赖的服务挂掉，导致服务表现出故障或延迟，甚至造成整个系统不可用的严重问题**。我们需要一套管理机制，将节点变得相对独立，这样任何一个单节点故障，都至少不会拖垮整个系统的可用性。为了解决这个问题，业界提出了**熔断器**模型。

Netflix开源了[Hystrix](https://github.com/Netflix/Hystrix)(豪猪，因其背上长满了刺,而拥有自我保护能力)组件，Spring Cloud对其进行了整合。 Netflix 可以通过增加 **延迟容忍度** 与 **错误容忍度**，来控制这些分布式系统的交互。Hystrix 在服务与服务之间建立了一个中间层，防止服务之间出现故障，并提供了失败时的 **fallback** 策略，来增加你系统的整体可靠性和弹性。

## Hystrix的作用

Hystrix解决服务雪崩效应主要是策略是**服务调用者降级服务**。他主要做的事情如下：

- 引入第三方的 client 类库，通过延迟与失败的检测，来保护服务与服务之间的调用（网络间调用最为典型）
- 阻止复杂的分布式系统中出现级联故障
- 快速失败与快速恢复机制
- 提供兜底方案（fallback）并在适当的时机优雅降级
- 提供实时监控、报警与操作控制



## Hystrix的设计原则

Hystrix 通过以下设计原则来运作:

- 防止任何一个单节点将容器中的所有线程都占满
- 通过快速失败，取代放在队列中等待
- 提供在故障时的应急方法（fallback）
- 使用隔离技术 (如 Bulkheads【舱壁隔离模式】, Swimlane, 和 Circuit Breaker Patterns) 来限制任何一个依赖项的影响面
- 提供实时监控、报警等手段
- 提供低延迟的配置变更
- 防止客户端执行失败，不仅仅是执行网络请求的客户端

概括起来主要是以下三个设计原则：

- **资源隔离**：舱壁隔离模式，每个依赖服务分配独立的线程池进行资源隔离，避免线程都因等待响应而被阻塞, 从而造成的服务雪崩。
- **熔断器模式**：熔断器的开关能保证服务调用者在调用异常服务时, 快速返回结果, 避免大量的同步等待. 并且熔断器能在一段时间后继续侦测请求执行结果, 提供恢复服务调用的可能。
- **命令模式**：使用命令模式(继承HystrixCommand类)来包裹具体的服务调用逻辑(run方法), 并在命令模式中添加了服务调用失败后的降级逻辑(getFallback)。



## 使用Hystrix预防服务雪崩

### Ribbon 中使用熔断器

1. 在 pom.xml 中增加依赖

   ``` xml
   <dependency>
     <groupId>org.springframework.cloud</groupId>
     <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
   </dependency>
   ```

   

2. 在 Application 中增加 `@EnableHystrix` 注解

   ``` java
   package com.example.hello.spring.cloud.netflix.consumer.ribbon;
   
   import org.springframework.boot.SpringApplication;
   import org.springframework.boot.autoconfigure.SpringBootApplication;
   import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
   import org.springframework.cloud.netflix.hystrix.EnableHystrix;
   
   @SpringBootApplication
   @EnableDiscoveryClient
   @EnableHystrix
   public class RibbonConsumerApplication {
   
       public static void main(String[] args) {
           SpringApplication.run(RibbonConsumerApplication.class, args);
       }
   
   }
   ```

   

3. 在 Service 中增加 `@HystrixCommand` 注解，并指定 `fallbackMethod` 熔断方法

   ``` java
   package com.example.hello.spring.cloud.netflix.consumer.ribbon.service;
   
   import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
   import org.springframework.beans.factory.annotation.Autowired;
   import org.springframework.stereotype.Service;
   import org.springframework.web.client.RestTemplate;
   
   @Service
   public class ProviderService {
   
       @Autowired
       private RestTemplate restTemplate;
   
       @HystrixCommand(fallbackMethod = "sayHiError")
       public String sayHi(String msg) {
           return restTemplate.getForObject("http://hello-spring-cloud-netflix-provider/hi?msg=" + msg, String.class);
       }
   
       public String sayHiError(String msg){
           return "Hi，your message is : " + msg + " but request error.";
       }
   
   }
   ```

   

4. 测试熔断器。关闭服务提供者，请求 http://localhost:8764/hi?msg=HelloRibbon 浏览器会显示：

   ``` html
   Hi，your message is :"HelloRibbon" but request error.
   ```

   

### Feign 中使用熔断器

1. Feign 是自带熔断器，但默认是关闭的。需要在配置文件中配置打开它：

   ``` yaml
   feign:
     hystrix:
       enabled: true
   ```

2. 在 Feign 接口的 `@FeignClient`注解中指定 `fallback` 的熔断器类（注意加上注解`@Component`)，并实现对应的 Feign 接口。

   ``` java
   package com.example.hello.spring.cloud.netflix.consumer.feign.service;
   
   import org.springframework.cloud.openfeign.FeignClient;
   import org.springframework.web.bind.annotation.GetMapping;
   import org.springframework.web.bind.annotation.RequestParam;
   
   @FeignClient(value = "hello-spring-cloud-netflix-provider", fallback = ProviderClient.ProviderClientHystrix.class)
   public interface ProviderClient {
   
       @GetMapping(value = "hi")
       public String sayHi(@RequestParam(value = "msg", required = false) String msg);
   
       @Component
       public class ProviderClientHystrix implements ProviderClient{
   
           @Override
           public String sayHi(String msg) {
               return "Hi，your message is : " + msg + " but request error.";
           }
   
       }
   }
   
   ```

   

3. 测试熔断器。关闭服务提供者，请求 http://localhost:8765/hi?msg=HelloFeign 浏览器会显示：

   ``` html
   Hi，your message is : HelloFeign but request error.
   ```

   

## 参考

1. [Hystrix 使用手册 | 官方文档翻译](https://www.cnblogs.com/flashsun/p/12579367.html#_label0_0)
2. [防雪崩利器：熔断器 Hystrix 的原理与使用](https://segmentfault.com/a/1190000005988895) （好文，强烈推荐）
3. [Hystrix技术解析](https://www.jianshu.com/p/3e11ac385c73)

