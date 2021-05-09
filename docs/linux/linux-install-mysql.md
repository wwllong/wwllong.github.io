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
  - 运行以下指令，选择想要安装的版本和一些配置,选好之后选ok就会生成相应的配置
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
  注意： ***系统将提示您在安装过程中创建 root 密码。选择一个安全的密码，并确保你记住它，因为你以后需要它**。接下来，我们将完成 MySQL 的配置。

### 配置

mysql 2003  
mysql 1130  
[mysql 1698](https://blog.csdn.net/acsuccess/article/details/86648528) 


### 验证安装是否成功
检测mysql运行的状态：
``` shell
systemctl status mysql
```

参考：
1. [win10自带ubuntu](https://www.cnblogs.com/XmCui/p/10717833.html)
2. [Ubuntu 18.04中安装MySQL 8.0数据库服务器](https://www.linuxidc.com/Linux/2018-11/155408.htm)




