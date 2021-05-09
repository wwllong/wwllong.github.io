# Linux软件包管理

## 概述

APT(Advanced Packaging Tool) 是 Debian/Ubuntu 类 Linux 系统中的软件包管理程序, 使用它可以找到想要的软件包, 而且安装、卸载、更新都很简便；也可以用来对 Ubuntu 进行升级; APT 的源文件为 /etc/apt/ 目录下的 sources.list 文件。

## 修改数据源
由于国内的网络环境问题，我们需要将 Ubuntu 的数据源修改为国内数据源，操作步骤如下：

1. 查看系统版本
    ```shell
    lsb_release -a
    ```
    输出结果为

    ```
    No LSB modules are available.
    Distributor ID: Ubuntu
    Description:    Ubuntu 20.04 LTS
    Release:        20.04
    Codename:       focal
    ```

    注意：**Codename 为 focal，该名称为我们 Ubuntu 系统的名称，修改数据源需要用到该名称**。

2. 编辑数据源

    ```shell
    vi /etc/apt/sources.list
    ```

    删除全部内容并修改为

    ```shell
    deb http://mirrors.cloud.aliyuncs.com/ubuntu/ focal main
    deb-src http://mirrors.cloud.aliyuncs.com/ubuntu/ focal main
    deb http://mirrors.cloud.aliyuncs.com/ubuntu/ focal-updates main
    deb-src http://mirrors.cloud.aliyuncs.com/ubuntu/ focal-updates main
    deb http://mirrors.cloud.aliyuncs.com/ubuntu/ focal universe
    deb-src http://mirrors.cloud.aliyuncs.com/ubuntu/ focal universe
    deb http://mirrors.cloud.aliyuncs.com/ubuntu/ focal-updates universe
    deb-src http://mirrors.cloud.aliyuncs.com/ubuntu/ focal-updates universe
    ```

    

3. 更新数据源

    ``` shell
    apt-get update
    ```

    

## 常用 APT 命令

| 说明                         | 指令                               |
| :--------------------------- | :--------------------------------- |
| 安装软件包                   | apt-get install packagename        |
| 删除软件包                   | apt-get remove packagename         |
| 更新软件包列表               | apt-get update                     |
| 升级有可用更新的系统（慎用） | apt-get upgrade                    |
| 搜索                         | apt-cache search package           |
| 获取包信息                   | apt-cache show package             |
| 删除包及配置文件             | apt-get remove package --purge     |
| 了解使用依赖                 | apt-cache depends package          |
| 查看被哪些包依赖             | apt-cache rdepends package         |
| 安装相关的编译环境           | apt-get build-dep package          |
| 下载源代码                   | apt-get source package             |
| 清理无用的包                 | apt-get clean && apt-get autoclean |
| 检查是否有损坏的依赖         | apt-get check                      |


