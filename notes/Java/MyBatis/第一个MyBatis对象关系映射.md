# 第一个 MyBatis 对象关系映射

## POM

编写完相关代码后，我们可以使用单元测试查看 MyBatis 的执行效果，需要增加单元测试相关依赖，配置如下：

``` xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>4.3.25.RELEASE</version>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
</dependency>
```

## 定义实体类


以 tb_user 表（导入sql略）为例，实体类代码如下：

``` java
package com.wenwl.my.shop.domain.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TbUser implements Serializable {

    private Long id;
    private String username;
    private String password;
    private String phone;
    private String email;
    private Date created;
    private Date updated;

}

```

## 定义数据访问接口

注意：Spring 集成 MyBatis 后，不需要手动实现 DAO 层的接口，所有的 SQL 执行语句都写在对应的关系映射配置文件中。

``` java
package com.wenwl.my.shop.web.admin.dao;

import com.wenwl.my.shop.domain.entity.TbUser;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TbUserDao {

    /**
     * 查询全部用户信息
     * @return
     */
    public List<TbUser> selectAll();

}

```

## 定义业务逻辑接口

``` java
package com.wenwl.my.shop.web.admin.service;

import com.wenwl.my.shop.domain.entity.TbUser;

import java.util.List;

public interface TbUserService {

    /**
     * 查询全部用户信息
     * @return
     */
    public List<TbUser> selectAll();

}

```

## 实现业务逻辑接口

``` java
package com.wenwl.my.shop.web.admin.service.impl;

import com.wenwl.my.shop.domain.entity.TbUser;
import com.wenwl.my.shop.web.admin.dao.TbUserDao;
import com.wenwl.my.shop.web.admin.service.TbUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TbUserServiceImpl implements TbUserService {

    @Autowired
    private TbUserDao tbUserDao;

    /**
     * 查询全部用户信息
     *
     * @return
     */
    @Override
    public List<TbUser> selectAll() {
        return tbUserDao.selectAll();
    }

}

```

## 定义映射文件

映射文件，简称为 Mapper，主要完成 DAO 层中 SQL 语句的映射。映射文件名随意，一般放在 src/resources/mapper 文件夹中。这里映射文件名称定为 TbUserMapper.xml。

``` xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.wenwl.my.shop.web.admin.dao.TbUserDao">
    <select id="selectAll" resultType="TbUser">
        SELECT
          a.id,
          a.username,
          a.password,
          a.phone,
          a.email,
          a.created,
          a.updated
        FROM
          tb_user AS a
    </select>
</mapper>
```

## 创建单元测试

所有工作准备就绪，我们就可以测试 MyBatis 是否能够正常执行了。创建一个单元测试类，代码如下：
``` java
package com.wenwl.my.shop.web.admin.service.test;

import com.wenwl.my.shop.domain.entity.TbUser;
import com.wenwl.my.shop.web.admin.service.TbUserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-context.xml", "classpath:spring-context-druid.xml", "classpath:spring-context-mybatis.xml"})
public class TbUserServiceTest {

    @Autowired
    private TbUserService tbUserService;

    @Test
    public void testSelectAll(){
        List<TbUser> tbUsers = tbUserService.selectAll();
        tbUsers.forEach(System.out::println);
    }

}
```

