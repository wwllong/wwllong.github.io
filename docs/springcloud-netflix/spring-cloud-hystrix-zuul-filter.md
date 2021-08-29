# 路由网关服务过滤



## 概述

Zuul 主要包含了对请求的**路由**和**过滤**两个最主要的功能。这里简单演示一下它的服务过滤功能，以我们常用的安全验证方面为例。



## 创建服务过滤器

创建Zuul服务过滤器只需要继承 `ZuulFilter` 类并在类上增加 `@Component` 注解就可以使用服务过滤功能了。这里以登录凭证（token）校验为例，创建`LoginFilter`：

``` java
package com.example.hello.spring.cloud.netflix.zuul.filter;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class LoginFilter extends ZuulFilter {

    private static final Logger logger = LoggerFactory.getLogger(LoginFilter.class);

    /**
     * 配置过滤类型
     * 1. pre：路由前
     * 2. routing：路由时
     * 3. post：路由后
     * 4. error：发送错误调用
     * @return 过滤类型字符串表示
     */
    @Override
    public String filterType() {
        return "pre";
    }

    /**
     * 配置过滤的顺序
     * @return 数值越小优先级越高
     */
    @Override
    public int filterOrder() {
        return 0;
    }

    /**
     * 配置是否需要过滤
     * @return true or false
     */
    @Override
    public boolean shouldFilter() {
        return true;
    }

    /**
     * 过滤器的具体业务代码
     * @return
     * @throws ZuulException
     */
    @Override
    public Object run() throws ZuulException {
        RequestContext context = RequestContext.getCurrentContext();
        HttpServletRequest request = context.getRequest();
        logger.info("{} >>> {}", request.getMethod(), request.getRequestURL().toString());
        String token = request.getParameter("token");
        if (token == null) {
            logger.warn("Token is empty");
            context.setSendZuulResponse(false);
            context.setResponseStatusCode(401);
            try {
                HttpServletResponse response = context.getResponse();
                response.setContentType(MediaType.TEXT_HTML_VALUE+";charset=UTF-8");
                response.getWriter().write("Token is empty!");
            } catch (IOException e) {
                e.getStackTrace();
            }
        }
        return null;
    }
}
```

继承 `ZuulFilter` 类，需要实现的几个方法说明：

1. filterType()：返回一个字符串代表过滤器的类型，在 Zuul 中定义了四种不同生命周期的过滤器类型。

   | 返回字符串 | 过滤器类型   |
   | ---------- | ------------ |
   | pre        | 路由前       |
   | routing    | 路由时       |
   | post       | 路由后       |
   | error      | 发送错误调用 |

2. filterOrder()：过滤的顺序，数值越小优先级越高。

3. shouldFilter()：是否需要过滤， 返回`true` 过滤，否则返回`false`不过滤。

4. run()：过滤器的具体业务代码。



## 测试过滤器

1. 打开浏览器访问：http://localhost:8181/api/consumer/feign/hi?msg=HelloZuul，得到结果：

   ``` html
   Token is empty!
   ```

   

2. 打开浏览器访问：http://localhost:8181/api/consumer/feign/hi?msg=HelloZuul&token=access-token，得到结果：

   ``` html
   Hi，your message is : HelloZuul i am from port : 8762
   ```

   







## 