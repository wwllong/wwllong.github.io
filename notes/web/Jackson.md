# Jackson 简介

Jackson 是一个简单基于 Java 应用库，`Jackson 可以轻松的将 Java 对象转换成 json 对象和 xml 文档，同样也可以将 json、xml 转换成 Java 对象`。Jackson 所依赖的 jar 包较少，简单易用并且性能也要相对高些，并且 Jackson 社区相对比较活跃，更新速度也比较快。

## Jackson 特点

* 容易使用 - jackson API 提供了一个高层次外观，以简化常用的用例。
* 无需创建映射 - API提供了默认的映射大部分对象序列化。
* 性能高 - 快速，低内存占用，适合大型对象图表或系统。
* 干净的 JSON - jackson 创建一个干净和紧凑的 JSON 结果，这是让人很容易阅读。
* 不依赖 - 库不需要任何其他的库，除了 JDK。
* 开源代码 - jackson 是开源的，可以免费使用。

## Jackson 注解

Jackson 类库包含了很多注解，可以让我们快速建立 Java 类与 JSON 之间的关系。

* `@JsonProperty `注解指定一个属性用于 JSON 映射，默认情况下映射的 JSON 属性与注解的属性名称相同，不过可以使用该注解的 value 值修改 JSON 属性名，如果有必要的话,该注解可以使用 index 属性指定生成 JSON 属性的顺序。

* `@JsonIgnore `注解用于排除某个属性，这样该属性就不会被 Jackson 序列化和反序列化。

* `@JsonIgnoreProperties` 注解是`类注解`。在序列化为 JSON 的时候，@JsonIgnoreProperties({"prop1", "prop2"}) 会忽略 pro1 和 pro2 两个属性。在从 JSON 反序列化为 Java 类的时候，@JsonIgnoreProperties(ignoreUnknown=true) 会忽略所有没有 Getter 和 Setter 的属性。`该注解在 Java 类和 JSON 不完全匹配的时候很有用。`

* `@JsonIgnoreType` 也是类注解，会排除所有指定类型的属性。

* `@JsonPropertyOrder` 和 `@JsonProperty` 的 index 属性类似，指定属性序列化时的顺序。

* `@JsonRootName` 注解用于指定 JSON 根属性的名称。

## POM
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
    <version>2.9.5</version>
</dependency>
<!-- Json End -->
```

## Jackson API

Jackson对象、集合的序列化和反序列化的操作主要封装在 `ObjectMapper`这个类中，

### 对象的序列化与反序列化

<escape>
<table width="100%" border="1" cellpadding="0"  cellspacing="0" style="table-layout:automatic">
<tr><th>对象<th>描述<th>方法</tr>
<tr>
    <td rowspan="2">ObjectMapper mapper = new ObjectMapper();
    <td>反序列化 JSON 到对象
    <td>mapper.readValue(jsonString, Object.class)
</tr>
<tr>
    <td>序列化对象到 JSON
    <td>mapper.writeValueAsString(object)
</tr>
</table>
</escape>

### 集合的序列化与反序列化

<escape>
<table width="100%" border="1" cellpadding="0"  cellspacing="0" style="table-layout:automatic">
<tr><th>对象<th colspan="2">描述<th>方法</tr>
<tr>
    <td rowspan="4">ObjectMapper mapper = new ObjectMapper();
    <td rowspan="3">反序列化 JSON 到 集合
    <td>反序列化 JSON 到树
    <td>JsonNode jsonNode = mapper.readTree(jsonString)
</tr>
<tr>
    <td>从树中读取 data 节点
    <td>JsonNode jsonData = jsonNode.findPath("data")
</tr>
<tr>
    <td>反序列化 JSON 到 集合
    <td>JavaType javaType = mapper.getTypeFactory().constructParametricType(ArrayList.class, Object.class);
    <br>
    List&lt;Object&gt; objectList = mapper.readValue(jsonData.toString(), javaType);
</tr>
<tr>
    <td colspan="2">序列化 集合 到 JSON
    <td>mapper.writeValueAsString(objectList);
</tr>
</table>
</escape>



