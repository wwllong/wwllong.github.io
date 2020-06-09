# hello-spring 

## Maven-pom.xml对象

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>www.wenwl</groupId>
    <artifactId>hello-spring</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>4.3.24.RELEASE</version>
        </dependency>
    </dependencies>
</project>
```

## UserService例子

根据自己的实际工程创建包，编写用户服务接口以及实现类：

``` java

public interface UserService {

    void sayHi();

}

public class UserServiceImpl implements UserService {

    public void sayHi() {

        System.out.println("hello-spring!");

    }

}

```

## Spring配置文件

在resource文件夹下，创建spring-context.xml文件，配置bean：

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="userService" class="www.wenwl.hello.spring.service.impl.UserServiceImpl"/>
    
</beans>
```

## Test

创建一个测试类，对Spring的IoC进行测试，输出hello-spring!即可。注意：通常开发中使用Junit进行单元测试，此处偷懒写在了main方法中。

``` java
public class TestSpring {

    public static void main(String[] args) {

        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring-context.xml");
        UserService userService = (UserService) applicationContext.getBean("userService");
        userService.sayHi();

    }

}
```
