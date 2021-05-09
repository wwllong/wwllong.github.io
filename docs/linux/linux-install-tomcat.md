# Linux安装Tomcat

## 下载Tomcat压缩包

去[官网下载Tomcat](https://tomcat.apache.org/download-80.cgi)，此处以apache-tomcat-8.5.23.tar.gz为例。

## 解压缩并移动到指定目录

``` shell
# 解压缩：
tar -zxvf apache-tomcat-8.5.23.tar.gz
# 创建目录：
mkdir -p /usr/local/tomcat
# 移动安装包：
mv apache-tomcat-8.5.23 tomcat
```

## 验证安装是否成功

- 启动：

  ``` shell
  /usr/local/tomcat/bin/startup.sh
  ```

- 停止：

  ``` shell
  /usr/local/tomcat/bin/shutdown.sh
  ```



