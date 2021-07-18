

## Docker Compose 部署 MySQL



## 模版文件

### MySQL 5.x 

参考模版文件如下，请大家根据自己实际情况，映射数据卷。

``` yaml
version: '3.1'
services:
  mysql:
    restart: always
    image: mysql:5.7
    container_name: mysql
    ports:
      - 3306:3306
    environment:
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: 123456
    command:
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
      --max_allowed_packet=128M
      --sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO"
    volumes:
      - /usr/local/docker/mysql5.7/conf:/etc/mysql
      - /usr/local/docker/mysql5.7/logs:/var/log/mysql 
      - /usr/local/docker/mysql5.7/data:/var/lib/mysql 

```

### MySQL 8.x

``` yaml
version: '3.1'
services:
  db:
    image: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    ports:
      - 3306:3306
    volumes:
      - /usr/local/docker/mysql/data:/var/lib/mysql # 必须配置持久化数据
      - /usr/local/docker/mysql/my.cnf:/etc/mysql/my.cnf # 自定义配置文件，没有可不配置，大多数配置在上面command指令中

  adminer:
    image: adminer
    restart: always
    ports:
      - 33066:8080
```

我的自定义配置文件可见[Docker部署MySQL](/docker/14-docker-deploy-mysql.html#%E8%BF%90%E8%A1%8C%E5%AE%B9%E5%99%A8)。

相比Docker部署MySQL，Docker Compose实在简化了很多操作。

这里额外还部署了一个PHP写的MySQL管理后台，登录用户和密码为：root/123456。

## 运行

使用docker-compose up -d 启动即可。

``` shell
# 5.7
wenwl@lubuntu:/usr/local/docker/mysql5.7$ docker-compose up -d
Creating network "mysql57_default" with the default driver
Creating mysql ... done

# 8.x
wenwl@lubuntu:/usr/local/docker/mysql$ docker-compose up -d
Starting mysql_db_1      ... done
Starting mysql_adminer_1 ... done
wenwl@lubuntu:/usr/local/docker/mysql$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS         PORTS                                                  NAMES
379d8628b582   mysql     "docker-entrypoint.s…"   9 minutes ago    Up 5 seconds   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   mysql_db_1
dadfb3b78f6d   adminer   "entrypoint.sh docke…"   25 minutes ago   Up 5 seconds   0.0.0.0:33066->8080/tcp, :::33066->8080/tcp            mysql_adminer_1

```

如果发现服务一直在尝试重启，这个时候可以查看容器日志`docker logs -f containerId`或前台运行（docker-compose up），根据具体报错去处理。

下面是我遇到的一些问题：

- [MySQL启动时显示“Different lower_case_table_names settings for server ('0') and data dictionary ('1') ](https://help.aliyun.com/document_detail/147946.html)

（我在my.cnf文件加了lower_case_table_names=1的配置）

