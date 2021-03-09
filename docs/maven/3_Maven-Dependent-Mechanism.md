# Maven 依赖机制

**在Maven依赖机制的帮助下自动下载所有必须的依赖库，并保持版本升级**。以Log4j作为项目的日志，引入jar包为例：

## 传统方式

1. 访问http://logging.apache.org/log4j/
2. 下载Log4j的jar库
3. 复制jar到项目类路径
4. 手动将其包含到项目的依赖
5. 所有的管理需要一切由自己做

如果有Log4j版本升级，就需要重复上述步骤一次

## Maven的方式

1. 需要知道log4j的Mave坐标，如
``` maven
<dependencies>
    <dependency>
        <groupId>log4j</groupId>
        <artifactId>log4j</artifactId>
        <version>1.2.17</version>
    </dependency>
</dependencies>
```
2. 当Maven编译或构建，log4j的jar会自动下载，并把它放在Maven本地仓库
3. 有Log4j版本升级，只需要更新version，之后一切都由Maven管理

## Maven依赖搜索

当建立了一个Maven的项目，pox.xml文件将会被解析，如果看到log4j的Maven坐标，Maven会按照此顺序搜索log4j：

1. 在Maven本地仓库搜索log4j
2. 在Maven中央仓库搜索log4j
3. 在Maven远程仓库搜索log4j（需要在pom.xml）中配置

Maven依赖库管理是一个非常好的工具，为我们节省了大量的工作。

