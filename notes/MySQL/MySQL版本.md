# MySQL版本

&emsp;&emsp;MySQL没有六代、七代，是直接从五代跳到第八代的。Maven仓库中来连接MySQL的依赖6.x和8.x支持MySQL 8.x的版本。

## MySQL 5.x 和 8.x 版本区别

&emsp;&emsp;MySQL 5.x 有两个数据库引擎 MySAML 和 InnoDB, 两者的区别是MySAML不支持事务，InnoDB支持事务。所以MySAML在执行效率上比InnoDB要高。

&emsp;&emsp;MySQL 8.x 只有InnoDB引擎, 并对InnoDB进行了优化。InnoDB不仅支持事务还提高了查询效率。


 