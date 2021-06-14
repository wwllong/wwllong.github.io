# Docker 仓库



仓库（`Repository`）是集中存放镜像的地方。

一个容易混淆的概念是注册服务器（`Registry`）。**实际上注册服务器是管理仓库的具体服务器，每个服务器上可以有多个仓库，而每个仓库下面有多个镜像**。从这方面来说，仓库可以被认为是一个具体的项目或目录。例如对于仓库地址 `dl.dockerpool.com/ubuntu` 来说，`dl.dockerpool.com` 是注册服务器地址，`ubuntu` 是仓库名。但大部分时候，并不需要严格区分这两者的概念。

## Docker Hub

目前 Docker 官方维护了一个公共仓库 [Docker Hub](https://hub.docker.com/)，其中已经包括了数量超过 15,000 的镜像。大部分需求都可以通过在 Docker Hub 中直接下载镜像来实现。

### 注册&登录

你可以在  [Docker Hub](https://hub.docker.com/)，免费注册一个 Docker 账号。

通过执行 `docker login` 命令交互式的输入用户名及密码来完成在命令行界面登录 Docker Hub。以及通过 `docker logout` 退出登录。

### 拉取镜像

你可以通过 `docker search` 命令来查找官方仓库中的镜像，并利用 `docker pull` 命令来将它下载到本地。

例如以 `tomcat` 为关键词进行搜索：

``` shell
wenwl@ubuntu:~$ docker search tomcat
NAME                          DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
tomcat                        Apache Tomcat is an open source implementati…   3035                [OK]                
tomee                         Apache TomEE is an all-Apache Java EE certif…   87                  [OK]                
dordoka/tomcat                Ubuntu 14.04, Oracle JDK 8 and Tomcat 8 base…   57                                      [OK]
bitnami/tomcat                Bitnami Tomcat Docker Image                     37                                      [OK]
......
```

可以看到返回了很多包含关键字的镜像，每一行的列分别表示镜像名字、描述、收藏数、是否官方创建、是否自动创建。

根据是否是官方提供，可将镜像资源分为两类：

- 一种是类似 `tomcat` 这样的镜像，被称为基础镜像或根镜像。这些基础镜像由 Docker 公司创建、验证、支持、提供。这样的镜像往往使用单个单词作为名字。
- 还有一种类型，比如 `dordoka/tomcat` 镜像，它是由 Docker 的用户创建并维护的，往往带有用户名称前缀。可以通过前缀 `username/` 来指定使用某个用户提供的镜像，比如 dordoka 用户。

在查找的时候通过 `--filter=stars=N` 参数可以指定仅显示收藏数量为 `N` 以上的镜像

更多基础镜像操作见[Docker 镜像基本操作](http://localhost:8080/docker/7-docker-image-operation.html#概述)

### 推送镜像

在登录后，用户可以通过 `docker push` 命令来将自己的镜像推送到 Docker Hub。

例如：

```bash
wenwl@ubuntu:~$ docker tag tomcat wenwl/tomcat
wenwl@ubuntu:~$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
wenwl/tomcat        latest              c43a65faae57        10 days ago         667MB
tomcat              latest              c43a65faae57        10 days ago         667MB

wenwl@ubuntu:~$ docker push wenwl/tomcat
The push refers to repository [docker.io/wenwl/tomcat]
daf63ef0ddbb: Mounted from library/tomcat 
3307ffa538c1: Mounted from library/tomcat 
8f8b5acac684: Mounted from library/tomcat 
15786a1cf1cb: Mounted from library/tomcat 
6f770cdc9ebf: Mounted from library/tomcat 
3fc095fab4a2: Mounted from library/tomcat 
685934357c89: Mounted from library/tomcat 
ccb9b68523fd: Mounted from library/tomcat 
00bcea93703b: Mounted from library/tomcat 
688e187d6c79: Mounted from library/tomcat 
latest: digest: sha256:e82ade60f21a967a4e4769c0955a83db9a2fc271bcb881a8456e99d710159f9e size: 2421
wenwl@ubuntu:~$ docker search wenwl

```

### 自动创建

自动创建（Automated Builds）功能对于需要经常升级镜像内程序来说，十分方便。

有时候，用户创建了镜像，安装了某个软件，如果软件发布新版本则需要手动更新镜像。而自动创建允许用户通过 Docker Hub 指定跟踪一个目标网站（目前支持 [GitHub](https://github.com/) 或 [BitBucket](https://bitbucket.org/)）上的项目，一旦项目发生新的提交或者创建新的标签（tag），Docker Hub 会自动构建镜像并推送到 Docker Hub 中。

要配置自动创建，包括如下的步骤：

- 创建用户并登录 Docker Hub，以及目标网站；
- 在目标网站中连接帐户到 Docker Hub；
- 在 Docker Hub 中 [配置一个自动创建](https://registry.hub.docker.com/builds/add/)；
- 选取一个目标网站中的项目（需要含 `Dockerfile`）和分支；
- 指定 `Dockerfile` 的位置，并提交创建。

之后，可以在 Docker Hub 的 [自动创建页面](https://registry.hub.docker.com/builds/) 中跟踪每次创建的状态。



## Docker 私有仓库

有时候使用 Docker Hub 这样的公共仓库可能不方便，用户可以创建一个本地仓库供私人使用。本节介绍如何使用本地仓库。

[`docker-registry`](https://docs.docker.com/registry/) 是官方提供的工具，可以用于构建私有的镜像仓库。本文内容基于 [`docker-registry`](https://github.com/docker/distribution) v2.x 版本。（生产中可能会用别的开源仓库管理系统-比如：Harbor）

### 安装运行 docker-registry

我们可以通过获取官方的 `registry` 镜像来启动私有仓库。默认情况下，仓库会被创建在容器的 `/var/lib/registry` 目录下。你可以通过 `-v` 参数来将镜像文件存放在本地的指定路径。例如下面的例子将上传的镜像放到本地的 `/opt/data/registry` 目录。

```bash
# 安装运行容器
wenwl@ubuntu:~$ docker run -d \
    -p 5000:5000 \
    -v /opt/data/registry:/var/lib/registry \
    registry
```

### 在私有仓库上传、下载镜像

创建好私有仓库之后，就可以使用 `docker tag` 来标记一个镜像，然后推送它到仓库。

例如私有仓库地址为 `127.0.0.1:5000`，将 最新版本的 tomcat 再上传到私人仓库中为例：

``` shell
# 标记镜像
wenwl@ubuntu:~$ docker tag tomcat:latest 127.0.0.1:5000/tomcat:latest
wenwl@ubuntu:~$ docker images
REPOSITORY              TAG                 IMAGE ID            CREATED             SIZE
127.0.0.1:5000/tomcat   latest              c43a65faae57        10 days ago         667MB
# 上传标记的镜像到私库
wenwl@ubuntu:~$ docker push 127.0.0.1:5000/tomcat:latest
The push refers to repository [127.0.0.1:5000/tomcat]
daf63ef0ddbb: Pushed 
3307ffa538c1: Pushed 
8f8b5acac684: Pushed 
15786a1cf1cb: Pushed 
6f770cdc9ebf: Pushed 
3fc095fab4a2: Pushed 
685934357c89: Pushed 
ccb9b68523fd: Pushed 
00bcea93703b: Pushed 
688e187d6c79: Pushed 
latest: digest: sha256:e82ade60f21a967a4e4769c0955a83db9a2fc271bcb881a8456e99d710159f9e size: 2421
# 查看仓库中的镜像
wenwl@ubuntu:~$ curl 127.0.0.1:5000/v2/_catalog
{"repositories":["tomcat"]}
# 删除已有镜像
wenwl@ubuntu:~$ docker rmi 127.0.0.1:5000/tomcat:latest 
Untagged: 127.0.0.1:5000/tomcat:latest
Untagged: 127.0.0.1:5000/tomcat@sha256:e82ade60f21a967a4e4769c0955a83db9a2fc271bcb881a8456e99d710159f9e

# 从私有仓库下载镜像
wenwl@ubuntu:~$ docker pull  127.0.0.1:5000/tomcat:latest
latest: Pulling from tomcat
Digest: sha256:e82ade60f21a967a4e4769c0955a83db9a2fc271bcb881a8456e99d710159f9e
Status: Downloaded newer image for 127.0.0.1:5000/tomcat:latest
127.0.0.1:5000/tomcat:latest
```

### 注意事项

如果你不想使用 `127.0.0.1:5000` 作为仓库地址，比如想让本网段的其他主机也能把镜像推送到私有仓库。例如 `192.168.199.100:5000` 这样的内网地址作为私有仓库地址，这时你会发现无法成功推送镜像。

这是因为 Docker 默认不允许非 `HTTPS` 方式推送镜像。我们可以通过 Docker 的配置选项来取消这个限制，或者查看下一节配置能够通过 `HTTPS` 访问的私有仓库。

#### Ubuntu 14.04, Debian 7 Wheezy

对于使用 `upstart` 的系统而言，编辑 `/etc/default/docker` 文件，在其中的 `DOCKER_OPTS` 中增加如下内容：

```bash
DOCKER_OPTS="--registry-mirror=https://registry.docker-cn.com --insecure-registries=192.168.199.100:5000"
```

重新启动服务：

```bash
$ sudo service docker restart
```

#### Ubuntu 16.04+, Debian 8+, centos 7

对于使用 `systemd` 的系统，请在 `/etc/docker/daemon.json` 中写入如下内容（如果文件不存在请新建该文件）

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ],
  "insecure-registries": [
    "192.168.199.100:5000"
  ]
}
```

::: tip 注意

该文件必须符合 `json` 规范，否则 Docker 将不能启动。

:::

对于 Docker for Windows 、 Docker for Mac 在设置中编辑 `daemon.json` 增加和上面一样的字符串即可。