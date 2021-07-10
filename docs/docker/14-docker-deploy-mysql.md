# Docker 构建 MySQL



## 查找 MySQL 镜像

```shell
wenwl@lubuntu:~$ docker search mysql
NAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                             MySQL is a widely used, open-source relation…   11096     [OK]       
mariadb                           MariaDB Server is a high performing open sou…   4203      [OK]       
mysql/mysql-server                Optimized MySQL Server Docker images. Create…   824                  [OK]
centos/mysql-57-centos7           MySQL 5.7 SQL database server                   88                   
mysql/mysql-cluster               Experimental MySQL Cluster Docker images. Cr…   88                   
centurylink/mysql                 Image containing mysql. Optimized to be link…   59                   [OK]
databack/mysql-backup             Back up mysql databases to... anywhere!         44                   
deitch/mysql-backup               REPLACED! Please use http://hub.docker.com/r…   41                   [OK]
prom/mysqld-exporter                                                              39                   [OK]
tutum/mysql                       Base docker image to run a MySQL database se…   35                   
linuxserver/mysql                 A Mysql container, brought to you by LinuxSe…   30                   
schickling/mysql-backup-s3        Backup MySQL to S3 (supports periodic backup…   29                   [OK]
mysql/mysql-router                MySQL Router provides transparent routing be…   21                   
centos/mysql-56-centos7           MySQL 5.6 SQL database server                   20                   
arey/mysql-client                 Run a MySQL client from a docker container      17                   [OK]
fradelg/mysql-cron-backup         MySQL/MariaDB database backup using cron tas…   15                   [OK]
yloeffler/mysql-backup            This image runs mysqldump to backup data usi…   7                    [OK]
genschsa/mysql-employees          MySQL Employee Sample Database                  7                    [OK]
openshift/mysql-55-centos7        DEPRECATED: A Centos7 based MySQL v5.5 image…   6                    
cytopia/mysql-5.5                 MySQL 5.5 on CentOS 7                           4                    [OK]
devilbox/mysql                    Retagged MySQL, MariaDB and PerconaDB offici…   3                    
ansibleplaybookbundle/mysql-apb   An APB which deploys RHSCL MySQL                2                    [OK]
jelastic/mysql                    An image of the MySQL database server mainta…   1                    
widdpim/mysql-client              Dockerized MySQL Client (5.7) including Curl…   1                    [OK]
monasca/mysql-init                A minimal decoupled init container for mysql    0                 
```



## 拉取镜像

这里我们拉取官方的镜像

```shell
wenwl@lubuntu:~$ docker pull mysql
Using default tag: latest
latest: Pulling from library/mysql
b4d181a07f80: Pull complete 
a462b60610f5: Pull complete 
578fafb77ab8: Pull complete 
524046006037: Pull complete 
d0cbe54c8855: Pull complete 
aa18e05cc46d: Pull complete 
32ca814c833f: Pull complete 
9ecc8abdb7f5: Pull complete 
ad042b682e0f: Pull complete 
71d327c6bb78: Pull complete 
165d1d10a3fa: Pull complete 
2f40c47d0626: Pull complete 
Digest: sha256:52b8406e4c32b8cf0557f1b74517e14c5393aff5cf0384eff62d9e81f4985d4b
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest

```

等待下载完成后，我们就可以在本地镜像列表里查到 REPOSITORY 为 mysql 的镜像

``` shell
wenwl@lubuntu:~$ docker images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
tomcat        latest    36ef696ea43d   4 days ago     667MB
mysql         latest    5c62e459e087   2 weeks ago    556MB
hello-world   latest    d1165f221234   4 months ago   13.3kB
```



## 运行容器

编写笔记时，mysql latest 的版本为 8.0.25，配置过程：

``` shell
# 挂载外部配置和数据安装
wenwl@lubuntu:/usr/local/docker/mysql$ mkdir conf.d
wenwl@lubuntu:/usr/local/docker/mysql$ mkdir data

# 创建配置文件
wenwl@lubuntu:/usr/local/docker/mysql$ sudo touch my.cnf
# 添加如下内容
[mysqld]
user=mysql
character-set-server=utf8
default_authentication_plugin=mysql_native_password
secure_file_priv=/var/lib/mysql
expire_logs_days=7
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
max_connections=1000
lower_case_table_names=1

[client]
default-character-set=utf8

[mysql]
default-character-set=utf8
```

