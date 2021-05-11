# Linux安装MySQL

## 简述

MySql可以选择apt或压缩包的方式进安装，这里选择apt的方式去安装。

安装过程可能不会一帆风顺，遇到问题要去排查解决！

## APT方式安装

### 安装
- 更新数据源：
  ``` shell
  apt-get update
  ```
- 版本选择
  - 在mysql官网[下载deb文件](https://dev.mysql.com/downloads/file/?id=477124)，这里以mysql-apt-config_0.8.10-1_all.deb为例。
  - 运行以下指令，选择想要安装的版本和一些配置,选好之后选ok就会生成相应的配置（我这里选择的8.0）
  ``` shell
  sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb
  ```
- 再更新数据源：
  ``` shell
  apt-get update
  ```
- 安装数据库：
  ``` shell
  apt-get install mysql-server
  ```
  注意： **系统将提示您在安装过程中创建 root 密码。选择一个安全的密码，并确保你记住它，因为你以后需要它**。接下来，我们将完成 MySQL 的配置。

## 配置

### 安全配置向导
安装完mysql-server 会提示可以运行mysql_secure_installation。这会更改一些不太安全的默认选项：

- 为root用户设置密码
- 删除匿名账号
- 取消root用户远程登录
- 删除test库和对test库的访问权限
- 刷新授权表使修改生效。

在旧版本的 MySQL 上，您需要手动初始化数据目录，但 Mysql 5.7 已经自动完成了。建议生产环境中安装的MySQL一定要运行一次：

```mysql
mysql_secure_installation
```

在运行的时候会提示输入之前步骤中创建的root密码。如果要设置root密码，您可以按 Y 进行设置，之后 ENTER 接受所有后续问题的默认值。简单来说，根据指导的提示设置即可。详细也可以参考
[MySQL----mysql_secure_installation 安全配置向导](https://blog.csdn.net/damys/article/details/50177331)。

### 验证安装是否成功
检测mysql运行的状态：
``` shell
systemctl status mysql.service
```
MySQL 版本：
``` shell
mysqladmin -p -u root version
```

### 配置远程访问

修改配置文件：

``` shell

vi /etc/mysql/mysql.conf.d/mysqld.cnf

```

注释掉行  `bind-address = 127.0.0.1`(语句前面加上 # 即可) :

重启MySQL

``` shell
service mysql restart
```

登录MySQL

``` shell
mysql -u root -p
```

授权 root 用户允许所有人连接（生产不建议这样弄）

``` mysql
grant all privileges on *.* to 'root'@'%' identified by '你的 mysql root 账户密码';
```

## MySQL Error Code

| Error Code | 说明 | 参考 |
| ----------------------- | ---- | ---- |
| 2003  、1130 | 未配置远程访问的错误Code | 参考上文 |
| 1698 | 密码加密模式问题 | [mysql 1698错误](https://blog.csdn.net/acsuccess/article/details/86648528) <br />[mysql错误：mysql_native_password](https://blog.csdn.net/qq_43395428/article/details/104795256) |

## 常用命令

Linux 操作数据库常用命令

| 说明 | 命令                  |
| ---- | --------------------- |
| 启动 | service mysql start   |
| 停止 | service mysql stop    |
| 重启 | service mysql restart |



## 其他配置

修改`mysql.cnf`配置文件（MySql 8.0），可以更改一些MySQL的配置：

``` shell
vi /etc/mysql/mysql.conf.d/mysqld.cnf
```

配置默认字符集

``` shell
# 在 [mysqld] 节点上增加如下配置
[client]
default-character-set=utf8
# 在 [mysqld] 节点底部增加如下配置
default-storage-engine=INNODB
character-set-server=utf8
collation-server=utf8_general_ci
```

配置忽略数据库大小写敏感

``` shell
# 在 [mysqld] 节点底部增加如下配置
lower-case-table-names = 1
```



参考：

1. [win10自带ubuntu](https://www.cnblogs.com/XmCui/p/10717833.html)
2. [Ubuntu 18.04中安装MySQL 8.0数据库服务器](https://www.linuxidc.com/Linux/2018-11/155408.htm)



