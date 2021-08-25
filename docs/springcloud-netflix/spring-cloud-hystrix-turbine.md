# 熔断器聚合仪表盘-Netflix Turbine



## 概述

在复杂的分布式系统中，相同服务的结点经常需要部署上百甚至上千个，很多时候，运维人员希望能够把相同服务的节点状态以一个整体集群的形式展现出来，这样可以更好的把握整个系统的状态。我们知道使用Hystrix Dashboard的话，只能看到单个应用内的服务信息，这明显不够。 

为此，Netflix 提供了一个开源项目 [Turbine](https://github.com/Netflix/Turbine) 。Turbine 是聚合服务器发送事件流数据的一个工具，它能把多个 `hystrix.stream` 的内容聚合为一个数据源供 Dashboard 展示，因此可以通过 Turbine 来监控集群下 Hystrix 的 Metrics 情况，

# 创建熔断监控中心



# 消费者开启熔断监控



# 测试熔断收集功能