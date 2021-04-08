# 速记

1. **关于高可用、高并发、高性能**：属于分布式框架设计需要考虑的点。
   * 高可用：保证系统一直可用；
   * 高并发：保证系统能被同时并行处理很多请求；
   * 高性能：指程序处理速度非常快，所占内存少，cpu占用率低。

2. **关于微服务架构的数据库**：在微服务架构中，每一个服务有自己的数据库，所以我们单个数据库中部分数据的外键取消了，导致不同数据库中的数据相互使用时必须重复数据，导致部分数据冗余。

3. 三个名词：IaaS、PaaS、SaaS 即云计算的三种服务模式
   * **SaaS**：Software-as-a-Service（软件即服务）提供给客户的服务是运营商运行在云计算基础设施上的应用程序，用户可以在各种设备上通过客户端界面访问，如浏览器。消费者不需要管理或控制任何云计算基础设施，包括网络、服务器、操作系统、存储等等；
   * **PaaS**：Platform-as-a-Service（平台即服务）提供给消费者的服务是把客户采用提供的开发语言和工具（例如Java，python, .Net等）开发的或收购的应用程序部署到供应商的云计算基础设施上去。
   * **IaaS**： Infrastructure-as-a-Service（基础设施即服务）提供给消费者的服务是对所有计算基础设施的利用，包括处理CPU、内存、存储、网络和其它基本的计算资源，用户能够部署和运行任意软件，包括操作系统和应用程序。

4. **CAP定理：一个分布式系统最多只能同时满足一致性（Consistency）、可用性（Availability）和分区容错性（Partition tolerance）这三项中的两项** 。
   * 一致性（Consistency）：一致性指 “all nodes see the same data at the same time”，即更新操作成功并返回客户端完成后，所有节点在同一时间的数据完全一致。
   * 可用性（Availability）：可用性指“Reads and writes always succeed”，即服务一直可用，而且是正常响应时间。
   * 分区容错性（Partition tolerance）：分区容错性指“the system continues to operate despite arbitrary message loss or failure of part of the system”，即分布式系统在遇到某节点或网络分区故障的时候，仍然能够对外提供满足一致性和可用性的服务。

