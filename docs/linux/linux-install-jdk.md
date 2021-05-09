# Linux安装JDK

## 简述

JDK主要分为两个版本，一个开源版本OpenJDK，还有一个官方版本的OracleJDK。本文主要记录在Linux系统上如何安装这些JDK的步骤,以Ubuntu为例：

## 通过软件包安装

### 安装OpenJDK

1. 更新软件

   ``` shell
   sudo apt-get update
   ```

2. 安装openjdk-8-jdk

   ``` shell
   sudo apt-get install openjdk-8-jdk
   ```

3. 检查是否安装成功

   ``` shell
   java -version
   ```

   结果类似如下：

   ``` shell
   openjdk version "1.8.0_272"
   OpenJDK Runtime Environment (build 1.8.0_272-8u272-b10-0ubuntu1~20.04-b10)
   OpenJDK 64-Bit Server VM (build 25.272-b10, mixed mode)
   ```

   

### 安装OracleJDK

1. 安装依赖包

   ``` shell
   sudo apt-get install python-software-properties
   ```

2. 添加仓库源

   ``` shell
   sudo add-apt-repository ppa:webupd8team/java
   ```

3. 更新软件包列表

   ``` shell
   sudo apt-get update
   ```

4. 安装OracleJDK（安装过程需要接受协议略）

   ``` shell
   sudo apt-get install oracle-java8-installer
   ```

5. 最后检查版本（略）

## 手动下载压缩包安装

1. [下载压缩包](http://www.oracle.com/technetwork/java/javase/downloads/index.html)，（以jdk-8u152-linux-x64.tar.gz为例）
2. 解压缩并移动到指定目录
   ``` shell
   # 解压缩
   tar -zxvf jdk-8u152-linux-x64.tar.gz
   # 创建目录（-p ，递归创建目录）
   mkdir -p /usr/local/java
   # 移动安装包
   mv jdk1.8.0_152/ /usr/local/java/
   # 设置所有者
   chown -R root:root /usr/local/java/
   ```

3. 配置环境变量

   - 配置系统环境变量：

     ``` shell
     vi /etc/environment
     ```

     修改系统环境变量：

      ``` shell
      PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"
      export JAVA_HOME=/usr/local/java/jdk1.8.0_152
      export JRE_HOME=/usr/local/java/jdk1.8.0_152/jre
      export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
      ```
     
   - 配置用户环境变量：
   
     ``` shell
     vi /etc/profile
     ```
   
     修改用户环境变量

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
     
     使用户环境变量生效：
     
     ``` shell
     source /etc/profile
     ```

4. 验证安装是否成功

``` bash
java -version
java version "1.8.0_152"
Java(TM) SE Runtime Environment (build 1.8.0_152-b16)
Java HotSpot(TM) 64-Bit Server VM (build 25.152-b16, mixed mode)
```

参考：
1. [Linux之Ubuntu18.04安装Java JDK8的三种方式](https://blog.csdn.net/zbj18314469395/article/details/86064849)



