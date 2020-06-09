# Apache HttpClient 简介

>HttpClient 是 `Apache Jakarta Common` 下的子项目，用来提供高效的、最新的、功能丰富的支持 `HTTP` 协议的`客户端编程工具包`，并且它支持 HTTP 协议最新的版本和建议。HttpClient 已经应用在很多的项目中，比如 Apache Jakarta 上很著名的另外两个开源项目 Cactus 和 HTMLUnit 都使用了 HttpClient。

HttpClient 相比传统 JDK 自带的 `URLConnection`，增加了易用性和灵活性，它不仅使客户端发送 HTTP 请求变得容易，而且也方便了开发人员测试接口（基于 HTTP 协议的），即提高了开发的效率，也提高了代码的健壮性。因此熟练掌握 HttpClient 是很重要的必修内容，掌握 HttpClient 后，相信对于 HTTP 协议的了解会更加深入。可以方便得解决模块间的通信问题。

## Apache HttpClient 特性

* 基于标准、纯净的 Java 语言。实现了 HTTP 1.0 和 HTTP 1.1
* 以可扩展的面向对象的结构实现了 HTTP 全部的方法（GET, POST, PUT, DELETE, HEAD, OPTIONS, and TRACE）。
* 支持 HTTPS 协议。
* 通过 HTTP 代理建立透明的连接。
* 利用 CONNECT 方法通过 HTTP 代理建立隧道的 HTTPS 连接。
* Basic, Digest, NTLMv1, NTLMv2, NTLM2 Session, SNPNEGO/Kerberos 认证方案。
* 插件式的自定义认证方案。
* 便携可靠的套接字工厂使它更容易的使用第三方解决方案。
* 连接管理器支持多线程应用。支持设置最大连接数，同时支持设置每个主机的最大连接数，发现并关闭过期的连接。
* 自动处理 Set-Cookie 中的 Cookie。
* 插件式的自定义 Cookie 策略。
* Request 的输出流可以避免流中内容直接缓冲到 Socket 服务器。
* Response 的输入流可以有效的从 Socket 服务器直接读取相应内容。
* 在 HTTP 1.0 和 HTTP 1.1 中利用 KeepAlive 保持持久连接。
* 直接获取服务器发送的 response code 和 headers。
* 设置连接超时的能力。
* 实验性的支持 HTTP 1.1 response caching。
* 源代码基于 Apache License 可免费获取。

## Apache HttpClient 使用流程

使用 HttpClient 发送请求、接收响应很简单，一般需要如下几步即可。

* 创建 `HttpClient` 对象。
* 创建请求方法的实例，并指定请求 `URL`。如果需要发送 `GET` 请求，创建 `HttpGet` 对象；如果需要发送 `POST` 请求，创建 `HttpPost` 对象。
* 如果需要发送请求参数，可调用 HttpGet、HttpPost 共同的 `setParams(HttpParams params)` 方法来添加请求参数；对于 HttpPost 对象而言，也可调用 `setEntity(HttpEntity entity)` 方法来设置请求参数。
* 调用 HttpClient 对象的 `execute(HttpUriRequest request)` 发送请求，该方法返回一个 HttpResponse。
* 调用 HttpResponse 的 `getAllHeaders()`、`getHeaders(String name)` 等方法可获取服务器的响应头；调用 HttpResponse 的 `getEntity()` 方法可获取 HttpEntity 对象，该对象包装了服务器的响应内容。程序可通过该对象获取服务器的响应内容。
* 释放连接。无论执行方法是否成功，都必须释放连接

## Apache HttpClient 使用实例

### POM

pom.xml 配置如下：
``` xml
<!-- Apache Http Begin -->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.5</version>
</dependency>
<!--fluent-hc是HttpClient基于流式API封装的客户端-->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>fluent-hc</artifactId>
    <version>4.5.5</version>
</dependency>
<!--httpClient在使用 MultipartEntity 上传图片或文件的需要的依赖-->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpmime</artifactId>
    <version>4.5.5</version>
</dependency>
<!-- Apache Http End -->
```

## 创建 HttpGet 请求