创建容器，守护态运行

``` shell
# mysql latest 的版本为 8.0.25
wenwl@lubuntu:/usr/local/docker/mysql5.7$ docker run -p 3306:3306 --name mysql \
> --restart=always --privileged=true \
> -v /usr/local/docker/mysql/data:/var/lib/mysql \
> -v /usr/local/docker/mysql/conf.d:/etc/mysql/conf.d \
> -v /usr/local/docker/mysql/my.cnf:/etc/mysql/my.cnf \
> -e MYSQL_ROOT_PASSWORD=123456 \
> -d mysql
```

命令参数说明：

- `-p 3306:3306`：将容器的3306端口映射到主机的3306端口
- `--restart=always`： 当Docker 重启时，容器会自动启动
- `--privileged=true`：容器内的root拥有真正root权限，否则容器内root只是外部普通用户权限
- `-v /usr/local/docker/mysql/data:/var/lib/mysql`：映射数据目录，将主机当前目录下的 data 目录挂载到容器的 /var/lib/mysql
- `-v /usr/local/docker/mysql/conf.d:/etc/mysql/conf.d`：映射配置文件，将主机当前目录下的 conf .d 挂载到容器的 /etc/mysql/confi.d
- `-e MYSQL\_ROOT\_PASSWORD=123456`：初始化root用户的密码

::: tip 提示

如果出现关于报错[Server] Failed to access directory for --secure-file-priv. Please make sure that directory exists and is accessible by MySQL Server. Supplied value : /var/lib/mysql-files。

是因为MYSQL新特性secure_file_priv对读写文件的影响，解决办法：

```
windows下：修改my.ini 在[mysqld]内加入secure_file_priv=/var/lib/mysql
linux下：修改my.cnf 在[mysqld]内加入secure_file_priv=/var/lib/mysql
```

:::

容器启动完成后，发现无法用客户端进行远程连接：

``` shell
[HY000][1130] null,  message from server: "Host '192.168.0.101' is not allowed to connect to this MySQL server".
```

需要先进入容器交互，配置远程连接：

``` shell
wenwl@lubuntu:/usr/local/docker/mysql$ docker exec -it mysql bash
root@27a6365e7a9b:/# mysql -u root -p
Enter password: 
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)
root@27a6365e7a9b:/# mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 16
Server version: 8.0.25 MySQL Community Server - GPL

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 

```

从上面的提示可知，在最开始创建容器的时候，初始化root用户密码的设置也没有生效，这时候密码默认为空，直接Enter即可。

接下来正式改密码和授权远程连接：

``` shell
mysql> update user set host='%' where user='root';
Query OK, 1 row affected (0.04 sec)
Rows matched: 1  Changed: 1  Warnings: 0
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
Query OK, 0 rows affected (0.04 sec)
```

这个时候就可以远程连接了。



附创建容器MySQL 5.7 版本命令：

```shell
# 5.7 版本
wenwl@lubuntu:/usr/local/docker/mysql5.7$ docker run -p 3306:3306 --name mysql \
> -v /usr/local/docker/mysql5.7/conf:/etc/mysql \
> -v /usr/local/docker/mysql5.7/logs:/var/log/mysql \
> -v /usr/local/docker/mysql5.7/data:/var/lib/mysql \
> -e MYSQL_ROOT_PASSWORD=123456 \
> -d mysql:5.7
```



查看容器启动情况

```text
wenwl@lubuntu:/usr/local/docker/mysql$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                                  NAMES
27a6365e7a9b   mysql     "docker-entrypoint.s…"   31 minutes ago   Up 31 minutes   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   mysql
```

使用客户端工具连接 MySQL（略）

## 参考

1. [使用Docker安装mysql，挂载外部配置和数据](https://www.cnblogs.com/linjiqin/p/11465804.html)
2. [Docker 部署 Mysql8.0](https://blog.csdn.net/xsj34567/article/details/80940238)
3. [MySql8.0以上版本正确修改ROOT密码的方法](https://www.jb51.net/article/163487.htm)
4. [MYSQL8.0以上版本ROOT密码报错及修改](https://www.cnblogs.com/mzxiaoze/p/10413399.html)
5. [mysql5.x如何修改root用户的密码](https://www.cnblogs.com/qianzf/p/7089197.html)

