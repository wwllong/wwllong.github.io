

# Docker 架构



本节简单介绍一下Docker的架构。

## Docker引擎

Docker 引擎是一个包含以下主要组件的客户端服务器（C/S）应用程序。

- Server Docker Daemon：一种服务器，它是一种称为守护进程并且长时间运行的程序。
- REST API：用于指定程序可以用来与守护进程通信的接口，并指示它做什么。
- Client Docker CLI：一个有命令行界面 (CLI) 工具的客户端。主要管理网络、容器、镜像、数据卷四个模块。

Docker 引擎组件的流程如下图所示：

![Docker 引擎](./imgs/docker_3.png)

## Docker系统架构

由上述可知，Docker 使用客户端-服务器 (C/S) 架构模式，使用远程 API 来管理和创建 Docker 容器。

**Docker 容器通过 Docker 镜像来创建。容器与镜像的关系类似于面向对象编程中的对象与类**。

| Docker | 面向对象 |
| ------ | -------- |
| 容器   | 对象     |
| 镜像   | 类       |

Docker架构图以及介绍：

![Docker_架构](./imgs/docker_frame.png)

| 概念              | 说明                                                         |
| :---------------- | :----------------------------------------------------------- |
| 镜像(Images)      | Docker 镜像是用于创建 Docker 容器的模板。                    |
| 容器(Container)   | 容器是独立运行的一个或一组应用。                             |
| 客户端(Client)    | Docker 客户端通过命令行或者其他工具使用 [Docker API ](https://docs.docker.com/reference/api/docker_remote_api) 与 Docker 的守护进程通信。 |
| 主机(Docker Host) | 一个物理或者虚拟的机器用于执行 Docker 守护进程和容器。       |
| 仓库(Registry)    | Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。[Docker Hub](https://hub.docker.com/) 提供了庞大的镜像集合供使用 |

