# Ubuntu 设置静态IP

## 概述

本教程记录Ubuntu各个版本的静态固定IP地址的设置。

## 基础概念简述

这里作一些基础概念的简述，做一些了解。

[DHCP](https://baike.baidu.com/item/DHCP/218195?fr=aladdin) ：动态主机分配协议，自动分配IP地址和网关等等（路由器提供），这种协议有租期和自动续约的概念，说明是不固定的。

IP地址：简单理解为PC的网络地址。

子网掩码：划分网段的范围。例如IP地址为192.168.121.1 ，子网掩码为 255.255.255.0 ，改机器可跟 254 的台机器在一个局域网。linux常用24来表示 255.255.255.0，表示从左往右有24个1。

网关：IP地址通过网关去联网，一般是交换机地址，交换机再通过路由器联网。

## 查看网卡

``` shell
wenwl@ubuntu:~$ ip addr
wenwl@ubuntu:~$ ifconfig
```

## 修改配置文件

- Ubuntu 16.x 和 Ubuntu 18.x：默认网卡的配置文件路径在 `/etc/netplan/50-cloud-init.yaml`。

- Ubuntu 20.x ：默认网卡的配置文件路径依旧在`/etc/netplan/*.yaml`下，我见过的配置文件名称为 `50-cloud-init.yaml`或 `00-installer-config.yaml`, 可以通过查看内容是否是网卡配置文件：

  ``` shell
  wenwl@ubuntu:~$ cat /etc/netplan/50-cloud-init.yaml
  ```

大家根据实际需要配置IP地址。

``` shell
wenwl@ubuntu:~$ sudo vi /etc/netplan/50-cloud-init.yaml
```

假如要配置IP地址为192.168.1.100，子网掩码24位即255.255.255.0，网关设置为192.168.1.1，DNS配置为 223.5.5.5, 223.6.6.6（阿里云共用DNS），最后配置如下：

``` shell
network:
    ethernets:
        ens33: #配置的网卡的名称
            dhcp4: no #关闭DHCP，如果需要打开DHCP则写yes
            addresses: [192.168.1.100/24] #配置的静态ip地址和掩码
            optional: true
            gateway4: 192.168.1.1 #网关地址
            nameservers:
                    addresses: [223.5.5.5, 223.6.6.6] #DNS服务器地址，多个DNS服务器地址需要用英文逗号分隔开
 
    version: 2
    renderer: networkd  #指定后端采用systemd-networkd或者Network Manager，可不填写则默认使用systemd-workd
```

## 应用配置

在修改完配置文件后，输入以下指令应用新的网络配置：

``` shell
wenwl@ubuntu:~$ sudo netplan apply
```
