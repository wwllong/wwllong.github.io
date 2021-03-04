# SpringMVC的一些注解

## @ModelAttribute

`@ModelAttribute` 具有如下三个作用：

* 绑定请求参数到命令对象：放在功能处理方法的入参上时，用于将多个请求参数绑定到一个命令对象，从而简化绑定流程，而且自动暴露为模型数据用于视图页面展示时使用

* 暴露 @RequestMapping 方法返回值为模型数据：放在功能处理方法的返回值上时，是暴露功能处理方法的返回值为模型数据，用于视图页面展示时使用

* 暴露表单引用对象为模型数据：放在处理器的一般方法（非功能处理方法）上时，是为表单准备要展示的表单引用对象，如注册时需要选择的所在城市等，而且在执行功能处理方法（@RequestMapping 注解的方法）之前，自动添加到模型对象中，用于视图页面展示时使用

以下为暴露表单引用对象为模型数据的例子，[更多见](https://www.cnblogs.com/liaochong/p/spring_modelattribute.html)：

``` java
@ModelAttribute
public User get(@RequestParam(required = false) String id) {
    User entity = null;
    if (StringUtils.isNotBlank(id)) {
        entity = userService.get(id);
    }
    if (entity == null) {
        entity = new User();
    }
    return entity;
}
```

## @ResponseBody

`@ResponseBody` 注解表示该方法的返回的结果直接写入 HTTP 响应正文（ResponseBody）中，一般在异步获取数据时使用，通常是在使用 `@RequestMapping` 后，返回值通常解析为跳转路径，加上 `@ResponseBody` 后返回结果不会被解析为跳转路径，而是直接写入HTTP 响应正文中。

所以该注解用于将 `Controller` 的方法返回的对象，通过适当的 `HttpMessageConverter` 转换为指定格式后，写入到 `Response` 对象的 `body` 数据区。

也就是说当返回的数据不是 html 标签的页面，而是其他某种格式的数据时（如json、xml等）使用。

例如，如果需要返回自定义对象为 JSON 数据类型，通常需要增加 `jackson` 依赖，`pom.xml` 配置文件如下：

``` xml
<!-- Json Begin -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-core</artifactId>
    <version>2.9.5</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.9.5</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-annotations</artifactId>
    <version>${jackson.version}</version>
</dependency>
<!-- Json End -->
```
