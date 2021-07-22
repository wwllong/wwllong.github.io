# Docker Machine

## 概述

Docker Machine 是一种可以让您在虚拟主机上安装 Docker 的工具，并可以使用 docker-machine 命令来管理主机。Docker Machine 也可以集中管理所有的 docker 主机，比如快速的给 100 台服务器安装上 docker。

Docker Machine 管理的虚拟主机可以是机上的，也可以是云供应商，如阿里云，腾讯云，AWS，或 DigitalOcean。使用 docker-machine 命令，您可以启动，检查，停止和重新启动托管主机，也可以升级 Docker 客户端和守护程序，以及配置 Docker 客户端与您的主机进行通信。

## 安装

注意安装 Docker Machine 之前你需要先安装 Docker。

Docker Machine 可以在多种平台上安装使用，包括 Linux 、MacOS 以及 windows。

### Linux安装命令

``` shell
$ base=https://github.com/docker/machine/releases/download/v0.16.0 &&
  curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine &&
  sudo mv /tmp/docker-machine /usr/local/bin/docker-machine &&
  chmod +x /usr/local/bin/docker-machine
```

### Mac安装命令

这里的示例，是使用Docker Machine创建基于（boot2docker）VirtualBox的虚拟机。

``` shell
## 安装docker、docker-machine、docker-compose、virtualbox
$ brew install docker docker-machine docker-compose virtualbox
## 创建基于VirtualBox的虚拟机
docker-machine create --engine-registry-mirror=<docker加速镜像地址> --driver virtualbox --virtualbox-no-vtx-check default
## 共享Docker需要的目录文件
docker-machine stop
vboxmanage sharedfolder add default --name <挂载共享目录名称> --hostpath <本地共享目录路径> --automount
docker-machine start
## 固定虚拟机IP
echo "ifconfig eth1 192.168.99.101 netmask 255.255.255.0 broadcast 192.168.99.255 up" | docker-machine ssh default sudo tee /var/lib/boot2docker/bootsync.sh > /dev/null
docker-machine restart
## 配置docker/docker-compose环境变量
docker-machine env default
eval $(docker-machine env default)
## 更改ip需要重新生成证书（只需要第一次）
docker-machine regenerate-certs default
```

注意docker-machine指令，如果没有指定 [your machine name]，默认启动的容器名称为 `default`, 大家可以根据实际情况自己命名。

这里的命令可能需要配置[Git 代理](/git/git-proxy.html)，才能下载到相应的依赖包。



### Windows安装命令

 使用[Git BASH](https://git-for-windows.github.io/)，并输入一下命令：

``` shell
$ base=https://github.com/docker/machine/releases/download/v0.16.0 &&
  mkdir -p "$HOME/bin" &&
  curl -L $base/docker-machine-Windows-x86_64.exe > "$HOME/bin/docker-machine.exe" &&
  chmod +x "$HOME/bin/docker-machine.exe"
```

## 默认用户和密码

通常安装在虚拟机上的Docker是基于Docker boot2docker镜像的镜像，默认用户和密码

| 用户   | 密码   | 进入方式                            |
| ------ | ------ | ----------------------------------- |
| docker | tcuser | ssh                                 |
| root   |        | command：sudo -i (docker用户下执行) |



## 常用指令

| 指令                                              | 说明                                                         |
| ------------------------------------------------- | ------------------------------------------------------------ |
| docker-machine ls                                 | 列出可用的机器。                                             |
| docker-machine create --driver virtualbox default | 创建机器。--driver：指定用来创建机器的驱动类型，这里是 virtualbox。 |
| docker-machine ip defalut                         | 查看机器的 ip。docker-machine相关指令，如果不指定机器名称默认指向机器为defalut，故该指令可以简化为docker-machine ip，后续不再重述这个默认规则。 |
| docker-machine start defalut                      | 启动机器                                                     |
| docker-machine ssh defalut                        | 与机器交互                                                   |
| docker-machine active                             | 查看当前激活状态的 Docker 主机。                             |
| docker-machine rm defalut                         | 删除某台 Docker 主机，对应的虚拟机也会被删除。               |
| docker-machine env defalut                        | 显示连接到某个主机需要的环境变量                             |
| docker-machine mount                              | 使用 SSHFS 从计算机装载或卸载目录                            |



## 参考

- [Docker Machine](https://www.runoob.com/docker/docker-machine.html)
- [AMD黑苹果Docker环境搭建](https://www.jianshu.com/p/876940111749)