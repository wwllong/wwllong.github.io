# Linux部署应用程序- Java篇

## 安装Java

### 解压缩并移动到指定目录

- 解压缩：`tar -zxvf jdk-8u152-linux-x64.tar.gz`
- 创建目录：`mkdir -p /usr/local/java`
  - -p ，递归创建目录
- 移动安装包：`mv jdk1.8.0_152/ /usr/local/java/`
- 设置所有者：`chown -R root:root /usr/local/java/`

### 配置环境变量

- 配置系统环境变量：`vi /etc/environment`
- 修改系统环境变量：
``` bash
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"
export JAVA_HOME=/usr/local/java/jdk1.8.0_152
export JRE_HOME=/usr/local/java/jdk1.8.0_152/jre
export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
```
- 配置用户环境变量：`vi /etc/profile`
- 修改用户环境变量
``` bash
if [ "$PS1" ]; then
  if [ "$BASH" ] && [ "$BASH" != "/bin/sh" ]; then
    # The file bash.bashrc already sets the default PS1.
    # PS1='\h:\w\$ '
    if [ -f /etc/bash.bashrc ]; then
      . /etc/bash.bashrc
    fi
  else
    if [ "`id -u`" -eq 0 ]; then
      PS1='# '
    else
      PS1='$ '
    fi
  fi
fi

export JAVA_HOME=/usr/local/java/jdk1.8.0_152
export JRE_HOME=/usr/local/java/jdk1.8.0_152/jre
export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH:$HOME/bin

if [ -d /etc/profile.d ]; then
  for i in /etc/profile.d/*.sh; do
    if [ -r $i ]; then
      . $i
    fi
  done
  unset i
fi
```
- 使用户环境变量生效：`source /etc/profile`

### 验证安装是否成功
- 命令：`java -version`
``` bash
java version "1.8.0_152"
Java(TM) SE Runtime Environment (build 1.8.0_152-b16)
Java HotSpot(TM) 64-Bit Server VM (build 25.152-b16, mixed mode)
```

## 安装 Tomcat

### 解压缩并移动到指定目录

- 解压缩：`tar -zxvf apache-tomcat-8.5.23.tar.gz`
- 创建目录：`mkdir -p /usr/local/tomcat`
- 移动安装包：`mv apache-tomcat-8.5.23 tomcat`

### 验证安装是否成功
- 启动：
  - `/usr/local/tomcat/bin/startup.sh`
  - `-./startup.sh`
- 停止：
  - `/usr/local/tomcat/bin/shutdown.sh`
  - `./shutdown.sh`

## 安装 MySQL

MySql可以选择apt或压缩包的方式进安装，这里选择apt的方式去安装。

安装过程可能不会一帆风顺，遇到问题要去排查解决！
安装参考：
https://www.cnblogs.com/XmCui/p/10717833.html【win10自带ubuntu】
https://www.linuxidc.com/Linux/2018-11/155408.htm【Ubuntu 18.04中安装MySQL 8.0数据库服务器】
https://blog.csdn.net/acsuccess/article/details/86648528

### 安装
- 更新数据源：`apt-get update`
- 版本选择
  - 在mysql官网下载deb文件https://dev.mysql.com/downloads/file/?id=477124
  - 运行：` sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb`,选择想要安装的版本和一些配置,选好之后选ok就会生成相应的配置
- 再更新数据源：`apt-get update`.
- 安装数据库：`apt-get install mysql-server`
- 注意： 系统将提示您在安装过程中创建 root 密码。选择一个安全的密码，并确保你记住它，因为你以后需要它。接下来，我们将完成 MySQL 的配置。

### 配置

mysql 2003
mysql 1130
mysql 1698 https://blog.csdn.net/acsuccess/article/details/86648528

### 验证安装是否成功
检测mysql运行的状态：`systemctl status mysql`