### 案例代码如下：
``` java
package com.wenwl.demo.httpclient;

import java.io.IOException;

import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.fluent.Content;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class AppGet 
{
    public static void main( String[] args )
    {
    	get();
    	getByFluent();
    }
    
    private static void get() {
        // 创建 HttpClient 客户端
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建 HttpGet 请求
        HttpGet httpGet = new HttpGet("http://localhost:8080/content/page?draw=1&start=0&length=10");
        // 设置长连接
        httpGet.setHeader("Connection", "keep-alive");
        // 设置代理（模拟浏览器版本）
        httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36");
        // 设置 Cookie
        httpGet.setHeader("Cookie", "_ga=GA1.1.1694921057.1552797597; Idea-7db99f62=41b8a198-f04d-422c-b9fe-2d67165c0d9d; userInfo=admin@163.com:admin123; JSESSIONID=BFE900B97E8CEF91FD2DCB39A08E5D3A");

        CloseableHttpResponse httpResponse = null;
        try {
            // 请求并获得响应结果
            httpResponse = httpClient.execute(httpGet);
            HttpEntity httpEntity = httpResponse.getEntity();
            // 输出请求结果
            System.out.println(EntityUtils.toString(httpEntity));
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 无论如何必须关闭连接
        finally {
            if (httpResponse != null) {
                try {
                    httpResponse.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            if (httpClient != null) {
                try {
                    httpClient.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    private static void getByFluent() {
    	try {
			Content returnContent = Request.Get("http://localhost:8080/content/page?draw=1&start=0&length=10")
				.addHeader("Cookie", "_ga=GA1.1.1694921057.1552797597; Idea-7db99f62=41b8a198-f04d-422c-b9fe-2d67165c0d9d; userInfo=admin@163.com:admin123; JSESSIONID=BFE900B97E8CEF91FD2DCB39A08E5D3A")
				.execute().returnContent();
			// 输出请求结果
            System.out.println(returnContent);
		}  catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

控制台输出结果,经过JSON美化,两个函数处理结果一致：
```
{
    "draw": 1,
    "recordsTotal": 5,
    "recordsFiltered": 5,
    "data": [
        {
            "id": 28,
            "created": 1437979317000,
            "updated": 1583670390000,
            "title": "标题1",
            "subTitle": "标题1",
            "titleDesc": "标题1",
            "url": "http://www.jd.com",
            "pic": "http://localhost:9000/images/2015/07/27/1437979301511057.jpg",
            "pic2": "",
            "content": "<p>标题1&nbsp;&nbsp;<br></p><p>1</p>",
            "tbContentCategory": {
                "id": 89,
                "created": null,
                "updated": null,
                "parent": null,
                "isParent": null,
                "name": "大广告",
                "status": null,
                "sortOrder": null
            }
        }
    ]
}
```

## 创建 HttpPost 请求

### 案例代码如下：
``` java
package com.wenwl.demo.httpclient;

import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.fluent.Content;
import org.apache.http.client.fluent.Form;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

public class AppPost {
    public static void main(String[] args) {
        post();
        postByFluent();
    }

	private static void post() {
        // 创建 HttpClient 客户端
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建 HttpPost 请求
        HttpPost httpPost = new HttpPost("http://localhost:8080/content/page");
        // 设置长连接
        httpPost.setHeader("Connection", "keep-alive");
        // 设置代理（模拟浏览器版本）
        httpPost.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36");
        // 设置 Cookie
        httpPost.setHeader("Cookie", "_ga=GA1.1.1694921057.1552797597; Idea-7db99f62=41b8a198-f04d-422c-b9fe-2d67165c0d9d; userInfo=admin@163.com:admin123; JSESSIONID=BFE900B97E8CEF91FD2DCB39A08E5D3A");

        // 创建 HttpPost 参数
        List<BasicNameValuePair> params = new ArrayList<BasicNameValuePair>();
        params.add(new BasicNameValuePair("draw", "1"));
        params.add(new BasicNameValuePair("start", "0"));
        params.add(new BasicNameValuePair("length", "10"));

        CloseableHttpResponse httpResponse = null;
        try {
            // 设置 HttpPost 参数
            httpPost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));
            httpResponse = httpClient.execute(httpPost);
            HttpEntity httpEntity = httpResponse.getEntity();
            // 输出请求结果
            System.out.println(EntityUtils.toString(httpEntity));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 无论如何必须关闭连接
        finally {
            try {
                if (httpResponse != null) {
                    httpResponse.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

            try {
                if (httpClient != null) {
                    httpClient.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
	
	private static void postByFluent() {
		try {
			Content returnContent = Request.Post("http://localhost:8080/content/page")
				.addHeader("Cookie", "_ga=GA1.1.1694921057.1552797597; Idea-7db99f62=41b8a198-f04d-422c-b9fe-2d67165c0d9d; userInfo=admin@163.com:admin123; JSESSIONID=BFE900B97E8CEF91FD2DCB39A08E5D3A")
				.bodyForm(Form.form().add("draw", "1").add("start", "0").add("length", "10").build())
				.execute().returnContent();
			// 输出请求结果
            System.out.println(returnContent);
		}  catch (IOException e) {
            e.printStackTrace();
        }
	}
	
}
```

### 控制台输出结果：

控制台输出结果同Get请求。

PS:
* HTMLUnit为HTML解析器，用于爬虫。Jsoup也是Java爬虫工程师常用的爬虫工具,对比Python开箱即用的爬虫，显得工作量稍大，但是效率方面确比Python高。

参考：
* https://www.cnblogs.com/pony1223/p/7471464.html
* https://blog.csdn.net/tengxing007/article/details/99826391
* https://blog.csdn.net/lan_xuewei/article/details/82972712