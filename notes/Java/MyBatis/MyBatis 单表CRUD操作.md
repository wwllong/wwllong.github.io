# MyBatis 单表 CRUD 操作

本章主要内容是带领大家学习 MyBatis 的单表 CRUD 的相关操作方法

## INSERT

继续以 tb_user 表为例，修改映射文件，增加如下配置：

``` xml
<insert id="insert">
    INSERT INTO tb_user (
      id,
      username,
      password,
      phone,
      email,
      created,
      updated
    )
    VALUES
      (
        #{id},
        #{username},
        #{password},
        #{phone},
        #{email},
        #{created},
        #{updated}
      )
</insert>
```

单元测试代码如下：

``` java
@Test
public void testInsert() {
    TbUser tbUser = new TbUser();
    tbUser.setEmail("admin@163.com");
    tbUser.setPassword("admin");
    tbUser.setPhone("15888888888");
    tbUser.setUsername("wenwl");
    tbUser.setCreated(new Date());
    tbUser.setUpdated(new Date());
    tbUserService.insert(tbUser);
}
```

## DELETE

继续以 tb_user 表为例，修改映射文件，增加如下配置：

``` xml
<delete id="delete">
    DELETE FROM tb_user WHERE id = #{id}
</delete>
```

单元测试代码如下：

``` java
@Test
public void testDelete(){

    TbUser tbUser = new TbUser();
    tbUser.setId(39L);
    tbUserService.delete(tbUser);

}
```

## 查询单个对象

继续以 tb_user 表为例，修改映射文件，增加如下配置：

``` xml
<select id="getById" resultType="TbUser">
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
    WHERE
      a.id = #{id}
</select>
```

单元测试代码如下：

``` java
@Test
public void testGetById() {

    TbUser tbUser = tbUserService.getById(37L);
    System.out.println(tbUser);

}
```

## UPDATE

继续以 tb_user 表为例，修改映射文件，增加如下配置：

``` xml
<update id="update">
    UPDATE
      tb_user
    SET
      username = #{username},
      password = #{password},
      phone = #{phone},
      email = #{email},
      created = #{created},
      updated = #{updated}
      WHERE id = #{id}
</update>
```

单元测试代码如下：

``` java
@Test
public void testUpdate() {
    TbUser tbUser = tbUserService.getById(37L);
    tbUser.setPassword(DigestUtils.md5DigestAsHex("admin".getBytes()));

    tbUserService.update(tbUser);
}
```

## 使用模糊查询

继续以 tb_user 表为例，修改映射文件，增加如下配置：

``` xml
<select id="selectByName" resultType="TbUser">
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
    WHERE
      a.username LIKE CONCAT ('%', #{username}, '%')
</select>
```

在进行模糊查询时，需要进行字符串的拼接。SQL 中的字符串的拼接使用的是函数 concat(arg1, arg2, …) 。注意不能使用 Java 中的字符串连接符 +。

单元测试代码如下：

``` java
@Test
public void testSelectByName() {
    List<TbUser> tbUsers = tbUserService.selectByName("niu");
    for (TbUser tbUser : tbUsers) {
        System.out.println(tbUser.getUsername());
    }
}

```