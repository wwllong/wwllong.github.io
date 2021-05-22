# Docker 容器基本操作

容器是 Docker 又一核心概念。简单的说，容器是独立运行的一个或一组应用，以及它们的运行态环境。对应的，(传统）虚拟机可以理解为模拟运行的一整套操作系统（提供了运行态环境和其他系统环境）和跑在上面的应用。

本章将具体介绍如何来管理一个容器，包括容器查询、创建、启动和停止等操作。

## 查询容器

通过`docker ps` 或者 `docker container ls` 命令来查看容器信息。

``` shell
wenwl@ubuntu:~$ docker ps # 查询当前运行的容器
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                       NAMES
1d8c98d64b8e        tomcat              "catalina.sh run"        5 hours ago         Up 5 hours          0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   mystifying_franklin
6aca5ee42415        redis               "docker-entrypoint.s…"   9 months ago        Up 6 hours          0.0.0.0:6379->6379/tcp, :::6379->6379/tcp   redis
wenwl@ubuntu:~$ docker ps -a # 查询所有容器运行历史记录（包含运行状态和终止状态）
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS                     PORTS                                       NAMES
1d8c98d64b8e        tomcat                      "catalina.sh run"        5 hours ago         Up 5 hours                 0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   mystifying_franklin
6aca5ee42415        redis                       "docker-entrypoint.s…"   9 months ago        Up 6 hours                 0.0.0.0:6379->6379/tcp, :::6379->6379/tcp   redis
aa9ba599e801        adminer                     "entrypoint.sh docke…"   9 months ago        Exited (0) 4 minutes ago                                               mysql_adminer_1_a20b87b12b6b
b4b3f94f7916        mysql                       "docker-entrypoint.s…"   9 months ago        Exited (0) 4 minutes ago                                               mysql_db_1_69414e4fbf22
bab4361d0aae        rabbitmq:3.8.3-management   "docker-entrypoint.s…"   10 months ago       Exited (0) 4 minutes ago                                               rabbitmq
```

## 容器创建和运行

启动容器主要命令为`docker run`，启动的方式主要有两种：一种是基于镜像新建一个容器并启动，另一种是将在终止状态（`Exited`）的容器重新启动。

### 基于镜像新建容器并启动

利用 `docker run` 命令新建并启动：

``` bash
# 使用tomcat镜像创建一个容器，命名为tomcat，宿主机端口8080（左）映射容器端口8080（右侧）
wenwl@ubuntu:~$ docker run -p 8080:8080 --name tomcat tomcat 
NOTE: Picked up JDK_JAVA_OPTIONS:  --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-
...... # 篇幅有限忽略
22-May-2021 15:44:59.699 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
22-May-2021 15:44:59.743 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in [313] milliseconds
```

运行上诉命令，当看到Server startup 即运行成功。但是这种运行方式是阻塞在控制台的，当中断命令容器就会被终止。这显然是不可取的，我们应该要以守护态运行（后台运行）容器，后续会介绍。

::: tip Docker创建容器标准操作

当利用 `docker run` 来创建容器时，Docker 在后台运行的标准操作包括：

- 检查本地是否存在指定的镜像，不存在就从公有仓库下载
- 利用镜像创建并启动一个容器
- 分配一个文件系统，并在只读的镜像层外面挂载一层可读写层
- 从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去
- 从地址池配置一个 ip 地址给容器
- 执行用户指定的应用程序
- 执行完毕后容器被终止

:::

### 重启终止状态的容器

利用 `docker container start [CONTAINER ID or NAMES]` 命令，重启终止状态的容器：

通过`docker ps -a` 查看全部容器的列表，可以使用【CONTAINER ID】或者【NAMES】来重新启动【 STATUS 】为 Exited 的容器，这里以启动MySql为例：

``` shell
# 这个是先前被终止的MySql容器ID
wenwl@ubuntu:~$ docker container start b4b3f94f7916 
b4b3f94f7916
```

### 守护态运行

更多的时候，需要让 Docker 在后台运行而不是直接把执行命令的结果输出在当前宿主机下。此时，可以通过添加 `-d` 参数来实现。

先前的创建并运行容器命令 `docker run -p 8080:8080 --name tomcat tomcat ` ，容器会把输出的结果打印到宿主机上面，如果使用了 `-d` 参数运行容器：

``` shell
wenwl@ubuntu:~$ docker run -d -p 8080:8080 --name tomcat tomcat 
95bfac1f70fbf903278d99a4a91d924c212f10f7e8335b275d789c59d20216f1do
```

使用 `-d` 参数启动后会返回一个唯一的 id，此时容器会在后台运行并不会把输出的结果打印到宿主机上面，要获取容器的输出信息，可以通过`docker logs [CONTAINER ID or NAMES] ` 或者 `docker container logs [CONTAINER ID or NAMES]` 命令查看：

``` bash
# 查看容器log信息，ID可以换成NAMES
wenwl@ubuntu:~$ docker logs 95bfac1f70fbf903278d99a4a91d924c212f10f7e8335b275d789c59d20216f1 
NOTE: Picked up JDK_JAVA_OPTIONS:  --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.util.concurrent=ALL-UNNAMED --add-opens=java.rmi/sun.rmi.transport=ALL-UNNAMED
22-May-2021 16:41:40.630 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server version name:   Apache Tomcat/9.0.46
...... # 篇幅有限忽略
22-May-2021 16:41:41.934 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
22-May-2021 16:41:41.973 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in [232] milliseconds
```

::: tip 注意

容器是否会长久运行和 `docker run` 指定的命令有关，和 `-d` 参数无关。

在启动容器的时候，使用 `-- name` 给容器起别名，可以更加方便的操作容器。

:::

## 容器交互

在使用 `-d` 参数时，容器启动后会进入后台。某些时候需要进入容器进行操作，这个时候可以使用 `docker attach` 命令或 `docker exec` 命令，建立**伪终端**与Docker容器进行交互，推荐大家使用 `docker exec` 命令，原因见下文。

### attach 命令

`docker attach` 是 Docker 自带的命令：

```bash
# 创建并启动容器
wenwl@ubuntu:~$ docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"
b918befc4b2930170d9bcbc042a7e60a938c567ed04fe056251dd9c3f3e3d977
# 查看容器列表
wenwl@ubuntu:~$ docker ps
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                                                                                                                                NAMES
b918befc4b29        ubuntu                      "/bin/sh -c 'while t…"   3 minutes ago       Up 3 minutes
# 建立交互终端
wenwl@ubuntu:~$ docker attach b918befc4b29
hello world
hello world
hello world
^C # 这里强制退出，后续想重新连接，发现容器已经被终止。
wenwl@ubuntu:~$ docker attach b918befc4b29
You cannot attach to a stopped container, start it first
```

::: tip 注意

用attach命令的建立的交互终端，当这个终端（stdin）exit，会导致容器的停止。

:::

### exec命令

`docker exec` 后边可以跟多个参数，这里主要说明 `-i`和`-t` 参数，更多参数说明请使用 `docker exec --help` 查看。

-  `-i` 参数：让容器的标准输入保持打开。
-  `-t` 参数：让Docker分配一个伪终端（pseudo-tty）并绑定到容器的标准输入上。

只用 `-i` 参数时，没有我们熟悉的 Linux 命令提示符界面，但命令执行结果仍然可以返回，只有两者一起使用时 `-it` ，则可以看到我们熟悉的 Linux 命令提示符：

```bash
# 创建并启动容器
docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"
b62795961c531f9e8ea351d038902a5ac9eb53048651178b146cf30d0947d939
# 查看容器列表
wenwl@ubuntu:~$ docker ps
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                                                                                                                                NAMES
b62795961c53        ubuntu                      "/bin/sh -c 'while t…"   9 seconds ago       Up 8 seconds                                                                                                                                             quizzical_taussig
# 建立交互终端（-i）
wenwl@ubuntu:~$ docker exec -i b62795961c53 bash
ls
bin
boot
dev
...
^C # 这里强制退出，重新连接（-it）
wenwl@ubuntu:~$ docker exec -it b62795961c53 bash
root@b62795961c53:/# ls
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```

::: tip 注意

用exec命令的建立的交互终端，当这个终端（stdin）exit，不会导致容器的停止。

:::

这就是为什么推荐大家使用 `docker exec` 的原因。

顺带一提，我们知道容器的核心为所执行的应用程序，所需要的资源都是应用程序运行所必需的，除此之外，并没有其它的资源，我们可以在伪终端中利用 `ps` 或 `top` 来查看进程信息：

``` bash
root@b62795961c53:/# ps
    PID TTY          TIME CMD
    114 pts/0    00:00:00 bash
    412 pts/0    00:00:00 ps
```

可见，容器中仅运行了指定的 bash 应用。这种特点使得 Docker 对资源的利用率极高，是货真价实的轻量级虚拟化。

## 终止和删除容器

### 终止容器运行

可以使用`docker stop` 或者 `docker container stop` 来终止一个运行中的容器。

值得注意的是：当 Docker 容器中指定的应用终结时，容器也自动终止。例如只启动了一个终端的容器，用户通过 `exit` 命令或 `Ctrl+d` 来退出终端时，所创建的容器立刻终止。

``` bash
# 启动容器
wenwl@ubuntu:~$ docker run -d -p 8080:8080 --name tomcat tomcat
52da0ad3c93b1b862aa7ff84dc5eb93fcea93fe86362701f39420d61feee51d1
# 终止容器
wenwl@ubuntu:~$ docker stop tomcat
tomcat
# 重启容器
wenwl@ubuntu:~$ docker container start tomcat
tomcat
```

如前面章节所说，终止状态的容器信息可以用 `docker ps -a `或者`docker container ls -a` 命令看到，并且可以通过 `docker container start` 命令来重新启动，此外，`docker container restart` 命令会将一个运行态的容器终止，然后再重新启动它。

### 删除容器

通常删除容器之前，需要先终止容器再删除：

``` bash
docker rm [CONTAINER ID or NAMES]
# 强制删除命令，但实质上也是先停止，再删除
docker rm -f [CONTAINER ID or NAMES]
```

批量所有终止的容器：

``` bash
wenwl@ubuntu:~$ docker container prune
WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
```