成功执行测试后，控制台输出如下：
``` 
TbUser(id=7, username=zhangsan, password=e10adc3949ba59abbe56e057f20f883e, phone=13488888888, email=aa@a, created=Mon Apr 06 17:03:55 CST 2015, updated=Mon Apr 06 17:03:55 CST 2015, rememberMe=null)
TbUser(id=9, username=zhangsan1, password=e10adc3949ba59abbe56e057f20f883e, phone=13333333333, email=null, created=Tue Apr 07 10:32:08 CST 2015, updated=Tue Apr 07 10:32:08 CST 2015, rememberMe=null)
TbUser(id=10, username=zhangsan2, password=195d91be1e3ba6f1c857d46f24c5a454, phone=13333333334, email=null, created=Tue Apr 07 10:33:37 CST 2015, updated=Tue Apr 07 10:33:37 CST 2015, rememberMe=null)
TbUser(id=11, username=zhangsan3, password=195d91be1e3ba6f1c857d46f24c5a454, phone=13333333335, email=null, created=Tue Apr 07 10:35:57 CST 2015, updated=Tue Apr 07 10:35:57 CST 2015, rememberMe=null)
TbUser(id=12, username=zhangsan5, password=195d91be1e3ba6f1c857d46f24c5a454, phone=13333333336, email=null, created=Tue Apr 07 10:46:19 CST 2015, updated=Tue Apr 07 10:46:19 CST 2015, rememberMe=null)
TbUser(id=14, username=lisi, password=202cb962ac59075b964b07152d234b70, phone=12344444444, email=null, created=Fri Jun 19 10:02:11 CST 2015, updated=Fri Jun 19 10:02:11 CST 2015, rememberMe=null)
TbUser(id=16, username=lisi1, password=202cb962ac59075b964b07152d234b70, phone=12344444442, email=null, created=Fri Jun 19 10:24:27 CST 2015, updated=Fri Jun 19 10:24:27 CST 2015, rememberMe=null)
TbUser(id=17, username=jd_gogogo, password=745404feaba9fb037e01b4a91c6ddbeb, phone=18800888888, email=null, created=Fri Jun 19 10:25:46 CST 2015, updated=Fri Jun 19 10:25:46 CST 2015, rememberMe=null)
TbUser(id=18, username=tidy, password=123, phone=13600112243, email=null, created=Thu Jul 30 17:26:25 CST 2015, updated=Thu Jul 30 17:26:25 CST 2015, rememberMe=null)
TbUser(id=22, username=tidy1, password=202cb962ac59075b964b07152d234b70, phone=13600112244, email=null, created=Thu Jul 30 17:48:33 CST 2015, updated=Thu Jul 30 17:48:33 CST 2015, rememberMe=null)
TbUser(id=23, username=niuniu, password=202cb962ac59075b964b07152d234b70, phone=15866777744, email=, created=Sat Aug 01 11:48:42 CST 2015, updated=Sat Aug 01 11:48:42 CST 2015, rememberMe=null)
TbUser(id=32, username=niuniu2, password=202cb962ac59075b964b07152d234b70, phone=14322334455, email=null, created=Sat Aug 01 12:04:50 CST 2015, updated=Sat Aug 01 12:04:50 CST 2015, rememberMe=null)
TbUser(id=33, username=niuniu3, password=202cb962ac59075b964b07152d234b70, phone=14322334456, email=null, created=Sat Aug 01 12:08:26 CST 2015, updated=Sat Aug 01 12:08:26 CST 2015, rememberMe=null)
TbUser(id=34, username=niuniu4, password=202cb962ac59075b964b07152d234b70, phone=15877680983, email=null, created=Sat Aug 01 12:13:41 CST 2015, updated=Sat Aug 01 12:13:41 CST 2015, rememberMe=null)
TbUser(id=35, username=test01, password=202cb962ac59075b964b07152d234b70, phone=15600876321, email=null, created=Sat Aug 01 12:21:53 CST 2015, updated=Sat Aug 01 12:21:53 CST 2015, rememberMe=null)
TbUser(id=36, username=test02, password=202cb962ac59075b964b07152d234b70, phone=1370348890, email=null, created=Sat Aug 01 12:28:39 CST 2015, updated=Sat Aug 01 12:28:39 CST 2015, rememberMe=null)
TbUser(id=37, username=wenwl, password=202cb962ac59075b964b07152d234b70, phone=1234567890, email=null, created=Fri Jan 17 16:48:57 CST 2020, updated=Fri Jan 17 16:49:00 CST 2020, rememberMe=null)

```