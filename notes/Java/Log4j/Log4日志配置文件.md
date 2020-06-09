# Log4j日志配置文件

## Slf4j简介

Slf4（Simple Loging Facade For Java）,又被简称为沙拉风4j，是一个为Java程序提供日志输出的统一接口，并不是一个具体的日志实现方案，就比如JDBC一样，只是一种规则而已。所以单独的Slf4j是不能工作的，必须搭配其他具体的日志实现方案，比如`apache`的`org.apache.log4j.Logger`、JDK自带的`java.util.logging.Logger`和`log4j`等。

## POM

根据上述描述，在使用Log4j之前需要引入的依赖有：

``` xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.25</version>
</dependency>
```

## Java代码

``` Java
private static final Logger logger = LoggerFactory.getLogger(Xxxx.class);

logger.info("info 级别日志");
logger.debug("debug 级别日志");
logger.warn("warn 级别日志");
logger.error("error 级别日志");
```

日志输出还可以使用 `{}`占位符。

``` Java
    String message1 = "信息1";
    String message2 = "信息2";
    logger.info("info 级别日志:{} {}",message1,message2);

    System.out.println(String.format("message is %s %s",message1,message2));
    System.out.println(message1.concat(message2));
```

## log4j.properties

``` properties
log4j.rootLogger=INFO, console, file

log4j.appender.console=org.apache.log4j.ConsoleAppender
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=%d %p [%c] - %m%n

log4j.appender.file=org.apache.log4j.DailyRollingFileAppender
log4j.appender.file.File=logs/log.log
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.A3.MaxFileSize=1024KB
log4j.appender.A3.MaxBackupIndex=10
log4j.appender.file.layout.ConversionPattern=%d %p [%c] - %m%n
```

日志配置相关说明：

* log4j.rootLogger：根日志，配置了日志级别为INFO，预定义了名称为console、file两种附加器
* log4j.appender.console：console附加器，采用匹配器布局模式
* log4j.appender.console.layout.ConversionPattern：console附加器，日志输出格式为：日期 日志级别[类名]-消息 换行符
* log4j.appender.file：file附加器，每天产生一个日志文件
log4j.appender.file.File：file附加器，日志文件输出位置
log4j.appender.file.layout：file附加器，采用匹配器布局模式
log4j.appender.A3.MaxFileSize：日志文件最大值
log4j.appender.A3.MaxBackupIndex：最多记录文件数
log4j.appender.file.layout.ConversionPattern：file附加器，日志输出格式为：日期 日志级别[类名]-消息 换行符