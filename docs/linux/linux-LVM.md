# Linux LVM 磁盘扩容

## LVM基本概念

| 概念                            | 说明                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| PV (Physical volume)，物理卷    | 可以在上面建立卷组的媒介，可以是硬盘分区，也可以是硬盘本身或者回环文件（ loopback file ）。<br />物理卷包括一个特殊的 header，其余部分被切割为一块块物理区域（ physical extents ）。 |
| VG (Volume group)，卷组         | 将一组物理卷收集为一个管理单元。                             |
| LV (Logical volume )，逻辑卷    | 虚拟分区，由物理区域（physical extents）组成。               |
| PE (Physical extent )，物理区域 | 硬盘可供指派给逻辑卷的最小单位（通常为 4MB）。               |



## 磁盘操作相关命令

| 指令      | 说明                       |
| --------- | -------------------------- |
| df -h     | 查看挂载点                 |
| lvdisplay | 显示当前的 logical volume  |
| vgdisplay | 显示当前的 volume group    |
| pvdisplay | 显示当前的 physical volume |



## 开始 LVM 扩容


参考：
[Linux LVM 磁盘扩容](https://funtl.com/zh/linux/Linux-LVM-%E7%A3%81%E7%9B%98%E6%89%A9%E5%AE%B9.html#lvm-%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)