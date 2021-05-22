# Docker 镜像基本操作



## 概述

Docker 运行容器前需要本地存在对应的镜像，如果本地不存在该镜像，Docker 会从镜像仓库下载该镜像。

## 获取镜像

[Docker Hub](https://hub.docker.com/explore/) 上有大量的高质量的镜像可以用，从 Docker 镜像仓库获取镜像的命令是 `docker pull`。其命令格式为：

``` shell
$ docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]
```

具体的选项可以通过 `docker pull --help` 命令看到，这里我们说一下镜像名称的格式。

- Docker Registry 地址：即Docker 镜像仓库地址，地址的格式一般是 `<域名/IP>[:端口号]`。默认地址是 Docker Hub。
- 仓库名：这里的仓库名是两段式名称，即 `<用户名>/<软件名>`。对于 Docker Hub，如果不给出用户名，则默认为 `library`，也就是官方镜像。

比如获取nginx的镜像：

```shell
wenwl@ubuntu:~$ docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
69692152171a: Pull complete 
49f7d34d62c1: Pull complete 
5f97dc5d71ab: Pull complete 
cfcd0711b93a: Pull complete 
be6172d7651b: Pull complete 
de9813870342: Pull complete 
Digest: sha256:df13abe416e37eb3db4722840dd479b00ba193ac6606e7902331dcea50f4f1f2
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
```

上面的命令中没有给出 Docker 镜像仓库地址，因此将会从 Docker Hub 获取镜像。而镜像名称是 `nginx`，由于没有配置标签，所以将会获取官方镜像 `library/nginx` 仓库中标签为`latest` 的镜像。

从下载过程中可以看到我们之前提及的分层存储的概念，镜像是由多层存储所构成。下载也是一层层的去下载，并非单一文件。下载过程中给出了每一层的 ID 的前 12 位。并且下载结束后，给出该镜像完整的 `sha256` 的摘要，以确保下载一致性。

在使用上面命令的时候，你可能会发现，你所看到的层 ID 以及 `sha256` 的摘要和这里的不一样。这是因为官方镜像是一直在维护的，有任何新的 bug或者版本更新，都会进行修复再以原来的标签发布，这样可以确保任何使用这个标签的用户可以获得更安全、更稳定的镜像。

如果从 Docker Hub 下载镜像非常缓慢，可以参照 [Docker镜像加速器](/docker/6-docker-accelerator.html) 一节。

## 镜像列表

列出已经下载下来的镜像，可以使用 `docker image ls` 命令：

```bash
wenwl@ubuntu:~$ docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
tomcat              latest              c43a65faae57        6 days ago          667MB
nginx               latest              f0b8a9a54136        8 days ago          133MB
mysql               5.7                 2c9028880e58        8 days ago          447MB
hello-world         latest              d1165f221234        2 months ago        13.3kB
redis               latest              50541622f4f1        10 months ago       104MB
adminer             latest              d3d18514e50a        11 months ago       89.8MB
mysql               latest              be0dbf01a0f3        11 months ago       541MB
rabbitmq            3.8.3-management    867da7fcdf92        12 months ago       181MB
```

列表包含了仓库名、标签、镜像 ID、创建时间以及所占用的空间。

其中仓库名、标签在之前的基础概念章节已经介绍过了。**镜像 ID** 则是镜像的唯一标识，一个镜像可以对应多个**标签**。因此，在上面的例子中，我们可以看到 `mysql:5.7` 和 `mysql:latest` 拥有相同的 ID，因为它们对应的是同一个镜像。

### 镜像体积

如果仔细观察，会注意到，这里标识的所占用空间和在 Docker Hub 上看到的镜像大小不同。比如，`mysql:5.7` 镜像大小，在这里是 `447MB`，但是在 [Docker Hub](https://hub.docker.com/_/mysql?tab=tags&page=1&ordering=last_updated) 显示的却是 `147.28 MB`。这是因为 **Docker Hub 中显示的体积是压缩后的体积**。在镜像下载和上传过程中镜像是保持着压缩状态的，因此 Docker Hub 所显示的大小是网络传输中更关心的流量大小。而 `docker image ls` 显示的是镜像下载到本地后，**展开后的各层所占空间的总和**，因为镜像到本地后，查看空间的时候，更关心的是本地磁盘空间占用的大小。

另外一个需要注意的问题是，**`docker image ls` 列表中的镜像体积总和并非是所有镜像实际硬盘消耗**。由于 Docker 镜像是多层存储结构，并且可以继承、复用，因此不同镜像可能会因为使用相同的基础镜像，从而拥有共同的层。由于 Docker 使用 Union FS，相同的层只需要保存一份即可，因此实际镜像硬盘占用空间很可能要比这个列表镜像大小的总和要小的多。

你可以通过以下命令来便捷的查看镜像、容器、数据卷所占用的空间。

``` shell
wenwl@ubuntu:~$ docker system df
TYPE                TOTAL               ACTIVE              SIZE                RECLAIMABLE
Images              8                   6                   2.094GB             510.9MB (24%)
Containers          6                   4                   26.38kB             5.611kB (21%)
Local Volumes       0                   0                   0B                  0B
Build Cache         0                   0                   0B                  0B

```

### 虚悬镜像

在查看镜像列表中，可能会出现 一些特殊的镜像，这些镜像既没有仓库名，也没有标签，均为 `<none>`。例如：

``` shell
<none>               <none>              00285df0df87        5 days ago          342 MB
```

这个镜像原本是有镜像名和标签的，原来为 `mongo:3.2`，随着官方镜像维护，发布了新版本后，重新 `docker pull mongo:3.2` 时，`mongo:3.2` 这个镜像名被转移到了新下载的镜像身上，而旧的镜像上的这个名称则被取消，从而成为了 `<none>`。**除了 `docker pull` 可能导致这种情况，`docker build` 也同样可以导致这种现象。由于新旧镜像同名，旧镜像名称被取消，从而出现仓库名、标签均为 `<none>` 的镜像**。这类无标签镜像也被称为 **虚悬镜像(dangling image)** ，可以用下面的命令专门显示这类镜像：

```bash
$ docker image ls -f dangling=true
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
<none>              <none>              00285df0df87        5 days ago          342 MB
```

一般来说，虚悬镜像已经失去了存在的价值，是可以随意删除的，可以用下面的命令删除。

```bash
$ docker image prune
```

### 中间层镜像

为了加速镜像构建、重复利用资源，Docker 会利用 **中间层镜像**。所以在使用一段时间后，可能会看到一些依赖的中间层镜像。默认的 `docker image ls` 列表中只会显示顶层镜像，如果希望显示包括中间层镜像在内的所有镜像的话，需要加 `-a` 参数。

```bash
$ docker image ls -a
```

这样会看到很多无标签的镜像，与之前的虚悬镜像不同，这些无标签的镜像很多都是中间层镜像，是其它镜像所依赖的镜像。这些无标签镜像不应该删除，否则会导致上层镜像因为依赖丢失而出错。

实际上，这些镜像也没必要删除，因为之前说过，相同的层只会存一遍，而这些镜像是别的镜像的依赖，因此并不会因为它们被列出来而多存了一份，无论如何你也会需要它们。只要删除那些依赖它们的镜像后，这些依赖的中间层镜像也会被连带删除。

### 镜像列表筛选

`docker image ls` 会列出所有顶级镜像，但是有时候我们只希望列出部分镜像。可参考以下指令参数：

``` shell
# 根据仓库名筛选
wenwl@ubuntu:~$ docker image ls mysql
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
mysql               5.7                 2c9028880e58        8 days ago          447MB
mysql               latest              be0dbf01a0f3        11 months ago       541MB
# 指定仓库名和标签
wenwl@ubuntu:~$ docker image ls mysql:5.7
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
mysql               5.7                 2c9028880e58        8 days ago          447MB
```

除此以外，还支持强大的过滤器参数 `--filter`或者简写 `-f`。之前我们已经看到了使用过滤器来列出虚悬镜像的用法，它还有更多的用法。比如：

``` shell
# 希望看到在 `hello-world` 之后建立的镜像, since的反面是before
wenwl@ubuntu:~$ docker image ls -f since=hello-world
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
tomcat              latest              c43a65faae57        6 days ago          667MB
nginx               latest              f0b8a9a54136        8 days ago          133MB
mysql               5.7                 2c9028880e58        8 days ago          447MB

```

此外，如果镜像构建时，定义了 `LABEL`，还可以通过 `LABEL` 来过滤。

```shell
$ docker image ls -f label=com.example.version=0.1
...
```

### 特定格式显示

默认情况下，`docker image ls` 会输出一个完整的表格，但是我们并非所有时候都会需要这些内容。比如，刚才删除虚悬镜像的时候，我们需要利用 `docker image ls` 把所有的虚悬镜像的 ID 列出来，然后才可以交给 `docker image rm` 命令作为参数来删除指定的这些镜像，这个时候就用到了 `-q` 参数。

```bash
# 镜像ID列
wenwl@ubuntu:~$ docker image ls -q
c43a65faae57
f0b8a9a54136
2c9028880e58
d1165f221234
50541622f4f1
d3d18514e50a
be0dbf01a0f3
867da7fcdf92
```

**`--filter` 配合 `-q` 产生出指定范围的 ID 列表，然后送给另一个 `docker` 命令作为参数，从而针对这组镜像成批的进行某种操作**。这种做法在 Docker 命令行使用过程中非常常见，不仅仅是镜像，将来我们会在各个命令中看到这类搭配，以完成很强大的功能。因此每次在文档看到过滤器后，可以多注意一下它们的用法。

另外一些时候，我们可能只是对表格的结构不满意，希望自己组织列，或者不希望有标题，这样方便其它程序解析结果等，这就用到了 [Go 的模板语法](https://gohugo.io/templates/go-templates/)。

比如，下面的命令会直接列出镜像结果，并且只包含镜像ID和仓库名：

```bash
wenwl@ubuntu:~$ docker image ls --format "{{.ID}}: {{.Repository}}"
c43a65faae57: tomcat
f0b8a9a54136: nginx
2c9028880e58: mysql
d1165f221234: hello-world
50541622f4f1: redis
d3d18514e50a: adminer
be0dbf01a0f3: mysql
867da7fcdf92: rabbitmq
```

或者打算以表格等距显示，并且有标题行，和默认一样，不过自己定义列：

```bash
wenwl@ubuntu:~$ docker image ls --format "table {{.ID}}\t{{.Repository}}\t{{.Tag}}"
IMAGE ID            REPOSITORY          TAG
c43a65faae57        tomcat              latest
f0b8a9a54136        nginx               latest
2c9028880e58        mysql               5.7
d1165f221234        hello-world         latest
50541622f4f1        redis               latest
d3d18514e50a        adminer             latest
be0dbf01a0f3        mysql               latest
867da7fcdf92        rabbitmq            3.8.3-management
```

## 删除镜像

如果要删除本地的镜像，可以使用 `docker image rm` 命令，其格式为：

```shell
$ docker image rm [选项] <镜像1> [<镜像2> ...]
```



 
