# Spring Boot 整合 tk.mybatis & PageHelper



## 概述

[tk.mybatis](http://www.mybatis.tk/) 是基于 Mybatis 框架开发的一个工具，内部实现了对单表的基本数据操作，只需要简单继承 tk.mybatis 提供的接口，就能够实现无需编写任何 sql 即能完成单表操作。附：[GitHub地址](https://github.com/godlike110/tk-mybatis)



## Spring Boot 整合 tk.mybatis

### 引入依赖

在 `pom.xml` 文件中引入 `mapper-spring-boot-starter` 依赖，该依赖会自动引入 MyBaits 相关依赖

```xml
<!-- tk.mybatis -->
<dependency>
    <groupId>tk.mybatis</groupId>
    <artifactId>mapper-spring-boot-starter</artifactId>
    <version>2.0.4</version>
</dependency>
```

### 配置 `application.yml`

通过配置文件或启动类中配置 MyBatis

```yaml
mybatis:
    # 实体类的存放路径
    type-aliases-package: com.example.hello.spring.boot.domain
    mapper-locations: classpath:mapper/*.xml
```

``` java
@SpringBootApplication
@MapperScan(basePackages = "com.example.hello.spring.boot.domain")
public class HelloSpringBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloSpringBootApplication.class, args);
    }

}
```



## 创建一个通用的父级接口

通常情况下单表操作只需要继承 tk.mybatis 下的 Mapper 接口即可使用。而这里自定义一个通用的父级接口，作用是让 DAO 层的接口继承该接口，除了能达到使用 tk.mybatis 的目的外，还可以在这个接口封装一些自己的抽象方法。

```java
package tk.mybatis.mapper;

import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

/**
 * 自己的 Mapper
 * 特别注意，该接口不能被扫描到，否则会出错
 */
public interface MyMapper<T> extends Mapper<T>, MySqlMapper<T> {
}

```

## Spring Boot 整合 PageHelper

[PageHelper](https://pagehelper.github.io/) 是 Mybatis 的分页插件，支持多数据库、多数据源。可以简化数据库的分页查询操作，整合过程也极其简单，只需引入依赖即可。	

``` xml
<!-- PageHelper -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.2.5</version>
</dependency>
```

## 测试用例参考

``` java
package com.example.hello.spring.boot;

import com.example.hello.spring.boot.domain.User;
import com.example.hello.spring.boot.mapper.UserMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = HelloSpringBootApplication.class)
@Transactional
@Rollback
public class MyBatisTests {

    /**
     * 注入数据查询接口
     */
    @Autowired
    private UserMapper userMapper;

    /**
     * 测试插入数据
     */
    @Test
    public void testInsert() {
        User User = new User();
        User.setUsername("wenwl");
        User.setPassword("123456");
        User.setPhone("15888888888");
        User.setEmail("wwllong18@163.com");
        User.setCreated(new Date());
        User.setUpdated(new Date());

        userMapper.insert(User);
    }

    /**
     * 测试删除数据
     */
    @Test
    public void testDelete() {
        // 构造条件
        Example example = new Example(User.class);
        example.createCriteria().andEqualTo("username", "wenwl");

        userMapper.deleteByExample(example);
    }

    /**
     * 测试修改数据
     */
    @Test
    public void testUpdate() {
        // 构造条件
        Example example = new Example(User.class);
        example.createCriteria().andEqualTo("username", "wenwl");

        // 构造一条测试数据
        User user = new User();
        user.setUsername("wenwlNew");
        user.setCreated(new Date());
        user.setUpdated(new Date());

        // 修改数据
        userMapper.updateByExample(user, example);
    }

    /**
     * 测试查询集合
     */
    @Test
    public void testSelect() {
        List<User> users = userMapper.selectAll();
        for (User user : users) {
            System.out.println(user.getUsername());
        }
    }

    /**
     * 测试分页查询
     */
    @Test
    public void testPage() {
        // PageHelper 使用非常简单，只需要设置页码和每页显示笔数即可
        PageHelper.startPage(0, 5);

        // 设置分页查询条件
        Example example = new Example(User.class);
        PageInfo<User> pageInfo = new PageInfo<>(userMapper.selectByExample(example));

        // 获取查询结果
        List<User> Users = pageInfo.getList();
        for (User User : Users) {
            System.out.println(User.getUsername());
        }
    }
}
```



## 参考

[【Mybatis】TKMybatis 介绍和使用](https://blog.csdn.net/qq_34416331/article/details/106322596)

