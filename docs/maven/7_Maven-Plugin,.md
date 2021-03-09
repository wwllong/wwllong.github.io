# Maven插件

**Maven是一个执行插件的框架，每一个任务实际上是由插件完成的**。Maven插件通常用于：
* 创建jar立件
* 创建war文件
* 编译代码文件
* 进行代码单元测试
* 创建项目文档
* 创建项目报告

一个插件通常提供了一组目标。可使用以下语法来执行：

``` mvn
mvn [plugin-name]:[goal-name]
```

例如，一个Java顶目可以使用Maven编译器插件来编译目标，通过运行以下命令编译运行：
``` mvn 
mvn compiler:compile
```

## 插件类型

Maven提供以下两种类型插件：

|类型|描述
|:---|:---
|构建插件|在生成过程中执行，并在pom．xml中的 元素进行配置
|报告插件|在网站生成期间可执行，在pom.xml中的 元素进行配置

以下是一些常见的插件列表：

|插件|描述
|:---|:---
|clean|清除编译后的文件，删除trager目录
|compiler|编译Java源文件
|surefile|运行JUnit单元测试，创建测试报告
|jar|从当前项目构建jar文件
|war|从当前项目构建war文件
|javadoc|产生用于该项目的javadoc
|antrun|从构建的任何阶段运行一组Ant任务