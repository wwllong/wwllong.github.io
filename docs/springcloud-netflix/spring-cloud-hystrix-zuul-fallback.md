# 路由网关失败回调



## 概述

我们先前讨论了为了避免[服务雪崩效应](./service-avalanche.html)，引入了熔断器的解决方案[Netflix Hystrix](./spring-cloud-hystrix.html)，现在用了路由网关统一管理了对服务的接口访问，假如，网关向相关API服务请求失败了该如何处理？同样的，路由的服务无法请求时也需要触发熔断功能。

所以在搭建路由网关服务的时候，一般还要配置失败的回调，注意的是对于用户来说，客户端向网关发起的请求是成功的，不应该将API服务的404，500等问题抛给客户端，因为网关和API服务集群对于客户端来说是黑盒。下面以Zuul网关的失败回调为例。



## Zulu路由失败回调

这里以路由`hello-spring-cloud-netflix-consumer-feign`失败为例，配置回调：

``` java
package com.example.hello.spring.cloud.netflix.zuul.fallback;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.cloud.netflix.zuul.filters.route.FallbackProvider;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

@Component
public class FeignConsumerFallbackProvider implements FallbackProvider {
    @Override
    public String getRoute() {
        // 路由失败的服务名称。如果需要所有调用都支持回退，则 return "*" 或 return null
        return "hello-spring-cloud-netflix-consumer-feign";
    }

    @Override
    public ClientHttpResponse fallbackResponse(String route, Throwable cause) {
        return new ClientHttpResponse() {
            @Override
            public HttpStatus getStatusCode() throws IOException {
                return HttpStatus.OK;
            }

            @Override
            public int getRawStatusCode() throws IOException {
                return HttpStatus.OK.value();
            }

            @Override
            public String getStatusText() throws IOException {
                return HttpStatus.OK.getReasonPhrase();
            }

            @Override
            public void close() {

            }

            @Override
            public InputStream getBody() throws IOException {
                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> map = new HashMap<>();
                map.put("status", 200);
                map.put("message", "哦豁，网络出了个小差～");
                return new ByteArrayInputStream(objectMapper.writeValueAsString(map).getBytes("UTF-8"));
            }

            @Override
            public HttpHeaders getHeaders() {
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_JSON);
                return headers;
            }
        };
    }
}
```



## 测试路由失败回调

关闭`hello-spring-cloud-netflix-consumer-feign`服务，浏览器访问：http://localhost:8181/api/consumer/feign/hi?msg=HelloZuul，输出如下：

``` json
{
  "message": "哦豁，网络出了个小差～",
  "status": 200
}
```

