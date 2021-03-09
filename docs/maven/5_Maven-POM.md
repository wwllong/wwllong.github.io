# Maven POM

Maven是个工具，与我们项目的开发、程序是隔离的，要使得他们进行关联，那么就要一个**桥梁**，对于Maven来说就是**POM**文件。

## 什么是POM?

POM代表**项目对象模型。它是Maven中工作的基本单位，这是一个XML文件。它始终保存该项目的基本目录中**。

POM包含的项目是使用Maven来构建的，它用来含各种配置信息。

POM也包含了目标和插件。在执行任务或目标时，Maven会使用当前目录中的POM。它读取POM得到所需的配置启息，然后执行。以下是POM文件中可以使用的配置：
* project dependencies
* plugins
* goals
* build profiles
* project version
* developers
* mailing list

创建一个POM之前，**应该要先决定项目组(`groupId`)，它的名字(`artifactId`)和版本(`version`)，因为这些属性在项目仓库是唯一标识的**。


## POM例子

``` pom
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.wenwl.sms</groupId>
    <artifactId>sms_mservice</artifactId>
    <version>1.0</version>
</project>
```
**每个项目中只有一个POM文件。**

* pom.xml中必须要填写三个字段：groupId、artifactId、version
* 在库中，项目符号是 **groupId:artifactId:version**
* pom.xml的根元素是 &lt;project&gt; ，有三个主要的子节点。


|节点|描述|
|:----|:----|
|groupId|项目组编号，通常来说是唯一的。常见的是用域名反转的方式命名，目的是为了全球唯一。|
|artifactId|项目ID，通常是项目的名称。除了groupId外，artifactId也定义了artifact在存储库中的位置。|
|version|项目的版本。与groupId一起使用，artifact在库中用于将版本彼此分离。通常采用**语义化版本规范**|

::: tip 语义化版本规范
version通常语义化版本规范来命名。通过`.`分隔开数字，每一段数字代表不同的含义，通常来说分为3段:
1. 第一段代表整个项目的架构改变;
2. 第二段代表增加或减少了功能;
3. 第三段代表修复了bug。  

例如 1.0.0 版本的软件，假如修复了几个bug，可以更改版本号为1.0.10；如果是修复了在一段时间后，业务或需求上砍掉了部分的功能或者添加了功能，则可能更改版本号为1.2.0；如果是在整个软件的架构或者大改的情况下，通常会改变第一个数字，改版为2.0.0等。以上只是常见的的一种语义化版本规范命名，不排除有以十进一的方式来命名。
:::